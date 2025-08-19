/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  getAllReadingQuestions,
  getAllWritingQuestions,
  updateReadingQuestion,
  updateWritingQuestion,
  deleteReadingQuestion,
  deleteWritingQuestion,
} from "@/services/question-service";
import { toast } from "sonner";
import type { Question } from "@/types/index";

const useQuestions = () => {
  const { token } = useAuth();
  const [readingQuestions, setReadingQuestions] = useState<Question[]>([]);
  const [writingQuestions, setWritingQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState({
    reading: false,
    writing: false,
    updating: false,
    deleting: false,
  });
  const [error, setError] = useState<{
    reading: string | null;
    writing: string | null;
    updating: string | null;
    deleting: string | null;
  }>({
    reading: null,
    writing: null,
    updating: null,
    deleting: null,
  });

  const fetchReadingQuestions = async () => {
    if (!token) return;
    setLoading((p) => ({ ...p, reading: true }));
    setError((p) => ({ ...p, reading: null }));
    try {
      const questions = await getAllReadingQuestions(token);
      setReadingQuestions(questions);
      console.log("Reading questions loaded:", questions.length);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to fetch reading questions";
      setError((p) => ({ ...p, reading: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setLoading((p) => ({ ...p, reading: false }));
    }
  };

  const fetchWritingQuestions = async () => {
    if (!token) return;
    setLoading((p) => ({ ...p, writing: true }));
    setError((p) => ({ ...p, writing: null }));
    try {
      const questions = await getAllWritingQuestions(token);
      setWritingQuestions(questions);
      console.log("Writing questions loaded:", questions.length);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to fetch writing questions";
      setError((p) => ({ ...p, writing: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setLoading((p) => ({ ...p, writing: false }));
    }
  };

  const updateQuestion = async (type: "reading" | "writing", id: string, data: { word: string }) => {
    if (!token) return;
    setLoading((p) => ({ ...p, updating: true }));
    setError((p) => ({ ...p, updating: null }));
    try {
      const response =
        type === "reading"
          ? await updateReadingQuestion(id, data, token)
          : await updateWritingQuestion(id, data, token);

      if (response.data?.question) {
        if (type === "reading") {
          setReadingQuestions((prev) =>
            prev.map((q) => (q._id === id ? response.data.question : q))
          );
        } else {
          setWritingQuestions((prev) =>
            prev.map((q) => (q._id === id ? response.data.question : q))
          );
        }
        toast.success("Question Updated Successfully");
        return true;
      }
      return false;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || "Error updating question";
      setError((p) => ({ ...p, updating: errorMessage }));
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading((p) => ({ ...p, updating: false }));
    }
  };

  const deleteQuestion = async (type: "reading" | "writing", id: string) => {
    if (!token) return;
    setLoading((p) => ({ ...p, deleting: true }));
    setError((p) => ({ ...p, deleting: null }));
    try {
      const response =
        type === "reading" ? await deleteReadingQuestion(id, token) : await deleteWritingQuestion(id, token);

      if (response.data?.message) {
        if (type === "reading") {
          setReadingQuestions((prev) => prev.filter((q) => q._id !== id));
        } else {
          setWritingQuestions((prev) => prev.filter((q) => q._id !== id));
        }
        toast.success("Question deleted successfully");
        return true;
      }
      return false;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || "Error deleting question";
      setError((p) => ({ ...p, deleting: errorMessage }));
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading((p) => ({ ...p, deleting: false }));
    }
  };

  useEffect(() => {
    if (token) {
      fetchReadingQuestions();
      fetchWritingQuestions();
    }
  }, [token]);

  return {
    readingQuestions,
    writingQuestions,
    loading,
    error,
    fetchReadingQuestions,
    fetchWritingQuestions,
    updateQuestion,
    deleteQuestion,
  };
};

export default useQuestions;
