


function  enviar () 
{
    
  document.getElementById('refrescar').value = "1";
  document.getElementById("form").submit();
}

function cayley()
{
    document.getElementById('a').value = "1";
    document.getElementById('b').value = "-i";
    document.getElementById('c').value = "1";
    document.getElementById('d').value = "i";

  
}

function zoom_iz()
{
    document.getElementById('a').value = "1.5";
    document.getElementById('b').value = "0.25 - 0.4i";
    document.getElementById('c').value = "0.25 + 0.4i";
    document.getElementById('d').value = "1.5";

  
}

function zoom_ce()
{
    document.getElementById('a').value = "0.75";
    document.getElementById('b').value = "-0.25 - 0.0001i";
    document.getElementById('c').value = "-0.25 + 0.0001i";
    document.getElementById('d').value = "0.75";

  
}



function puntos()
{
    document.getElementById('a').value = "0.85 - 0.35i";
    document.getElementById('b').value = "0.35 - 0.15i";
    document.getElementById('c').value = "-0.35 + 0.15i";
    document.getElementById('d').value = "0.85 - 0.35i";

}

function rotar()
{
    document.getElementById('a').value = "0.7 + 0.2i";
    document.getElementById('b').value = "-0.35 - 0.6i";
    document.getElementById('c').value = "0.35 + 0.6i";
    document.getElementById('d').value = "-0.2 + 0.7i";
    
}