export class expense {
  public date;
  public amount;
  public cateogry;
  public description;
  constructor(
    date: string,
    amount: number,
    cateogry: string,
    description: string
  ) {
    this.date = date;
    this.amount = amount;
    this.cateogry = cateogry;
    this.description = description;
  }
}
