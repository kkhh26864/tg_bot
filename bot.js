require('dotenv').config();
const { log } = require('console');
const TelegramBot = require('node-telegram-bot-api');

// 从环境变量中获取令牌
const token = process.env.BOT_TOKEN;

// 创建机器人实例
const bot = new TelegramBot(token, {polling: true});

// 处理 /start 命令
bot.onText(/\/start/, (msg) => {
console.log('start',msg)
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '你好!我是一个新的Telegram机器人。使用 /help 查看可用命令。');
});

// 处理 /help 命令
bot.onText(/\/help/, (msg) => {
    console.log('help',msg)
  const chatId = msg.chat.id;
  const helpText = `
可用命令列表:
/start - 开始使用机器人
/help - 显示此帮助信息
// ... 其他命令 ...
  `;
  bot.sendMessage(chatId, helpText);
});

console.log('机器人已启动');