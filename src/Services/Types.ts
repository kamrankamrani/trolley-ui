export interface shoppingListDataType {
  name: string;
  id: number;
  price: string;
  unitPrice: string;
  count: number;
  url: string;
}

export interface shoppingListItems {
  items: shoppingListDataType[];
}
