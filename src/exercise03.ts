export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory
  .filter(([, quantity]) => quantity > 5)
  .reduce ((total, [, quantity, pricerPerUnit]) => {
    return total + quantity * pricerPerUnit;
  }, 0);
}
