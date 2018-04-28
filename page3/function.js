var finalanswer = "grady";

$(function () {
    $(".draggable").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner",
        helper: "clone"
    }); 
    $(".droppable").droppable({
        tolerance: "fit"
    });
    // $(".feedback").attr("src", "./images/question.png")
});

function dragit(answer) {
    //  return answer;
    sumthing = answer;
    $('#test').html(answer);
}

function dropit(feedback_id, response) {
    $('#test').html(sumthing);
    if (response === sumthing) {
        $('#feedback'+feedback_id).attr("src", "./images/right.png");
    } else {
        $('#feedback'+feedback_id).attr("src", "./images/wrong.jpeg");
    }
}