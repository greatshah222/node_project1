module.exports = ((temp, product) => {
    let output = temp.replace(/{%ProductName%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%Quantity%}/g, product.quantity);
    output = output.replace(/{%Nutrients%}/g, product.nutrients);
    output = output.replace(/{%Description%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%FROM%}/g, product.from);
    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;


});

