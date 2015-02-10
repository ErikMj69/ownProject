/* * * * * * * * * * * * * * * * * * * * * * * * *  JSITH.JS  * * * * * * * * * * * * * * * * * * * * * * * * */

// OBJECT JSITH'S FUNCTIONS

  // FUNCTIONS OF CONTROL
  function _createAndAppend( Obj, Properties ) {
    var temp = document.createElement( Obj );
    for( prop in Properties ) {
      temp[ prop ] = Properties[ prop ];
    }
    this.$.appendChild( temp );
    return temp;
  }

  function _append( Obj ) {
    this.$.appendChild( Obj );
  }

  function _remove( Obj ) {
    this.$.removeChild( Obj );
  }

  function _text( Str ) {
    this.$.textContent = Str;
  }

  function _html( Code ) {
    this.$.innerHTML += Code;
  }

  function _who() {
    return this.$;
  }

  // FUNCTIONS OF EVENTS
  function _load( Code ) {
    if( typeof Code === 'function' ) {
      window.addEventListener( 'load', function() {
        try {
          Code();
        } catch( Exception ) {
          console.log( Exception );
        }
      });
    } else {
      console.log( "Error: Load function's argument isn't a function" );
    }
  } // END _LOAD'S FUNCTION

  function _click( Code ) {
    this.$.onclick = function() {
        Code();
    }
  } // END _CLICK'S FUNCTION

  function _mouseover( Code ) {
    this.$.onmouseover = function() {
        Code();
    }
  }

  // FUNCTIONS OF STYLE AND ANIMATION
  function _css( Style ) {
    for( stl in Style )
      this.$.style[ stl ] = Style[ stl ];
  } // END _CSS'S FUNCTION

  function _move( x, y ) {
    with( this ) {
      $.style.top = y + "px";
      $.style.left = x + "px";
    }
  } // END _MOVE'S FUNCTION


// OBJECT JSITH'S DECLARISON
  jSith.prototype = {
    // VARIABLES
    
    // CONTROL
    createAndAppend : _createAndAppend,
    append : _append,
    remove : _remove,
    text : _text,
    html : _html,
    who : _who,
    
    // EVENTS
    load : _load,
    click : _click,
    mouseover : _mouseover,
    
    // STYLE AND ANIMATION
    css : _css,
    move : _move
  }
  
  function jSith( Obj ) {
    if( typeof Obj === 'string' ) 
      this.$ = document.getElementById( Obj );
    if( typeof Obj === 'object' )
      this.$ = Obj;
  }


// FUNCTION TO CALL OBJECT JSITH
  var $ = function( Obj ) {
    return new jSith( Obj );
  }