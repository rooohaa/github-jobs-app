import React from 'react';

import { JobCard } from '../JobCard';

const JobList = ({ jobs }) => {
   return (
      <ul style={{ width: '100%' }}>
         {jobs.map(
            ({
               id,
               company,
               company_logo,
               created_at,
               location,
               title,
               type,
            }) => (
               <JobCard
                  key={id}
                  companyName={company}
                  jobPosition={title}
                  logoPath={company_logo}
                  location={location}
                  type={type}
                  time={created_at}
               />
            )
         )}
      </ul>
   );
};

export { JobList };
