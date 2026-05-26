export type ArticleItem = {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  readTime: string;
  category: string;
};

export const articles: ArticleItem[] = [
  {
    id: 1,
    title: "From 21s to 7s: Optimizing a Zero-Knowledge Authentication Flow",
    thumbnail: "/assets/images/articles/article1.jpg",
    url: "https://medium.com/@adelmostafamohamed12/from-21s-to-7s-optimizing-a-zero-knowledge-authentication-flow-7dee3ffd9115",
    readTime: "8 min read",
    category: "Performance",
  },
];
