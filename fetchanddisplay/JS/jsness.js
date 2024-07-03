let mydiv = document.getElementsByClassName("store")[0];

fetch("http://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then((json) => {
    json.forEach(dd => {
        mydiv.innerHTML += createTile(dd);
    });
}).catch(error => {
    console.log("this is the error" + " " + error)
});

function createTile(data) {
    return `
        <div class = "listItem">
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        </div>
    `;
}