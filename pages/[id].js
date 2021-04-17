import React from 'react'

const DetailsPage = ({ jobInfo }) => {
   console.log(jobInfo)
   return <div>{JSON.stringify(jobInfo, 2, null)}</div>
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
