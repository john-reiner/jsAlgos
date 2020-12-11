let user = {
    age: 54,
    name: 'Kyle',
    magic: true, 
    scream: function() {
        console.log('AAAAAHHHHHHHH!!!!')
    }
}

console.log(user.age)
user.spell = 'abra kadabra'
console.log(user.spell)
user.scream()