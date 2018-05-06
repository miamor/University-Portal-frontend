<?php 
include 'pages/header.php';

//$config->addJS('dist', 'modules.js'); // this was added to main.js already

//include 'pages/templates/module.html';
?>
<!-- DO NOT CHANGE BELOW PART -->
<header class="page" aria-labelledby="main_page_title">
  <div class="row">
    <div class="desktop-12">
      <h1 id="main_page_title"></h1>
      <nav class="__breadcrumb breadcrumb" aria-label="Breadcrumb Navigation">
      </nav>
    </div>
  </div>
</header>
<!-- DO NOT CHANGE ABOVE PART -->

<section aria-labelledby="main_page_title" class="page">
  <div class="row">
    <aside aria-label="Side Navigation" class="sidebar desktop-3 tablet-full mobile-full">
      <nav class="subnavigation" aria-labelledby="subnav_title">
        <div id="subnav_title" class="naver-handle">Additional Navigation</div>
        <div class="naver-wrapper">
          <div class="naver-container">
            <ul class="depth_1">
            </ul>
          </div>
        </div>
      </nav>
    </aside>
    <div class="body desktop-9 tablet-full mobile-full right max-8 max-push-1">
      <!-- DO NOT CHANGE BELOW PART -->
      <div id="__module_content">
      </div>
      <!-- DO NOT CHANGE ABOVE PART -->
    </div>
  </div>
</section>