import { Question } from '@prisma/client';

export type QuestionData = Omit<Question, 'id'>