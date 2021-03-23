function membuatAnagram(str1, str2) {
  //kode kamu di sini
  // mendefinisikan variabel
  let output = Number();
  // mengubah masing-masing string menjadi array
  let arrStr1 = str1.split('');
  let arrStr2 = str2.split('');
  // menyaring huruf str1, jika huruf pada str1 tidak ada di str2 dan disimpan pada arrHurufStr1
  let arrHurufStr1 = arrStr1.filter((val) => !arrStr2.includes(val));
  // menyaring huruf str2, jika huruf pada str2 tidak ada di str1 dan disimpan pada arrHurufStr2
  let arrHurufStr2 = arrStr2.filter((val) => !arrStr1.includes(val));
  // menjumlahkan setiap huruf yang tidak ada pada masing-masing string
  output = arrHurufStr1.length + arrHurufStr2.length;
  // mengembalikan output
  return output;
}

// let result = membuatAnagram('dce', 'efc'); // Case 1 // 2

// let result = membuatAnagram('cdfea', 'afbbk'); // Case 2 // 6

// let result = membuatAnagram('adkrn', 'r'); // Case 3 // 4

// let result = membuatAnagram('leonardo', 'ladrone'); // Case 4 // 0

console.log(result);
