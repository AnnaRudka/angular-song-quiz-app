import { Answer } from "./answer.model";

export interface Question {
    id: string;
    genre: string;
    data: Answer[];
  };