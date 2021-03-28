import { Container } from '../../sc/Container'
import { FooterWrapper } from './style'

const Footer = () => {
   return (
      <FooterWrapper>
         <Container>
            <div className="footer-text">
               created by
               <a href="https://github.com/rooohaa" target="_blank">
                  rakhat
               </a>
               - devChallenges.io
            </div>
         </Container>
      </FooterWrapper>
   )
}

export { Footer }
