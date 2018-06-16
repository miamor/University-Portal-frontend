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
	<div id="main_page_content">

<!-- DO NOT CHANGE BELOW PART -->
<div class="nav_slider_navigation">
    <nav class="navigation_mobile navigation_mobile_main" aria-labelledby="mobile_nav_title">
        <h4 id="mobile_nav_title" aria-label="Mobile Navigation">Navigation</h4>
        <ul class="depth_1">
        </ul>
    </nav>

    <nav class="navigation_mobile navigation_mobile_search" aria-labelledby="mobile_nav_title">
        <h4>Tìm kiếm</h4>
        <form class="contain search-form">
            <label class="visually_hidden" for="footer_site_search_query">Tìm kiếm bằng từ khóa</label>
            <input id="footer_site_search_query" class="text" name="q" type="text">
            <input class="submit btn btn-primary" value="Search" type="submit">
        </form>
    </nav>
</div>
<!-- DO NOT CHANGE ABOVE PART -->

<!-- DO NOT CHANGE BELOW PART -->
<header id="header" aria-label="Main Site Navigation">
    <div class="row">
        <div class="desktop-12 tablet-6 mobile-full">
            <a href="{{site:url}}" class="logo">{{site:title}}</a>
            <div class="navigation_desktop">
                <nav aria-label="Contact" class="gateways top_nav">
                    <div class="item handle">
                        <a>{{site:contact_email}}</a>
                    </div>
                </nav>

                <nav class="main" aria-label="Main Navigation">
                </nav>

                <nav class="persistent top_nav" aria-label="Social linked">
                    <form class="nav-search-form search-form">
                        <label class="visually_hidden" for="search_the_website_query">Tìm kiếm bằng từ khóa</label>
                        <input id="search_the_website_query" class="text" placeholder="Keywords, Articles, Departments, etc..." name="q" type="text">
                        <input class="submit" value="Tìm kiếm" type="submit">
                    </form>
                </nav>
            </div>
            <div class="navigation_compact">
                <span class="nav_slider_handle mobile_handle">Navigation</span>
            </div>
        </div>
    </div>
</header>
<!-- DO NOT CHANGE ABOVE PART -->

<a name="top"></a>

<!-- DO NOT CHANGE BELOW PART -->
<div class="nav_slider_page">
	<!-- DO NOT CHANGE ABOVE PART -->
		
	<?php include 'templates/header.html' ?>
