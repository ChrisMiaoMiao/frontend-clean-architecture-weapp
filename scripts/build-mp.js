const fs = require('fs-extra')
const path = require('path')

const corePackagePath = path.join(__dirname, '../packages/core/build')
const targetPath = path.join(__dirname, '../packages/we-app/miniprogram/lib/core')

if (fs.existsSync(targetPath)) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}

fs.copy(corePackagePath, targetPath)
  .then(() => console.log('wx ajax sync successfully!'))
  .catch(err => console.error(err))
