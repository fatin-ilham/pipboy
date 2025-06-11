document.getElementById('resume-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const skills = document.getElementById('skills').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  const resumeHTML = `
    <h2>${name}</h2>
    <h3>${title}</h3>
    <hr>
    <p><strong>🧠 Skills:</strong><br>${skills.replace(/\n/g, '<br>')}</p>
    <p><strong>💼 Experience:</strong><br>${experience.replace(/\n/g, '<br>')}</p>
    <p><strong>🎓 Education:</strong><br>${education.replace(/\n/g, '<br>')}</p>
    <p style="margin-top:20px; font-size: 12px;">Right-click and select "Open Image in New Tab" or use screenshot to download your Vault-approved resume.</p>
  `;

  const output = document.getElementById('resume-display');
  output.innerHTML = resumeHTML;
  output.style.display = 'block';
});
