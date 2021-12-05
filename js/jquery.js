$(".js-range-slider").ionRangeSlider({
        type: "double",
        postfix: '₽',
        min: 3000,
        max: 35000,
        from: 3000,
        to: 23000,
            hideMinMax: false,               // спрятать поля Min и Max
    hideFromTo: false,               // спрятать поля From и To

        step: 1, // длина шага, также может быть задана как десятичная дробь
                 onStart: function (data) {// обратный вызов 
            // fired then range slider is ready
        },
        onChange: function (data) {
            // fired on every range slider update
        },

        onUpdate: function (data) {
            // fired on changing slider with Update method
        }
 
    });

