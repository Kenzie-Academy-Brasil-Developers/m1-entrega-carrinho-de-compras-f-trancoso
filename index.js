const body = document.querySelector("body");

const cartTitle = document.createElement('h1')

cartTitle.innerHTML = 'Your Cart'

cartTitle.id = 'cartTitle'

body.appendChild(cartTitle)

const cart = document.createElement("main");

cart.id = "virtualCartBody";

body.appendChild(cart);

let products = [

    {
        name: 'Uva Crimson',
        valor: 44.99,
    },

    {
        name: 'Vinho Canção',
        valor: 17.99,
    },

    {
        name: 'Água de côco',
        valor: 8.99,
    },

    {
        name: 'Mamão',
        valor: 9.98,
    },

    {
        name: 'Água tônica',
        valor: 8.99,
    },
]
function createProductItem(arrOfProducts){

    const productList = document.createElement('ul')

    const listHead = document.createElement('ul')

    listHead.id = 'listHead'

    const listHeadItem = document.createElement('li')

    listHeadItem.innerHTML = 'Item'

    listHeadItem.style.fontWeight = 'bold'
    listHead.appendChild(listHeadItem)

    const listHeadValue = document.createElement('li')

    listHeadValue.innerHTML = 'valor'

    listHead.appendChild(listHeadValue)

    productList.appendChild(listHead)

    for (i=0; i<arrOfProducts.length; i++ ){

    const productItem = document.createElement('ul')

    const itemName = document.createElement('li')

    itemName.innerHTML = arrOfProducts[i].name
    
    itemName.style.fontWeight = 'bold'

    productItem.appendChild(itemName)

    const itemValue = document.createElement('li')

    itemValue.innerHTML = 'R$ ' + arrOfProducts[i].valor

    productItem.appendChild(itemValue)

    productItem.className = 'item'

    productList.appendChild(productItem)
    }

    return productList
}

const list = createProductItem(products)

list.id = 'productsList'

cart.appendChild(list)

const productDetails = document.createElement('section')

productDetails.id = 'details'

list.appendChild(productDetails)

const totalPrice = document.createElement('ul')

totalPrice.id = 'totalPrice'

function priceSum(arrOfProducts){
    let sum = 0
    for (i=0; i<arrOfProducts.length; i++){
        sum += arrOfProducts[i].valor
    }

    return sum
}

const totalPriceText = document.createElement('li')

totalPriceText.innerHTML = 'Total'

totalPriceText.style.fontWeight = 'bold'

totalPrice.appendChild(totalPriceText)

const totalPriceValue = document.createElement('li')

totalPriceValue.innerHTML = 'R$ ' + priceSum(products)

totalPrice.appendChild(totalPriceValue)

productDetails.appendChild(totalPrice)

const submitButton = document.createElement('button')

submitButton.innerHTML = 'Finalizar compra'

submitButton.id = 'button'

productDetails.appendChild(submitButton)
