import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import Home from "../pazes/home/Home";
import Register from "../pazes/register/Register";
import Login from "../pazes/Login";
import Jobdetels from "../jobdetels/Jobdetels";
import PrivectRoute from "./PrivectRoute";
import JobApply from "../pazes/home/jobapply/JobApply";
import Myapplication from "../pazes/myapplication/Myapplication";
import AddJob from "../pazes/addjob/AddJob";
import MyPostedjobs from "../pazes/mypostedjobs/MyPostedjobs";
import ViewApplication from "../pazes/viewsapplication/ViewApplication";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {   path:"/",   
                element:<Home></Home>,
            },
            {   path:"/jobs/:id",   
                element:<PrivectRoute> <Jobdetels></Jobdetels></PrivectRoute>,
                loader:({params})=>fetch(`http://localhost:5000/job/${params.id}`)
                
            },
            {   path:"/jobs/:id/jobapply/:id",   
                element:<PrivectRoute> <JobApply></JobApply></PrivectRoute>,
                loader:({params})=>fetch(`http://localhost:5000/job/${params.id}`)
                
            },
            {   path:"/myapplication",   
                element:<PrivectRoute> <Myapplication></Myapplication></PrivectRoute>,
                
            },
            {   path:"/viewsapplication/:job_id",   
                element:<PrivectRoute> <ViewApplication></ViewApplication></PrivectRoute>,
                loader:({params})=>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
            },
            {   path:"/mypostedjobs",   
                element:<PrivectRoute> <MyPostedjobs></MyPostedjobs></PrivectRoute>,
                
            },
            {   path:"/addjob",   
                element:<PrivectRoute> <AddJob></AddJob></PrivectRoute>,
                
            },
            {   path:"/register",   
                element:<Register></Register>,
            },
            {   path:"/login",   
                element:<Login></Login>,
            },
        ]

    }
])

export default router;