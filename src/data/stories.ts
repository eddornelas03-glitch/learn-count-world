export type Story = {
  id: number;
  title: string;
  category: string;
  duration: string;
  xp: number;
  stars: number;
  difficulty: "Fácil" | "Médio" | "Difícil";
  content: string;
  images: string[]; // image URLs (can point to /placeholder.svg or project assets)
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
    content:
      "Numa aldeia, a cigarra cantava durante o verão enquanto a formiga trabalhava. Quando o inverno chegou, a formiga tinha comida guardada e a cigarra ficou com frio e fome. A moral: planejar e compartilhar ajudam a comunidade.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    title: "A Lebre e a Tartaruga",
    category: "Fábulas",
    duration: "4 min",
    xp: 40,
    stars: 3,
    difficulty: "Fácil",
    content:
      "A lebre, confiante em sua rapidez, zomba da tartaruga e aceita correr. A tartaruga segue firme e vence a corrida pela persistência. A moral: devagar e sempre.",
    images: ["/placeholder.svg"],
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
    content:
      "Chapeuzinho vai visitar a avó levando uma cesta. No caminho encontra o lobo que planeja enganar ambas. Com astúcia e ajuda, Chapeuzinho e a avó ficam a salvo. A história traz lições sobre confiar em estranhos.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    title: "Os Três Porquinhos",
    category: "Contos Clássicos",
    duration: "6 min",
    xp: 60,
    stars: 3,
    difficulty: "Médio",
    content:
      "Três porquinhos constroem casas com materiais diferentes. O lobo tenta derrubar as casas; só a casa de tijolos resiste. A moral: trabalho bem feito compensa.",
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
    content:
      "Em uma aldeia, existe um rio que muda quem o visita: alguns veem memórias, outros encontram coragem. Um jovem precisa atravessar o rio para salvar sua irmã. Pelo caminho aprende sobre sacrifício e coragem.",
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
    content:
      "Um pássaro que perdeu suas cores viaja pelo mundo para aprendê-las com amigos e descobre que a verdadeira beleza vem do coração.",
    images: ["/placeholder.svg"],
  },
];