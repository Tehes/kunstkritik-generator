var app = (function() {
    /* --------------------------------------------------------------------------------------------------
    Variables
    ---------------------------------------------------------------------------------------------------*/
    var firstWord = ["Das Œuvre", "Das Substrat", "Die Rhythmisierung", "Der Pinselduktus", "Der Mythos", "Die Linearität", "Die Komposition", "Die Impression", "Die Idealisierung", "Der Gestus", "Der Farbauftrag", "Die Expression", "Die Atmosphäre", "Die Abstraktion", "Die Ästhetik"];
    var secondWord = ["transzendiert", "collagiert", "illuminiert", "intendiert", "evoziert", "manifestiert", "moduliert", "reflektiert", "suggeriert", "thematisiert", "transformiert", "reproduziert", "verhandelt", "zitiert", "simuliert"];
    var thirdWord = ["virtuell", "tautologisch", "informell", "surreal", "stringent", "seriell", "mimetisch", "narrativ", "hypothetisch", "haptisch", "fragmentarisch", "hermetisch", "figurativ", "experimentell", "assoziativ"];
    var fourthWord = ["das Artifizielle", "das Auratische", "den Bildraum", "das Eingeschriebene", "das Erratische", "das Existentielle", "die Ikonographie", "das Motivische", "das Orgiastische", "die Materialität", "das Phantastische", "die Relativität", "das Selbstreflexive", "das Kosmische", "die Inszenierung"];

    /* --------------------------------------------------------------------------------------------------
    functions
    ---------------------------------------------------------------------------------------------------*/
    String.prototype.shuffle = function() {
        var chars = this.split(""),
            charsAmount = chars.length;

        for (var i = charsAmount - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = chars[i];
            chars[i] = chars[j];
            chars[j] = tmp;
        }
        return chars.join("");
    };

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateSentence() {
        var paragraphs = document.querySelectorAll("p");
        var counter = 1;
        var animation = setInterval(shuffleParas, 50);

        var firstIndex = getRndInteger(0, firstWord.length-1);
        var secondIndex = getRndInteger(0, secondWord.length-1);
        var thirdIndex = getRndInteger(0, thirdWord.length-1);
        var fourthIndex = getRndInteger(0, fourthWord.length-1);

        function shuffleParas() {
            if (counter >= 10) {
                clearInterval(animation);
                paragraphs[0].textContent = firstWord[firstIndex];
                paragraphs[1].textContent = secondWord[secondIndex];
                paragraphs[2].textContent = thirdWord[thirdIndex];
                paragraphs[3].textContent = fourthWord[fourthIndex];
            }
            else {
                paragraphs[0].textContent = firstWord[firstIndex].shuffle();
                paragraphs[1].textContent = secondWord[secondIndex].shuffle();
                paragraphs[2].textContent = thirdWord[thirdIndex].shuffle();
                paragraphs[3].textContent = fourthWord[fourthIndex].shuffle();
                counter++;
            }
        }
    }

    function init() {
        var text = document.querySelector("div");

        document.addEventListener("touchstart", function() {}, false);
        window.addEventListener("DOMContentLoaded", generateSentence, false);
        text.addEventListener("click", generateSentence, false);
    }

    /* --------------------------------------------------------------------------------------------------
    public members, exposed with return statement
    ---------------------------------------------------------------------------------------------------*/
    return {
        init: init
    };

})();

app.init();
