//DECLARES THE DIFFERENT BODY TYPES AS OBJECTS AND THEN OUTPUTS ARRAY robotBodyList THAT HAS THEM ALL
// -----------------------------------
var symmetrical = {
	type: "symmetrical",
	weakness: "fire",
	resistance: "flipper",
	defense: 25,
	speed: 25,
	powerConsumption: 25
};

var armored = {
	type: "armored",
	weakness: "flipper",
	resistance: "spiked",
	defense: 30,
	speed: 20,
	powerConsumption: 25
};
var flameResistant = {
	type: "flame resistant",
	weakness: "spiked",
	resistance: "fire",
	defense: 20,
	speed: 30,
	powerConsumption: 25
};

var robotBodyList = [symmetrical, armored, flameResistant];
// -----------------------------------

//DECLARES THE DIFFERENT WEAPON TYPES AS OBJECTS AND THEN OUTPUTS ARRAY robotWeaponList THAT HAS THEM ALL
// -----------------------------------
var spiked = {
	type: "spiked",
	strongAgainst: "flame resistant",
	weakAgainst: "armored",
	attack: 20,
	speed: 30,
	powerConsumption: 20
};

var flipper = {
	type: "flipper",
	strongAgainst: "armored",
	weakAgainst: "symmetrical",
	attack: 35,
	speed: 20,
	powerConsumption: 25
};

var fire = {
	type: "fire",
	strongAgainst: "symmetrical",
	weakAgainst: "flame resistant",
	attack: 30,
	speed: 25,
	powerConsumption: 25
};

var robotWeaponList = [spiked, flipper, fire];
// -----------------------------------

//Returns a robot body with randomized & balanced speed/defense/powerConsumption stats 
function createBody() {
	var a =  Math.floor(Math.random() * robotBodyList.length);
	var newBody = robotBodyList[a];
	var defenseBoost =  Math.floor(Math.random() * 5);
	newBody.defense += defenseBoost;
	var speedBoost =  Math.floor(Math.random() * 5);
	newBody.speed += speedBoost;
	newBody.powerConsumption += (defenseBoost + speedBoost);
	return newBody;
};

//Returns a robot weapon with randomized & balanced speed/defense/powerConsumption stats
function createWeapon() {
	var a =  Math.floor(Math.random() * robotWeaponList.length);
	var newWeapon = robotWeaponList[a];
	var attackBoost =  Math.floor(Math.random() * 4);
	newWeapon.attack += attackBoost;
	var speedBoost =  Math.floor(Math.random() * 4);
	newWeapon.speed += speedBoost;
	newWeapon.powerConsumption += (attackBoost + speedBoost);
	return newWeapon;
};

function createRobotFromScratch() {
	var newRobot = {};
	var robotBody = createBody();
	var leftWeapon = createWeapon();
	var rightWeapon = createWeapon();
	newRobot.body = robotBody;
	newRobot.leftWeapon = leftWeapon;
	newRobot.rightWeapon = rightWeapon;
	var robotLevel = Math.floor((Math.random() * 4)) + 1;
	newRobot.level = robotLevel;
	newRobot.XPtoNextLevel = newRobot.level * 15;
	displayRobot(newRobot);
	newRobot.givenName = prompt("Please enter a name for your robot");
	return newRobot;
}

//Takes a single robot and displays their values
function displayRobot(robotObject) {
		if (robotObject.givenName) {
			console.log("name: " + robotObject.givenName + "\n");
		} 
		console.log("level: " + robotObject.level + "\n");
		console.log("body type: " + robotObject.body.type + "\n");
		console.log("XP to next level:" + robotObject.XPtoNextLevel + "\n");
}

var test1 = createRobotFromScratch();
displayRobot(test1);




/*
//Takes an array of robots and displays their values
function displayRobotArray(robotObjects) {
	for (i = 0; i < robotObjects.length; i++) {
		var positionInArray = i + 1;
		console.log(positionInArray + "). " + robotObjects[i].species +"\n");
		if (robotObjects[i].givenName) {
			console.log("name: " + robotObjects[i].givenName + "\n");
		} 
		console.log("level: " + robotObjects[i].level + "\n");
		console.log("body type: " + robotObjects[i].body.type + "\n");
		console.log("XP to next level:" + robotObjects[i].XPtoNextLevel + "\n");
	}
}
*/
