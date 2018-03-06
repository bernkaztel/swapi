    const data2 = {};
    //Function to show default Modal 
    function showModal(event) {
        let eventTarget = event.target;
        let eventTrigger = eventTarget.parentNode;
        let characterUrl = eventTarget.dataset.url
        //Get data off characters
        $.ajax({
            type: "GET",
            url: characterUrl,
            success: function (data) {
                console.log(data);
                fillModal(data);
            },
            dataType: 'json',
        }); //End first AJAX call
        const mymodal = $('#myModal');

        function fillModal(data) {
            const characterName = data.name;
            const characterMass = data.mass;
            const characterHeight = data.height;
            const characterHair = data.hair_color;
            const characterEye = data.eye_color;
            // console.log(thisa.dataset.alliance);
            mymodal.find('#modaltitle').text(characterName);
            mymodal.find('#imagemodal').attr('src', eventTrigger.dataset.image);
            mymodal.find('#type').text(characterMass);
            mymodal.find('#habitat').text(characterHeight);
            mymodal.find('#group').text(characterEye);
            mymodal.find('#group2').text(characterHair);
            mymodal.modal('show');
        }

    }


    //Array with pokemon images
    const imageMovies = {
        blastoise: "assets/images/blastoise.jpg",
        ivysaur: "assets/images/ivysaur.jpg",
        bulbasaur: "assets/images/bulbasaur.jpg",
        caterpie: "assets/images/caterpie.jpg",
        charizard: "assets/images/charizard.jpg",
        charmeleon: "assets/images/charmeleon.jpg",
        charmander: "assets/images/charmander.jpg",
        squirtle: "assets/images/squirtle.jpg",
        wartortle: "assets/images/wartortle.jpg",
        venusaur: "assets/images/venusaur.jpg",
        metapod: "assets/images/metapod.jpg",
        butterfree: "assets/images/butterfree.jpg",
        weedle: "assets/images/weedle.jpg",
        kakuna: "assets/images/kakuna.jpg",
        beedrill: "assets/images/beedrill.jpg",
        pidgey: "assets/images/pidgey.jpg",
        pidgeotto: "assets/images/pidgeotto.jpg",
        pidgeot: "assets/images/pidgeot.jpg",
        rattata: "assets/images/rattata.jpg",
        raticate: "assets/images/raticate.jpg",
        spearow: "assets/images/spearow.jpg",

    };



    $(document).ready(function () {

        //Get data from pokedex (all pokemons) first AJAX call
        $.ajax({
            type: "GET",
            url: "https://swapi.co/api/films/?format=json",
            success: function (data) {
                const dataResults = (data.results);
                const arrayMovies = Array.prototype.slice.call(dataResults);
                getMovies(arrayMovies)
            },
            dataType: 'json',
        }); //End first AJAX call



        function getMovies(arrayMovies) {
            console.log(arrayMovies);
            for (let index = 0; index < arrayMovies.length; index++) {
                let movie = arrayMovies[index];
                let movieTitle = movie.title;
                let movieCharacters = movie.characters
                let movieEpisode = movie.episode_id;
                let movieImgSrc ='assets/images/' + movieEpisode + '.jpg'
            
                createDomMovies(movieTitle, movieCharacters, movieEpisode,movieImgSrc);
            }
        }
        //Creates the DOM elements for each pokemon and passes data to create the modal
        function createDomMovies(movieTitle, movieCharacters, movieEpisode, movieImgSrc) {
            let movieContainer = $("<div></div>")
            $("#container-movie").append(movieContainer);
            let movieTitleDOM = $("<h3></h3>").text("Movie Title: " + movieTitle);
            movieTitleDOM.attr({
                'class': 'font-weight-bold mt-3'
            });
            movieContainer.append(movieTitleDOM);
            let movieImage = $("<img></img>");
            movieImage.attr({
                width: '150px',
                src: movieImgSrc
            });
            movieContainer.append(movieImage);
            let movieEpisodeDOM = $("<p></p>").text("Episode Id:  " + movieEpisode);
            movieContainer.append(movieEpisodeDOM);
            let movieCharDOM = $("<p></p>").text("Characters:  ");
            movieContainer.append(movieCharDOM)
            movieCharacters.forEach(character => {
                var movieCharactersDOM = $("<a></a>").text(character);
                movieCharactersDOM.attr({
                    href: '#',
                    'onclick': "showModal(event)",
                    'data-url': character,
                    'class': 'd-block'
                });
                movieContainer.append(movieCharactersDOM);
            });
        }


    }); //End function ready