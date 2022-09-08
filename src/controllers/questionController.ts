import { Request, Response } from 'express';
import { QuestionData } from '../types/questionTypes';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';
import { AnswerData } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  const questionData: QuestionData = req.body;

  await questionService.addNewQuestion(questionData);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);
  const answer: AnswerData = req.body;

  await answerService.addNewAnswer(questionId, answer);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId:number = Number(req.params.id);

  const questionData = await questionService.getQuestion(questionId);

  res.status(200).send(questionData);
}
