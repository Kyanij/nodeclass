const btn = document.getElementById('listArticle');

const url = 'http://localhost:3000/articles';

function getArticle(){
    fetch(url, {
        method:'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json)
    .then(data => console.log(data.json()))
    .catch(err => console.log(err))
}