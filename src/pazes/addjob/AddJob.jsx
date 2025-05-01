import React from 'react'
import UseAuth from '../../hooks/UseAuth'


export default function AddJob() {
    const { user } = UseAuth()

    const handleAddjob = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const salaryRange = Object.fromEntries(formdata.entries());
        // console.log(initialData)

        const { min, max, currency, ...newJob } = salaryRange
        newJob.salaryRange = { min, max, currency }
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.requirements = newJob.requirements.split('\n')


        console.log(newJob)

        fetch('http://localhost:5000/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div>
            <form onSubmit={handleAddjob} className="card-body">
                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job location" className="input input-bordered" required />

                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name='jobType' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a job type</option>
                        <option>Full Time</option>
                        <option>Inturn</option>
                        <option>Part Time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name='category' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Markting</option>
                        <option>Finance</option>
                        <option>Teching</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid lg:grid-cols-3  items-end '>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                        </label>
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                        </label>
                        <select name='currency' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick a Courncy</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>USDT</option>

                        </select>
                    </div>

                </div>
                {/* job descripction */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Descripction</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='description' placeholder=" Job Descripction" required></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />

                </div>

                {/* Job Requirement */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirement</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='requirements' placeholder="Put each requirement in a new line" required></textarea>
                </div>
                {/* Job Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='responsibilities' placeholder="Write each Responsibilities in a new line" required></textarea>
                </div>

                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' defaultValue={user?.displayName} placeholder="HR Name" className="input input-bordered" required />

                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />

                </div>

                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo" className="input input-bordered" required />

                </div>


                {/* Application Deadline  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="text" name='applicationDeadline' placeholder="Application Deadline" className="input input-bordered" required />

                </div>




                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    )
}


