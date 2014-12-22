/* * * * * * * * * * * * * * * * * * * * * * * * *  EBMAIN.JS  * * * * * * * * * * * * * * * * * * * * * * * * */

$( document ).load(function() {

  // OBJECT DEFINITION
  bird = {
    axisX : 200,
    axisY : 200,
    lives : 3
  }
  
  enemy = {
    axisX : 500,
    axisY : 400
  }
  
  timer = new Array( 5 );
  
  i = 0;
  block = new Array( 50 );

  // EVENTS FOR BEGIN BUTTON
    $( 'beginButton' ).click( function() {
      $( 'mainMenuLayer' ).css({
        display : 'none'
      });
    });
    
    $( 'beginButton' ).mouseover( function() {
      
    });

  // RUNTIME EVENTS
    generateBlocks = function() {
      block[ i ] = enemy;
      it = block[ i ];
      j = i;
      function genBlock() {
        j += 1;
        it.obj = document.createElement( 'div' );
        it.obj.className = "blockElem";
        it.obj.id = "blockElem" + j;
        $( 'slideArea' ).append( it.obj );
        moveBlocks();
      }
      
      timer[ 0 ] = setInterval(genBlock, 15000);
    }
    
    moveBlocks = function() {
      i += 1;
      $( 'blockElem' + i ).animate.move( 'x', 600, 0, -10, 0.5 );
    }

  // RUNTIME EXECUTION
//  $( 'beginButton' ).animate.move( 'x', 200, 300, 20, 2000 );
    generateBlocks();
//    moveBlocks();

});
