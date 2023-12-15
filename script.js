document.getElementById('interests-btn').addEventListener('click', function() {
    document.getElementById('interests').style.display = 'block';
    document.getElementById('research').style.display = 'none';
    document.getElementById('personal-projects').style.display = 'none';
    document.getElementById('work-projects').style.display = 'none';
});

document.getElementById('research-btn').addEventListener('click', function() {
    document.getElementById('research').style.display = 'block';
    document.getElementById('interests').style.display = 'none';
    document.getElementById('personal-projects').style.display = 'none';
    document.getElementById('work-projects').style.display = 'none';
});