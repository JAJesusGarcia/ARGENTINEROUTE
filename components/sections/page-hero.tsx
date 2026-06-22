"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  showBreadcrumb?: boolean;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
}

export function PageHero({
  title,
  subtitle,
  tagline,
  backgroundImage,
  backgroundVideo,
  showBreadcrumb = false,
  breadcrumbLabel = "Volver",
  breadcrumbHref = "/",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${
                backgroundImage ||
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
              }')`,
            }}
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Breadcrumb */}
        {showBreadcrumb && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href={breadcrumbHref}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {breadcrumbLabel}
            </Link>
          </motion.div>
        )}

        {/* Tagline */}
        {tagline && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full"
          >
            {tagline}
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}