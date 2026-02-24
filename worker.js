// Cloudflare Worker代码 - minecraft-server-simple.js
export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="msvalidate.01" content="EB99BEBDDEC550BC18C6437A31F63950" />
    <meta name='description' content='Minecraft PBlossom服务器宣传页面'>
    <meta itemprop="name" content=PBlossom-MC">

<meta itemprop="Description" content="专业的Fabric MC服务器">

<meta itemprop="image" content="https://littleskin.cn/favicon.png">
    <title>PBlossom Minecraft服务器</title>
    <style>
        body {
            font-family: 'Microsoft YaHei', sans-serif;
            background: #1a1a2e;
            color: #e6e6e6;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            padding: 30px 20px;
            background: #16213e;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 2px solid #4CAF50;
        }
        
        h1 {
            color: #4CAF50;
            margin: 10px 0;
            font-size: 2.5rem;
        }
        
        h2 {
            color: #FF9800;
            border-left: 4px solid #FF9800;
            padding-left: 10px;
            margin: 30px 0 15px 0;
        }
        
        h3 {
            color: #8B5CF6;
            margin: 20px 0 10px 0;
        }
        
        .version {
            background: #FF9800;
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            display: inline-block;
            margin: 10px 0;
        }
        
        .tags {
            margin: 15px 0;
        }
        
        .tag {
            display: inline-block;
            background: rgba(76, 175, 80, 0.2);
            color: #4CAF50;
            padding: 5px 15px;
            margin: 5px;
            border-radius: 15px;
            border: 1px solid #4CAF50;
        }
        
        .section {
            background: #16213e;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        .command {
            background: #2a2a3e;
            padding: 12px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
            color: #FF9800;
            border-left: 3px solid #FF9800;
        }
        
        .qq-group {
            text-align: center;
            background: #12B7F5;
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            font-size: 1.5rem;
        }
        
        .button {
            display: inline-block;
            background: #4CAF50;
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px;
            font-size: 1.2rem;
        }
        
        .feature {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        
        .feature::before {
            content: "✓";
            color: #4CAF50;
            margin-right: 10px;
            font-weight: bold;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            color: #888;
            font-size: 0.9rem;
            border-top: 1px solid #333;
            padding-top: 20px;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            
            h1 {
                font-size: 1.8rem;
            }
            
            .section {
                padding: 15px;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>PBlossom (梨花与落)</h1>
            <div class="version">
                <i class="fas fa-gamepad"></i> Minecraft 1.21.1
            </div>
            <p>国庆全新周目来啦！支持离线/正版！</p>
            
            <div class="tags">
                <span class="tag">生存</span>
                <span class="tag">休闲</span>
                <span class="tag">红石</span>
                <span class="tag">建筑</span>
                <span class="tag">养老</span>
            </div>
            
            <p><i class="fas fa-circle" style="color: #4CAF50"></i> 服务器在线</p>
        </div>
        
        <div class="section">
            <h2>服务器特色</h2>
            
            <div class="feature">模组服：单生存世界，FTBTeams圈地功能，管理员高强度监督防熊</div>
            <div class="feature">基础指令：箱子锁、随机传送、玩家传送、设置坐标点</div>
            <div class="feature">舒适流畅：自由交易、死亡不掉落、团队协作、休闲养老</div>
            <div class="feature">监督机制：举报违规玩家有奖，举报快速受理</div>
            <div class="feature">和谐社区：轻松的社区氛围，自主组建团队</div>
        </div>
        
        <div class="section">
            <h2>详细指令指南</h2>
            
            <h3><i class="fas fa-map-marked-alt"></i> 圈地系统</h3>
            <p>① 使用木棍右击选择区域认领区块</p>
            <p>② 在团队设置中将加入设置为开放后：</p>
            
            <div class="command">/ftbteams party join [团队名称]</div>
            <p>加入一个团队</p>
            
            <div class="command">/ftbteams party leave [团队名称]</div>
            <p>离开一个团队</p>
            
            <h3><i class="fas fa-map-signs"></i> 传送指令</h3>
            <div class="command">/tpa [玩家名称]</div>
            <p>申请传送到玩家</p>
            
            <div class="command">/tpahere [玩家名称]</div>
            <p>申请将玩家传送过来</p>
            
            <div class="command">/spawn</div>
            <p>回到出生点</p>
            
            <div class="command">/home set [名称]</div>
            <p>设置你的家</p>
            
            <div class="command">/home tp [名称]</div>
            <p>传送到你的家</p>
            
            <div class="command">/back</div>
            <p>回到上次传送的位置</p>
            
            <h3><i class="fas fa-lock"></i> 箱子锁系统</h3>
            <p>【创建箱子默认公开】使用木棍右击箱子后执行指令</p>
            
            <div class="command">/htm set public</div>
            <p>将箱子设为公开</p>
            
            <div class="command">/htm set private</div>
            <p>将箱子设为私密</p>
            
            <div class="command">/htm set key</div>
            <p>使用物品作为钥匙设置箱子锁</p>
            
            <div class="command">/htm trust [玩家名称]</div>
            <p>和玩家共享你的箱子权限</p>
            
            <div class="command">/htm untrust [玩家名称]</div>
            <p>取消玩家共享权限</p>
        </div>
        
        <div class="qq-group">
            <i class="fab fa-qq"></i> 服务器审核QQ群：599192336
        </div>
        
        <div style="text-align: center;">
            <p><i class="fas fa-server"></i> 服务器地址：通过审核QQ群获取</p>
            
            <a href="https://qun.qq.com/universal-share/share?ac=1&authKey=ShkzmwzAUviPTv9U9RlCZivmOLYbOVbgYdugadI8r66WJk9zdUGrXUzOlt1O6Z%2BP&busi_data=eyJncm91cENvZGUiOiI4MTE2NTE5OTUiLCJ0b2tlbiI6IjcwcVIvTWhlbzRpcWEzY3NEUHQzRjRRbFhWTE1IdHNDWU10L1FKS1lhQjlNblNzUGRERitkckNaNmtxWCtWL0siLCJ1aW4iOiIzNjMyOTMzMDY0In0%3D&data=tD4kpaWxH60jixqhqgyDRP9BPh6FfRX-Elio5Lo0lmZWp4d84TIxfxxp79XQ-bu0dK9cQe37Tb2LqvJasRmXjw&svctype=4&tempid=h5_group_info" class="button" target="_blank">
                <i class="fab fa-qq"></i> 点击加入QQ群
            </a>
        </div>
        
        <div class="footer">
            <p>© 2025 PBlossom (梨花与落) Minecraft服务器</p>
            <p>本页面由Cloudflare Worker驱动</p>
        </div>
    </div>
    
    <script>
        // 简单的时间显示
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN');
        const timeElement = document.createElement('div');
        timeElement.style.cssText = 'text-align: center; margin-top: 20px; color: #666;';
        timeElement.innerHTML = '页面构建时间：' + timeString;
        document.querySelector('.footer').parentNode.insertBefore(timeElement, document.querySelector('.footer'));
        
        // 命令点击复制
        document.querySelectorAll('.command').forEach(cmd => {
            cmd.style.cursor = 'pointer';
            cmd.addEventListener('click', function() {
                const text = this.textContent;
                navigator.clipboard.writeText(text);
                this.style.background = '#4CAF50';
                this.style.color = 'white';
                setTimeout(() => {
                    this.style.background = '';
                    this.style.color = '';
                }, 1000);
            });
        });
    </script>
</body>
</html>`;

    return new Response(html, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
  },
};