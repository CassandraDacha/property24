import React from 'react';

const Search = () => {
  return (
      <nav>
    <div id = "searchbar"class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" placeholder="Search for your home..."required/>
          <label id = "label-icon"class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
          <h6>Find by:</h6>
          <div className="container-fluid">
          <button>Agent</button>
          </div>
        </div>
      </form>
      </div>
  </nav>
  )
}
export default Search