export type GalleryCategory = "all" | "campus" | "classrooms" | "activities" | "celebrations";

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly imageUrl: string;
  readonly category: Exclude<GalleryCategory, "all">;
  readonly altText: string;
  readonly isPlaceholder?: boolean;
}
