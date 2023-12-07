import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import theme from "./theme"
import React from "react"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)