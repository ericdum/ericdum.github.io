const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

const execPromise = util.promisify(exec);

async function compressVideo(inputPath) {
  try {
    const tempPath = `${inputPath}.temp.mp4`;
    
    // 使用ffmpeg压缩视频到720p，明确指定输出格式为mp4
    // const command = `ffmpeg -i "${inputPath}" -vf "scale=-1:720" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -f mp4 "${tempPath}"`;
    const command = `ffmpeg -i "${inputPath}" -vf "scale=trunc(iw/2)*2:720" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -f mp4 "${tempPath}"`;

    
    console.log(`Compressing: ${inputPath}`);
    await execPromise(command);
    
    // 删除原文件并重命名临时文件
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath.replace(/\.[^/.]+$/, '.mp4'));
    console.log(`Compressed: ${inputPath}`);
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
    } else if (stat.isFile() && /\.(mp4|mov|avi|mkvm|m4v)$/i.test(item)) {
      await compressVideo(fullPath);
    }
  }
}

// 处理项目和新闻视频
async function main() {
  const args = process.argv.slice(2);
  const inputPath = args[0];

  if (!inputPath) {
    console.log('请提供文件或目录路径');
    console.log('用法: node compress-videos.js <文件或目录路径>');
    return;
  }

  const fullPath = path.resolve(inputPath);
  
  try {
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      console.log(`处理目录: ${fullPath}`);
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(mp4|mov|avi|mkvm|m4v)$/i.test(fullPath)) {
      console.log(`处理文件: ${fullPath}`);
      await compressVideo(fullPath);
    } else {
      console.log('不支持的文件类型');
    }
    console.log('视频压缩完成！');
  } catch (error) {
    console.error('错误:', error.message);
  }
}

main().catch(console.error); 