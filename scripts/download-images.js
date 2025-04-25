const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const newsId = '4'; // 新闻ID
const images = [
  // 这里需要添加新闻中的图片URL
];

const videoUrl = ""; // 这里需要添加新闻中的视频URL

const downloadFile = (url, filename, isVideo = false) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../public/images/news', newsId, filename);
    
    // 检查文件是否已存在
    if (fs.existsSync(filePath)) {
      console.log(`File already exists: ${filename}`);
      resolve();
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://news.qq.com/',
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Range': 'bytes=0-',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'video',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'Origin': 'https://news.qq.com',
        'Host': 'apd-ugcvlive.apdcdn.tc.qq.com'
      }
    };

    if (isVideo) {
      options.headers['Accept-Encoding'] = 'identity;q=1, *;q=0';
      options.headers['Accept-Ranges'] = 'bytes';
    }

    protocol.get(url, options, (response) => {
      if (response.statusCode !== 200 && response.statusCode !== 206) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  // 确保目录存在
  const dir = path.join(__dirname, '../public/images/news', newsId);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 下载视频
  if (videoUrl) {
    try {
      await downloadFile(videoUrl, 'video.mp4', true);
    } catch (error) {
      console.error(`Error downloading video:`, error);
    }
  }

  // 下载所有图片
  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    const filename = `image-${i + 1}.jpg`;
    try {
      await downloadFile(url, filename);
    } catch (error) {
      console.error(`Error downloading ${url}:`, error);
    }
  }
};

main().catch(console.error); 