import { useContext, useEffect, useState } from "react";
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: localStorage.getItem('lastKeyword') }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)

    // Recupera la keyword del LocalStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // Guarda keyword en LocalStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, rating, setGifs])


    // Efecto cada vez que la página cambie
    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, page, rating })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page, rating, setGifs])
    return { loading, loadingNextPage, gifs, setPage }
}