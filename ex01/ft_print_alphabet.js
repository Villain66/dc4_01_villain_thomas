function alpha_maj(alpha_min) {
var alphabet = alpha_min.split('');
var alphabet_majuscule = [];
for (var letter of alphabet) {
var majuscule = String.fromCharCode(letter.charCodeAt(0) - 32);
alphabet_majuscule.push(majuscule);
} 
return alphabet_majuscule;
}
var alpha_min = 'abcdefghijklmnopqrstuvwxyz';
var alpha_maj = alpha_maj(alpha_min);
console.log(alpha_maj);
