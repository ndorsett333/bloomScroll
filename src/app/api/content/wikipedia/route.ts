import { NextResponse } from "next/server";
import type { ArticleContent } from "@/types/content";

interface WikipediaSummary {
  title?: string;
  extract?: string;
  description?: string;
  content_urls?: {
    desktop?: {
      page?: string;
    };
  };
}

const wikipediaRandomSummaryUrl =
  "https://en.wikipedia.org/api/rest_v1/page/random/summary";

function estimateReadingTime(text: string) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 180));
}

export async function GET() {
  try {
    const response = await fetch(wikipediaRandomSummaryUrl, {
      headers: {
        "User-Agent": "bloomScroll/0.1 (https://github.com/ndorsett333/bloomScroll)",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`Wikipedia responded with ${response.status}`);
    }

    const summary = (await response.json()) as WikipediaSummary;
    if (!summary.title || !summary.extract) {
      throw new Error("Wikipedia response did not include an article summary");
    }

    const article: ArticleContent = {
      id: `wikipedia-${encodeURIComponent(summary.title.toLowerCase())}`,
      type: "article",
      title: summary.title,
      body: summary.extract,
      summary: summary.description,
      readingTimeMinutes: estimateReadingTime(summary.extract),
      category: "Wikipedia",
      tags: ["wikipedia"],
      source: summary.content_urls?.desktop?.page ?? "Wikipedia",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(article, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Unable to load a Wikipedia summary", error);
    return NextResponse.json(
      { error: "Unable to load a Wikipedia article right now." },
      { status: 502 },
    );
  }
}