import { ArrowRight, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/hero-image.jpg"}
          width={400}
          height={400}
          alt="Sustainable technology infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-white/95 via-white/90 to-white/80 dark:from-black/98 dark:via-black/95 dark:to-black/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100/50 backdrop-blur-sm border border-emerald-400/20">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-100-foreground">
              Pionnier du Green IT en Europe
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Des solutions technologiques
            <span className="block mt-2 bg-linear-to-r from-emerald-400 to-secondary bg-clip-text text-transparent">
              pour un avenir durable
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            GreenWave Technologies développe des solutions logicielles SaaS
            innovantes et éco-responsables, alliant performance et respect de
            l&apos;environnement pour transformer votre entreprise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="gradient-hero text-white border-0 shadow-glow hover:scale-105 transition-transform group cursor-pointer"
            >
              Découvrir nos solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group cursor-pointer"
            >
              <Zap className="mr-2 h-5 w-5 text-emerald-400 group-hover:animate-pulse" />
              Nos engagements
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Experts passionnés
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">
                -40%
              </div>
              <div className="text-sm text-muted-foreground">
                Empreinte carbone
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-400 to-secondary bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Énergie verte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
