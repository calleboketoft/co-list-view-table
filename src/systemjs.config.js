System.config({
    baseURL: '/',
    warnings: true,
    map: {
        'src': 'src',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        '': { defaultExtension: 'js', main: 'index.js' },
        'src': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        '@angular/common': { defaultExtension: 'js' },
        '@angular/compiler': { defaultExtension: 'js' },
        '@angular/core': { defaultExtension: 'js' },
        '@angular/http': { defaultExtension: 'js' },
        '@angular/platform-browser': { defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js' },
        '@angular/router': { defaultExtension: 'js' }
    }
});
//# sourceMappingURL=systemjs.config.js.map