# Деплой на GitHub Pages

## Настройка репозитория

1. **Создайте репозиторий на GitHub** (если еще не создан)
2. **Замените `yourusername` в `package.json`** на ваше имя пользователя GitHub:
   ```json
   "homepage": "https://yourusername.github.io/react-blog-site"
   ```

## Автоматический деплой через GitHub Actions

1. **Загрузите код в репозиторий:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Включите GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"

3. **GitHub Actions автоматически задеплоит приложение** при каждом push в main ветку

## Ручной деплой

Если хотите задеплоить вручную:

```bash
npm run deploy
```

## Проверка деплоя

После деплоя ваше приложение будет доступно по адресу:
`https://yourusername.github.io/react-blog-site`

## Устранение проблем

### Проблема с роутингом
Если при прямом переходе на страницы (например, `/blog`) возникает ошибка 404:
- Убедитесь, что файл `public/404.html` создан
- Проверьте, что в `src/App.js` установлен правильный `basename`

### Проблема с путями к ресурсам
- Убедитесь, что в `package.json` правильно указан `homepage`
- Все пути к изображениям должны начинаться с `/` (абсолютные пути)

### Проблема с GitHub Actions
- Убедитесь, что в репозитории включены GitHub Actions
- Проверьте, что в Settings → Actions → General включен доступ к Actions
