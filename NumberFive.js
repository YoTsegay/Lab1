function calculatesDownPayment(cost) {
  if (cost > 0 && cost < 50000) {
    return (5 / 100) * cost;
  } else if (cost <= 50000 && cost > 100000) {
    return 1000 + (10 / 100) * (cost - 50000);
  } else if (cost >= 100000 && cost < 200000) {
    return 2000 + (15 / 100) * (cost - 100000);
  } else if (cost >= 200000) {
    5000 + (10 / 100) * (cost - 200000);
  } else {
    return "not valid amount";
  }
}

console.log(calculatesDownPayment(-10));
