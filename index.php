<?php get_header(); ?>

	<div class="row">
        <h1 class="small-12 large-9 large-centered columns text-center page_title"> <?php $bloginfo = get_bloginfo( 'description' ); echo $bloginfo; ?></h1>
        </div>
	
	<section class="main" id="post-<?php the_ID(); ?>">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="row">
        <article <?php post_class('small-12 large-9 large-centered columns') ?> id="post-<?php the_ID(); ?>">

			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

			<?php get_template_part('_/inc/meta'); ?>

			<div class="entry">
				<?php the_excerpt(); ?>
                <a href="<?php the_permalink(); ?>">Read more ...</a>
			</div>

		</article>
        </div>

	<?php endwhile; ?>

	
    
</div>

	<?php else : ?>

		<h2>Not Found</h2>

	<?php endif; ?>
    </section>

<?php get_footer(); ?>
