import User from "./User";
import UserClass from "./UserClass";

const About = function () {
  return (
    <>
      <h1> this is about page </h1>
      <p> about page description </p>

      <User name={"Ramu"} location={"Hyderabad"} />
      <UserClass name={"Kumar"} location={"Vizag"} />
    </>
  );
};

export default About;
