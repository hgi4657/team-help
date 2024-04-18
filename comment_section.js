$("#commentgbox").hide();

$("#btn_editor").click(async function () {
    $("#commentgbox").toggle();
});

// 새로운 div를 생성
const newComment = document.createElement('div');

// 배경에 랜덤 색상을 선택되는 함수
function randomColor() {
    const color_list = ['#8ABDD1', '#8AD1CF', '#8AA7D1', '#EAEAEA', '#FFD5C2', '#FFCAC2'];
    return color_list[Math.floor(Math.random() * color_list.length)];
}

// 새 댓글 등록 함수
function addComment(name, text) {
    // 랜덤배경저장
    const backColor = randomColor();

    // 댓글 뻐대
    const commentHtml =
        `<div class="box" style="background-color: ${backColor};">
      <div class="nickname">${name}</div>
      <div class="content">${text}</div>
      <button type="button" class="btn UDbtn del" style="background-color: rgb(221, 221, 221);">삭제</button>
    </div>`;

    // 새로 만든 div에 댓글 뼈대 넣기
    newComment.innerHTML = commentHtml

    // 댓글 컨테이너에서 자식이 있으면 그 위에 올리기
    const textContainer = document.getElementById('text_container');
    const firstChild = textContainer.firstChild;
    if (firstChild) {
        textContainer.insertBefore(newComment.firstChild, firstChild);
    } else {
        textContainer.appendChild(newComment.firstChild);
    }
}

// 삭제 버튼 기능
function delComment() {
    const dels = document.querySelectorAll('.del')

    dels.forEach(function (del) {
        del.addEventListener('click', () => {

            let del_check = confirm('정말 삭제하시겠습니까?')

            if (del_check === true) {
                // 가장 가까운 상위 요소 찾기
                const commetBox = del.closest('.box')
                commetBox.remove()
            } else {
                return
            }
            // const commetBox = del.closest('.box')
            // commetBox.remove()
        })
    })
}

// 등록 버튼 클릭 시 실행
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('sav').addEventListener('click', () => {
        // 입력 값 가져오기
        const name = document.getElementById('inp_name').value;
        const text = document.getElementById('inp_txt').value;
        console.log(name)
        console.log(text)

        // 내용 입력 확인
        if (name == '' && text == '') {
            alert("닉네임과 내용은 필수입니다")
        } else if (name == '') {
            alert("닉네임을 입력해주세요")
        } else if (text == '') {
            alert("내용을 입력해주세요")
        } else {
            let check = confirm('등록하시겠습니까?');
            if (check === true) {
                // 댓글을 컨테이너에 추가
                addComment(name, text);

                // 입력 필드 지우기
                document.getElementById('inp_name').value = '';
                document.getElementById('inp_txt').value = '';

                // 삭제 버튼 기능 호출
                delComment()

                // 수정 버튼 기능 호출(미구현)
                // corComment()
            } else {
                return
            }
        }
    });

})
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑구현완료↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// 입력 취소 버튼
document.getElementById('cancell').addEventListener('click', () => {
    document.getElementById('inp_name').value = '';
    document.getElementById('inp_txt').value = '';
    $("#commentgbox").hide();
})
