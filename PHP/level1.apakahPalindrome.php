<?php

function apakahPalindrome($input)
{
  //kode kamu di sini
  // memecah string menjadi array
  $inputArray = str_split($input, 1);
  // membalik array
  $reversedInputArray = array_reverse($inputArray);
  // melakukan perulangan sebanyak panjang dari $inputArray
  for ($i = 0; $i < count($inputArray); $i++) {
    // mengecek jika $inputArray dengan index $i sama dengan $reversedInputArray dengan index $i
    if ($inputArray[$i] == $reversedInputArray[$i]) {
      // jika sama maka true
      // dan lanjut untuk mengecek nilai selanjutnya
      $output = true;
    } else {
      // jika tidak maka false yang berarti bukan palindrome
      // dan keluar dari perulangan
      $output = false;
      break;
    }
  }
  // mengembalikan nilai $output
  return $output;
}

// case 1 input 1991 // output true
var_dump(apakahPalindrome(1991));

// case 2 input 1991 // output false
var_dump(apakahPalindrome(34734));

// case 3 input 1991 // output true
var_dump(apakahPalindrome(1115111));
