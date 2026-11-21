# Big~WaAIve MVP Template

Минималистичный шаблон фуллстек-проекта для двухчасовых MVP-хакатонов и интенсивов.

## Стек технологий
- **Backend:** [FastAPI](https://fastapi.tiangolo.com/), [Pydantic v2](https://docs.pydantic.dev/), [Uvicorn](https://www.uvicorn.org/) (Python 3.12+)
- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vite.dev/)
- **Координация:** [AGENTS.md](./AGENTS.md), [SPEC.md](./SPEC.md), [API_CONTRACT.md](./API_CONTRACT.md)

## Быстрый старт

### Запуск одной командой
```bash
# Из корня проекта
npm run dev
```
Команда запускает одновременно:
- Бэкенд API: [http://127.0.0.1:8000](http://127.0.0.1:8000) (Swagger: `/docs`, Health: `/api/health`)
- Фронтенд: [http://localhost:5173](http://localhost:5173)

### Раздельный запуск

#### Backend
```bash
cd backend
# Windows
.venv\Scripts\uvicorn main:app --reload --port 8000
# Linux / macOS
source .venv/bin/activate && uvicorn main:app --reload --port 8000
```

#### Frontend
```bash
cd frontend
npm run dev
```

## Структура проекта
```text
.
├── backend/
│   ├── .venv/               # Виртуальное окружение Python
│   ├── .env.example         # Пример переменных окружения
│   ├── main.py              # Точка входа FastAPI, CORS, /api/health
│   └── requirements.txt     # Зафиксированные зависимости
├── frontend/
│   ├── src/
│   │   ├── api.ts           # Клиент API с поддержкой USE_MOCKS
│   │   ├── App.tsx          # Минималистичный темный экран
│   │   └── ...
│   ├── vite.config.ts       # Настройка proxy на http://127.0.0.1:8000
│   └── package.json
├── AGENTS.md                # Жесткие правила для агентов разработки
├── SPEC.md                  # Спецификация MVP и сценария демо
├── API_CONTRACT.md          # Контракты эндпоинтов и типов
├── package.json             # Скрипт параллельного запуска (concurrently)
└── README.md
```

## Работа с моками (Instant Mocking)
В файле `frontend/src/api.ts` параметр `USE_MOCKS`:
- При `true` — фронтенд работает на мок-ответах без необходимости запускать бэкенд.
- При `false` — фронтенд отправляет реальные сетевые запросы через прокси `/api`.
