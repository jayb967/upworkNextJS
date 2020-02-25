import React, { useEffect } from 'react'
import Header from '../components/header'
import useGlobal from '../utils/context/store/global'



const Home = () => {

  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.

  const [globalState, globalActions] = useGlobal();
  const { user: { name_first, name_last } } = globalState

  /** TODO: Change first or last name which should show across website. 
   * i.e. Create text field that will change global state ALSO with local state on this page.
   * 
   * This is a small example on how globalActions should be used.*/ 
  // const handleNameChange = (event) => {
  //   const value = event.target.value
  //   globalActions.user.updateUser({[event.target.name]:value});
  // }

  // TODO: Create useEffect to change the last name ONCE upon showing this page.

  return (<>
    <Header />
    <h1>Hello World!</h1>
    <p>Name: {name_first}, {name_last}</p>
  </>
  )

}


export default Home
