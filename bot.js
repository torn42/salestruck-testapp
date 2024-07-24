// eslint-disable-next-line no-undef
const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = '7389501710:AAFJhZRg2-rp25ewRwFZr3sc9mdeMUuPL5g';

// Замените 'YOUR_APP_URL' на URL вашего приложения
const appUrl = 'https://t.me/fronendinternshipbot/salestrucktestapp';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const message = 'Добро пожаловать! Нажмите на кнопку ниже, чтобы открыть веб-приложение.';
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть вебку',
            url: appUrl
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
});

console.log('Бот запущен...');