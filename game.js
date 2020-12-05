// https://urlmeta.org/docs/
let name = 'duruti43@gmail.com'
let key = '1xIpL4kQ489b92GzJuAv'
let url = 'https://dev.to/ziratsu/rookie-seo-mistakes-35ni'
// Connection Basic Auth
basicKey = 'ZHVydXRpNDNAZ21haWwuY29tOjF4SXBMNGtRNDg5YjkyR3pKdUF2'
console.log(btoa(name+':'+key))
function connect(){
    const options = {
        'method' : 'GET',
        'mode' : 'no-cors',
        'headers' : {
            'authorization' : 'Basic ZHVydXRpNDNAZ21haWwuY29tOjF4SXBMNGtRNDg5YjkyR3pKdUF2',
            'accept' : 'application/json',
            'content-Type' : 'application/json'
        }
    }
    fetch('https://api.urlmeta.org/?url='+url,options)
    //  .then(r => console.log(r))
    
}
connect()
