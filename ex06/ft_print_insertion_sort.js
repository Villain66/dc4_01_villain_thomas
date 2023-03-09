function ft_print_insertion_sort(table) {
table.sort((y, z) => y - z);
console.log(table);
}

let table = [4, 1, 3, 5, 2];
ft_print_insertion_sort(table);