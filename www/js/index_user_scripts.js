(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  List Item */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_sub_page_1"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
