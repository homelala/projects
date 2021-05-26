var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
var auth = require('../lib/auth');
const db = require('../lib/db.js');
const shortid = require('shortid');

router.get('/create', function (request, response) {
  if (!auth.isOwner(request, response)) {
    response.redirect('/');
    return false;
  }
  var title = 'WEB - create';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
      <form action="/topic/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `, '', auth.statusUI(request, response));
  response.send(html);
});

router.post('/create_process', function (request, response) {
  if (!auth.isOwner(request, response)) {
    response.redirect('/');
    return false;
  }
  var id = shortid.generate();
  var post = request.body;
  var title = post.title;
  var description = post.description;
  db.query('insert into topic value(?,?,?,?)',[id,title,description,request.user.id],function(err,result){
    if(err){
      console.log(err);
    }
    response.redirect(`/topic/${id}`);
  })
});

router.get('/update/:pageId', function (request, response) {
  if (!auth.isOwner(request, response)) {
    response.redirect('/');
    return false;
  }
  db.query('select * from topic where id = ?',request.params.pageId,function(err,result){
    if(result[0].user_id !== request.user.id){
      console.log('error',result[0].user_id,request.user.id);
      request.flash('error','Not yours!');
      return response.redirect('/');
    }
    var title = request.params.pageId;
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
        <form action="/topic/update_process" method="post">
          <input type="hidden" name="id" value="${result[0].id}">
          <p><input type="text" name="title" placeholder="title" value="${result[0].title}"></p>
          <p>
            <textarea name="description" placeholder="description">${result[0].description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
      `<a href="/topic/create">create</a> <a href="/topic/update/${result[0].id}">update</a>`,
      auth.statusUI(request, response)
    );
    response.send(html);
  })
});

router.post('/update_process', function (request, response) {
  if (!auth.isOwner(request, response)) {
    response.redirect('/');
    return false;
  }
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  db.query('select * from topic where id = ?',post.id,function(err,result){
    if(result[0].user_id !== request.user.id){
      console.log('error',result[0].user_id,request.user.id);
      request.flash('error','Not yours!');
      return response.redirect('/');
    }
    db.query('update topic set title=?,description =? where id = ?',[post.title,post.description,post.id],function(err,result){
      if(err){
        //console.log(err);
      }
      response.redirect(`/topic/${post.id}`);
    });
  });
});

router.post('/delete_process', function (request, response) {
  if (!auth.isOwner(request, response)) {
    response.redirect('/');
    return false;
  }
 
  var post = request.body;
  var id = post.id;
  db.query('select * from topic where id =?',id,function(err,result){
    if(result[0].user_id !== request.user.id){
      request.flash('error','Not yours!');
      return response.redirect('/');
    }
    db.query('delete from topic where id =?',post.id,function(err,result){
      if(err){
        console.log(err);
      }
      response.redirect('/');
    })
  })
});

router.get('/:pageId', function (request, response, next) {
  db.query('select * from topic where id = ?',request.params.pageId,function(err,result){
    db.query('select * from Expressinfo where id =?',result[0].user_id,function(err,users){
      var filteredId = path.parse(request.params.pageId).base; 
      var title = result[0].title;
      var user = users[0].name;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(result[0].description, {
        allowedTags: ['h1']
      });
      var list = template.list(request.list);
      var html = template.HTML(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}
        <p>by ${user}</p>`,
        ` <a href="/topic/create">create</a>
            <a href="/topic/update/${result[0].id}">update</a>
            <form action="/topic/delete_process" method="post">
              <input type="hidden" name="id" value="${result[0].id}">
              <input type="submit" value="delete">
            </form>`,
        auth.statusUI(request, response)
      );
      response.send(html);
    })
  });
});
module.exports = router;