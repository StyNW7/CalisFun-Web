/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Plus, Search, Edit, BookOpen, PenTool, Hash, Type, LetterTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useQuestions from "@/hooks/useQuestion";

export default function ManageQuestionsPage() {
  
  const [activeTab, setActiveTab] = useState<"reading" | "writing">("reading");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [editingQuestion, setEditingQuestion] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    readingQuestions,
    writingQuestions,
    loading,
    updateQuestion,
  } = useQuestions();

  const currentQuestions = activeTab === "reading" ? readingQuestions : writingQuestions;

  const filteredQuestions = currentQuestions.filter((question) => {
    const matchesSearch = question.word.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || question.level.toString() === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "letter":
        return <LetterTextIcon className="h-4 w-4" />;
      case "word":
        return <Type className="h-4 w-4" />;
      case "number":
        return <Hash className="h-4 w-4" />;
      default:
        return <Type className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "letter":
        return "bg-[#06D6A0]/10 text-[#06D6A0] border-[#06D6A0]/20";
      case "word":
        return "bg-[#FFB703]/10 text-[#FFB703] border-[#FFB703]/20";
      case "number":
        return "bg-[#E63946]/10 text-[#E63946] border-[#E63946]/20";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const handleEditQuestion = (question: any) => {
    setEditingQuestion({ ...question });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!editingQuestion) return;
    
    const success = await updateQuestion(
      activeTab,
      editingQuestion._id,
      { word: editingQuestion.word }
    );

    if (success) {
      setIsEditModalOpen(false);
      setEditingQuestion(null);
    }
  };

  return (
    <div className="p-6 space-y-6 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0] bg-clip-text text-transparent">
            Kelola Soal
          </h1>
          <p className="text-gray-600 font-medium">Manajemen bank soal untuk pembelajaran Baca dan Tulis</p>
        </div>

        <a href="/admin/questions/create">
          <Button className="bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0] hover:from-[#3D7BF7]/90 hover:to-[#06D6A0]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            <Plus className="h-4 w-4 mr-2" />
            Buat Soal Baru
          </Button>
        </a>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#06D6A0]/10 to-[#06D6A0]/5 border border-[#06D6A0]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#06D6A0]/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-[#06D6A0]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{readingQuestions.length}</p>
              <p className="text-sm text-gray-600 font-medium">Soal Baca</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFB703]/10 to-[#FFB703]/5 border border-[#FFB703]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#FFB703]/10 rounded-lg">
              <PenTool className="h-6 w-6 text-[#FFB703]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{writingQuestions.length}</p>
              <p className="text-sm text-gray-600 font-medium">Soal Tulis</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3D7BF7]/10 to-[#3D7BF7]/5 border border-[#3D7BF7]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#3D7BF7]/10 rounded-lg">
              <LetterTextIcon className="h-6 w-6 text-[#3D7BF7]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {[...readingQuestions, ...writingQuestions].filter((q) => q.category === "letter").length}
              </p>
              <p className="text-sm text-gray-600 font-medium">Soal Huruf</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#E63946]/10 to-[#E63946]/5 border border-[#E63946]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#E63946]/10 rounded-lg">
              <Hash className="h-6 w-6 text-[#E63946]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {[...readingQuestions, ...writingQuestions].filter((q) => q.category === "number").length}
              </p>
              <p className="text-sm text-gray-600 font-medium">Soal Angka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("reading")}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-200 relative ${
              activeTab === "reading"
                ? "text-[#06D6A0] bg-[#06D6A0]/5"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-4 w-4" />
              Soal Baca ({readingQuestions.length})
            </div>
            {activeTab === "reading" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06D6A0] to-[#06D6A0]/50 animate-in slide-in-from-left-full duration-300" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("writing")}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-200 relative ${
              activeTab === "writing"
                ? "text-[#FFB703] bg-[#FFB703]/5"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <PenTool className="h-4 w-4" />
              Soal Tulis ({writingQuestions.length})
            </div>
            {activeTab === "writing" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFB703] to-[#FFB703]/50 animate-in slide-in-from-left-full duration-300" />
            )}
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200 bg-gray-50/50">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari soal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-[#3D7BF7] focus:ring-[#3D7BF7]/20"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-white border-gray-200">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="letter">Huruf</SelectItem>
                  <SelectItem value="word">Kata</SelectItem>
                  <SelectItem value="number">Angka</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-32 bg-white border-gray-200">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Level</SelectItem>
                  <SelectItem value="1">Level 1</SelectItem>
                  <SelectItem value="2">Level 2</SelectItem>
                  <SelectItem value="3">Level 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Questions Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50">
                <TableHead className="font-semibold text-gray-900">Kategori</TableHead>
                <TableHead className="font-semibold text-gray-900">Level</TableHead>
                <TableHead className="font-semibold text-gray-900">Soal</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuestions.map((question, index) => (
                <TableRow
                  key={question._id}
                  className="hover:bg-gray-50/50 transition-colors duration-150"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell>
                    <Badge className={`${getCategoryColor(question.category)} border font-medium`}>
                      <div className="flex items-center gap-1.5">
                        {getCategoryIcon(question.category)}
                        {question.category === "letter" ? "Huruf" : question.category === "word" ? "Kata" : "Angka"}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      Level {question.level}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-mono text-lg font-semibold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg inline-block">
                      {question.word}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditQuestion(question)}
                        className="hover:bg-[#3D7BF7]/10 hover:border-[#3D7BF7]/20 hover:text-[#3D7BF7] transition-all duration-200"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-600 font-medium">Tidak ada soal yang ditemukan</p>
              <p className="text-sm text-gray-500">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}
        </div>
      </div>

      {/* Edit Question Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">Edit Soal</DialogTitle>
            <DialogDescription className="text-gray-600">
              Ubah konten soal. Kategori dan level tidak dapat diubah.
            </DialogDescription>
          </DialogHeader>

          {editingQuestion && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">Kategori</Label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  <Badge className={`${getCategoryColor(editingQuestion.category)} border font-medium`}>
                    <div className="flex items-center gap-1.5">
                      {getCategoryIcon(editingQuestion.category)}
                      {editingQuestion.category === "letter"
                        ? "Huruf"
                        : editingQuestion.category === "word"
                          ? "Kata"
                          : "Angka"}
                    </div>
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">Level</Label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  <Badge variant="outline" className="font-medium">
                    Level {editingQuestion.level}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="question" className="text-sm font-semibold text-gray-700">
                  Soal <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="question"
                  value={editingQuestion.word}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, word: e.target.value })}
                  placeholder="Masukkan soal..."
                  className="min-h-20 font-mono text-lg border-gray-200 focus:border-[#3D7BF7] focus:ring-[#3D7BF7]/20"
                />
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)} className="hover:bg-gray-50">
              Batal
            </Button>
            <Button
              onClick={handleSaveEdit}
              disabled={loading.updating}
              className="bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0] hover:from-[#3D7BF7]/90 hover:to-[#06D6A0]/90 text-white"
            >
              {loading.updating ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}