import autoprefixer from 'autoprefixer'; // Import autoprefixer for CSS compatibility
import cssnano from 'cssnano'; // Import cssnano for CSS minification

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes to CSS rules
    cssnano({ preset: 'default' }), // Minify the CSS
  ],
};