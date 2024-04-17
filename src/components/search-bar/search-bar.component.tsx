/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';
import './search-bar.styles.css';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
  query: string;
  handleSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: () => void;
  handleDelete?: () => void;
  def: any;
};

const SearchBar = ({
  query,
  handleSearchChange,
  handleSearch,
  handleDelete,
  def,
}: Props) => {
  return (
    <div className='search mt-4 relative'>
      <input
        type='text'
        className='outline-purple-500 text-xl bg-gray-200 border rounded-full w-full px-4 py-2'
        onChange={handleSearchChange}
        value={query}
        placeholder='Search a word'
      />
      {def && Object.keys(def).length > 0 ? (
        <button
          className='search-btn bg-red-500 hover:bg-red-600 transition-all delay-100 px-4 py-[0.7rem] rounded-r-full'
          onClick={handleDelete}
        >
          <Icon
            icon='material-symbols:delete'
            className='text-2xl search-icon text-white'
          />
        </button>
      ) : (
        <button
          className='search-btn bg-purple-500 hover:bg-purple-600 transition-all delay-100 px-4 py-[0.7rem] rounded-r-full'
          onClick={handleSearch}
        >
          <Icon
            icon='ic:sharp-search'
            className='text-2xl search-icon text-white'
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
