import React from 'react'
import * as motion from "motion/react-client"
import trme1 from "../../../public/corporate-workers-brainstorming-together.jpg"
import trme2 from "../../../public/portrait-business-executives-raising-arms.jpg"

export default function Banar() {
    return (
        <div className="hero min-h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img src={trme1} className=" w-64 rounded-t-[40px] rounded-br-[40px] border-l-[10px] border-b-[8px] border-blue-400 shadow-2xl"

                        animate={{ y: [50, 100, 50] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                        }}
                    />

                    <motion.img src={trme2} className=" w-64 rounded-t-[40px] rounded-br-[40px] border-l-[10px] border-b-[8px] border-blue-400 shadow-2xl"

                        animate={{ x: [100, 150, 100] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay:5
                        }}
                    />

                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="text-5xl font-bold">Latest
                        <motion.span
                            animate={{ color: ['#e6f032', '#29e34b'] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        >
                            Job
                        </motion.span> for You!</motion.h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
