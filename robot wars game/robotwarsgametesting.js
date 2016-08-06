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
	attack: 20,
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

function dodge(playerRobot, opponentRobot) {
	var speedDiff = (playerRobot.body.speed - opponentRobot.body.speed);
	var dodgeChance = 0.5 + (speedDiff * 0.1);
	var dodgeRoll = Math.random();
	if (dodgeChance >= dodgeRoll) {
		return true;
	} else {
		return false;
	}
}

//spiked attack is 18, flipper attack is 33, body speed is 28
var playerRobotExample = {
	body: flameResistant,
	leftWeapon: spiked,
	rightWeapon: flipper,
	level: 1
};

//opponent body defense is 28, body speed is 18
var opponentRobotExample = {
	body: armored,
	leftWeapon: flipper,
	rightWeapon: spiked,
	level: 1
};

//spiked is not very effective agains the opponent
var test1 = dodge(playerRobotExample, opponentRobotExample);
console.log(test1);