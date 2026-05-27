"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 rounded-full glass flex items-center justify-center mx-auto mb-8"
        >
          <MapPin className="w-12 h-12 text-primary" />
        </motion.div>

        {/* Error Code */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-8xl font-bold text-gradient mb-4"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-foreground mb-4"
        >
          {t.notFound.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-8"
        >
          {t.notFound.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 group"
          >
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              {t.notFound.backHome}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 border-border/50 bg-secondary/50 hover:bg-secondary group"
          >
            <Link href="/lugares">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t.notFound.explorePlaces}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
