$(".submit").on("click", function(event) {
$.post("/api/tables", newReservation, function(data) {
    if (data) {
        alert("You've been booked!");
    } else {
        alert("Sorry were pretty busy!");
    };

    $("reserve-id").val("");
    $("reserve-name").val("");
    $("reserve-email").val("");
    $("reserve-phone").val("");
})

let newReservation = {
    customerID: $("#reserve-id").val.trim,
    customerName: $("#reserve-name").val.trim,
    customerEmail: $("#reserve-email").val.trim,
    customerPhone: $("#reserve-phone").val.trim
};
})

