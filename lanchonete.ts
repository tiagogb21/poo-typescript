class Client {
  private _clientName: string;

  constructor(clientName:string) {
    this._clientName = clientName;
  }

  get clientName(): string {
    return this.clientName
  }
  
  set clientName(value: string){
    if(value.length < 3) {
      throw new Error('O nome do cliente deve ter mais de 3 caracteres!')
    }
    this._clientName = value;
  }
}

class OrderItem {
  private _itemName: string;
  private _price: number;

  constructor(itemName:string, price: number) {
    this._itemName = itemName;
    this._price = price;
  }

  get itemName(): string {
    return this._itemName;
  }

  set itemName(value: string) {
    if(value.length < 3) {
      throw new Error('O nome do item deve conter no mínimo 3 caracteres!')
    }
    this._itemName = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if(value < 0) {
      throw new Error('O preço deve ser positivo!')
    }
    this._price = value;
  }

}

class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(
    client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }
  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }
  set items(value: OrderItem[]) {
    if(value.length === 0) {
      throw new Error('O pedido deve ter, pelo menos, um item!')
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }
  set paymentMethod(value: string) {
    this._paymentMethod = value
  }

  get discount(): number {
    return this.discount;
  }
  set discount(value: number) {
    if(value < 0) {
      throw new Error('O disconto não pode ser um valor negativo!')
    }
    this._discount = value;
  }

  total(): number {
    return this._items.
      reduce((acc, curr) => acc + curr._price, 0)
  }

  totalWithDiscount(): number {
    return this.total()*(1 - this._discount);
  }
}

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.total());
console.log('Valor com desconto: ', order.totalWithDiscount());
