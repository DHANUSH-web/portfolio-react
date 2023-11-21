import MaintainancePage from "../pages/MaintainancePage"
import NavBar from "../components/NavBar"
import React from "react"
import "./Contact.css"

const Contact = () => {
	return (
		<div>
			<NavBar isContact={true} />
			<MaintainancePage />
			<center className="contact_line">
				Email ID: <a className="mailto" href="mailto:dhanushhv75@gmail.com">dhanushhv75@gmail.com</a>
			</center>
		</div>
	)
}

export default Contact