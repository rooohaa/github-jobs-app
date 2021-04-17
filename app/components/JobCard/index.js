import React from 'react'

import { Router, useRouter } from 'next/router'
import { CardWrapper } from './style'

const JobCard = ({
   id,
   logoPath,
   companyName,
   jobPosition,
   type,
   location,
   time,
}) => {
   const router = useRouter()

   const createdAt = getDays(time)
   const date = createdAt === 0 ? 'today' : `${createdAt} days ago`

   return (
      <CardWrapper onClick={() => router.push(`/${id}`)}>
         <div className="wrap">
            <img src={logoPath || '/images/404.png'} alt="Company logo" />
            <div className="info">
               <h5>{companyName}</h5>
               <span>{jobPosition}</span>
               {type && <div className="type">{type}</div>}
            </div>
         </div>

         <div className="meta">
            <div>
               <i className="fas fa-globe-americas"></i>
               <span>{location}</span>
            </div>

            <div>
               <i className="far fa-clock"></i>
               <span>{date}</span>
            </div>
         </div>
      </CardWrapper>
   )
}

export { JobCard }

function getDays(time) {
   const today = new Date()
   const createdAt = new Date(time)

   const diff = today.getTime() - createdAt.getTime()
   const days = Math.round(diff / (1000 * 60 * 60 * 24))

   return days
}
