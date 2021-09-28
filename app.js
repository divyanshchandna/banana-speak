var btntranslate=document.querySelector("#btn-translate");
var inputtext=document.querySelector("#input-text");
var output=document.querySelector("#output");

var serverurl="https://api.funtranslations.com/translate/minion.json";
function getURL(text){
    return serverurl+"?"+"text="+text
}

function clickhandler() {
    var input1= inputtext.value; 

    
    fetch(getURL(input1))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            output.innerText = translatedtext; 
           })
        .catch(errorHandler)
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("Try again after some time")
}

btntranslate.addEventListener("click",clickhandler)

