import { prisma } from '../config/database';
import { QuestionData } from '../types/questionTypes';
import { Question } from '@prisma/client';

export async function insert(question: QuestionData) {
  await prisma.question.create({ data: question });
}

export async function getAllQuestions(): Promise<Question[]> {
  const questions: Question[] = await prisma.question.findMany();

  return questions;
}

export async function getQuestionById(questionId: number): Promise<Question| null> {
  const question: Question | null = await prisma.question.findFirst(
    {
      where: { id: questionId }
    }
  )

  return question;
}