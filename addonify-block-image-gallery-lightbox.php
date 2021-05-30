<?php

/**
 *
 * @link              https://addonify.com/
 * @since             1.0.0
 * @package           Addonify_Block_Image_Gallery_Lightbox
 *
 * @wordpress-plugin
 * Plugin Name:       Addonify: Block Image & Gallery Lightbox
 * Plugin URI:        https://github.com/addonify/addonify-block-image-gallery-lightbox
 * Description:       A simple plugin that makes block image clickable to preview it in LightBox popup. 
 * Version:           1.0.1
 * Author:            Addonify
 * Author URI:        https://github.com/addonify/addonify-block-image-gallery-lightbox
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       addonify-block-image-gallery-lightbox
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ADDONIFY_BLOCK_IMAGE_GALLERY_LIGHTBOX_VERSION', '1.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-addonify-block-image-gallery-lightbox-activator.php
 */
function activate_addonify_block_image_gallery_lightbox() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-activator.php';
	Addonify_Block_Image_Gallery_Lightbox_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-addonify-block-image-gallery-lightbox-deactivator.php
 */
function deactivate_addonify_block_image_gallery_lightbox() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-deactivator.php';
	Addonify_Block_Image_Gallery_Lightbox_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_addonify_block_image_gallery_lightbox' );
register_deactivation_hook( __FILE__, 'deactivate_addonify_block_image_gallery_lightbox' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-addonify-block-image-gallery-lightbox.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_addonify_block_image_gallery_lightbox() {

	$plugin = new Addonify_Block_Image_Gallery_Lightbox();
	$plugin->run();

}
run_addonify_block_image_gallery_lightbox();
