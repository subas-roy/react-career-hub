import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const[jobs, setJobs] = useState([]);
  // this is the best way to load all data
  const[dataLength, setDataLenhth] = useState([4]);
    
  useEffect(() =>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
  }, [])
  console.log(jobs)
  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid grid-cols-2 gap-6">
          {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
          }
        </div>
        <div className={dataLength === jobs.length && 'hidden'}>
          <button className="btn btn-primary" onClick={() => setDataLenhth(jobs.length)}>See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;