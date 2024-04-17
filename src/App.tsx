/// <reference types="vite-plugin-svgr/client" />
import { FormEvent, useState } from 'react';
import Display from './components/display/display.component';
import SearchBar from './components/search-bar/search-bar.component';
import Err from './components/error/err.component';

import Logo from './assets/img/logo.svg?react';

function App() {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [def, setDef] = useState<any | null>(null);
  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setQuery(value);
  };
  const handleSearch = () => {
    setError(null);
    // Only run if query.length > 0
    if (query.length > 0) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((res) => {
          if (res.status == 404) {
            const error = new Error('Result not found');
            error.name = 'CancelPromiseChainError';
            throw error;
          }
          return res.json();
        })
        .then((data) => {
          setDef(data[0]);
        })
        .catch((error) => setError(error.message));
    }
    // fetch()
  };
  const handleDelete = () => {
    setDef(null);
    setQuery('');
  };
  return (
    <div className='container mx-auto p-4'>
      <div className='header flex items-center space-x-2'>
        <Logo className='text-purple-500 text-4xl -rotate-45' />
        <p className='font-bold text-xl tracking-wider text-gray-500'>
          Dictionary
        </p>
      </div>
      <SearchBar
        def={def}
        query={query}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
      />
      {error ? (
        <Err error={error} />
      ) : !error && def ? (
        <Display def={def} />
      ) : (
        ''
      )}
      {!error && !def && (
        <div className='bg-purple-500 text-white w-full text-center py-4 mt-20 border'>
          <p className='text-3xl'>Search a word.</p>
        </div>
      )}
    </div>
  );
}

export default App;
