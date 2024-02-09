import { create } from "zustand";

type SearchStore = {
  title: string;
  year: string;
  setTitle: (title: string) => void;
  setYear: (year: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
    title: "",
    year: "",
    setTitle: (title) => set({ title }),
    setYear: (year) => set({ year }),
}));

type movieResults = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Plot: string;
    Full: any
}

export const useMovieResults = create((set) => ({
    movies: [] as movieResults[],
    setMovies: (movies: movieResults[]) => set({ movies }),
}));
/*type movieDetail as a array of objects*/

type movieDetail = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
export const useMovieDetails = create((set) => ({
    movieDetail: [] as movieDetail[],
    setMovieDetail: (movieDetail: movieDetail[]) => set({ movieDetail }),
}));
