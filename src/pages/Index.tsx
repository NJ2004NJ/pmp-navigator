import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Rocket, Award, Shield, FileText, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const features = [
  { icon: BookOpen, title: "12 Princípios PMBOK", desc: "Aprenda os fundamentos com exemplos práticos", path: "/principles" },
  { icon: Target, title: "8 Domínios de Desempenho", desc: "Domine cada área do gerenciamento de projetos", path: "/domains" },
  { icon: Users, title: "Casos Reais", desc: "NASA, Petrobras, Total e projetos globais", path: "/cases" },
  { icon: Award, title: "200 Questões PMP", desc: "Prepare-se para a certificação com quiz interativo", path: "/quiz" },
  { icon: Sparkles, title: "Segredos do PMBOK", desc: "Insights exclusivos que fazem a diferença", path: "/secrets" },
  { icon: FileText, title: "Documentação Legal", desc: "Termos, privacidade e conformidade", path: "/legal" },
];

export default function Index() {
  const navigate = useNavigate();
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Project Management" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/30">
              PMBOK® 7ª Edição • Guia Completo
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Domine o <span className="text-gradient-primary">Gerenciamento de Projetos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Aprenda com projetos reais da NASA, indústria offshore e casos globais. 
              Prepare-se para o PMP com 200 questões interativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/quiz')}>
                <Award className="mr-2 h-5 w-5" />
                Iniciar Quiz PMP
              </Button>
              <Button variant="glass" size="xl" onClick={() => setShowGuide(true)}>
                <HelpCircle className="mr-2 h-5 w-5" />
                Como Usar o App
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 animate-bounce"
          >
            <ChevronRight className="h-8 w-8 text-primary rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore o Conhecimento</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa para dominar o PMBOK 7 e conquistar sua certificação PMP
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(feature.path)}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 cursor-pointer transition-all duration-300 hover:shadow-glow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12", label: "Princípios" },
              { value: "8", label: "Domínios" },
              { value: "200", label: "Questões" },
              { value: "5", label: "Casos Reais" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PWA Notice */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 rounded-2xl glass-card border border-primary/20">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Funciona Offline</h3>
            <p className="text-muted-foreground mb-6">
              Instale o app no seu dispositivo e estude mesmo sem conexão à internet. 
              Todo o conteúdo fica disponível offline após a primeira visita.
            </p>
            <Button variant="outline" onClick={() => navigate('/install')}>
              Saiba Como Instalar
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowGuide(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-8 max-w-lg w-full border border-border shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Como Usar o PMBOK Master</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">1. Aprenda os Fundamentos:</strong> Explore os 12 Princípios e 8 Domínios de Desempenho do PMBOK 7.</p>
              <p><strong className="text-foreground">2. Estude Casos Reais:</strong> Veja como o PMBOK é aplicado em projetos da NASA e indústria offshore.</p>
              <p><strong className="text-foreground">3. Descubra os Segredos:</strong> Insights exclusivos que transformam gerentes bons em excepcionais.</p>
              <p><strong className="text-foreground">4. Pratique com Questões:</strong> 200 questões organizadas por domínio para sua preparação PMP.</p>
              <p><strong className="text-foreground">5. Instale para Offline:</strong> Use o app mesmo sem internet!</p>
            </div>
            <Button className="w-full mt-6" onClick={() => setShowGuide(false)}>Entendi!</Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
