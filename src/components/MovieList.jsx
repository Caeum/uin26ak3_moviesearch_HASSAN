import MovieCard from "./MovieCard"

export default function MovieList({ movies }) {
  return (
    <ul>
      {/* Mapper gjennom filmer og viser ett MovieCard for hver film */}
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}