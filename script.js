const api =
"https://script.google.com/macros/s/AKfycbwWyQ93S6-Mj9L6VtsgrP1aN0VL7drhWjr7rzUVIWJzw6tK5wyhWO7yavkvrrnNs0134Q/exec";

fetch(api)
.then(r => r.json())
.then(players => {

    document.getElementById("playerCount").innerHTML =
        `${players.length} Registered Players`;

    let html = "";

    players.forEach((p,i)=>{

        html += `
        <div class="player-card">

            <strong>${i+1}. ${p.nombre}</strong><br>

            HC: ${p.handicap}<br>

            ${p.campo}

        </div>
        `;

    });

    document.getElementById("playersList").innerHTML = html;

});
