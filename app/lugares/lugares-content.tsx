"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/sections/page-hero";
import { PlaceCard } from "@/components/cards/place-card";
import { places } from "@/data/places";
import { provinces } from "@/data/provinces";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n/context";

export function LugaresContent() {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    places.forEach((place) => place.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter places
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch =
        searchQuery === "" ||
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.provinceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesProvince =
        !selectedProvince || place.provinceSlug === selectedProvince;

      const matchesTag = !selectedTag || place.tags.includes(selectedTag);

      return matchesSearch && matchesProvince && matchesTag;
    });
  }, [searchQuery, selectedProvince, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedProvince(null);
    setSelectedTag(null);
  };

  const hasActiveFilters = searchQuery || selectedProvince || selectedTag;
  const activeFilterCount = [searchQuery, selectedProvince, selectedTag].filter(Boolean).length;

  return (
    <>
      {/* Hero */}
      <PageHero
        title={`${t.places.title} ${t.places.titleHighlight}`}
        subtitle={t.places.description}
        tagline={t.nav.places}
        backgroundImage="/images/staff/about-hero.webp"
      />

      {/* Filters Section */}
      <section className="py-4 bg-background sticky top-16 z-30 border-b border-border/50">
        <div className="container mx-auto px-4">

          {/* Mobile: Search + toggle button in one row */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.places.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50 rounded-full"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                filtersOpen || hasActiveFilters
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground"
              }`}
            >
              <Filter className="w-4 h-4" />
              {locale === "es" ? "Filtros" : "Filters"}
              {activeFilterCount > 0 && (
                <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Mobile: collapsible filter panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="pt-4 flex flex-col gap-3">
                  {/* Province Filters */}
                  <div className="flex flex-wrap gap-2">
                    {provinces.map((province) => (
                      <button
                        key={province.slug}
                        onClick={() =>
                          setSelectedProvince(
                            selectedProvince === province.slug ? null : province.slug
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedProvince === province.slug
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {province.name}
                      </button>
                    ))}
                  </div>

                  {/* Tag Filters */}
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`cursor-pointer transition-all ${
                          selectedTag === tag
                            ? "bg-primary/20 text-primary border-primary/30"
                            : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                        }`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Clear filters */}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      {t.places.clearFilters}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop: layout original completo */}
          <div className="hidden md:flex flex-col gap-4 py-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.places.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50 rounded-full"
              />
            </div>

            {/* Province Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
                <Filter className="w-4 h-4" />
                <span>{locale === "es" ? "Filtrar:" : "Filter:"}</span>
              </div>
              {provinces.map((province) => (
                <button
                  key={province.slug}
                  onClick={() =>
                    setSelectedProvince(
                      selectedProvince === province.slug ? null : province.slug
                    )
                  }
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedProvince === province.slug
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {province.name}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1.5 rounded-full text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                >
                  {t.places.clearFilters}
                </button>
              )}
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`cursor-pointer transition-all ${
                    selectedTag === tag
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPlaces.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg mb-4">
                {t.places.noResults}
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                {t.places.clearFilters}
              </button>
            </motion.div>
          ) : (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground text-sm mb-8"
              >
                {locale === "es"
                  ? `Mostrando ${filteredPlaces.length} destino${filteredPlaces.length !== 1 ? "s" : ""}`
                  : `Showing ${filteredPlaces.length} destination${filteredPlaces.length !== 1 ? "s" : ""}`}
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPlaces.map((place, index) => (
                  <PlaceCard key={place.id} place={place} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}