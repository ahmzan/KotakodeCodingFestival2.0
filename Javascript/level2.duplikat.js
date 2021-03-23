function hilangkanDuplikat(inputList) {
  //kode kamu di sini
  // menetapkan nilai variabel output sama dengan variabel inputList
  let output = inputList;
  // melakukan perulangan untuk setiap nilai pada inputList
  for (var i = 0; i < inputList.length; i++) {
    // menyimpan nilai sekarang yang akan digunakan pada perulangan berikutnya
    let nilaiSekarang = inputList[i];
    // melakukan perulangan untuk mencari nilai yang sama
    for (var j = i + 1; j < inputList.length; j++) {
      // mengecek apakah nilai perulangan saat ini sama dengan nilai sekarang
      // jika sama bearti terdapat duplikasi dan diubah menjadi nol
      if (inputList[j] == nilaiSekarang) {
        output[j] = 0;
      }
      // Jika tidak maka nilai tidak dirubah menjadi nol
    }
  }
  // mengembalikan output
  return output;
}

// let result = hilangkanDuplikat([1, 1, 2, 2, 3, 4, 5]); //case 1 //  1,0,1,0,3,4,5

// let result = hilangkanDuplikat([1, 1, 1, 1, 1, 1, 1]); // case 2

// let result = hilangkanDuplikat([1, 2, 3, 4, 5, 6, 7]); // case 3

// console.log(test);
console.log(result);
