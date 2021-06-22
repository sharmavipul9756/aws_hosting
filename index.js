const express = require('express');
const port = process.env.PORT || 3000
const app = express();
app.set('view engine','hbs')
app.use(express.static('public'))
app.get('/',(req,res)=>{res.render('index')})
app.listen(port,()=>{"running on port",port})