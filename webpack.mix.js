const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/img', 'public/img')
    .copyDirectory('storage/app/public/doctors_images', 'public/storage/doctors_images')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');

