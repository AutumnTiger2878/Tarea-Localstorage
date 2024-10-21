function enviarFormulario() {
 
    const nombre = document.getElementById("nombre").value;
    
    
    
    const xmlData = `<usuario>
    <nombre>${nombre}</nombre>
   
    </usuario>`;
    
    localStorage.setItem('usuarioXML', xmlData)
    
    
    window.location.href = 'datos.html';
    
    return false;

}