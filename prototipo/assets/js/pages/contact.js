var Contact = function () {

    return {
        
        //Map
        initMap: function (latitud, longitud) {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: latitud,
				lng: longitud
			  });
			   var marker = map.addMarker({
		            lat: latitud,
					lng: longitud,
		            title: 'Loop, Inc.'
		        });
			});
        }

    };
}();