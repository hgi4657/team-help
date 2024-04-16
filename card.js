document.addEventListener("DOMContentLoaded", function() {
    // 각 카드 요소를 선택합니다.
    var cards = document.querySelectorAll('.card');

    // 카드 요소를 클릭할 때 실행할 함수를 정의합니다.
    function cardClickHandler(event) {
        // 클릭된 카드의 하위 요소인 이름 클래스를 가진 요소의 텍스트를 가져옵니다.
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

    // 각 카드 요소에 클릭 이벤트를 추가합니다.
    cards.forEach(function(card) {
        card.addEventListener('click', cardClickHandler);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector('section');

    section.addEventListener('click', function(event) {
        if (event.target.classList.contains('card')) {
            // 클릭된 카드의 하위 요소인 name 클래스를 가진 요소의 텍스트를 가져와서 URL로 사용합니다.
            var name = document.getElementById('JU').id
            var url = 'https://example.com/' + name;

            window.open(url, '_self');
        }
    });
});