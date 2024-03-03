console.log("hello");
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDUyZGI5NzEyZDY2ZGM4ZjE3MTYxM2UwMDliNDA4NyIsInN1YiI6IjY1YzFjMDBlMDkyOWY2MDE0OGUzZTAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMZ3lfEwm6NIM-NmbRlvf0W-EwS0z1O5wDxV_POcQcE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(function(response){
        const data = response;
        console.log(data);
        const movies = data.results;
        var cardListContainer = document.getElementById('card-list');

        movies.forEach((element, i) => {

            var outerdiv = document.createElement('div');
            outerdiv.className = `outerdiv-slider`;

            var moviediv = document.createElement('div');
            moviediv.className = `moviediv`;
            moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            moviediv.style.backgroundSize = "cover";

            outerdiv.appendChild(moviediv);

            cardListContainer.appendChild(outerdiv);
        });
    })
    document.addEventListener("scroll", function() {
        const nav = document.querySelector("#nav");
        const scrolled = window.scrollY;

        if (scrolled > 50) {
            nav.style.backgroundColor = "black";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });

  
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(function(response){
            const data = response;
            console.log(data);
            const movies = data.results;
            var cardListContainer = document.getElementById('card-list2');

            movies.forEach((element, i) => {

                var outerdiv = document.createElement('div');
                outerdiv.className = `outerdiv-slider`;

                var moviediv = document.createElement('div');
                moviediv.className = `moviediv`;
                moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
                moviediv.style.backgroundSize = "cover";

                outerdiv.appendChild(moviediv);

                cardListContainer.appendChild(outerdiv);
            });
        })

          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(function(response){
                const data = response;
                console.log(data);
                const movies = data.results;
                var cardListContainer = document.getElementById('card-list3');
    
                movies.forEach((element, i) => {
    
                    var outerdiv = document.createElement('div');
                    outerdiv.className = `outerdiv-slider`;
    
                    var moviediv = document.createElement('div');
                    moviediv.className = `moviediv`;
                    moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
                    moviediv.style.backgroundSize = "cover";
    
                    outerdiv.appendChild(moviediv);
    
                    cardListContainer.appendChild(outerdiv);
                });
            })

              fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
                .then(response => response.json())
                .then(function(response){
                    const data = response;
                    console.log(data);
                    const movies = data.results;
                    var cardListContainer = document.getElementById('card-list4');
        
                    movies.forEach((element, i) => {
        
                        var outerdiv = document.createElement('div');
                        outerdiv.className = `outerdiv-slider`;
        
                        var moviediv = document.createElement('div');
                        moviediv.className = `moviediv`;
                        moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
                        moviediv.style.backgroundSize = "cover";
        
                        outerdiv.appendChild(moviediv);
        
                        cardListContainer.appendChild(outerdiv);
                    });
                })
        
                
                
        console.log("Searching");
        document.addEventListener('DOMContentLoaded',function(){
                const ser = document.querySelector('#ser');
                const searchbox = document.querySelector('#searchbox');
                ser.addEventListener('click',function(){
                    searchbox.style.display='block';
                    ser.style.display='none';
                })

            const form = document.querySelector('form');
            form.addEventListener('submit',function(e){
                console.log("subitted the form");
                e.preventDefault();
                console.log("subitted the form");
                const content = document.querySelector('#content');
                const searched_movies = document.querySelector('#searched');                
                content.style.display='none';
                searched_movies.style.display='block';

                let search = document.querySelector('#ser_input').value;
                fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(function(response){
                    const data = response;
                    console.log(data);
                    console.log(typeof data);
                    const movies = data.results;
                    var cardListContainer = document.getElementById('searched');
                    if(cardListContainer.hasChildNodes()){
                        cardListContainer.innerHTML='';
                        console.log("removed child inside fetch");
                    }

                    const main_div = document.createElement('div');

                    main_div.style.width='100vw';
                    main_div.style.height='90vh';
                    main_div.style.display='flex';
                    main_div.style.flexWrap='wrap';
                    main_div.style.justifyContent='center';
                    movies.forEach((element, i) => {
                        if(element.poster_path==null) return;
                        var moviediv = document.createElement('div');
                        moviediv.className = `moviediv`;
                        moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
                        moviediv.style.backgroundSize = "cover";
                        moviediv.style.marginRight='25px';

                        main_div.appendChild(moviediv);
                        
                    });
                    cardListContainer.appendChild(main_div);
                } )
                .catch(err => console.error(err));
                
            })
        })
        
