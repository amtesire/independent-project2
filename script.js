$(document).ready(function(){
    $(".wor").hide();
    $("#work").css({
     opacity:1
   });
    $("#wo").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor1").hide();
    $("#work1").css({
     opacity:1
   });
    $("#wo1").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor1").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor1").fadeOut();
    });
  });
  
  $(document).ready(function(){
    $(".wor2").hide();
    $("#work2").css({
     opacity:1
   });
    $("#wo2").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor2").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor2").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor3").hide();
    $("#work3").css({
     opacity:1
   });
    $("#wo3").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor3").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor3").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor4").hide();
    $("#work4").css({
     opacity:1
   });
    $("#wo4").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor4").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor4").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor5").hide();
    $("#work5").css({
     opacity:1
   });
    $("#wo5").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor5").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor5").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor6").hide();
    $("#work6").css({
     opacity:1
   });
    $("#wo6").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor6").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor6").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".wor7").hide();
    $("#work7").css({
     opacity:1
   });
    $("#wo7").hover(function(){
      $(this).stop().css({opacity:.4});
      $(".wor7").fadeIn();
      }, function(){
        $(this).stop().css({opacity:1})
      $(".wor7").fadeOut();
    });
  });

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
function Pizza(size, crust, topping, quantity){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
}
Pizza.prototype.fullOrder = function() {
  return this.size + " " + this.crust + " " +this.topping + " " + this.quantity;
}
$(document).ready(function(){
  $("form#checked").submit(function(event){
    event.preventDefault();
    var sizing = $("select#size").val();
    var crusts = $("select#size1").val();
    var topping1 = $("select#size2").val();
    var number = $("input#size3").val();
    
    var newpizza = new Pizza(sizing, crusts, topping1, number);
    console.log(newPizza);










































































    var price
  });
});