window.onload = function () {
    setdata();
    
}
function resetcart()
{
    localStorage.clear();
}
function setdata()
         {
    var flag=false;
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200)
        {
            var total=0;
            var javaobj=JSON.parse(xhttp.response);
            //document.getElementById('debug').innerHTML=javaobj.products
            //var ele=document.getElementById('debug').querySelectorAll("*");
            var len=localStorage.length;
            console.log(localStorage.key(0));
            console.log(localStorage);
            for(var i = 0; i <javaobj.products.length; i++)
                {
                    for(var j=0;j<localStorage.length;j++)
                    {
                        if(javaobj.products[i].id==localStorage.key(j))
                        {
                        var table = document.getElementById("cart-table");
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        cell1.innerHTML =javaobj.products[i].name;
                        cell2.innerHTML =localStorage.getItem(localStorage.key(j));
                        cell3.innerHTML =(javaobj.products[i].price)*localStorage.getItem(localStorage.key(j));
                        total=total+((javaobj.products[i].price)*localStorage.getItem(localStorage.key(j)));

                        }
                    }
                }
                document.getElementById("total-price").innerText=String(total)+"Rs";
               
            }
         
        
    };
    xhttp.open("GET","sample.json",true);
    xhttp.send();
}
