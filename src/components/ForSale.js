import React, { Component } from 'react'
import Search from './Search'
import PropertyList from './PropertyList'
import { connect } from 'react-redux'
class ForSale extends Component {
  render(){
    const{ properties } = this.props;
  return (
    <div>
    <div class = "home">
          <h4>Find your dream home</h4>
        <Search/>
        </div>  
        <h2>Homes For Sale</h2>
        <PropertyList properties = {properties}/>
        </div>
  )
}
}
const mapStateToProps = (state) =>{
  return{
    properties: state.property.properties
  }
}

export default connect(mapStateToProps)(ForSale);