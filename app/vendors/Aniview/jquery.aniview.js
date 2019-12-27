(function($) {
    var uniqueCntr = 0;
    $.fn.scrolled = function(waitTime, fn) {
        if (typeof waitTime === 'function') {
            fn = waitTime;
            waitTime = 200;
        }
        var tag = 'scrollTimer' + uniqueCntr++;
        this.scroll(function() {
            var self = $(this);
            clearTimeout(self.data(tag));
            self.data(tag, setTimeout(function() {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime));
        });
    };

    $.fn.AniView = function(options) {

        var settings = $.extend({
            animateThreshold: 0,
            scrollPollInterval: 20
        }, options);

        var collection = this;

        $(collection).each(function(index, element) {
            $(element).addClass('av-container');
            $(element).css('opacity', 0);
        });

        function EnteringViewport(element) {
            var elementTop = $(element).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            return (elementTop < (viewportBottom - settings.animateThreshold)) ? true : false;
        }

        function RenderElementsCurrentlyInViewport(collection) {
            $(collection).each(function(index, element) {
                var elementParentContainer = $('.av-container');
                if ($(element).is('[data-av-animation]') && EnteringViewport(elementParentContainer)) {
                    $(element).css('opacity', 1);
                    $(elementParentContainer).addClass('av-visible');
                    $(element).addClass('animated ' + $(element).attr('data-av-animation'));
                }
            });
        }
        
        RenderElementsCurrentlyInViewport(collection);

        $(window).scrolled(settings.scrollPollInterval, function() {
            RenderElementsCurrentlyInViewport(collection);
        });
    };
})(jQuery);
