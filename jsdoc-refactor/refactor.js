
(function() {

    /**
     * FormValidation
     *
     * @method validateForm
     * @param name
     * @param age
     * @param address
     * @param IsRegistered
     * @param gender
     */
    function SubmitForm(parameters) {
        var name = parameters.name;
        var age = parameters.age;
        var address = parameters.address;
        var IsRegistered = parameters.IsRegistered;
        var gender = parameters.gender;
        alert('please validate')
    }

    /**
     * FormValidation
     *
     * @method validateForm
     * @param name
     * @param age
     * @param address
     * @param IsRegistered
     * @param gender
     */
    function validateForm(name, age, address, IsRegistered, gender) {
        alert('please validate')
    }

    function fillFormData() {
        validateForm('same', 30, 'vic', 'false');
    }

})()
