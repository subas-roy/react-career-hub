
const Job = ({job}) => {
  const{logo} = job;
  return (
    <div>
      <img src={job.logo} alt="" />
    </div>
  );
};

export default Job;