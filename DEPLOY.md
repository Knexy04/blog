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
   - В разделе "Actions" → "General" убедитесь, что включены:
     - "Allow all actions and reusable workflows"
     - "Allow GitHub Actions to create and approve pull requests"
   - В разделе "Environments" создайте environment с именем "github-pages" (если не существует)

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
- Если возникает ошибка "Permission denied", проверьте:
  - Settings → Actions → General → "Allow all actions and reusable workflows"
  - Settings → Actions → General → "Allow GitHub Actions to create and approve pull requests"
  - Settings → Pages → Source должен быть "GitHub Actions"

### Проблема с правами доступа (403 ошибка)
Если получаете ошибку "Permission to [repo] denied to github-actions[bot]":
1. Перейдите в Settings → Actions → General
2. Включите "Allow all actions and reusable workflows"
3. Включите "Allow GitHub Actions to create and approve pull requests"
4. В Settings → Pages выберите "GitHub Actions" как источник
5. Перезапустите workflow в Actions → Deploy to GitHub Pages → Re-run jobs

### Проблема с environment (Missing environment)
Если получаете ошибку "Missing environment":
1. Перейдите в Settings → Environments
2. Создайте новый environment с именем "github-pages"
3. В настройках environment включите "Required reviewers" (опционально)
4. Перезапустите workflow

### Проблема с деплоем Pages
Если деплой не запускается:
1. Убедитесь, что в Settings → Pages выбран "GitHub Actions"
2. Проверьте, что environment "github-pages" существует
3. Убедитесь, что workflow файл находится в `.github/workflows/`
