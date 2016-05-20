


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

function zoom()
{
    document.getElementById('a').value = "1.5";
    document.getElementById('b').value = "0.5 + 0.25i";
    document.getElementById('c').value = "0.25 + 0.5i";
    document.getElementById('d').value = "1.5";

  
}

function puntos()
{
    document.getElementById('a').value = "0.85 + 0.2i";
    document.getElementById('b').value = "0.35 - 0.15i";
    document.getElementById('c').value = "-0.35 + 0.15i";
    document.getElementById('d').value = "0.85 + 0.2i";

  
}