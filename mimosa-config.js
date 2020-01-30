exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // ember-specific stuff
    'ember-module-import',
    'ember-test',

    // compilers
    'es6-module-transpiler',
    'copy',
    'ember-handlebars',
    'sass',
    'stream-copy',

    // server support
    'live-reload',
    'server',
    'server-reload',

    // packaging
    'combine',
    'minify-js',
    'minify-css',
    'minify-img',
    'require@3.1.2',
    'web-package',
    'handlebars-on-window'
  ],
  sass: {
    // want to use node-sass rather than ruby compiler
    lib: require('node-sass')
  },
  require: {
    optimize: {
      overrides: {
        wrapShim: true,
        paths: {
          // want to use ember.prod for packaging
          ember: 'vendor/ember/ember.prod'
        }
      }
    }
  },
  emberHandlebars: {
    emberPath: "ember",
    helpers:["blogger/helpers/helpers"]
  },
  emberModuleImport: {
    apps: [{
      namespace: "blogger",
      manifestFile: "modules",
      additional: ["router"]
    }]
  },
  emberTest: {
   apps: [{
     testLocation: 'tests',
     testAppFactory: 'create_test_app',
     stylesheetPaths: [
       '/public/stylesheets/vendor.css',
       '/public/stylesheets/blogger.css'
     ]
   }]
  },
  template: {
    nameTransform: /.*\/templates\//,
    writeLibrary: false,
  },
  combine: {
    folders:[{
      folder: "stylesheets/vendor",
      output: "stylesheets/vendor.css"
    }]
  },
  bower: {
    copy: {
      mainOverrides: {
        showdown: ["compressed/showdown.js"],
        bootstrap: ["dist/css/bootstrap.css", "dist/js/bootstrap.js"],
        ember:["ember.js", "ember.prod.js"]
      }
    }
  },
  server: {
    port: 3005,
    views: {
      compileWith: "handlebars",
      extension: "hbs"
    },
    defaultServer: {
      enabled: false,
      description: "* You must not being using Mimosa's hosted server.  Your `server.defaultServer.enabled` value should be set to false"
    }
  },
};
