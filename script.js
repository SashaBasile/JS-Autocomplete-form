function billingFunction() {
    var same = document.getElementById('same');
    var billingName = document.getElementById('billingName');
    var billingZip = document.getElementById('billingZip');
    var shippingName = document.getElementById('shippingName');
    var shippingZip = document.getElementById('shippingZip');

    if (same.checked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;

    } else {
        billingName.value = '';
        billingZip.value = '';
    }
}