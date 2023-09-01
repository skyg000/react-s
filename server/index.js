const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors');
app.use(cors())

app.get('/abc', function (req, res) { 
    const jsonD = fs.readFileSync('./test.json')
    res.send(jsonD)
})

app.listen(3030)


/* 
req = 사용자가 보낸 데이터 값을 받음 (axios.get('/?page=1'))
res.send = 값을 보내줌 ( .then(res)=>{ 여기로 send한 값을 보내줌 })  
console.log(req.query);로 터미널에서 값을 확인 가능 웹에서 새로고침해주기
const fs = require('fs') json 파일 읽어 드림
*/