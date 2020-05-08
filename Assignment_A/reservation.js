$(document).ready(function() 
{
    document.getElementById("arrival_date").focus();
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var check = 1;
    
    $("#reservation_form").submit(function(event))
    {
                                  
        if(document.getElementById("arrival_date").value == "")
        {
            document.getElementById("arrival_date_info").textContent = "Required Field";
            check = 0;
        }

        if(document.getElementById("nights").value=="")
        {
            document.getElementByID("nights_info").textContent = "Required Field";
            check = 0;
        }

        if(document.getElementById("name").value=="")
        {
            document.getElementByID("name_info").textContent = "Required Field";
            check = 0;
        } 

         if(document.getElementById("email").value=="")
        {
            document.getElementByID("email_info").textContent = "Required Field";
            check = 0;
        }

         if(document.getElementById("phone").value=="")
        {
            document.getElementByID("phone_info").textContent = "Required Field";
            check = 0;
        }  

         if(isNaN(document.getElementById("nights").value))
        {
            document.getElementByID("nights_info").textContent = "Numeric Field";
            check = 0; 
        }      

        if(!emailPattern.test(document.getElementById("email").value))
        {
            document.getElementById("email_info").textContent="Valid Emails Only";
            check = 0;
        }

        if(check == 0)
        event.preventDefault();
    }    
    
}); // end ready