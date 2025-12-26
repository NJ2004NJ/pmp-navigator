import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { pmpQuestions, domains } from '@/data/pmpQuestions';

export default function Quiz() {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);

  const filteredQuestions = useMemo(() => {
    if (!selectedDomain) return pmpQuestions;
    return pmpQuestions.filter(q => q.domain === selectedDomain);
  }, [selectedDomain]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
    setAnswered(a => [...a, currentQuestion.id]);
  };

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered([]);
  };

  if (showResult) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-background p-4 flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-lg w-full text-center">
          <Trophy className={`h-24 w-24 mx-auto mb-6 ${percentage >= 70 ? 'text-primary' : 'text-muted-foreground'}`} />
          <h2 className="text-3xl font-bold mb-2">Quiz Completo!</h2>
          <p className="text-5xl font-bold text-primary my-6">{percentage}%</p>
          <p className="text-muted-foreground mb-8">Você acertou {score} de {filteredQuestions.length} questões</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
            <Button onClick={resetQuiz}><RotateCcw className="mr-2 h-4 w-4" />Tentar Novamente</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
          <div className="text-sm text-muted-foreground">{currentIndex + 1} / {filteredQuestions.length}</div>
          <div className="text-sm font-medium text-primary">Pontos: {score}</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Domain Filter */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            <Button variant={!selectedDomain ? "default" : "outline"} size="sm" onClick={() => { setSelectedDomain(null); resetQuiz(); }}>
              <Filter className="mr-2 h-4 w-4" />Todos
            </Button>
            {domains.map(d => (
              <Button key={d} variant={selectedDomain === d ? "default" : "outline"} size="sm" onClick={() => { setSelectedDomain(d); resetQuiz(); }}>
                {d}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${currentQuestion.difficulty === 'easy' ? 'bg-success/20 text-success' : currentQuestion.difficulty === 'medium' ? 'bg-warning/20 text-warning' : 'bg-destructive/20 text-destructive'}`}>
                {currentQuestion.difficulty === 'easy' ? 'Fácil' : currentQuestion.difficulty === 'medium' ? 'Médio' : 'Difícil'}
              </span>
              <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = i === currentQuestion.correctAnswer;
                  const showCorrect = selectedAnswer !== null && isCorrect;
                  const showWrong = selectedAnswer !== null && isSelected && !isCorrect;

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-lg text-left transition-all border ${showCorrect ? 'border-success bg-success/10' : showWrong ? 'border-destructive bg-destructive/10' : isSelected ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50 hover:bg-secondary/50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {showCorrect && <CheckCircle className="h-5 w-5 text-success" />}
                        {showWrong && <XCircle className="h-5 w-5 text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedAnswer !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-semibold mb-2">Explicação:</h4>
                <p className="text-muted-foreground">{currentQuestion.explanation}</p>
              </motion.div>
            )}

            {selectedAnswer !== null && (
              <Button className="w-full" size="lg" onClick={nextQuestion}>
                {currentIndex < filteredQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
