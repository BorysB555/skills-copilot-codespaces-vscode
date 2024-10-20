function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        details: function() {
            console.log(this.name + ' is ' + this.age + ' years old.');
        }
    };
    return member;
}