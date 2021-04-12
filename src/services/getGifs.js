import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 5, keyword = 'morty', page = 0} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

/* const apiKey = '8sYTp24gDf6lDvjFBAebsvZHarqCjHuY'


export default function getGifs({ keyword = 'morty' } = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const { images, title, id } = image
                    const { url } = images.downsized_medium
                    return { title, id, url }
                })
                return gifs
            }
        })
} */