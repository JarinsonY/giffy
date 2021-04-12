import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import { lazy, Suspense } from 'react'

//Evitamos importar el archivo a menos que se vaya a usar
const TrendingSearches = lazy(
    () => import('./TrendingSearches')
)

//Lazy Load --> Hace que solo se cargue el componente si se necesita
export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' })

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}