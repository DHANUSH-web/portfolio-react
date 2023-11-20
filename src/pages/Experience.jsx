import Maintainance from "../pages/MaintainancePage"
import NavBar from "../components/NavBar"
import React from "react"
import "./Experience.css"

const Experience = () => {
	return (
		<div>
			<NavBar isExp={true} />
			<Maintainance />
		</div>
	)
}

export default Experience