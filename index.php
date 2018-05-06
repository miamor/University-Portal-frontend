<?php
include 'include/config.php';
$config = new Config();

//echo $_SERVER['REQUEST_URI'].'~~~~';

if (check($__page, '?') > 0) $__page = $__page.'&';
else $__page = $__page;

$__pageAr = array_values(array_filter(explode('/', explode('?', rtrim($__page))[0])));
if ($__pageAr) {
	$page = $__pageAr[0];
	$n = (array_key_exists(1, $__pageAr) && $__pageAr[1]) ? $__pageAr[1] : null;
	$m = (array_key_exists(2, $__pageAr) && $__pageAr[2]) ? $__pageAr[2] : null;
	$requestAr = explode('?', $__page);
	$config->request = isset($requestAr[1]) ? $requestAr[1] : null;
} else if (check($__page, '?')) $config->request = explode('?', $__page)[1];

if (!isset($page) || !$page) $page = 'index';

$v = $config->get('v');
$temp = $config->get('temp');
$type = $config->get('type');
$do = $config->get('do');
$mode = $config->get('mode');


if ($page == 'request') {
	header('Content-Type: application/json; charset=utf-8');
  	include 'request/'.$n.'.php';
}
else {
	header('Content-Type: text/html; charset=utf-8');
	if ($page == 'article') include 'pages/article.php';
	else if ($page != 'index') include 'pages/modules.php';
	else include 'pages/index.php';
  	include 'pages/footer.php';
}

 ?>
