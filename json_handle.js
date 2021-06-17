
			
				//new
				window.onload = function () {
				    var url = document.location.href,
				        params = url.split('?')[1].split('&'),
				        data = {}, tmp;
				    for (var i = 0, l = params.length; i < l; i++) {
				         tmp = params[i].split('=');
				         data[tmp[0]] = tmp[1];
				    }
				    getdata(data.id);
				}
				//

			function getdata(item)
						{
				var flag=false;
				var xhttp=new XMLHttpRequest();
				xhttp.onreadystatechange=function(){
					if(xhttp.readyState==4 && xhttp.status==200)
					{
						var javaobj=JSON.parse(xhttp.response);
						//document.getElementById('debug').innerHTML=javaobj.products
						//var ele=document.getElementById('debug').querySelectorAll("*");
						var len=javaobj.products.length;
						console.log(len);
						for(var i = 0; i < javaobj.products.length; i++)
						{
							if((javaobj.products[i].id).localeCompare(item)==0)
							{
								document.getElementById("item-image").src=javaobj.products[i].image;
								document.getElementById("item-name").innerText=javaobj.products[i].name;
								document.getElementById("item-description").innerText=javaobj.products[i].description;
								document.getElementById("item-price").innerText=javaobj.products[i].price;
								document.getElementById("pid").innerText=javaobj.products[i].id;
								flag=true;
							}
							
							}
							if(flag==false)
							{
								window.location.href="index.html";
							}
						}

					
				};
				xhttp.open("GET","sample.json",true);
				xhttp.send();
			}
