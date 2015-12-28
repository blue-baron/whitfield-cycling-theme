<?php get_header(); ?>
        
	
    <section class="main" id="post-<?php the_ID(); ?>">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="row">
        <article <?php post_class('small-12 large-9 large-centered columns') ?> id="post-<?php the_ID(); ?>">
			
			<a href="<?php bloginfo('url'); ?>/news/">Return To News</a>
            
            <h1 class="entry-title"><?php the_title(); ?></h1>

			<?php get_template_part('_/inc/meta'); ?>
            
            <div class="entry-content">
				
				<?php the_content(); ?>

				<?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
				
			</div>
			
			<?php edit_post_link('Edit this entry','','.'); ?>
            
            <a href="<?php bloginfo('url'); ?>/news/">Return To News</a>
            </div>
			
		</article>

	<?php endwhile; endif; ?>
    </section>
	
<?php get_footer(); ?>