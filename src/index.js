//Write your code here

class API{
    #secure;  
    constructor(URL, method="GET"){
        this.url=URL;
        this.method=method;
        this.#secure=this.url.startsWith('https');
    }
    isSecure(){
        return this.#secure;
    }
    updateURL(newurl){
        this.url=newurl;
        this.#secure=this.url.startsWith('https');
    }
}



//Do not remove this code
module.exports = { API }
