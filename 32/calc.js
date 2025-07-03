const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

export const mul = (a, b) => {
  return a * b;
};

// Export default must not be const, let... anonimo esta bien
export default (a, b) => {
  return a / b;
};

export { sum, sub };
