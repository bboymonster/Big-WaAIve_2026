export const USE_MOCKS = false;

export interface HealthResponse {
  status: string;
  service: string;
  version: string;
}

export async function getHealth(): Promise<HealthResponse> {
  if (USE_MOCKS) {
    return {
      status: 'ok',
      service: 'backend (mock)',
      version: '0.1.0',
    };
  }

  const response = await fetch('/api/health');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText || 'Request failed'}`);
  }
  return response.json();
}
