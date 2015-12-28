<?php  
/*
Template Name: Home
*/
?>

<?php get_header(); ?>

	
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
        <div class="row">
		<article <?php post_class('small-12 columns page_title') ?> id="post-<?php the_ID(); ?>">

			<div class="entry">
				<h1>Sean Whitfield Cycling</h1>
			</div>
		
        </article>
        </div>

	<?php endwhile; ?>

	<?php endif; ?>
    
    <section class="main">
    
    <div class="row">
    <div class="small-12 columns">
    	<?php the_content(); ?>
    </div>
	</div><!-- end .row -->
    </section><!-- end .main -->

<?php get_footer(); ?>
