/*Transparent background to color */


window.addEventListener('scroll', () =>{
    let navbar = document.getElementById('navbar');
    if(document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight){
        navbar.classList.add('colored');
        navbar.classList.remove('trans');
    }
    else{
        navbar.classList.add('trans');
        navbar.classList.remove('colored');
       
    }
})




//'https://api.themoviedb.org/3/movie/76341?api_key=a36d708508cabf272699a4cebbc2d896'
const API_KEY = 'a36d708508cabf272699a4cebbc2d896';
const url = 'https://api.themoviedb.org/3/movie/384018?api_key=' + API_KEY;
const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=a36d708508cabf272699a4cebbc2d896&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const url3 = 'https://api.themoviedb.org/3/discover/movie?api_key=a36d708508cabf272699a4cebbc2d896&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&append_to_response=videos';
const url4 = 'https://api.themoviedb.org/3/discover/movie?api_key=a36d708508cabf272699a4cebbc2d896&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';


fetch(url4)
    .then(res => {
        if (res.status !== 200){
            console.log('wrong api');
        }
        else{
            res.json().then(data => {
                console.log(data);
                data.results.forEach(item => {
                    let row_content = document.getElementById('row-content');
                    console.log(item.title);
                    let poster_path = item.poster_path;
                    let img_path = 'http://image.tmdb.org/t/p/w185/' + poster_path;
                   
                    console.log(img_path);
                    console.log(poster_path);

                    let li = document.createElement('li');
                    li.className = 'row-imgs';
                    let img = document.createElement('img');
                    img.setAttribute('src', img_path);
                    //li.textContent = item.title;
                    li.appendChild(img);
                    row_content.appendChild(li);
                    console.log(li);

                    
                })
            })

                /*
                let div = document.getElementById('test');
                let ul = document.getElementById('discover');
                let li = document.createElement('li');
                let img = document.createElement('img');
                let span = document.createElement('span');
                let br = document.createElement('br');
                img.setAttribute('src', "http://image.tmdb.org/t/p/w185//keym7MPn1icW1wWfzMnW3HeuzWU.jpg");
                img.alt = 'movie1';

                span.appendChild(img); 
                //div.appendChild(img);
                li.textContent = data.results[0].title;
                li.appendChild(br);
                li.appendChild(span);
                ul.appendChild(li);
                console.log(data);
                */
           
        }
    })

    const left = document.getElementById('test-btn');
    const right = document.getElementById('test-btn2');

    right.addEventListener('click', () => {
        document.getElementById('row-content').scrollLeft +=800;
    });

    left.addEventListener('click', ()=> {
        document.getElementById('row-content').scrollLeft -= 700;
    })
