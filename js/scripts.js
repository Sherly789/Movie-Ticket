//back
function Ticket (title, time, age){
  this.movieTitle = title;
  this.timeInput = time;
  this.ageInput = age;
  this.price = 0;
}

Ticket.prototype.ticketPrice = function() {
  if (this.timeInput === "12:00PM" || this.ageInput === "yes" ) {
    return this.price = 10;
  } else {
    return this.price = 12;
  }
}


//front
$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();

    var title = $("#title").val();
    var time = $("#time").val();
    var age = $("input:radio[name=age]:checked").val();
    var userTicket = new Ticket (title, time, age);

    $("#output").show();
    // $("#output").text(userTicket.ticketPrice());
    $("#nameOutput").text(userTicket.movieTitle);
    $("#timeOutput").text(userTicket.timeInput);
    $("#priceOutput").text(userTicket.ticketPrice());

  });
});
