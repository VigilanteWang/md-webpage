import type { LucideIcon } from "lucide-react";

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  quickFacts: Array<{ label: string; value: string }>;
};

export type ConceptItem = {
  title: string;
  description: string;
  emphasis?: string;
  icon: LucideIcon;
};

export type PermissionLayer = {
  layer: string;
  title: string;
  description: string;
  notes?: string;
  items: Array<{ name: string; detail: string }>;
};

export type ComparisonRow = {
  dimension: string;
  sharePoint: string;
  spe: string;
};

export type TimelinePhase = {
  title: string;
  subtitle: string;
  steps: string[];
  note?: string;
};

export type MisconceptionItem = {
  myth: string;
  reality: string;
};

export type GlossaryItem = {
  term: string;
  meaning: string;
  description: string;
};

export type ReadingGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type Callout = {
  title: string;
  body: string;
  tone?: "default" | "warning";
};
