const products =[
    {nombre: 'Pala-BELLOTA', valor : 18.90},
    {nombre: 'Carretilla - MARTELL', valor : 212.00},
    {nombre: 'Taladro de percusión - BOSCH', valor : 215.00},
    {nombre: 'Compresor de aire - MARCATO', valor : 290.00},
    {nombre: 'Alicate universal - TRUPER', valor : 24.90},
    {nombre: 'Metro - COMELON', valor : 11.90},
  ]
  
  const formulario = document.querySelector('#formulario-buscador');
  const button = document.querySelector('#boton-buscar');
  const resultado = document.querySelector('#resultado')

  const filtrar = ()=> {
   // console.log(formulario.value);
   resultado.innerHTML = '';
   const texto = formulario.value.toLowerCase();

   for(let producto of products) {
     let nombre = producto.nombre.toLocaleLowerCase();
     if(nombre.indexOf(texto) !== -1){
       resultado.innerHTML += `
        <li>${producto.nombre} - Valor: ${producto.valor}</li>
       `
     }
   }
   if(resultado.innerHTML === ''){
     resultado.innerHTML += `
      <li>Producto no encontrado</li>
     `
   }
  }

  button.addEventListener('click', filtrar)
  formulario.addEventListener('keyup', filtrar)