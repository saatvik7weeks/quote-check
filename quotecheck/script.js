let para = document.querySelector("p");
let butt = document.querySelector("button");
let author=document.querySelector("h4")

let getQuote = async () => {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    console.log(data);
    para.textContent=`${data.content}`;
    author.textContent=`${data.author}`;
}

butt.onclick = () => {
    getQuote(); 
}
