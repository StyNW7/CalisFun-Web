import { useState } from "react";
import type { Question } from "@/types/index";
import {
  getAllReadingQuestions,
  getAllWritingQuestions,
} from "../services/question-service";
import { toast } from "sonner";

export const useQuestion = (token: string) => {
  const [readingQuestions, setReadingQuestions] = useState<Question[]>([]);
  const [writingQuestions, setWritingQuestions] = useState<Question[]>([]);

  // Fetch all reading questions
  const fetchReadingQuestions = async () => {
    try {
      const response = await getAllReadingQuestions(token);

      if (Array.isArray(response)) {
        setReadingQuestions(response);
        console.log("Reading questions loaded:", response.length);
      } else {
        console.error("Unexpected response format:", response);
        toast.error("Received unexpected data format from server");
      }
    } catch (error) {
      console.error("Error fetching reading questions:", error);
      toast.error("Failed to load reading questions");
    }
  };

  // Fetch all writing questions
  const fetchWritingQuestions = async () => {
    try {
      const response = await getAllWritingQuestions(token);

      if (Array.isArray(response)) {
        setWritingQuestions(response);
        console.log("Writing questions loaded:", response.length);
      } else {
        console.error("Unexpected response format:", response);
        toast.error("Received unexpected data format from server");
      }
    } catch (error) {
      console.error("Error fetching writing questions:", error);
      toast.error("Failed to load writing questions");
    }
  };

  return {
    readingQuestions,
    writingQuestions,
    fetchReadingQuestions,
    fetchWritingQuestions,
  };
};

export default useQuestion