import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { pmbokPrinciples } from '@/data/pmbokPrinciples';
import { useState } from 'react';

export default function Secrets() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Conteúdo Exclusivo</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Segredos do PMBOK</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights que transformam gerentes de projeto bons em excepcionais. 
            Conhecimento prático que não está nos livros.
          </p>
        </div>

        <div className="grid gap-6">
          {pmbokPrinciples.map((principle, i) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl border overflow-hidden ${revealed.includes(principle.id) ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <principle.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Princípio {principle.id}</p>
                      <h3 className="font-semibold">{principle.shortTitle}</h3>
                    </div>
                  </div>
                  {!revealed.includes(principle.id) ? (
                    <Button size="sm" variant="outline" onClick={() => setRevealed([...revealed, principle.id])}>
                      <Eye className="mr-2 h-4 w-4" />Revelar
                    </Button>
                  ) : (
                    <Lock className="h-5 w-5 text-primary" />
                  )}
                </div>

                {revealed.includes(principle.id) ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-background/50">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{principle.secret}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-4 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm text-muted-foreground">Clique em "Revelar" para descobrir o segredo...</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-card border border-primary/20 text-center">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">O Segredo Definitivo</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O verdadeiro segredo do gerenciamento de projetos não está em nenhuma metodologia ou ferramenta. 
            Está em <strong className="text-foreground">entender pessoas</strong>, construir 
            <strong className="text-foreground"> confiança</strong> e criar ambientes onde equipes podem 
            dar o seu melhor. Tudo o mais são apenas técnicas para facilitar isso.
          </p>
        </div>
      </main>
    </div>
  );
}
