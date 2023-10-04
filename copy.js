let newURL = document.getElementById("shortedurl");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}