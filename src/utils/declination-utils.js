const YEAR_DECLENSIONS = [
  'год',
  'года',
  'лет',
];

const declinateWordByCount = (count, declensionWordOptions) => {
  const restOfHundred = Math.abs(count % 100);
  const restOfTen = Math.abs(count % 10);

  if (restOfHundred > 10 && restOfHundred < 20) {
    return declensionWordOptions[2];
  }
  if (restOfTen > 1 && restOfTen < 5) {
    return declensionWordOptions[1];
  }
  if (restOfTen === 1) {
    return declensionWordOptions[0];
  }

  return declensionWordOptions[2];
};

export { declinateWordByCount, YEAR_DECLENSIONS };
