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
        res.status(500).send('A ocurrido un error');
    }

}


exports.obtenerProdcutos = async(req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error');

    }
}

exports.actualizarProdcuto = async(req, res) => {

    try {

        const { nombre, categoria, ubicacion, precio } = req.body;

    } catch (error) {

        console.log(error);
        res.status(500).send('A ocurrido un error');

    }
}

// QUEDAMOS POR  ACTUALIZAR PRODUCTOS Y POR EL VIDEO VA 1:33:00