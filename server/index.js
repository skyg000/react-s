const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.get('/', function (req, res) { 
    res.send('Hello World~~')
})

app.listen(3030)


/* req = 사용자가 보낸 데이터 값을 받음 (axios.get('/?page=1'))
res.send = 값을 보내줌 ( .then(res)=>{ 여기로 send한 값을 보내줌 })  */