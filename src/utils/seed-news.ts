export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  content: string;
  date: string;
}

export interface NewsList {
  newsList: NewsItem[];
}
