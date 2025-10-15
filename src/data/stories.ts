import readingBooks from "@/assets/reading-books.png";
import mascotImage from "@/assets/mascot-owl.png";

export type Story = {
  id: number;
  title: string;
  category: string;
  duration: string;
  xp: number;
  stars: number;
  difficulty: "Fácil" | "Médio" | "Difícil";
  content: string[]; // array of paragraphs
  images: string[]; // image URLs or imported assets
};

export const stories: Story[] = [
  // Fábulas (Fácil)
  {
    id: 1,
    title: "A Cigarra e a Formiga",
    category: "Fábulas",
    duration: "5 min",
    xp: 50,
    stars: 3,
    difficulty: "Fácil",
    content: [
      "Em um verão quente e ensolarado, a Cigarra passava os dias cantando, dançando e aproveitando a vida. Enquanto isso, a Formiga trabalhava incansavelmente, carregando grãos e folhas pesadas para armazenar comida para o inverno que se aproximava.",
      "A Cigarra, vendo o esforço da Formiga, a convidou para se juntar à diversão.",
      "\"Por que você trabalha tanto?\", perguntou a Cigarra. \"Venha aproveitar o sol e cantar comigo! Há tempo de sobra.\"",
      "A Formiga, suando debaixo do sol, respondeu:",
      "\"Estou guardando comida para o inverno, quando não haverá nada para comer. Você deveria fazer o mesmo.\"",
      "A Cigarra riu e continuou seu canto, ignorando o aviso. Ela pensava que a Formiga era boba por se preocupar tanto com o futuro, quando o presente era tão agradável.",
      "O verão acabou e a temperatura começou a cair. A chuva e a neve chegaram, cobrindo o chão e tornando a busca por alimento impossível. A Cigarra, faminta e tremendo de frio, percebeu seu erro. Ela não tinha nenhuma comida e nenhum abrigo.",
      "Desesperada, ela foi até o formigueiro e bateu na porta. A Formiga, bem alimentada e aquecida, abriu a porta.",
      "\"Formiga, por favor, me ajude! Estou morrendo de fome e frio\", implorou a Cigarra. \"Me dê um pouco da sua comida.\"",
      "A Formiga, olhando seriamente para a Cigarra, perguntou:",
      "\"O que você fez durante o verão inteiro?\"",
      "A Cigarra, envergonhada, respondeu:",
      "\"Eu cantei e dancei o tempo todo.\"",
      "A Formiga então respondeu:",
      "\"Muito bem. Já que você cantou no verão, agora dance no inverno.\"",
      "E fechou a porta."
    ],
    images: [mascotImage, readingBooks, "/placeholder.svg"],
  },
  {
    id: 2,
    title: "A Lebre e a Tartaruga",
    category: "Fábulas",
    duration: "4 min",
    xp: 40,
    stars: 3,
    difficulty: "Fácil",
    content: [
      "A lebre, confiante em sua rapidez, zomba da tartaruga e aceita correr.",
      "A tartaruga segue firme e vence a corrida pela persistência.",
      "A moral: devagar e sempre."
    ],
    images: [readingBooks, "/placeholder.svg"],
  },

  // Contos Clássicos (Médio)
  {
    id: 3,
    title: "Chapeuzinho Vermelho",
    category: "Contos Clássicos",
    duration: "8 min",
    xp: 75,
    stars: 3,
    difficulty: "Médio",
    content: [
      "Chapeuzinho vai visitar a avó levando uma cesta. No caminho encontra o lobo que planeja enganar ambas.",
      "Com astúcia e ajuda, Chapeuzinho e a avó ficam a salvo. A história traz lições sobre confiar em estranhos."
    ],
    images: [readingBooks, "/placeholder.svg"],
  },
  {
    id: 4,
    title: "Os Três Porquinhos",
    category: "Contos Clássicos",
    duration: "6 min",
    xp: 60,
    stars: 3,
    difficulty: "Médio",
    content: [
      "Três porquinhos constroem casas com materiais diferentes. O lobo tenta derrubar as casas;",
      "Só a casa de tijolos resiste. A moral: trabalho bem feito compensa."
    ],
    images: ["/placeholder.svg"],
  },

  // Contos (Difícil)
  {
    id: 5,
    title: "A Lenda do Rio Encantado",
    category: "Contos",
    duration: "12 min",
    xp: 120,
    stars: 4,
    difficulty: "Difícil",
    content: [
      "Em uma aldeia, existe um rio que muda quem o visita: alguns veem memórias, outros encontram coragem.",
      "Um jovem precisa atravessar o rio para salvar sua irmã. Pelo caminho aprende sobre sacrifício e coragem."
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },

  // Additional examples to show category filtering
  {
    id: 6,
    title: "O Pássaro Colorido",
    category: "Contos",
    duration: "10 min",
    xp: 100,
    stars: 3,
    difficulty: "Médio",
    content: [
      "Um pássaro que perdeu suas cores viaja pelo mundo para aprendê-las com amigos",
      "e descobre que a verdadeira beleza vem do coração."
    ],
    images: [readingBooks],
  },
];