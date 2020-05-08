/*eslint-env jquery*/

$("#document").ready( function() 
{
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    ("#nights").focus();
    ("#arrival_date").focus();
  
        $("#reservation_form").submit(function(event) 
        {
            var isValid = true;
            var arrivalDate = $("#arrival_date").val().trim();  
            
            if (arrivalDate == "")
            {
                $("#arrival_date").next().text("Required Field");
                isValid = false;
            } 
            
            else 
            {
                $("#arrival_date").next().text("");
            }
            
            $("#arrival_date").val(arrivalDate);

            var nights = $("#nights").val().trim();
            
            if (nights == "") 
            {
                $("#nights").next().text("Required Field");
                    isValid = false;
            } 
            
            else if (isNaN($("#nights").val())) 
            {
                $("#nights").next().text("Numeric Field");
                isValid = false;
            } 
            
            else 
            {
                $("#nights").next().text("");
            }
            
            $("#nights").val(nights);   
            var name = $("#name").val().trim();  
            
            if (name == "") 
            {
                $("#name").next().text("Required Field");
                isValid = false;
            }
            
            else 
            {
                $("#name").val(name);
                $("#name").next().text("");
            }
            
            $("#name").val(name);
            var email = $("#email").val();
            
            if (email == "") 
            {
                $("#email").next().text("Required Field");
                isValid = false;
            } 
            
            else if ( !emailPattern.test(email)) 
            {
                $("#email").next().text("Valid Emails Only");
                isValid = false;
            } 
            
            else 
            {
                $("#email").next().text("");
            }
            
            $("#email").val(email);
            var phone = $("#phone").val().trim();
            
            if (phone == "") 
            {
                $("#phone").next().text("Phone number entry is required.");
                isValid = false;
            } 
            
            else 
            {
                $("#phone").next().text("");
            }
            
            $("#phone").val(phone);

            if (isValid == false) 
            {
                event.preventDefault();   
            }
        }
});