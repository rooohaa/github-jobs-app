import React, { useState } from 'react'

import { SearchBar } from '../../components'
import { FilterBlock } from '../../components'
import { JobList } from '../../components'
import { Pagination } from '../../components'

import { Container } from '../../sc/Container'
import { MainWrapper } from './style'

import { searchBy } from '../../utils'

const MainPageComponent = ({ data }) => {
   const [jobs, setJobs] = useState(data)
   console.log(data)
   // for filtering
   const [keyword, setKeyword] = useState('')
   const [fullTime, setFullTime] = useState(false)
   const [city, setCity] = useState('')
   const [location, setLocation] = useState('')

   // for pagination
   const [currentPage, setCurrentPage] = useState(1)
   const [jobsPerPage] = useState(5)

   const { firstJob, lastJob } = getRange(currentPage, jobsPerPage)

   const filtered = searchBy(jobs, keyword, fullTime, city, location)
   const currentJobs = filtered.slice(firstJob, lastJob)

   return (
      <MainWrapper>
         <Container>
            <SearchBar onSearch={(keyword) => setKeyword(keyword)} />
            <main className="main-area">
               <FilterBlock
                  onCityCheck={(city) => setCity(city)}
                  onCheck={(value) => setFullTime(value)}
                  onInput={(value) => setLocation(value)}
               />
               {filtered.length > 0 ? (
                  <div className="wrapper">
                     <JobList jobs={currentJobs} />
                     <Pagination
                        jobsPerPage={jobsPerPage}
                        totalJobs={filtered.length}
                        currentPage={currentPage}
                        paginate={(page) => setCurrentPage(page)}
                     />
                  </div>
               ) : (
                  <h3>No jobs found...</h3>
               )}
            </main>
         </Container>
      </MainWrapper>
   )
}

export { MainPageComponent }

function getRange(currentPage, jobsPerPage) {
   const lastJob = currentPage * jobsPerPage
   const firstJob = lastJob - jobsPerPage

   return { firstJob, lastJob }
}
