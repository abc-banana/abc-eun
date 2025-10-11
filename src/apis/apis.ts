import { User } from "@supabase/supabase-js";
import { BaseApiClient } from "./base-axios-client";

class ApiClient extends BaseApiClient {
  constructor() {
    // 환경별 설정
    const config: ApiConfig = {
      apiUrl:
        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
        "/",
      timeout: 15000,
      retryAttempts: 3,
      enableLogging: process.env.NODE_ENV === "development",
    };

    if (!config.apiUrl) {
      throw new Error("API_URL과 ADMIN_API_URL이 설정되지 않았습니다.");
    }

    super(config);
  }

  // == 도메인 메서드 (AbortSignal 지원) ==
  // 여기에 계속 추가...
  public getUser() {
    return this.get<User>("/api/auth/user");
  }

  public logOut() {
    return this.get("/api/auth/logout");
  }
}

const api = new ApiClient();
export default api;
