import { Answer } from "@prisma/client";

export type AnswerData = Omit<Answer, 'id' | 'questionId'>