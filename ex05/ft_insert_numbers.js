function ft_insert_numbers(chiffre) {
let table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 0;
while (x < table.length && chiffre > table[x])
x++;
table.splice(x, 0, chiffre);
return table;
}

console.log(ft_insert_numbers(15));