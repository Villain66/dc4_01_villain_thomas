function ft_print_half_array(liste) {
for (let x = 0; x < liste.length; x++)
if (x % 2 === 0)
console.log(liste[x]);
}

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
ft_print_half_array(alphabet);