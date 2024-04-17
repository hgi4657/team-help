document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    function cardClickHandler(event) {
        const name = event.currentTarget.querySelector('.name').innerText;

        let url;
        switch (name) {
            case '이지우':
                url = 'jw.html'
                location.replace('url')
                break;
            case '권수연':
                url = 'sy.html'
                location.replace('url')
                break;
            case '박민영':
                url = 'my.html'
                location.replace('url')
                break;
            case '이현욱':
                url = 'hw.html'
                location.replace('url')
                break;
            case '장경진':
                url = 'kj.html'
                location.replace('url')
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

// // 팀 소개 페이지 이동
// document.addEventListener("DOMContentLoaded", function() {
//     const team_img = document.getElementById('team_box')
//     team_img.addEventListener("click", function() {
//         // location.href = "suyeon.html" >>> 팀소개 html로 변경
//     })
// })