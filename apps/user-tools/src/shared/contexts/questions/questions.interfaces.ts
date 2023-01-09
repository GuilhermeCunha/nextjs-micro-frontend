import { Question } from "shared/entities/question";

export type QuestionsContextContextData = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};
