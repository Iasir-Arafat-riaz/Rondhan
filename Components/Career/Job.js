import { useRouter } from 'next/router';
import React from 'react';


const Job = ({title,post_date,id}) => {
    const router =useRouter()
    const handleApply=()=>{
        router.push(`career/${id}`)

    }
    
    return (
        <div>
            <div className="job-item" >
                <div className="row p-4 ">
                    <div className="col-md-2 "><span className='serial-text'>{id}</span></div>
                    <div className="col-md-8 job-desc"><p>Post Date : {post_date}</p><p>{title}</p></div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center"><button className='jobApplyBtn' onClick={handleApply}>Apply Now</button></div>
                </div>
            </div>
        </div>
    );
};

export default Job;