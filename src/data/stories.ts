import illust01 from "@/assets/illust-cigarra-01.svg";
import illust02 from "@/assets/illust-cigarra-02.svg";
import illust03 from "@/assets/illust-cigarra-03.svg";
import illust04 from "@/assets/illust-cigarra-04.svg";
import illust05 from "@/assets/illust-cigarra-05.svg";
import illust06 from "@/assets/illust-cigarra-06.svg";
import illust07 from "@/assets/illust-cigarra-07.svg";
import illust08 from "@/assets/illust-cigarra-08.svg";
import illust09 from "@/assets/illust Cigarra-09.svg";
import illust10 from "@/assets/illust-cigarra-10.svg";
import illust11 from "@/assets/illust-cigarra-11.svg";
import illust12 from "@/assets/illust-cigarra-12.svg";

export type Story = {
  id: number;
  title: string;
  category: string;
  duration: string;
  xp: number;
  stars: number;
  difficulty: "Fácil" | "Médio" | "Difícil";
  content: string[];
  images: string[];
  imagesDescriptions?: string[];
};

export const stories: Story[] = [
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
      // 12 parágrafos completos (texto exato deve ser adicionado aqui) ...
    ],
    images: [illust01, illust02, illust03, illust04, illust05, illust06, illust07, illust08, illust09, illust10, illust11, illust12],
    imagesDescriptions: [
      "Parágrafo 1: Cigarra dançando sob o sol; Formiga carregando grãos ao fundo.",
      "Parágrafo 2: Cigarra convidando a Formiga para se juntar à diversão.",
      "Parágrafo 3: Diálogo entre Cigarra e Formiga sob um céu ensolarado.",
      "Parágrafo 4: Formiga aponta para o futuro; Cigarra observa surpreso.",
      "Parágrafo 5: Cigarra ri e dança; Formiga continua trabalhando.",
      "Parágrafo 6: Transição verão para inverno com neve no chão.",
      "Parágrafo 7: Cigarra bate na porta; Formiga aparece na entrada.",
      "Parágrafo 8: Cigarra implora por comida; balões de diálogo aparecem.",
      "Parágrafo 9: Close-up da Formiga questionando o verão.",
      "Parágrafo 10: Cigarra envergonhada com flashbacks do verão.",
      "Parágrafo 11: Formiga dá a moral com firmeza.",
      "Parágrafo 12: Porta é fechada, inverno chegando."
    ],
  },
  // ... demais histórias mantidas conforme o conteúdo existente
];