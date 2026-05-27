"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { type Place } from "@/data/places";
import { Badge } from "@/components/ui/badge";

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/lugares/${place.slug}`} className="block group">
        <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:glow-subtle">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-${
                  index === 0
                    ? "1506905925346-21bda4d32df4"
                    : index === 1
                    ? "1601042879364-f3947d07bea6"
                    : index === 2
                    ? "1464822759023-fed622ff2c3b"
                    : index === 3
                    ? "1558618666-fcd25c85cd64"
                    : index === 4
                    ? "1583683432858-bc8223c1f7e4"
                    : index === 5
                    ? "1540778670146-36e2bf77a891"
                    : index === 6
                    ? "1501785888041-af3ef285b470"
                    : "1587474260584-136574528ed5"
                }?q=80&w=800')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Rating Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 glass rounded-full">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="text-xs font-semibold text-foreground">
                {place.rating}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-1">
                {place.name}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {place.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {place.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-secondary/50 text-muted-foreground border-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
