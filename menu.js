const { post } = require('request')
const request = require('request')

// https://docs.awesomeapi.com.br/

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

const options = {
   url: `https://economia.awesomeapi.com.br/last/${moedas}`,
   method:'GET',
   Headers: {
       'Accept': 'aplication/json',
       'Accept-Charset': 'utf-8'
   }
}
const callback_todas_cotacoes = function(erro, res,body){
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = function(erro,res,body){
    let json = JSON.parse(body)
    cotacao = json.USDBRL['bid']
    dia = json.USDBRL['create_date']
    console.log('DOLAR = R$' +cotacao+' dia: ' +dia)

}
const callback_euro = function(erro,res,body){
    let json = JSON.parse(body)
    cotacao = json.EURBRL['bid']
    dia = json.EURBRL['create_date']
    console.log('EURO = R$' +cotacao+' dia: ' +dia)

}
const callback_btc = function(erro,res,body){
    let json = JSON.parse(body)
    cotacao = json.BTCBRL['bid']
    dia = json.BTCBRL['create_date']
    console.log('BITCOIN = R$' +cotacao+' dia: ' +dia)

}


setInterval(() => {

    request(options,callback_dolar)
    request(options,callback_euro)
    request(options,callback_btc)
    console.log('*********************')
},5000)


