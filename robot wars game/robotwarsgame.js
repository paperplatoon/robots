		//DECLARES THE DIFFERENT BODY TYPES AS OBJECTS AND THEN OUTPUTS ARRAY robotBodyList THAT HAS THEM ALL
		// -----------------------------------
		var symmetrical = {
			type: "symmetrical",
			weakness: "fire",
			resistance: "flipper",
			defense: 23,
			speed: 23,
			powerConsumption: 23
		};

		var armored = {
			type: "armored",
			weakness: "flipper",
			resistance: "spiked",
			defense: 28,
			speed: 18,
			powerConsumption: 23
		};
		var flameResistant = {
			type: "flame resistant",
			weakness: "spiked",
			resistance: "fire",
			defense: 18,
			speed: 28,
			powerConsumption: 23
		};

		var robotBodyList = [symmetrical, armored, flameResistant];
		// -----------------------------------

		//DECLARES THE DIFFERENT WEAPON TYPES AS OBJECTS AND THEN OUTPUTS ARRAY robotWeaponList THAT HAS THEM ALL
		// -----------------------------------
		var spiked = {
			type: "spiked",
			strongAgainst: "flame resistant",
			weakAgainst: "armored",
			attack: 18,
			speed: 28,
			powerConsumption: 18
		};

		var flipper = {
			type: "flipper",
			strongAgainst: "armored",
			weakAgainst: "symmetrical",
			attack: 33,
			speed: 18,
			powerConsumption: 23
		};

		var fire = {
			type: "fire",
			strongAgainst: "symmetrical",
			weakAgainst: "flame resistant",
			attack: 28,
			speed: 23,
			powerConsumption: 23
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
			var attackBoost =  Math.floor(Math.random() * 5);
			newWeapon.attack += attackBoost;
			var speedBoost =  Math.floor(Math.random() * 5);
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
			fillOutStats(newRobot);
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

		//takes a robot object and inputs its stats into the page via html
		function fillOutStats(robotObject) {
			document.getElementById("robotName").innerHTML = "Name: " + robotObject.givenName;
			document.getElementById("robotLevel").innerHTML = "Level: " + robotObject.level;
			document.getElementById("robotRWeapon").innerHTML = "Right Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("robotRWeaponAttack").innerHTML = "Right Weapon Attack: " + robotObject.rightWeapon.attack;
			document.getElementById("robotRWeaponSpeed").innerHTML = "Right Weapon Speed: " + robotObject.rightWeapon.speed;
			document.getElementById("robotRWeaponPower").innerHTML = "Right Weapon Power Consumption: " + robotObject.rightWeapon.powerConsumption;
			document.getElementById("robotLWeapon").innerHTML = "Left Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("robotLWeaponAttack").innerHTML = "Left Weapon Attack: " + robotObject.leftWeapon.attack;
			document.getElementById("robotLWeaponSpeed").innerHTML = "Left Weapon Speed: " + robotObject.leftWeapon.speed;
			document.getElementById("robotLWeaponPower").innerHTML = "Left Weapon Power Consumption: " + robotObject.leftWeapon.powerConsumption;
		}
		//Takes players's robot as an argument and displays it
		function displayPlayerRobot(robotObject) {
			document.getElementById("playerRobotName").innerHTML = "Name: " + robotObject.givenName;
			document.getElementById("playerRobotLevel").innerHTML = "Level: " + robotObject.level;
			document.getElementById("playerRobotBody").innerHTML = "Body Type: " + robotObject.body.type;
			document.getElementById("playerRobotRWeapon").innerHTML = "Right Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("playerRobotRWeaponPower").innerHTML = "Right Weapon Power Consumption: " + robotObject.rightWeapon.powerConsumption;
			document.getElementById("playerRobotLWeapon").innerHTML = "Left Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("playerRobotLWeaponPower").innerHTML = "Left Weapon Power Consumption: " + robotObject.leftWeapon.powerConsumption;
		}

		//Takes opponent's robot as an argument and displays it
		function displayOpponentRobot(robotObject) {
			document.getElementById("opponentRobotName").innerHTML = "Name: " + robotObject.givenName;
			document.getElementById("opponentRobotLevel").innerHTML = "Level: " + robotObject.level;
			document.getElementById("opponentRobotBody").innerHTML = "Body Type: " + robotObject.body.type;
			document.getElementById("opponentRobotRWeapon").innerHTML = "Right Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("opponentRobotRWeaponPower").innerHTML = "Right Weapon Power Consumption: " + robotObject.rightWeapon.powerConsumption;
			document.getElementById("opponentRobotLWeapon").innerHTML = "Left Weapon: " + robotObject.rightWeapon.type;
			document.getElementById("opponentRobotLWeaponPower").innerHTML = "Left Weapon Power Consumption: " + robotObject.leftWeapon.powerConsumption;
		}

		//Takes a weapon as an input and returns a damage value after calculating strengths/weaknesses
		function weaponAttack(playerWeapon, playerRobot, opponentRobot) {
			var damage = ((playerWeapon.attack * playerRobot.level) - ((opponentRobot.body.defense / 2) * opponentRobot.level));
			if (playerWeapon.strongAgainst === opponentRobot.body.type) {
				damage = Math.ceil(damage * 1.5);
				return damage;
			} else if (playerWeapon.weakAgainst === opponentRobot.body.type) {
				damage = Math.ceil(damage * 0.75);
				return damage;
			} else {
				damage = Math.ceil(damage);
				return damage;
			}
		}

		//Takes player and opponent robot objects as arguments, evaluates their speed, then returns "true" if the dodge was successful
		function Dodge(playerRobot, opponentRobot) {
			var speedDiff = (playerRobot.speed - opponentRobot.speed);
			var dodgeChance = 0.5 + (speedDiff * 0.1);
			var dodgeRoll = Math.random();
			if (dodgeChance >= dodgeRoll) {
				return true;
			} else {
				return false;
			}
		}





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
