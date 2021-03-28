<?php

function terbesarTerkecil($inputArr)
{
  //kode kamu di sini
  // mencari nilai terkecil menggunakan fungsi min
  $min = min($inputArr);
  // mencari nilai terbesar menggunakan fungsi max
  $max = max($inputArr);
  // memasukan nilai min dan max ke array
  $output = [$min, $max];
  // mengembalikan output
  return $output;
}

// case 1 INPUT: [1, 20, 15, 1936, 3923, 203] OUTPUT: [1, 3923]
print_r(terbesarTerkecil([1, 20, 15, 1936, 3923, 203]));

// case 2 INPUT: [32, 18, 15, 32, 9] OUTPUT: [9, 32]
print_r(terbesarTerkecil([32, 18, 15, 32, 9]));

// case 3 INPUT: [40, 28, 65, 44, 336] OUTPUT: [28, 336]
print_r(terbesarTerkecil([40, 28, 65, 44, 336]));

// case 4 INPUT: [40, 28, 65, 44, 336, 'a'] OUTPUT: [28, 'a']
print_r(terbesarTerkecil([40, 28, 65, 44, 336, 'a']));
