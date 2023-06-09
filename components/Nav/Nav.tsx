import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const logout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/login" });
    router.push(data.url);
  };

  if (status === "authenticated") {
    var links = [
      { href: "/shop", label: "Shop" },
      { href: "/addproducts", label: "Add Products" },
      { href: "/user-profile", label: "User Profile" },
      { href: "/logout", label: "Logout" },
    ];
  } else {
    links = [
      { href: "/shop", label: "Shop" },
      { href: "/login", label: "Login" },
      { href: "/signup", label: "Sign Up" },
    ];
  }
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-start grow flex-1">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center justify-end grow flex-1">
        <div className="md:block hidden">
          <InlineMenu links={links} logout={logout} />
        </div>
        <div className="md:hidden block z-10">
          <HamMenu links={links} logout={logout} />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Image
      className="object-contain rounded-full hover:rotate-90 transition duration-500"
      src="/WebLogo.png"
      alt="logo of Luther Marketplace"
      width={75}
      priority={true}
      height={75}
      style={{ width: 75, height: 75 }}
    />
  );
}
interface LinksName {
  href: string;
  label: string;
}
function InlineMenu({ links, logout }: { links: LinksName[]; logout: any }) {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="text-lg lg:flex-grow">
        {links.map((link) => {
          return (
            <div
              key={link.href}
              className=" mt-4 inline-block lg:mt-0 text-blue-500 hover:text-blue-800 transition-all duration-300 mr-4"
            >
              {link.label === "Logout" ? (
                <button className="" type="button" onClick={logout}>
                  Logout
                </button>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function HamMenu({ links, logout }: { links: LinksName[]; logout: any }) {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out   hover:text-gray-50 focus:outline-none  focus:shadow-outline-blue  active:text-gray-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  {links.map((link) =>{
                    return (
                      <Menu.Item key={link.href}>
                        {({ active }) => (
                          <>
                            {link.label === "Logout" ? (
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                type="button"
                                onClick={logout}
                              >
                                Logout
                              </button>
                            ) : (
                              <a
                                href={link.href}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                {link.label}
                              </a>
                            )}
                          </>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
