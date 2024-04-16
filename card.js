// 1번
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('.card');

    function cardClickHandler(event) {
        var name = event.currentTarget.querySelector('.name').innerText;

        var url;
        switch (name) {
            case '이지우':
                url = '#';
                break;
            case '권수연':
                url = '#';
                break;
            case '박민영':
                url = '#';
                break;
            case '이현욱':
                url = '#';
                break;
            case '장경진':
                url = '#';
                break;
            default:
                return;
        }
        window.open(url, '_self');
    }

    // 각 카드에 클릭 이벤트 추가
    cards.forEach(function(card) {
        card.addEventListener('click', cardClickHandler);
    });
});

// 2번
document.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector('section');

    section.addEventListener('click', function(event) {
        if (event.target.classList.contains('card')) {
            var name = document.getElementById('JU').id
            var url = '#' + name;

            window.open(url, '_self');
        }
    });
});