$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

  var inputtedItem = $("input#new-item").val();
  var inputtedPlace = $("input#new-place").val();
  var inputtedTime = $("input#new-time").val();
  var inputtedNotes = $("input#new-notes").val();
  var inputtedInvite = $("input#new-invitation").val();
  var newToDoItem = {Item: inputtedItem, Place: inputtedPlace, Time: inputtedTime, Notes: inputtedNotes, Invite: inputtedInvite };


  $("ul#to-do").append("<li><input type = 'checkbox' class= 'myCheckbox'><span class='toDoItem'>" + "  " + newToDoItem.Item + " at " + newToDoItem.Place + "</span></li>");

  $("input#new-item").val("");
  $("input#new-place").val("");
  $("input#new-time").val("");
  $("input#new-notes").val("");
  $("input#new-invitation").val("");

  $(".myCheckbox").last().click(function() {
    alert("Item has been marked complete");
  });

  $(".toDoItem").last().click(function() {
    $("#show-item").show();
    $("#show-item h2").text(newToDoItem.Item + " " + newToDoItem.Place);
    $(".item").text(newToDoItem.Item);
    $(".place").text(newToDoItem.Place);
    $(".time").text(newToDoItem.Time);
    $(".notes").text(newToDoItem.Notes);
    $(".invite").text(newToDoItem.Invite);

    });
  });

$("form#notes").click(function() {
  $("#new-notes").show();
  $("#notes-label").show();

});

$("form#invite").click(function() {
  $("#new-invitation").show();
  $("#inv-label").show();

});
});
