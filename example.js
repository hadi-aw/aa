//U46368100
//onLoad CustomerPurchaseOrders loads and displays customer purchase order data
function onLoadCustomerPurchaseOrders() {
    //Path to CSV file
    const csvFilePath='data/purchase_orders.csv';
    d3.dsv(',', csvFilePath,d3.autotype).then(
    //pulls CSV file and then runs function
    function (data) {
        data.forEach(order => {
            //Select the UL element where the list of items will be appended
            const orderList = d3.select('#customerPurchaseOrderList');
            //Create a new LI element for purchase order list:
            const listItem = orderList.append('li');
            //Set each customer purchase order content from the .csv file to the list item
            listItem.text(`${order.customerName} - ${order.orderId} : ${order.purchaseAmount}`);
        });
    }
).catch(error => {
    console.log("Error while reading data from the purchase_orders csv file");
})       
   

}