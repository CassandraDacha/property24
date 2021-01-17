import React, { Component } from 'react';
import DisplayChat from './DisplayChat'

const Details = () => {
  return (
      <div>
          <div class = "list">
          <h4 class = "text">R3 950 000</h4>
          <h4>3 Bedroom House for Sale in Gardens</h4>
          </div>
    <div class="carousel">
    <a class="carousel-item" href="#one"><img src="https://images.prop24.com/219296101/Crop320x213"/></a>
    <a class="carousel-item" href="#two"><img src="https://images.prop24.com/219296101/Crop320x213"/></a>
    <a class="carousel-item" href="#three"><img src="https://images.prop24.com/219296101/Crop320x213"/></a>
    <a class="carousel-item" href="#four"><img src="https://images.prop24.com/219296101/Crop320x213"/></a>
  </div>
  <h5><b>Description</b></h5>
  <p>Modern family!
Well-presented eclectic home located in the heart of Gardens, with super convenient and a trendy lifestyle package.

There are 2 bedrooms on the ground level both are en suite furthermore an open-plan lounge and dining room leads one out to a wooden decked patio for those braai days right next to the well equipped kitchen makes for easy living and entertaining friends. The separate laundry is also close enough.

Added bonus of a staircase to an elevated view deck which exhibits a 360 degree view of Cape Town!

The 3rd Bedroom and bathroom is perfectly positioned one level above via the spiral staircase. Sliding doors lead one out to a balcony.
This bedroom has the potential for Airbnb opportunity.

Address absolute safety and convenience of a double garage. This home is fresh and stylish, you will just love it!

Exclusive sole mandate</p>
<DisplayChat/>
  </div>
  )
}
export default Details;
