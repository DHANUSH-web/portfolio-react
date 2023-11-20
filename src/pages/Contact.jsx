import MaintainancePage from "../pages/MaintainancePage"
import NavBar from "../components/NavBar"
import React from "react"
import "./Contact.css"

const Contact = () => {
	return (
		<div>
			<NavBar isContact={true} />
			<MaintainancePage />
		</div>
	)
}

export default Contact