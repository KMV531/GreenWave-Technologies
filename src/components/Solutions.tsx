import { Cloud, Lock, TrendingDown, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cloud,
    title: "Plateforme SaaS de gestion",
    description:
      "Une suite complète d'outils cloud pour gérer vos opérations quotidiennes avec une empreinte carbone minimale. Interface intuitive, performance maximale.",
    features: [
      "Hébergement éco-responsable",
      "Mises à jour automatiques",
      "Support 24/7",
    ],
    color: "text-emerald-400",
  },
  {
    icon: Lock,
    title: "Solutions cloud sécurisées",
    description:
      "Infrastructure hautement sécurisée avec chiffrement de bout en bout, hébergée sur des datacenters certifiés ISO 14001 et alimentés aux énergies renouvelables.",
    features: ["Chiffrement AES-256", "Conformité RGPD", "Backup automatique"],
    color: "text-secondary",
  },
  {
    icon: TrendingDown,
    title: "Optimisation énergétique",
    description:
      "Analysez et réduisez la consommation énergétique de vos systèmes IT grâce à nos algorithmes d'optimisation avancés et notre expertise Green IT.",
    features: [
      "Audit énergétique",
      "Recommandations IA",
      "Monitoring temps réel",
    ],
    color: "text-emerald-400",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nos solutions innovantes
          </h2>
          <p className="text-lg text-muted-foreground">
            Des services adaptés à vos besoins, conçus pour allier performance,
            sécurité et responsabilité environnementale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.title}
                className="group hover:shadow-glow transition-all duration-300 border-border hover:border-emerald-400/50 gradient-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <ArrowRight
                          className={`w-4 h-4 mr-2 ${solution.color}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-emerald-100 cursor-pointer"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
