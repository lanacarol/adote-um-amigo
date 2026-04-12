import { useEffect, useMemo, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import { getAllAnimals } from "../services/api";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [speciesFilter, setSpeciesFilter] = useState("Todos");
  const [cityFilter, setCityFilter] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  useEffect(() => {
    async function loadAnimals() {
      try {
        setError("");
        const allAnimals = await getAllAnimals();
        setAnimals(allAnimals);
      } catch (err) {
        console.error("Erro ao carregar animais:", err);
        setError("Não foi possível carregar os animais.");
      } finally {
        setLoading(false);
      }
    }

    loadAnimals();
  }, []);

  const speciesOptions = useMemo(() => {
    const species = animals.map((animal) => animal.type);
    return ["Todos", ...new Set(species)];
  }, [animals]);

  const cityOptions = useMemo(() => {
    const cities = animals.map((animal) => animal.location);
    return ["Todas", ...new Set(cities)];
  }, [animals]);

  const filteredAnimals = useMemo(() => {
    const result = animals.filter((animal) => {
      const matchesSpecies =
        speciesFilter === "Todos" || animal.type === speciesFilter;

      const matchesCity =
        cityFilter === "Todas" || animal.location === cityFilter;

      const matchesSearch =
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.type.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSpecies && matchesCity && matchesSearch;
    });

    const sorted = [...result];

    if (sortOption === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "species") {
      sorted.sort((a, b) => a.type.localeCompare(b.type));
    }

    return sorted;
  }, [animals, speciesFilter, cityFilter, searchTerm, sortOption]);

  function clearFilters() {
    setSpeciesFilter("Todos");
    setCityFilter("Todas");
    setSearchTerm("");
    setSortOption("name-asc");
  }

  if (loading) {
    return <h2>Carregando animais...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section>
      <h1>Animais para adoção</h1>
      <p>
        Conheça cães, gatos e outros animais especiais que estão esperando um
        novo lar.
      </p>

      <div className="filters-bar">
        <div className="filter-group">
          <label htmlFor="search">Buscar</label>
          <input
            id="search"
            type="text"
            placeholder="Digite o nome ou espécie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="species">Espécie</label>
          <select
            id="species"
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          >
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="city">Cidade</label>
          <select
            id="city"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Ordenar por</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name-asc">Nome A-Z</option>
            <option value="name-desc">Nome Z-A</option>
            <option value="species">Espécie</option>
          </select>
        </div>
      </div>

      <div className="filters-actions">
        <button type="button" className="clear-filters-button" onClick={clearFilters}>
          Limpar filtros
        </button>
      </div>

      <p className="results-count">
        {filteredAnimals.length} animal(is) encontrado(s)
      </p>

      <div className="grid">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <p>Nenhum animal encontrado com esses filtros.</p>
        )}
      </div>
    </section>
  );
}

export default Animals;