document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const resumeText = `
    NAME: ${formData.get("name")}
    EMAIL: ${formData.get("email")}
    PHONE: ${formData.get("phone")}

    SUMMARY:
    ${formData.get("summary")}

    SKILLS:
    ${formData.get("skills")}

    EXPERIENCE:
    ${formData.get("experience")}

    EDUCATION:
    ${formData.get("education")}
  `;

  document.getElementById("resumeDisplay").innerText = resumeText.trim();
  document.getElementById("output").style.display = "block";
});
