const usernames = [];

gameInfo.forEach((player) => {
    usernames.push(`${player.username}!`);
});

console.log(usernames); 
// Output: ["john!", "becky!", "susy!", "tyson!"]
const winners = [];

gameInfo.forEach((player) => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log(winners); 
// Output: ["becky", "susy"]
let totalScore = 0;

gameInfo.forEach((player) => {
    totalScore += player.score;
});

console.log("Total Score:", totalScore); 
// Output: Total Score: 71