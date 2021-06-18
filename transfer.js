function collecting(prod_name) {
    //var b = document.getElementById(prod_name).value,
        url = 'products.html?id=' + encodeURIComponent(prod_name);

    document.location.href = url;
}
function addtocart()
{
    window.alert("Added to Cart");
    console.log("ADD TO CART");
    var quant=document.getElementById("quantity").value;
    var pid=document.getElementById("pid").textContent;
    /////
    //access json
    var flag=false;
    var len=0;
    var i=1;
               
				var xhttp=new XMLHttpRequest();
				xhttp.onreadystatechange=function(){
					if(xhttp.readyState==4 && xhttp.status==200)
					{
						var javaobj=JSON.parse(xhttp.response);
						len=javaobj.products.length;
                        for(i=1;i<=len;i++)
                        {
                            
                                if(pid==i)
                                {
                                    localStorage.setItem(i,quant);
                                }

                        }
                        
						
                    }
				};
                
				xhttp.open("GET","sample.json",true);
				xhttp.send();
    /////
    console.log(localStorage);
}
