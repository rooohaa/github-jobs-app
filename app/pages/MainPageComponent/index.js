import React, { useState } from 'react';

import { SearchBar } from '../../components';
import { FilterBlock } from '../../components';
import { JobList } from '../../components';
import { Pagination } from '../../components';

import { Container } from '../../sc/Container';
import { MainWrapper } from './style';

const MainPageComponent = ({ data }) => {
   const [jobs, setJobs] = useState(data);
   const [currentPage, setCurrentPage] = useState(1);
   const [jobsPerPage, setJobsPerPage] = useState(5);

   const { firstJob, lastJob } = getRange(currentPage, jobsPerPage);
   const currentJobs = jobs.slice(firstJob, lastJob);

   return (
      <MainWrapper>
         <Container>
            <SearchBar />
            <main className="main-area">
               <FilterBlock />
               <div className="wrapper">
                  <JobList jobs={currentJobs} />
                  <Pagination
                     jobsPerPage={jobsPerPage}
                     totalJobs={jobs.length}
                     currentPage={currentPage}
                     paginate={(page) => setCurrentPage(page)}
                  />
               </div>
            </main>
         </Container>
      </MainWrapper>
   );
};

export { MainPageComponent };

function getRange(currentPage, jobsPerPage) {
   const lastJob = currentPage * jobsPerPage;
   const firstJob = lastJob - jobsPerPage;

   return { firstJob, lastJob };
}
