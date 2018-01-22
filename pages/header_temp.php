<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie ie6"> <![endif]-->
<!--[if IE 7 ]>	<html lang="en" class="ie ie7"> <![endif]-->
<!--[if IE 8 ]>	<html lang="en" class="ie ie8"> <![endif]-->
<!--[if IE 9 ]>	<html lang="en" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<meta name="keywords" content="{{page_keywords}}" />
		<meta name="description" content="{{page_description}}" />
		<link rel="shortcut icon" type="image/x-icon" href="{{page_favicon}}"/>

		<meta property="og:title" content="{{page_title}}" />
		<meta property="og:description" content="{{page_description}}" />
		<meta property="og:image" content="{{page_image}}" />
		
		<title>{{page_title}}</title>

		<link rel="stylesheet" href="<?php echo CSS ?>/site.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo CSS ?>/print.css" type="text/css" media="print" />

        <script src="<?php echo MAIN_URL ?>/assets/jquery/jquery-2.2.3.min.js"></script>
		<script>var MAIN_URL = "<?php echo MAIN_URL ?>"; var API_URL = "<?php echo API_URL ?>";</script>
        <script src="<?php echo MAIN_URL ?>/assets/dist/js/site.js"></script>
        <script src="<?php echo MAIN_URL ?>/assets/dist/js/main.js"></script>
	</head>
	<body class="gridlock home">
	<?php include 'templates/header.html' ?>
	<div id="main_page_content">