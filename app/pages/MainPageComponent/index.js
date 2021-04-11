import React from 'react';

import { SearchBar } from '../../components';
import { FilterBlock } from '../../components';

import { Container } from '../../sc/Container';
import { MainWrapper } from './style';

const MainPageComponent = () => {
   return (
      <MainWrapper>
         <Container>
            <SearchBar />
            <main className="main-area">
               <FilterBlock />
               <ul>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
               </ul>
            </main>
         </Container>
      </MainWrapper>
   );
};

export { MainPageComponent };
