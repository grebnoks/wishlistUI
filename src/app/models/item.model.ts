export class Item {
  public id: number;
  public name: string;
  public price: string;
  public recipient: string;
  public location: string;

  constructor(name: string, price: string, recipient: string, location: string) {
    this.name = name;
    this.price = price;
    this.recipient = recipient;
    this.location = location;
  }
}
