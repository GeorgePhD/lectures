
let title = "JavaScript Arrays of Objects";
console.log(title);

//Array
let nbaPlayers = ["lebron james", "kevin durant", "stephen curry"]; //strings

console.log(nbaPlayers);
console.log(nbaPlayers[0]);



//Array of Objects
let players = [


    { id: 1, name: "LeBron James", team: "Los Angeles Lakers" },
    { id: 2, name: "Stephen Curry", team: "Golden State Warriors" },
    { id: 3, name: "Kevin Durant", team: "Phoenix Suns" },
    { id: 4, name: "Giannis Antetokounmpo", team: "Milwaukee Bucks" },
    { id: 5, name: "Luka Dončić", team: "Dallas Mavericks" },
    { id: 6, name: "Nikola Jokić", team: "Denver Nuggets" },
    { id: 7, name: "Joel Embiid", team: "Philadelphia 76ers" },
    { id: 8, name: "Jayson Tatum", team: "Boston Celtics" },
    { id: 9, name: "Damian Lillard", team: "Milwaukee Bucks" },
    { id: 10, name: "Anthony Davis", team: "Los Angeles Lakers" },
    { id: 11, name: "Kawhi Leonard", team: "Los Angeles Clippers" },
    { id: 12, name: "Jimmy Butler", team: "Miami Heat" },
    { id: 13, name: "Jaylen Brown", team: "Boston Celtics" },
    { id: 14, name: "Devin Booker", team: "Phoenix Suns" },
    { id: 15, name: "Shai Gilgeous-Alexander", team: "Oklahoma City Thunder" },
    { id: 16, name: "Tyrese Haliburton", team: "Indiana Pacers" },
    { id: 17, name: "Anthony Edwards", team: "Minnesota Timberwolves" },
    { id: 18, name: "Donovan Mitchell", team: "Cleveland Cavaliers" },
    { id: 19, name: "Bam Adebayo", team: "Miami Heat" },
    { id: 20, name: "Paul George", team: "Philadelphia 76ers" },
    { id: 21, name: "Kyrie Irving", team: "Dallas Mavericks" },
    { id: 22, name: "Trae Young", team: "Atlanta Hawks" },
    { id: 23, name: "De'Aaron Fox", team: "Sacramento Kings" },
    { id: 24, name: "Zion Williamson", team: "New Orleans Pelicans" },
    { id: 25, name: "Paolo Banchero", team: "Orlando Magic" },
    { id: 26, name: "Victor Wembanyama", team: "San Antonio Spurs" },
    { id: 27, name: "Domantas Sabonis", team: "Sacramento Kings" },
    { id: 28, name: "Karl-Anthony Towns", team: "New York Knicks" },
    { id: 29, name: "Jalen Brunson", team: "New York Knicks" },
    { id: 30, name: "Bradley Beal", team: "Phoenix Suns" },
    { id: 31, name: "Klay Thompson", team: "Dallas Mavericks" },
    { id: 32, name: "Draymond Green", team: "Golden State Warriors" },
    { id: 33, name: "Rudy Gobert", team: "Minnesota Timberwolves" },
    { id: 34, name: "Jamal Murray", team: "Denver Nuggets" },
    { id: 35, name: "CJ McCollum", team: "New Orleans Pelicans" },
    { id: 36, name: "Brandon Ingram", team: "New Orleans Pelicans" },
    { id: 37, name: "LaMelo Ball", team: "Charlotte Hornets" },
    { id: 38, name: "Scottie Barnes", team: "Toronto Raptors" },
    { id: 39, name: "Franz Wagner", team: "Orlando Magic" },
    { id: 40, name: "Jaren Jackson Jr.", team: "Memphis Grizzlies" },
    { id: 41, name: "Dejounte Murray", team: "New Orleans Pelicans" },
    { id: 42, name: "Cade Cunningham", team: "Detroit Pistons" },
    { id: 43, name: "Jrue Holiday", team: "Boston Celtics" },
    { id: 44, name: "Derrick White", team: "Boston Celtics" },
    { id: 45, name: "Kristaps Porziņģis", team: "Boston Celtics" },
    { id: 46, name: "Pascal Siakam", team: "Indiana Pacers" },
    { id: 47, name: "Fred VanVleet", team: "Houston Rockets" },
    { id: 48, name: "Alperen Şengün", team: "Houston Rockets" },
    { id: 49, name: "Ja Morant", team: "Memphis Grizzlies" },
    { id: 50, name: "Lauri Markkanen", team: "Utah Jazz" }


];

//arrow function to print players
const printPlayers = (players) => {

    players.map(player => {
        console.log(`ID: ${player.id}, Name: ${player.name}, Team: ${player.team}`);//template literals
    });

};

printPlayers(players);




















