var flag = true;

function cargar()
{
	var divelem = document.getElementsByTagName('div');
	var num = document.getElementById("num").value;

	//Crea Div e input.
	var D = document.createElement("div");
	var i = document.getElementsByTagName('input');
	
	if(num>0)
	{
		//Añade un Div en el body y le agrega un atributo al div creado.
		document.getElementsByTagName('body')[0].appendChild(D);
		document.getElementsByTagName('div')[1].setAttribute("id","marco");

		//Crea tantos div como se hay en num.
		for(var i=0; i<num; i++)
		{
			D = document.createElement("div");
			divelem[1].appendChild(D);	
		}

		//Añade y cambia los atributos.
		document.getElementById("CargaDa").setAttribute("onclick", "carga_in()");
		document.getElementById("CargaDa").setAttribute("value", "Añadir input");
		document.getElementsByTagName("div")[0].getElementsByTagName("label")[0].innerHTML ="";
		document.getElementById("num").setAttribute("style","display:none");
		document.getElementById("num").setAttribute("readonly","readonly");
	}
	else
	{
		alert("Error! \nDebe introducir numeros positivos.");
	}
}

function carga_in()
{
	
	var divelem = document.getElementsByTagName('div')[1].getElementsByTagName("div");
	var info = ["Introduzca el primer numero.", "Introduzca el segundo numero.","Introduzca el tipo de operacion."]
	var lbl ="";
	var inp = "";
	var li = "";
	var p ="";
	var entradas = "";

	if(flag)
	{
		for(var i = 0; i<divelem.length; i++)
		{
			//Crea un ul y lo añade en el div
			var u = document.createElement("ul");
			divelem[i].appendChild(u);

			//Crea inputs.
			for(j=0; j<4; j++)
			{
				lbl = document.createElement("label");
				inp = document.createElement("input");
				li = document.createElement("li");
				divelem[i].getElementsByTagName("ul")[0].appendChild(li);
				if(j<3)
				{
					divelem[i].getElementsByTagName("ul")[0].getElementsByTagName("li")[j].appendChild(lbl);
					divelem[i].getElementsByTagName("ul")[0].getElementsByTagName("li")[j].getElementsByTagName("label")[0].innerHTML = info[j]+" <br>";
				}
				divelem[i].getElementsByTagName("ul")[0].getElementsByTagName("li")[j].appendChild(inp);				
			}

			//Crea un <p> y lo añade en el div
			p = document.createElement("p");
			divelem[i].appendChild(p);

			//Crea o cambia los atributos en los inputs.
			entradas = divelem[i].getElementsByTagName("input");
			entradas[entradas.length-1].setAttribute("type","button");
			entradas[entradas.length-1].setAttribute("value","Calcular");
			entradas[entradas.length-1].setAttribute("onclick","operaciones(this.id)");
			entradas[entradas.length-1].setAttribute("id","calcula0"+i);
			entradas[entradas.length-2].setAttribute("placeholder","  |+|-|*|/|");
		}
		
		flag = false; //Para que se ejecute una vez.
	}		
}
	

function operaciones(pos)
{
	//Recibe en nombre de la id, toma los ultimos 2 valores y los convierte en entero.
	var pos = pos.substr(pos.length-2,pos.length);
	var posicion = parseInt(pos);

	//obtiene los valores de los inputs
	var posDiv = document.getElementsByTagName("div")[1].getElementsByTagName("div")[posicion];
	var compEntrada = document.getElementsByTagName("div")[1].getElementsByTagName("div")[posicion].getElementsByTagName("input");
	var num1 = document.getElementsByTagName("div")[1].getElementsByTagName("div")[posicion].getElementsByTagName("input")[0].value;
	var num2 = document.getElementsByTagName("div")[1].getElementsByTagName("div")[posicion].getElementsByTagName("input")[1].value;
	var oper = document.getElementsByTagName("div")[1].getElementsByTagName("div")[posicion].getElementsByTagName("input")[2].value;
	var n1 = parseFloat(num1);
	var n2 = parseFloat(num2);
	var err = "falta rellenar los campos: \n";
	var flag1 =false;
	

	

	//Comprueba que los inputs no esten vacios.
	for(var i=0; i<compEntrada.length; i++)
	{
		if(compEntrada[i].value=="")
		{
			compEntrada[i].style.border ="solid 2px red";
			err += "posicion "+(i+1)+"\n";
			flag1 = true;
		}
		else
		{
			compEntrada[i].style.border ="solid 1px gray";			
		}
	}

	if(flag1)
	{
		alert(err);		
	}

	//Realiza las operaciones.
	if(num1>=0 && num2>0)
	{
		
		switch(oper)
		{
			case "+":
				posDiv.getElementsByTagName("p")[0].innerHTML = "la suma es: "+(n1+n2).toFixed(2);
				break;
			case "-":
				posDiv.getElementsByTagName("p")[0].innerHTML = "la resta es: "+(n1-n2).toFixed(2);
				break;
			case "*":
				posDiv.getElementsByTagName("p")[0].innerHTML = "la multiplicacion es: "+(n1*n2).toFixed(2);
				break;
			case "/":
				posDiv.getElementsByTagName("p")[0].innerHTML = "la division es: "+(n1/n2).toFixed(2);
				break;
			default:
				alert("En el tipo de opercion debe ir: + - * /");
				break;
			
		}
	}
	else
	{
		alert("Debe Introducir numeros positivos \nAdemas el segundo numero debe ser mayor que cero.");
	}	
	
}

function decimales(num1,num2)
{

	var punto1 = num1.split(".");
	var punto2 = num2.split(".");
	

	if(punto1.length>1)
	{
		cont1 = punto1[1].length;
	}
	else
	{
		cont1 =0;
	}


	if(punto2.length>1)
	{
		cont2 = punto2[1].length;
	}
	else
	{
		cont2 = 0;
	}			
	
	decimales = Math.max(cont1,cont2);

	return decimales;
}