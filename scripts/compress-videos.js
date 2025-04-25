const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

const execPromise = util.promisify(exec);

async function compressVideo(inputPath) {
  try {
    const tempPath = `${inputPath}.temp.mp4`;
    
    // 使用ffmpeg压缩视频到720p，确保宽度是2的倍数
    const command = `ffmpeg -i "${inputPath}" -vf "scale=trunc(iw/2)*2:720" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -f mp4 "${tempPath}"`;
    
    console.log(`开始压缩: ${inputPath}`);
    await execPromise(command);
    
    // 删除原文件并重命名临时文件
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath.replace(/\.[^/.]+$/, '.mp4'));
    console.log(`压缩完成: ${inputPath}`);
  } catch (error) {
    console.error(`处理文件 ${inputPath} 时出错:`, error.message);
    // 如果临时文件存在，删除它
    if (fs.existsSync(`${inputPath}.temp.mp4`)) {
      fs.unlinkSync(`${inputPath}.temp.mp4`);
    }
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let processedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(m4v)$/i.test(item)) {
      await compressVideo(fullPath);
      processedCount++;
    }
  }
  
  if (processedCount > 0) {
    console.log(`在目录 ${dirPath} 中处理了 ${processedCount} 个视频文件`);
  }
}

// 处理项目和新闻视频
async function main() {
  const projectDir = path.join(__dirname, '../public/images/projects');
  const newsDir = path.join(__dirname, '../public/images/news');
  
  console.log('开始处理项目视频...');
  await processDirectory(projectDir);
  
  console.log('开始处理新闻视频...');
  await processDirectory(newsDir);
  
  console.log('视频压缩任务完成！');
}

main().catch(error => {
  console.error('发生错误:', error);
  process.exit(1);
}); 