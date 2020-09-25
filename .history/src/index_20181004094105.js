function g(id) { return document.getElementById(id); }
function valor(indice) { return formatear_numero(arrValores[indice].valor2); }

window.onload = function () {
    var uf = 4;
    var euro = 8;
    var dolar = 7;
    var utm = 5;
    if (typeof (arrValores) != "undefined") {
        g('uf').innerHTML = "UF:" + valor(uf);
        g('euro').innerHTML = "Euro:" + valor(euro);
        g('dolar').innerHTML = "Dolar:" + valor(dolar);
        g('utm').innerHTML = "UTM:" + valor(utm);
    }

    // Variables

    let baseDeDatos = [
        {
            id: 1,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2247-739666-1-catalog-new.jpg",
            nombre: 'Botín Negro FiveBlu',
            valor: 26990
        },
        {
            id: 2,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2186-749666-1-catalog-new.jpg",
            nombre: 'Botín Rosa FiveBlu',
            valor: 30000
        },
        {
            id: 3,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-8012-059666-1-catalog-new.jpg",
            nombre: 'Botín Marron FiveBlu',
            valor: 25000
        },
        {
            id: 4,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2165-949666-1-catalog-new.jpg",
            nombre: 'Botín Marrón FiveBlu',
            valor: 45000
        },
        {
            id: 5,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2247-739666-1-catalog-new.jpg",
            nombre: 'Botín Negro FiveBlu',
            valor: 26990
        },
        {
            id: 6,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2186-749666-1-catalog-new.jpg",
            nombre: 'Botín Rosa FiveBlu',
            valor: 30000
        },
        {
            id: 7,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-8012-059666-1-catalog-new.jpg",
            nombre: 'Botín Marron FiveBlu',
            valor: 25000
        },
        {
            id: 8,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2165-949666-1-catalog-new.jpg",
            nombre: 'Botín Marrón FiveBlu',
            valor: 45000
        },
        {
            id: 9,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2247-739666-1-catalog-new.jpg",
            nombre: 'Botín Negro FiveBlu',
            valor: 26990
        },
        {
            id: 10,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2186-749666-1-catalog-new.jpg",
            nombre: 'Botín Rosa FiveBlu',
            valor: 30000
        },
        {
            id: 11,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-8012-059666-1-catalog-new.jpg",
            nombre: 'Botín Marron FiveBlu',
            valor: 25.000
        },
        {
            id: 12,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2165-949666-1-catalog-new.jpg",
            nombre: 'Botín Marrón FiveBlu',
            valor: 45000
        },
        {
            id: 13,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2247-739666-1-catalog-new.jpg",
            nombre: 'Botín Negro FiveBlu',
            valor: 26990
        },
        {
            id: 14,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2186-749666-1-catalog-new.jpg",
            nombre: 'Botín Rosa FiveBlu',
            valor: 30000
        },
        {
            id: 15,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-8012-059666-1-catalog-new.jpg",
            nombre: 'Botín Marron FiveBlu',
            valor: 25000
        },
        {
            id: 16,
            imagen: "https://dafitistaticcl-a.akamaihd.net/p/fiveblu-2165-949666-1-catalog-new.jpg",
            nombre: 'Botín Marrón FiveBlu',
            valor: 45000
        }

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            //Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute("src", info["imagen"]);
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' + formatNumber(info['valor']);
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito() {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Generamos los Nodos a partir de carrito
        carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${miItem[0]['nombre']} - $${formatNumber(miItem[0]['valor'])}`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function formatNumber(num) {
        if (!num || num == 'NaN') return '-';
        if (num == 'Infinity') return '&#x221e;';
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num);
    }


    function borrarItemCarrito() {
        // Obtenemos la posicion que hay en el boton pulsado
        let posicion = this.getAttribute('posicion');
        // Borramos la posicion que nos interesa
        carrito.splice(posicion, 1);
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['valor'];
        }
        let totalDosDecimales = total;
        // Renderizamos el precio en el HTML
        $total.textContent = formatNumber(totalDosDecimales);
    }
    // Eventos

    // Inicio
    renderItems();
} 