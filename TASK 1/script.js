function selectTemplate(template) {
    // You can customize this function to change the appearance of the resume form based on the selected template
  }
  
  document.getElementById('user-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    generatePreview();
  });
  
  function generatePreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
  
    const previewContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Education:</strong></p>
      <p>${education}</p>
      <p><strong>Experience:</strong></p>
      <p>${experience}</p>
      <p><strong>Skills:</strong></p>
      <p>${skills}</p>
    `;
  
    document.getElementById('preview-content').innerHTML = previewContent;
    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-preview').style.display = 'block';
  }
  
  function downloadResume() {
    const previewContent = document.getElementById('preview-content').innerHTML;
    const blob = new Blob([previewContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  