import { Linkedin, MessageCircle } from "lucide-react";

interface DeveloperSignatureProps {
  clientName: string;
  className?: string;
}

const WHATSAPP_NUMBER = "5493416153479";

const LINKEDIN_URL = "https://www.linkedin.com/in/jesusjagarcia/";

export default function DeveloperSignature({
  clientName,
  className = "",
}: DeveloperSignatureProps) {
  const whatsappMessage = `Hola Jesús, vi la web de ${clientName} y me gustaría consultarte por el desarrollo de una página similar.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div
      className={`
        border-t border-border
        px-6 py-10
        text-center
        ${className}
      `}
    >
      <p
        className="
          text-[0.55rem]
          font-medium uppercase
          tracking-[0.32em]
          text-muted-foreground
        "
      >
        Designed &amp; Developed by
      </p>

      <p
        className="
          mt-3
          text-xl font-light
          tracking-[-0.02em]
          text-foreground/80
        "
      >
        Jesús García
      </p>

      <div className="mt-5 flex items-center justify-center gap-3">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver el perfil de LinkedIn de Jesús García"
          title="LinkedIn"
          className="
            group flex size-9
            items-center justify-center
            rounded-full
            border border-border
            text-muted-foreground
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-primary/60
            hover:text-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <Linkedin
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a Jesús García por WhatsApp"
          title="WhatsApp"
          className="
            group flex size-9
            items-center justify-center
            rounded-full
            border border-border
            text-muted-foreground
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-primary/60
            hover:text-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <MessageCircle
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
