function fonct1() {
    document.getElementById('glob1id').style.display='block';
    document.getElementById('glob2id').style.display='none';
    document.getElementById('btn1id').classList.add('active');
    document.getElementById('btn2id').classList.remove('active');
}
function fonct2() {
    document.getElementById('glob1id').style.display='none';
    document.getElementById('glob2id').style.display='block';
    document.getElementById('btn1id').classList.remove('active');
    document.getElementById('btn2id').classList.add('active');
}