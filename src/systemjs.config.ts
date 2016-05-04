declare var System
System.config({
  baseURL: '/',
  warnings: true,
  map: {
    'src': 'src',
    '@angular': '/node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  },
  packages: {
    'src': {defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    '@angular/common': {defaultExtension: 'js', main: 'index.js'},
    '@angular/compiler': {defaultExtension: 'js', main: 'index.js'},
    '@angular/core': {defaultExtension: 'js', main: 'index.js'},
    '@angular/http': {defaultExtension: 'js', main: 'index.js'},
    '@angular/platform-browser': {defaultExtension: 'js', main: 'index.js'},
    '@angular/platform-browser-dynamic': {defaultExtension: 'js', main: 'index.js'},
    '@angular/router': {defaultExtension: 'js', main: 'index.js'},
    '@angular/router-deprecated': {defaultExtension: 'js', main: 'index.js'},
    '@angular/testing': {defaultExtension: 'js', main: 'index.js'},
    '@angular/upgrade': {defaultExtension: 'js', main: 'index.js'}
  }
})