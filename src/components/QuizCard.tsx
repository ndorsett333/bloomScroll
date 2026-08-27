"use client";

import { QuizContent } from "@/types/content";
import styles from "./cards.module.css";
import { useState } from "react";

interface QuizCardProps {
  content: QuizContent;
}

export function QuizCard({ content }: QuizCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedIndex(index);
    setAnswered(true);
  };

  const isCorrect = selectedIndex !== null && content.options[selectedIndex].isCorrect;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.topic}>{content.category?.toUpperCase() || "QUIZ"}</span>
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
          <p className={styles.lessonNumber}>QUIZ / {content.difficulty?.toUpperCase() || "EASY"}</p>
          <h2>{content.question}</h2>

          <div className={styles.optionsContainer}>
            {content.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`${styles.optionButton} ${
                  selectedIndex === index
                    ? isCorrect
                      ? styles.optionCorrect
                      : styles.optionIncorrect
                    : ""
                }`}
                type="button"
              >
                {option.text}
              </button>
            ))}
          </div>

          {answered && (
            <div className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
              <p className={styles.feedbackLabel}>{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</p>
              {content.explanation && <p className={styles.explanation}>{content.explanation}</p>}
            </div>
          )}

          <div className={styles.cardMeta}>
            <span>{content.category || "Quiz"}</span>
            <span>{content.difficulty || "Easy"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
