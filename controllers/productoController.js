const Producto = require("../config/models/Producto");

exports.crearProducto = async(req, res) => {

    try {

        let producto;

        //creamos nuestro producto tomando la clase creada

        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('A ocurrido un error al crear un producto');
    }

}

exports.actualizarProdcuto = async(req, res) => {
    const productData = {...req.body };
    const { id } = {...req.params };

    try {
        const newProduct = {...productData }
        const producto = await Producto.findOneAndUpdate({ _id: id }, newProduct)

        if (!producto) {
            res.status(404).json({ msg: 'Este producto no existe' })
        }
        res.json(producto)

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error al actualizar');

    }
}




exports.obtenerProductos = async(req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error para obeter todos los productos');

    }
}

// exports.actualizarProdcuto = async(req, res) => {
//     const { nombre, categoria, ubicacion, precio } = req.body;

//     try {

//         let producto = await Producto.findById(req.params.id);

//         if (!producto) {
//             res.status(404).json({ msg: 'Este producto no existe' })
//         }

//         producto.nombre = nombre;
//         producto.categoria = categoria;
//         producto.ubicacion = ubicacion;
//         producto.precio = precio;

//         producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
//         res.json(producto)


//     } catch (error) {

//         console.log(error);
//         res.status(500).send('A ocurrido un error al actualizar');

//     }
// }

exports.actualizarProducto = async(req, res) => {
    const productData = {...req.body };
    const { id } = {...req.params };

    try {
        const newProduct = {...productData }
        const producto = await Producto.findOneAndUpdate({ _id: id }, newProduct)

        if (!producto) {
            res.status(404).json({ msg: 'Este producto no existe' })
        }
        res.json(producto)

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error al actualizar');

    }
}


// exports.obtenerProducto = async(req, res) => {

//     try {

//         let producto = await Producto.findById(req.params.id);

//         if (!producto) {
//             res.status(404).json({ msg: 'Este producto no existe' })
//         }

//         res.json(producto)


//     } catch (error) {

//         console.log(error);
//         res.status(500).send('A ocurrido un error al obtener producto')
//     }
// }


exports.obtenerProducto = async(req, res) => {
    const productData = {...req.body };
    const { id } = {...req.params };

    try {
        const newProduct = {...productData }
        const producto = await Producto.findById({ _id: id }, newProduct)

        if (!producto) {
            res.status(404).json({ msg: 'Este producto no existe' })
        }
        res.json(producto)

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error al actualizar');

    }
}


// exports.eliminarProducto = async(req, res) => {

//     try {

//         let producto = await Producto.findById(req.params.id);

//         if (!producto) {
//             res.status(404).json({ msg: 'Este producto no existe' })
//         }

//         producto = await Producto.findOneAndRemove({ _id: req.params.id })
//         res.json({ msg: 'El producto ha sido eliminado' })


//     } catch (error) {

//         console.log(error);
//         res.status(500).send('A ocurrido un error al obtener producto')
//     }
// }

exports.eliminarProducto = async(req, res) => {
    const productData = {...req.body };
    const { id } = {...req.params };

    try {
        const newProduct = {...productData }
        const producto = await Producto.findOneAndRemove({ _id: id }, newProduct)

        if (!producto) {
            res.status(404).json({ msg: 'Este producto no existe' })
        }
        res.json({ msg: 'El producto ha sido eliminado' })

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error al actualizar');

    }
}