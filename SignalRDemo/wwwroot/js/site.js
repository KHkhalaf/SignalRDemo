var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (fromUser, Message){
    var msg = fromUser + " : " + Message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").append(li);
});

connection.start();

$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("SendMessage", fromUser, message);
});