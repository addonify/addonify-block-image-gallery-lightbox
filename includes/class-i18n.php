<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://addonify.com/
 * @since      1.0.0
 *
 * @package    Addonify_Gutenberg_Block_Image_Gallery_Lightbox
 * @subpackage Addonify_Gutenberg_Block_Image_Gallery_Lightbox/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Addonify_Gutenberg_Block_Image_Gallery_Lightbox
 * @subpackage Addonify_Gutenberg_Block_Image_Gallery_Lightbox/includes
 * @author     Addonify <addonify@gmail.com>
 */
class Addonify_Gutenberg_Block_Image_Gallery_Lightbox_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'addonify-gutenberg-block-image-gallery-lightbox',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
