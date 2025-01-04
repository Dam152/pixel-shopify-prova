let mix = require('laravel-mix');
mix
  .js('src/index.js', 'assets')
  .postCss('src/index.css', 'assets', [
    require('tailwindcss')('tailwind.config.js'),
  ])
  .options({
    processCssUrls: false,
  });
