import { Question } from "shared/entities/question";

export type GetManyQuestions = {};

export type CreateQuestion = {
  question: Question;
};
