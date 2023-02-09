import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import  "./list.css";

export const List = () => {

  const location = useLocation()
  console.log(location);
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listwrapper">
          <div className="listSearch">
            <h4 className="lsTitle">Filters</h4>
            <h5 className="lsCount">Showing 10 results</h5>
            <div className="stops">
              <h4 className="stopsTitle">Stops</h4>
                <div className="stopsFilter" >
                  <div className="stopSelect">
                    <div className="stopsRadio">
                      <div className="radio"><input type="radio" value="Any" name="stops" /> Any</div>                     
                      <div className="radio"><input type="radio" value="Directonly" name="stops" /> Direct only</div>           
                      <div className="radio"><input type="radio" value="1stopmax" name="stops" /> 1 stop max</div>                    
                      
                    </div>
                    <div className="filterCount">
                        <div className="filtercountNo">2</div>
                        <div className="filtercountNo">3</div>
                        <div className="filtercountNo">4</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="listResult">
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default List