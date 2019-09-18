import Controller from 'ember';
import THREE from 'three';



var reverse = true;
var rand = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);

var time = 0;
var DEGTORAD = 0.01745327;
var temp = new THREE.Vector3;

export default Controller.Controller.extend({


  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,500),
  renderer:  new THREE.WebGLRenderer(),
  goal: new THREE.Object3D,

  init: function() {
      this._super(...arguments);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderPreloader();
    },
  renderPreloader:function() {
    var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
    var geometry2 = new THREE.BoxGeometry( 1, 2.5, 1 );
    var geometry3 = new THREE.BoxGeometry( 2, 2, 2 );
    var geometry4 = new THREE.BoxGeometry( 3, 1.5, 1.5 );


    var loader = new THREE.TextureLoader();

    var clothTexture1 = loader.load( '/assets/images/octoshark-logo-black.png' );
    var clothTexture2 = loader.load( '/assets/images/tribunion-01-2020.jpg' );
    var clothTexture3 = loader.load( '/assets/images/tribunion-02-2019.jpg' );
    var clothTexture4 = loader.load( '/assets/images/tribunion-07-2019.jpg' );
    var clothTexture5 = loader.load( '/assets/images/game-over-01-2018.jpg' );
    var clothTexture6 = loader.load( '/assets/images/global-hybrid-06-2019.jpg' );
    var clothTexture7 = loader.load( '/assets/images/clito-night-02-2018.jpg' );
    var clothTexture8 = loader.load( '/assets/images/100pap-12-2018.jpg' );
    var clothTexture9 = loader.load( '/assets/images/party-of-k-04-2019.jpg' );
    var clothMaterial1 = new THREE.MeshBasicMaterial({ map: clothTexture1 });
    var clothMaterial2 = new THREE.MeshBasicMaterial({ map: clothTexture2 });
    var clothMaterial3 = new THREE.MeshBasicMaterial({ map: clothTexture3 });
    var clothMaterial4 = new THREE.MeshBasicMaterial({ map: clothTexture4 });
    var clothMaterial5 = new THREE.MeshBasicMaterial({ map: clothTexture5 });
    var clothMaterial6 = new THREE.MeshBasicMaterial({ map: clothTexture6 });
    var clothMaterial7 = new THREE.MeshBasicMaterial({ map: clothTexture7 });
    var clothMaterial8 = new THREE.MeshBasicMaterial({ map: clothTexture8 });
    var clothMaterial9 = new THREE.MeshBasicMaterial({ map: clothTexture9 });
    var cube1 = new THREE.Mesh(geometry1,clothMaterial1);
    var cube2 = new THREE.Mesh(geometry2,clothMaterial2);
    var cube3 = new THREE.Mesh(geometry3,clothMaterial3);
    var cube4 = new THREE.Mesh(geometry4,clothMaterial4);
    var cube5 = new THREE.Mesh(geometry4,clothMaterial5);
    var cube6 = new THREE.Mesh(geometry4,clothMaterial6);
    var cube7 = new THREE.Mesh(geometry4,clothMaterial7);
    var cube8 = new THREE.Mesh(geometry4,clothMaterial8);
    var cube9 = new THREE.Mesh(geometry4,clothMaterial9);
    cube1.name = 'cube1';
    cube2.name = 'cube2';
    cube3.name = 'cube3';
    cube4.name = 'cube4';
    cube5.name = 'cube5';
    cube6.name = 'cube6';
    cube7.name = 'cube7';
    cube8.name = 'cube8';
    cube9.name = 'cube9';
    cube2.position.set(2,3,-1.5)
    cube3.position.set(1,-4,1.5)
    cube4.position.set(-4,1,2)
    cube5.position.set(-2,4,-1.5)
    cube6.position.set(3,-1,-1.5)
    cube7.position.set(3,-1,2)
    cube8.position.set(-3,-1,-2)
    cube9.position.set(3,2,4)


    this.scene.add(this.goal);
    this.scene.add(cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9);

    this.goal.position.set(0, 2, -2);
    this.camera.position.set(3,3,4+rand);
    this.camera.lookAt(cube1.position);

    this.renderer.render(this.scene,this.camera);


    // var composer = new EffectComposer( this.renderer );
    //
    // var afterimagePass = new AfterimagePass();
    //
    // var gui = new GUI( { name: 'Damp setting' } );
    //
    //
    // composer.addPass( new RenderPass( this.scene, this.camera ) );
    // composer.addPass( afterimagePass );
    //
    // gui.add( afterimagePass.uniforms[ "damp" ], 'value', 0, 1 ).step( 0.001 );
    // gui.add( this.params, 'enable' );

    this.renderLoop();
  },
  renderLoop: function() {
    requestAnimationFrame(() => {this.renderLoop()});


    this.scene.rotation.x += 0.005+(rand/2000);
    this.scene.rotation.y += 0.002+(rand2/2000);

    let cube = this.scene.getObjectByName( "cube1" );
    let cube2 = this.scene.getObjectByName( "cube2" );
    let cube3 = this.scene.getObjectByName( "cube3" );
    let cube8 = this.scene.getObjectByName( "cube8" );
    let cube6 = this.scene.getObjectByName( "cube6" );
    let cube7 = this.scene.getObjectByName( "cube7" );
    let cube5 = this.scene.getObjectByName( "cube5" );
    let cube4 = this.scene.getObjectByName( "cube4" );
    let cube9 = this.scene.getObjectByName( "cube9" );
    if (cube.rotation.x > 10) {
      rand = Math.floor(Math.random() * 10);

      cube.rotateY( Math.random() * 360 * DEGTORAD);
    }


    time += 0.001;
    cube.translateZ(0.01+(rand/1000));

    temp.setFromMatrixPosition(this.goal.matrixWorld);

    this.camera.position.lerp(temp, 0.2);
    this.camera.lookAt( cube.position );

    cube.rotation.x += 0.011+(rand/2000);
    cube.rotation.y += 0.021+(rand/2000);
    if (this.camera.position.x > 1) {
      reverse = true;
    }
    if (this.camera.position.x < -1) {
      reverse = false;
    }
    if (!reverse) {
      this.camera.position.x = this.camera.position.x+0.01;
      this.camera.rotation.y += 0.006;
      cube8.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube8.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube6.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube6.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube7.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube7.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube4.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube4.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube5.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube5.rotation.y += (0.011-(this.camera.position.x/1000))/time;

      cube2.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube2.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube3.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube3.rotation.y += (0.011-(this.camera.position.x/1000))/time;
      cube9.rotation.x += (0.011-(this.camera.position.x/1000))/time;
      cube9.rotation.y += (0.011-(this.camera.position.x/1000))/time;
    } else {
      this.camera.position.x = this.camera.position.x-0.01;
      this.camera.rotation.y -= 0.006;
      cube8.rotation.x += (0.011+(this.camera.position.x/1000))/time;
      cube8.rotation.y += (0.011+(this.camera.position.x/1000))/time;
      cube6.rotation.x += (0.011+(this.camera.position.x/1000))/time;
      cube6.rotation.y += (0.011+(this.camera.position.x/1000))/time;
      cube7.rotation.x += (0.011+(this.camera.position.x/1000))/time;
      cube7.rotation.y += (0.011+(this.camera.position.x/1000))/time;
      cube4.rotation.x += (0.011+(this.camera.position.x/1000))/time;
      cube4.rotation.y += (0.011+(this.camera.position.x/1000))/time;
      cube5.rotation.x += (0.011+(this.camera.position.x/1000))/time;
      cube5.rotation.y += (0.011+(this.camera.position.x/1000))/time;

      cube2.rotation.x -= (0.011-(this.camera.position.x/1000))/time;
      cube2.rotation.y -= (0.011-(this.camera.position.x/1000))/time;
      cube3.rotation.x -= (0.011-(this.camera.position.x/1000))/time;
      cube3.rotation.y -= (0.011-(this.camera.position.x/1000))/time;
      cube9.rotation.x -= (0.011-(this.camera.position.x/1000))/time;
      cube9.rotation.y -= (0.011-(this.camera.position.x/1000))/time;
    }
    this.renderer.render(this.scene,this.camera);
  },
});
