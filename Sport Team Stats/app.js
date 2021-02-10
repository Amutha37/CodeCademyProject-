// create object and adding properties to that object
const team = {
  _players: [
    {
      firstName: "Steve",
      lastName: "Smith",
      age: 32,
    },
    {
      firstName: "Pat",
      lastName: "Cummins",
      age: 30,
    },
    {
      firstName: "Kishen",
      lastName: "Muhunthan",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "India",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Srilanka",
      teamPoints: 35,
      opponentPoints: 25,
    },
    {
      opponent: "England",
      teamPoints: 55,
      opponentPoints: 45,
    },
  ],
  //   get the information using getter method
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },
  // add or appending values to and array
  //   this add new values to an array

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};
// add dummy data to append and print using console log

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 40);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Singapore", 14, 28);
team.addGame("South Africa", 33, 32);
team.addGame("New Zealand", 78, 23);

console.log(team.games);
