import axios from "axios";

const dogApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": process.env.REACT_APP_DOG_API_KEY,
  },
});

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": process.env.REACT_APP_CAT_API_KEY,
  },
});

export async function getDogs() {
  const response = await dogApi.get("/breeds");
  return response.data;
}

export async function getCats() {
  const response = await catApi.get("/breeds");
  return response.data;
}

export async function getAllAnimals() {
  const dogs = await getDogs();
  const cats = await getCats();

  const formattedDogs = dogs.slice(0, 6).map((dog) => ({
    id: `dog-${dog.id}`,
    name: dog.name,
    type: "Cachorro",
    age: "Não informado",
    location: "Abrigo parceiro",
    image:
      dog.image?.url ||
      "https://via.placeholder.com/400x250?text=Cachorro",
    description: dog.temperament || "Sem descrição disponível.",
    origin: dog.origin || "Origem não informada",
  }));

  const formattedCats = cats
    .filter((cat) => cat.image?.url)
    .slice(0, 6)
    .map((cat) => ({
      id: `cat-${cat.id}`,
      name: cat.name,
      type: "Gato",
      age: "Não informado",
      location: "Abrigo parceiro",
      image: cat.image.url,
      description: cat.temperament || "Sem descrição disponível.",
      origin: cat.origin || "Origem não informada",
    }));

  const localAnimals = [
    {
      id: "local-1",
      name: "Pipoca",
      type: "Hamster",
      age: "1 ano",
      location: "Orlândia - SP",
      image:
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      description:
        "Hamster dócil, ativo e acostumado com contato humano.",
      origin: "Resgatado",
    },
    {
      id: "local-2",
      name: "Nino",
      type: "Porquinho-da-índia",
      age: "2 anos",
      location: "Ribeirão Preto - SP",
      image:
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      description:
        "Muito carinhoso, tranquilo e ideal para ambientes internos.",
      origin: "Abrigo parceiro",
    },
    {
      id: "local-3",
      name: "Floquinho",
      type: "Coelho",
      age: "1 ano",
      location: "Batatais - SP",
      image:
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      description:
        "Coelho calmo e amigável, gosta de ambientes silenciosos.",
      origin: "Abrigo parceiro",
    },
    {
      id: "local-4",
      name: "Lili",
      type: "Calopsita",
      age: "8 meses",
      location: "Franca - SP",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      description:
        "Ave sociável, comunicativa e acostumada com pessoas.",
      origin: "Resgatada",
    },
    {
      id: "local-5",
      name: "Casquinha",
      type: "Tartaruga",
      age: "3 anos",
      location: "São Joaquim da Barra - SP",
      image:
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      description:
        "Animal calmo, ideal para quem busca um pet tranquilo.",
      origin: "Abrigo parceiro",
    },
  ];

  return [...formattedDogs, ...formattedCats, ...localAnimals];
}