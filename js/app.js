var app = (function() {
    /* --------------------------------------------------------------------------------------------------
    Variables
    ---------------------------------------------------------------------------------------------------*/
    var words = [
        ["Das Œuvre", "Das Substrat", "Die Rhythmisierung", "Der Pinselduktus", "Der Mythos", "Die Linearität", "Die Komposition", "Die Impression", "Die Idealisierung", "Der Gestus", "Der Farbauftrag", "Die Expression", "Die Atmosphäre", "Die Abstraktion", "Die Ästhetik"],
        ["transzendiert", "collagiert", "illuminiert", "intendiert", "evoziert", "manifestiert", "moduliert", "reflektiert", "suggeriert", "thematisiert", "transformiert", "reproduziert", "verhandelt", "zitiert", "simuliert"],
        ["virtuell", "tautologisch", "informell", "surreal", "stringent", "seriell", "mimetisch", "narrativ", "hypothetisch", "haptisch", "fragmentarisch", "hermetisch", "figurativ", "experimentell", "assoziativ"],
        ["das Artifizielle", "das Auratische", "den Bildraum", "das Eingeschriebene", "das Erratische", "das Existentielle", "die Ikonographie", "das Motivische", "das Orgiastische", "die Materialität", "das Phantastische", "die Relativität", "das Selbstreflexive", "das Kosmische", "die Inszenierung"]
    ];
    /* --------------------------------------------------------------------------------------------------
    functions
    ---------------------------------------------------------------------------------------------------*/
    String.prototype.shuffle = function() {
        var chars = this.split("");
        var charsAmount = chars.length;

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
        var index = [];
        index[0] = getRndInteger(0, words[0].length-1);
        index[1] = getRndInteger(0, words[1].length-1);
        index[2] = getRndInteger(0, words[2].length-1);
        index[3] = getRndInteger(0, words[3].length-1);

        function shuffleParas() {
            if (counter >= 10) {
                clearInterval(animation);
                paragraphs[0].textContent = words[0][index[0]];
                paragraphs[1].textContent = words[1][index[1]];
                paragraphs[2].textContent = words[2][index[2]];
                paragraphs[3].textContent = words[3][index[3]] + ".";
            }
            else {
                paragraphs[0].textContent = words[0][index[0]].shuffle().trim();
                paragraphs[1].textContent = words[1][index[1]].shuffle().trim();
                paragraphs[2].textContent = words[2][index[2]].shuffle().trim();
                paragraphs[3].textContent = words[3][index[3]].shuffle().trim() + ".";
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
