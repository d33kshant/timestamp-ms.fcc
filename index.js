const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/api/:date?', (req, res)=>{

    const date = req.params.date
    if(date){
        const time = new Date(Number.parseInt(date))
        if(time.getTime()){
            res.json({
                unix: time.getTime(),
                utc: time.toUTCString()
            })
        }else{
            res.json({
                error: "Invalid Date"
            })
        }
    }else{
        const time = new Date()
        res.json({
            unix: time.getTime(),
            utc: time.toUTCString()
        })
    }
})

app.listen(PORT, ()=>console.log('Started listening on port:', PORT))