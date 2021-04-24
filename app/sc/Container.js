import styled from 'styled-components'

export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   overflow: hidden;
   padding: 0 10px;
   height: 100%;

   @media screen and (max-width: 576px) {
      padding: 0 15px;
   }
`
