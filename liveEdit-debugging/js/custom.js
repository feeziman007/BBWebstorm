var isNumber = function (evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
},
checkLength = function(inputId, maxLengthAllowed) {
    var inputData = document.getElementById(inputId).value
    if(inputData.length != maxLengthAllowed) {
        alert('SIM number should be '+ maxLengthAllowed + ' digits long' )
        return false
    }
}

