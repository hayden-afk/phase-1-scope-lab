var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'larry'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'

}