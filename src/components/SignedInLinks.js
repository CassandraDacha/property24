import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
          <li><NavLink to='/to-rent'>ToRent</NavLink></li>
          <li><NavLink to='/new-develpments'>Developments</NavLink></li>
          <li><NavLink to='/commercial-property'>Commercial</NavLink></li>
          <li><NavLink to='/calculators/bond'>Calculators</NavLink></li>
          <li><NavLink to='/advice'>Advice</NavLink></li>
          <li><NavLink to='/private-listing/sell-my-property'>List Privately</NavLink></li>
          <li><NavLink to='/login'>Log In</NavLink></li>
          <li><NavLink to='/logout'>Log Out</NavLink></li>
          <li><NavLink to='/notifications'><i id = "notifications"class="material-icons">notifications</i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks