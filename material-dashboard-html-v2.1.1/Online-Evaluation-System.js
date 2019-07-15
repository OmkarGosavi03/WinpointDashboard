console.log("Console");
// function createbtn() {
//   var button1 = document.getElementById('btn');
//   var button2 = document.createElement("input");
//   button2.setAttribute("type","button");
//   button2.setAttribute("id","t");
//   for(var i=0;i<5;i++){
//         button1.appendChild(button2);
//   }
// }

//Click event for button
$("body").on( "click", ".button-container button", function(){
alert( "Triggred by " + $(this).text() );
});

//Adds new button to DOM
i = 2;
$(".addtodom").click( function(e){
$(         )
$(".button-container").append( " <button>Button "+ i +"</button>" );
i++;
});
