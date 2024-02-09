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
}

export const useMovieResults = create((set) => ({
    movies: [] as movieResults[],
    setMovies: (movies: movieResults[]) => set({ movies }),
}));