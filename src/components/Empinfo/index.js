import React from 'react'
// import { Link } from "react-router-dom";
import './style.css'

function Empinfo({ showMe4, userId, hideShow4, useEmail, usefirstName, uselastName, userestaurantName, handleLogout }) {
  return (

    <div>
      {showMe4 ?
        <div onClick={() => hideShow4(userId)} className="overlay9">
          <div className="empinfowrapper1">
            <div className="empinfowrapper2">
              <div className="empinfowrapper3">
                <div>
                  <div className="btnwrap1bclose">
                    {/* <button className="btnwrap1b" onClick={() => hideShow4(useId)}>Close</button> */}
                  </div>
                  <div className="empinfoformtext">

                    <div className="userformtext">
                      <div className="infodetails">Id No: {userId}</div>
                      <br></br>
                      <div className="infodetails">Restaurant: {userestaurantName}</div>
                      <br></br>
                      <div className="infodetails">First Name: {usefirstName}</div>
                      <br></br>
                      <div className="infodetails">Last Name: {uselastName}</div>
                      <br></br>
                      <div className="infodetails">Email: {useEmail}</div>
                    </div>
                  </div>



                  <br></br>
                  <div className="btn1logoutwrap">
                    <button className="btn1logout" onClick={() => handleLogout()}>Logout <i className="fas fa-sign-out-alt"></i></button>
                  </div>

                </div>

<<<<<<< HEAD

                <br></br>



                {/* <div><Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"} 
=======
                <br />

                {/* <div><Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"}
>>>>>>> 03b7edcef4e5cb495c985cff43f4bf9e590625e3
            to="/employeepage"
          ><button>
            Employee page
            </button>
              </Link></div> */}
              </div>
            </div>
          </div>
        </div>
        : null
      }

    </div>
  )
}

export default Empinfo
