const API_KEY = 'a36d708508cabf272699a4cebbc2d896';
const url = 'https://api.themoviedb.org/3/movie/76341?api_key=' + API_KEY;

fetch(url)
    .then(res => {
        if (res.status !== 200){
            console.log('wrong api');
        }
        else{
            res.json()
            .then(data => {
                console.log(data.title);
            })
        }
    })