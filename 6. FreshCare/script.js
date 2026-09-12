let cart = [];
const services = [

    {
        name: "Dry Cleaning",
        price: 200
    },

    {
        name: "Wash & Fold",
        price: 100
    },

    {
        name: "Ironing",
        price: 30
    },

    {
        name: "Stain Removal",
        price: 500
    },

    {
        name: "Leather & Suede Cleaning",
        price: 999
    },

    {
        name: "Wedding Dress Cleaning",
        price: 2800
    }

];

function addItem(serviceName, price, button) {
    const alreadyAdded = cart.some(
        item => item.name === serviceName
    );

    if (alreadyAdded) {

        alert("This service is already added!");

        return;
    }

    cart.push({
        name: serviceName,
        price: price
    });

    button.innerText = "Remove Item ⊖";

    button.classList.remove("add-btn");

    button.classList.add("remove-btn");

    button.onclick = function () {

        removeItem(
            serviceName,
            button
        );

    };

    updateCart();
}

function removeItem(serviceName, button) {

    cart = cart.filter(
        item => item.name !== serviceName
    );

    button.innerText = "Add Item ⊕";

    button.classList.remove("remove-btn");

    button.classList.add("add-btn");

    const service = services.find(
        item => item.name === serviceName
    );

    button.onclick = function () {

        addItem(
            service.name,
            service.price,
            button
        );

    };

    updateCart();
}

function updateCart() {

    const cartContainer =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("totalAmount");

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                No items added yet
            </p>
        `;

        totalElement.innerText = "₹0.00";

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;


        const row =
            document.createElement("div");

        row.classList.add("cart-row");


        row.innerHTML = `
            <span>${index + 1}</span>

            <span>${item.name}</span>

            <span>₹${item.price.toFixed(2)}</span>
        `;


        cartContainer.appendChild(row);

    });

    totalElement.innerText =
        `₹${total.toFixed(2)}`;

}

document
    .getElementById("bookServiceBtn")
    .addEventListener("click", function () {

        document
            .getElementById("services")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

document
    .getElementById("bookingForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert(
                "Please add at least one service before booking."
            );

            return;
        }

        const fullName =
            document.getElementById("fullName").value;

        const total =
            cart.reduce(
                (sum, item) => sum + item.price,
                0
            );

        document
            .getElementById("bookingMessage")
            .innerText =
            "Thank you For Booking the Service! We will get back to you soon!";

        alert(
            "Booking Successful!\n\n" +
            "Name: " + fullName + "\n" +
            "Total Amount: ₹" + total.toFixed(2)
        );

        document
            .getElementById("bookingForm")
            .reset();

});

function subscribeNewsletter() {

    const name =
        document.getElementById("newsletterName").value;

    const email =
        document.getElementById("newsletterEmail").value;

    if (name === "" || email === "") {

        alert(
            "Please enter your name and email."
        );

        return;
    }

    alert(
        "Thank you for subscribing to our newsletter!"
    );

    document
        .getElementById("newsletterName")
        .value = "";

    document
        .getElementById("newsletterEmail")
        .value = "";
}