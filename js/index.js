// element-closest | CC0-1.0 | github.com/jonathantneal/closest
if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
        let self = this;
        var elements = (self.document || self.ownerDocument).querySelectorAll(selector);
        var index = 0;

        while (elements[index] && elements[index] !== self) {
            ++index;
        }

        return Boolean(elements[index]);
    };
}

if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
        let self = this; // linting problems
        let curNode = self;

        while (curNode && curNode.nodeType === 1) {
            if (curNode.matches(selector)) {
                return curNode;
            }

            curNode = curNode.parentNode;
        }

        return null;
    };
}

$(".composition-wrapper .fa").on('click', function(e) {
    console.log(e.target);
    var jTarget = $(e.target);
    if (jTarget.hasClass("fa-chevron-right"))
    {
        $(e.target.nextElementSibling).animate({
            'opacity': 1,
            'height': 'toggle'
        });
        jTarget.fadeOut({
            'complete': function() {
                jTarget.removeClass("fa-chevron-right");
                jTarget.addClass("fa-chevron-down");
                jTarget.fadeIn();
            }
        });
    }
    else if (jTarget.hasClass("fa-chevron-down"))
    {
        $(e.target.nextElementSibling).animate({
            'opacity': 0,
            'height': 'toggle'
        });
        jTarget.fadeOut({
            'complete': function() {
                jTarget.removeClass("fa-chevron-down");
                jTarget.addClass("fa-chevron-right");
                jTarget.fadeIn();
            }
        });   
    }
});

$(".header-scrollto").on("click", function(e) {
    var target = e.target.closest("*[data-target]").getAttribute('data-target');

    $("body, html").animate({
        'scrollTop': $("#" + target).position().top - 50
    });
});