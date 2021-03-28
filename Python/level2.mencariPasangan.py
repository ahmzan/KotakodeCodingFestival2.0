def cariPasangan(inputList, inputInt):
    # kode kamu di sini
    # menetapkan output sebagai list
    output = []
    # melakukan perulangan sebanyak panjang inputList
    for i in range(len(inputList)):
        # melakukan perulangan kedua sebanyak panjang inputList dimana range perulangan dimulai dari index perulangan pertama
        for j in range(i, len(inputList)):
            # jika nilai inputList[i] ditambah inputList[j] sama dengan inputInt
            if (inputList[i] + inputList[j]) == inputInt:
                # memasukan nilai ke list output
                output.append([inputList[i], inputList[j]])
    # mengembalikan output
    return output


# case 1
# Input: [1, 2, 4, 6, 9], 15 Output: [[6, 9]]
print(cariPasangan([1, 2, 4, 6, 9], 15))

# case 2
# Input: [1, 2, 3, 4, 5], 7 Output: [[2, 5], [3, 4]]
print(cariPasangan([1, 2, 3, 4, 5], 7))
