// document.getElementById("delivery").addEventListener("click", function () {
//   prompt("enter your location");
//   alert("thank you ");
// })
function Pizza(size, crust, topping, quantity, totalprice){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.totalprice = totalprice;
}
Pizza.prototype.fullOrder = function() {
  return this.size + " " + this.crust + " " +this.topping + " " + this.quantity + " " + this.totalprice;
}
// $(document).ready(function(){
//     $(".wor").hide();
//     $("#work").css({
//      opacity:1
//    });
//     $("#wo").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor1").hide();
//     $("#work1").css({
//      opacity:1
//    });
//     $("#wo1").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor1").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor1").fadeOut();
//     });
  
//     $(".wor2").hide();
//     $("#work2").css({
//      opacity:1
//    });
//     $("#wo2").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor2").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor2").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor3").hide();
//     $("#work3").css({
//      opacity:1
//    });
//     $("#wo3").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor3").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor3").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor4").hide();
//     $("#work4").css({
//      opacity:1
//    });
//     $("#wo4").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor4").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor4").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor5").hide();
//     $("#work5").css({
//      opacity:1
//    });
//     $("#wo5").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor5").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor5").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor6").hide();
//     $("#work6").css({
//      opacity:1
//    });
//     $("#wo6").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor6").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor6").fadeOut();
//     });
//   });
//   $(document).ready(function(){
//     $(".wor7").hide();
//     $("#work7").css({
//      opacity:1
//    });
//     $("#wo7").hover(function(){
//       $(this).stop().css({opacity:.4});
//       $(".wor7").fadeIn();
//       }, function(){
//         $(this).stop().css({opacity:1})
//       $(".wor7").fadeOut();
//     });
//   });

// $(document).ready(function(){
//   $("#addOrder").click(function(){
//     $("#checked").append('<div class="checked">' +
//     '<label for="size">choose Pizza size:</label>' +
    
//     '<select id="size" name="size">' +
//       '<option value="small">Small</option>' +
//       '<option value="medium">Medium</option>' +
//       '<option value="large">Large</option>' +
//     '</select>' +
//     '<br>' +
//     '<label for="size">choose Pizza crust:</label>' +
//     '<select id="size1" name="size">' +
//       '<option value="small">Flatbread crust</option>' +
//       '<option value="medium">Thin crust</option>' +
//       '<option value="large">Thick crust</option>' +
//       '<option value="large">Focaccia</option>' +
//       '<option value="large">Authentic Wood Fired Crusts</option>' +
//       '<option value="large">Custom Crusts</option>' +
//     '</select>' +
//     '<br>' +
//     '<label for="size">choose Pizza toppings:</label>' +
//     '<select id="size2" name="size">' +
//       '<option value="small">pepperoni</option>' +
//       '<option value="medium">Mushrooms</option>' +
//       '<option value="large">Onions</option>' +
//       '<option value="large">Sausage</option>' +
//       '<option value="large">Bacon</option>' +
//       '<option value="large">Extra cheese</option>' +
//       '<option value="large">Black olives</option>' +
//       '<option value="large">Green peppers</option>' +
//     '</select>' +
//     '<br>' +
//     '<label for="size">choose number of pizzas:</label>' +
//     '<input type="number" class="form-control" id="size3" min="1" placeholder="Quantity e.g:5">' +
//    '</div>' );
//   });
// });

$(document).ready(function(){
  $("form#checked").submit(function(event){
    event.preventDefault();
    var sizing = $("select#size").val();
    var crusts = $("select#size1").val();
    var topping1 = $("select#size2").val();
    var number = $("input#size3").val();
    
    var newpizza = new Pizza(sizing, crusts, topping1, number, totalprice);
    console.log(newpizza);

    $(".btn").last().click(function(){
      $("#show-order").show();
      $("#show-order h2").text(newpizza.size);
      $(".size").text(newpizza.size);
      $(".crust").text(newpizza.crust);
      $(".topping").text(newpizza.topping);
      $(".quantity").text(newpizza.quantity);
      $(".totalPrice").text(newpizza.totalprice);
      $("ul#ordering").text(" ");
    });
  });

  $(".btn").click(function(){
    var sizingb = $("select#size").val();
    var crustd = $("select#size1").val();
   // var toppingd = $("select#size2").val();
    var numberf = $("input#size3").val();

    var price, totalPrice;
    switch(sizingb){
      case size = "small":
      price = "2500";
    if(crustd = "thin") {
      totalprice = (price*numberf) + 150;
    }
    else if (crustd = "thick"){
      totalprice = (price*numberf)+ 250;
    }
    else if (crustd = "flatbread"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "custom crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Authentic Wood Fired Crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "focaccia"){
      totalprice = (price*numberf) + 250;
    }
    break;
    
    case size = "medium":
    price ="5500";
    if(crustd = "thin") {
      totalprice = (price*numberf) + 150;
    }
    else if (crustd = "thick"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "flatbread"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "custom crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Authentic Wood Fired Crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "focaccia"){
      totalprice = (price*numberf) + 250;
    }
    break;

    case sizingb = "large":
    price = "7000";
    if(crustd = "thin") {
      totalprice = (price*numberf) + 150;
    }
    else if (crustd = "thick"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "flatbread"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "custom crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Authentic Wood Fired Crusts"){
      totalprice = (price*numberf) + 250;
    }
    else if (crustd = "focaccia"){
      totalprice = (price*numberf) + 250;
    }
    break;
  }
  
  console.log(totalprice);
  });
  $("select#size").val("");
  $("select#size1").val("");
  $("select#size2").val("");
  $("input#size3").val("");

});





































































