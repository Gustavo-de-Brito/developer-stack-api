import { QuestionData } from '../types/questionTypes';
import * as questionRepository from '../repositories/questionRepository';
import { Question } from '@prisma/client';
import { Answer } from '@prisma/client';
import * as answerService from '../services/answerService';

export async function addNewQuestion(question: QuestionData) {
  await questionRepository.insert(question);
}

export async function getQuestions() {
  const questions: Question[] = await questionRepository.getAllQuestions();

  return {questions: questions};
}

export async function getQuestion(questionId: number) {
  const question:Question | null = await questionRepository.getQuestionById(questionId);
  const questionAnswers:Answer[] = await answerService.getAnswersByQuestion(questionId);

  return {...question, answers: questionAnswers };
}