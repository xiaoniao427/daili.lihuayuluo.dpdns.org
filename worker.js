const API_URL = 'https://api.mcsrvstat.us/3/mc.lihuayuluo.cn';
const DIRECT_ADDRESS = 'mc.lihuayuluo.cn';

async function handleRequest(request) {
  try {
    // 添加User-Agent头部，模拟浏览器请求
    const response = await fetch(API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status}`);
    }
    
    const text = await response.text();
    const data = JSON.parse(text);
    
    // 处理数据...
    if (data.online === true) {
      const serverAddress = `${data.ip}:${data.port}`;
      return new Response(
        `服务器在线\n请通过以下地址进行临时连接：\n${serverAddress}`,
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    } else {
      return new Response(
        `服务器不在线或代理失效\n请尝试直接通过${DIRECT_ADDRESS}游玩`,
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }
    
  } catch (error) {
    console.error('Worker错误:', error);
    return new Response(
      `状态检测失败\n请尝试直接通过${DIRECT_ADDRESS}游玩\n错误: ${error.message}`,
      { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    );
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});