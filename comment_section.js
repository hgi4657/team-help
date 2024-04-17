$("#commentgbox").hide();

$("#btn_editor").click(async function () {
  $("#commentgbox").toggle();
});


// 새로운 div를 생성
const newComment = document.createElement('div');

// 배경에 랜덤 색상을 선택되는 함수
function randomColor() {
    const color_list = ['#8ABDD1', '#8AD1CF', '#8AA7D1', '#EAEAEA'];
    return color_list[Math.floor(Math.random() * color_list.length)];
}

// 새 댓글 등록 함수
function addComment(name, text) {    
    // 랜덤배경저장
    const backColor = randomColor();

    // 댓글 뻐대
    const commentHtml = 
    `<div class="text_box" style="background-color: ${backColor};">
        <div class="text_name">${name}</div>
        <div class="text_txt">${text}</div>
        <button class="del">삭제</button>
        <button class="cor">수정</button>
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

    dels.forEach(function(del) {
        del.addEventListener('click', () => {

            let del_check = confirm('정말 삭제하시겠습니까?')

            if (del_check === true) {
                // 가장 가까운 상위 요소 찾기
                const commetBox = del.closest('.text_box')
                commetBox.remove()
            } else {
                return
            }
            // const commetBox = del.closest('.text_box')
            // commetBox.remove()
        })
    })
}

// 수정 버튼 기능 (미구현)
// function corComment() {
//     const cors = document.querySelectorAll('.cor')

//     cors.forEach(function(cor) {
//         cor.addEventListener('click', () => {
//             const commentBox = cor.closest('.text_box')

//             // 수정 버튼이 현재 편집 중인지 확인
//             const isEditing = commentBox.classList.contains('editing');

//             if (!isEditing) {
//                 // 수정 중 상태로 변경
//                 commentBox.classList.add('editing');

//                 // 댓글 내용을 input 상자로 변경
//                 const textDiv = commentBox.querySelector('.text_txt');
//                 const textContent = textDiv.textContent;
//                 textDiv.innerHTML = `<input type="text" class="edit_text_input" value="${textContent}">`;

//                 // 수정 완료를 처리하는 함수
//                 function handleEditCompletion() {
//                     // 수정 내용 가져오기
//                     const updatedText = inputField.value;

//                     // 댓글 내용을 수정된 내용으로 업데이트
//                     textDiv.textContent = updatedText;

//                     // 수정 완료 상태로 변경
//                     commentBox.classList.remove('editing');

//                     // 이벤트 리스너 제거
//                     inputField.removeEventListener('blur', handleEditCompletion);
//                 }

//                 // 수정 버튼 텍스트 변경
//                 editButton.textContent = '수정 완료';

//                 // 수정 완료 처리를 위한 이벤트 리스너 추가
//                 const inputField = commentBox.querySelector('.edit_text_input');
//                 inputField.addEventListener('blur', handleEditCompletion);
//             } else {
//                 // 수정 완료 상태일 때, 수정 버튼 텍스트를 다시 원래대로 변경
//                 editButton.textContent = '수정';

//                 // 수정 완료 상태로 변경
//                 commentBox.classList.remove('editing');
//             }
//         });
//     });
// }



// 등록 버튼 클릭 시 실행
document.getElementById('sav').addEventListener('click', () => {
    // 입력 값 가져오기
    const name = document.getElementById('inp_name').value;
    const text = document.getElementById('inp_txt').value;

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
            
            corComment()
        } else {
            return
        }
    }
});
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑구현완료↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑