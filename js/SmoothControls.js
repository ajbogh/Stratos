/**
 * @author ajbogh / http://allanbogh.com/
 */

THREE.SmoothControls = function ( object, domElement ) {
	this.object = object; //The object which should be controlled
	this.target = new THREE.Vector3( 0, 0, 0 );
	
	this.domElement = ( domElement !== undefined ) ? domElement : document;
	
	this.velocityX = 0;
	this.velocityY = 0;
	this.velocityZ = 0;
	
	this.keyArrayMap = {}; //contains all keys that are pressed
	
	if ( this.domElement !== document )	this.domElement.setAttribute( 'tabindex', -1 );
	
	//call when the window is resized
	this.handleResize = function () {
		if ( this.domElement === document ) {
			this.viewHalfX = window.innerWidth / 2;
			this.viewHalfY = window.innerHeight / 2;
		} else {
			this.viewHalfX = this.domElement.offsetWidth / 2;
			this.viewHalfY = this.domElement.offsetHeight / 2;
		}
	};
	
	
	this.onKeyDown = function ( event ) {
		//fallthrough switch statement. 
		//any of the following keys will be tracked, others won't.
		switch ( event.keyCode ) {
			case 38: /*up*/
			case 87: /*W*/ 
		
			case 37: /*left*/
			case 65: /*A*/ 

			case 40: /*down*/
			case 83: /*S*/ 

			case 39: /*right*/
			case 68: /*D*/ 

			case 82: /*R*/ 
			case 70: /*F*/ 

			case 81: /*Q*/ this.keyArrayMap["key_"+event.keyCode] = true;
		}
	};
	this.onKeyUp = function ( event ) {
		switch ( event.keyCode ) {
			case 38: /*up*/
			case 87: /*W*/ 
		
			case 37: /*left*/
			case 65: /*A*/ 

			case 40: /*down*/
			case 83: /*S*/ 

			case 39: /*right*/
			case 68: /*D*/ 

			case 82: /*R*/ 
			case 70: /*F*/ 

			case 81: /*Q*/ this.keyArrayMap["key_"+event.keyCode] = false;
		}
	}
	this.onMouseMove = function ( event ) {
		console.log(event.keyCode);
	}
	this.onMouseDown = function ( event ) {
		console.log(event.keyCode);
	}
	this.onMouseUp = function ( event ) {
		console.log(event.keyCode);
	}
	
	
	this.update = function( delta ) {
		//use the object's size (mass) and power to determine acceleration
		//delta represents an interval, usually 1.
		//max speed is equivalent for all objects
		if(typeof this.keyArrayMap["key_38"] != "undefined" && this.keyArrayMap["key_38"] === true){
			//increase Y velocity
			this.velocityZ -= 0.1;
		}
		if(typeof this.keyArrayMap["key_40"] != "undefined" && this.keyArrayMap["key_40"] === true){
			//decrease Y velocity
			this.velocityZ += 0.1;
		}
		if(typeof this.keyArrayMap["key_37"] != "undefined" && this.keyArrayMap["key_37"] === true){
			//decrease X velocity
			this.velocityX -= 0.1;
		}
		if(typeof this.keyArrayMap["key_39"] != "undefined" && this.keyArrayMap["key_39"] === true){
			//increase X velocity
			this.velocityX += 0.1;
		}
		if(typeof this.keyArrayMap["key_82"] != "undefined" && this.keyArrayMap["key_82"] === true){
			//increase Z velocity
			this.velocityY += 0.1;
		}
		if(typeof this.keyArrayMap["key_70"] != "undefined" && this.keyArrayMap["key_70"] === true){
			//decrease Z velocity
			this.velocityY -= 0.1;
		}
		
		this.object.translateX( this.velocityX );
		this.object.translateY( this.velocityY );
		this.object.translateZ( this.velocityZ );
		
		var targetPosition = this.target,
			position = this.object.position;
			
		targetPosition.x = position.x;
		targetPosition.y = position.y + 100;
		targetPosition.z = position.z;
		
		//this.object.lookAt( targetPosition );
	}
	
	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

	this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
	this.domElement.addEventListener( 'mousedown', bind( this, this.onMouseDown ), false );
	this.domElement.addEventListener( 'mouseup', bind( this, this.onMouseUp ), false );
	this.domElement.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
	this.domElement.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );

	function bind( scope, fn ) {
		return function () {
			fn.apply( scope, arguments );
		};
	};

	this.handleResize();
}