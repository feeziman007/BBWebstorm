/**
 * Created by hsyed on 5/06/2015.
 */
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
    var fruits = parameters.fruits;
    alert('please validate')
}

SubmitForm({name: 'sam', age:30, address:'vic', IsRegistered:true, gender:'male', fruits:['apple', 'banana']})
