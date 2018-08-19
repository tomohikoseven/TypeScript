function tag(literal, ...values: any[]) {
  console.log(literal);
  console.log(values);
}
tag `朝食は${'カレー'}${'ラーメン'}${'うどん'}です`;
