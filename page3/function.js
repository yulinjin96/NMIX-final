var finalanswer = "grady";




$(function () {
    $(".draggable").draggable(); //all instances of draggable class are now draggable
    $(".droppable").droppable(); //#droppable id, just one div tag, is now droppable
});

function dragit(answer) {
    //  return answer;
    sumthing = answer;
    $('#test').html(answer);
}

function dropit(response) {

    $('#test').html(sumthing);
    if (response === sumthing) {
        $('#feedback').html("correct");
    } else {
        $('#feedback').html("wrong stupid!");
    }

}