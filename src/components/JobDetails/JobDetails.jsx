import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  // const idInt = parseInt(id);
  const job = jobs.find(job => job.id == id)

  return (
    <div>
      <h2>Job Details of {job.job_title}</h2>
      <h2 className="text-3xl text-center">Job Details</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border col-span-3">
          <p><b>Job Desctiption: </b>{job.job_description}</p>
          <p><b>Job Responsibilities: </b>{job.job_responsibility}</p>
          <p><b>Educational Requirments: </b>{job.educational_requirements}</p>
          <p><b>Experiences: </b>{job.experiences}</p>
        </div>
        <div className="border">
          <h2>Job Details</h2>
          <hr />
          <p><b>Salary:</b> {job.salary}</p>
          <p><b>Job Title:</b> {job.job_title}</p>
          <h2>Contact Information</h2>
          <p><b>Phone:</b> {job.contact_information.phone}</p>
          <p><b>Email:</b> {job.contact_information.email}</p>
          <p><b>Address:</b> {job.contact_information.address}</p>
          <div>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;