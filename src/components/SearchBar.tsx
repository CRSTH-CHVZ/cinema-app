import React from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}
const SearchBar = () => {
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
                                  placeholder="ingrese título" type="text"/>
                          </form>
                      </td>
                      <td>
                          <form className="mb-4 w-full md:mb-0 md:w-1/4">
                              <input
                                  className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
                                  placeholder="Ingrese año" type="text"/>
                          </form>
                      </td>
                      <td>
                          <button
                              className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
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
