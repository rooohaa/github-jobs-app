import React from 'react';

import { CardWrapper } from './style';

const JobCard = ({
   logoPath,
   companyName,
   jobPosition,
   type,
   location,
   time,
}) => {
   const createdAt = getDays(time);

   return (
      <CardWrapper>
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
               <span>{createdAt} days ago</span>
            </div>
         </div>
      </CardWrapper>
   );
};

export { JobCard };

function getDays(time) {
   const today = new Date();
   const createdAt = new Date(time);

   const diff = today.getTime() - createdAt.getTime();
   const days = Math.round(diff / (1000 * 60 * 60 * 24));

   return days;
}