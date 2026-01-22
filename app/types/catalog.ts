export interface CatalogCard {
  id: number;
  name: string;
  price: string;
  image: string;
  favorite: boolean;
  size?: string[];
  description: string;
  add: boolean | null;
  photos?: string[];
  link?: "";
}

export interface Catalog {
  catalog: CatalogCard[];
}
