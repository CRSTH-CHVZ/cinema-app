import React, {ChangeEvent} from 'react';
import {useSearchStore} from "../store/store";
import {searchMovies} from "../services/services.movies";

interface SearchBarProps {
    onSearch: (query: string) => void;
}
const SearchBar = () => {
    const title = useSearchStore(state => state.title);
    const year = useSearchStore(state => state.year);
    const styles = title && year ? "rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300" : "rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300";
    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        useSearchStore.setState({title: value});
    };
    const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        useSearchStore.setState({year: value});
    };
    const handleSubmit = async () => {
        if(title && year) {
            await searchMovies(title, year);
        }
    }
  return (
      <>
          <div className="text-2xl font-bold text-white">
              Completa con los siguientes datos para buscar tu peli favorita
          </div>

          <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
              <table className="table-auto">
                  <thead>
                  <tr>
                      <th className="text-white">Título</th>
                      <th className="text-white">Año</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>
                          <form className="mb-4 w-full md:mb-0 md:w-1/4">
                              <input
                                  className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
                                  placeholder="ingrese título" type="text"
                                  onChange={ handleChangeTitle }
                              />
                          </form>
                      </td>
                      <td>
                          <form className="mb-4 w-full md:mb-0 md:w-1/4">
                              <input
                                  className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
                                  placeholder="Ingrese año" type="number"
                                  onChange={ handleChangeYear }
                              />
                          </form>
                      </td>
                      <td>
                          <button
                              className={ styles }
                              onClick={ handleSubmit }
                          >
                              Buscar
                          </button>
                      </td>
                  </tr>
                  </tbody>
              </table>


          </header>
      </>
  )
}

export default SearchBar
