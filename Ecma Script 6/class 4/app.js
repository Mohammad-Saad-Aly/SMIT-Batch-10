let getDiv = document.getElementById('getDiv')
let getSearch = document.getElementById('news')

let getNews =() => {

    fetch(`https://api.openweathermap.org/data/3.0/onecall?q=karachi&exclude={part}&appid=82364876237864782364788`)

        .then(data => data.json())
        .then(data => {
            for (let i = 0; i < data.articles.length; i++) {
                getDiv.innerHTML += `
            <div class="card m-4" style="width: 18rem;">
             <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `
            }
        }

        )
        .catch(err => console.log(err))
}


getNews()