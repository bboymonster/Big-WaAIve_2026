from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Rapid MVP API",
    version="0.1.0",
)

# Open CORS configuration for fast hackathon iterations
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthResponse(BaseModel):
    status: str
    service: str
    version: str

# Base API Router (clean mounting point for future routes without heavy ORMs)
api_router = APIRouter(prefix="/api")

@api_router.get("/health", response_model=HealthResponse)
def get_health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="backend",
        version="0.1.0",
    )

# Connect future domain routers here:
# e.g. from routers import items; api_router.include_router(items.router, prefix="/items", tags=["items"])

app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
