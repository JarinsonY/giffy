import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TreandingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm"
import { useCallback } from "react"

export default function Home() {

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TreandingSearches />
        </div>
      </div>
    </>
  )
}