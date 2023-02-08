const $button = $('.submit-btn');
const $input = $('.email-input');
const $form = $('.email-form');
const $infoSection = $('.info-section');
$button.click(function(){
    if(($input).is(':invalid')){
        console.log('invalid')
        const $warnSymbol = $('<figure>');
        const $warnText = $('<p>');
        $warnSymbol.addClass('invalid-symbol');
        $warnText.addClass('invalid-text');
        $warnText.text('Please provide a valid email')
        $form.append($warnSymbol);
        $infoSection.append($warnText);
        $input.addClass('invalid-input');
        $button.addClass('invalid-btn');
    }
})