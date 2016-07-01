System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    map: {
        app: "./app",
        '@angular': 'https://npmcdn.com/@angular',
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6'
    },
    //packages defines our app package
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      '@angular/core': {
        main: 'bundles/core.umd.js',
        defaultExtension: 'js'
      },
      '@angular/router': {
        main: 'bundles/router.umd.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: 'bundles/compiler.umd.js',
        defaultExtension: 'js'
      },
      '@angular/common': {
        main: 'bundles/common.umd.js',
        defaultExtension: 'js'
      },
      '@angular/forms': {
        main: 'bundles/forms.umd.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: 'bundles/platform-browser-dynamic.umd.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: 'bundles/platform-browser.umd.js',
        defaultExtension: 'js'
      },
      '@angular/http': {
          main: 'bundles/http.umd.js',
          defaultExtension: 'js'
      },
      rxjs: {
          defaultExtension: 'js'
      }
  }
});
