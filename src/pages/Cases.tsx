import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { projectExamples } from '@/data/projectExamples';
import { useState } from 'react';

export default function Cases() {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const selected = projectExamples.find(p => p.id === selectedCase);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => selectedCase ? setSelectedCase(null) : navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />{selectedCase ? 'Voltar aos Casos' : 'Início'}
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {!selected ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Casos Reais de Projetos</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">Aprenda como o PMBOK é aplicado em megaprojetos globais da NASA, indústria offshore e mais.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectExamples.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedCase(project.id)}
                  className="rounded-xl bg-card border border-border p-6 cursor-pointer hover:border-primary/50 transition-all hover:shadow-glow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{project.flag}</span>
                    <div>
                      <h3 className="font-bold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.industry} • {project.country}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{selected.flag}</span>
              <div>
                <h1 className="text-3xl font-bold">{selected.name}</h1>
                <p className="text-muted-foreground">{selected.industry} • {selected.country}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold mb-3">Descrição do Projeto</h3>
                  <p className="text-muted-foreground">{selected.description}</p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold mb-3 flex items-center gap-2"><Target className="h-5 w-5 text-destructive" />Desafios</h3>
                  <ul className="space-y-2">
                    {selected.challenges.map((c, i) => <li key={i} className="text-sm text-muted-foreground">• {c}</li>)}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="font-bold mb-3 flex items-center gap-2 text-primary"><MapPin className="h-5 w-5" />Aplicações do PMBOK</h3>
                  <ul className="space-y-2">
                    {selected.pmbokApplications.map((a, i) => <li key={i} className="text-sm">• {a}</li>)}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold mb-3 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-warning" />Lições Aprendidas</h3>
                  <ul className="space-y-2">
                    {selected.lessons.map((l, i) => <li key={i} className="text-sm text-muted-foreground">• {l}</li>)}
                  </ul>
                </div>
              </div>

              <div>
                <div className="p-6 rounded-xl bg-secondary/50 border border-border sticky top-24">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" />Métricas-Chave</h3>
                  <div className="space-y-4">
                    {selected.keyMetrics.map((m, i) => (
                      <div key={i}>
                        <p className="text-sm text-muted-foreground">{m.label}</p>
                        <p className="text-xl font-bold text-primary">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
