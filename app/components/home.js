import Component from '@ember/component';
import THREE from 'three';

var reverse = true;
var rand = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);

var time = 0;
var DEGTORAD = 0.01745327;
var temp = new THREE.Vector3;
var mouse = new THREE.Vector2(), INTERSECTED;
var raycaster;
var click = false;

export default Component.extend({

  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,500),
  renderera:  new THREE.WebGLRenderer(),
  goal: new THREE.Object3D,

  init: function() {
    this._super(...arguments);
    this.renderera.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderera.domElement);
    this.renderPreloader();
  },
  renderPreloader:function() {
    var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );

    var loader = new THREE.TextureLoader();

    var clothTexture1 = loader.load( '/assets/images/octoshark-logo-black.png' );
    var clothMaterial1 = new THREE.MeshBasicMaterial({ map: clothTexture1 });
    var cube1 = new THREE.Mesh(geometry1,clothMaterial1);
    cube1.name = 'cube1';

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 6 ).normalize();
    this.scene.add( light );

    this.scene.add(this.goal);
    this.scene.add(cube1);

    this.goal.position.set(3, 2, -1);
    this.camera.position.set(3,3,4);
    this.camera.lookAt(cube1.position);

    raycaster = new THREE.Raycaster();
    this.renderera.setPixelRatio( window.devicePixelRatio );

    document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
    document.addEventListener( 'click', this.onDocumentMouseClick, false );
    //
    window.addEventListener( 'resize', this.onWindowResize, false );

    this.renderera.render(this.scene,this.camera);

    this.renderLoop();
  },

  onWindowResize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  },
  onDocumentMouseMove: function ( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  },
  onDocumentMouseClick: function ( event ) {
    event.preventDefault();
    click = true
  },

  renderLoop: function() {
    requestAnimationFrame(() => {this.renderLoop()});

    let cube = this.scene.getObjectByName( "cube1" );
    if (cube.rotation.x > 10) {
      rand = Math.floor(Math.random() * 10);
    }

    cube.translateZ(0.001);

    temp.setFromMatrixPosition(this.goal.matrixWorld);

    this.camera.position.lerp(temp, 0.1);
    this.camera.lookAt( cube.position );

    cube.rotation.x += 0.0011+(rand/2000);
    cube.rotation.y += 0.0021+(rand/2000);

    // find intersections
    raycaster.setFromCamera( mouse, this.camera );
    var intersects = raycaster.intersectObjects( this.scene.children );
    if ( intersects.length > 0 ) {
      if ( INTERSECTED != intersects[ 0 ].object ) {
        cube.rotation.x += 0.03
        cube.rotation.y += 0.03

        if (click) {
          this.goal.position.set(2, 2, -1);
          this.camera.position.set(0,0,0);
          cube.translateZ(0.001);

          temp.setFromMatrixPosition(this.goal.matrixWorld);

          this.camera.position.lerp(temp, 0.2);
          this.camera.lookAt( cube.position );
          click = false
        }
      }
    } else {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = null;
      cube.rotation.x -= 0.011+(rand/2000);
      cube.rotation.y -= 0.021+(rand/2000);
    }

    this.renderera.render(this.scene,this.camera);
  },
});
