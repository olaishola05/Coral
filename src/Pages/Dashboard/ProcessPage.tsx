import React from 'react'
import ProcessToolbar from '../../Components/Layouts/ProcessToolbar'
import CustomTable from '../../Components/UI/CustomTable'
import useFetch from '../../hooks/useFetch'

const baseUrl = process.env.REACT_APP_BASE_URL

const ProcessPage = () => {
  const { data, status, error } = useFetch(baseUrl + '/processes')

  console.log(data);


  if (status === 'error') {
    return <div>
      <>
        Error: {error}</>
    </div>
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ProcessToolbar />
      {data && data.map((process: any, index: string) => {
        const { id, firstName, lastName, phone, processId, Assignee, createdAt } = process
        const VOD = `VOD-15${index + 1}`
        return (
          <CustomTable
            key={id}
            rows={[
              ['', VOD, `${firstName} ${lastName}`, `+${phone}`, processId, Assignee, createdAt]
            ]}
          />
        )
      })
      }
    </div>
  )
}

export default ProcessPage