const expect = require('expect')
const utils = require('./utils')

it('should add two numbers', () => {
  var res = utils.add(33,11)

  expect(res).toBe(44).toBeA('number')
  // if(res != 44){
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
})

it('should square a number', () => {
  var pupu = utils.square(2)
  expect(pupu).toBe(4).toBeA('number')
})

//should verify first and last names are set
//assert it includes firstName and lastName with proper values
it('should verify first and last names are set', () =>{
  var user = {
    location: 'Amsterdam',
    age: 25
  }
  var res = utils.setName(user, 'GC Angela')
  expect(res).toInclude({
    firstName: 'GC',
    lastName: 'Angela'
  })
})





// it('should expect some values', () => {
//   // expect(12).toNotBe(11)
//   // expect({name:'andrew'}).toNotEqual({name: 'Andrew'})
//   // expect([2,3,4]).toInclude(2)
//   expect({
//   name: 'GC',
//   age: 25,
//   location: 'Amsterdam'
// }).toInclude({
//   age: 25
// })
// })