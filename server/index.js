const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/abc', function (req, res) { 
    const jsonD = fs.readFileSync('./test.json')
    res.send(JSON.parse(jsonD))
})

app.post('/insert', function (req, res) { 
    console.log(req.body);
    fs.writeFileSync('./test.json',JSON.stringify({id:3,name:'아아아'}))
    res.send('완료');
})

app.listen(3030)


/* 
req = 사용자가 보낸 데이터 값을 받음 (axios.get('/?page=1'))
res.send = 값을 보내줌 ( .then(res)=>{ 여기로 send한 값을 보내줌 })  
console.log(req.query);로 터미널에서 값을 확인 가능 웹에서 새로고침해주기
const fs = require('fs') json 파일 데이터 값을 가져옴
=======================================================
app.get ('http://localhost:3030/abc?id=100')
readFileSync = await가 설정된 명령어 읽는용
JSON.parse = 값을 비워줌?
========================================================
app.post ('http://localhost:3030/insert',{id:10000,name:'신규'})
writeFileSync = 선언이 필요없음 뒤에 {에 입력값을 주면됨}
JSON.stringify = { 입력값을 주면됨} 입력 값을 json형태로 변환
*/