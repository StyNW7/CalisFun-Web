/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Question {
  _id: string;
  word: string;
  category: 'word' | 'number' | 'letter';
  level: number;
  __v?: number;
}

export interface ApiResponse<T = any> {
  data?: T;              // main payload
  questions?: Question[]; // optional for older responses
  question?: Question;
  message?: string;
  status?: number;
}