$(document).ready(function() {
  console.log(exercises);

  $.each(exercises, function(index, value){
    $("#selectArea2").append("<div class='exercise-value'><h3>"+value.name+"</h3></div>");
  })

  $('.exercise-value').click(function(value, data){
    console.log("Clicked, ", $(this).toggleClass('selected'));
  })

  $('#btnGenerate').click(function(){
    var selectedExercises = [];
    $(".selected").each(function(index, data){
      console.log($(data).get(textContent));
      selectedExercises.push(exercises["'"+data.innerText]+"'");
    });
    console.log(selectedExercises);
  })
});

var exercises = {
  "KB Swing": {name: "KB Swing", timePerRep: 1, pausePer10: 10},
  "Air Squat": {name: "Air Squat", timePerRep: 1, pausePer10: 10},
  "Pushup": {name: "Pushup", timePerRep: 1, pausePer10: 10},
  "Pullup": {name: "Pullup", timePerRep: 1, pausePer10: 10},
  "Burpee": {name: "Burpee", timePerRep: 1, pausePer10: 10}
}
