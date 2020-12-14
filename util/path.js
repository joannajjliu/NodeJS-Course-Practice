// Helper function for pointing routes to parent directory
const path = require('path');

module.exports = path.dirname(process.mainModule.filename); //gives the path to app.js (file that calls the routes)