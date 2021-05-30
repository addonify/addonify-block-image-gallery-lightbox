(function ($) {

    'use strict';

    $(document).ready(function () {

        var adfyinit = function () {

            adfyWpBlockGallery();
            adfyWpBlockImage();
            adfyinitLightGallery();
            adfyAuthorCredits();
        }

        adfyinit();

        function adfyWpBlockGallery() {

            // block gallery 

            var galleryEles = $('.single .wp-block-gallery');

            if (galleryEles.length > 0) {
                $.each(galleryEles, function (i, v) {
                    $(this).find('ul').addClass('adfy__image__gallery');
                    var allImages = $(this).find('figure > img');
                    if (allImages) {
                        $.each(allImages, function (a, b) {
                            var imgSource = $(this).attr('src');
                            $(this).parents('li').attr('data-src', imgSource);
                            $('<span class="adfy__lightbox__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></span>').insertAfter($(this));
                        });
                    }
                });
            }
        }


        function adfyWpBlockImage() {

            // block image

            var allImageBlocks = $('.single .wp-block-image');
            if (allImageBlocks.length > 0) {
                $.each(allImageBlocks, function () {

                    $(this).addClass('adfy__image__lightbox');

                    if ($(this).children('figure').length > 0) {

                        $(this).children('figure').addClass('adfy__image__lightbox');
                        $(this).removeClass('adfy__image__lightbox'); // remove parent class
                    }

                    var imageEle = $(this).find('img');
                    var imageSrc = imageEle.attr('src');
                    imageEle.wrap(function () {
                        return "<a href='" + imageSrc + "' class='adfy__lightbox__link'></a>";
                    });
                    $('<span class="adfy__lightbox__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></span>').insertAfter(imageEle);
                });
            }
        }


        function adfyinitLightGallery() {

            var lightbox__image = $('.adfy__image__lightbox');
            var lightbox__imageGallery = $('.adfy__image__gallery');

            // WP Block image

            lightbox__image.lightGallery({

                controls: false,
                pager: false,
                thumbnail: false,
                thumbnail: false,
                counter: false,
                autoplay: false,
                autoplayControls: false,
                enableDrag: false,
                toggleThumb: false,
                loop: false,
            });

            // WP Block Gallery

            lightbox__imageGallery.lightGallery({

                speed: 300,
                pager: false,
                thumbnail: false,
                pullCaptionUp: false,
                getCaptionFromTitleOrAlt: false,
            });
        }

        function adfyAuthorCredits() {

            // author credit
            console.log('Hi Folks 👋, Block Image Gallery Lightbox Powered By: https://github.com/addonify/addonify-block-image-gallery-lightbox');
        }

    });

})(jQuery);