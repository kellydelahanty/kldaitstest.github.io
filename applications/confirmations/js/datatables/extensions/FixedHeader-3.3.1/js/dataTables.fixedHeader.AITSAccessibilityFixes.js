/* MyFi script to fix data tables fixed header accessibility issues. Pawel Czarnota 07/01/2024 */

    //add below code to drawCallbackFunc function where you change display each time the data table is redrawn
    //or to any other code where rows are added/refreshed in data table
    /*
    $(".dataTables_wrapper a").on("focus", function() {
        scrollPageUp(
            element=$(this),
            headerHeight=130
        );
        return false;
    });
    */

    //scroll page up if focus is on the element within headerHeight
    function scrollPageUp(element,headerHeight){
        //get position of the element on the screen as seen by the user
		$thisTrueTop = element.offset().top - $(window).scrollTop();		
        //get position of the element on the html page
        $thisDocumentTop = element.offset().top;
        //set how many pixels we will be scrolling up by
        $offsetPixels = headerHeight + 35;

        if($thisTrueTop < headerHeight){
            //scroll user up by offsetPixels
            $("html, body").animate({ 
                 scrollTop: $thisDocumentTop  - $offsetPixels  }, 500
             );
        }
    }
