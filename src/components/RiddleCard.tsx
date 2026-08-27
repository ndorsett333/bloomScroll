"use client";

import { useState } from "react";
import { RiddleContent } from "@/types/content";
import styles from "./cards.module.css";

interface RiddleCardProps {
  content: RiddleContent;
}

export function RiddleCard({ content }: RiddleCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.topic}>{content.category?.toUpperCase() || "RIDDLE"}</span>
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
          <p className={styles.lessonNumber}>RIDDLE / {content.difficulty?.toUpperCase() || "MEDIUM"}</p>
          <h2>{content.title}</h2>
          <p className={styles.description}>{content.question}</p>

          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              className={styles.revealButton}
              type="button"
            >
              Tap to reveal answer
            </button>
          )}

          {revealed && (
            <div className={styles.answerBox}>
              <p className={styles.answerLabel}>Answer:</p>
              <p className={styles.answer}>{content.answer}</p>
              {content.hint && <p className={styles.hint}>Hint: {content.hint}</p>}
            </div>
          )}

          <div className={styles.cardMeta}>
            <span>{content.category || "Puzzle"}</span>
            <span>Think time</span>
          </div>
        </div>
      </div>
    </article>
  );
}
