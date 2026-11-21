# API_CONTRACT.md — Спецификация контрактов API

Единый источник правды для взаимодействия между Backend и Frontend.

---

### 1. Health Check
- **Метод:** `GET`
- **Путь:** `/api/health`
- **Описание:** Проверка доступности и статуса бэкенд-сервиса.
- **Заголовки:** Не требуются
- **Параметры:** Нет
- **Тело запроса:** Нет

#### Успешный ответ (200 OK)
```json
{
  "status": "ok",
  "service": "backend",
  "version": "0.1.0"
}
```

#### Мок-данные (при `USE_MOCKS = true` во Frontend)
```json
{
  "status": "ok",
  "service": "backend (mock)",
  "version": "0.1.0"
}
```
