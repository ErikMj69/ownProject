/* * * * * * * * * * * * * * * * * * * * * * * * *  FSSCRIPT.JS  * * * * * * * * * * * * * * * * * * * * * * * * */

var _ = function( Element ) {

  this._ = function() {
    return document.getElementById( Element );
  }
  
  this.$ = this._();

  // CORE FUNCTIONS
    this.append = function( Obj ) {
      this.$.appendChild( Obj );
    }

  // EVENTS
    this.load = function( Code ) {
      window.addEventListener( 'load', function() {
        try {
          Code();
        } catch( Exception ) {
          console.log( Exception );
        }
      });
    } // ENDS LOAD

    this.click = function( CODE ) {
      this.$.onclick = function() {
        CODE();
      }
    } // ENDS CLICK
    
    this.mouseover = function( CODE ) {
      this.$.onmouseover = function() {
        CODE();
      }
    } // ENDS MOUSEOVER

  // DESIGN AND ANIMATION
  this.css = function( STYLE ) {
    for( stl in STYLE ) {
      this.$.style[ stl ] = STYLE[ stl ];
    }
  } // ENDS CSS

  this.animate = {

    // VARIABLES DEFINITION
    it : this.$,
    timer : 0,
    counter: 0,

    // FUNCTIONS DEFINITION

    // move( 'x', 200, 300, 20, 2000 );
    move : function( Direction, From, To, Step, Time ) {

      it = this.it;

      func = function() {
        From += ( Step );
        console.log( From );
        switch( Direction ) {
          case 'x':
            it.style.left = From + "px";
            break;
          case 'y':
            it.style.top = From + "px";
            break;
        }
        if( From + ( Step ) == To )
          clearInterval( timer );
      }

      timer = setInterval( func, Time * 1000 );


    } // ENDS FUNCTION MOVE

  } // ENDS ANIMATE

}

function $( Element ) {
  return new _( Element );
}
