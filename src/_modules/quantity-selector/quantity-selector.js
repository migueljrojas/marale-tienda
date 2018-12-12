'use strict';

// Constructor
var QuantitySelector = function() {
    var leftArrow = $('.quantity-selector__left-arrow');
    var rightArrow = $('.quantity-selector__right-arrow');

    leftArrow.on('click', function(e) {
        e.preventDefault();
        var quantity = $(this).siblings('.quantity-selector__value');
        var initialValue = quantity.html();
        var number = parseInt(initialValue);

        if (number == 1) {

        } else {
            var finalValue = (number - 1);
            return quantity.html(finalValue)
        };
    });

    rightArrow.on('click', function(e) {
        e.preventDefault();
        var quantity = $(this).siblings('.quantity-selector__value');
        var initialValue = quantity.html();
        var number = parseInt(initialValue);
        var finalValue = number + 1;
        console.log(finalValue);
        return quantity.html(finalValue);

    });
};

module.exports = QuantitySelector;
