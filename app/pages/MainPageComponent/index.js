import React from 'react'

import { SearchBar } from '../../components'
import { Container } from '../../sc/Container'
import { MainWrapper } from './style'

const MainPageComponent = () => {
   return (
      <MainWrapper>
         <Container>
            <SearchBar />
         </Container>
      </MainWrapper>
   )
}

export { MainPageComponent }
