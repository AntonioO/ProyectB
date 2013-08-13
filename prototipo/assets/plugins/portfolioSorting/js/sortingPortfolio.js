$(document).ready(initSortingPortfolio());

function initSortingPortfolio(){
  sortPortfolio("sorterCiudades","portfolio");
  sortPortfolio("sorterComunidades","portfolio");
  sortPortfolio("sorterCerradas","portfolio");
}


function sortPortfolio(sorterId , portfolioClass){
  $("#"+sorterId+" a").on("click", function(e){
    e.preventDefault();

    doSort($(this),sorterId , portfolioClass);

  }); // end click event listener
}

function doSort(_this,sorterId , portfolioClass){
    var pclone = $("."+portfolioClass).clone();
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
    
    $("."+portfolioClass).quicksand(filterselect, 
    {
      adjustHeight: 'auto',
      duration: 550
    }, function() { // callback function
      reattachEvents("sorterComunidades");
      reattachEvents("sorterCerradas");
    }
    );//end quicksand
}

function hideLowerLevels(sorterId){
    //if sorterCiudades
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
