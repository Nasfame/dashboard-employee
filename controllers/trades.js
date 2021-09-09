let db = require("../models/trades.js");  

let trades =[]
trades.push(db.models.Traders.findAll())
trades = trades.filter((item) => Object.keys(item).length) 

const jsonify = (res)=>JSON.stringify(res)

const filtering = (id,type,trade)=>{
    let flag = 1
    if(type && id) flag =  trade.id==id && trade.type==type
    else if(id)  flag =  trade.id==id 
    else if(type)  flag =  trade.type==type
    return flag
}

const allTrades = (req,res)=>{
    const {id,type} = req.query
    const result = trades.filter((trade)=>filtering(id,type,trade))
// res.status(200).end(jsonify(result))
    let h = db.models.Traders.findAll() 
    res.end(jsonify(h))
}

const createTrade = (req,res)=>{
    const trade = req.body
    const type = trade.type
    // console.log("Trade req",trade.type,type in ["buy","sell"],type==="buy") //Doesnt work
    if (!(type==="buy"||type==="sell")) return  res.sendStatus(400)
    const tradeId = trades.length +1
    const tradeWithId = {...trade,id:tradeId}
    trades.push(tradeWithId)
    db.models.Traders.create(tradeWithId)
    .catch(err=>console.log(err))
    res.status(201).send(jsonify(tradeWithId))
}

const getTrade = (req,res)=>{
    const {id} = req.params
    let foundTrade = trades.find((trade)=>trade.id==id)
    if(foundTrade) res.status(200).end(jsonify(foundTrade))
    res.status(404).end()
}

const deleteTrade = (req,res)=>{
    res.status(405).end()
}

const updateTrade = (req,res)=>{
    res.status(405).end()
}

const replaceTrade = (req,res)=>{
    res.status(405).end()
}

module.exports =  {createTrade,allTrades,getTrade,deleteTrade,updateTrade,replaceTrade}