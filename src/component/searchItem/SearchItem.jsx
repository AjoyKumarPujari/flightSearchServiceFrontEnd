import React from 'react'
import "./searchItem.css";
import { faBagShopping, faBriefcase, faPlane, faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchItem = () => {
  return (
    <div className="listResult">
            {/* <span>{format(selectDate, 'dd/mm/yyyy')}</span>
            <span>{destination.from} and {destination.to}</span> */}

            <div className="cardResult">
                
                <div className="cardResultLeft">
                  <div className="flightResult">
                    <div className="flightinfo">
                        <div className="airlineLogo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuuLrBSfAKBIM135ZB-QGpWk2TEZsA_8_nSuB77YjfQ&s" alt="" className="logoimage"/>
                        </div>
                        <div className="airlineName">Vistara</div>
                    </div>
                    <div className="flightTimedetails">               
                      <div className="flightToResultDetails">
                        <div className="flightResultDetailsLeft">
                          <div className="flightDeptTime">9:50 PM</div>
                          <div className="flightDeptDateandPlace">
                            <div className="flightDeptPlace">GUW</div>
                            <div className="flightDeptDate">01 MAR</div>
                          </div>
                        </div>
                        <div className="flightResultDetailsCenter ">
                          <div className="teavelTime ">5h 20 m</div>
                          <div className="line">---------------------------</div>
                          <div className="stops">Direct</div>
                        </div>
                        <div className="flightResultDetailsRight flightResultDetailsLeft">
                          <div className="flightArrTime flightDeptTime">9:50 PM</div>
                            <div className="flightArrDateandPlace flightDeptDateandPlace">
                              <div className="flightArrPlace">DEL</div>
                              <div className="flightArrDate">01 MAR</div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flightResult">
                    <div className="flightinfo">
                        <div className="airlineLogo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuuLrBSfAKBIM135ZB-QGpWk2TEZsA_8_nSuB77YjfQ&s" alt="" className="logoimage"/>
                        </div>
                        <div className="airlineName">Vistara</div>
                    </div>
                    <div className="flightTimedetails">               
                      <div className="flightToResultDetails">
                        <div className="flightResultDetailsLeft">
                          <div className="flightDeptTime">9:50 PM</div>
                          <div className="flightDeptDateandPlace">
                            <div className="flightDeptPlace">GUW</div>
                            <div className="flightDeptDate">01 MAR</div>
                          </div>
                        </div>
                        <div className="flightResultDetailsCenter ">
                          <div className="teavelTime ">5h 20 m</div>
                          <div className="line">---------------------------</div>
                          <div className="stops">Direct</div>
                        </div>
                        <div className="flightResultDetailsRight flightResultDetailsLeft">
                          <div className="flightArrTime flightDeptTime">9:50 PM</div>
                            <div className="flightArrDateandPlace flightDeptDateandPlace">
                              <div className="flightArrPlace">DEL</div>
                              <div className="flightArrDate">01 MAR</div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cardResultRight">
                  <div className="luggageinfo">
                    <div className="bagicons">
                      
                    <FontAwesomeIcon icon={ faBriefcase} className="bags"/>
                    <FontAwesomeIcon icon={faSuitcaseRolling} className="bags"/>
                    
                    </div>
                    <div className="luggeageInfodesc">
                      <span>Include</span>
                      <span>
                        <span>carry-on bag, checked bag</span>
                      </span>
                    </div>
                  </div>
                  <div className="priceDetails">
                    <div className="price"><span>INR6000.00</span></div>
                    <div className="priceDesc"><span>Total price for all travelers</span></div>
                  </div>
                  <div className="seeFlightButton">
                    <button className="seeFlightbtn" >See Flight</button>
                  </div>
                
              </div>
            </div>
          </div>
  )
}

export default SearchItem