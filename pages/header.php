<?php 
//$config->addJS(-1, '//cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js');
//$config->addJS('bootstrap', 'js/bootstrap.min.js');
$config->addJS('dist', 'main.js'); ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie ie6"> <![endif]-->
<!--[if IE 7 ]>	<html lang="en" class="ie ie7"> <![endif]-->
<!--[if IE 8 ]>	<html lang="en" class="ie ie8"> <![endif]-->
<!--[if IE 9 ]>	<html lang="en" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<meta name="keywords" content="" />
		<meta name="description" content="" />

		<meta property="og:title" content="Kenyon College" />
		<meta property="og:description" content="Founded in 1824 in Gambier, Ohio, Kenyon College is a highly selective liberal arts college offering 1,600 students an academically challenging curriculum in a close-knit community." />
		<meta property="og:image" content="http://www.kenyon.edu/files/settings/social.jpg" />
		
		<title>Kenyon College</title>

		<link rel="stylesheet" href="<?php echo CSS ?>/site.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo CSS ?>/print.css" type="text/css" media="print" />

        <script src="<?php echo MAIN_URL ?>/assets/jquery/jquery-2.2.3.min.js"></script>
		<script>var MAIN_URL = "<?php echo MAIN_URL ?>";</script>
	</head>
	<body class="gridlock home">
	<?php include 'templates/header.html' ?>
	<div id="main_page_content">