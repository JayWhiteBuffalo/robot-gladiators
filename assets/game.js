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
  window.alert("Welcome to Robot Gladiators!");
var fight = function(enemyName) {
  //repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0) {
  //If Player Chooses to Fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "FIGHT" || promptFight === "fight" ){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth-playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
  playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining"
  );

  //check enemy's health
  if (enemyHealth <=0) {
    window.alert(enemyName + "has died!");
  }else {
      window.alert(enemyName + "still has" + enemyHealth + "health left.");
  }
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
);
// check player's health
if (playerHealth <=0) {
  window.alert(playerName + "has died!");
}else{
  window.alert(playerName + "still has" + playerHealth + "health left.");
}
// if player choses to skip
}else if (promptFight === "skip" || promptFight === "SKIP"){
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + "has decided to skip this fight. Goodbye!");
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney -2;
  }
  //if no (false), ask question again by running fight() again
  else {
    fight();
  }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
  //fight function statements
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  // call fight function with enemy-robot
  fight(pickedEnemyName);
}




