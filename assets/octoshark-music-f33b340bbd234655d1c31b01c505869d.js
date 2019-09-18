"use strict"
define("octoshark-music/adapters/application",["exports","emberfire/adapters/firestore"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default.extend({enablePersistence:!0,persistenceSettings:{synchronizeTabs:!0}})
e.default=o}),define("octoshark-music/app",["exports","octoshark-music/resolver","ember-load-initializers","octoshark-music/config/environment"],function(e,t,o,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,o.default)(i,r.default.modulePrefix)
var n=i
e.default=n}),define("octoshark-music/authenticators/firebase",["exports","emberfire/authenticators/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/controllers/application",["exports","three"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=!0,r=Math.floor(10*Math.random()),i=Math.floor(10*Math.random()),n=0,a=new t.default.Vector3,s=Ember.Controller.extend({scene:new t.default.Scene,camera:new t.default.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,500),renderer:new t.default.WebGLRenderer,goal:new t.default.Object3D,init:function(){this._super.apply(this,arguments),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.renderPreloader()},renderPreloader:function(){var e=new t.default.BoxGeometry(1,1,1),o=new t.default.BoxGeometry(1,2.5,1),i=new t.default.BoxGeometry(2,2,2),n=new t.default.BoxGeometry(3,1.5,1.5),a=new t.default.TextureLoader,s=a.load("/assets/images/octoshark-logo-black-b3021127c20742d248058171c4edc43d.png"),u=a.load("/assets/images/tribunion-01-2020-c4b3fb5d9a1544c7ee3bd17625cd4b04.jpg"),l=a.load("/assets/images/tribunion-02-2019-ebf5939ba5407d333db7586e6003205e.jpg"),d=a.load("/assets/images/tribunion-07-2019-d71197d88155489d163794311733fcaa.jpg"),c=a.load("/assets/images/game-over-01-2018-f80137a7d7ad4116765c0ed0aa61c8cd.jpg"),f=a.load("/assets/images/global-hybrid-06-2019-c41abd70bd79d38b83175bb0debe00fc.jpg"),m=a.load("/assets/images/clito-night-02-2018-7e08efb38c2828d43b237ab0705b572b.jpg"),p=a.load("/assets/images/100pap-12-2018-0ec8c51b7ae3a103b1d827bb9a8257d3.jpg"),h=a.load("/assets/images/party-of-k-04-2019-4cd18c72c7186fdfa7e4f89e23567ebd.jpg"),b=new t.default.MeshBasicMaterial({map:s}),v=new t.default.MeshBasicMaterial({map:u}),x=new t.default.MeshBasicMaterial({map:l}),y=new t.default.MeshBasicMaterial({map:d}),g=new t.default.MeshBasicMaterial({map:c}),j=new t.default.MeshBasicMaterial({map:f}),_=new t.default.MeshBasicMaterial({map:m}),P=new t.default.MeshBasicMaterial({map:p}),O=new t.default.MeshBasicMaterial({map:h}),M=new t.default.Mesh(e,b),k=new t.default.Mesh(o,v),w=new t.default.Mesh(i,x),B=new t.default.Mesh(n,y),z=new t.default.Mesh(n,g),E=new t.default.Mesh(n,j),N=new t.default.Mesh(n,_),A=new t.default.Mesh(n,P),G=new t.default.Mesh(n,O)
M.name="cube1",k.name="cube2",w.name="cube3",B.name="cube4",z.name="cube5",E.name="cube6",N.name="cube7",A.name="cube8",G.name="cube9",k.position.set(2,3,-1.5),w.position.set(1,-4,1.5),B.position.set(-4,1,2),z.position.set(-2,4,-1.5),E.position.set(3,-1,-1.5),N.position.set(3,-1,2),A.position.set(-3,-1,-2),G.position.set(3,2,4),this.scene.add(this.goal),this.scene.add(M,k,w,B,z,E,N,A,G),this.goal.position.set(0,2,-2),this.camera.position.set(3,3,4+r),this.camera.lookAt(M.position),this.renderer.render(this.scene,this.camera),this.renderLoop()},renderLoop:function(){var e=this
requestAnimationFrame(function(){e.renderLoop()}),this.scene.rotation.x+=.005+r/2e3,this.scene.rotation.y+=.002+i/2e3
var t=this.scene.getObjectByName("cube1"),s=this.scene.getObjectByName("cube2"),u=this.scene.getObjectByName("cube3"),l=this.scene.getObjectByName("cube8"),d=this.scene.getObjectByName("cube6"),c=this.scene.getObjectByName("cube7"),f=this.scene.getObjectByName("cube5"),m=this.scene.getObjectByName("cube4"),p=this.scene.getObjectByName("cube9")
t.rotation.x>10&&(r=Math.floor(10*Math.random()),t.rotateY(360*Math.random()*.01745327)),n+=.001,t.translateZ(.01+r/1e3),a.setFromMatrixPosition(this.goal.matrixWorld),this.camera.position.lerp(a,.2),this.camera.lookAt(t.position),t.rotation.x+=.011+r/2e3,t.rotation.y+=.021+r/2e3,this.camera.position.x>1&&(o=!0),this.camera.position.x<-1&&(o=!1),o?(this.camera.position.x=this.camera.position.x-.01,this.camera.rotation.y-=.006,l.rotation.x+=(.011+this.camera.position.x/1e3)/n,l.rotation.y+=(.011+this.camera.position.x/1e3)/n,d.rotation.x+=(.011+this.camera.position.x/1e3)/n,d.rotation.y+=(.011+this.camera.position.x/1e3)/n,c.rotation.x+=(.011+this.camera.position.x/1e3)/n,c.rotation.y+=(.011+this.camera.position.x/1e3)/n,m.rotation.x+=(.011+this.camera.position.x/1e3)/n,m.rotation.y+=(.011+this.camera.position.x/1e3)/n,f.rotation.x+=(.011+this.camera.position.x/1e3)/n,f.rotation.y+=(.011+this.camera.position.x/1e3)/n,s.rotation.x-=(.011-this.camera.position.x/1e3)/n,s.rotation.y-=(.011-this.camera.position.x/1e3)/n,u.rotation.x-=(.011-this.camera.position.x/1e3)/n,u.rotation.y-=(.011-this.camera.position.x/1e3)/n,p.rotation.x-=(.011-this.camera.position.x/1e3)/n,p.rotation.y-=(.011-this.camera.position.x/1e3)/n):(this.camera.position.x=this.camera.position.x+.01,this.camera.rotation.y+=.006,l.rotation.x+=(.011-this.camera.position.x/1e3)/n,l.rotation.y+=(.011-this.camera.position.x/1e3)/n,d.rotation.x+=(.011-this.camera.position.x/1e3)/n,d.rotation.y+=(.011-this.camera.position.x/1e3)/n,c.rotation.x+=(.011-this.camera.position.x/1e3)/n,c.rotation.y+=(.011-this.camera.position.x/1e3)/n,m.rotation.x+=(.011-this.camera.position.x/1e3)/n,m.rotation.y+=(.011-this.camera.position.x/1e3)/n,f.rotation.x+=(.011-this.camera.position.x/1e3)/n,f.rotation.y+=(.011-this.camera.position.x/1e3)/n,s.rotation.x+=(.011-this.camera.position.x/1e3)/n,s.rotation.y+=(.011-this.camera.position.x/1e3)/n,u.rotation.x+=(.011-this.camera.position.x/1e3)/n,u.rotation.y+=(.011-this.camera.position.x/1e3)/n,p.rotation.x+=(.011-this.camera.position.x/1e3)/n,p.rotation.y+=(.011-this.camera.position.x/1e3)/n),this.renderer.render(this.scene,this.camera)}})
e.default=s}),define("octoshark-music/controllers/events",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({})
e.default=t}),define("octoshark-music/helpers/app-version",["exports","octoshark-music/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,o){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,n=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,s=null
return n&&(r.showExtended&&(s=i.match(o.versionExtendedRegExp)),s||(s=i.match(o.versionRegExp))),a&&(s=i.match(o.shaRegExp)),s?s[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i}),define("octoshark-music/helpers/is-after",["exports","ember-moment/helpers/is-after"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/is-before",["exports","ember-moment/helpers/is-before"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/is-between",["exports","ember-moment/helpers/is-between"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/is-same-or-after",["exports","ember-moment/helpers/is-same-or-after"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/is-same-or-before",["exports","ember-moment/helpers/is-same-or-before"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/is-same",["exports","ember-moment/helpers/is-same"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-add",["exports","ember-moment/helpers/moment-add"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-calendar",["exports","ember-moment/helpers/moment-calendar"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-diff",["exports","ember-moment/helpers/moment-diff"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-format",["exports","ember-moment/helpers/moment-format"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-from-now",["exports","ember-moment/helpers/moment-from-now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-from",["exports","ember-moment/helpers/moment-from"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-subtract",["exports","ember-moment/helpers/moment-subtract"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-to-date",["exports","ember-moment/helpers/moment-to-date"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-to-now",["exports","ember-moment/helpers/moment-to-now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-to",["exports","ember-moment/helpers/moment-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment-unix",["exports","ember-moment/helpers/unix"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/moment",["exports","ember-moment/helpers/moment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/now",["exports","ember-moment/helpers/now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("octoshark-music/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("octoshark-music/helpers/unix",["exports","ember-moment/helpers/unix"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/helpers/utc",["exports","ember-moment/helpers/utc"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"utc",{enumerable:!0,get:function(){return t.utc}})})
define("octoshark-music/index",[],function(){}),define("octoshark-music/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","octoshark-music/config/environment"],function(e,t,o){var r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o.default.APP&&(r=o.default.APP.name,i=o.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=n}),define("octoshark-music/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=o}),define("octoshark-music/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("octoshark-music/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/initializers/export-application-global",["exports","octoshark-music/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default=void 0
var r={name:"export-application-global",initialize:o}
e.default=r}),define("octoshark-music/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"ember-data",initialize:t.default}
e.default=o}),define("octoshark-music/models/events",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default.Model.extend({name:t.default.attr("string"),description:t.default.attr("string"),date:t.default.attr("number"),locationName:t.default.attr("string"),image:t.default.attr("string"),locationGeo:t.default.attr("number")})
e.default=o}),define("octoshark-music/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("octoshark-music/router",["exports","octoshark-music/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){this.route("events")})
var r=o
e.default=r}),define("octoshark-music/routes/events",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("events")}})
e.default=t}),define("octoshark-music/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/services/firebase",["exports","emberfire/services/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/services/moment",["exports","ember-moment/services/moment","octoshark-music/config/environment"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.get,i=t.default.extend({defaultFormat:r(o.default,"moment.outputFormat")})
e.default=i}),define("octoshark-music/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"eo4EzhkY",block:'{"symbols":[],"statements":[[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"octoshark-music/templates/application.hbs"}})
e.default=t}),define("octoshark-music/templates/events",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"/HdhfjcS",block:'{"symbols":["events"],"statements":[[4,"each",[[24,["model"]]],null,{"statements":[[0,"  "],[7,"div",true],[8],[7,"img",true],[11,"src",[29,[[23,1,["image"]]]]],[8],[9],[9],[0,"\\n  "],[7,"div",true],[8],[7,"h1",true],[8],[1,[23,1,["name"]],false],[9],[9],[0,"\\n  "],[7,"div",true],[8],[1,[23,1,["date"]],false],[9],[0,"\\n  "],[7,"div",true],[8],[7,"p",true],[8],[1,[23,1,["description"]],false],[9],[9],[0,"\\n  "],[7,"div",true],[8],[0,"@"],[1,[23,1,["locationName"]],false],[9],[0,"\\n  "],[7,"div",true],[8],[0,"@"],[1,[23,1,["locationGeo","latitude"]],false],[0," "],[1,[23,1,["locationGeo","longitude"]],false],[9],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"octoshark-music/templates/events.hbs"}})
e.default=t}),define("octoshark-music/config/environment",[],function(){try{var e="octoshark-music/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),o={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("octoshark-music/app").default.create({name:"octoshark-music",version:"0.0.0+d6ca78f5"})
