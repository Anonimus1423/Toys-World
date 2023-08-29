let products = [];
let price = 0;
function openn()
{
    document.getElementById("a").classList.toggle("active")
}

function refreshItems(e)
{
    while (document.getElementsByClassName("d1")[0].firstChild) {
        document.getElementsByClassName("d1")[0].removeChild(document.getElementsByClassName("d1")[0].firstChild);
    }
    while (document.getElementsByClassName("p1")[0].firstChild) {
        document.getElementsByClassName("p1")[0].removeChild(document.getElementsByClassName("p1")[0].firstChild);
    }
    price = 0
    products.forEach(product => 
    {
        const pricex = parseInt(product.price.split(" ")[0])
        price += pricex;
        const line = document.createElement("div");
        line.classList.add("gic1")
        line.classList.add("pp1")
        line.addEventListener("click", removeItem.bind(null, product.id))
        document.getElementsByClassName("d1")[0].appendChild(line)
        const text = document.createElement("p");
        text.innerHTML = product.name + " - " + product.price
        document.getElementsByClassName("p1")[0].appendChild(text)
    })
    document.getElementById("price").innerHTML = `Total Price: ${price}`
}

function addItem(product)
{
    products.push(product)
    console.log(products);
    refreshItems()
}

function removeItem(id)
{
    console.log(id);
    products = products.filter(product => product.id !== id); 
    refreshItems()
}