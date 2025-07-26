
function ComponentExample() {
  return (
    <div>
      <Job
        company="Amazon"
        position="Software Engineer"
        salary={9000}
      />
      <Job
        company="Google"
        position="Frontend Engineer"
        salary={8500}
      />

      <User
        name="Saif"
        age={20}
        email="founder@clinxra.com"
        major="Software Engineering"
      />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      {props.company}
      <ul>
        <li>{props.position}</li>
        <li>{props.salary}</li>
      </ul>
    </div>
  );
};
const User = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "red",
        }}
      >
        {props.name}
        </h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
      <h1>{props.major}</h1>
      {console.log(props.major)}
    </div>
  );
}
export default ComponentExample;
