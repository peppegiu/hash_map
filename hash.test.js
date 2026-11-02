import { HashMap } from "./hash";

const test1 = new HashMap() 


test1.set('apple', 'red')
test1.set('banana', 'yellow')
test1.set('carrot', 'orange')
test1.set('dog', 'brown')
test1.set('elephant', 'gray')
test1.set('frog', 'green')
test1.set('grape', 'purple')
test1.set('hat', 'black')
test1.set('ice cream', 'white')
test1.set('jacket', 'blue')
test1.set('kite', 'pink')
test1.set('lion', 'golden')



test("capacity should remain the same if a value was overwriten", () => {
    test1.set('hat', 'gray');
    test1.set('kite', 'yellow');
    expect(test1.capacity).toBe(16);
})

test("double capacity", () => {
    test1.set('moon', 'silver')
    expect(test1.capacity).toBe(32);
})