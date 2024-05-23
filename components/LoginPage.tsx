"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className=''>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/news/newPost")
  }
  
  return (
    <div className=''>
      <div className=''>
        <div className='' onClick={(e) =>{ 
                            e.preventDefault();
                            signIn("google")}}>
          Zaloguj się
        </div>
      </div>
    </div>
  );
};

export default LoginPage