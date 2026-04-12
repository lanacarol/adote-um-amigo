import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllAnimals } from "../services/api";

function AnimalDetails() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnimal() {
      try {
        setError("");
        const allAnimals = await getAllAnimals();
        const selectedAnimal = allAnimals.find((item) => item.id === id);
        setAnimal(selectedAnimal || null);
      } catch (err) {
        console.error("Erro ao carregar detalhes:", err);
        setError("Erro ao carregar detalhes do animal.");
      } finally {
        setLoading(false);
      }
    }

    loadAnimal();
  }, [id]);

  if (loading) return <h2>Carregando detalhes...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!animal) return <h2>Animal não encontrado.</h2>;

  return (
    <section className="details-page">
      <div className="details-layout">
        <div className="details-image-box">
          <img src={animal.image} alt={animal.name} className="details-main-image" />
        </div>

        <div className="details-content">
          <span className="details-badge">{animal.type}</span>
          <h1>{animal.name}</h1>
          <p className="details-description">{animal.description}</p>

          <div className="details-info-grid">
            <div className="details-info-card">
              <h3>Espécie</h3>
              <p>{animal.type}</p>
            </div>

            <div className="details-info-card">
              <h3>Idade</h3>
              <p>{animal.age}</p>
            </div>

            <div className="details-info-card">
              <h3>Cidade</h3>
              <p>{animal.location}</p>
            </div>

            <div className="details-info-card">
              <h3>Origem</h3>
              <p>{animal.origin}</p>
            </div>
          </div>

          <div className="details-actions">
            <Link to="/animals" className="button-secondary">
              Voltar
            </Link>

            <Link
              to={`/register?animal=${encodeURIComponent(animal.name)}`}
              className="button-link"
            >
              Quero adotar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimalDetails;