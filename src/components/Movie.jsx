import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"


export default function Movie() {

  const { movie } = useParams()
  // Henter ut imdbID som ble sendt fra MovieCard via Link state
  const { state } = useLocation()

  // Lagrer informasjon om en valgt film fra OMDB API
  const [apiData, setApiData] = useState(null)

  // Henter ut detaljer om en fil fra OMDB
  const getData = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=f150021d&i=${state.imdbID}&plot=full` // Plot til full
    )
    const data = await response.json()
    setApiData(data)
  }


  useEffect(() => {
    if (state?.imdbID) {
    getData()
    }
  }, [state])
  
  return (
    <main>
      <h1>{apiData?.Title}</h1>
      {/* Sjekker først at apiData finnes før vi prøver å vise plakat og detaljer */}
      {apiData?.Poster !== "N/A" ? (
        <img src={apiData?.Poster} alt={apiData?.Title} />
      ) : (
        <p>Ingen plakat tilgjengelig</p>
      )}
      {/* Viser detaljer om filmen, sjekker først at apiData finnes */}
      <p>År: {apiData?.Year}</p>
      <p>Type: {apiData?.Type}</p>
      <p>Sjanger: {apiData?.Genre}</p>
      <p>Regissør: {apiData?.Director}</p>
      <p>Plot: {apiData?.Plot}</p>
    </main>
  )
}