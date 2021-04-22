import { memo } from "react"
import { useLocation } from "wouter"
import useForm from "./hook"
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {

    const { keyword, rating, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating
    })

    // eslint-disable-next-line
    const [_, pushLocation] = useLocation()

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    }


    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input
                className={css["c-search-input"]}
                placeholder="Search a gif here..."
                onChange={handleChange}
                type='text'
                value={keyword}
            />

            <select className={css["c-search-list"]} onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {RATINGS.map((rating => (
                    <option key={rating}>{rating}</option>
                )))}
            </select>
        </form>
    )
}

export default memo(SearchForm)