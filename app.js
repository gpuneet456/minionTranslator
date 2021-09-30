var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function translate(url) {
    fetch(url).then(response => response.json()).then(json => outputDiv.innerText = json.contents.translated).catch(error=>console.log(error));
}
var url = "https://api.funtranslations.com/translate/minion.json?text=";
btnTranslate.addEventListener("click", function clickEventHandler() {

    var reqdUrl= url+txtInput.value;
    translate(reqdUrl);

})
