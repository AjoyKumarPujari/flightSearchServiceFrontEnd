import Featured from "../../component/featured/Featured"
import Header from "../../component/header/Header"
import Navbar from "../../component/navbar/Navbar"
import "./home.css"

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
        </div>
    </div>
  )
}

export default Home