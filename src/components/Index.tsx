import React from 'react';
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import {useMovieDetails, useMovieResults} from "../store/store";

const Index = () => {
    const movieDetail = useMovieDetails((state: any) => state.movieDetail);
  return (
    <div className="bg-black min-h-screen">
        <div className="container mx-auto py-10 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold mb-8 text-white">Cinema App</div>
        </div>
        <SearchBar />
        <MovieCard />

        {
            movieDetail?.length > 0 && (
                <div className="container mx-auto py-10 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold mb-8 text-white">Detalles</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            movieDetail?.map((movie: any, index: any) => (
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
    </div>
  )
}

export default Index
