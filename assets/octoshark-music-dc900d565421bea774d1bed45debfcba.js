"use strict"
define("octoshark-music/app",["exports","octoshark-music/resolver","ember-load-initializers","octoshark-music/config/environment"],function(e,t,i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,i.default)(o,a.default.modulePrefix)
var r=o
e.default=r}),define("octoshark-music/helpers/app-version",["exports","octoshark-music/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,r=a.versionOnly||a.hideSha,n=a.shaOnly||a.hideVersion,l=null
return r&&(a.showExtended&&(l=o.match(i.versionExtendedRegExp)),l||(l=o.match(i.versionRegExp))),n&&(l=o.match(i.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var o=Ember.Helper.helper(a)
e.default=o}),define("octoshark-music/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","octoshark-music/config/environment"],function(e,t,i){var a,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(a=i.default.APP.name,o=i.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(a,o)}
e.default=r}),define("octoshark-music/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("octoshark-music/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("octoshark-music/initializers/export-application-global",["exports","octoshark-music/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var a,o=t.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var a={name:"export-application-global",initialize:i}
e.default=a}),define("octoshark-music/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("octoshark-music/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("octoshark-music/router",["exports","octoshark-music/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){})
var a=i
e.default=a}),define("octoshark-music/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("octoshark-music/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"wRGUlzQf",block:'{"symbols":[],"statements":[[5,"welcome-page",[],[[],[]]],[0,"\\n"],[0,"\\n"],[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"octoshark-music/templates/application.hbs"}})
e.default=t}),define("octoshark-music/config/environment",[],function(){try{var e="octoshark-music/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("octoshark-music/app").default.create({name:"octoshark-music",version:"0.0.0+28693998"})
