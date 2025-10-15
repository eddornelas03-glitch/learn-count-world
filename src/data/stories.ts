import illust01 from "@/assets/illust-cigarra-01.svg";
import illust02 from "@/assets/illust-cigarra-02.svg";
import illust03 from "@/assets/illust-cigarra-03.svg";
import illust04 from "@/assets/illust-cigarra-04.svg";
import illust05 from "@/assets/illust-cigarra-05.svg";
import illust06 from "@/assets/illust-cigarra-06.svg";
import illust07 from "@/assets/illust-cigarra-07.svg";
import illust08 from "@/assets/illust-cigarra-08.svg";
import illust09 from "@/assets/illust-cigarra-09.svg";
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
      "A Cigarra, vendo o esforço da Formiga, a convidou para se juntar à diversão.",
      "\"Por que você trabalha tanto?\", perguntou a Cigarra. \"Venha aproveitar o sol e cantar comigo! Há tempo de sobra.\"",
      "A Formiga, suando debaixo do sol, respondeu: \"Estou guardando comida para o inverno, quando não haverá nada para comer. Você deveria fazer o mesmo.\"",
      "A Cigarra riu e continuou seu canto, ignorando o aviso. Ela pensava que a Formiga era boba por se preocupar tanto com o futuro, quando o presente era tão agradável.",
      "O verão acabou e a temperatura começou a cair. A chuva e a neve chegaram, cobrindo o chão e tornando a busca por alimento impossível. A Cigarra, faminta e tremendo de frio, percebeu seu erro. Ela não tinha nenhuma comida e nenhum abrigo.",
      "Desesperada, ela foi até o formigueiro e bateu na porta. A Formiga, bem alimentada e aquecida, abriu a porta.",
      "\"Formiga, por favor, me ajude! Estou morrendo de fome e frio\", implorou a Cigarra. \"Me dê um pouco da sua comida.\"",
      "A Formiga, olhando seriamente para a Cigarra, perguntou: \"O que você fez durante o verão inteiro?\"",
      "A Cigarra, envergonhada, respondeu: \"Eu cantei e dancei o tempo todo.\"",
      "A Formiga então respondeu: \"Muito bem. Já que você cantou no verão, agora dance no inverno.\"",
      "E fechou a porta."
    ],
    images: [
      illust01, illust02, illust03, illust04, illust05, illust06, illust07, illust08, illust09, illust10, illust11, illust12
    ],
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
  // Restante das histórias permanece conforme o conteúdo existente
];