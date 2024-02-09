import React from 'react';
import SearchBar from "./SearchBar";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
        <div className="container mx-auto py-10 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold mb-8 text-white">Cinema App</div>
        </div>

        <SearchBar />
    </div>
  )
}

export default Index
