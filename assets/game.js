// this creates a function named "fight"

//function fight() {
    //window.alert("The fight has begun!");}
  //var playerName = window.prompt("What is your robot's name?");

  // Note the lack of quotation marks around playerName
//console.log(playerName);
//console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
//console.log(10 + 10);n/;;l;l

// what is this?
//console.log("Our robot's name is " + playerName);

  // This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
//var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
//var numberIntegerDataType = 10;
//var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
//var booleanDataType = true;

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//   *Fight all enemy-robots
//   *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

//for([initial expression]; [condition]; [increment expression]) {
  //statement
//}

// I.E
//var( i = 0; i <3; i++){
  //console.log("apple", i);
//}

// function to check if player wants to fight or skip
var fightOrSkip = function() {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // validate prompt answer
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

  // convert promptFight to all lowercase so we can check with less options
  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // stop while() loop using break; and enter next fight

      // return true if player wants to leave
      return true;
    }
  }
  return false;
};
  
  //Alert players that they are starting the round
  var fight = function(enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;
    if(Math.random() > 0.5){
      isPlayerTurn = false;
    }
  
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn){
      
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      
  
       // generate random damage value based on player's attack power
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      //playerHealth = Math.max(0, playerHealth - enemyAttack);
      //player gets attacked first
    }else{
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
      
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    } 
    //switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }   // end of while loop
  };  // end of fight function
  
  //function to start a new game
var startGame = function(){
  // reset player stats
  //playerInfo.health = 100;
  //playerInfo.attack = 10;
  //playerInfo.money = 10;
  playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {alert
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round" + (i+1));
  //pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyObj = enemyInfo[i];
  //reset enemyHealth before starting new fight
  pickedEnemyObj.health = randomNumber(40, 60);
  //use debugger to pause script from running and check what's going on at that moment in the code
  //debugger;
  // pass the picked EnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyObj);
  //if we're not at the last enemy in the array
  if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
    // ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is Over, visit the store before the next round?");
    // if yes, take them to the store() function
    if (storeConfirm){
    shop();
  }
}
  }
else {
  window.alert("You have lost your robot in battle! Game Over!");
  break;
    }
  }
  endGame();
}
    // function to end the entire game
    var endGame = function() {
      window.alert("The game has now ended. Let's see how you did!")
      // check localStorage for high score, if it's not there, use 0
      var highScore = localStorage.getItem ("highScore");
      if(highScore === null){
        highScore = 0;
      }
      //Above code could also be wrote as highScore = highScore || 0;
      //compare player's score to stored highscore
      var playerScore = playerInfo.money;
      if(playerScore < highScore){
        window.alert("You did not beat the High Score. The current High Score is" + highScore)
      }
      else{
        localStorage.setItem("highScore", playerScore);
        localStorage.setItem("name", playerInfo.name );
        alert("Congrats" + playerInfo.name + "you beat the high score!" );
      }
      //ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if(playAgainConfirm){
        startGame();
      }
      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!1");
      }
      };




      //Old Code
      //if player is still alive, player wins!
     // if (playerInfo.health > 0) {
      // window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
     //}
     //else {
       //window.alert("You've lost your robot in battle.");

       //ask player if they'd like to play again
       //var PlayAgainConfirm = window.confirm("Would you like to play again?");
       //if (PlayAgainConfirm) {
         //restart the game
         //startGame();
      // }else{window.alert("Thank you for playing Robot Gladiators! Come back soon!");}
     //  }
     

//Shop function Begin
var shop = function(){
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );
// Use switch to carry out action
shopOptionPrompt = parseInt(shopOptionPrompt);
switch (shopOptionPrompt) {
  case 1:
    //if (playerInfo.money>= 7) {
    //window.alert("Refilling player's health by 20 for 7 dollars.");
    // Increase health and decrease money
    //playerInfo.health = playerInfo.health + 20;
    //playerInfo.money = playerInfo.money - 7;
    //Commented out code replaced with this line
    playerInfo.refillHealth();
    break;
    //else {
      //window.alert("You don't have enough money!");
    
    

  case 2:
   playerInfo.upgradeAttack();
    break;

  case 3:
    window.alert("Leaving the store.");

    //Do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//funtion to set name
var getPlayerName= function(){
  var name = "";

while (name === "" || name === null){
  name = prompt("What is your robot's name?");
}

  console.log("Your robot's name is" + name);
  return name;
};




//var playerName = window.prompt("What is your robot's name?");
//var playerHealth = 100;
//var playerAttack = 10;
//Player Money
//var playerMoney = 10;

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },//comma!
  refillHealth: function(){
    if (this.money >= 7){
      window.alert("Refilling player;s health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
},
  upgradeAttack: function() {
    if (this.money >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
  else{
    window.alert("You don't have enough money!");
  }
}
};

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//var enemyHealth = 50;
//var enemyAttack = 12;
//Put enemy vales into an object array
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

//start the game when the page loads
startGame();