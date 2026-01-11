export interface PMPQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  domain: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;

  // Usando seed para gerar números pseudo-aleatórios
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  while (currentIndex !== 0) {
    randomIndex = Math.floor(seededRandom() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

// Gera uma seed baseada na sessão atual
function getSessionSeed(): number {
  const stored = sessionStorage.getItem('pmp-quiz-seed');
  if (stored) {
    return parseInt(stored, 10);
  }
  const newSeed = Math.floor(Math.random() * 1000000);
  sessionStorage.setItem('pmp-quiz-seed', newSeed.toString());
  return newSeed;
}

// Função para obter perguntas embaralhadas para a sessão
export function getShuffledQuestions(): PMPQuestion[] {
  const seed = getSessionSeed();
  return shuffleArray(pmpQuestions, seed);
}

// Função para resetar a sessão e obter novas perguntas
export function resetQuizSession(): void {
  sessionStorage.removeItem('pmp-quiz-seed');
}

export const domains = [
  "Stakeholders",
  "Equipe",
  "Abordagem de Desenvolvimento",
  "Planejamento",
  "Trabalho do Projeto",
  "Entrega",
  "Métricas e Incertezas",
  "Comunicação",
  "Processo",
  "Ambiente Corporativo",
  "Liderança"
];

export const pmpQuestions: PMPQuestion[] = [
  // STAKEHOLDER DOMAIN (1-25)
  {
    id: 1,
    question: "Qual é o principal objetivo do engajamento de stakeholders?",
    options: [
      "Minimizar a comunicação com as partes interessadas",
      "Entender e atender às necessidades e expectativas das partes interessadas",
      "Evitar conflitos com patrocinadores",
      "Reduzir o número de stakeholders no projeto"
    ],
    correctAnswer: 1,
    explanation: "O engajamento de stakeholders visa compreender e atender às necessidades e expectativas de todas as partes interessadas para garantir o sucesso do projeto.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Você está gerenciando um projeto e precisa classificar stakeholders. Qual matriz usa níveis de poder e interesse?",
    options: [
      "Matriz de rastreabilidade",
      "Matriz poder/interesse para classificar stakeholders",
      "Matriz de responsabilidades",
      "Matriz de comunicação"
    ],
    correctAnswer: 1,
    explanation: "A matriz de poder/interesse classifica stakeholders ajudando a determinar estratégias de comunicação e engajamento apropriadas. Stakeholders com alto poder e alto interesse devem ser gerenciados de perto.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Para gerenciar efetivamente seus stakeholders, você decide realizar uma matriz de avaliação de engajamento. Quais níveis de engajamento essa técnica usa para classificação?",
    options: [
      "Poder e interesse",
      "Poder, urgência e legitimidade",
      "Inconsciente, resistente, neutro, apoiador, líder",
      "Para cima, para baixo, para fora e para os lados"
    ],
    correctAnswer: 2,
    explanation: "A matriz de avaliação de engajamento classifica stakeholders em cinco níveis: Inconsciente (não sabe do projeto), Resistente (não apoia), Neutro (indiferente), Apoiador (apoia) e Líder (engajado ativamente).",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Um projeto de petróleo em Angola tem comunidades locais como stakeholders. Qual a melhor abordagem?",
    options: [
      "Ignorar as comunidades e focar apenas no cliente",
      "Engajar ativamente através de consultas e comunicação transparente",
      "Comunicar apenas quando necessário legalmente",
      "Delegar toda comunicação ao governo local"
    ],
    correctAnswer: 1,
    explanation: "Comunidades locais são stakeholders críticos que devem ser engajados ativamente para garantir licença social para operar e sucesso do projeto.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Ricardo acaba de assumir um projeto em andamento para criar uma marca de produtos. Para conhecer todos os fornecedores envolvidos no projeto, Ricardo deve conferir:",
    options: [
      "RFQs",
      "Registro das partes interessadas",
      "Propostas de fornecedores",
      "Plano de engajamento das partes interessadas"
    ],
    correctAnswer: 1,
    explanation: "O registro de partes interessadas (stakeholder register) contém informações sobre todos os stakeholders do projeto, incluindo fornecedores, clientes, equipe e outros interessados.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Durante um projeto da NASA, um novo regulador governamental é identificado. O que fazer?",
    options: [
      "Ignorar até que entre em contato",
      "Atualizar o registro de stakeholders e desenvolver estratégia de engajamento",
      "Esperar instruções do patrocinador",
      "Notificar apenas no final do projeto"
    ],
    correctAnswer: 1,
    explanation: "Novos stakeholders devem ser adicionados ao registro e uma estratégia de engajamento deve ser desenvolvida imediatamente.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Qual é a diferença entre stakeholder interno e externo?",
    options: [
      "Internos pagam, externos não",
      "Internos estão dentro da organização, externos fora",
      "Internos são mais importantes",
      "Externos são sempre negativos"
    ],
    correctAnswer: 1,
    explanation: "Stakeholders internos pertencem à organização do projeto, enquanto externos são partes interessadas de fora da organização.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "O patrocinador do projeto é responsável por:",
    options: [
      "Executar as tarefas técnicas",
      "Fornecer recursos, suporte executivo e resolver impedimentos escalados",
      "Gerenciar a equipe diariamente",
      "Criar o cronograma detalhado"
    ],
    correctAnswer: 1,
    explanation: "O patrocinador fornece suporte executivo, recursos e resolve problemas que estão além da autoridade do gerente de projeto.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Em projetos de óleo e gás na Nigéria, conflitos com stakeholders geralmente surgem de:",
    options: [
      "Falta de tecnologia",
      "Questões ambientais e de compensação para comunidades",
      "Excesso de orçamento",
      "Falta de patrocinadores"
    ],
    correctAnswer: 1,
    explanation: "Projetos de extração frequentemente enfrentam desafios com comunidades sobre impactos ambientais e questões de compensação.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "O que é engajamento 'proativo' de stakeholders?",
    options: [
      "Reagir a reclamações quando surgem",
      "Antecipar necessidades e se comunicar antes que problemas ocorram",
      "Esperar feedback formal",
      "Comunicar apenas em marcos do projeto"
    ],
    correctAnswer: 1,
    explanation: "Engajamento proativo significa antecipar necessidades e preocupações dos stakeholders antes que se tornem problemas.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Como medir a eficácia do engajamento de stakeholders?",
    options: [
      "Pelo número de e-mails enviados",
      "Pelo nível de satisfação e apoio demonstrado pelos stakeholders",
      "Pelo custo da comunicação",
      "Pelo tamanho do registro de stakeholders"
    ],
    correctAnswer: 1,
    explanation: "A eficácia é medida pela satisfação, nível de engajamento e suporte ativo dos stakeholders ao projeto.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Um stakeholder resistente deve ser:",
    options: [
      "Excluído do projeto",
      "Entendido, suas preocupações abordadas e tentativa de aumentar seu engajamento",
      "Ignorado completamente",
      "Reportado à gerência para ação disciplinar"
    ],
    correctAnswer: 1,
    explanation: "Stakeholders resistentes devem ter suas preocupações compreendidas e abordadas para tentar transformá-los em apoiadores.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "O registro de stakeholders deve incluir:",
    options: [
      "Apenas nomes e telefones",
      "Informações de identificação, avaliação e classificação dos stakeholders",
      "Apenas os stakeholders favoráveis",
      "Somente dados financeiros"
    ],
    correctAnswer: 1,
    explanation: "O registro deve conter informações completas para identificar, avaliar e classificar cada stakeholder.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Quando deve ocorrer a identificação de stakeholders?",
    options: [
      "Apenas no início do projeto",
      "Continuamente ao longo do ciclo de vida do projeto",
      "Apenas no encerramento",
      "Somente quando há problemas"
    ],
    correctAnswer: 1,
    explanation: "A identificação de stakeholders é um processo contínuo, pois novos stakeholders podem surgir em qualquer fase.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Em um projeto brasileiro de pré-sal, o IBAMA seria classificado como:",
    options: [
      "Stakeholder interno",
      "Stakeholder externo regulatório com alto poder",
      "Membro da equipe do projeto",
      "Fornecedor secundário"
    ],
    correctAnswer: 1,
    explanation: "O IBAMA é um órgão regulador externo com alto poder que pode impactar significativamente projetos de óleo e gás.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Qual princípio do PMBOK 7 está mais relacionado com stakeholders?",
    options: [
      "Navegue na complexidade",
      "Engaje efetivamente com stakeholders",
      "Demonstre comportamentos de liderança",
      "Otimize respostas a riscos"
    ],
    correctAnswer: 1,
    explanation: "O princípio 'Engaje efetivamente com stakeholders' é dedicado especificamente à gestão de partes interessadas.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Comunicação inadequada com stakeholders geralmente resulta em:",
    options: [
      "Aumento do orçamento aprovado",
      "Resistência, conflitos e potencial falha do projeto",
      "Melhor qualidade do produto",
      "Redução do escopo automaticamente"
    ],
    correctAnswer: 1,
    explanation: "Comunicação inadequada pode levar a mal-entendidos, resistência e comprometer o sucesso do projeto.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "O nível de engajamento 'desconhecedor' significa que o stakeholder:",
    options: [
      "Apoia ativamente o projeto",
      "Não tem conhecimento do projeto ou seu impacto potencial",
      "Resiste ao projeto",
      "É neutro em relação ao projeto"
    ],
    correctAnswer: 1,
    explanation: "Stakeholders 'desconhecedores' ainda não sabem sobre o projeto e precisam ser informados adequadamente.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Stakeholders com alto poder e alto interesse devem ser:",
    options: [
      "Mantidos informados apenas",
      "Gerenciados de perto com engajamento ativo contínuo",
      "Monitorados à distância",
      "Ignorados para evitar interferência"
    ],
    correctAnswer: 1,
    explanation: "Stakeholders com alto poder e alto interesse precisam de engajamento ativo e gerenciamento próximo.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Por que é importante entender a cultura dos stakeholders?",
    options: [
      "Para enviar presentes adequados",
      "Para adaptar a comunicação e engajamento às suas normas e expectativas",
      "Para evitar comunicação",
      "Não é importante em projetos globais"
    ],
    correctAnswer: 1,
    explanation: "Entender a cultura permite adaptar estratégias de comunicação e engajamento de forma culturalmente apropriada.",
    domain: "Stakeholders",
    difficulty: "medium"
  },

  // TEAM DOMAIN (21-45)
  {
    id: 21,
    question: "O que caracteriza uma equipe de alto desempenho?",
    options: [
      "Trabalho individual sem interação",
      "Colaboração, confiança mútua, comunicação aberta e foco em resultados",
      "Competição interna intensa",
      "Dependência total do gerente de projeto"
    ],
    correctAnswer: 1,
    explanation: "Equipes de alto desempenho são caracterizadas por confiança, colaboração e foco compartilhado em resultados.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Qual modelo descreve os estágios de desenvolvimento de equipe?",
    options: [
      "Modelo PDCA",
      "Modelo de Tuckman (Forming, Storming, Norming, Performing, Adjourning)",
      "Modelo de Kano",
      "Modelo de Monte Carlo"
    ],
    correctAnswer: 1,
    explanation: "O modelo de Tuckman descreve os cinco estágios de desenvolvimento: Formação, Conflito, Normatização, Desempenho e Dissolução.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "O que significa 'servant leadership' no contexto de projetos?",
    options: [
      "O líder manda e a equipe obedece",
      "O líder serve a equipe removendo obstáculos e apoiando seu sucesso",
      "A equipe serve o líder",
      "Não há liderança definida"
    ],
    correctAnswer: 1,
    explanation: "Liderança servidora foca em servir a equipe, removendo impedimentos e criando condições para seu sucesso.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "Durante sua longa experiência como gerente de projetos, Felipe sempre seguiu um estilo de liderança servidora. Todos os itens a seguir implicam características de liderança servidora, EXCETO:",
    options: [
      "Promover o crescimento profissional dos membros da equipe",
      "Priorizar as necessidades do time antes de todo o resto",
      "Desenvolver futuros líderes servidores",
      "Passar instruções detalhadas sobre o trabalho do projeto"
    ],
    correctAnswer: 3,
    explanation: "Liderança servidora não se trata de dar instruções detalhadas (comando e controle), mas de servir, capacitar e desenvolver a equipe. Dar instruções detalhadas é característica de liderança diretiva, não servidora.",
    domain: "Equipe",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "Sofia é designada para liderar seu primeiro projeto. Ela pretende se concentrar em aumentar a lealdade dos membros promovendo seu bem-estar no trabalho e fora dele. Qual teoria motivacional Sofia planeja adotar?",
    options: [
      "Teoria da expectativa",
      "Teoria X",
      "Teoria Y",
      "Teoria Z"
    ],
    correctAnswer: 3,
    explanation: "A Teoria Z enfatiza lealdade, bem-estar dos funcionários e equilíbrio entre vida pessoal e trabalho. É baseada em práticas de gestão japonesas que promovem emprego de longo prazo e cuidado holístico com os funcionários.",
    domain: "Equipe",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Em um projeto de exploração petrolífera no Brasil, a equipe é multicultural. O líder deve:",
    options: [
      "Impor uma única cultura de trabalho",
      "Reconhecer e valorizar a diversidade cultural, adaptando o estilo de liderança",
      "Ignorar diferenças culturais",
      "Separar equipes por nacionalidade"
    ],
    correctAnswer: 1,
    explanation: "Líderes eficazes reconhecem a diversidade cultural e adaptam seu estilo para maximizar a contribuição de todos.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Qual é o papel do gerente de projeto no desenvolvimento da equipe?",
    options: [
      "Apenas delegar tarefas",
      "Facilitar o crescimento, motivação e desenvolvimento de competências da equipe",
      "Controlar todas as decisões",
      "Evitar conflitos a qualquer custo"
    ],
    correctAnswer: 1,
    explanation: "O gerente de projeto deve facilitar o desenvolvimento profissional e pessoal dos membros da equipe.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "O conflito em equipes de projeto:",
    options: [
      "Deve sempre ser evitado",
      "Pode ser construtivo se bem gerenciado",
      "Indica falha de liderança",
      "Nunca produz resultados positivos"
    ],
    correctAnswer: 1,
    explanation: "Conflitos construtivos podem levar a melhores decisões e inovação quando gerenciados adequadamente.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Na estágio 'Storming' do modelo de Tuckman, a equipe:",
    options: [
      "Trabalha em harmonia perfeita",
      "Experimenta conflitos e desacordos enquanto estabelece papéis",
      "Está pronta para se dissolver",
      "Alcança pico de produtividade"
    ],
    correctAnswer: 1,
    explanation: "A fase de Storming (Conflito) é caracterizada por disputas de poder, conflitos e ajuste de expectativas.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Inteligência emocional em um líder de projeto inclui:",
    options: [
      "Apenas conhecimento técnico",
      "Autoconsciência, autogestão, consciência social e gestão de relacionamentos",
      "Ignorar emoções da equipe",
      "Apenas habilidades de negociação"
    ],
    correctAnswer: 1,
    explanation: "Inteligência emocional abrange autoconsciência, autogestão, consciência social e gestão de relacionamentos.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 31,
    question: "Em uma equipe virtual da NASA trabalhando em fusos horários diferentes, o desafio principal é:",
    options: [
      "Falta de tecnologia",
      "Comunicação assíncrona e construção de confiança sem interação presencial",
      "Custos de viagem",
      "Diferenças de salário"
    ],
    correctAnswer: 1,
    explanation: "Equipes virtuais enfrentam desafios de comunicação em tempo real e construção de relacionamentos à distância.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "A motivação intrínseca da equipe vem de:",
    options: [
      "Apenas aumentos salariais",
      "Sentido de propósito, autonomia e domínio do trabalho",
      "Ameaças de demissão",
      "Competição por bônus"
    ],
    correctAnswer: 1,
    explanation: "Motivação intrínseca vem de fatores internos como propósito, autonomia e satisfação no domínio do trabalho.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 33,
    question: "Uma matriz RACI é usada para:",
    options: [
      "Calcular custos",
      "Definir papéis e responsabilidades (Responsável, Aprovador, Consultado, Informado)",
      "Criar cronogramas",
      "Avaliar riscos"
    ],
    correctAnswer: 1,
    explanation: "RACI define quem é Responsável, Aprovador, Consultado e Informado para cada atividade do projeto.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "Você é responsável por uma RFP e usa a matriz RACI. Quando recebe reclamações de fornecedores sobre requisitos contraditórios na RFP escrita por Marcelo (R=Responsável), quem você deve consultar?",
    options: [
      "Joana (Aprovador)",
      "Marcelo (Responsável)",
      "Tiago (Informado)",
      "Samanta (Consultada)"
    ],
    correctAnswer: 1,
    explanation: "Na matriz RACI, o 'R' (Responsável) é quem executa o trabalho. Marcelo, sendo o responsável por escrever a RFP, deve ser consultado para esclarecer os requisitos contraditórios.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "Em projetos ágeis, equipes são tipicamente:",
    options: [
      "Rigidamente hierárquicas",
      "Auto-organizadas e multifuncionais",
      "Gerenciadas externamente em cada detalhe",
      "Compostas apenas por desenvolvedores"
    ],
    correctAnswer: 1,
    explanation: "Equipes ágeis são auto-organizadas, multifuncionais e tomam decisões sobre como realizar seu trabalho.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "O que é 'psychological safety' em uma equipe?",
    options: [
      "Segurança física no local de trabalho",
      "Ambiente onde membros se sentem seguros para assumir riscos e expressar ideias",
      "Proteção contra demissão",
      "Seguro de saúde mental"
    ],
    correctAnswer: 1,
    explanation: "Segurança psicológica é quando membros da equipe se sentem seguros para assumir riscos interpessoais sem medo de punição.",
    domain: "Equipe",
    difficulty: "hard"
  },
  {
    id: 37,
    question: "Qual é a melhor abordagem para resolver conflitos em uma equipe?",
    options: [
      "O gerente decide unilateralmente",
      "Facilitação, colaboração e busca de solução ganha-ganha",
      "Ignorar até que se resolva sozinho",
      "Transferir membros problemáticos"
    ],
    correctAnswer: 1,
    explanation: "A abordagem colaborativa busca entender diferentes perspectivas e encontrar soluções benéficas para todos.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Em um projeto offshore na Nigéria, a comunicação da equipe em plataformas remotas deve:",
    options: [
      "Ser mínima para não atrapalhar o trabalho",
      "Ser estruturada, frequente e usar múltiplos canais devido ao isolamento",
      "Ocorrer apenas em emergências",
      "Ser feita apenas pelo supervisor"
    ],
    correctAnswer: 1,
    explanation: "Equipes em locais remotos precisam de comunicação estruturada e frequente para manter coordenação e moral.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "O conceito de 'T-shaped' se refere a profissionais que:",
    options: [
      "Trabalham apenas em formato de T",
      "Têm expertise profunda em uma área e competências amplas em outras",
      "Preferem trabalho solitário",
      "São especialistas em apenas uma área"
    ],
    correctAnswer: 1,
    explanation: "Profissionais T-shaped têm profundidade em uma especialidade e amplitude de conhecimento em áreas relacionadas.",
    domain: "Equipe",
    difficulty: "hard"
  },
  {
    id: 40,
    question: "Feedback construtivo deve ser:",
    options: [
      "Dado apenas no final do projeto",
      "Específico, oportuno, baseado em comportamentos observáveis",
      "Geral e vago para não ofender",
      "Sempre negativo para motivar melhoria"
    ],
    correctAnswer: 1,
    explanation: "Feedback eficaz é específico, dado no momento oportuno e focado em comportamentos observáveis.",
    domain: "Equipe",
    difficulty: "easy"
  },
  
  // COMUNICAÇÃO (41-60)
  {
    id: 41,
    question: "Você está liderando uma equipe de 6 engenheiros em um ambiente de trabalho em espaço aberto. Um membro da equipe ouviu sua conversa telefônica e fez uma correção. Que tipo de comunicação está sendo usada?",
    options: [
      "Comunicação em espaço aberto",
      "Distração da comunicação",
      "Comunicação indireta",
      "Comunicação osmótica"
    ],
    correctAnswer: 3,
    explanation: "Comunicação osmótica ocorre quando informações fluem naturalmente em um ambiente de trabalho compartilhado, permitindo que membros da equipe absorvam informações relevantes sem comunicação direta intencional.",
    domain: "Comunicação",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Lucas usa e-mails para comunicação. Ao formular seus e-mails, ele usa todas as técnicas a seguir, EXCETO:",
    options: [
      "Expressões breves e diretas",
      "Consideração das necessidades do leitor",
      "Fluência de palavras e ideias",
      "Variação de tom"
    ],
    correctAnswer: 3,
    explanation: "Em comunicação profissional por e-mail, a variação de tom é evitada para manter consistência e clareza. Expressões breves, consideração do leitor e fluência de ideias são práticas recomendadas.",
    domain: "Comunicação",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Seu patrocinador será substituído por duas novas pessoas, aumentando de 11 para 12 membros. Ele diz que isso não afetará a complexidade da comunicação. Ele está correto?",
    options: [
      "Sim, porque o patrocinador tem sempre razão",
      "Sim, adicionar uma pessoa adiciona apenas um canal de comunicação",
      "Não, as equipes ágeis devem ser pequenas",
      "Não, adicionar uma pessoa adiciona mais de um canal de comunicação"
    ],
    correctAnswer: 3,
    explanation: "A fórmula de canais de comunicação é n(n-1)/2. Com 11 pessoas = 55 canais. Com 12 pessoas = 66 canais. Adicionar uma pessoa adicionou 11 novos canais, não apenas 1.",
    domain: "Comunicação",
    difficulty: "hard"
  },
  {
    id: 44,
    question: "Regina está apresentando seu projeto em um evento empresarial. Para engajar o público durante a apresentação, Regina deve:",
    options: [
      "Apontar para o público",
      "Fazer contato visual",
      "Acenar com as mãos constantemente",
      "Ficar em pé imóvel"
    ],
    correctAnswer: 1,
    explanation: "O contato visual é uma técnica fundamental de comunicação que ajuda a estabelecer conexão, demonstrar confiança e manter o público engajado durante apresentações.",
    domain: "Comunicação",
    difficulty: "easy"
  },
  {
    id: 45,
    question: "Barbara está em uma reunião e é questionada sobre algo do projeto anterior. Ela não sabe a resposta. O que fazer?",
    options: [
      "Perguntar se outro participante pode responder",
      "Mudar de assunto",
      "Dizer que a pergunta é irrelevante",
      "Admitir que não sabe e prometer retornar após verificar"
    ],
    correctAnswer: 3,
    explanation: "A resposta mais profissional é admitir honestamente que não sabe a resposta e comprometer-se a buscar a informação correta com a equipe, demonstrando integridade e responsabilidade.",
    domain: "Comunicação",
    difficulty: "easy"
  },
  
  // PROCESSO - SCRUM & ÁGIL (46-80)
  {
    id: 46,
    question: "André trabalha como gerente de projetos e sua organização decidiu adotar Agile. Ele ficou preocupado em perder o emprego. Suas preocupações são justificadas?",
    options: [
      "Sim, a equipe ágil não inclui um gerente de projeto",
      "Sim, ele deve se converter para Scrum Master",
      "Não, ele pode trabalhar como Product Owner",
      "Não, ele pode continuar como gerente de projetos, sendo mais um facilitador"
    ],
    correctAnswer: 3,
    explanation: "Em ambientes ágeis, o gerente de projeto assume papel de facilitador, removendo impedimentos, coaching da equipe e conectando com a organização. O papel evolui mas não desaparece.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Qual é o papel do Scrum Master durante o stand-up diário?",
    options: [
      "Parabenizar a equipe quando fizerem um bom trabalho",
      "Ouvir a equipe para identificar impedimentos",
      "Perguntar a cada membro o que realizaram",
      "Está proibido de participar"
    ],
    correctAnswer: 1,
    explanation: "O Scrum Master não conduz a Daily Scrum - é uma reunião da equipe de desenvolvimento. Seu papel é ouvir para identificar impedimentos que precisam ser removidos e garantir que a reunião seja eficiente.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Durante uma sprint, a equipe Scrum percebeu que selecionou mais itens do que poderia concluir. O que fazer?",
    options: [
      "Pedir ao Scrum Master para alocar mais recursos",
      "Discutir na próxima retrospectiva",
      "Trabalhar horas extras",
      "Informar o Product Owner que alguns itens devem ser removidos"
    ],
    correctAnswer: 3,
    explanation: "O Product Owner é responsável pelo backlog e priorização. Quando a equipe percebe que não conseguirá completar todos os itens, deve comunicar ao PO para negociar a remoção de itens menos prioritários.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Correlacione os eventos Scrum: Daily Scrum serve para:",
    options: [
      "Estimar esforço para completar histórias",
      "Inspecionar o progresso em direção à meta do sprint",
      "Apresentar o incremento para stakeholders",
      "Discutir melhorias para próximos sprints"
    ],
    correctAnswer: 1,
    explanation: "A Daily Scrum é uma reunião de 15 minutos onde a equipe de desenvolvimento inspeciona o progresso em direção à Meta do Sprint e adapta o Sprint Backlog conforme necessário.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "Você está gerenciando um projeto Scrum usando a sequência de Fibonacci. Você estimou '5' mas sua equipe acha que é '3'. Qual deve ser a estimativa final?",
    options: [
      "3",
      "8",
      "5",
      "Discutir mais para chegar a um consenso"
    ],
    correctAnswer: 3,
    explanation: "Quando há divergência nas estimativas, a prática correta é discutir para entender as diferentes perspectivas e chegar a um consenso. O Planning Poker usa discussão para alinhar entendimento.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "O que é dívida técnica?",
    options: [
      "Bugs causados por omissão ou erros",
      "Refatoração de código",
      "O custo de retrabalho devido a recursos perdidos",
      "O custo do retrabalho devido à qualidade de código degradada"
    ],
    correctAnswer: 3,
    explanation: "Dívida técnica é o custo implícito de retrabalho futuro causado por escolher uma solução rápida/fácil agora em vez de uma abordagem melhor que levaria mais tempo. Resulta em código degradado.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 52,
    question: "Ronaldo, um carpinteiro, recebeu pedido para produzir uma única unidade de um novo conceito de cadeira da forma mais rápida e barata possível. Como se chama esse produto?",
    options: [
      "Versão de pré-produção",
      "Incremento do produto",
      "Produto mínimo viável (MVP)",
      "Amostra"
    ],
    correctAnswer: 2,
    explanation: "Um MVP (Produto Mínimo Viável) é a versão mais simples de um produto que pode ser liberada para validar hipóteses e obter feedback, com o mínimo de recursos investidos.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "Depois de verificar o gráfico de burndown, você descobre que há muito trabalho e será difícil concluir até o final da sprint. O que fazer?",
    options: [
      "Solicitar reunião urgente para exigir horas extras",
      "Enviar e-mail para todos pressionando por mais esforço",
      "Aguardar a próxima stand-up para entender o ritmo lento",
      "Aguardar a retrospectiva para refletir"
    ],
    correctAnswer: 2,
    explanation: "A Daily Scrum é o momento apropriado para a equipe inspecionar o progresso, identificar problemas e adaptar o plano. É uma reunião de inspeção e adaptação, não de cobrança.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "Uma grande história de usuário envolvendo um novo requisito, que precisa ser dividida para várias iterações, é conhecida como:",
    options: [
      "Característica",
      "Épico",
      "Release",
      "Marco"
    ],
    correctAnswer: 1,
    explanation: "Um Épico é uma grande história de usuário que é muito grande para ser completada em uma única sprint e precisa ser dividida em histórias menores.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Elias é o facilitador de uma Revisão da Sprint. Um membro demonstrou um recurso e perguntou como evitar falta de documentação técnica no futuro. O que Elias deve fazer?",
    options: [
      "Deixar a discussão fluir naturalmente",
      "Pedir ao membro para refletir em outra reunião",
      "Interromper para que o PO não saiba da falta de documentação",
      "Deixar continuar e pedir ao PO feedback sobre melhorias"
    ],
    correctAnswer: 1,
    explanation: "A Sprint Review é para revisar o que foi feito e adaptar o backlog. Discussões sobre processos e melhorias devem ser reservadas para a Retrospectiva da Sprint.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 56,
    question: "Ana está gerenciando um projeto ágil. Durante a sessão de planejamento da sprint, todos tinham estimativas diferentes. O PO estimou '2', você '3', e dois engenheiros juniores estimaram '5'. Qual deve ser aplicada?",
    options: [
      "2, porque o PO conhece mais o negócio",
      "3, porque você tem experiência anterior",
      "5, pois são os membros que vão trabalhar na história",
      "3, como média de todas as estimativas"
    ],
    correctAnswer: 2,
    explanation: "As estimativas devem refletir o esforço de quem vai executar o trabalho. A equipe de desenvolvimento que conhece a complexidade técnica deve ter a palavra final nas estimativas.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 57,
    question: "Durante a reunião de retrospectiva, um membro reclamou que as reuniões de planejamento demoram muito por tarefas não detalhadas. O que Ana deve fazer?",
    options: [
      "Estabelecer regra proibindo tarefas não detalhadas",
      "Incentivar sessões de refinamento do backlog com o Product Owner",
      "Ignorar a menos que outros concordem",
      "Dividir a reunião de planejamento em sessões menores"
    ],
    correctAnswer: 1,
    explanation: "O Refinamento do Backlog (Backlog Grooming) é a prática de detalhar, estimar e clarificar itens do backlog antes do Sprint Planning, tornando as reuniões de planejamento mais eficientes.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "George pergunta por que não há documentação formal em um projeto ágil. A resposta correta é:",
    options: [
      "Documentação é reduzida ao mínimo para atender requisitos regulamentares",
      "Projetos ágeis não exigem documentação",
      "Documentação é feita apenas para funcionalidades concluídas",
      "Ágil requer documentação sofisticada que estão atrasados"
    ],
    correctAnswer: 0,
    explanation: "Ágil valoriza 'software funcionando sobre documentação abrangente', mas isso não significa sem documentação. A documentação é mantida em nível suficiente para atender necessidades regulamentares e de comunicação.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "Em um ambiente ágil, quem é responsável por gerenciar o projeto?",
    options: [
      "Scrum Master",
      "Membros da equipe",
      "Product Owner",
      "Gerente do projeto"
    ],
    correctAnswer: 1,
    explanation: "Em Scrum e metodologias ágeis, a equipe de desenvolvimento é auto-organizada e responsável por gerenciar seu próprio trabalho. O Scrum Master facilita e o PO prioriza, mas a equipe gerencia a execução.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "Irina usa 'horas ideais' para dimensionar tarefas. Quais outros termos podem se referir a 'horas ideais'?",
    options: [
      "Horas-esforço e Horas reais",
      "Horas-esforço e Horas-homem",
      "Horas reais e Horas informais",
      "Horas-homem e Horas informais"
    ],
    correctAnswer: 1,
    explanation: "Horas ideais (também chamadas de horas-esforço ou horas-homem) representam o tempo que uma tarefa levaria sem interrupções. É diferente de horas reais que incluem interrupções.",
    domain: "Processo",
    difficulty: "medium"
  },

  // PROCESSO - KANBAN & LEAN (61-80)
  {
    id: 61,
    question: "No Kanban, o conceito de WIP (Work in Progress) Limit serve para:",
    options: [
      "Limitar o número de pessoas na equipe",
      "Limitar a quantidade de trabalho simultâneo em cada etapa do fluxo",
      "Limitar o orçamento do projeto",
      "Limitar o tempo das reuniões"
    ],
    correctAnswer: 1,
    explanation: "O WIP Limit é um conceito central do Kanban que limita a quantidade de trabalho em andamento em cada coluna do quadro, reduzindo multitasking e aumentando o foco e fluxo.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Os 7 desperdícios do Lean (Muda) incluem todos, EXCETO:",
    options: [
      "Espera e Transporte",
      "Superprodução e Defeitos",
      "Movimentação desnecessária",
      "Comunicação excessiva"
    ],
    correctAnswer: 3,
    explanation: "Os 7 desperdícios do Lean são: Superprodução, Espera, Transporte, Processamento excessivo, Inventário, Movimentação e Defeitos. Comunicação excessiva não faz parte dos 7 Mudas tradicionais.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 63,
    question: "O conceito japonês 'Kaizen' significa:",
    options: [
      "Perfeição absoluta",
      "Melhoria contínua através de pequenas mudanças incrementais",
      "Produção em massa",
      "Controle de qualidade rígido"
    ],
    correctAnswer: 1,
    explanation: "Kaizen significa 'melhoria contínua'. É a filosofia de fazer pequenas melhorias incrementais constantemente, envolvendo todos os níveis da organização.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "O termo 'Gemba' no Lean refere-se a:",
    options: [
      "Reunião de gerentes",
      "O local onde o trabalho acontece, onde o valor é criado",
      "Documento de qualidade",
      "Relatório mensal"
    ],
    correctAnswer: 1,
    explanation: "Gemba significa 'o lugar real' - onde o trabalho acontece. A prática de 'Gemba Walk' envolve líderes irem ao local de trabalho para observar, entender e identificar melhorias.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 65,
    question: "JIT (Just in Time) é um conceito que visa:",
    options: [
      "Manter grandes estoques para segurança",
      "Produzir e entregar apenas o necessário, quando necessário",
      "Acelerar todas as entregas",
      "Aumentar a capacidade de produção"
    ],
    correctAnswer: 1,
    explanation: "JIT é uma metodologia que visa produzir apenas o que é necessário, quando é necessário e na quantidade necessária, reduzindo desperdício e custos de inventário.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "O conceito de 'Lead Time' no Kanban representa:",
    options: [
      "Tempo que o líder passa em reuniões",
      "Tempo total desde o pedido até a entrega ao cliente",
      "Tempo de uma reunião diária",
      "Tempo para aprovar um documento"
    ],
    correctAnswer: 1,
    explanation: "Lead Time é o tempo total desde que um item de trabalho entra no sistema (pedido) até ser entregue ao cliente. É uma métrica crucial para medir eficiência do fluxo.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "O conceito de 'Cycle Time' difere do Lead Time porque:",
    options: [
      "São a mesma coisa",
      "Cycle Time mede apenas o tempo de trabalho ativo, não o tempo de espera",
      "Cycle Time é sempre maior que Lead Time",
      "Cycle Time inclui tempo do cliente"
    ],
    correctAnswer: 1,
    explanation: "Cycle Time mede o tempo desde que o trabalho começa até ser completado (trabalho ativo). Lead Time inclui também o tempo de espera na fila antes do trabalho começar.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 68,
    question: "Os 3 Ms do Lean são:",
    options: [
      "Money, Management, Marketing",
      "Muda (Desperdício), Mura (Desigualdade), Muri (Sobrecarga)",
      "Mission, Method, Measurement",
      "Man, Machine, Material"
    ],
    correctAnswer: 1,
    explanation: "Os 3 Ms são: Muda (desperdício), Mura (desigualdade/variação) e Muri (sobrecarga). Eliminar os três é essencial para um fluxo de trabalho eficiente.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 69,
    question: "O que significa 'Jidoka' no contexto Lean?",
    options: [
      "Automação com toque humano - parar quando há problema",
      "Velocidade máxima de produção",
      "Redução de custos a qualquer custo",
      "Terceirização de processos"
    ],
    correctAnswer: 0,
    explanation: "Jidoka é 'automação com toque humano'. Significa que máquinas ou processos param automaticamente quando detectam um problema, permitindo correção imediata e prevenindo defeitos.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 70,
    question: "No quadro Kanban, um 'swimlane' (raia) é usado para:",
    options: [
      "Indicar prioridade por cores",
      "Separar diferentes tipos de trabalho ou equipes horizontalmente",
      "Mostrar o tempo de cada tarefa",
      "Indicar quem está de férias"
    ],
    correctAnswer: 1,
    explanation: "Swimlanes são linhas horizontais no quadro Kanban que separam diferentes tipos de trabalho, equipes, projetos ou classes de serviço, facilitando visualização e gestão.",
    domain: "Processo",
    difficulty: "medium"
  },

  // ABORDAGEM DE DESENVOLVIMENTO (81-100)
  {
    id: 71,
    question: "Qual é a principal diferença entre abordagem preditiva e adaptativa?",
    options: [
      "Não há diferença",
      "Preditiva define escopo no início; adaptativa permite mudanças ao longo do projeto",
      "Adaptativa é mais cara",
      "Preditiva é sempre melhor"
    ],
    correctAnswer: 1,
    explanation: "Abordagens preditivas fixam o escopo antecipadamente, enquanto adaptativas aceitam mudanças incrementais.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "Sua organização tem sucesso com projetos cascata. O projeto atual tem alta probabilidade de mudança, baixa criticidade e potencial para entrega incremental, mas a equipe tem pouca experiência ágil. Qual o melhor curso de ação?",
    options: [
      "Permitir que a equipe selecione a abordagem",
      "Usar cascata, pois a equipe será resistente a mudanças",
      "Usar ágil, pois a natureza do projeto determina",
      "Começar com modelo preditivo e introduzir práticas ágeis gradualmente"
    ],
    correctAnswer: 3,
    explanation: "Quando a natureza do projeto sugere ágil mas a equipe não tem experiência, a abordagem híbrida é ideal: começar preditivo e introduzir práticas ágeis gradualmente para construir capacidade.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 73,
    question: "José e Maria estão construindo uma casa. Decidiram iniciar a obra primeiro e decidir sobre design de interiores depois. Que técnica estão usando?",
    options: [
      "Rolling Wave Planning",
      "Fast Tracking",
      "Crashing",
      "Decomposição"
    ],
    correctAnswer: 0,
    explanation: "Rolling Wave Planning é a técnica de planejar em detalhes o trabalho próximo e deixar o trabalho futuro em alto nível, detalhando progressivamente à medida que mais informações ficam disponíveis.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Um projeto usará abordagem adaptativa para planos e produto, mas iniciação e encerramento serão tradicionais. O GP decide usar radiadores de informação. Por quê?",
    options: [
      "Para informar stakeholders sobre a retrospectiva",
      "Para comunicar progresso, problemas, melhoria contínua e gerenciar expectativas",
      "Para compartilhar informações com fornecedores",
      "Para documentar lições aprendidas"
    ],
    correctAnswer: 1,
    explanation: "Radiadores de informação são displays visuais (quadros, gráficos) que comunicam status do projeto de forma passiva. São usados para transparência, comunicação de progresso e gestão de expectativas.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "O que caracteriza um projeto verdadeiro? Qual dos exemplos é um projeto?",
    options: [
      "Salvar uma espécie ameaçada de rinoceronte da extinção",
      "Limpeza semanal do parque local",
      "Produção mensal de 1.000 pares de sapatos",
      "Preparar macarrão toda segunda-feira"
    ],
    correctAnswer: 0,
    explanation: "Um projeto é temporário, único e cria resultado exclusivo. Salvar uma espécie é um esforço único com fim definido. Os outros são operações rotineiras/contínuas.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 76,
    question: "Quando você sugeriu usar abordagem ágil em uma organização avessa ao risco, perguntaram como o gerenciamento de riscos seria conduzido. Qual a resposta correta?",
    options: [
      "O gerente de projeto será o único proprietário de riscos",
      "Apenas o patrocinador conduz análise de riscos",
      "A equipe analisa riscos em todas as reuniões de planejamento, focando em análise qualitativa",
      "Riscos são ignorados em projetos ágeis"
    ],
    correctAnswer: 2,
    explanation: "Em ágil, riscos são monitorados continuamente pela equipe em reuniões de planejamento e stand-ups. O foco é em análise qualitativa e resposta rápida através de iterações curtas.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 77,
    question: "Uma organização está transicionando para ágil e precisa de relatórios de conformidade para auditores. Como atender essa necessidade em ambiente híbrido?",
    options: [
      "Trabalhar com auditores para agilizar o processo",
      "Designar um membro da equipe para relatórios",
      "Transferir responsabilidade para o departamento jurídico",
      "Evitar agilidade, não é adequada para ambiente regulatório"
    ],
    correctAnswer: 0,
    explanation: "A melhor abordagem é colaborar com os auditores para adaptar os relatórios ao formato ágil, mantendo transparência e conformidade. Ágil pode funcionar em ambientes regulatórios com adaptações.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 78,
    question: "Você é responsável por três projetos: dois similares e um diferente. Qual é seu papel?",
    options: [
      "Coordenador do projeto",
      "Gerente de projeto",
      "Gerente de programa",
      "Gerente de portfólio"
    ],
    correctAnswer: 3,
    explanation: "Um Gerente de Portfólio gerencia uma coleção de projetos e programas que podem ou não ser relacionados. Se os projetos fossem relacionados com benefícios comuns, seria Gerente de Programa.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },

  // AMBIENTE CORPORATIVO (79-100)
  {
    id: 79,
    question: "Fatores Ambientais da Empresa (EEFs) incluem:",
    options: [
      "Apenas políticas internas",
      "Condições internas e externas que influenciam o projeto mas estão fora do controle da equipe",
      "Apenas lições aprendidas",
      "Apenas processos organizacionais"
    ],
    correctAnswer: 1,
    explanation: "EEFs são condições que cercam e influenciam o projeto. Podem ser internas (cultura, estrutura) ou externas (regulamentos, mercado) e geralmente não estão sob controle da equipe.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Ativos de Processos Organizacionais (OPAs) incluem:",
    options: [
      "Apenas equipamentos físicos",
      "Processos, políticas, procedimentos e bases de conhecimento da organização",
      "Apenas fatores externos",
      "Apenas orçamento do projeto"
    ],
    correctAnswer: 1,
    explanation: "OPAs são artefatos, práticas e conhecimentos de qualquer organização que podem ser usados no projeto. Incluem políticas, templates, lições aprendidas e bases de conhecimento.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "O PMO (Project Management Office) pode ser dos seguintes tipos, EXCETO:",
    options: [
      "PMO de Suporte (consultivo)",
      "PMO Controlador (conformidade)",
      "PMO Diretivo (gerencia projetos diretamente)",
      "PMO Financeiro (apenas orçamento)"
    ],
    correctAnswer: 3,
    explanation: "Os três tipos de PMO são: Suporte (consultivo), Controlador (exige conformidade) e Diretivo (assume controle direto). Não existe classificação de 'PMO Financeiro'.",
    domain: "Ambiente Corporativo",
    difficulty: "hard"
  },
  {
    id: 82,
    question: "Governança corporativa se refere a:",
    options: [
      "Apenas controle financeiro",
      "Sistema pelo qual organizações são dirigidas, monitoradas e incentivadas",
      "Apenas recursos humanos",
      "Apenas tecnologia da informação"
    ],
    correctAnswer: 1,
    explanation: "Governança corporativa envolve o sistema de regras, práticas e processos pelos quais uma empresa é dirigida e controlada, balanceando interesses de stakeholders.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Compliance em projetos significa:",
    options: [
      "Fazer tudo que o cliente quer",
      "Conformidade com leis, regulamentos, políticas e padrões aplicáveis",
      "Apenas seguir cronograma",
      "Apenas controlar custos"
    ],
    correctAnswer: 1,
    explanation: "Compliance é a adesão a leis, regulamentos, políticas internas e padrões externos que se aplicam ao projeto e à organização.",
    domain: "Ambiente Corporativo",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "Durante a fase de iniciação, você percebe que requisitos regulatórios não foram considerados no contrato. Cumpri-los exigirá mais tempo e custo. O que fazer?",
    options: [
      "Sua primeira ação é divulgar a descoberta para stakeholders e solicitar seus pontos de vista",
      "Escrever imediatamente uma notificação de mudança de escopo",
      "Esperar e reunir mais informações ao longo do projeto",
      "Contatar o órgão regulador para soluções alternativas"
    ],
    correctAnswer: 0,
    explanation: "Em questões éticas e de compliance, a transparência imediata é essencial. A primeira ação é informar stakeholders sobre a descoberta e suas implicações para decisão conjunta.",
    domain: "Ambiente Corporativo",
    difficulty: "hard"
  },
  {
    id: 85,
    question: "O Comitê de Controle de Mudanças (CCB) tem cinco membros com opiniões divergentes. Qual o melhor curso de ação?",
    options: [
      "Tentar chegar a um consenso",
      "Convocar votação e deixar a maioria decidir",
      "Deixar o membro mais experiente decidir",
      "Deixar o diretor decidir"
    ],
    correctAnswer: 0,
    explanation: "O consenso é sempre a primeira opção preferida em tomada de decisão de grupo, pois garante que todas as perspectivas foram consideradas e há comprometimento coletivo.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Você foi autorizado pelo CCB para revisar todas as solicitações de mudança. Um mês depois, recebeu três solicitações: do patrocinador, de um stakeholder de baixo poder, e de um membro sênior da equipe. Quem NÃO pode enviar solicitação de mudança?",
    options: [
      "O patrocinador, pois é membro do CCB",
      "O stakeholder de baixo poder",
      "O membro sênior da equipe",
      "Todos podem enviar solicitação de mudança"
    ],
    correctAnswer: 3,
    explanation: "Qualquer pessoa pode submeter uma solicitação de mudança. Ser membro do CCB, ter baixo poder ou fazer parte da equipe não impede de solicitar mudanças. A decisão de aprovar cabe ao CCB.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },

  // PLANEJAMENTO (87-110)
  {
    id: 87,
    question: "Você está na fase de planejamento e tem experiência anterior com drones militares. Sua técnica de estimativa é:",
    options: [
      "Estimativa de três pontos",
      "Estimativa análoga",
      "Estimativa bottom-up",
      "Estimativa paramétrica"
    ],
    correctAnswer: 1,
    explanation: "Estimativa análoga usa experiência de projetos anteriores similares como base para estimar o projeto atual. É rápida mas menos precisa que técnicas detalhadas.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Você está cético sobre o modelo de negócios de uma startup e foi solicitado a fazer planejamento de recursos. Você deve usar informações históricas?",
    options: [
      "Não, cada projeto é único",
      "Não, informações históricas não se aplicam a projetos inovadores",
      "Sim, informações históricas podem fornecer comparações com projetos similares",
      "Sim, estimativas precisas não podem ser feitas sem dados históricos"
    ],
    correctAnswer: 2,
    explanation: "Informações históricas sempre podem fornecer insights úteis, mesmo para projetos inovadores. São uma base de comparação, não uma garantia de precisão.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "A equipe examinou a variação em relação à linha de base do escopo. O GP precisa saber se a variação está melhorando ou se deteriorando. O que fazer?",
    options: [
      "Realizar análise de variância",
      "Realizar análise de produto",
      "Concluir análise de rede do cronograma",
      "Realizar análise de tendência"
    ],
    correctAnswer: 3,
    explanation: "Análise de tendência examina o desempenho ao longo do tempo para determinar se está melhorando ou deteriorando. Análise de variância apenas compara real vs planejado em um ponto.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Depois de definir requisitos de alto nível, a equipe ágil e o PO começaram a escrever features do produto. Como priorizar o backlog?",
    options: [
      "Valor dos itens",
      "Complexidade dos itens",
      "Tamanho dos itens",
      "Risco associado aos itens"
    ],
    correctAnswer: 0,
    explanation: "O backlog deve ser priorizado principalmente por valor de negócio. O objetivo é entregar primeiro o que traz mais valor ao cliente e ao negócio.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 91,
    question: "Sua organização está deliberando entre dois projetos com mesmo período de retorno. O Projeto A tem TIR menor que B. Qual escolher?",
    options: [
      "Projeto A",
      "Projeto B",
      "Não há diferença",
      "As informações não são suficientes"
    ],
    correctAnswer: 1,
    explanation: "Com mesmo período de retorno (payback), a TIR (Taxa Interna de Retorno) maior indica melhor retorno sobre investimento. Projeto B com TIR maior é preferível.",
    domain: "Planejamento",
    difficulty: "hard"
  },
  {
    id: 92,
    question: "Você está gerenciando uma feira do livro e identificou riscos de baixa prioridade no início do planejamento. O que fazer?",
    options: [
      "Ignorá-los, pois a ocorrência é baixa",
      "Adicionar ao registro de riscos e continuar monitorando",
      "Transferir imediatamente para terceiros",
      "Criar reservas de contingência para todos"
    ],
    correctAnswer: 1,
    explanation: "Mesmo riscos de baixa prioridade devem ser documentados no registro de riscos e monitorados, pois podem mudar ao longo do projeto.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 93,
    question: "Você identificou um risco de taxas alfandegárias de US$10.000 com 70% de probabilidade. O que representa os US$7.000?",
    options: [
      "Impacto do risco",
      "Valor presente",
      "Valor Monetário Esperado (EMV)",
      "Reserva de contingência"
    ],
    correctAnswer: 2,
    explanation: "EMV (Valor Monetário Esperado) = Probabilidade × Impacto. Neste caso: 70% × $10.000 = $7.000. É usado para quantificar riscos em termos financeiros.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Charles está fazendo estudo de eficiência: investimento inicial R$50.000, receita R$15.000 no primeiro ano, custo operacional R$5.000 e fiscal R$5.000. Qual o retorno sobre capital investido?",
    options: [
      "10%",
      "15%",
      "20%",
      "30%"
    ],
    correctAnswer: 0,
    explanation: "Retorno = (Receita - Custos) / Investimento = (15.000 - 5.000 - 5.000) / 50.000 = 5.000 / 50.000 = 10%",
    domain: "Planejamento",
    difficulty: "hard"
  },

  // TRABALHO DO PROJETO (95-120)
  {
    id: 95,
    question: "Depois de verificar internamente o produto, você o enviou ao cliente que questionou se atende aos requisitos. O que fazer?",
    options: [
      "Confirmar teste interno e encerrar formalmente",
      "Realizar controle de qualidade e usar contingência para correções",
      "Colaborar com cliente para obter assinatura de aprovação",
      "Enviar engenheiro ao local para verificar requisitos"
    ],
    correctAnswer: 2,
    explanation: "A validação pelo cliente é essencial para encerramento. Trabalhar junto com o cliente para verificar conformidade e obter aceitação formal é o procedimento correto.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "Seu projeto de carro solar está quase completo quando você recebe solicitação de mudança APROVADA para substituir componente defeituoso das baterias. O que fazer?",
    options: [
      "Registrar no registro de problemas",
      "Reunir-se com CCB para discutir",
      "Reparar o componente",
      "Substituir o componente defeituoso"
    ],
    correctAnswer: 3,
    explanation: "Com uma mudança já APROVADA pelo CCB, a ação é implementá-la. A solicitação era para SUBSTITUIR o componente, então essa é a ação correta.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "Linda está liderando projeto de console de jogos. Ao testar, descobriu que um botão não funciona. Enviou solicitação de mudança para substituir o botão, que foi aprovada. Esta representa:",
    options: [
      "Ação corretiva",
      "Ação preventiva",
      "Reparo de defeito",
      "Atualização de linha de base"
    ],
    correctAnswer: 2,
    explanation: "Reparo de defeito é a correção de um componente ou resultado que não está conforme os requisitos. A substituição do botão defeituoso é um reparo de defeito.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Sua organização enfatiza melhoria contínua e faz reuniões após cada ponto de verificação. Em qual reunião você discute por que as coisas deram errado?",
    options: [
      "Retrospectiva, Lições Aprendidas, e Post-mortem",
      "Reunião de status",
      "Reunião de kickoff",
      "Daily stand-up"
    ],
    correctAnswer: 0,
    explanation: "Retrospectivas (ágil), Lições Aprendidas (preditivo) e Post-mortem são reuniões focadas em analisar o que funcionou, o que não funcionou e como melhorar.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "Durante conferência de licitantes, um fornecedor notou requisito ausente na RFQ. Você explicou o requisito por 15 minutos. Quando as propostas chegaram, apenas um fornecedor o incluiu. O que fazer?",
    options: [
      "Manter o fornecedor que notou o requisito ausente",
      "Manter o fornecedor que incluiu o requisito na resposta",
      "Estender o prazo para mais propostas",
      "Enviar RFQ ajustada a todos e dar oportunidade de reenviar"
    ],
    correctAnswer: 3,
    explanation: "Para garantir competição justa e igualdade, todos os fornecedores devem receber as mesmas informações formalmente. Uma RFQ corrigida deve ser enviada a todos com prazo para reenviar propostas.",
    domain: "Trabalho do Projeto",
    difficulty: "hard"
  },
  {
    id: 100,
    question: "Ana usa abordagem híbrida para atualização de software. Para entendimento comum entre stakeholders, ela deve definir requisitos através de:",
    options: [
      "Questionário para todas as partes interessadas",
      "Reunião individual com cada stakeholder",
      "Workshop de requisitos para desenvolver histórias de usuário",
      "Pesquisa com usuários atuais do software"
    ],
    correctAnswer: 2,
    explanation: "Workshops de requisitos com todos os stakeholders juntos promovem entendimento comum, resolvem diferenças e criam alinhamento. Histórias de usuário capturam necessidades de forma colaborativa.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },

  // LIDERANÇA E INTELIGÊNCIA EMOCIONAL (101-120)
  {
    id: 101,
    question: "Uma característica da 'Zona Verde' de liderança é:",
    options: [
      "Culpar os outros pelas circunstâncias",
      "Buscar soluções em vez de culpados",
      "Sentir-se ameaçado constantemente",
      "Enxergar conflito como batalha a vencer"
    ],
    correctAnswer: 1,
    explanation: "A Zona Verde representa comportamentos de liderança positivos: buscar soluções, ser aberto a feedback, assumir responsabilidade, colaborar e promover ambiente de confiança.",
    domain: "Liderança",
    difficulty: "easy"
  },
  {
    id: 102,
    question: "Um comportamento da 'Zona Vermelha' de liderança é:",
    options: [
      "Aceitar responsabilidade pelas consequências",
      "Ser aberto ao feedback",
      "Responder de forma defensiva",
      "Buscar excelência em vez de vitória"
    ],
    correctAnswer: 2,
    explanation: "A Zona Vermelha representa comportamentos negativos: defensividade, culpar outros, inflexibilidade, sentir-se ameaçado, usar vergonha e acusações, e ver conflito como batalha.",
    domain: "Liderança",
    difficulty: "easy"
  },
  {
    id: 103,
    question: "Um líder com alta inteligência emocional consegue:",
    options: [
      "Ignorar emoções para focar em resultados",
      "Identificar emoções, acalmar-se quando inquieto e definir metas de longo prazo",
      "Evitar conversas difíceis",
      "Julgar rapidamente os outros"
    ],
    correctAnswer: 1,
    explanation: "Inteligência emocional inclui: identificar próprias emoções, autorregulação, empatia, definir metas, persistir apesar de obstáculos e construir relacionamentos.",
    domain: "Liderança",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "Um líder servidor caracteriza-se por:",
    options: [
      "Dar ordens detalhadas e controlar cada passo",
      "Conhecer o perfil de cada liderado e buscar identificar suas necessidades",
      "Priorizar seus próprios objetivos",
      "Evitar contato próximo com a equipe"
    ],
    correctAnswer: 1,
    explanation: "Liderança servidora foca em servir os outros, conhecer suas necessidades, desenvolver pessoas, ouvir ativamente e criar ambiente de crescimento.",
    domain: "Liderança",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Para desenvolver inteligência emocional, é importante:",
    options: [
      "Evitar situações de pressão",
      "Utilizar críticas para crescer e pensar claramente sob pressão",
      "Sempre evitar conflitos",
      "Ignorar o feedback dos outros"
    ],
    correctAnswer: 1,
    explanation: "Desenvolver IE envolve usar críticas construtivamente, manter clareza sob pressão, reconhecer como seu comportamento afeta outros e ouvir sem julgar.",
    domain: "Liderança",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Um líder na Zona Verde:",
    options: [
      "É inflexível sobre seus interesses",
      "Pode ser firme, mas não inflexível sobre seus interesses",
      "Usa vergonha e culpa para motivar",
      "Concentra-se apenas em ganhos de curto prazo"
    ],
    correctAnswer: 1,
    explanation: "A Zona Verde equilibra firmeza com flexibilidade. Um líder pode defender seus interesses sem ser rígido, buscando soluções mutuamente benéficas.",
    domain: "Liderança",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "Um líder com boa escuta ativa:",
    options: [
      "Interrompe para mostrar que entendeu",
      "Consegue ouvir sem julgar e tenta enxergar pela perspectiva dos outros",
      "Foca em preparar sua resposta enquanto ouve",
      "Muda de assunto quando não concorda"
    ],
    correctAnswer: 1,
    explanation: "Escuta ativa envolve ouvir sem julgar, buscar entender a perspectiva do outro, demonstrar atenção genuína e estar presente na conversa.",
    domain: "Liderança",
    difficulty: "easy"
  },
  {
    id: 108,
    question: "Um líder que reconhece como seu comportamento afeta os outros demonstra:",
    options: [
      "Autoconsciência e consciência social",
      "Fraqueza e indecisão",
      "Foco excessivo nos outros",
      "Falta de assertividade"
    ],
    correctAnswer: 0,
    explanation: "Reconhecer o impacto do próprio comportamento é sinal de autoconsciência (entender a si mesmo) e consciência social (entender os outros) - componentes chave da IE.",
    domain: "Liderança",
    difficulty: "medium"
  },

  // MÉTRICAS E INCERTEZAS (109-130)
  {
    id: 109,
    question: "O gráfico de burndown em um sprint mostra trabalho acumulando na área B. Isto indica que:",
    options: [
      "A equipe está adiantada",
      "A equipe está atrasada ou sofreu algum bloqueio nesse período",
      "O projeto foi cancelado",
      "O sprint foi estendido"
    ],
    correctAnswer: 1,
    explanation: "Um burndown que sobe ou fica plano indica trabalho não sendo completado como esperado. A área B com acumulação sugere atraso ou impedimento.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "A métrica 'Throughput' no Kanban mede:",
    options: [
      "Tempo total de um item no sistema",
      "Quantidade de itens completados por unidade de tempo",
      "Número de pessoas na equipe",
      "Custo por tarefa"
    ],
    correctAnswer: 1,
    explanation: "Throughput é a quantidade de itens de trabalho completados por período de tempo (dia, semana, sprint). É uma medida de produtividade e vazão do sistema.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "Velocidade (Velocity) em Scrum representa:",
    options: [
      "Rapidez de digitação da equipe",
      "Quantidade de pontos de história completados por sprint",
      "Número de bugs encontrados",
      "Custos por sprint"
    ],
    correctAnswer: 1,
    explanation: "Velocity é a quantidade de pontos de história que uma equipe consegue completar em um sprint. É usada para prever capacidade futura e planejar releases.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 112,
    question: "O Diagrama de Fluxo Cumulativo (CFD) no Kanban mostra:",
    options: [
      "Apenas tarefas concluídas",
      "Acumulação de trabalho em cada estágio ao longo do tempo",
      "Nomes dos membros da equipe",
      "Apenas riscos identificados"
    ],
    correctAnswer: 1,
    explanation: "O CFD mostra a quantidade de trabalho em cada estágio do fluxo ao longo do tempo. Permite identificar gargalos, WIP crescente e problemas de fluxo.",
    domain: "Métricas e Incertezas",
    difficulty: "hard"
  },
  {
    id: 113,
    question: "Análise de Monte Carlo é usada para:",
    options: [
      "Calcular salários",
      "Simular cenários e analisar probabilidades de resultados",
      "Criar cronogramas manualmente",
      "Avaliar desempenho individual"
    ],
    correctAnswer: 1,
    explanation: "Monte Carlo usa simulação estatística com múltiplos cenários para analisar riscos e prever probabilidades de atingir objetivos de custo, cronograma, etc.",
    domain: "Métricas e Incertezas",
    difficulty: "hard"
  },

  // ENTREGA (114-130)
  {
    id: 114,
    question: "O conceito de 'Definition of Done' em Scrum define:",
    options: [
      "Quando o projeto inteiro termina",
      "Os critérios que um incremento deve atender para ser considerado completo",
      "A data de entrega final",
      "O orçamento máximo"
    ],
    correctAnswer: 1,
    explanation: "Definition of Done é um acordo da equipe sobre os critérios que cada incremento deve atender para ser considerado pronto (testado, documentado, revisado, etc.).",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 115,
    question: "Critérios de Aceitação diferem de Definition of Done porque:",
    options: [
      "São a mesma coisa",
      "Critérios de Aceitação são específicos para cada história/item, DoD é para todos",
      "DoD é mais detalhado",
      "Critérios de Aceitação são opcionais"
    ],
    correctAnswer: 1,
    explanation: "Critérios de Aceitação são condições específicas que uma história de usuário individual deve atender. DoD são critérios gerais que se aplicam a todo incremento.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "Um 'Incremento' em Scrum é:",
    options: [
      "O aumento de orçamento",
      "A soma de todos os itens do backlog completados durante o sprint mais incrementos anteriores",
      "A quantidade de horas trabalhadas",
      "O número de reuniões realizadas"
    ],
    correctAnswer: 1,
    explanation: "Incremento é a soma de todos os itens do Product Backlog completados durante a Sprint mais o valor de todos os incrementos anteriores. Deve ser utilizável e atender à DoD.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "O processo de validação do escopo serve para:",
    options: [
      "Verificar qualidade técnica",
      "Obter aceitação formal das entregas pelos stakeholders",
      "Calcular custos finais",
      "Definir novos requisitos"
    ],
    correctAnswer: 1,
    explanation: "Validação do Escopo é o processo de formalizar a aceitação das entregas do projeto pelos stakeholders, obtendo sign-off de que o trabalho está conforme os requisitos.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "Controle de Qualidade (QC) difere de Garantia de Qualidade (QA) porque:",
    options: [
      "São idênticos",
      "QC inspeciona entregas; QA audita processos",
      "QA é mais barato",
      "QC ocorre apenas no final"
    ],
    correctAnswer: 1,
    explanation: "QC (Controle de Qualidade) verifica se os produtos atendem aos requisitos através de inspeções e testes. QA (Garantia de Qualidade) avalia se os processos estão sendo seguidos.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "O encerramento formal do projeto inclui:",
    options: [
      "Apenas desligar sistemas",
      "Documentação de lições aprendidas, liberação de recursos e aceitação formal",
      "Apenas festa de encerramento",
      "Apenas arquivamento de documentos"
    ],
    correctAnswer: 1,
    explanation: "O encerramento formal inclui: obter aceitação final, documentar lições aprendidas, arquivar documentos, liberar recursos, celebrar e fechar contratos.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 120,
    question: "Em projetos ágeis, a Sprint Review serve para:",
    options: [
      "Discutir processos da equipe",
      "Apresentar o incremento aos stakeholders e obter feedback",
      "Planejar a próxima sprint",
      "Avaliar desempenho individual"
    ],
    correctAnswer: 1,
    explanation: "A Sprint Review é uma reunião para inspecionar o Incremento e adaptar o Product Backlog. Stakeholders fornecem feedback sobre o que foi entregue.",
    domain: "Entrega",
    difficulty: "easy"
  },

  // QUESTÕES ADICIONAIS DO PMBOK (121-200)
  {
    id: 121,
    question: "O princípio PMBOK 7 'Foco no Valor' significa:",
    options: [
      "Focar apenas em reduzir custos",
      "Avaliar e entregar valor contínuo ao longo do projeto",
      "Ignorar stakeholders menores",
      "Priorizar velocidade sobre qualidade"
    ],
    correctAnswer: 1,
    explanation: "Foco no Valor significa continuamente avaliar e ajustar entregas para maximizar o valor entregue aos stakeholders e ao negócio.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "O princípio 'Navegue na Complexidade' do PMBOK 7 orienta a:",
    options: [
      "Evitar projetos complexos",
      "Reconhecer, avaliar e responder à complexidade usando abordagens apropriadas",
      "Simplificar tudo ao máximo",
      "Ignorar interdependências"
    ],
    correctAnswer: 1,
    explanation: "Complexidade é inerente a projetos. O princípio orienta a reconhecê-la e usar técnicas apropriadas (iteração, prototipagem, etc.) para navegá-la.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 123,
    question: "O princípio 'Otimize Respostas a Riscos' enfatiza:",
    options: [
      "Eliminar todos os riscos",
      "Avaliar continuamente riscos e maximizar impactos positivos enquanto minimiza negativos",
      "Aceitar todos os riscos",
      "Transferir todos os riscos"
    ],
    correctAnswer: 1,
    explanation: "O princípio reconhece que riscos são inevitáveis e orienta a avaliar continuamente, responder apropriadamente e buscar oportunidades (riscos positivos).",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "O princípio 'Incorpore Qualidade em Processos e Entregas' significa:",
    options: [
      "Inspecionar qualidade apenas no final",
      "Construir qualidade desde o início, não apenas inspecionar depois",
      "Qualidade é responsabilidade apenas do QA",
      "Aceitar alguns defeitos para ir mais rápido"
    ],
    correctAnswer: 1,
    explanation: "Qualidade deve ser construída nos processos e produtos desde o início, não apenas verificada no final. Prevenção é mais eficaz que inspeção.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "O princípio 'Habilite Mudanças para Alcançar a Visão' reconhece que:",
    options: [
      "Mudanças devem ser evitadas sempre",
      "Mudanças podem ser necessárias para alcançar os objetivos do projeto",
      "Apenas o cliente pode solicitar mudanças",
      "Mudanças não afetam o escopo"
    ],
    correctAnswer: 1,
    explanation: "O princípio reconhece que mudanças são frequentemente necessárias para responder a novos insights, requisitos ou condições e alcançar valor.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "O princípio 'Adapte com Base no Contexto' orienta a:",
    options: [
      "Usar sempre a mesma metodologia",
      "Personalizar a abordagem com base nas características únicas do projeto",
      "Copiar projetos anteriores",
      "Seguir rigidamente padrões"
    ],
    correctAnswer: 1,
    explanation: "Cada projeto é único. O princípio orienta a adaptar metodologias, processos e práticas às necessidades específicas do projeto e seu contexto.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 127,
    question: "O princípio 'Construa Qualidade nos Processos e Resultados' difere de controle de qualidade porque:",
    options: [
      "São iguais",
      "O princípio enfatiza prevenção e incorporação desde o início",
      "QC é mais importante",
      "O princípio ignora inspeção"
    ],
    correctAnswer: 1,
    explanation: "O princípio vai além de inspeção (QC), enfatizando que qualidade deve ser incorporada em todos os processos desde o início (prevenção sobre detecção).",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "O Domínio 'Ciclo de Vida' no PMBOK 7 aborda:",
    options: [
      "Apenas cronogramas",
      "Fases do projeto desde início até encerramento e abordagens de desenvolvimento",
      "Apenas contratações",
      "Apenas recursos humanos"
    ],
    correctAnswer: 1,
    explanation: "O domínio de Ciclo de Vida aborda como o projeto progride através de fases e qual abordagem (preditiva, adaptativa, híbrida) é mais apropriada.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "O Domínio 'Incerteza' no PMBOK 7 trata de:",
    options: [
      "Apenas riscos negativos",
      "Riscos, ambiguidade, complexidade e volatilidade",
      "Apenas custos incertos",
      "Apenas cronograma incerto"
    ],
    correctAnswer: 1,
    explanation: "O domínio de Incerteza aborda riscos (positivos e negativos), ambiguidade, complexidade e volatilidade que afetam projetos.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 130,
    question: "O Domínio 'Medição' no PMBOK 7 enfatiza:",
    options: [
      "Apenas medir horas trabalhadas",
      "Avaliar desempenho do projeto e tomar ações baseadas em dados",
      "Apenas medir custos",
      "Evitar métricas para não sobrecarregar"
    ],
    correctAnswer: 1,
    explanation: "O domínio de Medição enfatiza avaliar desempenho do projeto através de métricas relevantes e usar esses dados para tomada de decisão.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 131,
    question: "Em projetos da NASA, o conceito de 'Technical Readiness Level' (TRL) é usado para:",
    options: [
      "Avaliar custo de tecnologias",
      "Medir a maturidade de uma tecnologia para uso em missões",
      "Classificar astronautas",
      "Definir cronogramas"
    ],
    correctAnswer: 1,
    explanation: "TRL é uma escala de 1-9 usada pela NASA para avaliar a maturidade de tecnologias. Quanto maior o TRL, mais pronta a tecnologia está para uso operacional.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 132,
    question: "Em projetos de óleo e gás, FEED (Front-End Engineering Design) é:",
    options: [
      "Fase de operação",
      "Fase de engenharia conceitual antes do investimento principal",
      "Apenas documentação legal",
      "Fase de descomissionamento"
    ],
    correctAnswer: 1,
    explanation: "FEED é a fase de engenharia preliminar onde escopo, custos e cronograma são definidos antes de aprovar o investimento principal do projeto.",
    domain: "Planejamento",
    difficulty: "hard"
  },
  {
    id: 133,
    question: "O conceito de 'Lessons Learned' é importante porque:",
    options: [
      "É requisito legal",
      "Captura conhecimento para melhorar projetos futuros",
      "Apenas para relatórios",
      "É opcional em todos os projetos"
    ],
    correctAnswer: 1,
    explanation: "Lições aprendidas capturam experiências do projeto (positivas e negativas) para que projetos futuros possam se beneficiar e evitar repetir erros.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 134,
    question: "Um 'Information Radiator' em ágil é:",
    options: [
      "Equipamento de comunicação",
      "Display visual que mostra informações do projeto de forma passiva",
      "Documento confidencial",
      "Software de email"
    ],
    correctAnswer: 1,
    explanation: "Information Radiators são displays físicos ou digitais (quadros Kanban, burndown charts) que mostram status do projeto de forma visível e passiva a todos.",
    domain: "Comunicação",
    difficulty: "medium"
  },
  {
    id: 135,
    question: "O papel do Product Owner inclui:",
    options: [
      "Escrever código",
      "Maximizar valor do produto e gerenciar o Product Backlog",
      "Facilitar reuniões Scrum",
      "Gerenciar recursos humanos"
    ],
    correctAnswer: 1,
    explanation: "O Product Owner é responsável por maximizar o valor do produto através da gestão eficaz do Product Backlog, representando stakeholders e definindo prioridades.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 136,
    question: "O papel do Scrum Master inclui:",
    options: [
      "Definir prioridades do backlog",
      "Facilitar eventos Scrum e remover impedimentos",
      "Aprovar férias da equipe",
      "Decidir arquitetura técnica"
    ],
    correctAnswer: 1,
    explanation: "O Scrum Master é um líder servidor que ajuda a equipe a entender e aplicar Scrum, facilita eventos, remove impedimentos e protege a equipe de distrações.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "Em Scrum, 'Sprint Goal' é:",
    options: [
      "A lista completa de tarefas",
      "O objetivo único que dá coerência ao sprint e direciona a equipe",
      "O número de pontos a completar",
      "A data de entrega"
    ],
    correctAnswer: 1,
    explanation: "Sprint Goal é um objetivo coerente que fornece direção e propósito para a equipe durante o sprint. Ajuda a tomar decisões sobre o que priorizar.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "Product Backlog Refinement (Grooming) serve para:",
    options: [
      "Aprovar o sprint",
      "Detalhar, estimar e ordenar itens do backlog antes do planejamento",
      "Encerrar o projeto",
      "Avaliar desempenho"
    ],
    correctAnswer: 1,
    explanation: "Refinamento é a atividade contínua de adicionar detalhes, estimar e ordenar itens do Product Backlog para prepará-los para sprints futuros.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "Planning Poker é uma técnica de:",
    options: [
      "Priorização de requisitos",
      "Estimativa colaborativa usando consenso",
      "Seleção de fornecedores",
      "Avaliação de riscos"
    ],
    correctAnswer: 1,
    explanation: "Planning Poker é uma técnica de estimativa ágil onde membros da equipe estimam simultaneamente usando cartas, promovendo discussão e consenso.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 140,
    question: "User Story Map é uma técnica para:",
    options: [
      "Desenhar arquitetura técnica",
      "Visualizar funcionalidades organizadas por jornada do usuário",
      "Calcular custos",
      "Definir contratos"
    ],
    correctAnswer: 1,
    explanation: "User Story Mapping organiza histórias de usuário visualmente ao longo da jornada do usuário, ajudando a planejar releases e identificar gaps.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "A técnica MoSCoW prioriza requisitos em:",
    options: [
      "Alto, Médio, Baixo",
      "Must have, Should have, Could have, Won't have",
      "1, 2, 3, 4",
      "Urgente, Importante, Normal"
    ],
    correctAnswer: 1,
    explanation: "MoSCoW categoriza requisitos em: Must have (essenciais), Should have (importantes), Could have (desejáveis) e Won't have (excluídos desta entrega).",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Em gestão de riscos, a estratégia 'Mitigar' significa:",
    options: [
      "Ignorar o risco",
      "Reduzir probabilidade ou impacto do risco",
      "Transferir para terceiros",
      "Aceitar o risco"
    ],
    correctAnswer: 1,
    explanation: "Mitigação envolve tomar ações para reduzir a probabilidade de ocorrência do risco e/ou seu impacto caso ocorra.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "A estratégia de risco 'Transferir' tipicamente envolve:",
    options: [
      "Ignorar completamente",
      "Passar a responsabilidade para terceiros (ex: seguro, contrato)",
      "Aumentar a probabilidade",
      "Aceitar sem ação"
    ],
    correctAnswer: 1,
    explanation: "Transferência move a responsabilidade pelo risco para terceiros, geralmente através de seguros, garantias ou cláusulas contratuais.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 144,
    question: "Riscos positivos (oportunidades) podem ser tratados com:",
    options: [
      "Apenas evitar",
      "Explorar, Compartilhar, Melhorar, Aceitar",
      "Apenas transferir",
      "Apenas ignorar"
    ],
    correctAnswer: 1,
    explanation: "Oportunidades podem ser exploradas (garantir), compartilhadas (parceiros), melhoradas (aumentar probabilidade) ou aceitas.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "O conceito de 'Reserva de Contingência' é:",
    options: [
      "Orçamento extra para novas funcionalidades",
      "Fundos para riscos identificados e quantificados",
      "Salário extra para a equipe",
      "Fundo para festas"
    ],
    correctAnswer: 1,
    explanation: "Reserva de contingência é alocada para cobrir riscos conhecidos que foram identificados e quantificados durante o planejamento de riscos.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "Reserva de Gerenciamento difere de Contingência porque:",
    options: [
      "São iguais",
      "Gerenciamento é para riscos desconhecidos (unknown unknowns)",
      "Contingência é maior sempre",
      "Gerenciamento é controlada pela equipe"
    ],
    correctAnswer: 1,
    explanation: "Reserva de Gerenciamento cobre riscos desconhecidos (unknown unknowns), controlada pelo patrocinador. Contingência cobre riscos conhecidos, controlada pelo GP.",
    domain: "Métricas e Incertezas",
    difficulty: "hard"
  },
  {
    id: 147,
    question: "Earned Value Management (EVM) usa qual métrica para medir progresso físico?",
    options: [
      "PV (Planned Value)",
      "EV (Earned Value)",
      "AC (Actual Cost)",
      "BAC (Budget at Completion)"
    ],
    correctAnswer: 1,
    explanation: "EV (Earned Value/Valor Agregado) mede o trabalho realmente completado em termos do orçamento autorizado para esse trabalho.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "CPI (Cost Performance Index) menor que 1 indica:",
    options: [
      "Projeto abaixo do orçamento",
      "Projeto acima do orçamento (over budget)",
      "Projeto no prazo",
      "Projeto adiantado"
    ],
    correctAnswer: 1,
    explanation: "CPI = EV/AC. CPI < 1 significa que o custo real é maior que o valor agregado, indicando que o projeto está gastando mais do que planejado.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 149,
    question: "SPI (Schedule Performance Index) maior que 1 indica:",
    options: [
      "Projeto atrasado",
      "Projeto adiantado em relação ao cronograma",
      "Projeto acima do orçamento",
      "Projeto cancelado"
    ],
    correctAnswer: 1,
    explanation: "SPI = EV/PV. SPI > 1 significa que o valor agregado é maior que o planejado, indicando que o projeto está adiantado.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 150,
    question: "A técnica de entrevista para coleta de requisitos é melhor quando:",
    options: [
      "Há muitos stakeholders",
      "É necessário obter informações detalhadas de especialistas específicos",
      "O tempo é muito curto",
      "Não há stakeholders disponíveis"
    ],
    correctAnswer: 1,
    explanation: "Entrevistas são eficazes para obter informações detalhadas e profundas de stakeholders específicos, permitindo explorar tópicos em profundidade.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 151,
    question: "Protótipos são úteis para:",
    options: [
      "Apenas documentação final",
      "Validar requisitos e obter feedback antes de construir o produto final",
      "Substituir todos os testes",
      "Apenas projetos pequenos"
    ],
    correctAnswer: 1,
    explanation: "Protótipos permitem que stakeholders visualizem e interajam com uma versão preliminar, validando requisitos e obtendo feedback valioso cedo.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "A WBS (Work Breakdown Structure) organiza o trabalho do projeto em:",
    options: [
      "Ordem cronológica",
      "Hierarquia de entregas decompostas em pacotes de trabalho",
      "Ordem de importância",
      "Categorias de custo"
    ],
    correctAnswer: 1,
    explanation: "A WBS decompõe o escopo total do projeto em componentes menores e mais gerenciáveis, organizados hierarquicamente por entregas.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "O Dicionário da WBS contém:",
    options: [
      "Apenas nomes dos pacotes",
      "Descrições detalhadas de cada componente da WBS",
      "Apenas custos",
      "Apenas cronograma"
    ],
    correctAnswer: 1,
    explanation: "O Dicionário da WBS fornece descrições detalhadas de cada pacote de trabalho, incluindo escopo, entregas, recursos, custos e critérios de aceitação.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 154,
    question: "Critical Path Method (CPM) identifica:",
    options: [
      "As tarefas mais caras",
      "A sequência mais longa de atividades que determina a duração mínima do projeto",
      "As tarefas mais fáceis",
      "Os recursos mais importantes"
    ],
    correctAnswer: 1,
    explanation: "O caminho crítico é a sequência de atividades que determina a duração total do projeto. Qualquer atraso no caminho crítico atrasa o projeto.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "Float (ou Slack) representa:",
    options: [
      "Tempo extra de trabalho",
      "Tempo que uma atividade pode atrasar sem afetar o projeto",
      "Custo adicional",
      "Risco do projeto"
    ],
    correctAnswer: 1,
    explanation: "Float é a quantidade de tempo que uma atividade pode ser atrasada sem atrasar o projeto como um todo ou violar restrições.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "Fast Tracking é uma técnica de compressão que:",
    options: [
      "Adiciona recursos para fazer mais rápido",
      "Executa atividades em paralelo que normalmente seriam sequenciais",
      "Reduz escopo",
      "Aumenta orçamento"
    ],
    correctAnswer: 1,
    explanation: "Fast Tracking executa atividades em paralelo, mas aumenta riscos. Não adiciona custos diretamente mas pode causar retrabalho.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "Crashing é uma técnica que:",
    options: [
      "Paraleliza atividades",
      "Adiciona recursos para reduzir duração ao menor custo incremental",
      "Reduz qualidade",
      "Elimina atividades"
    ],
    correctAnswer: 1,
    explanation: "Crashing adiciona recursos (pessoas, horas extras, etc.) para comprimir o cronograma. Aumenta custos mas não necessariamente aumenta riscos como fast tracking.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 158,
    question: "O conceito de 'Gold Plating' refere-se a:",
    options: [
      "Qualidade excelente",
      "Adicionar funcionalidades não solicitadas pelo cliente",
      "Exceder orçamento",
      "Usar materiais premium"
    ],
    correctAnswer: 1,
    explanation: "Gold plating é adicionar funcionalidades ou melhorias não solicitadas. É considerado negativo pois adiciona trabalho não autorizado e riscos.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 159,
    question: "Scope Creep é:",
    options: [
      "Mudanças aprovadas no escopo",
      "Expansão não controlada do escopo sem aprovação formal",
      "Redução de escopo",
      "Mudança de equipe"
    ],
    correctAnswer: 1,
    explanation: "Scope creep é a adição não controlada de funcionalidades ou trabalho sem aprovação através do processo de controle de mudanças.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "O Termo de Abertura do Projeto (Project Charter) autoriza:",
    options: [
      "Apenas o orçamento",
      "O projeto formalmente e dá autoridade ao gerente de projeto",
      "Apenas a equipe",
      "Apenas o cronograma"
    ],
    correctAnswer: 1,
    explanation: "O Project Charter autoriza formalmente a existência do projeto, define objetivos de alto nível e dá autoridade ao gerente de projeto para usar recursos.",
    domain: "Ambiente Corporativo",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "O patrocinador do projeto geralmente:",
    options: [
      "Executa tarefas técnicas",
      "Fornece recursos, direção estratégica e resolve problemas escalados",
      "Gerencia a equipe diariamente",
      "Escreve código"
    ],
    correctAnswer: 1,
    explanation: "O patrocinador é o campeão do projeto, provendo recursos, orientação estratégica, suporte executivo e resolvendo impedimentos além da autoridade do GP.",
    domain: "Stakeholders",
    difficulty: "easy"
  },
  {
    id: 162,
    question: "Agile Manifesto valoriza:",
    options: [
      "Processos sobre pessoas",
      "Indivíduos e interações sobre processos e ferramentas",
      "Documentação sobre software",
      "Contratos sobre colaboração"
    ],
    correctAnswer: 1,
    explanation: "O Manifesto Ágil valoriza: Indivíduos e interações, Software funcionando, Colaboração com cliente, e Responder a mudanças - sobre as alternativas.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 163,
    question: "Os 4 valores do Manifesto Ágil incluem todos, EXCETO:",
    options: [
      "Indivíduos e interações sobre processos e ferramentas",
      "Software funcionando sobre documentação abrangente",
      "Velocidade máxima sobre qualidade",
      "Responder a mudanças sobre seguir um plano"
    ],
    correctAnswer: 2,
    explanation: "Os 4 valores são: Indivíduos/interações, Software funcionando, Colaboração com cliente, Responder a mudanças. Velocidade sobre qualidade não é um valor ágil.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "Um projeto com alto grau de incerteza sobre requisitos deveria usar:",
    options: [
      "Apenas abordagem preditiva",
      "Abordagem adaptativa/ágil com iterações curtas",
      "Nenhum planejamento",
      "Apenas documentação"
    ],
    correctAnswer: 1,
    explanation: "Alta incerteza requer abordagens que permitam aprendizado e adaptação frequentes através de iterações curtas e feedback contínuo.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 165,
    question: "Cynefin Framework ajuda a escolher abordagens classificando contextos em:",
    options: [
      "Fácil e Difícil",
      "Simples, Complicado, Complexo, Caótico",
      "Pequeno e Grande",
      "Rápido e Lento"
    ],
    correctAnswer: 1,
    explanation: "Cynefin classifica contextos para ajudar a escolher abordagens apropriadas. Contextos simples e complicados são mais previsíveis; complexos e caóticos requerem experimentação.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 166,
    question: "O conceito de 'Servant Leadership' significa que o líder:",
    options: [
      "É servido pela equipe",
      "Serve a equipe para ajudá-la a ter sucesso",
      "Toma todas as decisões",
      "Delega toda responsabilidade"
    ],
    correctAnswer: 1,
    explanation: "Liderança servidora coloca o sucesso da equipe em primeiro lugar. O líder remove impedimentos, facilita e cria condições para a equipe prosperar.",
    domain: "Liderança",
    difficulty: "easy"
  },
  {
    id: 167,
    question: "Change Control Board (CCB) é responsável por:",
    options: [
      "Implementar mudanças",
      "Revisar, avaliar e aprovar ou rejeitar solicitações de mudança",
      "Solicitar mudanças",
      "Ignorar mudanças"
    ],
    correctAnswer: 1,
    explanation: "O CCB é o grupo formalmente autorizado para revisar e tomar decisões sobre solicitações de mudança no projeto.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 168,
    question: "Configuration Management garante:",
    options: [
      "Apenas versões de código",
      "Integridade dos produtos e documentos do projeto através de controle de versão e mudanças",
      "Apenas backup de dados",
      "Apenas segurança de rede"
    ],
    correctAnswer: 1,
    explanation: "Gerenciamento de Configuração controla versões de todos os artefatos do projeto, garantindo integridade e rastreabilidade de mudanças.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 169,
    question: "O ciclo PDCA (Deming) representa:",
    options: [
      "Project, Document, Control, Accept",
      "Plan, Do, Check, Act",
      "Prepare, Develop, Close, Approve",
      "Problem, Decision, Cost, Action"
    ],
    correctAnswer: 1,
    explanation: "PDCA é Plan (planejar), Do (executar), Check (verificar), Act (agir). É um ciclo de melhoria contínua aplicável a processos e projetos.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 170,
    question: "Análise SWOT avalia:",
    options: [
      "Apenas custos",
      "Forças, Fraquezas, Oportunidades e Ameaças",
      "Apenas cronograma",
      "Apenas qualidade"
    ],
    correctAnswer: 1,
    explanation: "SWOT analisa Strengths (forças), Weaknesses (fraquezas), Opportunities (oportunidades) e Threats (ameaças) - internas e externas.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 171,
    question: "Root Cause Analysis (Análise de Causa Raiz) usa técnicas como:",
    options: [
      "Apenas brainstorming",
      "5 Porquês, Diagrama de Ishikawa (Espinha de Peixe)",
      "Apenas votação",
      "Apenas intuição"
    ],
    correctAnswer: 1,
    explanation: "Análise de causa raiz usa técnicas como 5 Porquês (perguntar 'por quê' repetidamente) e Diagrama de Ishikawa para identificar causas fundamentais de problemas.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "O Diagrama de Ishikawa organiza causas potenciais de um problema em:",
    options: [
      "Ordem cronológica",
      "Categorias como Pessoas, Processos, Máquinas, Materiais, Ambiente",
      "Ordem de custo",
      "Ordem alfabética"
    ],
    correctAnswer: 1,
    explanation: "O diagrama de espinha de peixe organiza causas em categorias (6Ms: Mão de obra, Método, Máquina, Material, Medição, Meio ambiente) para análise estruturada.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 173,
    question: "Diagrama de Pareto é baseado na regra:",
    options: [
      "100/0",
      "80/20 - 80% dos efeitos vêm de 20% das causas",
      "50/50",
      "90/10"
    ],
    correctAnswer: 1,
    explanation: "O Princípio de Pareto sugere que 80% dos problemas são causados por 20% das causas. O diagrama prioriza focar nas causas mais significativas.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 174,
    question: "Contratos de Preço Fixo (Fixed Price) são mais apropriados quando:",
    options: [
      "O escopo é incerto",
      "O escopo é bem definido e estável",
      "Há muitas mudanças esperadas",
      "O fornecedor deve correr todos os riscos"
    ],
    correctAnswer: 1,
    explanation: "Contratos de preço fixo funcionam melhor quando o escopo é claro e estável, pois o preço é acordado antecipadamente.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 175,
    question: "Contratos Time & Materials (T&M) são apropriados quando:",
    options: [
      "O escopo é 100% definido",
      "O escopo não pode ser definido precisamente no início",
      "O preço deve ser fixo",
      "Não há riscos"
    ],
    correctAnswer: 1,
    explanation: "T&M é útil quando o escopo não está totalmente definido. O cliente paga pelo tempo e materiais usados, com mais flexibilidade mas menos previsibilidade de custo.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 176,
    question: "A matriz de probabilidade e impacto de riscos ajuda a:",
    options: [
      "Calcular custos exatos",
      "Priorizar riscos com base em sua probabilidade e impacto potencial",
      "Eliminar todos os riscos",
      "Atribuir recursos"
    ],
    correctAnswer: 1,
    explanation: "A matriz combina probabilidade de ocorrência com impacto potencial para priorizar quais riscos requerem mais atenção e resposta.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 177,
    question: "O Registro de Riscos contém:",
    options: [
      "Apenas riscos negativos",
      "Lista de riscos identificados, suas análises e respostas planejadas",
      "Apenas custos de riscos",
      "Apenas nomes dos responsáveis"
    ],
    correctAnswer: 1,
    explanation: "O Registro de Riscos documenta todos os riscos identificados (positivos e negativos), suas análises, respostas planejadas, responsáveis e status.",
    domain: "Métricas e Incertezas",
    difficulty: "easy"
  },
  {
    id: 178,
    question: "Técnicas de resolução de conflitos incluem todas, EXCETO:",
    options: [
      "Colaboração (problema-solving)",
      "Compromisso",
      "Evitar",
      "Demissão imediata"
    ],
    correctAnswer: 3,
    explanation: "Técnicas reconhecidas incluem: Colaboração, Compromisso, Evitar, Acomodar e Forçar. Demissão imediata não é técnica de resolução de conflitos.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 179,
    question: "A técnica de resolução de conflitos 'Colaboração' busca:",
    options: [
      "Uma parte ceder completamente",
      "Solução ganha-ganha que satisfaz todas as partes",
      "Ignorar o conflito",
      "Decisão autoritária"
    ],
    correctAnswer: 1,
    explanation: "Colaboração (problem-solving) trabalha através do conflito para encontrar uma solução que atenda às necessidades de todas as partes - ganha-ganha.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 180,
    question: "Na pirâmide de Maslow, necessidades de 'Autorrealização' estão:",
    options: [
      "Na base",
      "No topo, representando potencial máximo e crescimento",
      "No meio",
      "Não fazem parte da pirâmide"
    ],
    correctAnswer: 1,
    explanation: "Autorrealização está no topo da pirâmide de Maslow, representando a necessidade de alcançar o potencial máximo e crescimento pessoal.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 181,
    question: "Segundo Herzberg, fatores motivadores incluem:",
    options: [
      "Apenas salário",
      "Reconhecimento, realização, crescimento, responsabilidade",
      "Apenas condições de trabalho",
      "Apenas políticas da empresa"
    ],
    correctAnswer: 1,
    explanation: "Motivadores de Herzberg incluem: reconhecimento, realização, crescimento, responsabilidade, o trabalho em si. Salário e condições são fatores higiênicos.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Comunicação eficaz em projetos deve ser:",
    options: [
      "Apenas verbal",
      "Clara, concisa, oportuna e apropriada para o público",
      "Apenas escrita",
      "Apenas formal"
    ],
    correctAnswer: 1,
    explanation: "Comunicação eficaz é clara (sem ambiguidade), concisa (sem excesso), oportuna (no momento certo) e adaptada ao público-alvo.",
    domain: "Comunicação",
    difficulty: "easy"
  },
  {
    id: 183,
    question: "O plano de gerenciamento de comunicações define:",
    options: [
      "Apenas emails a enviar",
      "Quem precisa de qual informação, quando, como e com qual frequência",
      "Apenas reuniões",
      "Apenas relatórios"
    ],
    correctAnswer: 1,
    explanation: "O plano de comunicações define requisitos de informação dos stakeholders, métodos de distribuição, frequência, responsáveis e ferramentas.",
    domain: "Comunicação",
    difficulty: "medium"
  },
  {
    id: 184,
    question: "Retrospectiva em Scrum responde a:",
    options: [
      "Quanto custou o sprint",
      "O que funcionou bem, o que pode melhorar e quais ações tomar",
      "Quantas horas foram trabalhadas",
      "Quem teve melhor desempenho"
    ],
    correctAnswer: 1,
    explanation: "A Retrospectiva examina o sprint passado em termos de pessoas, relacionamentos, processos e ferramentas, identificando melhorias para o próximo sprint.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 185,
    question: "Sprint Planning em Scrum define:",
    options: [
      "Apenas a data de entrega",
      "O que será entregue no sprint e como o trabalho será feito",
      "Apenas os custos",
      "Apenas os riscos"
    ],
    correctAnswer: 1,
    explanation: "Sprint Planning define a Meta do Sprint, seleciona itens do backlog e cria o plano (Sprint Backlog) de como a equipe entregará o incremento.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 186,
    question: "A duração máxima de uma Daily Scrum é:",
    options: [
      "1 hora",
      "15 minutos",
      "30 minutos",
      "Ilimitada"
    ],
    correctAnswer: 1,
    explanation: "A Daily Scrum é time-boxed em 15 minutos. É um evento rápido para a equipe sincronizar e planejar as próximas 24 horas.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 187,
    question: "Quem participa da Sprint Review?",
    options: [
      "Apenas a equipe Scrum",
      "Equipe Scrum e stakeholders-chave",
      "Apenas o Product Owner",
      "Apenas o Scrum Master"
    ],
    correctAnswer: 1,
    explanation: "A Sprint Review inclui a equipe Scrum (PO, SM, Developers) e stakeholders-chave para inspecionar o incremento e adaptar o backlog.",
    domain: "Processo",
    difficulty: "easy"
  },
  {
    id: 188,
    question: "Em projetos de grande escala, SAFe (Scaled Agile Framework) usa:",
    options: [
      "Apenas uma equipe Scrum",
      "Múltiplas equipes ágeis coordenadas em ARTs (Agile Release Trains)",
      "Apenas abordagem cascata",
      "Nenhuma coordenação"
    ],
    correctAnswer: 1,
    explanation: "SAFe escala ágil organizando múltiplas equipes em ARTs (Agile Release Trains) que planejam e entregam valor juntas em Program Increments.",
    domain: "Processo",
    difficulty: "hard"
  },
  {
    id: 189,
    question: "Benefit Realization é o processo de:",
    options: [
      "Calcular custos",
      "Garantir que os benefícios esperados do projeto sejam alcançados",
      "Pagar fornecedores",
      "Encerrar contratos"
    ],
    correctAnswer: 1,
    explanation: "Realização de Benefícios assegura que os benefícios planejados do projeto sejam efetivamente entregues e possam ser medidos após o projeto.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 190,
    question: "Business Case justifica o projeto através de:",
    options: [
      "Apenas técnicas",
      "Análise de custos, benefícios, riscos e alternativas",
      "Apenas cronograma",
      "Apenas requisitos técnicos"
    ],
    correctAnswer: 1,
    explanation: "O Business Case documenta a justificativa do projeto, incluindo análise de custos-benefícios, riscos, alternativas consideradas e retorno esperado.",
    domain: "Ambiente Corporativo",
    difficulty: "medium"
  },
  {
    id: 191,
    question: "Quality Assurance (QA) foca em:",
    options: [
      "Inspecionar produtos finais",
      "Auditar processos para garantir que padrões estão sendo seguidos",
      "Corrigir defeitos",
      "Testar software"
    ],
    correctAnswer: 1,
    explanation: "QA é sobre processos - garante que políticas, procedimentos e padrões de qualidade estão sendo seguidos. QC inspeciona produtos.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 192,
    question: "Cost of Quality (COQ) inclui:",
    options: [
      "Apenas custos de testes",
      "Custos de conformidade (prevenção, inspeção) e não-conformidade (falhas)",
      "Apenas custos de materiais",
      "Apenas salários"
    ],
    correctAnswer: 1,
    explanation: "COQ inclui custos de conformidade (prevenção e avaliação para evitar defeitos) e não-conformidade (falhas internas e externas).",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 193,
    question: "O princípio 'Be a Diligent, Respectful and Caring Steward' do PMI enfatiza:",
    options: [
      "Apenas entregar no prazo",
      "Responsabilidade ética, respeito e cuidado com recursos e stakeholders",
      "Apenas controle de custos",
      "Apenas velocidade"
    ],
    correctAnswer: 1,
    explanation: "Este princípio ético enfatiza que GPs devem agir com integridade, cuidar de recursos, respeitar pessoas e ser responsáveis em suas ações.",
    domain: "Liderança",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "Em um ambiente VUCA (Volatile, Uncertain, Complex, Ambiguous), projetos devem:",
    options: [
      "Usar apenas abordagem rígida",
      "Ser adaptáveis, usar iterações curtas e estar preparados para mudanças",
      "Evitar qualquer planejamento",
      "Ignorar incertezas"
    ],
    correctAnswer: 1,
    explanation: "Ambientes VUCA requerem agilidade, planejamento adaptativo, respostas rápidas a mudanças e capacidade de navegar incerteza.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "Timeboxing é uma técnica que:",
    options: [
      "Elimina prazos",
      "Define duração fixa para atividades, forçando foco e decisão",
      "Aumenta duração indefinidamente",
      "Ignora o tempo"
    ],
    correctAnswer: 1,
    explanation: "Timeboxing aloca tempo fixo para atividades. Quando o tempo acaba, a atividade termina, forçando priorização e tomada de decisão.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 196,
    question: "MoSCoW priorização significa:",
    options: [
      "Cidade da Rússia",
      "Must have, Should have, Could have, Won't have",
      "Método de cálculo de custos",
      "Técnica de programação"
    ],
    correctAnswer: 1,
    explanation: "MoSCoW é técnica de priorização: Must (essencial), Should (importante), Could (desejável), Won't (excluído desta iteração/release).",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 197,
    question: "Definition of Ready (DoR) define:",
    options: [
      "Quando o projeto termina",
      "Critérios que um item do backlog deve atender antes de entrar em um sprint",
      "Quando um membro está pronto para trabalhar",
      "Requisitos de hardware"
    ],
    correctAnswer: 1,
    explanation: "DoR são critérios que um item do backlog deve satisfazer para ser considerado 'pronto' para ser selecionado em um Sprint Planning.",
    domain: "Processo",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Velocidade de uma equipe Scrum pode ser usada para:",
    options: [
      "Comparar equipes diferentes",
      "Prever capacidade futura da mesma equipe e planejar releases",
      "Avaliar desempenho individual",
      "Definir salários"
    ],
    correctAnswer: 1,
    explanation: "Velocidade é uma métrica de previsão para a mesma equipe. Não deve ser usada para comparar equipes ou avaliar indivíduos, pois cada contexto é único.",
    domain: "Métricas e Incertezas",
    difficulty: "medium"
  },
  {
    id: 199,
    question: "Técnica dos 5 Porquês busca:",
    options: [
      "Fazer 5 perguntas sobre custos",
      "Identificar a causa raiz de um problema perguntando 'por quê' repetidamente",
      "Encontrar 5 soluções",
      "Listar 5 riscos"
    ],
    correctAnswer: 1,
    explanation: "Os 5 Porquês é técnica de análise de causa raiz onde se pergunta 'por quê' repetidamente (tipicamente 5 vezes) até chegar à causa fundamental do problema.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 200,
    question: "O sucesso de um projeto moderno é medido por:",
    options: [
      "Apenas cumprir prazo e orçamento",
      "Valor entregue, satisfação de stakeholders, benefícios realizados",
      "Apenas número de funcionalidades",
      "Apenas documentação produzida"
    ],
    correctAnswer: 1,
    explanation: "O PMBOK 7 e abordagens modernas medem sucesso por valor entregue, satisfação de stakeholders, benefícios realizados - não apenas restrições tradicionais de prazo/custo/escopo.",
    domain: "Stakeholders",
    difficulty: "medium"
  }
];
