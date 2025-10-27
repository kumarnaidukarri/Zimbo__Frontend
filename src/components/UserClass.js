import React from "react";

// Class Components, its Lifecycle methods are Outdated. But still IMP for fundamentals.
/* 
Phases -
 1. Mounting Phase:
    i)  constructor()
    ii) render()
    iii) componentDidMount()

 2. Updating Phase:
    i)   shouldComponentUpdate()
    ii)  render()        
    iii) componentDidUpdate()

 3. Unmounting Phase:
    componentWillUnmount()   
*/

// 'User' class component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + " constructor");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2> Name: {name} </h2>
        <h3> Location: {location} </h3>
        <h4> Contact: </h4>
      </div>
    );
  }
  async componentDidMount() {
    // runs in Mounting Phase
    console.log(this.props.name + " componentDidMount");

    // API call to public github
    const responseObj = await fetch(
      "https://api.github.com/users/mosh-hamedani"
    );
    const jsonData = await responseObj.json();

    this.setState({ userInfo: jsonData }); // state update
  }

  shouldComponentUpdate(prevProps, prevState) {
    // runs at begining of Updating Phase
    console.log(this.props.name + " ShouldUpdate");
    console.log("Attention: ", prevProps, prevState);
    return true; // true(re-render) false(no re-render)
  }
  componentDidUpdate() {
    // runs at ending of Updating Phase
    console.log(this.props.name + " componentDidUpdate");
  }
}

export default UserClass;
