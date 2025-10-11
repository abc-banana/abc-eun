import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLogOutMutation } from "./mutations";
import { useUserQuery } from "./queries";

function useAuth() {
  const router = useRouter();
  const { data: user, isPending, error } = useUserQuery();
  const { mutate: logOutMutate } = useLogOutMutation();

  const logInStartWithProvider = (
    provider: string = "kakao",
    next: string = "/",
  ): void => {
    const url = `/api/auth/provider?provider=${provider}&next=${next}`;
    router.push(url);
  };

  const logOut = (): void => {
    logOutMutate();
  };

  // useEffect for debugging
  useEffect(() => {
    console.log("user in useAuth ===========>", user);
  }, [user]);

  useEffect(() => {
    console.log("isPending in useAuth ===========>", isPending);
  }, [isPending]);

  useEffect(() => {
    console.log("error in useAuth ===========>", error);
  }, [error]);

  return { user, logInStartWithProvider, logOut };
}

export default useAuth;
