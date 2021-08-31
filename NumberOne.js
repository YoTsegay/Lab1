function computeSalesCommission(commission, salaried) {
  if (salaried == true) {
    if (commission < 300) {
      return "no commision";
    } else if (commission >= 300 && commission < 500) {
      return (commission * 1) / 100;
    } else {
      return (2 / 100) * commission;
    }
  } else if (commission < 300) {
    return "no comisstin";
  } else if (commission > 300 && commission < 500) {
    return (2 / 100) * commission;
  } else {
    return (3 / 100) * commission;
  }
}
console.log(computeSalesCommission(650, false));
