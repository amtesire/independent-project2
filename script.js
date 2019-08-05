document.getElementById("delivery").addEventListener("click", function () {
  prompt("enter your location");
  alert("thank you, your order will be processed and get back at you");
})

// business logic
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

// user interface
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
   var toppingz = $("select#size2").val();
    var numberf = $("input#size3").val();

    var price, totalPrice;
    switch(sizingb){
      case size = "small":
      price = 2500 ;
    if(crustd = "thin") {
      totalprice = (price*numberf) + 250;
    }
    // else if (crustd = "thick"){
    //   totalprice = (price*numberf)+ 250;
    // }
    // else if (crustd = "flatbread"){
    //   totalprice = (price*numberf) + 250;
    // }
    // else if (crustd = "custom crusts"){
    //   totalprice = (price*numberf) + 250;
    // }
    // else if (crustd = "Authentic Wood Fired Crusts"){
    //   totalprice = (price*numberf) + 250;
    // }
    // else if (crustd = "focaccia"){
    //   totalprice = (price*numberf) + 250;
    // }
    break;
    
    case size = "medium":
    price = 5500;
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
    price = 7000;
    if(crustd = "thin") {
      totalprice = (price*numberf) + 250;
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
  switch (toppingz) {
    case toppingz = "Pepperoni":
        totalprice = totalprice + 500;
        break;
    case toppingz = "Mushrooms":
        totalprice = totalprice + 300;
        break;
    case toppingz = "Sausage":
        totalprice = totalprice + 700;
        break;
    case toppingz = "Extra cheese":
        totalprice = totalprice + 200;
        break;
    case toppingz = "Black olives":
        totalprice = totalprice + 500;
        break;
        case toppingz = "Onions":
        totalprice = totalprice + 500;
        break;
        case toppingz = "Bacon":
        totalprice = totalprice + 500;
        break;
        case toppingz = "Green peppers":
        totalprice = totalprice + 500;
        break;
      }
  console.log(totalprice);
  });
  $("select#size").val("");
  $("select#size1").val("");
  $("select#size2").val("");
  $("input#size3").val("");

});

























































