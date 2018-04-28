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
    var correct_audio = document.createElement('audio');
    correct_audio.setAttribute('src', 'https://www.soundjay.com/misc/sounds/bell-ring-01.mp3');
    var wrong_audio = document.createElement('audio');
    wrong_audio.setAttribute('src', 'https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3');

    $('#test').html(sumthing);
    if (response === sumthing) {
        correct_audio.play();
        $('#feedback'+feedback_id).attr("src", "./images/right.png");
    } else {
        wrong_audio.play();
        $('#feedback'+feedback_id).attr("src", "./images/wrong.jpeg");
    }
}