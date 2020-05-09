/*

    Author: Mahesh
    Description: Basic Ecommerce Add, Edit, Delete items functionality 

*/


// Count and Price objects

var countObj = {};
var priceObj = {};


// Data storage class

class data {

    static getItems() {

        var itemsData = [{
            id: 0,
            img: "../basicEcommerceSite/assets/img/blast1300Wireless.png",
            name: "JBL Blast 1300 Wireless",
            price: "2000"
        },
        {
            id: 1,
            img: "../basicEcommerceSite/assets/img/boat400.png",
            name: "BoAT 400 Bluetooth",
            price: "900"
        }, {
            id: 2,
            img: "../basicEcommerceSite/assets/img/boatBassHeads.png",
            name: "BoAT Bass Heads",
            price: "1000"
        }, {
            id: 3,
            img: "../basicEcommerceSite/assets/img/c50hiHeadPhones.png",
            name: "C50HI Head phones",
            price: "1400"
        }, {
            id: 4,
            img: "../basicEcommerceSite/assets/img/Glide500Wireless.png",
            name: "JBL Blast 1100 Wireless",
            price: "1000"
        }, {
            id: 5,
            img: "../basicEcommerceSite/assets/img/sonyZX100A.png",
            name: "JBL Blast 900 Wireless",
            price: "1000"
        }
    ]

        itemsData.forEach(function (item) {
            UI.displayItems(item)
            listeners.eventListeners(item)
        });
    }


    // Counts total number of items in cart 
    
    static cartItemsCount(id, value) {

        countObj[id] = value;
        var count = 0;
        for (var i in countObj) {
            count = count + countObj[i];
        }

        UI.displayCartCount(count);
        return count;

    }

    // Calculates the total price
    
    static cartItemsPrice(id, price) {
        priceObj[id] = price;
        var total = 0;
        for (var i in priceObj) {
            total = total + priceObj[i];
        }

        UI.displayCartPrice(total);
    }
}


// UI class

class UI {

    // Get Ids 

    static getIds() {
        const itemSection = document.getElementById("items");
        const itemContainer = document.getElementById("items-container");
        const addItemBtn = document.getElementsByClassName('btn');
        const cartSummary = document.getElementById('cart-summary');
        const itemCount = document.getElementById('item-count');
        const totalPrice = document.getElementById('total-price');

        return {
            itemSection: itemSection,
            itemContainer: itemContainer,
            addItemBtn: addItemBtn,
            cartSummary: cartSummary,
            itemCount: itemCount,
            totalPrice: totalPrice
        };
    }

    // Displays product items 

    static displayItems(item) {
        var itemSection = UI.getIds().itemSection;
        var itemContainer = UI.getIds().itemContainer;


        var items = `
                    <div class ='item'> 
                    <img src='${item.img}'>
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                    <button class="btn" id='btn-${item.id}'>ADD ITEM</button>
                    </div>
                `;

        itemContainer.insertAdjacentHTML('beforeend', items);
        itemSection.appendChild(itemContainer);

    }

    // Add items to cart

    static addItemToCart(id, img, name, price) {
        var cartSummary = UI.getIds().cartSummary;
        var items = " ";

        items += `  
                    <div id='summary-${id}' class='summary'>
                    <div class='summary-item-name-image'>
                        <img src=${img}>
                        <p>${name}</p>                        
                    </div>
                    <div class='summary-item-quantity'>
                        <p>Quantity</p>
                        <select id='item-quantity-${id}' class='item-quantity'>
                            <option value='1'>${1}</option>
                            <option value='2'>${2}</option>
                            <option value='3'>${3}</option>
                            <option value='4'>${4}</option>
                            <option value='5'>${5}</option>
                        </select>
                        <br>
                        <button id='del-${id}' class='del'>Delete</button>
                    </div>
                    <div class='summary-item-price'>
                        <p id='item-price-${id}'>&#8377; ${price}</p>
                    </div>                    
                    </div>                                        
        `;
        cartSummary.insertAdjacentHTML('beforeend', items);

    }

    // Displays cart items count

    static displayCartCount(count) {
        var itemsCount = UI.getIds().itemCount;
        console.log(count);
        itemsCount.textContent = count;
    }


    // Displays cart items total price 

    static displayCartPrice(total) {
        var totalPrice = UI.getIds().totalPrice;
        totalPrice.textContent = total;
    }


    // Displays item price in cart items summary

    static displaySingleItemPrice(itemId, price) {
        itemId.textContent = price;
    }

}

// Event Listeners class

class listeners {

    static eventListeners(item) {

        var addItemBtn = document.getElementById('btn-' + item.id);

        // Add Item event Listener
        addItemBtn.addEventListener('click', function () {
            UI.addItemToCart(item.id, item.img, item.name, item.price);
            addItemBtn.disabled = true;
            // Providng initial cart item count value
            data.cartItemsCount(item.id, 1);
            // Providing initial cart item price      
            data.cartItemsPrice(item.id, parseInt(item.price));
        

            var itemQty = document.getElementById('item-quantity-' + item.id);
            var itemPrice = document.getElementById('item-price-' + item.id);

            // Quantity change event Listener
            itemQty.addEventListener('change', function () {
                var itemQtyVal = itemQty.options[itemQty.selectedIndex].text;
                // Providing cart item count when changed                
                data.cartItemsCount(item.id, parseInt(itemQtyVal));
                // Providing cart item price when changed
                data.cartItemsPrice(item.id, parseInt(item.price) * itemQtyVal);                
                UI.displaySingleItemPrice(itemPrice, parseInt(item.price) * itemQtyVal);
            });

            var del = document.getElementById('del-' + item.id);
            var summaryItem = document.getElementById('summary-' + item.id);

            // Delete item event Listener            
            del.addEventListener('click', function () {
                console.log("clicked del btn");
                data.cartItemsCount(item.id, 0);
                data.cartItemsPrice(item.id, 0);
                summaryItem.parentNode.removeChild(summaryItem);
                addItemBtn.disabled = false;
            });                        

        });

    }

}


// Initializing

data.getItems();

