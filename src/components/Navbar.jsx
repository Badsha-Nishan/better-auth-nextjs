"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <div>Loading....</div>;
  }
  const user = data?.user;

  return (
    <div>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            {user ? (
              <>
                {" "}
                <h2>Welcome {user.name}</h2>
                <button
                  className="bg-red-500 cursor-pointer hover:bg-red-800 p-2 rounded-md"
                  onClick={() => signOut()}
                >
                  SignOut
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth/signin">SignIn</Link>
                </li>
                <li>
                  <Link href="/auth/signup">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
