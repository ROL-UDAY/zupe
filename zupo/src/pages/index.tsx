import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import robotImage from "../../public/Doodle.png";

export default function Home() {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is authenticated, redirect to the dashboard page
    if (status === "authenticated") {
      void router.push("/test");
    }
  }, [status, router]);

  const handleSignIn = async () => {
    try {
      const result = await signIn("azure-ad");
      if (!result?.ok) {
        // Sign-in failed, redirect to the root page
        void router.push("/");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      // Redirect to the root page on error
      void router.push("/");
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex w-full items-center sm:justify-center xs:mt-0 xs:justify-center">
          <Image src={"/EVLogo.png"} alt="Hero" width={200} height={100} />
        </div>
        <div className=" flex flex-col items-center justify-center gap-12 px-4 py-16">
          {!sessionData && (
            <div className="relative">
              <Image
                src={robotImage}
                alt="Robot Image"
                width={400}
                height={400}
                className="xs:w-400"
              />
              <button
                className="hover:bg-white/1 absolute bottom-11 left-1/2 w-9/12 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-left transition"
                onClick={handleSignIn}
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
