import React, { useEffect, useState } from 'react'
import HotJobsCard from './HotJobsCard'

export default function HotJobs() {
    const [jobs, setjobs] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(result => setjobs(result))
    }, [])
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                jobs.map(job => <HotJobsCard job={job}></HotJobsCard>)
            }
        </div>
    )
}

