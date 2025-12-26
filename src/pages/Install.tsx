import { ArrowLeft, Download, Smartphone, Monitor, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Install() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Download className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Instale o App</h1>
          <p className="text-muted-foreground">Estude offline em qualquer lugar, a qualquer momento</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-bold">iPhone / iPad</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="font-bold text-primary">1.</span>Abra o app no Safari</li>
              <li className="flex gap-3"><span className="font-bold text-primary">2.</span>Toque no botão <Share className="inline h-4 w-4" /> Compartilhar</li>
              <li className="flex gap-3"><span className="font-bold text-primary">3.</span>Role e toque em "Adicionar à Tela de Início"</li>
              <li className="flex gap-3"><span className="font-bold text-primary">4.</span>Confirme tocando em "Adicionar"</li>
            </ol>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="h-8 w-8 text-success" />
              <h2 className="text-xl font-bold">Android</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="font-bold text-success">1.</span>Abra o app no Chrome</li>
              <li className="flex gap-3"><span className="font-bold text-success">2.</span>Toque no menu (⋮) no canto superior</li>
              <li className="flex gap-3"><span className="font-bold text-success">3.</span>Toque em "Adicionar à tela inicial"</li>
              <li className="flex gap-3"><span className="font-bold text-success">4.</span>Confirme tocando em "Adicionar"</li>
            </ol>
          </div>

          <div className="md:col-span-2 p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="h-8 w-8 text-info" />
              <h2 className="text-xl font-bold">Desktop (Chrome/Edge)</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="font-bold text-info">1.</span>Procure o ícone de instalação na barra de endereços</li>
              <li className="flex gap-3"><span className="font-bold text-info">2.</span>Clique em "Instalar" quando solicitado</li>
              <li className="flex gap-3"><span className="font-bold text-info">3.</span>O app abrirá em sua própria janela</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
          <h3 className="font-bold mb-2">Benefícios de Instalar</h3>
          <p className="text-muted-foreground">Acesso offline • Carregamento mais rápido • Experiência de app nativo • Sem propagandas</p>
        </div>
      </main>
    </div>
  );
}
