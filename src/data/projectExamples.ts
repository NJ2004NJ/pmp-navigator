export interface ProjectExample {
  id: string;
  name: string;
  industry: string;
  country: string;
  flag: string;
  description: string;
  challenges: string[];
  pmbokApplications: string[];
  lessons: string[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export const projectExamples: ProjectExample[] = [
  {
    id: "nasa-artemis",
    name: "Programa Artemis - NASA",
    industry: "Aeroespacial",
    country: "Estados Unidos",
    flag: "🇺🇸",
    description: "O Programa Artemis é a iniciativa da NASA para retornar humanos à Lua e estabelecer presença sustentável, servindo como trampolim para Marte. É um dos projetos mais complexos da história, envolvendo múltiplas agências espaciais internacionais.",
    challenges: [
      "Complexidade técnica sem precedentes em sistemas de suporte à vida",
      "Coordenação entre NASA, ESA, JAXA, CSA e contratantes privados",
      "Orçamento sujeito a ciclos políticos e aprovação do Congresso",
      "Integração de novas tecnologias com sistemas legados",
      "Gerenciamento de riscos em ambiente extremamente hostil",
      "Pressões de cronograma com datas de lançamento públicas"
    ],
    pmbokApplications: [
      "Pensamento Sistêmico: Integração de centenas de milhares de componentes",
      "Gestão de Stakeholders: Navegação entre interesses de agências e governos",
      "Qualidade: Padrões rigorosos onde falhas podem ser fatais",
      "Tailoring: Combinação de abordagens preditivas e ágeis",
      "Gestão de Riscos: Reservas de contingência e redundâncias múltiplas"
    ],
    lessons: [
      "A documentação rigorosa é crítica para rastreabilidade e análise de falhas",
      "Revisões de design formais (PDR, CDR) identificam problemas antes que se tornem caros",
      "Culture de segurança deve permitir que qualquer pessoa pare o trabalho por preocupações",
      "Parcerias internacionais agregam recursos mas aumentam complexidade de coordenação",
      "Comunicação clara com o público e stakeholders políticos é essencial para manter apoio"
    ],
    keyMetrics: [
      { label: "Orçamento Estimado", value: "$93 bilhões" },
      { label: "Duração Prevista", value: "15+ anos" },
      { label: "Parceiros Internacionais", value: "21 países" },
      { label: "Contratantes", value: "1000+" }
    ],
    image: "nasa"
  },
  {
    id: "nigeria-offshore",
    name: "FPSO Egina - Total",
    industry: "Óleo e Gás",
    country: "Nigéria",
    flag: "🇳🇬",
    description: "O FPSO Egina é uma das maiores unidades de produção flutuante do mundo, operando em águas ultra-profundas na costa da Nigéria. O projeto demonstrou compromisso com conteúdo local enquanto mantinha padrões globais de excelência.",
    challenges: [
      "Regulamentações de conteúdo local exigindo 50%+ de participação nigeriana",
      "Logística complexa em ambiente de águas profundas (1.600m)",
      "Segurança em região com histórico de pirataria e instabilidade",
      "Coordenação entre múltiplos estaleiros globais e locais",
      "Transferência de tecnologia e desenvolvimento de capacidade local",
      "Flutuações no preço do petróleo afetando viabilidade econômica"
    ],
    pmbokApplications: [
      "Engajamento de Stakeholders: Trabalho extensivo com comunidades locais e governo",
      "Gestão de Aquisições: Estratégia de múltiplos pacotes para maximizar conteúdo local",
      "Gestão de Riscos: Abordagem robusta para riscos geopolíticos e de segurança",
      "Qualidade: Padrões uniformes aplicados em 10+ estaleiros globalmente",
      "Comunicação: Coordenação em múltiplos fusos horários e culturas"
    ],
    lessons: [
      "Investimento inicial em desenvolvimento local gera dividendos de longo prazo",
      "Parcerias genuínas com comunidades são essenciais para licença social",
      "Flexibilidade na abordagem permite adaptar a realidades locais",
      "Transparência em processos de aquisição constrói confiança",
      "Treinamento e mentoria devem ser contínuos, não eventos únicos"
    ],
    keyMetrics: [
      { label: "Investimento Total", value: "$16 bilhões" },
      { label: "Capacidade", value: "200.000 bpd" },
      { label: "Conteúdo Local", value: "77%" },
      { label: "Empregos Criados", value: "40.000+" }
    ],
    image: "nigeria"
  },
  {
    id: "angola-lng",
    name: "Angola LNG",
    industry: "Óleo e Gás",
    country: "Angola",
    flag: "🇦🇴",
    description: "O Angola LNG foi o primeiro projeto de liquefação de gás natural em escala comercial de Angola, transformando gás que anteriormente era queimado em produto exportável de alto valor. Representa marco na diversificação econômica do país.",
    challenges: [
      "Infraestrutura limitada exigindo construção de porto e utilidades",
      "Capacitação de força de trabalho local sem experiência prévia em LNG",
      "Coordenação entre Sonangol e parceiros IOCs com interesses diversos",
      "Restrições de câmbio e complexidade de pagamentos em kwanzas",
      "Logística de mobilização em ambiente pós-conflito",
      "Requisitos ambientais em ecossistema marinho sensível"
    ],
    pmbokApplications: [
      "Planejamento: Elaboração progressiva em ambiente de alta incerteza",
      "Equipe: Desenvolvimento de competências locais como objetivo estratégico",
      "Adaptabilidade: Ajustes de escopo durante flutuações de mercado",
      "Entregas: Faseamento para gerenciar complexidade e fluxo de caixa",
      "Medição: KPIs de segurança, qualidade e conteúdo local"
    ],
    lessons: [
      "Investimento em infraestrutura social (hospitais, escolas) gera boa vontade duradoura",
      "Contratos de longo prazo com fornecedores locais constroem capacidade sustentável",
      "Adaptação a realidades regulatórias locais exige paciência e persistência",
      "Gestão de expectativas de stakeholders múltiplos requer comunicação constante",
      "Segurança de processo deve ser prioridade zero desde o primeiro dia"
    ],
    keyMetrics: [
      { label: "Investimento Total", value: "$12 bilhões" },
      { label: "Capacidade", value: "5.2 mtpa" },
      { label: "Empregos Pico", value: "12.000+" },
      { label: "Conteúdo Local", value: "45%" }
    ],
    image: "angola"
  },
  {
    id: "brazil-presal",
    name: "Desenvolvimento do Pré-Sal - Petrobras",
    industry: "Óleo e Gás",
    country: "Brasil",
    flag: "🇧🇷",
    description: "O desenvolvimento do pré-sal brasileiro representa uma das maiores conquistas de engenharia do século XXI. Produzir petróleo sob 7.000m de água, sal e rocha exigiu inovação tecnológica sem precedentes e estabeleceu novos padrões globais.",
    challenges: [
      "Profundidades extremas (2.000m água + 5.000m subsuperfície)",
      "Camada de sal instável criando desafios de perfuração",
      "Escala massiva exigindo múltiplos FPSOs simultaneamente",
      "Logística de suporte a operações a 300km da costa",
      "Gerenciamento de CO2 e gases associados",
      "Regime regulatório de partilha de produção em evolução"
    ],
    pmbokApplications: [
      "Inovação: Desenvolvimento de tecnologias proprietárias (pré-sal, subsea)",
      "Gestão de Portfólio: Priorização de campos para otimizar retorno",
      "Aquisições: Contratos de longo prazo com estaleiros para FPSOs",
      "Riscos: Modelos probabilísticos sofisticados para reservatórios",
      "Qualidade: Padrões técnicos que se tornaram referência global"
    ],
    lessons: [
      "Investimento em P&D gera vantagem competitiva sustentável",
      "Padronização de design (FPSOs replicantes) acelera entrega e reduz custos",
      "Formação de engenheiros locais é ativo estratégico de longo prazo",
      "Aprendizado estruturado entre projetos multiplica eficiência",
      "Gestão de conhecimento é crítica quando projetos duram décadas"
    ],
    keyMetrics: [
      { label: "Produção Atual", value: "3+ milhões bpd" },
      { label: "Investimento Acumulado", value: "$200+ bilhões" },
      { label: "FPSOs em Operação", value: "25+" },
      { label: "Custo de Extração", value: "<$7/barril" }
    ],
    image: "brazil"
  },
  {
    id: "nasa-jwst",
    name: "James Webb Space Telescope",
    industry: "Aeroespacial",
    country: "Estados Unidos",
    flag: "🇺🇸",
    description: "O JWST é o maior e mais poderoso telescópio espacial já construído, projetado para observar as primeiras galáxias formadas após o Big Bang. O projeto enfrentou atrasos e aumentos de custo significativos, mas entregou resultados científicos extraordinários.",
    challenges: [
      "Tecnologia pioneira sem precedentes (espelho dobrável de 6.5m)",
      "Sequência de implantação com 344 pontos únicos de falha",
      "Orçamento que cresceu de $1B para $10B+ ao longo de 25 anos",
      "Coordenação entre NASA, ESA, CSA e contratantes",
      "Teste em ambiente que simula espaço profundo",
      "Sem possibilidade de reparo após lançamento (órbita L2)"
    ],
    pmbokApplications: [
      "Complexidade: Navegação em sistema de sistemas altamente acoplados",
      "Qualidade: Teste exaustivo devido à impossibilidade de reparo",
      "Liderança: Múltiplas trocas de gestão mantendo continuidade",
      "Stakeholders: Gerenciamento de expectativas durante atrasos",
      "Valor: Justificativa científica mantendo apoio apesar de custos"
    ],
    lessons: [
      "Tecnologia verdadeiramente pioneira requer reservas substanciais de cronograma",
      "Testes integrados revelam problemas que testes de componentes não capturam",
      "Comunicação transparente sobre desafios mantém credibilidade",
      "Algumas coisas não podem ser aceleradas com mais dinheiro",
      "O produto final pode justificar custos se entrega valor excepcional"
    ],
    keyMetrics: [
      { label: "Custo Total", value: "$10 bilhões" },
      { label: "Duração", value: "25 anos" },
      { label: "Pontos de Falha", value: "344" },
      { label: "Distância da Terra", value: "1.5M km" }
    ],
    image: "jwst"
  }
];
