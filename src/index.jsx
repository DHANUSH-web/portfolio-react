import { ChakraProvider } from "@chakra-ui/react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React from "react"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</BrowserRouter>
		<Analytics />	{ /* Web Analytics*/ }
		<SpeedInsights /> { /* Performance analysis*/ }
	</React.StrictMode>
)