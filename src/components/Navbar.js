import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav className="nav-wrapper blue darken-3">
      <div className="container-fluid">
        <NavLink to ='/' id = "logo"className="brand-logo">property<span>24</span></NavLink>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/"class="dropdown-button"data-activates="dropdown" data-beloworigin="true" >For Sale</Link></li>
          <li><Link to='/to-rent'>ToRent</Link></li>
          <li><Link to='/new-develpments'>Developments</Link></li>
          <li><Link to='/commercial-property'>Commercial</Link></li>
          <li><Link to='/calculators/bond'>Calculators</Link></li>
          <li><Link to='/advice'>Advice</Link></li>
          <li><Link to='/private-listing/sell-my-property'>List Privately</Link></li>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/notifications'data-target="modal1" class="btn modal-trigger"id = "notifications"><i class="material-icons">notifications_active</i></Link></li>
        </ul>
      </div>
    </nav> 
    <ul class="sidenav" id="mobile-demo">
          <li><Link to="/">For Sale</Link></li>
          <li><Link to='/to-rent'>ToRent</Link></li>
          <li><Link to='/new-develpments'>Developments</Link></li>
          <li><Link to='/commercial-property'>Commercial</Link></li>
          <li><Link to='/calculators/bond'>Calculators</Link></li>
          <li><Link to='/advice'>Advice</Link></li>
          <li><Link to='/private-listing/sell-my-property'>List Privately</Link></li>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/notifications'data-target="modal1" class="btn modal-trigger"id = "notifications"><i class="material-icons">notifications_active</i></Link></li>
    </ul>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4><u>Alerts</u></h4>
      <p>Login or Sign Up to be notified of the latest listings as they arrive!</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
    </div>
  )
}
export default Navbar