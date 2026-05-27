"use client";

import { motion } from "framer-motion";

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] bg-card animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-16 left-0 right-0 container mx-auto px-4">
          <div className="h-4 w-24 bg-muted rounded-full mb-4" />
          <div className="h-12 w-3/4 max-w-xl bg-muted rounded-lg mb-4" />
          <div className="h-6 w-1/2 max-w-md bg-muted rounded-lg" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-muted animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] bg-muted animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}
