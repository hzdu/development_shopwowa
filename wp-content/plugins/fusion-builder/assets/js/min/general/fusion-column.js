function fusionInitStickyColumns(){"object"==typeof fusion&&"function"==typeof fusion.getHeight&&jQuery(".awb-sticky[data-sticky-offset]").each(function(){jQuery(this)[0].style.setProperty("--awb-sticky-offset",fusion.getHeight(jQuery(this).attr("data-sticky-offset"))+fusion.getAdminbarHeight()+"px")})}jQuery(document).ready(function(){jQuery(".fusion-image-hovers .hover-type-liftup.fusion-column-inner-bg").on({mouseenter:function(){var e=jQuery(this).closest(".fusion_builder_column");jQuery(this).css("z-index","4"),jQuery(this).siblings(".fusion-column-wrapper").css("z-index","5"),"none"!==e.css("filter")&&"auto"===e.css("z-index")&&(e.css("z-index","1"),e.attr("data-filter-zindex","true"))},mouseleave:function(){var e=jQuery(this).closest(".fusion_builder_column");jQuery(this).css("z-index",""),jQuery(this).siblings(".fusion-column-wrapper").css("z-index",""),"true"===e.data("filter-zindex")&&(e.css("z-index",""),e.removeAttr("data-filter-zindex"))}})}),jQuery(window).on("load fusion-sticky-change fusion-resize-horizontal",fusionInitStickyColumns);