$(document).ready(initSortingPortfolio());

var pclone;

function initSortingPortfolio(){
  pclone = $(".portfolio").clone();
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
      reattachEvents("sorterComunidades");
      reattachEvents("sorterCerradas");
    }
    );//end quicksand
 }

 function reattachEvents(sorterId){
   //event listener to hide/show sorters
       $("."+sorterId).on("click", function(e){
         e.preventDefault();
         showSorter(sorterId);
         var selected = $(this).attr('href');
         doSort($("."+selected),sorterId,"portfolio");
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

