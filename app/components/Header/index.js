import { Container } from '../../sc/Container'
import { HeaderWrapper } from './style'

const Header = () => {
   return (
      <HeaderWrapper>
         <Container>
            <h1>
               <span className="h-bold">Github </span>
               Jobs
            </h1>
         </Container>
      </HeaderWrapper>
   )
}

export { Header }
