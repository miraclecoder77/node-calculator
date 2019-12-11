/*  
    Module dependencies
    */

   const express = require('express');
   const path = require('path');
   const app = express();
   var port = process.env.port || 3000;
   var favicon = require('serve-favicon');
   
   //serve favicon
   //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico' )))
   // Routing
   app.use(express.static(path.join(__dirname, 'public')));
   
   app.listen(port, () => {
     console.log(`serving listening at ${port}`);
   });
   