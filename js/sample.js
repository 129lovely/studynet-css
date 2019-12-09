$(document).ready(function(){
    initSummernote();
})

function initSummernote(){
    $('.summernote-study-condition-box').summernote({
        lang: 'ko-KR',
        height: 200 + 'px',                 // set editor height
        minHeight: 200 + 'px',             // set minimum height of editor
        maxHeight: 500 + 'px',             // set maximum height of editor
        focus: true,                  // set focus to editable area after initializing summernote
        placeholder: '모집 조건(나이, 지역, 전공 등)을 상세히 기입해주세요.',
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture']],
        ]
    });

    $('.summernote-study-explanation-box').summernote({
        lang: 'ko-KR',
        height: 200 + 'px',                 // set editor height
        minHeight: 200 + 'px',             // set minimum height of editor
        maxHeight: 500 + 'px',             // set maximum height of editor
        focus: true,                  // set focus to editable area after initializing summernote
        placeholder: '스터디 기간 내용, 진행 요일 및 시간 등의 일정, 진행 방식 등 세부 설명을 기입해 주세요. 활동 사진이나 소개 사진, 동영상 링크 등을 첨부하시면 좋습니다.',
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture']]
        ]
    });
}