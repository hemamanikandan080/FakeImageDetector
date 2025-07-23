const fileInput = document.getElementById('file-input');
const dropZone = document.getElementById('drop-zone');
const preview = document.getElementById('preview');

// Triggered when file is selected
fileInput.addEventListener('change', handleFile);

// Allow drag-and-drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.borderColor = '#007bff';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.borderColor = 'orange';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.style.borderColor = 'orange';
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    handleFile();
  }
});

function handleFile() {
  const file = fileInput.files[0];
  if (!file) return;

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    alert("File too large! Maximum 10MB allowed.");
    fileInput.value = "";
    preview.src = "https://via.placeholder.com/150";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    preview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function detectImage() {
  if (!fileInput.files[0]) {
    alert("Please upload an image first.");
    return;
  }
  alert("Fake Image Detection Process Starting... (backend coming soon)");
}
