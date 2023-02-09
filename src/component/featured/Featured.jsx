import "./featured.css"

import React from 'react'

const Featured = () => {
  return (
    <div className="Container">
        <div className="featureHeader">
            <h3>Popular flights near you</h3>
            <h4>Find deals on domestic and international flights</h4>
        </div>
    <div className="featured">
        
       <div className="festuredItems">
        <img src="https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=" alt="" className="featuredImage"/>
        <div className="featureTitles">
            <h4>Guwahati to Kolkata</h4>
        </div>
       </div>
       <div className="festuredItems">
        
        <img src="https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=" alt="" className="featuredImage"/>
        <div className="featureTitles">
            <h4>Guwahati to New Delhi</h4>
        </div>
       </div>
       <div className="festuredItems">        
        <img src="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=" alt="" className="featuredImage"/>
        <div className="featureTitles">
            <h4>Guwahati to Mumbai</h4>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Featured