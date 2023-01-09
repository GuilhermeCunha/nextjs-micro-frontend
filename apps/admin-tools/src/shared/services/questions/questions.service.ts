import { IQuestion } from "shared/entities/question";
import { ListManyResponse } from "shared/types";
import { api } from "shared/services/base";
import { CreateQuestion, GetManyQuestions } from "./questions.interfaces";

export class QuestionsService {
  path = "/questions";

  async getMany(
    params: GetManyQuestions
  ): Promise<ListManyResponse<IQuestion>> {
    const { data } = await api.get(this.path, {
      params,
    });

    return data;
  }

  async create({ question }: CreateQuestion): Promise<void> {
    await api.post(`${this.path}`, question);
  }

  async get(id: string): Promise<void> {
    await api.get(`${this.path}/${id}`);
  }
}
