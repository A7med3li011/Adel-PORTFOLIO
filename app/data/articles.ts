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
  {
    id: 2,
    title:
      "Zero-Knowledge Encryption, The Service Provider Can’t Read Your Data",
    thumbnail: "/assets/images/articles/article2.png",
    url: "https://medium.com/@adelmostafamohamed12/zero-knowledge-encryption-c24168f24752?sharedUserId=adelmostafamohamed12",
    readTime: "8 min read",
    category: "Security",
  },
];
