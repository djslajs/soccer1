/*
      require => library load
      express : NodeJS => 가벼운 서버를 만들때 사용
 */
var express=require("express");
// XML 파일 => JSON으로 변환
var xml2js=require("xml2js");
// 서버 => port지정
var port=3000;
// 몽고디비 로드
var Client=require("mongodb").MongoClient;
// MongoClient mc=new MongoClient() => 몽고디비와 연결하는 클래스명

// 서버 가동
var app=express(); // app가 서버역할 수행
app.listen(port,function () {
    console.log("서버 가동 완료:","http://localhost:3000")
});
app.use('/',express.static('./public'))
app.get("/",function (req,res) {
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.get('/team', function(req,res) {
    var url="mongodb://localhost:27017";
    Client.connect(url,(err,client)=>{
        //database 읽기 => mydb
        var db=client.db("mydb");
        // collection => Table
        // 중복없는 데이터를 수집 => distinct
        // SELECT DISTINCT genre FROM movie
        db.collection("team").find({}).toArray(function (err, docs) {
            //console.log(docs);
            res.json(docs);
            client.close();
        })
    })
})

app.get('/team_detail', function(request,response) {
    var url="mongodb://localhost:27017";
    var tno=request.query.tno;

    // console.log("tno:"+tno);

    Client.connect(url,(err,client)=>{
        //database 읽기 => mydb
        var db=client.db("mydb");

        db.collection("team").find({tno:Number(tno)}).toArray(function (err, docs) {
            //console.log(docs);
            response.json(docs);
            client.close();
        })
    })
})


app.get('/player', function(request,response) {
    var url="mongodb://localhost:27017";
    var tno=request.query.tno;

    Client.connect(url,(err,client)=>{
        //database 읽기 => mydb
        var db=client.db("mydb");
        // collection => Table
        // 중복없는 데이터를 수집 => distinct
        // SELECT DISTINCT genre FROM movie
        db.collection("player").find({tno:Number(tno)}).toArray(function (err, docs) {
            //console.log(docs);
            response.json(docs);
            client.close();
        })
    })
})

app.get('/player_detail', function(request,response) {
    var url="mongodb://localhost:27017";
    var pno=request.query.pno;
    var tno=request.query.tno;
    //console.log(pno);
    //console.log(tno);
    Client.connect(url,(err,client)=>{
        //database 읽기 => mydb
        var db=client.db("mydb");
        // collection => Table
        // 중복없는 데이터를 수집 => distinct
        // SELECT DISTINCT genre FROM movie
        db.collection("player").find({tno:Number(tno),pno:Number(pno)}).toArray(function (err, docs) {
            //console.log(docs);
            response.json(docs);
            client.close();
        })
    })
})