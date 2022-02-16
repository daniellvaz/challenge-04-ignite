export interface Continents {
  id: number;
  title: string;
  description: string;
  about: string;
  slug: string;
  image: string;
}

const continents: Continents[] = [
  {
    id: 1,
    title: "América do Norte",
    description: "O novo mundo.",
    about: "",
    slug: "north-america",
    image:
      "https://images.unsplash.com/photo-1571145551427-35601e8bcf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "América do Sul",
    description: "A terra dos maias.",
    about: "",
    slug: "south-america",
    image:
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
  },
  {
    id: 3,
    title: "Ásia",
    description: "Conheça a muralha da China.",
    about: "",
    slug: "asia",
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "África",
    description: "O lar do rei da selva.",
    about: "",
    slug: "africa",
    image:
      "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  },
  {
    id: 5,
    title: "Europa",
    description: "O continente mais antigo.",
    about: "",
    slug: "europe",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Oceania",
    description: "O lar do canguru.",
    about: "",
    slug: "oceania",
    image:
      "https://images.unsplash.com/photo-1594316152008-09c685e0292e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

export const api = {
  get: <T = unknown>(url: string): Promise<T | any> => {
    const [a, b, slug] = url.split("/");

    return new Promise((resolve) => {
      setTimeout(() => {
        if (slug) {
          continents.find((item) => {
            if (item.slug === slug) {
              resolve(item);
            }
          });
        }

        resolve(continents);
      }, 2000);
    });
  },
};
