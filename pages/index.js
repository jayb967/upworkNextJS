import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import useGlobal from '../utils/context/store/global'



const Home = () => {

  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.

  const [globalState, globalActions] = useGlobal();
  const { user: { name_first, name_last } } = globalState;
  const [user, updateUser] = useState(globalState.user); // Create a local state to store global user state

  /** TODO: Change first or last name which should show across website. 
   * i.e. Create text field that will change global state ALSO with local state on this page.
   * 
   * This is a small example on how globalActions should be used.*/ 
  // const handleNameChange = (event) => {
  //   const value = event.target.value
  //   globalActions.user.updateUser({[event.target.name]:value});
  // }
  
  const handleNameChange = (event) => {
    const value = event.target.value
    if(value) {
      globalActions.user.updateUser({[event.target.name]:value}); // Update global state by input name attr.
      if(event.target.name !== "name_last") { // Do not update last name on local state
        user[event.target.name] = value; // Update local state by input name attr.
        updateUser(user)
      }
    }
  }

  // TODO: Create useEffect to change the last name ONCE upon showing this page.
  useEffect(() => { // Run once on page load
    updateUser(globalState.user) // Get user info from global state and update
  }, []);

  return (<>
    <Header />
    <h1>Hello World!</h1>
    <p>Name (Global State): {name_first}, {name_last}</p>
    <p>New Name (Local State): {user.name_first}, {user.name_last}</p>
    <p><input type="text" name="name_first" placeholder="name" onChange={handleNameChange} /></p>
    <p><input type="text" name="name_last" placeholder="surname" onChange={handleNameChange} /></p>
  </>
  )

}


export default Home
