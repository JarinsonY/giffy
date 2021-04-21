import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm"
import { useCallback } from "react"
import { Helmet } from "react-helmet"

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
      {/* <SearchForm onSubmit={handleSubmit} />

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TreandingSearches /> */}
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}