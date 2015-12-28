<?php
/*
Template Name: Gallery-Individual
*/
?>

<?php get_header('gallery'); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<div class="row">
        <h1 class="small-12 columns page_title">
		<a href="<?php $parent_link = get_permalink( $post->post_parent ); echo $parent_link; ?>">
			<?php $parent_title = get_the_title( $post->post_parent ); echo $parent_title; ?></a>
            </h1>
        </div>

        <section class="main" id="post-<?php the_ID(); ?>">
        
        <div class="row">
        <div class="gallery_nav small-12 columns">
		<?php //create navigation that only shows other child pages of the post's parent.
  			if ($post->post_parent)
  			$children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
  			else
  			$children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
  
  			if ($children) { ?>
  			<ul class="show-for-medium-up">
  			<?php echo $children; ?>
  			</ul>
  	<?php } ?> 
    	</div>
        </div>
        
        <div class="row">
        <div id="individualGallery" class="entry small-12 columns">

		   <h2><?php the_title(); ?></h2>
			<?php the_content(); ?>

			</div>

			</div><!-- end .row -->
   	 		</section><!-- end .main -->
    
		<?php endwhile; endif; ?>

<?php get_footer(); ?>

