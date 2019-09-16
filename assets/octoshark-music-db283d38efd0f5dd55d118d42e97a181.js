"use strict"
define("octoshark-music/adapters/application",["exports","emberfire/adapters/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.extend({})
e.default=i}),define("octoshark-music/app",["exports","octoshark-music/resolver","ember-load-initializers","octoshark-music/config/environment"],function(e,t,i,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,i.default)(a,r.default.modulePrefix)
var o=a
e.default=o}),define("octoshark-music/controllers/application",["exports","three"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=!0,r=Ember.Controller.extend({scene:new t.default.Scene,camera:new t.default.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,500),renderer:new t.default.WebGLRenderer,init:function(){this._super.apply(this,arguments),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.renderPreloader()},renderPreloader:function(){var e=new t.default.BoxGeometry(1,1,1),i=(new t.default.TextureLoader).load("/assets/images/octoshark-logo-black-b3021127c20742d248058171c4edc43d.png"),r=new t.default.MeshBasicMaterial({map:i}),a=new t.default.Mesh(e,r)
this.scene.add(a),this.camera.position.set(2,2,2),this.camera.lookAt(a.position),this.renderer.render(this.scene,this.camera),this.renderLoop()},renderLoop:function(){var e=this
requestAnimationFrame(function(){e.renderLoop()}),this.scene.rotation.x+=.05,this.scene.rotation.y+=.02,this.camera.position.x>4&&(i=!0),this.camera.position.x<-1&&(i=!1),i?(this.camera.position.x=this.camera.position.x-.01,this.camera.rotation.y-=.006):(this.camera.position.x=this.camera.position.x+.01,this.camera.rotation.y+=.006),this.renderer.render(this.scene,this.camera)}})
e.default=r}),define("octoshark-music/helpers/app-version",["exports","octoshark-music/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,o=r.versionOnly||r.hideSha,n=r.shaOnly||r.hideVersion,s=null
return o&&(r.showExtended&&(s=a.match(i.versionExtendedRegExp)),s||(s=a.match(i.versionRegExp))),n&&(s=a.match(i.shaRegExp)),s?s[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var a=Ember.Helper.helper(r)
e.default=a}),define("octoshark-music/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","octoshark-music/config/environment"],function(e,t,i){var r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(r=i.default.APP.name,a=i.default.APP.version)
var o={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=o}),define("octoshark-music/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("octoshark-music/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("octoshark-music/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/initializers/export-application-global",["exports","octoshark-music/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),i[r]||(i[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var r={name:"export-application-global",initialize:i}
e.default=r}),define("octoshark-music/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("octoshark-music/models/events",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.Model.extend({})
e.default=i}),define("octoshark-music/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/router",["exports","octoshark-music/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("events")})
var r=i
e.default=r}),define("octoshark-music/routes/events",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("events")}})
e.default=t}),define("octoshark-music/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/services/firebase",["exports","emberfire/services/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"0Yp0AL7K",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"octoshark-music/templates/application.hbs"}})
e.default=t}),define("octoshark-music/templates/events",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"GQEjzYn/",block:'{"symbols":[],"statements":[[7,"div",true],[8],[1,[22,"events"],false],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"octoshark-music/templates/events.hbs"}})
e.default=t}),define("octoshark-music/torii-providers/firebase",["exports","emberfire/torii-providers/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/config/environment",[],function(){try{var e="octoshark-music/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("octoshark-music/app").default.create({name:"octoshark-music",version:"0.0.0+0cd4f294"})
