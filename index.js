const fifaData = require('./fifa.js');
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

    const yearGames = fifaData.filter((game) => {return game.Year == 2014 && game.Stage == 'Final'})
    console.log(yearGames[0]['Home Team Name'])

    console.log(yearGames[0]['Away Team Name'])

    console.log(yearGames[0]['Home Team Goals'])

    console.log(yearGames[0]['Away Team Goals'])

    console.log(yearGames[0]['Win conditions'])

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsData = data.filter ((final) => {return final.Stage === 'Final'})

    return finalsData

};

getFinals(fifaData)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const finalYears = callback(fifaData).map(year => {return year.Year});
    
    return finalYears
    
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const game = callback(fifaData);
    
    const winners = [];
    
    game.map(game => {
        if (game['Home Team Score'] > game['Away Team Score']){
            winners.push(game['Home Team Name'])
        }else{
            winners.push(game['Away Team Name'])
            }
        }
    )
    return winners
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    
    const winners = callback1(getFinals);
    const years = callback2(getFinals);
    const winnersByYear = []; 
    for(let i = 0; i <winners.length; i++)
    {
        winnersByYear.push( `In ${years[i]}, ${winners[i]} won the world cup!`);
    }

    return winnersByYear;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
    initials = initials.toUpperCase();
    let count = 0;
    const worldCups = data.map((game) => {
        if (game['Home Team Goals']>game['Away Team Goals']) {
            return game["Home Team Initials"]
        } else {
            return game["Away Team Initials"]
        }
    })

    worldCups.forEach(worldCup => {
        if (worldCup === initials){
            count++; 
        } 
    })
    return count;
};

console.log(getCountryWins(getFinals(fifaData), 'ARG'));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const numberOfGames = data.length;
    const homeGoals = data.reduce((acc, cur) => {
        return acc += cur["Home Team Goals"];
    }, 0)

    const awayGoals = data.reduce((acc, cur) => {
        return acc += cur["Away Team Goals"];
    }, 0)

    const averageHomeGoals = homeGoals / numberOfGames;
    const averageAwayGoals = awayGoals / numberOfGames;

    return {
        "Home Average": averageHomeGoals.toFixed(2),
        "Away Average": averageAwayGoals.toFixed(2)
    }

    //.reduce home team goals and away team goals, number of games
    // then divide goals from number of games

};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
