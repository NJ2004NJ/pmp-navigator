import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { pmbokPrinciples } from '@/data/pmbokPrinciples';
import { useState } from 'react';

export default function Principles() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">12 Princípios do PMBOK 7</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Princípios são diretrizes fundamentais que orientam o comportamento e decisões no gerenciamento de projetos.</p>
        </div>

        <div className="grid gap-6">
          {pmbokPrinciples.map((principle, i) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === principle.id ? null : principle.id)}
                className="w-full p-6 text-left flex items-start gap-4 hover:bg-secondary/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-primary font-medium">Princípio {principle.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </div>
              </button>

              {expandedId === principle.id && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="border-t border-border">
                  <div className="p-6 space-y-6 bg-secondary/20">
                    <div>
                      <h4 className="font-semibold mb-2">Detalhes</h4>
                      <p className="text-muted-foreground">{principle.details}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-primary">O Segredo</h4>
                      </div>
                      <p className="text-sm">{principle.secret}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Exemplo do Mundo Real</h4>
                      <p className="text-muted-foreground text-sm">{principle.realWorldExample}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
