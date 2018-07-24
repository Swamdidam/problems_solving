// (function string_nth_permutation(str, n) {
//     var len = str.length, i, f, res;

//     for (f = i = 1; i <= len; i++)
//         f *= i;

//     if (n >= 0 && n < f) {
//         for (res = ""; len > 0; len--) {
//             f /= len;
//             i = Math.floor(n / f);
//             n %= f;
//             res += str.charAt(i);
//             str = str.substring(0, i) + str.substring(i + 1);
//         }
//     }
//     return res;
// })("sug")

function randomElement (array){
    return array[Math.floor(Math.random() * array.length)];
            
            
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split(''),
                result = '';
            for (var i = 0; i < 8; i++) {
                result += randomElement(characters);
            }

        console.log(result)

}