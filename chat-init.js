import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://yourdomain.com/webhook/your-webhook-id', // Замени на свой URL вебхука
  webhookConfig: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  target: '#n8n-chat',
  mode: 'window',
  showWelcomeScreen: true,
  initialMessages: [
    'Привет! 👋',
    'Я голосовой ИИ-агент Алгоритмики. Чем могу помочь?'
  ],
  i18n: {
    en: {
      title: 'Добро пожаловать в Алгоритмику! 👋',
      subtitle: 'Спроси меня о курсах, расписании или заданиях — я помогу!',
      getStarted: 'Новый вопрос',
      inputPlaceholder: 'Введите сообщение...'
    }
  }
});
