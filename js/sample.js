var preBtn = null;

// 대댓글 창 열기
function openReComment(btn) {
    $('.write-comment-reply').remove();
    
    if( preBtn == null || preBtn.get(0) != $(btn).get(0) ){
        createReCommentBox(btn);
        return;    
    }

    preBtn = null;
}

function createReCommentBox(btn) {
    var btn_parent = $(btn).parent().parent();
    
    if( btn_parent.attr('class') == 'comment-reply-content' ) {
        // 대댓글일 경우 한단계 상위 엘리먼트로 올라간다
        btn_parent = btn_parent.parent();
    }
    
    var outer_div = $('<div></div>').addClass('write-comment-reply');
    var span = $('<span>ㄴ</span>');
    var textarea = $('<textarea></textarea>');
    var a = $('<a>대댓글 달기</a>');
    
    outer_div.append(span);
    outer_div.append(textarea);
    outer_div.append(a);
    
    btn_parent.after(outer_div);

    preBtn = $(btn);
    
    //<div class="write-comment-reply">
    //	<span>ㄴ</span>
    //	<textarea></textarea>
    //	<a href="#">대댓글<br/>달기</a>
    //</div>

}