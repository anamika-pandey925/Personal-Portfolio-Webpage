const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\naman\\.gemini\\antigravity\\brain\\eec04766-b0a5-40a5-9dac-dbfeb4628482';
const publicDir = path.join(__dirname, 'public');

const files = fs.readdirSync(brainDir)
  .filter(f => /^\d+\.jpg$/i.test(f))
  .map(f => ({
    name: f,
    time: fs.statSync(path.join(brainDir, f)).mtime.getTime()
  }))
  .sort((a, b) => b.time - a.time);

if (files.length > 0) {
  const latestImage = files[0].name;
  const sourcePath = path.join(brainDir, latestImage);
  const destPath = path.join(publicDir, 'certificate.jpg');
  
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Successfully applied your uploaded image (${latestImage}) to the portfolio!`);
} else {
  console.log('No chat images found.');
}
