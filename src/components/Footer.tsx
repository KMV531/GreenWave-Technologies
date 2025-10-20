import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">GW</span>
              </div>
              <span className="font-bold text-lg">
                GreenWave <span className="text-emerald-400">Technologies</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solutions logicielles durables et innovantes pour un avenir
              numérique responsable.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted hover:bg-emerald-400/20 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted hover:bg-emerald-400/20 flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted hover:bg-emerald-400/20 flex items-center justify-center transition-colors group"
                aria-label="Github"
              >
                <FaGithub className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Accueil", "Nos solutions", "Engagements", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {[
                "Mentions légales",
                "Politique de confidentialité",
                "Conditions d'utilisation",
                "Cookies",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>
                  123 Avenue Verte
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:contact@greenwave.tech"
                  className="hover:text-emerald-400 transition-colors"
                >
                  contact@greenwave.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} GreenWave Technologies. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-emerald-400">♥</span> for a
              sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
