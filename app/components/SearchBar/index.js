import React from 'react'

import { SearchSection } from './style'

const SearchBar = () => {
   return (
      <SearchSection>
         <form>
            <div className="form-control">
               <i className="fas fa-briefcase"></i>
               <input
                  type="text"
                  placeholder="Title, companies, expertise or benefits"
               />
               <button type="submit">Search</button>
            </div>
         </form>
      </SearchSection>
   )
}

export { SearchBar }
