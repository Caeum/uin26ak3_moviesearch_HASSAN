import MovieList from './MovieList'
import { useState, useEffect } from 'react'

export default function Home() {

  // Lagrer filmer fra OMDB API
  const [apiData, setApiData] = useState([])

  // Lagrer teksten brukeren skriver i søkefeltet
  const [searchTerm, setSearchTerm] = useState("")

  // Henter ut filmer fra OMDB basert på søkeord, "query"
  const getData = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=f150021d&s=${query}`
    )
    const data = await response.json()

    // Search brukes hvis API-et finner filmer ellers settes en tom liste
    setApiData(data.Search || [])
  }

  useEffect(() => {
    // Søk trigges først når vi har skrevet minst 3 tegn
    if (searchTerm.trim().length >= 3) {
      getData(searchTerm)
    } else {
      // Hjemmesiden, standardvisning James Bond
      getData("James Bond")
    }
  }, [searchTerm])

  return (
    <main>
      <h1>Filmer</h1>

      <section>
        <label htmlFor="movie-search">Søk etter filmer:  </label>
        <input
          id="movie-search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Lord of the Rings..."
        />
      </section>

      <section>
        <h2>{searchTerm.trim().length >= 3 ? "Søkeresultater" : "James Bond filmer"}</h2>
        <MovieList movies={apiData} />
      </section>
    </main>
  )
}