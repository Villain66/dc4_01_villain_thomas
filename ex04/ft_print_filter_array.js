function ft_print_filter_array(rang) {
return rang.filter(chiffre => chiffre % 2 !== 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const impair = ft_print_filter_array(numeros);

console.log(impair);