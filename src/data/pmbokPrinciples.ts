import { Users, Heart, Target, GitBranch, Crown, Settings, Star, Compass, TrendingUp, Shield, Lightbulb, type LucideIcon } from 'lucide-react';

export interface PMBOKPrinciple {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  icon: LucideIcon;
  secret: string;
  realWorldExample: string;
}

export const pmbokPrinciples: PMBOKPrinciple[] = [
  {
    id: 1,
    title: "Seja um Administrador Diligente, Respeitoso e Atencioso",
    shortTitle: "Stewardship",
    description: "Aja com integridade, cuidado e confiabilidade ao gerenciar recursos e decisões do projeto.",
    details: "Este princípio enfatiza a responsabilidade fiduciária do gerente de projeto. Significa tratar os recursos do projeto - financeiros, humanos, materiais - como se fossem seus próprios, mas sempre priorizando os interesses da organização e stakeholders.",
    icon: Heart,
    secret: "O verdadeiro segredo é entender que stewardship vai além de gerenciar recursos - é sobre criar um legado de confiança. Quando você demonstra cuidado genuíno, as pessoas naturalmente querem colaborar e compartilhar informações críticas que não seriam reveladas de outra forma.",
    realWorldExample: "Na NASA, antes do lançamento do Space Shuttle Columbia, engenheiros expressaram preocupações sobre os painéis térmicos. A cultura de stewardship deveria ter permitido que essas vozes fossem ouvidas. Projetos bem-sucedidos criam ambientes onde cada membro se sente responsável pelo sucesso coletivo."
  },
  {
    id: 2,
    title: "Crie um Ambiente de Equipe Colaborativo",
    shortTitle: "Colaboração",
    description: "Construa uma cultura de equipe onde todos contribuem, aprendem e crescem juntos.",
    details: "A colaboração eficaz vai além de reuniões e ferramentas - trata-se de criar segurança psicológica onde as pessoas podem assumir riscos, fazer perguntas e admitir erros sem medo de punição.",
    icon: Users,
    secret: "Times de alto desempenho não são criados por processos, mas por rituais que constroem confiança. O segredo é criar pequenas vitórias compartilhadas regularmente e celebrar não apenas resultados, mas o processo de aprendizado conjunto.",
    realWorldExample: "Projetos offshore no Brasil frequentemente reúnem engenheiros de múltiplas nacionalidades. Os projetos mais bem-sucedidos investem tempo em atividades de integração cultural e estabelecem 'normas de trabalho' que respeitam todas as perspectivas."
  },
  {
    id: 3,
    title: "Engaje Efetivamente com Stakeholders",
    shortTitle: "Stakeholders",
    description: "Entenda, envolva e responda às necessidades e expectativas de todas as partes interessadas.",
    details: "O engajamento eficaz requer compreensão profunda não apenas do que os stakeholders dizem querer, mas de suas motivações subjacentes, medos e aspirações. Cada stakeholder vê o projeto através de sua própria lente.",
    icon: Target,
    secret: "O segredo do engajamento de stakeholders é mapear não apenas poder e interesse, mas também as redes de influência ocultas. Frequentemente, assistentes executivos, gerentes médios e especialistas técnicos têm mais influência real do que os organogramas sugerem.",
    realWorldExample: "Em projetos de petróleo na Nigéria, as comunidades locais são stakeholders críticos. Empresas bem-sucedidas não apenas consultam - elas co-criam soluções e investem em desenvolvimento comunitário genuíno, construindo 'licença social para operar'."
  },
  {
    id: 4,
    title: "Foque no Valor",
    shortTitle: "Valor",
    description: "Avalie e ajuste continuamente o projeto para garantir entrega de valor aos stakeholders.",
    details: "Valor não é apenas financeiro - inclui benefícios estratégicos, sociais, ambientais e outros intangíveis. O foco em valor significa questionar constantemente se o que estamos construindo ainda é a coisa certa a fazer.",
    icon: Star,
    secret: "O verdadeiro foco em valor exige coragem para parar ou pivotar projetos que não entregam mais valor, mesmo com investimentos significativos. O 'custo afundado' não deve guiar decisões - apenas o valor futuro potencial.",
    realWorldExample: "A NASA cancelou várias missões planejadas quando análises mostraram que o valor científico não justificava os custos. Essa disciplina de valor permitiu redirecionar recursos para missões mais impactantes como os rovers de Marte."
  },
  {
    id: 5,
    title: "Reconheça, Avalie e Responda às Interações do Sistema",
    shortTitle: "Pensamento Sistêmico",
    description: "Entenda como os componentes do projeto interagem entre si e com o ambiente externo.",
    details: "Projetos existem dentro de sistemas maiores - organizações, mercados, comunidades, ecossistemas. Mudanças em uma parte do sistema criam ondulações que afetam outras partes de maneiras nem sempre óbvias.",
    icon: GitBranch,
    secret: "Mapear dependências óbvias é fácil. O segredo é identificar as dependências de segunda e terceira ordem - como uma decisão técnica afeta moral, como uma escolha de fornecedor impacta política organizacional.",
    realWorldExample: "Em megaprojetos offshore em Angola, uma simples mudança no design de um equipamento pode afetar cronograma de fabricação, logística de transporte, requisitos de içamento, treinamento de operadores e planos de manutenção futura."
  },
  {
    id: 6,
    title: "Demonstre Comportamentos de Liderança",
    shortTitle: "Liderança",
    description: "Inspire, motive e influencie a equipe e stakeholders para alcançar os objetivos do projeto.",
    details: "Liderança em projetos é situacional - diferentes contextos exigem diferentes estilos. O líder eficaz adapta sua abordagem baseado na maturidade da equipe, urgência da situação e cultura organizacional.",
    icon: Crown,
    secret: "Os melhores líderes de projeto não lideram pelo cargo, mas pela competência, integridade e serviço. Eles fazem as perguntas difíceis, dão más notícias quando necessário e defendem suas equipes em momentos críticos.",
    realWorldExample: "Gene Kranz, diretor de voo da Apollo 13, exemplificou liderança ao declarar 'Failure is not an option' - não como ordem, mas como declaração de fé em sua equipe, mobilizando criatividade coletiva para resolver o impossível."
  },
  {
    id: 7,
    title: "Adapte com Base no Contexto",
    shortTitle: "Tailoring",
    description: "Ajuste a abordagem de gerenciamento de projetos para se adequar ao contexto único de cada projeto.",
    details: "Não existe metodologia perfeita para todos os projetos. O tailoring inteligente considera tamanho, complexidade, risco, cultura organizacional, competências disponíveis e requisitos regulatórios.",
    icon: Settings,
    secret: "Tailoring não é sobre reduzir ou adicionar processos aleatoriamente. O segredo é entender a intenção por trás de cada prática e encontrar a forma mais eficiente de alcançar esse objetivo no contexto específico.",
    realWorldExample: "Projetos de software na NASA usam abordagens híbridas - elementos preditivos para componentes críticos de segurança e elementos ágeis para desenvolvimento de interfaces, combinando rigor e flexibilidade."
  },
  {
    id: 8,
    title: "Construa Qualidade nos Processos e Entregas",
    shortTitle: "Qualidade",
    description: "Integre qualidade em todos os aspectos do projeto, desde planejamento até entrega.",
    details: "Qualidade não é inspecionada no final - é construída em cada etapa. Isso significa definir claramente o que 'bom' significa, criar processos que naturalmente produzem resultados de qualidade e verificar continuamente.",
    icon: Star,
    secret: "A qualidade verdadeira vem da criação de uma cultura onde as pessoas têm orgulho do seu trabalho. Isso requer dar tempo suficiente para fazer bem feito e celebrar artesanato, não apenas velocidade.",
    realWorldExample: "Na indústria offshore, o conceito de 'Right First Time' (certo da primeira vez) economiza milhões ao evitar retrabalho em ambientes remotos onde correções são exponencialmente mais caras."
  },
  {
    id: 9,
    title: "Navegue na Complexidade",
    shortTitle: "Complexidade",
    description: "Reconheça e responda à complexidade inerente aos projetos modernos.",
    details: "Complexidade não é o mesmo que complicado. Sistemas complicados podem ser entendidos pela análise de partes. Sistemas complexos têm comportamentos emergentes imprevisíveis que requerem adaptação contínua.",
    icon: Compass,
    secret: "Em ambientes complexos, a previsão detalhada é impossível. O segredo é criar mecanismos de feedback rápido, fazer experimentos pequenos e baratos, e manter opções abertas pelo maior tempo possível.",
    realWorldExample: "Missões interplanetárias da NASA enfrentam complexidade extrema - milhões de componentes, centenas de organizações e incertezas técnicas sem precedentes. O sucesso vem de modularidade, redundância e cultura de resolução de problemas."
  },
  {
    id: 10,
    title: "Otimize Respostas a Riscos",
    shortTitle: "Riscos",
    description: "Gerencie proativamente tanto ameaças quanto oportunidades ao longo do projeto.",
    details: "Gestão de riscos não é apenas sobre evitar problemas - é sobre tomar riscos inteligentes que criam valor. As melhores organizações tratam risco como recurso estratégico, não apenas como algo a minimizar.",
    icon: Shield,
    secret: "O maior risco geralmente não está na lista de riscos. Os riscos mais perigosos são aqueles que ninguém quer mencionar por serem 'politicamente sensíveis' ou assumidos como improváveis demais para considerar.",
    realWorldExample: "A indústria offshore do Brasil desenvolveu expertise mundial em gestão de riscos de subsuperfície - usando probabilidades, simulações e reservas de contingência para viabilizar projetos em águas ultra-profundas."
  },
  {
    id: 11,
    title: "Abrace Adaptabilidade e Resiliência",
    shortTitle: "Adaptabilidade",
    description: "Construa capacidade de adaptar-se a mudanças e recuperar-se de adversidades.",
    details: "Adaptabilidade é a capacidade de mudar curso quando necessário. Resiliência é a capacidade de absorver choques e continuar funcionando. Ambas requerem planejamento deliberado e cultura apropriada.",
    icon: TrendingUp,
    secret: "Resiliência não é sobre ter planos para tudo - é sobre ter a capacidade de improvisar. Isso requer pessoas com habilidades diversas, comunicação excelente e confiança mútua construída antes da crise.",
    realWorldExample: "Durante a pandemia de COVID-19, projetos de construção offshore se adaptaram com protocolos de quarentena marítima, turnos estendidos e logística redesenhada - demonstrando resiliência organizacional sob pressão extrema."
  },
  {
    id: 12,
    title: "Permita a Mudança para Alcançar o Estado Futuro Desejado",
    shortTitle: "Gestão de Mudanças",
    description: "Facilite a adoção de mudanças necessárias para realizar os benefícios do projeto.",
    details: "Projetos criam mudanças - em processos, sistemas, comportamentos e cultura. O sucesso do projeto depende não apenas de entregar outputs, mas de garantir que esses outputs sejam adotados e gerem os resultados pretendidos.",
    icon: Lightbulb,
    secret: "A resistência à mudança raramente é sobre a mudança em si - é sobre perda percebida de controle, status ou competência. O segredo é envolver pessoas afetadas na definição da mudança, não apenas na implementação.",
    realWorldExample: "Grandes projetos de transformação digital na indústria de óleo e gás falham não por tecnologia, mas por ignorar o lado humano da mudança. Os bem-sucedidos investem igualmente em gestão de mudança organizacional."
  }
];

export const performanceDomains = [
  {
    id: 1,
    name: "Stakeholders",
    description: "Atividades e funções relacionadas aos stakeholders do projeto",
    color: "from-blue-500 to-cyan-500",
    outcomes: ["Relacionamentos produtivos com stakeholders", "Acordo sobre objetivos", "Stakeholders apoiadores"],
    keyActivities: ["Identificar stakeholders", "Analisar e entender stakeholders", "Priorizar engajamento", "Engajar stakeholders", "Monitorar engajamento"]
  },
  {
    id: 2,
    name: "Equipe",
    description: "Atividades e funções relacionadas à equipe do projeto",
    color: "from-green-500 to-emerald-500",
    outcomes: ["Propriedade compartilhada", "Equipe de alto desempenho", "Liderança apropriada"],
    keyActivities: ["Gerenciar equipe", "Desenvolver competências", "Desenvolver cultura de equipe", "Gerenciar conflitos", "Motivar e empoderar"]
  },
  {
    id: 3,
    name: "Abordagem de Desenvolvimento e Ciclo de Vida",
    description: "Atividades relacionadas à abordagem de desenvolvimento e ciclo de vida do projeto",
    color: "from-purple-500 to-violet-500",
    outcomes: ["Abordagem consistente com entregas", "Ciclo de vida apropriado", "Entregas facilmente gerenciáveis"],
    keyActivities: ["Definir abordagem", "Definir ciclo de vida", "Definir cadência de entrega", "Definir fases", "Considerar combinações"]
  },
  {
    id: 4,
    name: "Planejamento",
    description: "Organização e elaboração contínuas para produzir entregas",
    color: "from-amber-500 to-orange-500",
    outcomes: ["Progresso organizado", "Abordagem holística", "Informação adequada e elaborada"],
    keyActivities: ["Planejar escopo", "Planejar cronograma", "Planejar custo", "Planejar recursos", "Planejar qualidade"]
  },
  {
    id: 5,
    name: "Trabalho do Projeto",
    description: "Atividades de execução do trabalho do projeto",
    color: "from-red-500 to-rose-500",
    outcomes: ["Desempenho eficiente", "Recursos gerenciados adequadamente", "Comunicação eficaz"],
    keyActivities: ["Gerenciar fluxo de trabalho", "Gerenciar comunicações", "Gerenciar recursos", "Gerenciar aquisições", "Gerenciar mudanças"]
  },
  {
    id: 6,
    name: "Entrega",
    description: "Atividades relacionadas à entrega de escopo e qualidade",
    color: "from-teal-500 to-cyan-500",
    outcomes: ["Contribuição para objetivos", "Benefícios realizados", "Stakeholders satisfeitos"],
    keyActivities: ["Entregar valor", "Gerenciar requisitos", "Gerenciar escopo", "Gerenciar qualidade", "Otimizar entregas"]
  },
  {
    id: 7,
    name: "Medição",
    description: "Atividades de avaliação de desempenho do projeto",
    color: "from-indigo-500 to-blue-500",
    outcomes: ["Entendimento confiável", "Decisões informadas", "Ações oportunas"],
    keyActivities: ["Estabelecer métricas", "Medir desempenho", "Apresentar informações", "Criar projeções", "Conduzir revisões"]
  },
  {
    id: 8,
    name: "Incerteza",
    description: "Atividades relacionadas a riscos e incertezas",
    color: "from-slate-500 to-zinc-600",
    outcomes: ["Riscos gerenciados", "Oportunidades exploradas", "Resiliência demonstrada"],
    keyActivities: ["Identificar incertezas", "Analisar riscos", "Planejar respostas", "Implementar respostas", "Monitorar riscos"]
  }
];
