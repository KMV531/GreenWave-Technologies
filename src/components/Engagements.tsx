import { Leaf, Recycle, Heart, Target } from "lucide-react";
import Image from "next/image";

const engagements = [
  {
    icon: Leaf,
    title: "Réduction carbone",
    description:
      "Nous avons réduit notre empreinte carbone de 40% en 2 ans grâce à l'optimisation de nos infrastructures et l'utilisation exclusive d'énergies renouvelables.",
  },
  {
    icon: Recycle,
    title: "Datacenters éco-efficients",
    description:
      "Nos partenaires datacenters sont certifiés ISO 14001 et utilisent des systèmes de refroidissement naturel pour minimiser la consommation énergétique.",
  },
  {
    icon: Heart,
    title: "Politique RSE",
    description:
      "Une démarche globale incluant télétravail favorisé, achats responsables, formation continue sur les enjeux environnementaux et mécénat local.",
  },
  {
    icon: Target,
    title: "Objectifs 2030",
    description:
      "Neutralité carbone complète d'ici 2030, avec un plan d'action ambitieux incluant compensation carbone et innovation continue en Green IT.",
  },
];

const Engagements = () => {
  return (
    <section
      id="engagements"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-400/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-full" />
              <Image
                src={"/green-tech.png"}
                width={200}
                height={200}
                alt="Green technology illustration"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Notre engagement
                <span className="block text-emerald-400">Green IT</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Chez GreenWave Technologies, le numérique responsable n&apos;est
                pas une option, c&apos;est notre ADN. Nous agissons concrètement
                pour réduire l&apos;impact environnemental du secteur IT.
              </p>
            </div>

            <div className="grid gap-6">
              {engagements.map((engagement, index) => {
                const Icon = engagement.icon;
                return (
                  <div
                    key={engagement.title}
                    className="flex gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-emerald-400/50 transition-all duration-300 hover:shadow-soft animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">
                        {engagement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {engagement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-100 dark:bg-black/10 border border-emerald-400/20">
              <div className="text-4xl">🌍</div>
              <div>
                <div className="font-semibold text-accent-foreground">
                  Membre du Green IT Collective
                </div>
                <div className="text-sm text-muted-foreground">
                  Engagé dans la transformation numérique responsable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
