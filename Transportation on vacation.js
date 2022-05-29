function rentalCarCost(d) {
    let rent = (d >= 3 && d < 7) ? d * 40 - 20:
      (d >= 7) ? d * 40 - 50:
      d * 40;
    return rent
  }