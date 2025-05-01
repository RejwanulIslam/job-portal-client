import React from 'react'
import { AiTwotoneDollarCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



export default function HotJobsCard({ job }) {
    const { title, location, jobType, category, applicationDeadline,
        salaryRange, description, company, requirements, responsibilities,
        status, hr_email, hr_name, company_logo, _id } = job
    console.log(job)
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className='flex gap-2 mt-2'>
            <figure><img src={company_logo} className='w-16' alt="Shoes" /></figure>
                    <div>
                        <h4 className='text-2xl'>{company}</h4>
                        <p className='flex gap-2 items-center'><FaMapMarkerAlt />{location}</p>
                    </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div>
                    {
                        requirements.map(skill => <p className='border rounded-md text-center px-2 hover:text-green-600 hover:bg-red-400'>
                         {skill}
                        </p>)
                    }
                </div>
                <div className="card-actions items-center justify-end">
                    <p className='flex justify-center items-center'>salary:<AiTwotoneDollarCircle /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
               <NavLink to={`/jobs/${_id}`}><button className='btn btn-primary'>Apply</button></NavLink>
                </div>
            </div>
        </div>
    )
}
