    const data2 = {};
    //Function to show default Modal 
    function showModal(event) {
        var eventTarget = event.target;
        var eventTrigger = eventTarget.parentNode;
        var mymodal = $('#myModal');
        // console.log(thisa.dataset.alliance);
        mymodal.find('#modaltitle').text(eventTrigger.dataset.name);
        mymodal.find('#imagemodal').attr('src', eventTrigger.dataset.image);
        mymodal.find('#type').text(eventTrigger.dataset.genre);
        mymodal.find('#habitat').text(eventTrigger.dataset.habitat);
        mymodal.find('#group').text(eventTrigger.dataset.group);
        mymodal.find('#description').text(eventTrigger.dataset.description);
        mymodal.modal('show');
    }


    //Array with pokemon images
    const imagePokemon = {
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
                    url: "https://swapi.co/api/films/1/?format=json",
                    success: function (data) {
                        console.log(data);
                    
                    },
                    dataType: 'json',
                }); //End first AJAX call


                }); //End function ready