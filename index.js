document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    function cardPage(event) {
        const name = event.currentTarget.querySelector('.name').innerText;

        let url;
        switch (name) {
            case '이지우':
                url = 'personal/jw.html'
                location.replace('url')
                break;
            case '권수연':
                url = 'personal/sy.html'
                location.replace('url')
                break;
            case '박민영':
                url = 'personal/my.html'
                location.replace('url')
                break;
            case '이현욱':
                url = 'personal/hw.html'
                location.replace('url')
                break;
            case '장경진':
                url = 'personal/kj.html'
                location.replace('url')
                break;
            default:
                return;
        }
        window.open(url, '_self');
    }

    // 각 카드에 클릭 이벤트 추가
    cards.forEach(function(card) {
        card.addEventListener('click', cardPage);
    });
});

// // 팀 소개 페이지 이동
// document.addEventListener("DOMContentLoaded", function() {
//     const team_img = document.getElementById('team_box')
//     team_img.addEventListener("click", function() {
//         // location.href = "suyeon.html" >>> 팀소개 html로 변경
//     })
// })