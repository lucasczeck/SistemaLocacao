function calculatePrice(event) {
    event.preventDefault();
    let produto = document.getElementById('product').value;
    let periodo = document.getElementById('period').value;

    if(produto == 0 | periodo == 0){
        alert('Por favor, preencha os valores')
        return;
}

let total = (produto * periodo) / 15
  total = total.toFixed(2);
  document.getElementById('price').innerHTML = total;
}

document.getElementById('priceform').addEventListener('submit', calculatePrice);


