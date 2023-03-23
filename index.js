let postArray = []

function renderPosts(){
    let html = ""
    for (let post of postArray){
        html += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `
    }
    document.getElementById('blog-list').innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    })
    
document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault()
    let postTitle = document.getElementById('post-title').value
    let postBody = document.getElementById('post-body').value
    let data =  {
            title: postTitle,
            body: postBody
        }

const options =  {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type" : "application/json"
    }
}
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(post => {
        postArray.unshift(post)
        renderPosts()
    })

})