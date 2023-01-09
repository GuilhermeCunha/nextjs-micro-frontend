import { useCallback, useEffect, useState } from "react";
import { Question } from "shared/entities/question";
import { CreateQuestion, QuestionsService } from "shared/services/questions";

const questionsService = new QuestionsService();

export type UseQuestionsModuleProps = {
  defaultQuestions: Question[];
};
const useQuestionsModule = ({
  defaultQuestions = [],
}: UseQuestionsModuleProps) => {
  const [questions, setQuestions] = useState<Question[]>(defaultQuestions);

  const loadQuestions = useCallback(async () => {
    const newQuestions = await questionsService.getMany({});

    setQuestions(newQuestions.results);
  }, []);

  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createQuestion = useCallback(
    async (data: CreateQuestion) => {
      await questionsService.create(data);

      await loadQuestions();
    },
    [loadQuestions]
  );

  return {
    questions,
    loadQuestions,
    createQuestion,
  };
};

export default useQuestionsModule;
