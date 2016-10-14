
{
	let myName = "Ryan";
}
// console.log( myName );

for ( let i = 0; i < 10; i++ ) {

}
// console.log( i );

const mentor = {
	  name: "dontavious"
	, goingToLoseThisWeek: true
};

mentor.goingToLoseThisWeek = false;





const dontaviousFullName = `${ mentor.name } sanders`;
// var dontaviousFullName = mentor.name + " sanders";
const twoSquared = `${ 2 * 2 }`;

const myMultiline = `hello
I am 
multiline`;
// console.log( myMultiline );


function makePerson( name, job ) {
	const person = {
		  name // name: name
		, job // job: job
		, id: 1
		, greeting() {
			return `Hello I'm ${ this.name }`;
		}
	};
}

const myDynamicProp = "test";
const myObject = {
	[ myDynamicProp ]: "some value"
};
// myObject[ myDynamicProp ] = "some value";

const library = {
	createDateFromString() {
		return "";
	}

	, convertDateToString() {
		return "";
	}
};

const { createDateFromString, convertDateToString } = library;


const mentors = [ "Dontavious", "Joe" ];

const [ firstMentor, secondMentor ] = mentors;

console.log( mentors );
// console.log.apply( this, mentors );
// console.log( ...mentors );

const dm4Mentors = [ "Taryn", ...mentors ];
// console.log( dm4Mentors );

function greetPerson( name = "stranger" ) {
	// if ( name === undefined ) {
	// 	name = "stranger";
	// }
	console.log( `Hello there ${ name }!` );
}
greetPerson();
greetPerson( undefined );

greetPerson( "Dontavious" );
greetPerson( false );

function unknownArgs( firstParam, secondParam, ...args ) {
	console.log( firstParam, secondParam );
	console.log( args );
}
// unknownArgs( 1, 2, 3, 4, 5, 6 );

dm4Mentors.forEach( ( mentor, index ) => console.log( mentor ) );

// dm4Mentors.filter( function( mentor ) {
// 	return mentor !== "dontavious";
// } );

dm4Mentors.filter( mentor => mentor !== "dontavious" );
// dm4Mentors.forEach( function( mentor ) {
// 	console.log( mentor );
// } );

// const logHello = () => console.log( "hello" );
function logHello() {
	console.log( "Hello" );
}
// var logHello = function() {
// 	console.log( "hello" );
// }
angular.module( "app" )
.controller( "homeCtrl", $scope => {

} );