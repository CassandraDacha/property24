import React from 'react'
import Properties from './Properties'
import Search from './Search'
const PropertyList = ({properties}) => {
  return (
    <div>
      { properties && properties.map(property => {
        return (
            <div>
          <Properties property={property} key={property.id} />
          </div>
        )
      })}  
    </div>
  )
}

export default PropertyList