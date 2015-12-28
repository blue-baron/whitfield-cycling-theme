<?php get_header(); ?>

	
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<div class="row">
        <h1 class="small-12 columns page_title"><?php the_title(); ?></h1>
        </div>

        <section class="main" id="post-<?php the_ID(); ?>">
    	<div class="row">
       

			<?php the_content(); ?>

			

			</div><!-- end .row -->
   	 		</section><!-- end .main -->
    
		<?php endwhile; endif; ?>

<?php get_footer(); ?>
