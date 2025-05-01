import React, { useEffect, useState } from 'react'
import UseAuth from '../../hooks/UseAuth'
import { NavLink } from 'react-router-dom'

export default function MyPostedjobs() {
    const { user } = UseAuth()
    const [postedjobs, setpostedjobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/job?email=${user?.email}`)
            .then(res => res.json())
            .then(result => setpostedjobs(result))
    }, [user?.email])
    return (
        <div>
            MyPostedjobs:{postedjobs.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            
                            <th>Application Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postedjobs.map((job,index) => (<tr>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationcount}</td>
                                <td>
                                    <NavLink to={`/viewsapplication/${job._id}`}><button className='btn'>View Application</button></NavLink>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

