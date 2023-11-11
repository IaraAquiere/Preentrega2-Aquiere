const products = [
    { id: "1", name: "ZAPATILLAS NIKE DUNK HIGH RETRO SE", img: "https://essential.vtexassets.com/arquivos/ids/1043872-1200-auto?v=638349618468370000&width=1200&height=auto&aspect=true", price: 97.999, category: "hombre", description: "Zapatillas Nike Dunk High Retro Se De Basket Para Hombre Código: Dv0826-100", stock: 5 },
    {id: "2", name: "ZAPATILLAS ADIDAS ORIGINALS OZWEEGO PURE", img: "https://essential.vtexassets.com/arquivos/ids/878071-1200-auto?v=638235138143030000&width=1200&height=auto&aspect=true", price: 59.999, category: "mujer", description: "ZAPATILLAS MINIMALISTAS EN MALLA CON AMORTIGUACIÓN ADICIONAL La familia OZWEEGO siempre ha sido conocida por ser llamativa y audaz.Incluso en los modelos más sencillos, como estas zapatillas adidas OZWEEGO Pure, su impacto sigue siendo innegable.Las distintivas líneas de la mediasuela hacen que sea casi imposible hacerlas más sutiles, pero el drama está balanceado con detalles monocromáticos. Este producto incorpora material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico El 20% de los elementos utilizados para fabricar el exterior se han confeccionado con al menos un 50% de material reciclado.", stock: 1},
    { id: "3", name: "ZAPATILLAS NIKE DUNK LOW RETRO", img: "https://essential.vtexassets.com/arquivos/ids/1049612-1200-auto?v=638351624333400000&width=1200&height=auto&aspect=true", price: 99.999, category: "hombre", description: "Zapatillas Nike Dunk Low Retro De Basket Para Hombre Código: Dv0833-300", stock: 10 },
    { id: "4", name: "ZAPATILLAS PUMA MAYZE STACKS", img: "https://essential.vtexassets.com/arquivos/ids/1036608-1200-auto?v=638338616341800000&width=1200&height=auto&aspect=true", price: 98.999, category: "mujer", description: "Zapatillas Puma Mayze Stacks De Moda Para Mujer Código: 392307/04", stock: 4 },
    { id: "5", name: "ZAPATILLAS JORDAN AIR 1 MID", img: "https://essential.vtexassets.com/arquivos/ids/1049588-1200-auto?v=638351624137470000&width=1200&height=auto&aspect=true", price: 124.999, category: "hombre", description: "Zapatillas Jordan Air 1 Mid De Entrenamiento Para Hombre Código: Dq8426-401", stock: 3 },
    { id: "6", name: "ZAPATILLAS FILA RAY TRACER EVO 2", img: "https://essential.vtexassets.com/arquivos/ids/1037543-1200-auto?v=638340092667630000&width=1200&height=auto&aspect=true", price: 61.190, category: "mujer", description: "Zapatillas Fila Ray Tracer Evo 2 De Moda Para Mujer Código: 5Rm01974 650", stock: 8 },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2500);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {

        const product = products.find(product => product.id === id);
        setTimeout(() => {
            if (!product) {
                reject("No se encontró el producto solicitado")
            } else {
                resolve(product);
            }
        }, 1000)

    });
};