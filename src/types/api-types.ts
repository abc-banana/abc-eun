// API 응답 구조 정의
interface ApiResponse<T> {
  data: T;
  access_token?: string;
  message?: string;
  status?: string;
}

// 에러 응답 구조 정의
interface ApiErrorResponse {
  message: string;
  detail?: string;
  code?: string;
}

// 환경별 설정 인터페이스
interface ApiConfig {
  apiUrl: string;
  timeout?: number;
  retryAttempts?: number;
  enableLogging?: boolean;
}

// 커스텀 에러 클래스
class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any,
  ) {
    super(message);
    this.name = "ApiError";
  }
}
