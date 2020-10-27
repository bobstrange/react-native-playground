import Axios from 'axios'

type MovieResponse = {
  title: string
  description: string
  movies: {
    id: string
    title: string
    releaseYear: string
  }[]
}

export type Movie = MovieResponse['movies'][0]

export async function fetchMovies() {
  return (await Axios.get<MovieResponse>('https://reactnative.dev/movies.json'))
    .data
}
