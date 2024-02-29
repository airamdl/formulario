var bd;

function iniciar() {
    var boton = document.getElementById('boton');
    var borrar = document.getElementById('delete');

    boton.addEventListener('click', agregar, false);
    borrar.addEventListener('click', borrarClave, false);

    var request = indexedDB.open('deusto', 2);

    request.onsuccess = function (e) {
        bd = e.target.result;
        mostrarLibros(); // Mostrar los libros existentes al cargar la página
    }

    request.onupgradeneeded = function (e) {
        bd = e.target.result;
        bd.createObjectStore('libros', { keyPath: 'titulo' });
    }
}

function agregar() {
    var tituloInput = document.getElementById('titulo');
    var isbnInput = document.getElementById('isbn');
    var autorInput = document.getElementById('autor');
    var anoInput = document.getElementById('ano');

    var titulo = tituloInput.value;
    var isbn = isbnInput.value;
    var autor = autorInput.value;
    var ano = anoInput.value;

    // Comprobar si el libro ya existe en la base de datos
    var transaction = bd.transaction(['libros'], 'readonly');
    var objectStore = transaction.objectStore('libros');
    var request = objectStore.get(titulo);

    request.onsuccess = function (e) {
        var existingLibro = e.target.result;

        if (existingLibro) {
            alert('El libro ya existe en la base de datos');
        } else {
            // Si el libro no existe, proceder con la adición
            var nuevoLibro = { titulo: titulo, isbn: isbn, autor: autor, ano: ano };
            
            var transactionAdd = bd.transaction(['libros'], 'readwrite');
            var objectStoreAdd = transactionAdd.objectStore('libros');
            var addRequest = objectStoreAdd.add(nuevoLibro);

            addRequest.onsuccess = function (e) {
                alert('Registro guardado con éxito en la base de datos');
                 // Vaciar los campos de entrada
                 tituloInput.value = '';
                 isbnInput.value = '';
                 autorInput.value = '';
                 anoInput.value = '';
                mostrarLibros(); // Actualizar la lista de libros al agregar uno nuevo
            }

            addRequest.onerror = function (e) {
                alert('Error al intentar guardar el registro en la base de datos');
            }
        }
    }

    request.onerror = function (e) {
        alert('Error al intentar verificar si el libro existe en la base de datos');
    }
}

function borrarClave() {
    var borrar = document.getElementById('deleteClave').value;
    var transaction = bd.transaction(['libros'], 'readwrite');
    var objectStore = transaction.objectStore('libros');
    
    var request = objectStore.get(borrar);

    request.onsuccess = function (e) {
        var existingLibro = e.target.result;

        if (borrar === '*') {
            var clearRequest = objectStore.clear();
            clearRequest.onsuccess = function (e) {
                alert('Todos los registros fueron borrados de la base de datos exitosamente');
                mostrarLibros(); // Actualizar la lista de libros después de borrar todos
            }
        }
        else if (existingLibro) {
            // Si el libro existe, proceder con el borrado
            var transactionDelete = bd.transaction(['libros'], 'readwrite');
            var objectStoreDelete = transactionDelete.objectStore('libros');
            var deleteRequest = objectStoreDelete.delete(borrar);

            deleteRequest.onsuccess = function (e) {
                alert('Registro borrado de la base de datos exitosamente');
                mostrarLibros(); // Actualizar la lista de libros al borrar uno específico
            }

            deleteRequest.onerror = function (e) {
                alert('Error al intentar borrar el registro de la base de datos');
            }
        } else {
            alert('El libro no existe en la base de datos');
        }

    }
}

function mostrarLibros() {
    var transaction = bd.transaction(['libros'], 'readonly');
    var objectStore = transaction.objectStore('libros');
    
    var listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = ''; // Limpiar la lista antes de mostrar los registros

    var cursorRequest = objectStore.openCursor();

    cursorRequest.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            var libro = cursor.value;
            var li = document.createElement('li');
            li.innerHTML= `<h4>Título: ${libro.titulo}</h4><br>- ISBN: ${libro.isbn}<br>- Autor: ${libro.autor}<br>- Año: ${libro.ano}`;
            listaLibros.appendChild(li);

            cursor.continue();
        }
    }
}

window.addEventListener('load', iniciar, false);