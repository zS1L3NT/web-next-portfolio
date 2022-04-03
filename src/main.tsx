import App from "./App"
import React from "react"
import { createRoot } from "react-dom/client"
import "tailwindcss/tailwind.css"
import "./styles/globals.scss"

const container = document.getElementById("root")!
const root = createRoot(container)
root.render(<App />)
