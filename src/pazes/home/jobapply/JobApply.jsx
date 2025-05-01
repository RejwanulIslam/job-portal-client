import { div } from 'motion/react-client'
import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import UseAuth from '../../../hooks/UseAuth'
import Swal from 'sweetalert2'

export default function JobApply() {
    const{user}= UseAuth()
    const navigate = useNavigate()
    
    const {id}=useParams()
    const data = useLoaderData()
    console.log(user)
    console.log(id)
   const jobApplycation=(e)=>{
    e.preventDefault()
    const form = e.target;
    const linkdin = form.linkdin.value
    const github = form.github.value
    const resume = form.resume.value
    
    const jobapplication ={
        Job_id:id,
        job_applicant:user.email,
        linkdin,
        github,
        resume
    }
    console.log(jobapplication)

    fetch('http://localhost:5000/job-application',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(jobapplication)
    })
    .then(res=>res.json())
    .then(result =>{
        console.log(result)
        if(result.acknowledged){
            Swal.fire({
                title: "Job Apply Successfull",
                icon: "success",
                draggable: true
              });

              navigate('/myapplication')
        }
    })

   }

  return (
    <div>
    
    <h1 className="text-5xl font-bold text-center">Apply Job</h1>
    <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
    

      <form onSubmit={jobApplycation} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkdin</span>
          </label>
          <input type="url" name='linkdin' placeholder="Linkdin url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input type="url" name='github' placeholder="Github url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input type="url" name='resume' placeholder="Resume url" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
    </div>
  )
}
