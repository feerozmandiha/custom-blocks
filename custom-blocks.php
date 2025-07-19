<?php 

/**
 * Plugin Name: بلوک‌های سفارشی من
 */

function my_custom_blocks_register() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'my_custom_blocks_register' );
