import Joi from 'joi';
import { AnswerData } from '../types/answerTypes';

export const answerSchema = Joi.object<AnswerData>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
