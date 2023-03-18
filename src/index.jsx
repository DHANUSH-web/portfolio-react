import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <App /> } />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
)