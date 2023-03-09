function ft_print_alphabet(alpha_min) {
var alphabet = alpha_min.split('');
var alphabet_majuscule = [];
for (var letter of alphabet) {
var majuscule = String.fromCharCode(letter.charCodeAt(0) - 32);
alphabet_majuscule.push(majuscule);
} 
return alphabet_majuscule;
}
var alpha_min = 'abcdefghijklmnopqrstuvwxyz';
var ft_print_alphabet = ft_print_alphabet(alpha_min);
console.log(ft_print_alphabet);
