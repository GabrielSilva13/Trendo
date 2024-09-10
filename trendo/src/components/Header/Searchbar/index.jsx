import React, {useState} from 'react';
import SearchIcon from '../../SVG/SearchIcon';
import SearchContainer from './SearchContainer';

function SearchBar() {

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  function searchValueChange(e) {
    const value = e.target.value;
    setSearchValue(value)

   if (value.length <= 0) {
    setSearchOpen(false)
    return null;
   }

   setSearchOpen(true)
  }

  return (
    <div className="relative lg:w-1/2 2xl:w-6/7 flex justify-center">
        <div className="hidden lg:flex items-center justify-between px-4 py-2 lg:w-3/4 xl:w-full 2xl:w-3/4 border-b border-secondary">
            <input
                type="text"
                placeholder="Search through 11,345 products..."
                className="focus:outline-none bg-customGrey w-full"
                onChange={searchValueChange}
                maxLength={20}
            />
            <SearchIcon/>
        </div>

        {searchOpen && <SearchContainer onClose={() => setSearchOpen(false)} searchValue={searchValue}/>}
    </div>
    
  );
}

export default SearchBar;



