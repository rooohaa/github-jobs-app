import React, { useState, useEffect } from 'react';

import { SearchSection } from './style';

const SearchBar = ({ onSearch }) => {
   const [value, setValue] = useState('');

   useEffect(() => {
      if (value === '') {
         onSearch(value);
      }
   }, [value]);

   return (
      <SearchSection>
         <form
            onSubmit={(e) => {
               e.preventDefault();

               onSearch(value);
            }}
         >
            <div className="form-control">
               <i className="fas fa-briefcase"></i>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Title, companies, expertise or benefits"
               />
               <button type="submit">Search</button>
            </div>
         </form>
      </SearchSection>
   );
};

export { SearchBar };
