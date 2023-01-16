type UTCDate = string;
type GUID = string;

export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: UTCDate;
  updatedAt: UTCDate;
  featured: boolean;
  launches: Launches[];
  events: any[];
}

interface Launches {
  id: GUID;
  provider: string;
}
