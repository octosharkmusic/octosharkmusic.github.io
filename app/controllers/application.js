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
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var loader = new THREE.TextureLoader();
    var clothTexture = loader.load( '/assets/images/octoshark-logo-black.png' );
    var clothMaterial = new THREE.MeshBasicMaterial({ map: clothTexture });
    var cube = new THREE.Mesh(geometry,clothMaterial);
    this.scene.add(cube);
    this.camera.position.set(2,2,2);
    this.camera.lookAt(cube.position);
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
  }
});
