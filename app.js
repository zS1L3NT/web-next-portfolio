const express = require("express")
const path = require("path")

const app = express()
const PORT = 5000

app.use(express.static(path.resolve(__dirname, "client", "build")))
app.get("*", (_req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
