// Context means a 'Global Central Place'.  i.e,we stores data in it and access from anywhere in app.

/*
  1. Creating context -
   createContext(value) :-  method creates a context.

  2. Using context -   
   i) useContext(context_name)
   :- 'hook' to access data from a 'created context' in Functional component.

  ii) <contextname.Consumer> {(data) => (<div><h1> data </h1></div>)} </contextname.Consumer>
   :- 'Consumer' component used to access data of context using a function.

  iii) <contextname.Provider value={updated value}> <Child1 /> <Child2 /> <context.Provider>
   :- 'Provider' component gives data to all components inside it. also used to update context value.

  iv) static ContextType = context_name;  :- static method to access context in Class component.
      this.context :- gives context data.
*/

import { createContext } from "react";

const UserContext = createContext({
  loginUser: "Mr Default",
  loginStatus: false,
}); // createContext() creates a context

export default UserContext;
