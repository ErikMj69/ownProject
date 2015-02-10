 /* * * * * * * * * * * * * * * * * * * * *  JMAIN.JS  * * * * * * * * * * * * * * * * * * * * */

$( document ).load( function() {

  // CLASS GAME
  game = {

    score : 0,
    speed : 15,
    status : false,
    timer : [],
    
    genBlockSpeed: 4500,
    birdFallSpeed : 40

  }

  // CLASS BIRD
  bird = {

    x : 176,
    y : 276
    
  }
  
  // CLASS BLOCK
  block = function() {};
  
  block.prototype = {
  
    className : 'block',
    id : '',
    x : 400,
    y : 0,
    style : {
      top : this.y + "px",
      left : this.x + "px"
    }
    
  }

  // GAME'S FUNCTIONS
  function resetAll() {
    game.score = 0;
  }

  function gameOver() {
    game.status = false;
    for( timerI in game.timer ) {
      clearInterval( game.timer[ timerI ] );
    }
  }
  
  // BIRD'S FUNCTIONS
  function fall_Effect() {
    game.timer[ "fallEffect" ] = setInterval( move_Down, game.birdFallSpeed );
  }
  
  function move_Down() {
    if( bird.y < 552 )
      $( 'bird' ).move( bird.x, bird.y += 5 );
    else
      gameOver();
  }
  
  function move_Up() {
    if( ( bird.y > 0 ) && ( bird.y < 552 ) )
      $( 'bird' ).move( bird.x, bird.y -= 50 );
    else
      gameOver();
  }
  // END BIRD'S FUNCTIONS
  
  // BLOCK'S FUNCTIONS
  var b = [];
  var i = 0;
  
  game.timer[ "genBlocks" ] = setInterval( function() {

    var j = i;

    // CREATE AND APPEND BLOCKS
    b[ j ] = new block();
    b[ j + 1 ] = new block();
    b[ j ].id = 'b' + i;
    b[ j + 1 ].id = 'b' + ( i + 1 );
    $( 'middleArea' ).createAndAppend( 'div', b[ j ] );
    $( 'middleArea' ).createAndAppend( 'div', b[ j + 1 ] );

    // DEFINE BLOCKS' LOCATION
    b[ j ].y = ( Math.floor( Math.random() * ( 550 - 130 + 1 ) ) + 150 ) * -1;
    b[ j + 1 ].y = b[ j ].y + 730;

    // MOVE BLOCKS
    game.timer[ "genBlock" + j ] = setInterval( function() {
    
      // ASSIGN THE BLOCK'S COUNTER
      var k = j;
      
      // DETECT COLLISION
      if(( ( bird.x + 48 ) >= b[ k ].x && ( bird.x + 48 ) <= b[ k ].x + 100 ) && ( bird.y <= ( b[ k ].y + 600 ) || ( bird.y + 48 ) >= b[ k + 1 ].y ))
        gameOver();
      else if(( bird.x > ( b[ k ].x + 100 ) )) {// && ( bird.y <= ( b[ k ].y + 600 ) || ( bird.y + 48 ) >= b[ k + 1 ].y )) {
        game.score = Math.round( k / 2 ) + 1;
        $( 'score' ).text( game.score );
      }
      
      // ERASE THE BLOCK WHEN IT GETS AT POINT -100 IN AXIS X
      if( b[ k ].x !== -100 ) {
        $( b[ k ].id ).move( b[ k ].x -= 1, b[ k ].y );
        $( b[ k + 1 ].id ).move( b[ k + 1 ].x -= 1, b[ k + 1 ].y );
      } else {
        clearInterval( game.timer[ "genBlock" + k ] );
        $( 'middleArea' ).remove( $( b[ k ].id ).who() );
        $( 'middleArea' ).remove( $( b[ k + 1 ].id ).who() );
      }
      
    }, game.speed );

    // INCREMENT OF I
    i += 2;
    
  }, game.genBlockSpeed);  
  // END BLOCK'S FUNCTIONS

  // EVENT HANDLING
  $( 'topArea' ).click( function() {
    if( game.status )
      move_Up();
  });
  
  // BEGINNING 
  fall_Effect();
  game.status = true;

});