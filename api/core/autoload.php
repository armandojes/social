<?php

// configuraciones
require 'config/config.php';

//functions
require 'functions/url_construct.php';
require 'functions/convert_date.php';
require 'functions/mail_template.php';

//system
require 'system/router.php';
require 'system/connect.php';
require 'system/controller.php';
require 'system/model.php';

//models
require 'models/user.php';
require 'models/security.php';
require 'models/picture.php';
require 'models/tag.php';
require 'models/post.php';
require 'models/coment.php';
require 'models/Category.php';
require 'models/Notific.php';

//class php mailer
require  'phpmailer/Exception.php ' ;
require  'phpmailer/PHPMailer.php ' ;
require  'phpmailer/SMTP.php ' ;

//controlladores
require 'controllers/test.php';
require 'controllers/create_user.php';
require 'controllers/login.php';
require 'controllers/login_token.php';
require 'controllers/upload_miniature.php';
require 'controllers/upload_image.php';
require 'controllers/create_post.php';
require 'controllers/posts.php';
require 'controllers/Post_controller.php';
require 'controllers/new_coment.php';
require 'controllers/list_coments.php';
require 'controllers/Posts_user.php';
require 'controllers/Is_saved.php';
require 'controllers/Save_post.php';
require 'controllers/List_saved_posts.php';
require 'controllers/List_category.php';
require 'controllers/Data_category.php';
require 'controllers/Posts_category.php';
require 'controllers/List_tags.php';
require 'controllers/Posts_tag.php';
require 'controllers/Logout.php';
require 'controllers/Activate_user.php';
require 'controllers/List_notific.php';

//rutas
require 'routes/routes.php';
