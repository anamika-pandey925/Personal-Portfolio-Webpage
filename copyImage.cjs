const fs = require('fs');
const path = require('path');
const os = require('os');

const downloadsDir = path.join(os.homedir(), 'Downloads');
const publicDir = path.join(__dirname, 'public');

const files = fs.readdirSync(downloadsDir)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .map(f => ({
    name: f,
    time: fs.statSync(path.join(downloadsDir, f)).mtime.getTime()
  }))
  .sort((a, b) => b.time - a.time);

if (files.length > 0) {
  const latestImage = files[0].name;
  const sourcePath = path.join(downloadsDir, latestImage);
  const destPath = path.join(publicDir, 'profile.jpg');
  
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied ${latestImage} to public/profile.jpg`);
} else {
  console.log('No recent images found in Downloads.');
}
