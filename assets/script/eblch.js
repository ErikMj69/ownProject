/* * * * * * * * * * * * * * * * * * * * * * * * *  EBLCH.JS  * * * * * * * * * * * * * * * * * * * * * * * * */

var i = -1;
var j = 0;
var AXIS_X = 650;
var AXIS_Y = 196;
var TIMIN;
var TIMIN_T;
var BLOCK = new Array( 10 );
var SCORE = 0;

//function $( ID ) { return document.getElementById( ID ); }

/*function movinBird() {
  AXIS_Y += 1;
  $( 'bird' ).style.top = AXIS_Y + "px";
  if( ( AXIS_Y <= 0 ) || ( AXIS_Y >= 368 ) ) losinMenu();
}

function movinBlock() {
  AXIS_X -= 10;
  BLOCK[ i ].style.left = AXIS_X + "px";
  BLOCK[ j ].style.left = AXIS_X + "px";
  SCORE += 0.1;
}

function losinMenu() {
  clearInterval( TIMIN );
  clearInterval( TIMIN_T );
  $( 'mainMenuLayer' ).style.display = "block";
  alert( "TU PUNTAJE ES: " + Math.round( SCORE ) );
}

function blockGenerator() {
  i += 1;
  j += 1;
  BLOCK[ i ] = document.createElement( "div" );
  BLOCK[ i ].className = "blockElem";
  $( 'slideArea' ).appendChild( BLOCK[ i ] );
  BLOCK[ j ] = document.createElement( "div" );
  BLOCK[ j ].className = "blockElem2";
  $( 'slideArea' ).appendChild( BLOCK[ j ] );
  TIMIN_T = setInterval( movinBlock, 200 );
}
*/
function startGame() {
//  AXIS_Y = 184;
//  $( 'bird' ).style.top = "184px";
//  blockGenerator();
  alert();
}

$( 'beginButton' ).click(function() {
//  $( 'mainMenuLayer' ).style.display = "none";
  startGame();
//  TIMIN = setInterval( movinBird, 10 );
});

$( 'topLayer' ).onclick = function() {
  AXIS_Y -= 20;
  $( 'bird' ).style.top = AXIS_Y + "px";
}

/*

var core = {

  // GAME'S ELEMENTS
  bird : new Object(),

  // ANIMATION VARIABLE
  blockONumber : 0,
  blockINumber : 0,
  axisX = 700,
  axisY = 196,

  // PUNTUATION VARIABLE
  score = 0,

  // FUNCTION DECLARATION
  startGame : function() {

  },

  losinGame : function {

  }

}

var launcher = {

  

}

*/
