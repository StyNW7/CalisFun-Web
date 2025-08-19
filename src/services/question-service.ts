// questionApi.ts
import apiRequest from "./api";
import type { ApiResponse, Question } from "@/types/index";

interface SingleQuestionResponse {
  question: Question;
  message?: string;
}

export const getReadingQuestions = async (childId: string, token: string) => {
  return apiRequest<SingleQuestionResponse>(`/reading/${childId}`, "GET", undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const getAllReadingQuestions = async (token: string): Promise<ApiResponse<Question[]>> => {
  return apiRequest<Question[]>('/reading/all', 'GET', undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const createReadingQuestion = async (data: { word: string; category: string }, token: string) => {
  return apiRequest<SingleQuestionResponse>("/reading/create", "POST", data, {
    Authorization: `Bearer ${token}`,
  });
};

export const updateReadingQuestion = async (id: string, data: { word: string }, token: string) => {
  return apiRequest<SingleQuestionResponse>(`/reading/update/${id}`, "PUT", data, {
    Authorization: `Bearer ${token}`,
  });
};

export const deleteReadingQuestion = async (id: string, token: string) => {
  return apiRequest<{ message: string }>(`/reading/delete/${id}`, "DELETE", undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const getWritingQuestions = async (childId: string, token: string) => {
  return apiRequest<SingleQuestionResponse>(`/writing/${childId}`, "GET", undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const getAllWritingQuestions = async (token: string): Promise<ApiResponse<Question[]>> => {
  return apiRequest<Question[]>("/writing/all", "GET", undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const createWritingQuestion = async (data: { word: string; category: string }, token: string) => {
  return apiRequest<SingleQuestionResponse>("/writing/create", "POST", data, {
    Authorization: `Bearer ${token}`,
  });
};

export const updateWritingQuestion = async (id: string, data: { word: string }, token: string) => {
  return apiRequest<SingleQuestionResponse>(`/writing/update/${id}`, "PUT", data, {
    Authorization: `Bearer ${token}`,
  });
};

export const deleteWritingQuestion = async (id: string, token: string) => {
  return apiRequest<{ message: string }>(`/writing/delete/${id}`, "DELETE", undefined, {
    Authorization: `Bearer ${token}`,
  });
};
