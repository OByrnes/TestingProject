const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const items = ['cat', 'dog']
    const newItem = 'hamster'
    let result = saveItems(items, newItem)
    expect(result).to.contain(newItem)
  });

  it('makes sure the result and the original are different', () => {
    const items = ['cat', 'dog']
    const newItem = 'hamster'
    let result = saveItems(items, newItem)
    expect(result).to.not.equal(items)
  });
});
