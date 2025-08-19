import axios from "axios";
import type { Question } from "@/types/index";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const getAllReadingQuestions = async (token: string): Promise<Question[]> => {
  const response = await axios.get(`${API_BASE_URL}/reading/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return Array.isArray(response.data) ? response.data : response.data.questions ?? [];
};

export const getAllWritingQuestions = async (token: string): Promise<Question[]> => {
  const response = await axios.get(`${API_BASE_URL}/writing/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return Array.isArray(response.data) ? response.data : response.data.questions ?? [];
};

export const updateReadingQuestion = async (
  id: string,
  data: { word: string },
  token: string
) => {
  return axios.put(`${API_BASE_URL}/reading/update/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateWritingQuestion = async (
  id: string,
  data: { word: string },
  token: string
) => {
  return axios.put(`${API_BASE_URL}/writing/update/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteReadingQuestion = async (id: string, token: string) => {
  return axios.delete(`${API_BASE_URL}/reading/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteWritingQuestion = async (id: string, token: string) => {
  return axios.delete(`${API_BASE_URL}/writing/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};