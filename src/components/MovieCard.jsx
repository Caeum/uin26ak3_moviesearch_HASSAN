import { Link } from "react-router-dom"



export default function MovieCard({ movie }) {
  // Lager en slug basert på filmens tittel, som skal brukes i URL-en
  const slug = movie.Title.toLowerCase().replace(" ", "-")
  
  return (
    <li>
      {/* Sender imdbID videre i state slik at vi kan hente ut riktig filmside */}
        <Link to={slug}  state={{ imdbID: movie.imdbID }}>
      <article>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <p>Ingen plakat tilgjengelig</p>
        )}

        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </article>
        </Link>
    </li>
  )
}