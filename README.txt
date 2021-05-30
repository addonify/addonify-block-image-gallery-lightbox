=== Addonify: Block Image & Gallery Lightbox ===
Contributors: addonify
Donate link: https://github.com/addonify/addonify-block-image-gallery-lightbox
Tags: gutenberg, block, image, gallery, lightbox
Requires at least: 5.0.0
Tested up to: 5.7.2
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A simple plugin that makes block image clickable to preview it in LightBox popup. 

== Description ==

A simple plugin that makes block image clickable to preview it in Lightbox popup. Technically, This plugin finds `IMG` tag inside Gutenberg WP block image or gallery & it uses lightGallery js to preview images in LightBox.

Talking about the benefits it ✅ Works with any theme. While it might impact your webpage ❗️ load time it has to find the `class` name from **DOM** using **jQuery**.

#### USAGE: 

This plugin is a plug and play tool. You don't need to configure anything. Just make sure that you haven't insert media/attachment page link for images in editor. if you insert a link to to image block the markup will be as follow in DOM.

    <figure class="wp-block-image size-large adfy__image__lightbox">
     <a href="#">
        <a href="#" class="adfy__lightbox__link">
        </a>
     </a>
    </figure>

== Installation ==

1. Download the plugin.
2. Unzip the downloaded zip file.
3. Upload the plugin folder into the `wp-content/plugins/` directory of your WordPress site.
4. Activate `Addonify Wishlist` from Dashboard > Plugins.

== Changelog ==

= 1.0.1 = Released on: 30 May 2021

- Tweak: Plugin name & plugin

= 1.0.0 = Released on: 21 May 2021

- Initial release