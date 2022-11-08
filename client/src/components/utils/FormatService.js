export const FormatService = {
  toCurrency(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },

  toPercent(number) {
    return Number(number / 100).toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 1,
    });
  },
};
