//ARRAY SONO CARATTERIZZATI DA NOME,RUOLO,FOTO

//CREO ARRAY OGGETTI CON INFORMAZIONI FORNITE


const team = [
    {
        nome: "Wayne Barbnett",
        ruolo: "Founder e CEO",
        foto: "wayne-img-barnett.jpg",

    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos.jpg"
    }



]
//STAMPO SU CONSOLE LE INFROMAZIONI
console.log(team);
//STAMPO LE INFORMAZIONI SU DOM SOTTOFORMA DI STRINGHE
const containerCards = document.getElementById("container")
const wayneCard = document.getElementById("wayne");
const angelaCarollCard = document.getElementById("angelacaroll");
const walterCard = document.getElementById("walter");
const angelaLopezCard = document.getElementById("angelalopez");
const scottCard = document.getElementById("scott");
const barbaraCard = document.getElementById("barbara");

containerCards.innerHTML = `
        <div id="wayne">
            <div>${team[0].nome}</div>
            <div>${team[0].ruolo}</div>
            <div>${team[0].foto}</div>
        </div>
        <div id="angelacaroll">
            <div>${team[1].nome}</div>
            <div>${team[1].ruolo}</div>
            <div>${team[1].foto}</div>
        </div>
        <div id="walter">
            <div>${team[2].nome}</div>
            <div>${team[2].ruolo}</div>
            <div>${team[2].foto}</div>
        </div>
        <div id="angelalopez">
            <div>${team[3].nome}</div>
            <div>${team[3].ruolo}</div>
            <div>${team[3].foto}</div>
        </div>
        <div id="scott">
            <div>${team[4].nome}</div>
            <div>${team[4].ruolo}</div>
            <div>${team[4].foto}</div>
        </div>
        <div id="barbara">
            <div>${team[5].nome}</div>
            <div>${team[5].ruolo}</div>
            <div>${team[5].foto}</div>
        </div>
        `
//BONUS 1 TRASFORMO STRINGHE IN VERE IMMAGINI
