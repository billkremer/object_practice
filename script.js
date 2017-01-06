var minneapolisMarauders = {
	teamName: 'Minneapolis Marauders',
	sport: 'Joggling',
	established: new Date('1/1/2000'),
	numberOnTeam: 500,
	homefield: 'Lake Nokomis Park',
	hometown: 'Minneapolis',
	nationalGoverningBody: 'US Joggling',
	achievement1: 'third place in Division in 2003',
	achievement2: 'second place Overall in 2007',
	currentCoach: 'Peggy Carter',
	previousCoach: 'Nick Fury',

	printPretty: function () {
		console.log('The ' + this.teamName + ' is a ' + this.sport + 
			' team from ' + this.hometown + ' that was established in ' + 
			this.established.getFullYear() + '.  The ' + this.numberOnTeam + 
			' players practice at ' + this.homefield +	' and compete in ' 
			+ this.nationalGoverningBody + ' competitions.  ' +
			'They have achieved ' + this.achievement1 + 
			' under the previous coach '+ this.previousCoach + ', and ' 
			+ this.achievement2 + ' under the current coach ' + 
			this.currentCoach + '.'	)
	}

}

minneapolisMarauders.printPretty();
/*   The Minneapolis Marauders is a Joggling team from Minneapolis that was 
established in 2000.  The 500 players practice at Lake Nokomis Park and 
compete in US Joggling competitions.  They have achieved third place in 
Division in 2003 under the previous coach Nick Fury, and second place Overall 
in 2007 under the current coach Peggy Carter.  */

function Team(teamName, sport, established, numberOnTeam, homefield, hometown,
				nationalGoverningBody, achievement1, achievement2, currentCoach,
				previousCoach)  {
	this.teamName = teamName;
	this.sport = sport;
	this.established = established;
	this.numberOnTeam = numberOnTeam;
	this.homefield = homefield;
	this.hometown = hometown;
	this.nationalGoverningBody = nationalGoverningBody;
	this.achievement1 = achievement1;
	this.achievement2 = achievement2;
	this.currentCoach = currentCoach;
	this.previousCoach = previousCoach;
	this.printNice = function () {
			console.log('The '+ this.teamName + ' team is great!');
	}
}

Team.prototype.printReallyNice = function () {
	console.log('The ' + this.teamName + ' is a ' + this.sport + 
	' team from ' + this.hometown + ' that was established in ' + 
	this.established.getFullYear() + '!  The ' + this.numberOnTeam + 
	' players practice at ' + this.homefield +	' and compete in ' 
	+ this.nationalGoverningBody + ' competitions!  ' +
	'They have achieved ' + this.achievement1 + 
	' under the previous coach '+ this.previousCoach + ', and ' 
	+ this.achievement2 + ' under the current coach ' + 
	this.currentCoach + '!!!'	)
}

var KansasKapitals = new Team("Kansas Kapitals", "Frisbee", new Date('1/1/1999'), 1, 
					'Kansas City', 'Nationall Frisbee League',
					'never won a game', 'smallest team in league history',
					'Kirby', 'Sandy');

KansasKapitals.printNice();
KansasKapitals.printReallyNice();


