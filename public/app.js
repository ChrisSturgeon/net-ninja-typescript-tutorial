import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello');
// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: 'person',
//   data: 'chris',
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['hello', 'world'],
// };
// with interfaces
// ENUMS
// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' },
// };
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'yoshi' },
// };
// console.log(docOne, docTwo);
// Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
let tup = ['ryu', 25, true];
tup[0] = 'ken';
let student;
student = ['chun-li', 23];
