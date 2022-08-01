// this creates a function named "fight"

//function fight() {
    //window.alert("The fight has begun!");}
  //var playerName = window.prompt("What is your robot's name?");

  // Note the lack of quotation marks around playerName
//console.log(playerName);
//console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
//console.log(10 + 10);
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

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
//Player Money
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

  //Alert players that they are starting the round
  var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
      
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    } // end of while loop
  };  // end of fight function
  
  //function to start a new game
var startGame = function(){
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round" + (i+1));
  
  //pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];
  //reset enemyHealth before starting new fight
  enemyHealth = 50;
  //use debugger to pause script from running and check what's going on at that moment in the code
  //debugger;
  // pass the picked EnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyName);
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
      //if player is still alive, player wins!
      if (playerHealth > 0) {
       window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
     }
     else {
       window.alert("You've lost your robot in battle.");
       //ask player if they'd like to play again
       var PlayAgainConfirm = window.confirm("Would you like to play again?");
       if (PlayAgainConfirm) {
         //restart the game
         startGame();
       }else{window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
       };
     }
//start the game when the page loads
startGame();