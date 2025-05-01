import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export default function Jobdetels() {
    const {_id,title, company,applicationDeadline} = useLoaderData()
    
  return (
    <div className='m-10'>
       
        <h2 className='text-2xl'>Job Detels</h2>
        <p> Company:{company}</p>
        <p> Company:{title}</p>
        <p>ApplicationDeadline:{applicationDeadline}</p>
       <NavLink to={`jobapply/${_id}`}> <button className='btn btn-primary'>Apply Now</button></NavLink>
    </div>
  )
}

