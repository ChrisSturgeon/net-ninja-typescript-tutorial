// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// Classes

class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice('Mario', 'work on the Mario website', 250);
const invoiceTwo = new Invoice('Luigi', 'work on the Luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.amount, invoice.format());
});
