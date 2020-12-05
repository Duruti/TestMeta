// https://urlmeta.org/docs/
let name = 'duruti43@gmail.com'
let key = '1xIpL4kQ489b92GzJuAv'
// urldont je souhaite recevoir les metadonnées
let url = 'https://dev.to/ziratsu/rookie-seo-mistakes-35ni'

// Connection Basic Auth
console.log(btoa(name+':'+key)) // encode 64 
basicKey = 'ZHVydXRpNDNAZ21haWwuY29tOjF4SXBMNGtRNDg5YjkyR3pKdUF2'

function connect(){
    const options = {
        'method' : 'GET',
   //      'mode' : 'no-cors',
        'headers' : {
           //'Access-Control-Allow-Origin' : 'origine',
           'authorization' : 'Basic ' + btoa(name+':'+key),
           //'accept' : 'application/json',
           //'content-Type' : 'application/json',
           //'Access-Control-Allow-Credentials': true
        }
    }
    fetch('https://api.urlmeta.org/?url='+url,options)
    .then(r => console.log(r))
    .then(d => console.log(d))
}
connect()

