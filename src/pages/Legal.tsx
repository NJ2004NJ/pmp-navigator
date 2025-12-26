import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Legal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}><ArrowLeft className="mr-2 h-4 w-4" />Voltar</Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 prose prose-invert max-w-none">
        <h1>Documentação Legal</h1>

        <h2>Termos de Uso</h2>
        <p>Ao utilizar o PMBOK Master, você concorda com estes termos. Este aplicativo é uma ferramenta educacional para preparação para certificação PMP e aprendizado de gerenciamento de projetos.</p>

        <h3>Licença de Uso</h3>
        <p>Este aplicativo é fornecido para uso pessoal e educacional. O conteúdo é baseado no PMBOK® Guide 7th Edition do Project Management Institute (PMI)®.</p>

        <h3>Marcas Registradas</h3>
        <p>PMBOK®, PMP®, e PMI® são marcas registradas do Project Management Institute, Inc. Este aplicativo não é afiliado, endossado ou patrocinado pelo PMI.</p>

        <h2>Política de Privacidade</h2>
        <p>O PMBOK Master respeita sua privacidade:</p>
        <ul>
          <li>Não coletamos dados pessoais identificáveis</li>
          <li>Todo o progresso do quiz é armazenado localmente no seu dispositivo</li>
          <li>Não utilizamos cookies de rastreamento de terceiros</li>
          <li>O aplicativo funciona offline após a primeira visita</li>
        </ul>

        <h2>Isenção de Responsabilidade</h2>
        <p>Este aplicativo é fornecido "como está" para fins educacionais. Não garantimos que o uso deste material resultará em aprovação no exame PMP. Recomendamos estudo adicional com materiais oficiais do PMI.</p>

        <h2>Direitos Autorais</h2>
        <p>O conteúdo original deste aplicativo é protegido por direitos autorais. O PMBOK® Guide e materiais relacionados são propriedade do PMI e são utilizados aqui para fins educacionais sob princípios de uso justo.</p>

        <h2>Contato</h2>
        <p>Para questões sobre estes termos ou o aplicativo, entre em contato através dos canais disponíveis na plataforma.</p>

        <p className="text-sm text-muted-foreground mt-8">Última atualização: Dezembro 2024</p>
      </main>
    </div>
  );
}
