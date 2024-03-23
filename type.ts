type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  map(arg0: (post: any) => import("react").JSX.Element): import("react").ReactNode;
  author: Authur;
  body: Block[];
  categories: Category[];
  mainImage: "Image";
  slug: Slug;
  title: "string";
  description: "string";
}

interface Authur extends Base {
  description: "string";
  image: Image;
  name: "string";
  slug: Slug;
}

interface Image {
  _type: "image";
  assets: Reference;
}

interface Reference {
  _type: "slug";
  current: "string";
}

interface Slug {
  _type: "slug";
  current: "string";
}

interface Block {
  _key: "slug";
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "bloackquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
