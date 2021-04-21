//import { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Logo from './logo_giffy.png'
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
//import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from 'wouter'
import { Suspense } from 'react';

export default function App() {

  //const [keyword, setKeyword] = useState('panda')

  return (
    <StaticContext.Provider value={{ name: 'afrobin', suscribeteAlCanal: true }}>
      <div className="App">
        <Suspense fallback={null} />
        <section className="App-content">
          <Link to='/'>
            <figure className="App-logo">
              <img alt='Giffy Logo' src={Logo} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />

            <Route
              component={SearchResults}
              path="/search/:keyword" />

            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route component={() => <h1>404 ERROR :(</h1>}
              path="/404"
            />
          </GifsContextProvider>
        </section>
        <Suspense />
      </div>
    </StaticContext.Provider>
  );
}