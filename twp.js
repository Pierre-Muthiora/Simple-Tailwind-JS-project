const paragraph = document.getElementById('paragraph');

paragraph.addEventListener('click', () => {
    paragraph.innerHTML==='Peter Nganga Muthiora says' ? paragraph.innerHTML='Hello' : paragraph.innerHTML='Peter Nganga Muthiora says'
});

