import React from 'react'

import { DetailsPageComponent } from '../app/pages'
import { Layout } from '../app/components'

const DetailsPage = ({ jobInfo }) => {
   return (
      <Layout>
         <DetailsPageComponent details={jobInfo} />
      </Layout>
   )
}

export default DetailsPage

export const getServerSideProps = async (context) => {
   const { id } = context.query

   const res = await fetch(`https://jobs.github.com/positions/${id}.json`)
   const data = await res.json()

   return {
      props: {
         jobInfo: data,
      },
   }
}
