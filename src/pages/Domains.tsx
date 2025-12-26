import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { performanceDomains } from '@/data/pmbokPrinciples';

export default function Domains() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">8 Domínios de Desempenho</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Áreas interativas e interdependentes críticas para a entrega eficaz de resultados do projeto.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {performanceDomains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className={`h-2 bg-gradient-to-r ${domain.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{domain.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{domain.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Resultados Esperados:</h4>
                  <ul className="space-y-1">
                    {domain.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Atividades-Chave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {domain.keyActivities.map((activity, j) => (
                      <span key={j} className="px-2 py-1 rounded-md bg-secondary text-xs">{activity}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
