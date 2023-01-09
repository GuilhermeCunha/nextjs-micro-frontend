import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { Question } from "shared/entities/question";

const questions: Question[] = [
  {
    label: "{{Question 1}} ?",
    isDeleted: false,
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: {},
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({
        results: questions,
      });
      break;
    case "POST":
      const body = req.body;

      questions.push(body);

      res.status(200).json({
        results: questions,
      });
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withSentry(handler);
