"use client";

import { ArticleContent } from "@/types/content";
import styles from "./cards.module.css";

interface ArticleCardProps {
  content: ArticleContent;
}

export function ArticleCard({ content }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.topic}>{content.category?.toUpperCase() || "ARTICLE"}</span>
        <div className={styles.cardActions}>
          <button type="button" aria-label="Save this lesson">
            ☆
          </button>
          <button type="button" aria-label="More options">
            •••
          </button>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.illustration} aria-hidden="true">
          <div className={styles.illustrationPlaceholder} />
        </div>
        <div className={styles.content}>
          <p className={styles.lessonNumber}>{content.tags?.[0]?.toUpperCase() || "ARTICLE"}</p>
          <h2>{content.title}</h2>
          <p className={styles.description}>{content.body}</p>
          <div className={styles.cardMeta}>
            <span>{content.readingTimeMinutes} min read</span>
            <span>{content.category || "Learning"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
