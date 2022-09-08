import Joi from 'joi';
import { QuestionData } from '../types/questionTypes';

export const questionSchema = Joi.object<QuestionData>({
  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
