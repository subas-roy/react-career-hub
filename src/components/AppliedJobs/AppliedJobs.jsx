import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([])
  const [displayJobs, setDisplayJobs] = useState([])

  const handleJobsFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs)
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
    else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    // console.log(jobs)
    if(jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for(const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied)
      setDisplayJobs(jobsApplied)
    }
  }, [])

  return (
    <div>
      <h2>Applied Jobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">Filter By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
        </ul>
      </details>
      <ul>
        {
          displayJobs.map(job => <li>{job.job_title} {job.company_name} {job.remote_or_onsite}</li>)
        }
      </ul>
    </div>
  );
};

export default AppliedJobs;