import * as express from 'express'
const app = express()
// app.use("/", (req: express.Request, res: express.Response) => res.send("Hello World!"))

const path = require('path');

// sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.use("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, () => console.log("Listening"))
