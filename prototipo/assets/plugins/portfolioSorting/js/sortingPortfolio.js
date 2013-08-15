$(document).ready(initSortingPortfolio());

var pclone;
var sorterComClone;
var sorterCerClone;

function initSortingPortfolio(){
  pclone = $(".portfolio").clone();
  sorterComClone = $("div#sorterComunidades").children(":first").clone();
  sorterCerClone = $("div#sorterCerradas").children(":first").clone();
  sortPortfolio("sorterCiudades");
  sortPortfolio("sorterComunidades");
  sortPortfolio("sorterCerradas");

  doSort($(".Chihuahua"),"sorterCiudades");
}

function sortPortfolio(sorterId){
 // pclone = $("."+portfolioClass).clone();
  
  $("#"+sorterId+" a").on("click", function(e){
    e.preventDefault();
    doSort($(this),sorterId);
    
  }); // end click event listener
}

 function doSort(_this, sorterId){
    var sorttype="";
    
    // determine if another link is selected
    if(!_this.hasClass("selected")) {
      $("#"+sorterId+" a").removeClass("selected");
      _this.addClass("selected");
    }

    hideLowerLevels(sorterId);
    
    // check filter sort type
    $(".sort a").filter(".selected").each(function(){
      sorttype += " "+ $(this).attr("class");
    });

    sorttype = sorttype.split(" selected").join("").trim();
 
    var filterselect = pclone.find("li[class='"+sorttype+"']");
    // sort
    $(".portfolio").quicksand(filterselect, 
    {
      adjustHeight: 'auto',
      duration: 550
    }, function() { 
      // callback function
      reattachEvents("sorterComunidades", sorterComClone);
      reattachEvents("sorterCerradas", sorterCerClone);
    }
    );//end quicksand
 }

 function reattachEvents(sorterId, sorterClone){
   //event listener to hide/show sorters
       $("."+sorterId).on("click", function(e){
         e.preventDefault();
         var selected = $(this).attr('href');
         var parentArray = $(this).parent().attr('class').split(" ");
         var parent = parentArray[parentArray.length-1];
         filterSorter(sorterId, parent, sorterClone);
         $("a."+parent).addClass("selected");

         doSort($("a."+selected),sorterId,"portfolio");
         showSorter(sorterId);
         $("ul.unstyled").css("style", "height: 28px;");
       });
   //
 }

  function showSorter(sorterId) {
   $("#"+sorterId).removeClass("sortHidden").addClass("sortUnhidden");
 }
 
 function hideSorter(sorterId) {
   $("#"+sorterId).removeClass("sortUnhidden").addClass("sortHidden");
 }
 
 function unselect(sorterId) {
   $("#"+sorterId+" a").removeClass("selected");
 }

 function hideLowerLevels(sorterId){
     if (sorterId=="sorterCiudades") {
       unselect("sorterComunidades");
       hideSorter("sorterComunidades");
       unselect("sorterCerradas");
       hideSorter("sorterCerradas");
     }else if (sorterId=="sorterComunidades") {
       unselect("sorterCerradas");
       hideSorter("sorterCerradas");
     };
 }

function filterSorter(sorterId, filter, sorterClone){
    var sorttype = filter.split(" selected").join("").trim();
    var filterselect = sorterClone.find("li[class='"+sorttype+"']");
    // sort
    $("div#"+sorterId).children(":first").quicksand(filterselect, 
    {
      adjustHeight: '28px',
      duration: 0
    }, function() { 
      // callback function  //reattach events to sorters
      sortPortfolio("sorterCiudades");
      sortPortfolio("sorterComunidades");
      sortPortfolio("sorterCerradas");

    });

    //end quicksand
}
