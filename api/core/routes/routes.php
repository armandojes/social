<?php
/*
  rutas la aplicacion
*/
$Router = new Router();

//testing
$Router -> get('/test','Test');
$Router -> get('/test/:page','Test');
$Router -> post('/test','Test');

//user
$Router -> post('/user/create','Create_user');
$Router -> post('/user/login','Login');
$Router -> post('/user/login-token','Login_token');
$Router -> post('/user/logout','Logout');
$Router -> post('/user/activate','Activate_user');

//picture
$Router-> post('/picture/uploadminiature', 'Upload_miniature');
$Router-> post('/picture/upload', 'Upload_image');

//post
$Router-> post('/post/create','Create_post');
$Router-> post('/post/saved','Is_saved');
$Router-> post('/post/save','Save_post');
$Router-> post('/posts/saved','List_saved_posts');
$Router-> post('/post/delete','Delete_post');
$Router-> post('/post/deletesave','Delete_postsave');
$Router-> get('/post/page/:page','Posts');
$Router-> get('/post/id/:id','Post_controller');
$Router-> get('/post/userid/:userid/page/:page','Posts_user');

//category
$Router-> get('/category', 'List_category');
$Router-> post('/category/data', 'Data_category');
$Router-> post('/category/posts', 'Posts_category');

//tags
$Router-> get('/tags/page/:page', 'List_tags');
$Router-> post('/tag/posts', 'Posts_tag');

//coments
$Router->post('/coments/new', 'New_coment');
$Router->get('/coments/post/:id/page/:page', 'list_coments');


//notific
$Router->post('/notific', 'List_notific');


//dispatcher
$Router -> dispatch();
