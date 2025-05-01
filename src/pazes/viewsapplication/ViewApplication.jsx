import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ViewApplication() {
    const loadData = useLoaderData()
    console.log(loadData)
    const handleStatus =(e, id)=>{
         console.log(e.target.value,id)
         const data ={
            ststus :e.target.value
         }
         fetch(`http://localhost:5000/job-application/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => console.log(data))
    }
    return (
        <div>
            Myapplication{loadData.length}
            <div>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Applicant Email</th>
                                <th>
                                change status
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadData.map((job, index) => (<tr>
                                    <th>{index + 1}</th>
                                    <td>{job.job_applicant}</td>

                                    <td>
                                        <select onChange={(e)=>handleStatus(e, job._id)} defaultValue={job.status ||'change status' } className="select select-info  max-w-xs">
                                            <option disabled >change status</option>
                                            <option>Hire</option>
                                            <option>Under Review</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>

                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

