$(function(){

    var playground = $("#playground");
    var responseText = $("#responseText");

    var square = '<div class="square" ></div>';
    var newrow = "";

    var aantal_rijen = 10;
    var aantal_vakjes_per_rij = 10;
    var aantal_clicks = 0;

    MaakRijenEnVakjes();
    KleurVakjes();

    function MaakRijenEnVakjes() //gewenst aantal rijen en vakjes aanmaken
    {
        //aantal rijen overlopen
        for( let i=0; i < aantal_rijen; i++ )
        {
            newrow = "<div class='row'>" ;

            //aantal vakjes aanmaken
            for( let j=0; j < aantal_vakjes_per_rij; j++ )
            {
                newrow += square;
            }
            newrow += "</div>";

            //rij toevoegen aan playground
            playground.append(newrow);
        }
    }

    function KleurVakjes() //alle vakjes overlopen en een kleur per vakje instellen
    {
        $(".square").each( function(){
            this.style.backgroundColor = GetRandomColor();
        });
    }

    function GetRandomColor()
    {
        //een willekeurige kleur samenstellen met veelvouden van 50 voor rood, groen en blauw
        //eerst getallen van 1 tot 5
        var red_value = Math.floor(Math.random()*5) + 1;
        var green_value = Math.floor(Math.random()*5) + 1;
        var blue_value = Math.floor(Math.random()*5) + 1;

        //dan vermenigvuldigen met 50
        red_value *= 50;
        green_value *= 50;
        blue_value *= 50;

        //string (een kleur in rgb formaat) teruggeven
        return " rgb( " + red_value + "," + blue_value + "," + green_value + ")";
    }

    var square_color ;

    //mousedown en mouseup op een vakje instellen
    $("body")
        .on("mousedown", ".square", function () {
            //witte achtergrond
            square_color = this.style.backgroundColor ;
            this.style.backgroundColor = " white ";

            //aantal kliks tonen
            aantal_clicks++;
            responseText.html( aantal_clicks + " clicks");
        })
        .on("mouseup", ".square", function () {
            //weer gekleurd
            this.style.backgroundColor = square_color ;
        });

});