var words =[
	'cso',
	'CS Student',
	'dining hall',
	'hiking',
	'basketball',
	'swimming',
	'vegan',
	'trees',
	'soccer',
	'water polo',
	'track and field',
	'gamer',
	'party',
	'tennis',
	'rugby',
	'frisbee',
	'hippies',
	'delivery food',
	'liberals',
	'conservatives',
	'Bus',
	'protest',
	'high',
	'drunk',
	'crown/merrill college',
	'Porter College',
	'Oakes College',
	'painting',
	'UC Santa Cruz',
	'College 9/10'
];

function newWord() { 
	var randomNumber = Math.floor(Math.random() * (words.length));
	document.getElementById('wordDisplay').innerHTML= words[randomNumber];
}
