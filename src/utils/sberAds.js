// Lightweight helper to send Sber Ads-compatible auth events without hard-failing
// It uses multiple backends if available on the page: dataLayer, SberAnalytics, Yandex.Metrika, Top.Mail.Ru

function safePushDataLayer(payload) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    }
  } catch (_) {}
}

function trySberAnalytics(payload) {
  try {
    if (typeof window !== 'undefined' && window.SberAnalytics && typeof window.SberAnalytics.push === 'function') {
      window.SberAnalytics.push(payload);
    }
  } catch (_) {}
}

function tryTopMailReachGoal(stage) {
  try {
    if (typeof window !== 'undefined' && Array.isArray(window._tmr)) {
      // Replace with your Top.Mail.Ru id if different
      const MAIL_RU_ID = '3708329';
      window._tmr.push({ id: MAIL_RU_ID, type: 'reachGoal', goal: 'auth' });
      window._tmr.push({ id: MAIL_RU_ID, type: 'reachGoal', goal: `auth_${stage}` });
    }
  } catch (_) {}
}

export function sendSberAuthEvent(stage, extra) {
  const payload = {
    event: 'auth',
    stage, // e.g. 'click' | 'submit' | 'success' | 'error'
    timestamp: Date.now(),
    ...(extra || {}),
  };

  safePushDataLayer(payload);
  trySberAnalytics(payload);
  tryYandexMetrikaReachGoals(stage, payload);
  tryTopMailReachGoal(stage);
}

export default sendSberAuthEvent;


