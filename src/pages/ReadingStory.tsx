import { useParams, useNavigate } from "react-router-dom";
import { stories } from "@/data/stories";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { toast } from "sonner";
import { useEffect } from "react";

const difficultyMap: Record<string, "Fácil" | "Médio" | "Difícil"> = {
  easy: "Fácil",
  medium: "Médio",
  hard: "Difícil",
  "very-hard": "Difícil",
};

const ReadingStory = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const storyId = Number(id);
  const story = stories.find((s) => s.id === storyId);
  const { progress, completeStory } = useProgress();

  useEffect(() => {
    if (!story) {
      toast.error("História não encontrada.");
    }
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">História não encontrada</h2>
          <Button onClick={() => navigate("/reading")}>Voltar</Button>
        </div>
      </div>
    );
  }

  // Check difficulty matches user's chosen difficulty
  const stored = localStorage.getItem("userDifficulty") ?? "easy";
  const userDifficulty = difficultyMap[stored] ?? "Fácil";
  if (story.difficulty !== userDifficulty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6 max-w-2xl text-center">
          <h2 className="text-xl font-bold mb-2">História indisponível para o nível atual</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Esta história é nível <strong>{story.difficulty}</strong>, mas seu nível atual é{" "}
            <strong>{userDifficulty}</strong>.
          </p>
          <div className="flex justify-center gap-3">
            <Button onClick={() => navigate("/reading")}>Voltar</Button>
            <Button
              variant="secondary"
              onClick={() => {
                localStorage.setItem("userDifficulty", "easy");
                toast.success("Nível alterado para Fácil. Você pode tentar novamente.");
                navigate("/reading");
              }}
            >
              Mudar para Fácil
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const isCompleted = progress.completedStories.includes(story.id);

  const handleComplete = () => {
    if (!isCompleted) {
      completeStory(story.id, story.xp);
      toast.success(`🎉 Parabéns! Você ganhou ${story.xp} XP!`);
    } else {
      toast("Você já completou esta história.");
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">{story.title}</h1>
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <span className="uppercase font-semibold text-accent">{story.category}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> <span>{story.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" /> <span>{story.xp} XP</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Button variant={isCompleted ? "outline" : "gradient"} onClick={handleComplete}>
              {isCompleted ? "✓ Completado" : "Marcar como Completo"}
            </Button>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <div className="prose prose-invert max-w-none text-left">
            {story.content.map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {story.images.map((src, idx) => (
            <Card key={idx} className="p-4">
              <img src={src} alt={`${story.title} ilustração ${idx + 1}`} className="w-full h-48 object-cover rounded-md" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingStory;