import { AnswerData } from '../types/answerTypes';
import * as answerRepository from '../repositories/answerRepository';
import { Answer } from '@prisma/client';

export async function addNewAnswer(questonId: number, answer: AnswerData) {
  await answerRepository.insert(answer, questonId);
}

export async function getAnswersByQuestion(questionId: number): Promise<Answer[]> {
  const answers: Answer[] = await answerRepository.getAnswersByQuestionId(
    questionId
  );

  return answers;
}