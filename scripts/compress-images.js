const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_WIDTH = 1200;

async function compressImage(inputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    if (metadata.width > MAX_WIDTH) {
      // 创建临时文件
      const tempPath = `${inputPath}.temp`;
      await image
        .resize({ width: MAX_WIDTH })
        .toFile(tempPath);
      
      // 删除原文件并重命名临时文件
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);
      console.log(`Compressed: ${inputPath}`);
    } else {
      console.log(`Skipped (already small enough): ${inputPath}`);
    }
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item)) {
      await compressImage(fullPath);
    }
  }
}

// 处理项目和新闻图片
async function main() {
  const projectDir = "/Users/mujiang/Downloads/未命名文件夹 2";
  
  console.log('Processing news images...');
  await processDirectory(projectDir);
  
}

main().catch(console.error); 