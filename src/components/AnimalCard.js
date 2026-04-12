import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
  return (
    <div className="card">
      <img src={animal.image} alt={animal.name} className="card-image" />

      <h3>{animal.name}</h3>
      <p><strong>Espécie:</strong> {animal.type}</p>
      <p><strong>Idade:</strong> {animal.age}</p>
      <p><strong>Local:</strong> {animal.location}</p>

      <Link to={`/animals/${animal.id}`} className="button-link">
        Ver detalhes
      </Link>
    </div>
  );
}

export default AnimalCard;