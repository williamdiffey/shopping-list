$(function(){
    $("#js-shopping-list-form").submit(function(event) {
      // prevent jQ trying to pass data to server
      event.preventDefault();
      // var for input to be passed to
      const newItem = $(".js-shopping-list-entry").val();
      // take input and make into a string
      $(".js-shopping-list-entry").val(" ");
      // HTML and reference to append to list
      $(".shopping-list").append(
        `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    }); 
  });
  // cross out
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });
  // delete
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
  });
  
  
  
  





// jQuery references:
// .val() https://www.w3schools.com/jquery/html_val.asp
// .append https://www.w3schools.com/jquery/html_append.asp
// .closest https://api.jquery.com/closest/