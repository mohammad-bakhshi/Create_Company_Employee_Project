$(document).ready(function(){

    // code to read selected table row cell data (values).
    $("#myTable").on('click','.btnDelete',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         var col1=currentRow.find("td:eq(0)").text();
         $.ajax({
            type: "DELETE",
            url: `/${col1}`,
            success: function (response) {
                window.location.replace("/");
            }
        });
    });
});