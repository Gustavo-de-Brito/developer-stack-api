import { Answer } from '@prisma/client';
import { prisma } from '../config/database';
import { AnswerData } from '../types/answerTypes';

export async function insert(answer: AnswerData, questionId: number) {
  await prisma.answer.create({ data: {...answer, questionId} })
}

export async function getAnswersByQuestionId(questionId: number): Promise<Answer[]> {
  const answers: Answer[] = await prisma.answer.findMany(
    { 
      where: { questionId }
    }
  );

  return answers;
}