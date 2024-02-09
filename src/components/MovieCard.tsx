import React from 'react'
import { useMovieResults} from "../store/store";

const MovieCard = () => {
    const movies = useMovieResults((state: any) => state.movies);
  return (
      <>
          {
              movies?.length > 0 && (
                  <div className="container mx-auto py-10 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold mb-8 text-white">Resultados</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {
                              movies?.map((movie: any, index: any) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-lg mb-4"/>
                                      <div className="text-xl font-bold mb-2">{movie.Title}</div>
                                      <div className="text-lg">{movie.Year}</div>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              )
          }
          {
              !movies || movies?.length === 0 ? (
                  <div className="container mx-auto py-10 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold mb-8 text-white">No hay resultados</div>
                  </div>
              )
                  : null
          }
      </>
  )
}

export default MovieCard
