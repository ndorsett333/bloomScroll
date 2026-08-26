/**
 * Content type definitions for bloomScroll learning cards.
 */

/** Shared fields across all content types */
export interface ContentBase {
  id: string;
  type: "article" | "riddle" | "puzzle" | "quiz";
  title: string;
  body: string;
  category?: string;
  tags?: string[];
  createdAt: string;
}

/** Article: micro-educational content with reading time */
export interface ArticleContent extends ContentBase {
  type: "article";
  summary?: string;
  readingTimeMinutes: number;
  source?: string;
}

/** Riddle: question with hidden answer, can be revealed */
export interface RiddleContent extends ContentBase {
  type: "riddle";
  question: string;
  answer: string;
  hint?: string;
  difficulty?: "easy" | "medium" | "hard";
}

/** Puzzle: logic or word puzzle with a solution */
export interface PuzzleContent extends ContentBase {
  type: "puzzle";
  puzzleText: string;
  solution: string;
  difficulty?: "easy" | "medium" | "hard";
  puzzleType?: "logic" | "word" | "math" | "visual";
}

/** Quiz: single multiple-choice question with instant feedback */
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizContent extends ContentBase {
  type: "quiz";
  question: string;
  options: QuizOption[];
  explanation?: string;
  difficulty?: "easy" | "medium" | "hard";
}

/** Union type for any content item */
export type ContentItem = ArticleContent | RiddleContent | PuzzleContent | QuizContent;

/** Type guard functions */
export function isArticle(item: ContentItem): item is ArticleContent {
  return item.type === "article";
}

export function isRiddle(item: ContentItem): item is RiddleContent {
  return item.type === "riddle";
}

export function isPuzzle(item: ContentItem): item is PuzzleContent {
  return item.type === "puzzle";
}

export function isQuiz(item: ContentItem): item is QuizContent {
  return item.type === "quiz";
}
