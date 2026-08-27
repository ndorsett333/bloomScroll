"use client";

import { PuzzleContent } from "@/types/content";
import styles from "./cards.module.css";
import { useState } from "react";

interface PuzzleCardProps {
  content: PuzzleContent;
}

export function PuzzleCard({ content }: PuzzleCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.topic}>{content.puzzleType?.toUpperCase() || "PUZZLE"}</span>
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
          <p className={styles.lessonNumber}>PUZZLE / {content.difficulty?.toUpperCase() || "MEDIUM"}</p>
          <h2>{content.title}</h2>
          <p className={styles.description}>{content.puzzleText}</p>

          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              className={styles.revealButton}
              type="button"
            >
              Show solution
            </button>
          )}

          {revealed && (
            <div className={styles.answerBox}>
              <p className={styles.answerLabel}>Solution:</p>
              <p className={styles.answer}>{content.solution}</p>
            </div>
          )}

          <div className={styles.cardMeta}>
            <span>{content.category || "Logic"}</span>
            <span>{content.difficulty || "Medium"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
