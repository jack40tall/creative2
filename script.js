// called when Submit is pressed on form
document.getElementById("formSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    // debugger
    const nameValue = document.getElementById("nameInput").value;
    const animalValue = document.getElementById("animalInput").value;
    const colorValue = document.getElementById("colorInput").value;
    if ((nameValue === "") || (animalValue === "") || (colorValue === ""))
        return;
    const id = ((nameValue.charCodeAt(0) + animalValue.charCodeAt(0) + colorValue.charCodeAt(0)) * 31) % 672;
    const url = "https://rickandmortyapi.com/api/character/" + id;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<h2 id="you-are">YOU ARE : </h2><div id="results" class="flex-container"><div class="left-side">';

            results += '<img src="' + json.image + '"/></div><div class="right-side">';

            results += '<h2 id="name">' + json.name + "</h2>";
            results += '<h3 id="status">Status: ' + json.status + '</h3>';
            results += '<h3 id="species">Species: ' + json.species + '</h3>';
            results += '<h3 id="origin">Origin: ' + json.origin.name + '</h3>';
            results += '</div></div>';
            document.getElementById("quizResults").innerHTML = results;
        });
});