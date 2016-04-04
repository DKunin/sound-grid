function range(n) {
    return Array.apply(null, Array(n)).map((x, i) => i);
}

module.exports = function chunk(array, n) {
    return range(Math.ceil(array.length / n)).map((x, i) => array.slice(i * n, i * n + n));
};
