import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import React from "react"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
)