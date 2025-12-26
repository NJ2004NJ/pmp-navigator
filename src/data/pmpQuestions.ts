export interface PMPQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  domain: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

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
    question: "No PMBOK 7ª Edição, como os stakeholders são categorizados?",
    options: [
      "Por nível hierárquico apenas",
      "Por interesse, poder e impacto no projeto",
      "Por ordem alfabética",
      "Por antiguidade na organização"
    ],
    correctAnswer: 1,
    explanation: "Os stakeholders são analisados por seu interesse, poder e impacto potencial no projeto para determinar estratégias de engajamento adequadas.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "O que significa 'identificar stakeholders' em um projeto?",
    options: [
      "Listar apenas os membros da equipe",
      "Reconhecer todas as pessoas e organizações afetadas pelo projeto",
      "Identificar apenas os patrocinadores",
      "Listar os concorrentes"
    ],
    correctAnswer: 1,
    explanation: "Identificar stakeholders envolve reconhecer todas as pessoas, grupos ou organizações que podem afetar ou serem afetados pelo projeto.",
    domain: "Stakeholders",
    difficulty: "easy"
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
    question: "O que é uma matriz de poder/interesse?",
    options: [
      "Uma ferramenta para calcular custos",
      "Uma ferramenta para classificar stakeholders por seu nível de poder e interesse",
      "Um documento contratual",
      "Uma ferramenta de cronograma"
    ],
    correctAnswer: 1,
    explanation: "A matriz de poder/interesse classifica stakeholders ajudando a determinar estratégias de comunicação e engajamento apropriadas.",
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
    question: "Qual ferramenta ajuda a visualizar níveis de engajamento atuais vs desejados?",
    options: [
      "Diagrama de Gantt",
      "Matriz de avaliação de engajamento de stakeholders",
      "WBS",
      "Diagrama de rede"
    ],
    correctAnswer: 1,
    explanation: "A matriz de avaliação de engajamento mostra os níveis atuais e desejados de engajamento para cada stakeholder.",
    domain: "Stakeholders",
    difficulty: "medium"
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
  {
    id: 21,
    question: "Em um projeto da NASA com múltiplas agências internacionais, o desafio principal de stakeholders é:",
    options: [
      "Falta de tecnologia",
      "Coordenar diferentes interesses, culturas e requisitos de cada agência",
      "Orçamento insuficiente",
      "Falta de expertise técnica"
    ],
    correctAnswer: 1,
    explanation: "Projetos internacionais exigem coordenação cuidadosa entre diferentes culturas organizacionais e nacionais.",
    domain: "Stakeholders",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "O que significa 'monitorar o engajamento dos stakeholders'?",
    options: [
      "Espionar as atividades dos stakeholders",
      "Acompanhar e ajustar estratégias conforme relacionamentos e ambiente mudam",
      "Enviar relatórios semanais",
      "Contar o número de reuniões"
    ],
    correctAnswer: 1,
    explanation: "Monitorar significa acompanhar continuamente a eficácia das estratégias de engajamento e ajustá-las conforme necessário.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 23,
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
    id: 24,
    question: "A análise de stakeholders ajuda a identificar:",
    options: [
      "Apenas riscos técnicos",
      "Aliados potenciais, oponentes e estratégias de influência",
      "O cronograma do projeto",
      "Os custos exatos"
    ],
    correctAnswer: 1,
    explanation: "A análise revela o posicionamento dos stakeholders e ajuda a desenvolver estratégias apropriadas para cada um.",
    domain: "Stakeholders",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Um stakeholder que bloqueia ativamente o projeto é classificado como:",
    options: [
      "Líder",
      "Resistente ou oponente",
      "Neutro",
      "Apoiador"
    ],
    correctAnswer: 1,
    explanation: "Stakeholders que trabalham contra o projeto são classificados como resistentes ou oponentes.",
    domain: "Stakeholders",
    difficulty: "easy"
  },

  // TEAM DOMAIN (26-50)
  {
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
  {
    id: 43,
    question: "A co-localização de equipes tem como principal benefício:",
    options: [
      "Redução de custos de equipamento",
      "Comunicação mais rápida e construção natural de relacionamentos",
      "Controle mais rígido",
      "Redução de salários"
    ],
    correctAnswer: 1,
    explanation: "Equipes co-localizadas se comunicam mais facilmente e desenvolvem relacionamentos mais fortes naturalmente.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 44,
    question: "Um membro da equipe consistentemente não entrega. O gerente deve primeiro:",
    options: [
      "Demiti-lo imediatamente",
      "Entender a causa raiz através de conversa individual e oferecer suporte",
      "Ignorar esperando melhora espontânea",
      "Criticá-lo publicamente"
    ],
    correctAnswer: 1,
    explanation: "É importante entender os fatores por trás do baixo desempenho antes de tomar ações corretivas.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "Em projetos de engenharia complexos, como missões da NASA, o tamanho ideal de uma equipe central é:",
    options: [
      "Quanto maior melhor",
      "Pequeno o suficiente para comunicação eficaz, tipicamente 5-9 pessoas",
      "Exatamente 2 pessoas",
      "Mais de 50 pessoas sempre"
    ],
    correctAnswer: 1,
    explanation: "Equipes menores facilitam comunicação e coordenação, seguindo princípios como o 'número de Miller' (7±2).",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "O que é 'team charter'?",
    options: [
      "Contrato de trabalho individual",
      "Documento que define propósito, valores, normas e acordos de trabalho da equipe",
      "Cronograma do projeto",
      "Lista de membros"
    ],
    correctAnswer: 1,
    explanation: "Team charter é um acordo que estabelece como a equipe trabalhará junta, incluindo valores e normas.",
    domain: "Equipe",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Empowerment da equipe significa:",
    options: [
      "O gerente toma todas as decisões",
      "Dar autoridade e autonomia para a equipe tomar decisões dentro de seu escopo",
      "Eliminar supervisão",
      "Aumentar apenas salários"
    ],
    correctAnswer: 1,
    explanation: "Empowerment envolve delegar autoridade real para que a equipe possa tomar decisões e agir autonomamente.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 48,
    question: "A teoria de Herzberg sobre motivação distingue entre:",
    options: [
      "Custos fixos e variáveis",
      "Fatores higiênicos (evitam insatisfação) e motivadores (criam satisfação)",
      "Tarefas críticas e não-críticas",
      "Riscos e oportunidades"
    ],
    correctAnswer: 1,
    explanation: "Herzberg identificou fatores higiênicos que previnem insatisfação e motivadores que geram satisfação real.",
    domain: "Equipe",
    difficulty: "hard"
  },
  {
    id: 49,
    question: "Reconhecimento de conquistas da equipe deve ser:",
    options: [
      "Dado apenas no final do projeto",
      "Oportuno, específico e alinhado com os valores da equipe",
      "Sempre monetário",
      "Evitado para não criar expectativas"
    ],
    correctAnswer: 1,
    explanation: "Reconhecimento eficaz é dado no momento certo, é específico e reflete o que a equipe valoriza.",
    domain: "Equipe",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "O estágio 'Performing' do modelo de Tuckman é caracterizado por:",
    options: [
      "Conflitos intensos",
      "Alta produtividade, autonomia e resolução eficaz de problemas",
      "Formação inicial da equipe",
      "Dissolução do grupo"
    ],
    correctAnswer: 1,
    explanation: "Na fase Performing, a equipe atinge alta produtividade, trabalhando de forma autônoma e eficaz.",
    domain: "Equipe",
    difficulty: "easy"
  },

  // DEVELOPMENT APPROACH & LIFE CYCLE (51-75)
  {
    id: 51,
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
    id: 52,
    question: "O ciclo de vida de um projeto tipicamente inclui:",
    options: [
      "Apenas execução",
      "Início, organização e preparação, execução do trabalho, encerramento",
      "Apenas planejamento e encerramento",
      "Somente controle de qualidade"
    ],
    correctAnswer: 1,
    explanation: "O ciclo de vida abrange desde a iniciação até o encerramento, passando por preparação e execução.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 53,
    question: "Quando é mais apropriado usar uma abordagem preditiva (waterfall)?",
    options: [
      "Quando requisitos mudam frequentemente",
      "Quando requisitos são bem definidos e estáveis desde o início",
      "Sempre que houver software",
      "Em projetos muito pequenos apenas"
    ],
    correctAnswer: 1,
    explanation: "Abordagens preditivas são ideais quando requisitos são claros e improváveis de mudar significativamente.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "Em projetos de construção de plataformas de petróleo, qual abordagem é mais comum?",
    options: [
      "Puramente ágil",
      "Preditiva com elementos de controle rígido devido a segurança e regulamentos",
      "Sem planejamento formal",
      "Apenas iterativa"
    ],
    correctAnswer: 1,
    explanation: "Projetos de construção industrial geralmente usam abordagens preditivas devido a requisitos regulatórios e de segurança.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "O que significa 'cadência de entrega'?",
    options: [
      "Velocidade de digitação",
      "Frequência ou ritmo com que entregas são produzidas",
      "Número de membros da equipe",
      "Duração total do projeto"
    ],
    correctAnswer: 1,
    explanation: "Cadência de entrega refere-se à frequência com que valor é entregue aos stakeholders.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Em uma abordagem iterativa, o projeto:",
    options: [
      "Não tem fases",
      "Repete ciclos de trabalho, refinando o produto progressivamente",
      "Entrega tudo no final",
      "Nunca muda o escopo"
    ],
    correctAnswer: 1,
    explanation: "Abordagens iterativas refinam o produto através de ciclos repetidos de desenvolvimento e feedback.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "Uma abordagem incremental entrega:",
    options: [
      "Tudo de uma vez no final",
      "Partes funcionais do produto ao longo do tempo",
      "Apenas documentação",
      "Protótipos não funcionais"
    ],
    correctAnswer: 1,
    explanation: "Entregas incrementais fornecem partes funcionais do produto em intervalos regulares.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 58,
    question: "O que é uma 'phase gate' (porta de fase)?",
    options: [
      "Uma barreira física no escritório",
      "Ponto de decisão onde o projeto é avaliado antes de prosseguir para a próxima fase",
      "Uma técnica de programação",
      "Um tipo de contrato"
    ],
    correctAnswer: 1,
    explanation: "Phase gates são pontos de revisão onde a continuação do projeto é decidida com base em critérios específicos.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "A NASA frequentemente usa qual tipo de ciclo de vida para missões espaciais críticas?",
    options: [
      "Puramente ágil",
      "Preditivo com revisões rigorosas em cada fase (como o NASA NPR 7120.5)",
      "Sem estrutura formal",
      "Apenas Scrum"
    ],
    correctAnswer: 1,
    explanation: "A NASA usa ciclos de vida preditivos com revisões formais rigorosas devido à natureza crítica das missões.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "O que é 'tailoring' (adaptação) da abordagem de desenvolvimento?",
    options: [
      "Copiar exatamente de outro projeto",
      "Ajustar a abordagem, processos e práticas para o contexto específico do projeto",
      "Seguir rigidamente um padrão",
      "Eliminar todo planejamento"
    ],
    correctAnswer: 1,
    explanation: "Tailoring envolve adaptar metodologias e práticas para melhor atender às necessidades específicas do projeto.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 61,
    question: "Em projetos híbridos, elementos preditivos e ágeis são:",
    options: [
      "Mantidos separados",
      "Combinados para aproveitar os benefícios de cada abordagem",
      "Usados alternadamente",
      "Conflitantes e incompatíveis"
    ],
    correctAnswer: 1,
    explanation: "Abordagens híbridas combinam elementos preditivos e ágeis conforme as necessidades de diferentes partes do projeto.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "O conceito de MVP (Minimum Viable Product) vem de qual contexto?",
    options: [
      "Construção civil tradicional",
      "Metodologias Lean e Ágeis para validação rápida de hipóteses",
      "Projetos militares",
      "Indústria farmacêutica"
    ],
    correctAnswer: 1,
    explanation: "MVP é um conceito Lean/Ágil que visa criar a versão mais simples que valida hipóteses com usuários reais.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "Qual fator NÃO influencia a escolha da abordagem de desenvolvimento?",
    options: [
      "Estabilidade dos requisitos",
      "Cultura organizacional",
      "Preferência pessoal do gerente de projeto apenas",
      "Complexidade técnica"
    ],
    correctAnswer: 2,
    explanation: "A escolha da abordagem deve ser baseada em fatores objetivos do projeto, não apenas preferência pessoal.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Um 'sprint' em Scrum é:",
    options: [
      "Uma corrida física da equipe",
      "Um período fixo (tipicamente 2-4 semanas) onde trabalho é completado",
      "O projeto inteiro",
      "Uma reunião diária"
    ],
    correctAnswer: 1,
    explanation: "Sprint é uma iteração time-boxed onde a equipe entrega incrementos de valor ao produto.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "Em projetos de exploração offshore no Brasil, a fase de 'Front-End Loading' (FEL) serve para:",
    options: [
      "Acelerar a construção",
      "Definir e refinar escopo, estimativas e riscos antes de grandes investimentos",
      "Treinar a equipe",
      "Negociar contratos apenas"
    ],
    correctAnswer: 1,
    explanation: "FEL é usado na indústria de óleo e gás para maturar o projeto e reduzir incertezas antes de comprometer investimentos.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 66,
    question: "O ciclo de vida do produto difere do ciclo de vida do projeto porque:",
    options: [
      "São a mesma coisa",
      "O ciclo do produto continua após o projeto, incluindo operação e desativação",
      "O ciclo do produto é mais curto",
      "Apenas projetos têm ciclos de vida"
    ],
    correctAnswer: 1,
    explanation: "O ciclo de vida do produto inclui operação, manutenção e eventual desativação, estendendo-se além do projeto.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "Rolling Wave Planning significa:",
    options: [
      "Planejar tudo no início",
      "Planejar em detalhes o trabalho próximo e em alto nível o trabalho futuro",
      "Não planejar nada",
      "Replanejar apenas quando há problemas"
    ],
    correctAnswer: 1,
    explanation: "Rolling Wave Planning elabora progressivamente os detalhes à medida que mais informações se tornam disponíveis.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "Um projeto Kanban visualiza o trabalho usando:",
    options: [
      "Planilhas de Excel apenas",
      "Quadros com colunas representando estágios do fluxo de trabalho",
      "Gráficos de Gantt",
      "Documentos de texto"
    ],
    correctAnswer: 1,
    explanation: "Kanban usa quadros visuais com colunas para mostrar o fluxo de trabalho e limitar trabalho em progresso.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 69,
    question: "O que são 'work packages' em uma WBS?",
    options: [
      "Pacotes de software",
      "Os níveis mais baixos da WBS, representando trabalho que pode ser estimado e gerenciado",
      "Contratos de trabalho",
      "Reuniões da equipe"
    ],
    correctAnswer: 1,
    explanation: "Work packages são os componentes mais baixos da WBS, suficientemente detalhados para serem atribuídos e gerenciados.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Em um projeto de satélite, 'Critical Design Review' (CDR) é um exemplo de:",
    options: [
      "Reunião informal",
      "Phase gate formal para avaliar maturidade do design antes de fabricação",
      "Treinamento da equipe",
      "Teste de software"
    ],
    correctAnswer: 1,
    explanation: "CDR é uma revisão formal que avalia se o design está maduro para prosseguir para fabricação.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "hard"
  },
  {
    id: 71,
    question: "A principal vantagem de entregas incrementais é:",
    options: [
      "Mais burocracia",
      "Feedback antecipado dos stakeholders e realização de valor mais cedo",
      "Menos trabalho total",
      "Evitar testes"
    ],
    correctAnswer: 1,
    explanation: "Entregas incrementais permitem validação antecipada e ajustes baseados em feedback real dos usuários.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "O que é 'Definition of Done' em metodologias ágeis?",
    options: [
      "Data de término do projeto",
      "Critérios acordados que um item de trabalho deve atender para ser considerado completo",
      "Aprovação do cliente",
      "Pagamento final"
    ],
    correctAnswer: 1,
    explanation: "Definition of Done são critérios claros e acordados pela equipe para considerar trabalho como concluído.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "Em projetos de construção industrial em Angola, a abordagem EPC (Engineering, Procurement, Construction) representa:",
    options: [
      "Uma metodologia ágil",
      "Um modelo de ciclo de vida preditivo com fases distintas de engenharia, aquisições e construção",
      "Um tipo de contrato apenas",
      "Gerenciamento de riscos"
    ],
    correctAnswer: 1,
    explanation: "EPC é uma abordagem de ciclo de vida comum em projetos industriais, com fases sequenciais bem definidas.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Por que projetos de software frequentemente usam abordagens ágeis?",
    options: [
      "Porque é moda",
      "Requisitos evoluem, feedback rápido é possível e custo de mudança é relativamente baixo",
      "Porque não precisam de planejamento",
      "Porque são sempre pequenos"
    ],
    correctAnswer: 1,
    explanation: "Software se adapta bem ao ágil por sua natureza evolutiva, capacidade de iteração rápida e flexibilidade para mudanças.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "O que é 'time-boxing'?",
    options: [
      "Encaixotar relógios",
      "Alocar período fixo de tempo para uma atividade, após o qual ela para independentemente de estar completa",
      "Guardar tempo para emergências",
      "Trabalhar horas extras"
    ],
    correctAnswer: 1,
    explanation: "Time-boxing limita a duração de atividades para promover foco e evitar escopo expansivo.",
    domain: "Abordagem de Desenvolvimento",
    difficulty: "easy"
  },

  // PLANNING (76-100)
  {
    id: 76,
    question: "O planejamento progressivo (elaboração progressiva) significa:",
    options: [
      "Não planejar",
      "Detalhar o plano gradualmente à medida que mais informações se tornam disponíveis",
      "Planejar tudo no início",
      "Planejar apenas quando há problemas"
    ],
    correctAnswer: 1,
    explanation: "Elaboração progressiva refina e detalha planos conforme o projeto avança e mais informações surgem.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 77,
    question: "Uma WBS (Work Breakdown Structure) decompõe o escopo do projeto em:",
    options: [
      "Departamentos da empresa",
      "Componentes hierárquicos e gerenciáveis de trabalho",
      "Apenas atividades de software",
      "Apenas marcos"
    ],
    correctAnswer: 1,
    explanation: "A WBS organiza o trabalho do projeto em componentes hierárquicos para facilitar planejamento e controle.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "O caminho crítico em um cronograma é:",
    options: [
      "O caminho mais curto",
      "A sequência mais longa de atividades que determina a duração mínima do projeto",
      "Atividades opcionais",
      "Atividades de menor risco"
    ],
    correctAnswer: 1,
    explanation: "O caminho crítico determina a duração mínima do projeto; atrasos nele atrasam o projeto todo.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 79,
    question: "Estimativa de três pontos usa valores:",
    options: [
      "Apenas o mais provável",
      "Otimista, pessimista e mais provável para calcular uma estimativa ponderada",
      "Apenas máximo e mínimo",
      "Valores históricos apenas"
    ],
    correctAnswer: 1,
    explanation: "A técnica de três pontos considera cenários otimista, pessimista e mais provável para maior precisão.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Fast tracking em cronograma significa:",
    options: [
      "Cancelar atividades",
      "Executar atividades em paralelo que normalmente seriam sequenciais",
      "Adicionar recursos",
      "Reduzir qualidade"
    ],
    correctAnswer: 1,
    explanation: "Fast tracking sobrepõe atividades sequenciais para comprimir o cronograma, aumentando riscos.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "Crashing em um projeto envolve:",
    options: [
      "Fazer o projeto falhar",
      "Adicionar recursos para encurtar atividades do caminho crítico",
      "Cancelar o projeto",
      "Remover recursos"
    ],
    correctAnswer: 1,
    explanation: "Crashing adiciona recursos a atividades críticas para reduzir duração, geralmente aumentando custos.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "O orçamento do projeto tipicamente inclui:",
    options: [
      "Apenas custos de mão de obra",
      "Custos diretos, indiretos, contingências e reservas gerenciais",
      "Apenas custos de materiais",
      "Custos de marketing"
    ],
    correctAnswer: 1,
    explanation: "O orçamento completo inclui todos os custos mais reservas para riscos conhecidos e desconhecidos.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Em um projeto de perfuração offshore, 'contingency' se refere a:",
    options: [
      "Lucro extra",
      "Reserva para riscos identificados e quantificados",
      "Custos fixos",
      "Penalidades contratuais"
    ],
    correctAnswer: 1,
    explanation: "Contingência é a reserva financeira alocada para responder a riscos identificados do projeto.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "A técnica de estimativa paramétrica usa:",
    options: [
      "Opinião de especialistas apenas",
      "Relações estatísticas entre dados históricos e variáveis do projeto",
      "Custos de projetos similares sem ajuste",
      "Valores arbitrários"
    ],
    correctAnswer: 1,
    explanation: "Estimativa paramétrica aplica modelos estatísticos baseados em dados históricos e parâmetros do projeto atual.",
    domain: "Planejamento",
    difficulty: "hard"
  },
  {
    id: 85,
    question: "Um marco (milestone) em um cronograma representa:",
    options: [
      "Uma atividade longa",
      "Um evento significativo com duração zero que marca conclusão de fase ou entrega",
      "Um recurso humano",
      "Um custo"
    ],
    correctAnswer: 1,
    explanation: "Marcos são pontos de referência com duração zero que indicam conquistas importantes do projeto.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 86,
    question: "O plano de gerenciamento de riscos define:",
    options: [
      "Todos os riscos do projeto",
      "Como as atividades de gerenciamento de riscos serão conduzidas",
      "Apenas riscos negativos",
      "Custos do projeto"
    ],
    correctAnswer: 1,
    explanation: "O plano define a abordagem, papéis, ferramentas e processos para gerenciar riscos do projeto.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 87,
    question: "Na análise qualitativa de riscos, riscos são priorizados por:",
    options: [
      "Custo exato de impacto",
      "Probabilidade de ocorrência e impacto potencial no projeto",
      "Ordem alfabética",
      "Data de identificação"
    ],
    correctAnswer: 1,
    explanation: "Análise qualitativa prioriza riscos avaliando sua probabilidade e magnitude do impacto potencial.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 88,
    question: "O que é uma 'baseline' de projeto?",
    options: [
      "A primeira estimativa feita",
      "Versão aprovada do plano usada como referência para medir variações",
      "A última versão do plano",
      "Um documento informal"
    ],
    correctAnswer: 1,
    explanation: "A baseline é a versão aprovada e congelada do plano contra a qual o desempenho é medido.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 89,
    question: "Em projetos da NASA, a 'Management Reserve' é usada para:",
    options: [
      "Bônus da gerência",
      "Cobrir riscos desconhecidos ou 'unknown unknowns' autorizados pelo gerente",
      "Custos de marketing",
      "Salários da equipe"
    ],
    correctAnswer: 1,
    explanation: "Management Reserve cobre riscos imprevistos e só pode ser usada com autorização da gerência sênior.",
    domain: "Planejamento",
    difficulty: "hard"
  },
  {
    id: 90,
    question: "O método do diagrama de precedência (PDM) é usado para:",
    options: [
      "Calcular custos",
      "Criar diagramas de rede que mostram dependências entre atividades",
      "Gerenciar recursos humanos",
      "Comunicar com stakeholders"
    ],
    correctAnswer: 1,
    explanation: "PDM cria diagramas de rede mostrando atividades em nós e relações de dependência entre elas.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 91,
    question: "Float (folga) em um cronograma representa:",
    options: [
      "Tempo extra obrigatório",
      "Tempo que uma atividade pode atrasar sem afetar o projeto ou atividades sucessoras",
      "Férias da equipe",
      "Horas extras"
    ],
    correctAnswer: 1,
    explanation: "Float é a flexibilidade de tempo disponível para atividades não-críticas antes de afetar o cronograma.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Resource leveling pode resultar em:",
    options: [
      "Redução do cronograma",
      "Extensão do cronograma para evitar sobre-alocação de recursos",
      "Aumento do orçamento sempre",
      "Redução da equipe"
    ],
    correctAnswer: 1,
    explanation: "Resource leveling redistribui trabalho para equilibrar a carga de recursos, frequentemente estendendo o cronograma.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "Um plano de comunicação define:",
    options: [
      "Apenas e-mails a serem enviados",
      "Quem recebe que informação, quando, como e com qual frequência",
      "O software de e-mail a usar",
      "Apenas reuniões formais"
    ],
    correctAnswer: 1,
    explanation: "O plano de comunicação especifica necessidades de informação dos stakeholders e como serão atendidas.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 94,
    question: "Em contratos de projetos offshore, 'lump sum' significa:",
    options: [
      "Pagamento por hora",
      "Preço fixo total para o escopo definido",
      "Custo mais margem",
      "Pagamento variável"
    ],
    correctAnswer: 1,
    explanation: "Contratos lump sum têm preço fixo para um escopo definido, transferindo risco de custo para o fornecedor.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "O propósito do plano de gerenciamento de aquisições é:",
    options: [
      "Listar todos os fornecedores possíveis",
      "Definir como aquisições serão planejadas, executadas e controladas",
      "Negociar preços",
      "Avaliar qualidade apenas"
    ],
    correctAnswer: 1,
    explanation: "O plano define a abordagem para identificar, selecionar e gerenciar fornecedores e contratos.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 96,
    question: "Estimativa análoga usa:",
    options: [
      "Dados de projetos similares anteriores como base para estimar o atual",
      "Simulação de Monte Carlo",
      "Apenas opinião de especialistas",
      "Fórmulas matemáticas complexas"
    ],
    correctAnswer: 0,
    explanation: "Estimativa análoga baseia-se em informações de projetos similares anteriores, ajustando para diferenças.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "O que deve ser considerado ao planejar recursos humanos para um projeto internacional?",
    options: [
      "Apenas disponibilidade",
      "Disponibilidade, competências, cultura, fuso horário e questões legais trabalhistas",
      "Apenas custo",
      "Somente experiência técnica"
    ],
    correctAnswer: 1,
    explanation: "Projetos internacionais exigem consideração de múltiplos fatores além da simples disponibilidade.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Um diagrama de Gantt mostra:",
    options: [
      "Custos por atividade",
      "Atividades ao longo do tempo em formato de barras horizontais",
      "Apenas marcos",
      "Estrutura organizacional"
    ],
    correctAnswer: 1,
    explanation: "Diagramas de Gantt visualizam cronogramas com barras representando atividades ao longo do tempo.",
    domain: "Planejamento",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "Estratégias de resposta a riscos negativos incluem:",
    options: [
      "Aumentar, compartilhar, explorar, aceitar",
      "Evitar, mitigar, transferir, aceitar",
      "Apenas ignorar",
      "Apenas aceitar"
    ],
    correctAnswer: 1,
    explanation: "Riscos negativos podem ser evitados, mitigados, transferidos ou aceitos, dependendo da análise.",
    domain: "Planejamento",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Integração em planejamento significa:",
    options: [
      "Usar muitos sistemas de software",
      "Coordenar e alinhar todos os planos subsidiários em um plano coeso",
      "Separar áreas de conhecimento",
      "Evitar sobreposições"
    ],
    correctAnswer: 1,
    explanation: "Integração garante que todos os aspectos do plano trabalhem juntos de forma coordenada e consistente.",
    domain: "Planejamento",
    difficulty: "easy"
  },

  // PROJECT WORK (101-125)
  {
    id: 101,
    question: "Dirigir e gerenciar o trabalho do projeto envolve:",
    options: [
      "Apenas aprovar despesas",
      "Liderar e executar o trabalho conforme o plano, gerenciando recursos e comunicação",
      "Delegar toda responsabilidade",
      "Apenas criar relatórios"
    ],
    correctAnswer: 1,
    explanation: "Gerenciar o trabalho inclui liderar a equipe, executar atividades e coordenar recursos conforme planejado.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 102,
    question: "Em um projeto de construção offshore, 'work permits' são exemplos de:",
    options: [
      "Documentos opcionais",
      "Controles de segurança formais necessários antes de executar trabalhos específicos",
      "Contratos com fornecedores",
      "Relatórios de progresso"
    ],
    correctAnswer: 1,
    explanation: "Work permits são controles de segurança obrigatórios em ambientes de alto risco como plataformas offshore.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "O gerenciamento de conhecimento do projeto visa:",
    options: [
      "Manter informações secretas",
      "Capturar, compartilhar e aplicar conhecimento para melhorar resultados atuais e futuros",
      "Criar muitos documentos",
      "Treinar apenas novos membros"
    ],
    correctAnswer: 1,
    explanation: "Gerenciamento de conhecimento assegura que lições e expertise sejam capturadas e reutilizadas.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "Como lidar com impedimentos que afetam o trabalho da equipe?",
    options: [
      "Esperar que se resolvam sozinhos",
      "Identificar, escalar quando necessário e resolver proativamente para manter o progresso",
      "Ignorar até o final do projeto",
      "Documentar apenas"
    ],
    correctAnswer: 1,
    explanation: "Impedimentos devem ser identificados e resolvidos rapidamente para não atrasar o trabalho da equipe.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 105,
    question: "O que é 'gold plating' em projetos?",
    options: [
      "Usar materiais de ouro",
      "Adicionar funcionalidades não solicitadas além do escopo aprovado",
      "Premiar a equipe",
      "Pintar equipamentos de dourado"
    ],
    correctAnswer: 1,
    explanation: "Gold plating é adicionar trabalho extra não solicitado, consumindo recursos sem agregar valor aprovado.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Reuniões diárias (daily standups) em projetos ágeis servem para:",
    options: [
      "Resolver problemas complexos detalhadamente",
      "Sincronizar a equipe sobre progresso, planos e impedimentos rapidamente",
      "Aprovar mudanças de escopo",
      "Revisar código"
    ],
    correctAnswer: 1,
    explanation: "Daily standups são encontros curtos para sincronização rápida, não para resolver problemas detalhados.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 107,
    question: "Quality assurance difere de quality control porque:",
    options: [
      "São a mesma coisa",
      "QA foca em processos para prevenir defeitos; QC inspeciona produtos para detectar defeitos",
      "QA é mais barato",
      "QC é feito apenas no final"
    ],
    correctAnswer: 1,
    explanation: "QA é proativo, focando em processos; QC é reativo, inspecionando resultados para encontrar problemas.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "Em projetos da NASA, 'configuration management' assegura:",
    options: [
      "Conforto da equipe",
      "Rastreabilidade e controle de mudanças em produtos e documentação do projeto",
      "Apenas backup de arquivos",
      "Segurança física"
    ],
    correctAnswer: 1,
    explanation: "Configuration management controla versões e mudanças em produtos, garantindo integridade e rastreabilidade.",
    domain: "Trabalho do Projeto",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "O que são 'lessons learned'?",
    options: [
      "Treinamentos formais",
      "Conhecimento ganho durante o projeto sobre o que funcionou e o que precisa melhorar",
      "Críticas à gerência",
      "Relatórios de falhas apenas"
    ],
    correctAnswer: 1,
    explanation: "Lessons learned documentam experiências e insights para beneficiar projetos atuais e futuros.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 110,
    question: "Em execução, solicitações de mudança devem ser:",
    options: [
      "Implementadas imediatamente",
      "Documentadas, analisadas e submetidas ao processo de controle de mudanças",
      "Ignoradas",
      "Aprovadas apenas pelo gerente de projeto"
    ],
    correctAnswer: 1,
    explanation: "Mudanças devem seguir um processo formal de avaliação e aprovação antes da implementação.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 111,
    question: "O WIP limit (Work in Progress limit) em Kanban serve para:",
    options: [
      "Aumentar o trabalho paralelo",
      "Limitar o trabalho simultâneo para melhorar fluxo e identificar gargalos",
      "Reduzir o tamanho da equipe",
      "Aumentar prazos"
    ],
    correctAnswer: 1,
    explanation: "Limites de WIP focam a equipe e revelam problemas no fluxo de trabalho mais rapidamente.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "O que é uma 'retrospectiva' em metodologias ágeis?",
    options: [
      "Olhar para projetos antigos",
      "Reunião regular onde a equipe reflete sobre como melhorar processos e colaboração",
      "Revisão de código",
      "Planejamento de sprint"
    ],
    correctAnswer: 1,
    explanation: "Retrospectivas são momentos de reflexão para identificar melhorias contínuas no trabalho da equipe.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 113,
    question: "Burn-down charts mostram:",
    options: [
      "Custos acumulados",
      "Trabalho restante ao longo do tempo, indicando progresso em direção à conclusão",
      "Riscos identificados",
      "Satisfação da equipe"
    ],
    correctAnswer: 1,
    explanation: "Burn-down charts visualizam quanto trabalho resta, ajudando a prever se o objetivo será alcançado.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 114,
    question: "Em projetos offshore na Nigéria, 'MOC' (Management of Change) é crítico porque:",
    options: [
      "É exigido apenas por reguladores",
      "Mudanças em ambientes de alto risco podem ter consequências graves de segurança",
      "Reduz custos",
      "Acelera o projeto"
    ],
    correctAnswer: 1,
    explanation: "Em ambientes de alto risco, mudanças não controladas podem levar a acidentes graves ou fatalidades.",
    domain: "Trabalho do Projeto",
    difficulty: "hard"
  },
  {
    id: 115,
    question: "O que caracteriza um ambiente de trabalho colaborativo?",
    options: [
      "Competição interna intensa",
      "Compartilhamento de informações, suporte mútuo e foco em objetivos comuns",
      "Trabalho isolado",
      "Hierarquia rígida"
    ],
    correctAnswer: 1,
    explanation: "Colaboração envolve trabalho conjunto, compartilhamento de conhecimento e apoio entre membros da equipe.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 116,
    question: "Gerenciamento de problemas (issue management) inclui:",
    options: [
      "Apenas documentar problemas",
      "Identificar, registrar, analisar, resolver e acompanhar problemas até o fechamento",
      "Ignorar problemas menores",
      "Delegar todos os problemas"
    ],
    correctAnswer: 1,
    explanation: "Gerenciamento de problemas é um processo completo desde identificação até resolução e encerramento.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 117,
    question: "O Product Owner em Scrum é responsável por:",
    options: [
      "Gerenciar o código",
      "Maximizar o valor do produto através da gestão do backlog e priorização",
      "Remover impedimentos",
      "Facilitar reuniões apenas"
    ],
    correctAnswer: 1,
    explanation: "O Product Owner gerencia o backlog e prioriza itens para maximizar o valor entregue.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "Integração contínua (CI) em projetos de software significa:",
    options: [
      "Reuniões constantes da equipe",
      "Integrar e testar código frequentemente, tipicamente várias vezes ao dia",
      "Trabalhar sem intervalos",
      "Nunca parar o desenvolvimento"
    ],
    correctAnswer: 1,
    explanation: "CI envolve integrar mudanças de código frequentemente com testes automatizados para detectar problemas cedo.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "O que é uma 'decision log'?",
    options: [
      "Diário pessoal do gerente",
      "Registro de decisões importantes do projeto, incluindo justificativa e responsáveis",
      "Lista de tarefas",
      "Relatório financeiro"
    ],
    correctAnswer: 1,
    explanation: "Decision log documenta decisões significativas para referência futura e rastreabilidade.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 120,
    question: "Em projetos de engenharia, 'punch list' refere-se a:",
    options: [
      "Lista de punições",
      "Lista de itens pendentes ou deficiências a corrigir antes da aceitação final",
      "Lista de compras",
      "Lista de participantes"
    ],
    correctAnswer: 1,
    explanation: "Punch list documenta itens menores pendentes que precisam ser corrigidos para aceitação final.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 121,
    question: "Eficiência no trabalho do projeto pode ser medida por:",
    options: [
      "Número de e-mails enviados",
      "Valor entregue em relação aos recursos consumidos",
      "Horas trabalhadas apenas",
      "Número de reuniões"
    ],
    correctAnswer: 1,
    explanation: "Eficiência relaciona o valor ou resultado produzido com os recursos (tempo, custo) utilizados.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Documentação do projeto deve ser:",
    options: [
      "A mais extensa possível",
      "Adequada às necessidades, nem excessiva nem insuficiente",
      "Evitada ao máximo",
      "Criada apenas no final"
    ],
    correctAnswer: 1,
    explanation: "Documentação deve ser suficiente para atender necessidades sem criar overhead desnecessário.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 123,
    question: "O que é 'technical debt' (dívida técnica)?",
    options: [
      "Empréstimo bancário para tecnologia",
      "Consequências de escolher soluções rápidas em vez de melhores abordagens de longo prazo",
      "Custo de equipamentos",
      "Atraso em pagamentos a fornecedores"
    ],
    correctAnswer: 1,
    explanation: "Dívida técnica é o custo futuro de refatoração devido a decisões que priorizaram velocidade sobre qualidade.",
    domain: "Trabalho do Projeto",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "Sprint Review em Scrum é focada em:",
    options: [
      "Criticar a equipe",
      "Demonstrar o incremento entregue e coletar feedback dos stakeholders",
      "Planejar o próximo sprint",
      "Resolver conflitos"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review demonstra o trabalho concluído e coleta feedback para adaptar o backlog.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },
  {
    id: 125,
    question: "Manter o foco da equipe é responsabilidade:",
    options: [
      "Apenas do gerente de projeto",
      "Compartilhada entre líder e equipe, com proteção contra distrações externas",
      "De cada indivíduo sozinho",
      "Apenas do cliente"
    ],
    correctAnswer: 1,
    explanation: "Manter foco é responsabilidade compartilhada, com o líder protegendo a equipe de interferências.",
    domain: "Trabalho do Projeto",
    difficulty: "easy"
  },

  // DELIVERY (126-150)
  {
    id: 126,
    question: "Valor no contexto de projetos é definido como:",
    options: [
      "Apenas lucro financeiro",
      "Benefício ou importância de algo, que pode ser tangível ou intangível",
      "Custo do projeto",
      "Tamanho da equipe"
    ],
    correctAnswer: 1,
    explanation: "Valor inclui benefícios tangíveis e intangíveis que atendem necessidades de stakeholders.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 127,
    question: "O que é 'scope creep'?",
    options: [
      "Uma técnica de planejamento",
      "Expansão descontrolada do escopo sem ajustes correspondentes em tempo, custo e recursos",
      "Redução do escopo",
      "Um tipo de risco técnico"
    ],
    correctAnswer: 1,
    explanation: "Scope creep é a adição gradual e não controlada de requisitos que ameaça cronograma e orçamento.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 128,
    question: "Critérios de aceitação definem:",
    options: [
      "O preço do projeto",
      "Condições específicas que um deliverable deve atender para ser aceito pelo stakeholder",
      "A equipe do projeto",
      "O cronograma de entregas"
    ],
    correctAnswer: 1,
    explanation: "Critérios de aceitação especificam os requisitos que uma entrega deve cumprir para aprovação.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 129,
    question: "Qualidade em projetos significa:",
    options: [
      "O mais caro possível",
      "Grau em que características inerentes atendem aos requisitos",
      "Ausência total de defeitos",
      "Aprovação do gerente"
    ],
    correctAnswer: 1,
    explanation: "Qualidade é o grau em que as características de um produto atendem aos requisitos especificados.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 130,
    question: "Em um projeto de satélite da NASA, 'verification' e 'validation' diferem porque:",
    options: [
      "São a mesma coisa",
      "Verification confirma que foi feito corretamente; validation confirma que foi feito o produto certo",
      "Verification é mais importante",
      "Validation é feita apenas no início"
    ],
    correctAnswer: 1,
    explanation: "Verification pergunta 'construímos certo?'; Validation pergunta 'construímos a coisa certa?'.",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 131,
    question: "O custo da qualidade inclui:",
    options: [
      "Apenas custo de inspeção",
      "Custos de conformidade (prevenção, avaliação) e não-conformidade (falhas internas e externas)",
      "Apenas custo de retrabalho",
      "Apenas materiais de alta qualidade"
    ],
    correctAnswer: 1,
    explanation: "Custo da qualidade abrange investimentos em qualidade e custos resultantes de problemas de qualidade.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 132,
    question: "Em projetos de construção offshore, 'commissioning' refere-se a:",
    options: [
      "Contratação de equipe",
      "Processo de testar e colocar sistemas em operação após construção",
      "Pagamento de comissões",
      "Encerramento administrativo"
    ],
    correctAnswer: 1,
    explanation: "Commissioning verifica que sistemas instalados funcionam conforme projetado antes da operação.",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 133,
    question: "Definition of Done em um projeto de software geralmente inclui:",
    options: [
      "Apenas código escrito",
      "Código desenvolvido, testado, revisado, documentado e pronto para deploy",
      "Apenas aprovação do gerente",
      "Estimativa de tempo"
    ],
    correctAnswer: 1,
    explanation: "DoD tipicamente abrange desenvolvimento, testes, revisão de código e documentação necessária.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 134,
    question: "Entrega incremental beneficia o projeto porque:",
    options: [
      "Aumenta os custos",
      "Permite feedback antecipado, ajustes e realização de valor progressivo",
      "Reduz a qualidade",
      "Complica o planejamento"
    ],
    correctAnswer: 1,
    explanation: "Entregas incrementais validam direção, permitem ajustes e entregam valor antes do final do projeto.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 135,
    question: "O que é um 'deliverable'?",
    options: [
      "Apenas o produto final",
      "Qualquer produto, resultado ou capacidade única e verificável que deve ser produzido",
      "Apenas documentos",
      "O cronograma do projeto"
    ],
    correctAnswer: 1,
    explanation: "Deliverables são quaisquer saídas verificáveis, incluindo produtos, serviços e resultados.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 136,
    question: "Em projetos de pré-sal no Brasil, 'FPSO' como deliverable final representa:",
    options: [
      "Um documento de projeto",
      "Floating Production Storage and Offloading - uma unidade completa de produção",
      "Um software de controle",
      "Um relatório financeiro"
    ],
    correctAnswer: 1,
    explanation: "FPSO é uma plataforma flutuante de produção, armazenamento e transferência - um deliverable complexo.",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 137,
    question: "Testes de aceitação do usuário (UAT) são realizados:",
    options: [
      "Apenas pela equipe técnica",
      "Por usuários finais ou representantes para verificar se o produto atende suas necessidades",
      "Antes do desenvolvimento",
      "Apenas em projetos de software"
    ],
    correctAnswer: 1,
    explanation: "UAT envolve usuários reais validando que o produto atende seus requisitos e expectativas.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 138,
    question: "O conceito de 'fitness for purpose' significa:",
    options: [
      "Exercícios físicos no trabalho",
      "O produto atende adequadamente ao uso pretendido",
      "Estar em boa forma física",
      "Ter equipamentos modernos"
    ],
    correctAnswer: 1,
    explanation: "Fitness for purpose indica que o produto é adequado e apropriado para o propósito pretendido.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "Transição de entrega para operações deve incluir:",
    options: [
      "Apenas entregar o produto",
      "Treinamento, documentação, suporte inicial e transferência formal de responsabilidade",
      "Encerrar imediatamente o contato",
      "Apenas celebração"
    ],
    correctAnswer: 1,
    explanation: "Uma boa transição assegura que operações estão preparados para assumir e operar a entrega.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 140,
    question: "Outcomes (resultados) diferem de outputs (saídas) porque:",
    options: [
      "São a mesma coisa",
      "Outcomes são os benefícios ou mudanças resultantes; outputs são os produtos entregues",
      "Outputs são mais importantes",
      "Outcomes não podem ser medidos"
    ],
    correctAnswer: 1,
    explanation: "Outputs são as entregas tangíveis; outcomes são os benefícios ou impactos que elas geram.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "Em projetos ágeis, 'potentially shippable increment' significa:",
    options: [
      "Produto que pode ser enviado pelo correio",
      "Incremento que atende ao Definition of Done e pode ser liberado a qualquer momento",
      "Apenas um protótipo",
      "Documento de requisitos"
    ],
    correctAnswer: 1,
    explanation: "Um incremento potencialmente entregável está pronto para produção, mesmo que não seja liberado imediatamente.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Gerenciamento de defeitos inclui:",
    options: [
      "Esconder problemas",
      "Identificar, documentar, priorizar, resolver e verificar correção de defeitos",
      "Apenas contar defeitos",
      "Demitir responsáveis"
    ],
    correctAnswer: 1,
    explanation: "Gerenciamento de defeitos é um processo estruturado desde identificação até verificação da correção.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "O que significa entregar 'valor antecipado' ao cliente?",
    options: [
      "Terminar antes do prazo",
      "Entregar funcionalidades de maior valor primeiro, mesmo que o projeto não esteja completo",
      "Cobrar antecipadamente",
      "Prometer mais do que pode entregar"
    ],
    correctAnswer: 1,
    explanation: "Valor antecipado significa priorizar e entregar primeiro os itens de maior importância para o cliente.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 144,
    question: "Em projetos de missões espaciais, 'launch readiness review' é:",
    options: [
      "Uma reunião informal",
      "Avaliação formal que confirma que todos os sistemas estão prontos para lançamento",
      "Revisão de custos",
      "Treinamento de astronautas"
    ],
    correctAnswer: 1,
    explanation: "Launch readiness review é uma verificação crítica final antes de autorizar o lançamento de uma missão.",
    domain: "Entrega",
    difficulty: "hard"
  },
  {
    id: 145,
    question: "O papel da inspeção na entrega de qualidade é:",
    options: [
      "Criar mais trabalho",
      "Identificar defeitos e não-conformidades antes que cheguem ao cliente",
      "Substituir testes",
      "Apenas documentar"
    ],
    correctAnswer: 1,
    explanation: "Inspeções detectam problemas cedo, reduzindo o custo de correção e protegendo o cliente.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 146,
    question: "Requisitos não-funcionais incluem:",
    options: [
      "Apenas funcionalidades",
      "Performance, segurança, usabilidade, confiabilidade e outras qualidades do sistema",
      "Apenas design visual",
      "Apenas requisitos de hardware"
    ],
    correctAnswer: 1,
    explanation: "Requisitos não-funcionais definem atributos de qualidade e restrições do sistema.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 147,
    question: "Ao entregar um FPSO em Angola, a 'warranty period' (período de garantia) serve para:",
    options: [
      "Estender indefinidamente as responsabilidades",
      "Período onde fornecedor corrige defeitos descobertos após entrega sem custo adicional",
      "Apenas questões legais",
      "Marketing do projeto"
    ],
    correctAnswer: 1,
    explanation: "O período de garantia obriga o fornecedor a corrigir defeitos identificados após a entrega.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Métricas de entrega podem incluir:",
    options: [
      "Apenas custos",
      "Defeitos encontrados, satisfação do cliente, conformidade com requisitos, tempo de entrega",
      "Apenas prazo",
      "Número de reuniões"
    ],
    correctAnswer: 1,
    explanation: "Métricas de entrega abrangem qualidade, satisfação, conformidade e eficiência de entrega.",
    domain: "Entrega",
    difficulty: "easy"
  },
  {
    id: 149,
    question: "O que é 'regression testing'?",
    options: [
      "Testes de estresse da equipe",
      "Reteste para garantir que mudanças não introduziram novos defeitos em funcionalidades existentes",
      "Testes em ambientes antigos",
      "Testes de regressão de cronograma"
    ],
    correctAnswer: 1,
    explanation: "Testes de regressão verificam que alterações não quebraram funcionalidades que antes funcionavam.",
    domain: "Entrega",
    difficulty: "medium"
  },
  {
    id: 150,
    question: "Entrega contínua (Continuous Delivery) permite:",
    options: [
      "Trabalho sem parar",
      "Liberar software para produção de forma automatizada e frequente com baixo risco",
      "Nunca parar de codificar",
      "Eliminar testes"
    ],
    correctAnswer: 1,
    explanation: "Continuous Delivery automatiza o pipeline de entrega, permitindo releases frequentes e confiáveis.",
    domain: "Entrega",
    difficulty: "medium"
  },

  // MEASUREMENT (151-175)
  {
    id: 151,
    question: "Por que medir o desempenho do projeto?",
    options: [
      "Para punir a equipe",
      "Para entender progresso, identificar problemas cedo e tomar decisões informadas",
      "Apenas para relatórios",
      "Para satisfazer auditores"
    ],
    correctAnswer: 1,
    explanation: "Medição fornece visibilidade do progresso e permite intervenções proativas quando necessário.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "KPIs (Key Performance Indicators) devem ser:",
    options: [
      "O máximo possível",
      "Relevantes, mensuráveis, alinhados aos objetivos e em quantidade gerenciável",
      "Secretos",
      "Definidos apenas no final"
    ],
    correctAnswer: 1,
    explanation: "KPIs eficazes são focados, relevantes e ligados diretamente aos objetivos do projeto.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "Earned Value Management (EVM) mede:",
    options: [
      "Apenas custos reais",
      "Desempenho integrando escopo, cronograma e custo em métricas comparativas",
      "Apenas prazo",
      "Satisfação da equipe"
    ],
    correctAnswer: 1,
    explanation: "EVM integra três dimensões críticas para avaliar desempenho de forma objetiva e comparável.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 154,
    question: "O que significa CPI (Cost Performance Index) menor que 1?",
    options: [
      "O projeto está abaixo do orçamento",
      "O projeto está acima do orçamento - gastando mais do que o valor do trabalho realizado",
      "O cronograma está atrasado",
      "A qualidade está baixa"
    ],
    correctAnswer: 1,
    explanation: "CPI < 1 indica que o custo real excede o valor agregado, significando gastos acima do planejado.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "SPI (Schedule Performance Index) maior que 1 indica:",
    options: [
      "O projeto está atrasado",
      "O projeto está adiantado em relação ao cronograma planejado",
      "O orçamento foi excedido",
      "A equipe está sobrecarregada"
    ],
    correctAnswer: 1,
    explanation: "SPI > 1 significa que mais trabalho foi realizado do que o planejado para o período.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "Variance Analysis em EVM compara:",
    options: [
      "Diferentes projetos",
      "Desempenho planejado versus real para identificar desvios",
      "Membros da equipe",
      "Fornecedores"
    ],
    correctAnswer: 1,
    explanation: "Análise de variação compara baseline com atual para identificar e entender diferenças de desempenho.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 157,
    question: "Um dashboard de projeto eficaz deve:",
    options: [
      "Mostrar todos os dados disponíveis",
      "Apresentar informações-chave de forma visual, clara e acionável",
      "Ser atualizado anualmente",
      "Conter apenas texto"
    ],
    correctAnswer: 1,
    explanation: "Dashboards eficazes destacam métricas críticas de forma visual para facilitar decisões rápidas.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 158,
    question: "Em projetos de exploração de petróleo, 'NPT' (Non-Productive Time) mede:",
    options: [
      "Tempo de férias",
      "Tempo perdido que não contribui para o objetivo principal de perfuração",
      "Tempo de manutenção preventiva",
      "Horas extras"
    ],
    correctAnswer: 1,
    explanation: "NPT é uma métrica crítica que mede tempo perdido por problemas, falhas ou esperas improdutivas.",
    domain: "Medição",
    difficulty: "hard"
  },
  {
    id: 159,
    question: "Forecasting em projetos usa dados atuais para:",
    options: [
      "Mudar o passado",
      "Projetar resultados finais prováveis de custo e cronograma",
      "Apenas documentar",
      "Planejar próximos projetos"
    ],
    correctAnswer: 1,
    explanation: "Forecasting projeta EAC (Estimate at Completion) baseado no desempenho atual para antecipar resultados.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 160,
    question: "Velocity em Scrum mede:",
    options: [
      "Velocidade de digitação",
      "Quantidade de trabalho que a equipe completa por sprint, em story points ou itens",
      "Velocidade de internet",
      "Tempo de resposta a e-mails"
    ],
    correctAnswer: 1,
    explanation: "Velocity é a medida de capacidade da equipe baseada em trabalho entregue em sprints anteriores.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "Lead time em Kanban mede:",
    options: [
      "Tempo de liderança",
      "Tempo desde a solicitação até a entrega do item",
      "Tempo de desenvolvimento apenas",
      "Tempo de reuniões"
    ],
    correctAnswer: 1,
    explanation: "Lead time é o tempo total que um item leva desde o pedido até chegar ao cliente.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Cycle time difere de lead time porque:",
    options: [
      "São iguais",
      "Cycle time mede apenas o tempo de trabalho ativo; lead time inclui todo tempo de espera",
      "Lead time é menor",
      "Cycle time não pode ser medido"
    ],
    correctAnswer: 1,
    explanation: "Cycle time é o tempo de trabalho ativo; lead time é o tempo total incluindo filas e esperas.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "O que é 'Estimate at Completion' (EAC)?",
    options: [
      "Estimativa inicial do projeto",
      "Previsão do custo total final do projeto baseada no desempenho atual",
      "Custo real até agora",
      "Orçamento original"
    ],
    correctAnswer: 1,
    explanation: "EAC é a projeção do custo total final, recalculada com base no desempenho e condições atuais.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "Burnup charts mostram:",
    options: [
      "Trabalho restante",
      "Trabalho completado ao longo do tempo em relação ao escopo total",
      "Custos acumulados",
      "Riscos identificados"
    ],
    correctAnswer: 1,
    explanation: "Burnup charts visualizam progresso acumulado e podem mostrar mudanças de escopo também.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 165,
    question: "Métricas de qualidade incluem:",
    options: [
      "Apenas custos de qualidade",
      "Densidade de defeitos, taxa de resolução, satisfação do cliente, cobertura de testes",
      "Apenas número de testes",
      "Apenas feedback negativo"
    ],
    correctAnswer: 1,
    explanation: "Métricas de qualidade abrangem múltiplos indicadores de conformidade e satisfação.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 166,
    question: "Em projetos da NASA, 'TRL' (Technology Readiness Level) mede:",
    options: [
      "Nível de treinamento",
      "Maturidade de uma tecnologia desde conceito até operação comprovada",
      "Velocidade de processamento",
      "Custo de desenvolvimento"
    ],
    correctAnswer: 1,
    explanation: "TRL é uma escala de 1-9 que avalia quão madura uma tecnologia está para uso em missões.",
    domain: "Medição",
    difficulty: "hard"
  },
  {
    id: 167,
    question: "Cumulative Flow Diagram (CFD) mostra:",
    options: [
      "Fluxo de caixa",
      "Quantidade de trabalho em cada estágio ao longo do tempo, revelando gargalos",
      "Organograma",
      "Cronograma de entregas"
    ],
    correctAnswer: 1,
    explanation: "CFD visualiza o fluxo de trabalho através de estágios, identificando bloqueios e tendências.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 168,
    question: "Net Promoter Score (NPS) mede:",
    options: [
      "Lucro líquido",
      "Probabilidade de stakeholders recomendarem o projeto ou produto",
      "Número de promessas",
      "Velocidade da rede"
    ],
    correctAnswer: 1,
    explanation: "NPS indica lealdade e satisfação perguntando quão provável é uma recomendação.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 169,
    question: "Por que evitar 'vanity metrics'?",
    options: [
      "São muito caras para coletar",
      "Parecem impressionantes mas não fornecem insights acionáveis para decisões",
      "São difíceis de calcular",
      "Requerem muita documentação"
    ],
    correctAnswer: 1,
    explanation: "Vanity metrics inflam o ego mas não informam decisões reais ou indicam saúde do projeto.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 170,
    question: "Baseline de medição serve como:",
    options: [
      "Meta final",
      "Referência aprovada contra a qual variações são medidas",
      "Estimativa inicial não aprovada",
      "Previsão do final"
    ],
    correctAnswer: 1,
    explanation: "A baseline é o ponto de referência aprovado para comparar desempenho real e identificar variações.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 171,
    question: "Relatórios de progresso devem incluir:",
    options: [
      "Apenas boas notícias",
      "Status atual, variações, riscos, problemas e ações necessárias de forma honesta",
      "Apenas números financeiros",
      "Críticas à gerência"
    ],
    correctAnswer: 1,
    explanation: "Relatórios eficazes são honestos e completos, cobrindo progresso, problemas e próximos passos.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 172,
    question: "O que é 'Earned Value' (EV)?",
    options: [
      "Valor orçado do trabalho realizado até a data",
      "Custo real gasto",
      "Orçamento total",
      "Valor do contrato"
    ],
    correctAnswer: 0,
    explanation: "EV é o valor orçado do trabalho efetivamente completado, medindo progresso em termos financeiros.",
    domain: "Medição",
    difficulty: "medium"
  },
  {
    id: 173,
    question: "Actual Cost (AC) representa:",
    options: [
      "Custo planejado",
      "Custo real incorrido para o trabalho realizado até a data",
      "Custo estimado para conclusão",
      "Orçamento na conclusão"
    ],
    correctAnswer: 1,
    explanation: "AC é o custo real, documentado, que foi gasto para realizar o trabalho até o momento.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 174,
    question: "Planned Value (PV) representa:",
    options: [
      "Custo real",
      "Valor do trabalho que deveria ter sido concluído até a data segundo o plano",
      "Valor ganho",
      "Custo final projetado"
    ],
    correctAnswer: 1,
    explanation: "PV é o orçamento autorizado atribuído ao trabalho que deveria estar completo no momento da análise.",
    domain: "Medição",
    difficulty: "easy"
  },
  {
    id: 175,
    question: "TCPI (To-Complete Performance Index) indica:",
    options: [
      "Desempenho passado",
      "Desempenho de custo necessário no trabalho restante para atingir meta orçamentária",
      "Índice de qualidade",
      "Satisfação da equipe"
    ],
    correctAnswer: 1,
    explanation: "TCPI mostra a eficiência necessária no trabalho restante para cumprir o orçamento ou EAC.",
    domain: "Medição",
    difficulty: "hard"
  },

  // UNCERTAINTY (176-200)
  {
    id: 176,
    question: "Incerteza em projetos refere-se a:",
    options: [
      "Falta de interesse",
      "Estado de não saber completamente, gerando riscos e oportunidades",
      "Certeza absoluta",
      "Apenas riscos negativos"
    ],
    correctAnswer: 1,
    explanation: "Incerteza é a condição de conhecimento incompleto que pode resultar em riscos ou oportunidades.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 177,
    question: "Risco negativo (ameaça) e risco positivo (oportunidade) diferem porque:",
    options: [
      "Oportunidades não existem em projetos",
      "Ameaças podem prejudicar objetivos; oportunidades podem beneficiá-los se exploradas",
      "Apenas ameaças precisam de gestão",
      "São tratados da mesma forma"
    ],
    correctAnswer: 1,
    explanation: "Ameaças podem causar danos; oportunidades podem trazer benefícios se identificadas e aproveitadas.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 178,
    question: "A estratégia 'evitar' para riscos negativos significa:",
    options: [
      "Ignorar o risco",
      "Eliminar a ameaça modificando o plano do projeto para remover a causa",
      "Aceitar as consequências",
      "Transferir para terceiros"
    ],
    correctAnswer: 1,
    explanation: "Evitar elimina o risco mudando algum aspecto do projeto para remover completamente a ameaça.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "Transferir um risco significa:",
    options: [
      "Ignorá-lo",
      "Passar a responsabilidade pelo impacto para terceiros, como através de seguro ou contrato",
      "Aceitá-lo passivamente",
      "Eliminá-lo completamente"
    ],
    correctAnswer: 1,
    explanation: "Transferência desloca a consequência financeira ou responsabilidade para outra parte.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 180,
    question: "Mitigação de riscos envolve:",
    options: [
      "Ignorar o risco",
      "Tomar ações para reduzir a probabilidade ou impacto de uma ameaça",
      "Aceitar o risco",
      "Transferir para seguradora"
    ],
    correctAnswer: 1,
    explanation: "Mitigação implementa ações para diminuir a chance de ocorrência ou reduzir a severidade do impacto.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 181,
    question: "Aceitação ativa de risco difere de passiva porque:",
    options: [
      "São iguais",
      "Ativa estabelece contingência ou plano de resposta; passiva não faz nada antecipadamente",
      "Passiva é mais cara",
      "Ativa ignora o risco"
    ],
    correctAnswer: 1,
    explanation: "Aceitação ativa prepara reservas ou planos; passiva apenas reconhece o risco sem ação prévia.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Em projetos offshore no Brasil, riscos de subsuperfície são tratados como:",
    options: [
      "Não importantes",
      "Incertezas técnicas significativas que requerem análise especializada e reservas",
      "Garantidos por seguro apenas",
      "Responsabilidade exclusiva do governo"
    ],
    correctAnswer: 1,
    explanation: "Riscos de subsuperfície são incertezas técnicas críticas que afetam viabilidade e planejamento.",
    domain: "Incerteza",
    difficulty: "hard"
  },
  {
    id: 183,
    question: "O registro de riscos documenta:",
    options: [
      "Apenas riscos negativos",
      "Riscos identificados, análises, respostas planejadas, donos e status",
      "Apenas custos de contingência",
      "Somente riscos do passado"
    ],
    correctAnswer: 1,
    explanation: "O registro é um documento abrangente com informações completas sobre todos os riscos identificados.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 184,
    question: "Análise Monte Carlo é usada para:",
    options: [
      "Jogos de azar",
      "Simular cenários de cronograma ou custo usando probabilidades para entender faixa de resultados possíveis",
      "Calcular impostos",
      "Gerenciar equipes"
    ],
    correctAnswer: 1,
    explanation: "Monte Carlo usa simulação estatística para modelar incerteza e prever distribuição de resultados.",
    domain: "Incerteza",
    difficulty: "hard"
  },
  {
    id: 185,
    question: "Sensibilidade de risco mostra:",
    options: [
      "Como a equipe se sente sobre riscos",
      "Quais riscos ou variáveis têm maior impacto potencial nos resultados do projeto",
      "A temperatura do ambiente",
      "O humor do patrocinador"
    ],
    correctAnswer: 1,
    explanation: "Análise de sensibilidade identifica quais incertezas mais influenciam os resultados do projeto.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "O apetite de risco de uma organização define:",
    options: [
      "Quanto dinheiro gastar em comida",
      "O grau de incerteza que a organização está disposta a aceitar em busca de objetivos",
      "Número de riscos aceitos",
      "Apenas riscos financeiros"
    ],
    correctAnswer: 1,
    explanation: "Apetite de risco é a quantidade e tipo de risco que uma organização está disposta a assumir.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "Um 'risk owner' é responsável por:",
    options: [
      "Criar todos os riscos",
      "Monitorar e implementar respostas planejadas para riscos designados",
      "Apenas documentar riscos",
      "Aprovar o orçamento"
    ],
    correctAnswer: 1,
    explanation: "O dono do risco é accountable por monitorar o risco e executar ou coordenar respostas.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 188,
    question: "Complexidade em projetos pode surgir de:",
    options: [
      "Apenas tecnologia",
      "Comportamentos humanos, sistemas interconectados, ambiguidade e dinâmicas emergentes",
      "Apenas tamanho",
      "Apenas localização"
    ],
    correctAnswer: 1,
    explanation: "Complexidade pode ter múltiplas fontes incluindo comportamentos, conexões, ambiguidade e mudanças.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 189,
    question: "Volatilidade em ambiente de projeto refere-se a:",
    options: [
      "Agressividade da equipe",
      "Velocidade e magnitude de mudanças imprevisíveis no ambiente do projeto",
      "Preços de commodities apenas",
      "Temperatura do escritório"
    ],
    correctAnswer: 1,
    explanation: "Volatilidade é a taxa e intensidade de mudanças no ambiente que afetam o projeto.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 190,
    question: "Ambiguidade difere de risco porque:",
    options: [
      "São a mesma coisa",
      "Ambiguidade é incerteza conceitual sobre o que algo significa; risco pode ser probabilístico",
      "Risco é sempre maior",
      "Ambiguidade não afeta projetos"
    ],
    correctAnswer: 1,
    explanation: "Ambiguidade envolve falta de clareza sobre significados ou interpretações, não apenas probabilidades.",
    domain: "Incerteza",
    difficulty: "hard"
  },
  {
    id: 191,
    question: "Em projetos de missões da NASA, 'unknown unknowns' são:",
    options: [
      "Ignorados no planejamento",
      "Riscos que não podemos prever ou imaginar antecipadamente, cobertos por management reserve",
      "Conhecidos por todos",
      "Facilmente identificáveis"
    ],
    correctAnswer: 1,
    explanation: "Unknown unknowns são riscos imprevisíveis, tratados com reservas gerenciais para flexibilidade.",
    domain: "Incerteza",
    difficulty: "hard"
  },
  {
    id: 192,
    question: "Trigger de risco é:",
    options: [
      "Um gatilho de arma",
      "Indicador ou evento que sinaliza que um risco está prestes a ocorrer ou ocorreu",
      "O próprio risco",
      "Uma estratégia de resposta"
    ],
    correctAnswer: 1,
    explanation: "Triggers são sinais de alerta que indicam a materialização iminente ou real de um risco.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 193,
    question: "Riscos residuais são:",
    options: [
      "Riscos eliminados",
      "Riscos que permanecem após implementar respostas planejadas",
      "Riscos que nunca existiram",
      "Apenas riscos documentais"
    ],
    correctAnswer: 1,
    explanation: "Riscos residuais são aqueles que persistem mesmo depois de ações de resposta serem implementadas.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 194,
    question: "Riscos secundários são:",
    options: [
      "Riscos menores",
      "Novos riscos criados como resultado direto de implementar uma resposta a outro risco",
      "Riscos ignorados",
      "Riscos de segunda categoria"
    ],
    correctAnswer: 1,
    explanation: "Riscos secundários surgem das próprias ações de resposta a riscos, exigindo análise adicional.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "Em projetos de óleo e gás em Angola, riscos geopolíticos:",
    options: [
      "Não existem",
      "São fatores externos significativos que podem afetar continuidade, segurança e custos",
      "São sempre controláveis",
      "Afetam apenas a política"
    ],
    correctAnswer: 1,
    explanation: "Riscos geopolíticos são fatores externos críticos em regiões de instabilidade que afetam projetos.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "A estratégia 'explorar' para oportunidades significa:",
    options: [
      "Apenas observar",
      "Tomar ações para garantir que a oportunidade seja realizada",
      "Ignorar a oportunidade",
      "Transferir para terceiros"
    ],
    correctAnswer: 1,
    explanation: "Explorar maximiza a probabilidade de que uma oportunidade positiva se concretize.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 197,
    question: "Aumentar uma oportunidade significa:",
    options: [
      "Criar mais problemas",
      "Tomar ações para aumentar a probabilidade e/ou impacto positivo",
      "Aceitar passivamente",
      "Transferir benefícios"
    ],
    correctAnswer: 1,
    explanation: "Aumentar implementa ações para ampliar a chance ou magnitude do benefício de uma oportunidade.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Compartilhar uma oportunidade envolve:",
    options: [
      "Dividir apenas custos",
      "Alocar propriedade a terceiros melhor posicionados para capturar o benefício",
      "Guardar segredo",
      "Ignorar a oportunidade"
    ],
    correctAnswer: 1,
    explanation: "Compartilhar envolve parcerias onde terceiros podem melhor realizar e compartilhar benefícios.",
    domain: "Incerteza",
    difficulty: "medium"
  },
  {
    id: 199,
    question: "Resiliência em projetos significa:",
    options: [
      "Rigidez total",
      "Capacidade de absorver impactos, se adaptar e se recuperar de adversidades",
      "Evitar todos os riscos",
      "Nunca mudar planos"
    ],
    correctAnswer: 1,
    explanation: "Resiliência é a habilidade de resistir a choques, adaptar-se e continuar progredindo.",
    domain: "Incerteza",
    difficulty: "easy"
  },
  {
    id: 200,
    question: "O princípio do PMBOK 7 sobre incerteza enfatiza:",
    options: [
      "Evitar toda incerteza",
      "Abraçar adaptabilidade e resiliência, navegando em ambientes complexos",
      "Ignorar riscos",
      "Planejar rigidamente"
    ],
    correctAnswer: 1,
    explanation: "O princípio enfatiza adaptabilidade e resiliência como capacidades essenciais em ambientes incertos.",
    domain: "Incerteza",
    difficulty: "easy"
  }
];

export const domains = [
  "Stakeholders",
  "Equipe",
  "Abordagem de Desenvolvimento",
  "Planejamento",
  "Trabalho do Projeto",
  "Entrega",
  "Medição",
  "Incerteza"
];
