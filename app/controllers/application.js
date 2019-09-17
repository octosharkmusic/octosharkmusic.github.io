import Controller from 'ember';
import THREE from 'three';

var reverse = true;

export default Controller.Controller.extend({


  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,500),
  renderer:  new THREE.WebGLRenderer(),

  init: function() {
      this._super(...arguments);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderPreloader();
    },
  renderPreloader:function() {
    var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
    var geometry2 = new THREE.BoxGeometry( 2, 2, 2 );
    var loader = new THREE.TextureLoader();
    var clothTexture1 = loader.load( '/assets/images/octoshark-logo-black.png' );
    var clothTexture2 = loader.load( '/assets/images/tribunion-01-2020.jpg' );
    var clothMaterial1 = new THREE.MeshBasicMaterial({ map: clothTexture1 });
    var clothMaterial2 = new THREE.MeshBasicMaterial({ map: clothTexture2 });
    var cube1 = new THREE.Mesh(geometry1,clothMaterial1);
    var cube2 = new THREE.Mesh(geometry2,clothMaterial2);
    cube2.position.set(3,3,3)
    this.scene.add(cube1,cube2);
    this.camera.position.set(2,2,6);
    this.camera.lookAt(cube1.position);
    this.renderer.render(this.scene,this.camera);
    this.renderLoop();
  },
  renderLoop: function() {
    requestAnimationFrame(() => {this.renderLoop()});
    this.scene.rotation.x += 0.05;
    this.scene.rotation.y += 0.02;
    if (this.camera.position.x > 4) {
      reverse = true;
    }
    if (this.camera.position.x < -1) {
      reverse = false;
    }
    if (!reverse) {
      this.camera.position.x = this.camera.position.x+0.01;
      this.camera.rotation.y += 0.006;
    } else {
      this.camera.position.x = this.camera.position.x-0.01;
      this.camera.rotation.y -= 0.006;
    }
    this.renderer.render(this.scene,this.camera);
  },
});
