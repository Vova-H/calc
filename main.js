'use strcit';


(function ($) {

    let equals = $('#equals'); /// селекция по id 
    let reset = $('.reset');
    let button = $('.button');

    let result = 0;
    let resultForMult = 1;
    let number = ''; /// входные данные
    let input = '';

    let item; /// вспомагательная переменная
    let arr;




    button.click(function () {

        number += ($(this).val());
        input = $('.input').val(number);
    });

    equals.click(function () {

        if (input != '') {
            if (input.val().includes('+')) {
                arr = input.val().split('+');
                arr.forEach(element => {
                    item = parseInt(element);
                    result += item;
                    input.val(result);
                });
                result = 0;
                number = '';
                return;


            } else if (input.val().includes('x')) {
                arr = input.val().split('x');
                arr.forEach(element => {
                    item = parseInt(element);
                    resultForMult *= item;
                    input.val(resultForMult);
                });
                resultForMult = 1;
                number = '';
                return;

            } else if (input.val().includes('/')) {
                arr = input.val().split('/');
                let i = 0;
                arr.forEach(element => {
                    item = parseInt(element);
                    if (i == 0) {
                        resultForMult = item;
                    } else if (i > 0) {
                        resultForMult /= item;
                    }
                    input.val(resultForMult);
                    i++;
                });
                resultForMult = 1;
                number = '';
                return;

            } else if (input.val().includes('-')) {
                arr = input.val().split('-');
                let i = 0;
                arr.forEach(element => {
                    item = parseInt(element);
                    if (i == 0) {
                        resultForMult = item;
                    } else if (i > 0) {
                        resultForMult -= item;
                    }
                    input.val(resultForMult);
                    i++;
                });
                resultForMult = 1;
                number = '';
                return;
            }
        }


    });


    reset.click(function () {
        input.val('');
        number = '';
    });


})(jQuery);