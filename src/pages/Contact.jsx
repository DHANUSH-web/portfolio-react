import NavBar from "../components/NavBar"
import React from "react"
import "./Contact.css"

const Contact = () => {
	return (
		<div>
			<NavBar isContact={true} />
			<p>Contacts Page</p>
		</div>
	)
}

export default Contact