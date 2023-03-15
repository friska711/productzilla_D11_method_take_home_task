function ceknilaikelulusan(nilaikeaktifan,nilaiujian,absensi)
if (nilaikeaktifan == 100 && nilaiujian == 100 && absensi == 100){
    console.log(`Outstanding`)
} else if (nilaikeaktifan >= 90 && nilaiujian>= 90 && absensi>= 90){
    console.log(`Excellent`)
} else if (nilaikeaktifan >= 80 && nilaiujian>= 80 && absensi<= 80){
    console.log(`Good`)
} else if (nilaikeaktifan <= 80 && nilaiujian<= 80 && absensi<=80 ){
    console.log(`Participant`)
}
