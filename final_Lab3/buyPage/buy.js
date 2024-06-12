document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener para el botón de "Quitar" en el carrito de compras
    document.querySelectorAll('.btn.text-danger').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            this.closest('.row').remove();
            updateCartTotal();
        });
    });

    // Event listener para la actualización de la cantidad de productos
    document.querySelectorAll('.form-control[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            updateCartTotal();
        });
    });

    // Actualizar el total del carrito
    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll('.row.gy-3.mb-4').forEach(row => {
            const priceElement = row.querySelector('.h6').innerText.replace('$', '');
            const quantityElement = row.querySelector('.form-control[type="number"]').value;
            const price = parseFloat(priceElement);
            const quantity = parseInt(quantityElement);
            total += price * quantity;
        });
        document.querySelector('.card-body .fw-bold').innerText = `$${total}`;
    }

    // Event listener formulario de búsqueda
    document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = this.querySelector('input[type="search"]').value;
        window.location.href = `/productPage/filter.html?search=${query}`;
    });

    // Event listener botón de "Aplicar" cupón
    document.querySelector('.btn.btn-light.border').addEventListener('click', function(event) {
        event.preventDefault();
        // Aplicar el cupón
        alert('Cupón aplicado!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shipping-form');
    const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        modal.show();
    });
});
