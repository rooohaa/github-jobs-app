import * as React from 'react'

import { Container } from '../../sc/Container'
import { DetailsWrapper } from './style'

import Link from 'next/link'

const DetailsPageComponent = ({ details }) => {
   const {
      how_to_apply,
      title,
      type,
      created_at,
      company,
      company_logo,
      location,
      description,
   } = details

   return (
      <DetailsWrapper>
         <Container>
            <div className="sidebar">
               <Link href="/">
                  <a>
                     <i className="fas fa-long-arrow-alt-left"></i>
                     <span>Back to search</span>
                  </a>
               </Link>

               <div className="apply">
                  <h4>how to apply</h4>
                  <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
               </div>
            </div>

            <div className="main-info">
               <div className="head">
                  <h2>{title}</h2>
                  <div>{type}</div>
               </div>
               <span className="created">
                  {new Date(created_at).toDateString()}
               </span>

               <div className="logo">
                  <img src={company_logo} alt={company} />
                  <div className="location">
                     <h4>{company}</h4>
                     <span>{location}</span>
                  </div>
               </div>

               <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: description }}
               />
            </div>
         </Container>
      </DetailsWrapper>
   )
}

export { DetailsPageComponent }
