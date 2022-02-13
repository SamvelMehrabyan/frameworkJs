
fetch("https://gorest.co.in/public/v2/posts")

.catch((error) => {
    console.log(error.message);
})

.then((response) => response.json())
.then((data) => console.log(data))