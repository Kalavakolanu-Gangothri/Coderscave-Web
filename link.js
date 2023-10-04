let btn = document.getElementById("short");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("givenurl").value;
    let shortURL = document.getElementById("shortedurl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}