var formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
});
export default function (text) { return formatter.format(text); };
//# sourceMappingURL=as-euro.js.map