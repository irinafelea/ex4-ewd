function generare() {
    nr_elevi = document.getElementById('selector').value;
    document.getElementById('n_elevi_selector').style.display = 'none';
    for (let index = 0; index < nr_elevi; index++) {
        document.getElementById('selector_studenti').innerHTML += '\
        <p>Student '+ (index + 1) + '</p>\
        <label for="student_'+ index + '_nume">Nume:</label>\
         <input type="text" id="student_'+ index + '_nume" name="student_' + index + '_nume"><br><br>\
         <label for="student_'+ index + '_nota1">Nota 1:</label>\
         <input type="text" id="student_'+ index + '_nota1" name="student_' + index + '_nota1"><br><br>\
         <label for="student_'+ index + '_nota2">Nota 2:</label>\
         <input type="text" id="student_'+ index + '_nota2" name="student_' + index + '_nota2"><br><br>\
        '
    }
    document.getElementById('selector_studenti').innerHTML += '<button onclick="generare_tabel()">Generare tabel</button>';
}
function generare_tabel() {
    nr_elevi = document.getElementById('selector').value;
    document.getElementById('selector_studenti').style.display = 'none';
    media_clasei = 0;
    for (let index = 0; index < nr_elevi; index++) {
        nume = document.getElementById('student_' + index + '_nume').value;
        nota1 = document.getElementById('student_' + index + '_nota1').value;
        nota2 = document.getElementById('student_' + index + '_nota2').value;
        medie = (parseInt(nota1) + parseInt(nota2)) / 2;

        document.getElementById("tabel_final").innerHTML += 'Nume: ' + nume + '<br>Nota 1: ' + nota1 + '<br>Nota 2: ' + nota2 + '<br>Medie: ' + medie;
        if (medie > 5) {
            document.getElementById("tabel_final").innerHTML += ' Promovat</br><br>';
        }
        else {
            document.getElementById("tabel_final").innerHTML += ' Nepromovat</br><br>';
        }

        media_clasei = media_clasei + medie;
    
    }
    document.getElementById("tabel_final").innerHTML += '<br><br>Media clasei: ' + parseInt(media_clasei) / nr_elevi;

}
