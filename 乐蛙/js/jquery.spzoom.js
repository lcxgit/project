/*!
* Simple jQuery image zoomer plugin
*
* Author: Sebatian Pająk <spconv@gmail.com>
* Version: 0.3.0 (1/06/2016)
* Licensed under the BSD 2-Clause License
*/
; (function($, undefined) {
    'use strict';
    $.fn.spzoom = function(options) {
        return this.each(function() {
            if (this.tagName.toLowerCase() == 'a' && this.getAttribute("name")) {
                if (!$.data(this, 'plugin_spzoom')) {
                    $.data(this, 'plugin_spzoom', new Spzoom($(this), options));
                }
            }
        });
    };
    $.fn.spzoom.defaults = {
        width: 250,
        height: 250,
        position: 'right',
        margin: 20,
        showTitle: true,
        titlePosition: 'bottom'
    };
    function Spzoom($element, options) {
        var defaultOptions = $.extend({},
        $.fn.spzoom.defaults);
        for (var optionName in defaultOptions) {
            var dataName = 'spzoom' + optionName.charAt(0).toUpperCase() + optionName.slice(1);
            if ($element.data(dataName) !== undefined) {
                defaultOptions[optionName] = $element.data(dataName);
            }
        }
        this.options = $.extend(defaultOptions, options || {});
        this.PENDING = 0;
        this.LOADING = 1;
        this.LOADED = 2;
        this.DISABLED = 3;
        this.state = this.PENDING;
        this.x = 0;
        this.y = 0;
        this.hidden = false;
        this.$element = $element.css({
            'position': 'relative',
            'text-decoration': 'none',
            'outline-style': 'none'
        });
        this.$element.mouseover($.proxy(this.onEnter, this)).mouseout($.proxy(this.onOut, this)).mousemove($.proxy(this.onMove, this));
        this.$thumbImage = $("img", this.$element).first();
        this.$image = $('<img class="spzoom-image"/>').css({
            'display': 'block',
            'border': '0 none',
            'position': 'relative',
            'left': 0,
            'top': 0
        });
        this.$imageWrapper = $('<div class="spzoom-image-wrapper"/>').css({
            'position': 'relative',
            'left': 0,
            'top': 0,
            'overflow': 'hidden'
        });
        this.$zoom = $('<div class="spzoom-zoom"/>').css({
            'box-sizing': 'border-box',
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'overflow': 'hidden',
            'visibility': 'hidden',
            'display': 'block',
            'width': 0,
            'height': 0
        });
        this.$tracker = $('<div class="spzoom-tracker"/>').css({
            'box-sizing': 'border-box',
            'position': 'absolute',
            'cursor': 'crosshair',
            'top': 0,
            'left': 0,
            'width': 0,
            'height': 0,
            'opacity': 0.5,
            'visibility': 'hidden'
        });
        this.$title = $('<div class="spzoom-title"/>').css({
            'position': 'absolute',
            'z-index': '100',
            'left': 0,
            'right': 0,
            'opacity': 0.75
        });
        this.$loader = $('<div class="spzoom-loader"/>').css({
            'display': 'none',
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'visibility': 'hidden',
            'opacity': 0.6
        });
    };
    Spzoom.prototype.init = function() {
        if (this.state !== this.PENDING) {
            return;
        }
        if (!this.$thumbImage.prop('complete') || this.$thumbImage.prop('naturalWidth') === undefined) {
            return;
        }
        this.state = this.LOADING;
        this.$imageWrapper.append(this.$image);
        this.$zoom.append(this.$imageWrapper);
        if (this.options.showTitle) {
            var title = this.$element.attr('title');
            if (title) {
                this.$title.text(title).css((this.options.titlePosition == 'top' ? {
                    'top': 0
                }: {
                    'bottom': 0
                }));
                this.$zoom.append(this.$title);
            }
        }
        this.$element.click($.proxy(this.onClick, this));
        this.$element.append(this.$tracker).append(this.$zoom).append(this.$loader);
        var x = this.$thumbImage.offset().left + (this.$thumbImage.width() - this.$loader.outerWidth()) / 2;
        var y = this.$thumbImage.offset().top + (this.$thumbImage.height() - this.$loader.outerHeight()) / 2;
        this.$loader.show().offset({
            'left': x,
            'top': y
        }).css('visibility', 'visible');
        this.loadImage().then($.proxy(this.onLoad, this), $.proxy(this.onLoadError, this));
    };
    Spzoom.prototype.loadImage = function() {
        var deferred = $.Deferred();
        var $img = this.$image;
        $img.on({
            load: function() {
                deferred.resolve();
            },
            error: function() {
                deferred.reject();
            }
        });
        $img.attr('src', this.$element.attr('name'));
        if ($img.prop('complete') && $img.prop('naturalWidth') !== undefined) {
            setTimeout(function() {
                deferred.resolve();
            });
        }
        return deferred.promise();
    };
    Spzoom.prototype.render = function() {
        if (this.state !== this.LOADED) {
            this.init();
            return;
        }
        if (true === this.hidden) {
            return;
        }
        var thumb_w = this.$thumbImage.width();
        var thumb_h = this.$thumbImage.height();
        var thumb_x = this.$thumbImage.offset().left;
        var thumb_y = this.$thumbImage.offset().top;
        var image_w = this.$image.width();
        var image_h = this.$image.height();
        if (thumb_w >= image_w || thumb_h >= image_h) {
            return;
        }
        if (this.x < thumb_x || this.x > thumb_x + thumb_w || this.y < thumb_y || this.y > thumb_y + thumb_h) {
            return;
        }
        var scale_x = thumb_w / image_w;
        var scale_y = thumb_h / image_h;
        var tracker_w = Math.min(this.options.width * scale_x, thumb_w);
        var tracker_h = Math.min(this.options.height * scale_y, thumb_h);
        var tracker_x = Math.min(Math.max(this.x - tracker_w / 2, thumb_x), thumb_x + thumb_w - tracker_w);
        var tracker_y = Math.min(Math.max(this.y - tracker_h / 2, thumb_y), thumb_y + thumb_h - tracker_h);
        var image_x = ((tracker_x - thumb_x) / scale_x) * ( - 1);
        var image_y = ((tracker_y - thumb_y) / scale_y) * ( - 1);
        var zoom_x, zoom_y;
        switch (this.options.position) {
        case 'top':
            zoom_x = thumb_x;
            zoom_y = thumb_y - this.options.height - this.options.margin;
            break;
        case 'bottom':
            zoom_x = thumb_x;
            zoom_y = thumb_y + thumb_h + this.options.margin;
            break;
        case 'left':
            zoom_x = thumb_x - this.options.width - this.options.margin;
            zoom_y = thumb_y;
            break;
        default:
            zoom_x = thumb_x + thumb_w + this.options.margin;
            zoom_y = thumb_y;
            if ($(document).width() < zoom_x + this.options.width) {
                zoom_x = thumb_x - (this.options.width - thumb_w);
                zoom_y = thumb_y + thumb_h + this.options.margin;
            }
        }
        this.$tracker.offset({
            'left': tracker_x,
            'top': tracker_y
        }).css({
            'width': tracker_w,
            'height': tracker_h,
            'visibility': 'visible'
        });
        this.$zoom.offset({
            'left': zoom_x,
            'top': zoom_y
        });
        this.$image.css({
            'left': image_x,
            'top': image_y
        });
        this.$zoom.css({
            'width': this.options.width,
            'height': this.options.height,
            'visibility': 'visible'
        });
    };
    Spzoom.prototype.hide = function() {
        this.$zoom.css({
            'visibility': 'hidden',
            'width': 0,
            'height': 0
        });
        this.$tracker.css({
            'visibility': 'hidden',
            'width': 0,
            'height': 0
        });
    };
    Spzoom.prototype.onEnter = function(event) {
        this.x = event.pageX;
        this.y = event.pageY;
        this.render();
    };
    Spzoom.prototype.onMove = function(event) {
        this.x = event.pageX;
        this.y = event.pageY;
        this.render();
    };
    Spzoom.prototype.onOut = function(event) {
        this.hide();
    };
    Spzoom.prototype.onClick = function(event) {};
    Spzoom.prototype.onLoad = function(src) {
        this.state = this.LOADED;
        this.$loader.hide();
        this.render();
    };
    Spzoom.prototype.onLoadError = function() {
        this.state = this.DISABLED;
        console.log('Loading image "' + this.$image.attr('src') + '" failed');
    };
})(jQuery);