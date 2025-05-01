import React, { useEffect, useState } from 'react'
import UseAuth from '../../hooks/UseAuth'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Myapplication() {
    const [jobs, setjobs] = useState([])
    console.log(jobs)
    const { user } = UseAuth()
    useEffect(() => {
        // fetch(`http://localhost:5000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setjobs(data))

        axios.get(`http://localhost:5000/job-application?email=${user.email}`,
            {withCredentials:true}
        )
        .then(res =>  setjobs(res.data))
    }, [user.email])

    const handledelet = (id) => {
        fetch(`http://localhost:5000/job-application/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0)
                    console.log(data)
                const totaljobs = jobs.filter(job => job._id !== id)
                setjobs(totaljobs)
                Swal.fire({
                    title: "Delete Successfull",
                    icon: "success",
                    draggable: true
                  });
            })
    }
    return (
        <div>
            Myapplication{jobs.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => (<tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={job?.company_logo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job?.title}</div>
                                            <div className="text-sm opacity-50">{job?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button onClick={() => handledelet(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>))
                        }


                    </tbody>



                </table>
            </div>
        </div>
    )
}
