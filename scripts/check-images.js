const fs = require('fs');

function findUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g) || [];
  return [...new Set(matches)];
}

async function testFile(filePath) {
  const urls = findUrls(filePath);
  console.log(`Checking ${filePath} (${urls.length} images)...`);
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status !== 200) {
        console.log(`  FAIL [${res.status}]: ${url}`);
      } else {
        console.log(`  OK [200]: ${url.substring(0, 60)}...`);
      }
    } catch (err) {
      console.log(`  ERROR: ${url} (${err.message})`);
    }
  }
}

async function run() {
  await testFile('src/config/gallery.ts');
  await testFile('src/components/sections/ActivitiesPreviewSection.tsx');
  await testFile('src/components/sections/WhySchoolSection.tsx');
  await testFile('src/components/sections/LearningPhilosophySection.tsx');
  await testFile('src/components/sections/EnvironmentSection.tsx');
  await testFile('src/components/sections/GalleryPreviewSection.tsx');
  await testFile('src/components/sections/AdmissionJourneySection.tsx');
  await testFile('src/app/about/page.tsx');
  await testFile('src/app/academics/page.tsx');
  await testFile('src/app/activities/page.tsx');
  await testFile('src/app/campus/page.tsx');
}

run();
