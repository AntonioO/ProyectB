$(document).ready(initSortingPortfolio());

function initSortingPortfolio(){
  sortPortfolio("sort","portfolio");
  sortPortfolio("sort2","portfolio");
}


function sortPortfolio(sortId , portfolioClass){
  var pclone = $("."+portfolioClass).clone();
  
  $("#"+sortId+" a").on("click", function(e){
    e.preventDefault();

    var sorttype="";
    
    // determine if another link is selected
    if(!$(this).hasClass("selected")) {
      $("#"+sortId+" a").removeClass("selected");
      $(this).addClass("selected");
    }
    
    $(".sort a").filter(".selected").each(function(){
      sorttype += " "+ $(this).attr("class");
    });

    sorttype = sorttype.split(" selected").join("").trim();

    // check filter sort type
    if(sorttype == "all") {
      var filterselect = pclone.find("li");
    } else {

      var filterselect = pclone.find("li[class='"+sorttype+"']");
    }
    
    $("."+portfolioClass).quicksand(filterselect, 
    {
      adjustHeight: 'auto',
      duration: 550
    }, function() { 
      // callback function
    }
    );//end quicksand
    
  }); // end click event listener
}



