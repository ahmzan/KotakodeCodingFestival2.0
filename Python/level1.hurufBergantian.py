def hurufBergantian(inputString):
    # mendefinisikan variabel
    output = 0
    newString = ''
    # melakukan perulangan sebanyak panjang inputString
    for i in range(len(inputString)):
        # menggunakan try except
        try:
            # jika inputString sekarang sama dengan inputString selanjutnya
            if inputString[i] == inputString[i + 1]:
                # output ditambah 1
                output += 1
            else:
                # jika tidak sama masukan karakter sekarang ke newString
                newString += inputString[i]
        # jika terjadi error artinya telah mencapai akhir array
        except:
            # memasukan karakter sekarang ke newString
            newString += inputString[i]
    return output


# case 1
# Input: "PCPCCPC" Output: 1
print(hurufBergantian("PCPCCPC"))  # PCPCPC

# case 2
# Input: "PPCPPC" Output: 2
print(hurufBergantian("PPCPPC"))  # PCPC

# case 3
# Input: "PCPPCPPP" Output: 3
print(hurufBergantian("PCPPCPPP"))  # PCPCP
