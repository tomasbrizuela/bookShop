const booksList = [
    { name: "El Quijote", description: "Una novela clásica de la literatura española.", author: "Miguel de Cervantes", price: 19.99, quantity: 10, bestSeller: true },
    { name: "Cien Años de Soledad", description: "Obra maestra del realismo mágico.", author: "Gabriel García Márquez", price: 15.99, quantity: 20, bestSeller: true },
    { name: "La Sombra del Viento", description: "Una intrigante historia en la Barcelona del siglo XX.", author: "Carlos Ruiz Zafón", price: 12.99, quantity: 15, bestSeller: true },
    { name: "Rayuela", description: "Una novela innovadora y compleja.", author: "Julio Cortázar", price: 14.99, quantity: 8, bestSeller: false },
    { name: "1984", description: "Una distopía que sigue vigente.", author: "George Orwell", price: 13.99, quantity: 25, bestSeller: true },
    { name: "El Principito", description: "Un cuento filosófico para todas las edades.", author: "Antoine de Saint-Exupéry", price: 9.99, quantity: 30, bestSeller: true },
    { name: "Orgullo y Prejuicio", description: "Una historia de amor y malentendidos.", author: "Jane Austen", price: 11.99, quantity: 18, bestSeller: true },
    { name: "Matar a un Ruiseñor", description: "Una novela sobre la justicia y la inocencia.", author: "Harper Lee", price: 10.99, quantity: 22, bestSeller: true },
    { name: "El Gran Gatsby", description: "La vida y el sueño americano en decadencia.", author: "F. Scott Fitzgerald", price: 12.49, quantity: 12, bestSeller: true },
    { name: "Moby Dick", description: "La obsesión de un capitán contra una gran ballena.", author: "Herman Melville", price: 16.99, quantity: 5, bestSeller: false },
    { name: "Guerra y Paz", description: "Una épica novela sobre la invasión napoleónica.", author: "León Tolstoi", price: 21.99, quantity: 7, bestSeller: false },
    { name: "Anna Karenina", description: "Una trágica historia de amor y sociedad.", author: "León Tolstoi", price: 18.99, quantity: 9, bestSeller: false },
    { name: "El Señor de los Anillos", description: "Una aventura épica en la Tierra Media.", author: "J.R.R. Tolkien", price: 25.99, quantity: 10, bestSeller: true },
    { name: "Harry Potter y la Piedra Filosofal", description: "El inicio de la aventura mágica de Harry Potter.", author: "J.K. Rowling", price: 14.99, quantity: 35, bestSeller: true },
    { name: "El Hobbit", description: "Una precuela de la aventura en la Tierra Media.", author: "J.R.R. Tolkien", price: 13.99, quantity: 28, bestSeller: true },
    { name: "Los Pilares de la Tierra", description: "Una historia épica sobre la construcción de una catedral.", author: "Ken Follett", price: 17.99, quantity: 11, bestSeller: true },
    { name: "El Código Da Vinci", description: "Un thriller lleno de misterio y conspiraciones.", author: "Dan Brown", price: 15.49, quantity: 14, bestSeller: true },
    { name: "La Biblia", description: "Texto sagrado para millones de personas.", author: "Varios Autores", price: 0.00, quantity: 100, bestSeller: true },
    { name: "El Alquimista", description: "Una fábula sobre la realización de los sueños.", author: "Paulo Coelho", price: 10.49, quantity: 27, bestSeller: true },
    { name: "El Nombre de la Rosa", description: "Un misterio medieval en una abadía italiana.", author: "Umberto Eco", price: 13.49, quantity: 16, bestSeller: false },
    { name: "El Retrato de Dorian Gray", description: "Una novela sobre la belleza y la corrupción.", author: "Oscar Wilde", price: 11.49, quantity: 20, bestSeller: false },
    { name: "Frankenstein", description: "El clásico relato de un científico y su monstruo.", author: "Mary Shelley", price: 12.99, quantity: 14, bestSeller: false },
    { name: "Drácula", description: "La icónica historia del vampiro que da origen al mito.", author: "Bram Stoker", price: 10.99, quantity: 17, bestSeller: false },
    { name: "El Guardián entre el Centeno", description: "Una mirada a la adolescencia y la alienación.", author: "J.D. Salinger", price: 9.99, quantity: 19, bestSeller: false },
    { name: "Lolita", description: "Una controvertida y compleja historia de amor.", author: "Vladimir Nabokov", price: 13.99, quantity: 12, bestSeller: false },
    { name: "La Metamorfosis", description: "La transformación surrealista de un hombre.", author: "Franz Kafka", price: 8.99, quantity: 23, bestSeller: false },
    { name: "El Proceso", description: "Una inquietante novela sobre la burocracia y la injusticia.", author: "Franz Kafka", price: 10.99, quantity: 15, bestSeller: false },
    { name: "El Lobo Estepario", description: "La dualidad del hombre y la búsqueda de identidad.", author: "Hermann Hesse", price: 12.49, quantity: 10, bestSeller: false },
    { name: "Demian", description: "Una novela sobre el autodescubrimiento y la espiritualidad.", author: "Hermann Hesse", price: 11.49, quantity: 13, bestSeller: false },
    { name: "El Extranjero", description: "Una obra existencialista que cuestiona la sociedad.", author: "Albert Camus", price: 9.49, quantity: 22, bestSeller: false },
    { name: "La Peste", description: "Una alegoría sobre la condición humana y la epidemia.", author: "Albert Camus", price: 10.49, quantity: 18, bestSeller: false },
    { name: "Fahrenheit 451", description: "Una distopía sobre la censura y la quema de libros.", author: "Ray Bradbury", price: 12.99, quantity: 16, bestSeller: true },
    { name: "El Mundo de Sofía", description: "Una introducción a la historia de la filosofía.", author: "Jostein Gaarder", price: 11.99, quantity: 21, bestSeller: false },
    { name: "El Perfume", description: "La obsesión por crear la fragancia perfecta.", author: "Patrick Süskind", price: 13.99, quantity: 14, bestSeller: false },
    { name: "La Elegancia del Erizo", description: "Una novela que explora la belleza en lo cotidiano.", author: "Muriel Barbery", price: 14.49, quantity: 12, bestSeller: false },
    { name: "El Amor en los Tiempos del Cólera", description: "Una historia de amor que trasciende el tiempo.", author: "Gabriel García Márquez", price: 15.99, quantity: 17, bestSeller: true },
    { name: "Bajo la Misma Estrella", description: "Una emotiva historia de amor y superación.", author: "John Green", price: 10.49, quantity: 25, bestSeller: true },
    { name: "El Juego del Ángel", description: "Un misterio literario lleno de intriga.", author: "Carlos Ruiz Zafón", price: 13.49, quantity: 15, bestSeller: false },
    { name: "El Laberinto de los Espíritus", description: "La culminación de la saga en la Barcelona de Zafón.", author: "Carlos Ruiz Zafón", price: 16.99, quantity: 10, bestSeller: false },
    { name: "El Hombre en Busca de Sentido", description: "Reflexiones sobre la vida en tiempos difíciles.", author: "Viktor Frankl", price: 12.99, quantity: 20, bestSeller: false },
    { name: "Siddhartha", description: "La búsqueda espiritual de un hombre en la India.", author: "Hermann Hesse", price: 11.99, quantity: 18, bestSeller: false },
    { name: "El Poder del Ahora", description: "Una guía para vivir en el presente.", author: "Eckhart Tolle", price: 13.99, quantity: 23, bestSeller: true },
    { name: "El Jardín Secreto", description: "Una historia de descubrimiento y redención.", author: "Frances Hodgson Burnett", price: 10.99, quantity: 20, bestSeller: false },
    { name: "El Médico", description: "La odisea de un joven que busca sanar el mundo.", author: "Noah Gordon", price: 14.99, quantity: 12, bestSeller: false },
    { name: "El Nombre del Viento", description: "La épica historia de un mago y su leyenda.", author: "Patrick Rothfuss", price: 15.99, quantity: 15, bestSeller: true },
    { name: "El Imperio Final", description: "Una novela de fantasía en un mundo post-apocalíptico.", author: "Brandon Sanderson", price: 17.49, quantity: 10, bestSeller: true },
    { name: "El Camino de los Reyes", description: "Una épica aventura en un mundo de magia y guerra.", author: "Brandon Sanderson", price: 18.99, quantity: 8, bestSeller: true },
    { name: "Palabras que Enamoran", description: "Una colección de poemas y relatos románticos.", author: "Ana Rodríguez", price: 9.99, quantity: 30, bestSeller: false },
    { name: "La Voz del Silencio", description: "Reflexiones sobre el misterio del ser.", author: "Laura Martínez", price: 10.49, quantity: 25, bestSeller: false },
    { name: "El Sueño Eterno", description: "Una novela noir de intriga y misterio.", author: "Carlos Mendoza", price: 11.99, quantity: 20, bestSeller: false }
];


async function addBooks(books) {
    let url = "http://localhost:8081/api/product";
    let data = JSON.stringify(books);
    console.log(data)
    let options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': data
    }
    try {
        let res = await fetch(url, options);
        let json = await res.json();
        console.log(json);
    } catch (error) {
        console.log(error)
    }
}

addBooks(booksList)