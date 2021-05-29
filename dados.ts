import { IProject, ISkill } from './types';

export const projetos: Array<IProject> = [
  {
    name: 'Produsis',
    description:
      'Este é um sistema que mede o tempo gasto no manuseio de carga no galpão de uma transportadora. Esse tempos são cruzados com o nível de dificuldade da carga e com a ocorrência de erros para gerar um Ranking dos funcionários do galpão.',
    technologies: 'C# - WPF, SQL Server, Entity Framework.',
    images: [
      'Produsis_1.JPG',
      'Produsis_2.JPG',
      'Produsis_3.JPG',
      'Produsis_4.JPG',
      'Produsis_5.JPG',
      'Produsis_6.JPG',
    ],
    page: 'produsis',
  },
  {
    name: 'Lembre de Ligar',
    description:
      'Esse sistema foi pensado para compartilhar informações entre uma equipe de Serviço de Atendimento ao Motorista, responsável por entrar em contato com motoristas e acompanhar o status de suas entregas.',
    technologies: 'C# - WPF, SQLite',
    images: ['Ligar_1.JPG', 'Ligar_2.JPG', 'Ligar_3.JPG'],
    page: 'ligar',
    link: 'https://github.com/ThaisMap/LembreDeLigar',
  },
  {
    name: 'My Quotes Web',
    description: 'Uma página que mostra frases motivacionais a cada clique',
    technologies: 'NextJS, Firebase',
    images: ['myquotes_1.png', 'myquotes_2.png'],
    page: 'quotesweb',
    link: 'https://my-quotes-map.vercel.app/',
  },
  {
    name: 'My Quotes Mobile',
    description:
      'Um aplicativo que permite cadastrar frases motivacionais e depois exibi-las em ordem aleatória',
    technologies: 'React Native e Firebase',
    images: [
      'appquotes_1.jpg',
      'appquotes_2.jpg',
      'appquotes_3.jpg',
      'appquotes_4.png',
    ],
    page: 'quotesapp',
    link: 'https://github.com/ThaisMap/MyQuotesApp',
  },
  {
    name: 'Quando foi?',
    description:
      'Aplicação que recorda ao usuário quando foi a última vez que algo aconteceu, e quanto tempo se passou.',
    technologies: 'ReactJS',
    images: ['quandofoi_1.png', 'quandofoi_2.png'],
    page: 'quandofoi',
    link: 'https://github.com/ThaisMap/quando-foi-web',
  },
  {
    name: 'Outlook Duplicate Remover',
    description:
      'Um progama desktop portable que percorre arquivos do outlook ativos procurando e excluindo e-mails duplicados',
    technologies: 'Windows Forms em C#',
    images: ['Outlook_1.JPG', 'Outlook_2.JPG'],
    page: 'outlook',
    link: 'https://github.com/ThaisMap/RemoveOutlookDuplicates',
  },
];

export const habilidades: Array<ISkill> = [
  {
    label: 'HTML',
    level: 60,
  },

  {
    label: 'CSS',
    level: 35,
  },

  {
    label: 'Javascript',
    level: 40,
  },

  {
    label: 'ReactJS',
    level: 40,
  },

  {
    label: 'NextJS',
    level: 40,
  },

  {
    label: 'React Native',
    level: 30,
  },

  {
    label: 'NodeJS',
    level: 22,
  },

  {
    label: 'Electron',
    level: 20,
  },
  {
    label: 'Sqlite',
    level: 50,
  },
  {
    label: 'C#',
    level: 80,
  },

  {
    label: 'WPF',
    level: 80,
  },

  {
    label: 'SQL Server',
    level: 50,
  },

  {
    label: 'Entity Framework',
    level: 70,
  },

  {
    label: 'Windows Forms',
    level: 75,
  },
];
