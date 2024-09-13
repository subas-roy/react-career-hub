import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({job}) => {
  const{logo, job_title, job_description, company_name, remote_or_onsite, job_type, salary, location} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Job" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 border rounded font-extrabold mr-4">{remote_or_onsite}</button>
          <button className="px-5 py-2 border rounded font-extrabold mr-4">{job_type}</button>
        </div>
        <div className="mt-4 flex">
          <h2 className="flex mr-4"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn> {location}</h2>
          <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle> {salary}</h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;