console.log("Hello World");

function hello() {
    alert("Page Unavailable")
}

function swap() {
    const header = document.querySelector("h1");
    if (header.innerHTML === 'The Bookstore') {
        header.innerHTML = 'The Cafe';
    }
    else {
        header.innerHTML = 'The Bookstore';
    }

}