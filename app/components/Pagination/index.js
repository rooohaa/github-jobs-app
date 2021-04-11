import React from 'react';

import { Nav } from './style';

const Pagination = ({ jobsPerPage, totalJobs, currentPage, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <Nav>
         <ul>
            {pageNumbers.map((num) => (
               <li key={num}>
                  <button
                     className={`page-btn ${
                        currentPage === num ? 'active' : ''
                     }`}
                     onClick={() => paginate(num)}
                  >
                     {num}
                  </button>
               </li>
            ))}
         </ul>
      </Nav>
   );
};

export { Pagination };
