const toNumber = (value) => parseInt(value.replaceAll(' ', ''), 10);
const toNumberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export { toNumber, toNumberWithSpaces };
