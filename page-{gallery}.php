<?php
/*
Template Name: Gallery
*/
?>

<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="row">
        <h1 class="small-12 columns page_title"><?php the_title(); ?></h1>
        </div>

        <section class="main" id="post-<?php the_ID(); ?>">
    	<div class="row">
        <div class="entry small-12 columns">

			<?php the_content(); ?>

			</div>
			</div><!-- end .row -->
   	 		

	<?php endwhile; endif; ?>
    
    <div id="categoryGallery" class="row">
			<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3">
		 	<?php 
			$childPages = get_pages( array( 'child_of' => $post->ID, 'sort_column'=>'post_date', 'sort_order'=>'desc') );
			
			foreach ( $childPages as $page) { ?>
   				    <li class="galleryLink text-center">
                	<div class="galleryThumb">
                		<a href="<?php echo get_page_link( $page->ID); ?>">
                    		<h2><?php echo $page->post_title; ?></h2>
                    		<span><?php echo get_the_post_thumbnail( $page->ID); ?></span>
                    	</a>
                        </div>
                </li>    
			
				<?php } ?>
        		</ul>
  
 		</div><!-- end.categoryGallery -->
        
        </section><!-- end .main -->
<?php get_footer(); ?>
