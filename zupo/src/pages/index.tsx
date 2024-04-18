import { useSession } from "next-auth/react";
// import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import robotImage from "../../public/Doodle.png";
import { signIn } from "next-auth/react";

export default function Home() {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is authenticated, redirect to the dashboard page
    if (status === "authenticated") {
      router.push("/test");
    }
  }, [status, router]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <Image src={"/EVLogo.png"} alt="Hero" width={200} height={100} />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          {!sessionData && (
            <div className="relative">
              <Image
                src={robotImage}
                alt="Robot Image"
                width={400}
                height={400}
              />
              <button
                className="hover:bg-white/1 absolute bottom-11 left-1/2 w-9/12 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-left  transition"
                onClick={async () => {
                  await signIn("azure-ad").catch((error) => {
                    // Handle the error
                    console.error("Sign in error:", error);
                  });
                }}
              >
                <span className="flex items-center gap-3">
                  <Image
                    src="/icon.svg"
                    alt="Microsoft Icon"
                    width={20}
                    height={20}
                  />
                  Sign in with Microsoft
                </span>
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
