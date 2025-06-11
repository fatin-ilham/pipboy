document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const location = document.getElementById('location').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value.split(',').map(s => s.trim());
  const experience = document.getElementById('experience').value.split('\n').map(e => e.trim());

  document.getElementById('outName').textContent = name;
  document.getElementById('outTitle').textContent = title;
  document.getElementById('outLocation').textContent = location;
  document.getElementById('outSummary').textContent = summary;

  const skillsList = document.getElementById('outSkills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const expList = document.getElementById('outExperience');
  expList.innerHTML = '';
  experience.forEach(exp => {
    const li = document.createElement('li');
    li.textContent = exp;
    expList.appendChild(li);
  });

  document.getElementById('outputSection').classList.remove('hidden');
});
