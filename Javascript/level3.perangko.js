function kasihPerangko(arr1) {
  //kode kamu di sini
  // mendefinisikan variabel ouput sebagai integer/number
  let output = Number();
  // mementapkan barisan jumlah perangko sebagai list/array
  let arrJumlahPerangko = Array();
  // menetapkan jumlah minimal perangko
  let minimalPerangko = 1;
  // melakukan perulangan barisan nilai anak, dimana variabel i mewakili urutan barisan
  for (var i = 0; i < arr1.length; i++) {
    // mendefinisikan variabel
    let perangko = minimalPerangko;
    // mengambil nilai anak sekarang
    let nilaiAnakSekarang = arr1[i];
    // mengambil nilai anak sebelumnya
    let nilaiAnakSebelumnya = arr1[i - 1];
    // jika nilai anak sekarang lebih besar dari anak sebelumnya
    if (nilaiAnakSekarang > nilaiAnakSebelumnya) {
      // maka mendapatkan tambahan 1 perangko
      perangko += 1;
      // memasukan jumlah perangko anak sekarang ke array jumlah perangko
      arrJumlahPerangko.push(perangko);
      // melakukan perulangan jika jumlah perangko anak sekarang lebih kecil dari sebelumnya
      // tetapi nilai anak sekarang lebih besar dari anak sebelumnya
      // anak sekarang mendapatkan 1 perangko sampai lebih besar dari jumlah perangko
      // anak sebelumnya
      while (arrJumlahPerangko[i] <= arrJumlahPerangko[i - 1]) {
        // anak sekarang mendapat tambahan perangko
        arrJumlahPerangko[i] += 1;
      }
      // jika nilai anak sekarang lebih kecil dari anak sebelumnya
      // maka mendapatkan minimal perangko
    } else if (nilaiAnakSekarang < nilaiAnakSebelumnya) {
      // memasukan jumlah perangko anak sekarang ke array jumlah perangko
      arrJumlahPerangko.push(perangko);
      // jika jumlah perangko anak sekarang sama dengan anak sebelumnya
      // tetapi nilai anak sebelumnya lebih besar dari anak sekarang
      // maka anak sebelumnya mendapat tambahan 1 perangko
      if (arrJumlahPerangko[i] == arrJumlahPerangko[i - 1]) {
        // anak sebelumnya mendapatkan tambahan 1 perangko
        arrJumlahPerangko[i - 1] += 1;
      }
      // jika nilai anak sekarang sama dengan nilai anak sebelumnya dan
      // tidak ada anak sebelum anak pertama mendapatkan minimal perangko
    } else {
      // memasukan jumlah perangko anak sekarang ke array jumlah perangko
      arrJumlahPerangko.push(perangko);
    }
  }
  // melakukan perulangan menjumlahkan perangko masing-masing anak
  for (var jumlah of arrJumlahPerangko) {
    output += jumlah;
  }
  // mengembalikan output
  return output;
}
// const result = kasihPerangko([4, 6, 4, 5, 6, 2]); // case 1 output 10 // arrJumlahPerangko nilai per siswa [1, 2, 1, 2, 3, 1]
// const result = kasihPerangko([2, 4, 2, 6, 1, 7, 8, 9, 2, 1]); // case 2 output 19 // arrJumlahPerangko nilai per siswa [1, 2, 1, 2, 1, 2, 3, 4, 2, 1]
// const result = kasihPerangko([2, 4, 3, 5, 2, 6, 4, 5]); // case 3 output 12 // arrJumlahPerangko nilai per siswa [1, 2, 1, 2, 1, 2, 1, 2]
// const result = kasihPerangko([2, 3, 3, 4]); // case 4 output 6 // arrJumlahPerangko nilai per siswa [1, 2, 1, 2]
// const result = kasihPerangko([2, 3, 3, 4, 4, 4]); // case 5 output 6 // arrJumlahPerangko nilai per siswa [1, 2, 1, 2, 1, 1]

console.log(result);
