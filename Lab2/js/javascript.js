function createProduct(name, SKU, UPC, brand, model, colour, packaging, scale, vehicleType, price, stock) { //object creation
    this.name = name;
    this.SKU = SKU;
    this.UPC = UPC;
    this.brand = brand;
    this.model = model;
    this.colour = colour;
    this.packaging = packaging;
    this.scale = scale;
    this.vehicleType = vehicleType;
    this.price = price;
    this.stock = stock;

    this.description = function () { //return all descriptions as a string
        let describe = `Name: ${this.name}\n
SKU: ${this.SKU}\n
UPC: ${this.UPC}\n
Brand: ${this.brand}\n
Model: ${this.model}\n
Colour: ${this.colour}\n
Packaging: ${this.packaging}\n
Scale: ${this.scale}\n
Vehicle Type: ${this.vehicleType}\n
Price: ${this.price}\n
Stock: ${this.stock}\n`;
        return describe;
    };
}

var created = 0; //used to check if the object has been created
var nameProduct; //allows nameProduct to be used outside of the if statement

document.getElementById('Submit').addEventListener('click', function (event) {
//uses button to either create or modify the object
    event.preventDefault(); //prevents default form

    if (created === 0) { //if object doesnt exist then creates one using all form entered information
        const name = document.getElementById('name').value;
        const SKU = document.getElementById('SKU').value;
        const UPC = document.getElementById('UPC').value;
        const brand = document.getElementById('Brand').value;
        const model = document.getElementById('model').value;
        const colour = document.getElementById('colour').value;
        const packaging = document.getElementById('package').value;
        const scale = document.getElementById('scale').value;
        const vehicleType = document.getElementById('vehicletype').value;
        const price = parseFloat(document.getElementById('price').value);
        const stock = parseInt(document.getElementById('stock').value);

        nameProduct = new createProduct(name, SKU, UPC, brand, model, colour, packaging, scale, vehicleType, price, stock);
        created += 1;
    } else { //if object exist then checks to see what has been entered and updates only enties with a value inside and leaves other descriptions alone
        const name = document.getElementById('name').value;
        if (name !== null && name !== "") {
            nameProduct.name = name;
        }

        const SKU = document.getElementById('SKU').value;
        if (SKU !== null && SKU !== "") {
            nameProduct.SKU = SKU;
        }

        const UPC = document.getElementById('UPC').value;
        if (UPC !== null && UPC !== "") {
            nameProduct.UPC = UPC;
        }

        const brand = document.getElementById('Brand').value;
        if (brand !== null && brand !== "") {
            nameProduct.brand = brand;
        }

        const model = document.getElementById('model').value;
        if (model !== null && model !== "") {
            nameProduct.model = model;
        }

        const colour = document.getElementById('colour').value;
        if (colour !== null && colour !== "") {
            nameProduct.colour = colour;
        }

        const packaging = document.getElementById('package').value;
        if (packaging !== null && packaging !== "") {
            nameProduct.packaging = packaging;
        }

        const scale = document.getElementById('scale').value;
        if (scale !== null && scale !== "") {
            nameProduct.scale = scale;
        }

        const vehicleType = document.getElementById('vehicletype').value;
        if (vehicleType !== null && vehicleType !== "") {
            nameProduct.vehicleType = vehicleType;
        }

        const price = parseFloat(document.getElementById('price').value);
        if (!isNaN(price)) {
            nameProduct.price = price;
        }

        const stock = parseInt(document.getElementById('stock').value);
        if (!isNaN(stock)) {
            nameProduct.stock = stock;
        }
    }

    document.querySelector('.insert').textContent = nameProduct.description(); //pushes the nameProduct description function to a present <p> element
});
