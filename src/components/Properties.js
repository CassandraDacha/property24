import React from 'react'

const Properties = ({property}) => {
  return (
    <div>
    <div class="col s12 m7">
    <h2 class="header"></h2>
    <div class="card horizontal">
      <div class="card-image">
        <a href={property.details}><img src={property.image}/>Click Here For More Details</a>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h5 class = "text">{property.price}</h5>
          <h6>{property.rooms}</h6>
          <h6><b>Description</b></h6>
          <p>{property.Description}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
export default Properties;