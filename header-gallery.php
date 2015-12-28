<!DOCTYPE html>

<!--[if lt IE 7 ]> <html class="ie ie6 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. -->

<head>

	<meta charset="<?php bloginfo('charset'); ?>">
	
	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<?php if (is_search()) { ?>
	<meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>

	<title><?php wp_title(); ?></title>
	
	<meta name="title" content="<?php wp_title(); ?>">
	<meta name="description" content="<?php bloginfo('description'); ?>">
		
	<meta name="author" content="Hilary Seselja">
	<meta name="Copyright" content="Hilary Seselja. All Rights Reserved.">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/favicon.ico">	 
	<link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/apple-touch-icon.png">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
   
</head>

<body <?php body_class("Gallery"); ?>>
	
<div id="wrapper">
<header id="header" class="row">
			
<div class="contain-to-grid">
<nav class="top-bar" data-topbar role="navigation">
	<ul class="title-area">
    	<li class="name"><h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/SW-Logo.png" alt="Sean Whitfield Cycling" />
            </a></h1></li>
        <li class="toggle-topbar menu-icon"><a href="#"><span>MENU</span></a></li>
  		</ul>

 	<section class="top-bar-section">
    	<?php wp_nav_menu( array(	'theme_location' => 'primary-menu', 
									'container'  => false,
									'container_class' => 'top-bar-section',
									'menu_class' => 'right' ) ); ?>
    								</section>
		
	</nav>
    </div>
     
	</header>
