import "./header.css";
import {faBed, faCalendar, faCar, faPerson, faPlaceOfWorship, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Header = ({type}) => {
const [openOptions, setOpenOpentions] = useState(false);

const initialdestinationvalue = {
    from:"",
    to:""
}
const [destination, setDestination] = useState(initialdestinationvalue);
const handleChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
    console.log(destination);
  };


const [selectDate, setSelectDate] = useState("");

const[options, setOptions] = useState({
    adult:1,
    children:0,
});



const navigate = useNavigate();

const handleOption = (name, operation)=>{
        setOptions((prev)=>{
        return  {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
};

const handleSearch = () =>{
 navigate("/list", { state: { destination, selectDate, options}});
}
  return (
    <div className="Header">
        {/* <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}> */}

        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed}/>
                <span>Stays</span>
            </div>
            <div className="headerListItem active" >
                <FontAwesomeIcon icon={faPlane}/>
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar}/>
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlaceOfWorship}/>
                <span>Attractions</span>
            </div><div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>
                <span>Airort Taxis</span>
            </div>
            
        </div>
        {type !== "list" &&
            <>
            <h1 className="headerTitle">Compare and book flights with ease</h1>
            <p className="headerDescrioption">Discover your next dream destination</p>
            <div className="headerPick">
                <div className="headerPickradio">
                    <input type="radio" value="Male" name="gender" className="radio" /> Round-Trip
                </div>
                <div className="headerPickradio">
                    <input type="radio" value="Female" name="gender" className="radio"/> One-Way
                    </div>
                <div className="headerPickradio">
                    <input type="radio" value="Other" name="gender" className="radio"/> Multi-City
                </div>
               
            </div>
            <div className="headerSearch">  
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPlane} className="headerIcon"/>
                    <input 
                    placeholder="Where From?" 
                    type="text"                     
                    className="headerSearchInput" 
                    value={destination.from}
                    name="from"
                    id="from"
                    onChange={handleChange}
                   />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPlane} className="headerIcon"/>
                    <input 
                    placeholder="Where To?" 
                    type="text" 
                    className="headerSearchInput"
                    value={destination.to}
                    name="to"
                    id="to"
                    onChange={handleChange}
                     />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
                    <span className="headerSearchText">Depart</span>
                    <DatePicker selected={selectDate}
                    onChange={date => setSelectDate(date)}                 
                    className="headerSearchdate" 
                    />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={()=> setOpenOpentions(!openOptions)}className="headerSearchText">{`${options.adult} adult . ${options.children} children`}</span>
                    {openOptions &&
                        <div className="options">
                        <div className="optionItem">
                           <span className="optionText">Adult</span>
                           <div className="optionCounter">
                           <button 
                           disabled={options.adult <= 1  }
                           className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                           <span className="optionCounterNumber">{options.adult}</span>
                           <button className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                           </div>
                        </div>
                        <div className="optionItem">
                           <span className="optionText">Children</span>
                           <div className="optionCounter">
                           <button 
                           disabled={options.children <= 0  }
                           className="optionCounterButton"onClick={()=>handleOption("children","d")}>-</button>
                           <span className="optionCounterNumber">{options.children}</span>
                           <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                           </div>
                           
                           
                        </div>
                    </div>}
                </div>
                
                <div className="headerSearchItem">
                    <button className="headerbtn" onClick={handleSearch }>Search</button>
                </div>
            </div>
            </>
        }   
        </div>
    </div>
  )
}

export default Header