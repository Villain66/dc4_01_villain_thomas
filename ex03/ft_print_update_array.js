function ft_print_update_array(table) {
const update = table.map(item => item + 1);
console.log(update);
}

const table = [1, 2, 3, 4, 5, 6, 7, 8];
ft_print_update_array(table)