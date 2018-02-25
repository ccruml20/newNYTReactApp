const express = require('express');

const Article = require('../model/model');

module.exports = app =>
{
  app.get('/api/saved', (req, res) => {
    Article.getArticles((err, articles)=>{
      if(!err){
        console.log(articles, 'this is only a test');
        res.send(articles);
      }else{
        res.status(500).send('internal server error');
      }
    })
  });

  app.post('/api/saved', (req, res) =>{
    Article.saveArticle(req.body, (err, articleToSave)=>{
      if(!err){
        res.send(req.body)
        console.log('______This is the article to save', articleToSave)
      }else{
        res.status(500).send('internal server error');
      }
    })
  })
};
