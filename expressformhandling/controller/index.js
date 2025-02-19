export const getData  = (req, res, next) =>{
    res.render('index', { title: 'Express' });
  }