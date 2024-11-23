export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  steps: { title: string; description: string; code: string }[];
  explanation: {
    title: string;
    description: string;
    details: { topic: string; explanation: string }[];
  }[];
  previous: string;
  previous_slug: string;
  next: string;
  next_slug: string;
}

export interface IRoadmapItem {
  title: string;
  slug: string;
  level: string;
  description: string;
  orientation: "left" | "right";
}
