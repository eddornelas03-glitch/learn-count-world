import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Clock, CheckCircle } from "lucide-react";
import { Mascot } from "@/components/Mascot";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/contexts/ProgressContext";
import { toast } from "sonner";
import readingImage from "@/assets/reading-books.png";
import { stories as allStories } from "@/data/stories";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const categoriesOrder = ["Fábulas", "Contos Clássicos", "Contos"];

const difficultyMap: Record<string, "Fácil" | "Médio" | "Difícil"> = {
  easy: "Fácil",
  medium: "Médio",
  hard: "Difícil",
  "very-hard": "Difícil",
};

const Reading = () => {
  const { progress, completeStory } = useProgress();
  const navigate = useNavigate();

  // Determine user difficulty from localStorage (set by Index)
  const [userDifficulty, setUserDifficulty] = useState<"Fácil" | "Médio" | "Difícil">(
    () => {
      const stored = localStorage.getItem("userDifficulty");
      if (!stored) return "Fácil";
      return difficultyMap[stored] ?? "Fácil";
    }
  );

  useEffect(() => {
    const stored = localStorage.getItem("userDifficulty");
    if (stored && difficultyMap[stored]) {
      setUserDifficulty(difficultyMap[stored]);
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>(categoriesOrder[0]);

  // Build categories list based on available stories but keep our order
  const categories = useMemo(() => {
    const present = new Set(allStories.map((s) => s.category));
    return categoriesOrder.filter((c) => present.has(c));
  }, []);

  const stories = useMemo(
    () =>
      allStories.filter(
        (s) => s.category === selectedCategory && s.difficulty === userDifficulty
      ),
    [selectedCategory, userDifficulty]
  );

  const handleStart = (storyId: number, xp: number) => {
    // navigate to story detail
    navigate(`/reading/story/${storyId}`);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-20">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <img src={readingImage} alt="Leitura" className="w-20 h-20" />
            <div>
              <h1 className="text-4xl font-display font-bold text-foreground">
                Área de Leitura
              </h1>
              <p className="text-muted-foreground font-body">
                Explore histórias mágicas e aprenda se divertindo!
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Nível selecionado: <strong>{userDifficulty}</strong>
              </p>
            </div>
          </div>
          <Mascot message="Vamos ler juntos!" />
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar currentXP={progress.xp} requiredXP={500} level={progress.level} />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const active = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-smooth ${
                    active
                      ? "gradient-primary text-white shadow-soft"
                      : "text-muted-foreground hover:bg-card/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground p-6">
              Não há histórias neste nível para a categoria selecionada.
              <div className="mt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast("Tente alterar o nível na página inicial para ver outras histórias.");
                    navigate("/");
                  }}
                >
                  Voltar para selecionar nível
                </Button>
              </div>
            </div>
          )}

          {stories.map((story) => {
            const isCompleted = progress.completedStories.includes(story.id);

            return (
              <Card
                key={story.id}
                className={`p-6 hover:shadow-glow transition-smooth cursor-pointer border-2 animate-scale-in group ${
                  isCompleted ? "border-success bg-success/5" : "border-border hover:border-primary"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-body font-semibold text-accent uppercase">
                        {story.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
                        {story.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-full ${isCompleted ? "bg-success/20" : "bg-primary/10"}`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{story.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span>{story.xp} XP</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={isCompleted ? "outline" : "gradient"}
                      className="flex-1"
                      onClick={() => handleStart(story.id, story.xp)}
                      disabled={false}
                    >
                      {isCompleted ? "✓ Completado" : "Começar Leitura"}
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        toast(`Duração: ${story.duration} • ${story.xp} XP • Nível: ${story.difficulty}`);
                      }}
                    >
                      Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reading;