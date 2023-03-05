import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import icBrand from "/public/icons/icBrand.svg";
import { useTheme } from "next-themes";
import { Bag2, BoxRemove, Moon, ShoppingBag, ShoppingCart, Sun1 } from "iconsax-react";

const NavbarEunoya = () => {
  const { theme, setTheme } = useTheme();
  const [profile, setProfile] = useState();
  const [cart, setCart] = useState();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system " ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=" bg-white dark:bg-gray-800 py-3 px-5 lg:py-4 lg:px-6 smooth-shadow fixed w-[80%]  z-20 mx-auto rounded-xl border border-gray-100  dark:border-gray-700 dark:shadow  mt-3 left-0 right-0">
      <div className="flex items-center justify-between   ">
        <div className="flex justify-start font-nunito ">
          <Link href="/">
            <span className="sr-only">Your Company</span>
            <Image src={icBrand} priority alt="ic-eunoya" />
          </Link>
        </div>

        <nav className="lg:flex ">
          <div className=" hidden space-x-6 lg:items-center  lg:flex menus">
            <Link
              href="/"
              className="font-nunito text-lg  font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-nunito text-lg font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              href="/blogs"
              className="font-nunito text-lg font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link
              href="/wedding"
              className="font-nunito text-lg font-medium  text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Wedding
            </Link>
          </div>
          <div className="relative flex items-center">
            <div className=" flex gap-2 mx-4 md:mx-6">
              {currentTheme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                  <Sun1 className=" icons dark:text-primary " />
                </button>
              ) : (
                <button onClick={() => setTheme("dark")}>
                  <Moon className="icons  dark:text-primary" />
                </button>
              )}

              <div className="relative cart">
                <span className="bg-primary rounded-full px-2 py-1 absolute text-[8px] -right-3  -top-1 text-white">
                  10
                </span>
                <Bag2
                  onClick={() => setCart(!cart)}
                  className=" icons dark:text-primary cursor-pointer"
                />
              </div>
            </div>
            <div className="relative cursor-pointer profile inline-block text-left">
              <img
                onClick={() => setProfile(!profile)}
                className="w-8 h-8 rounded-lg"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="Rounded avatar"
              />

              {profile && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>

                    <Link
                      href={"/login"}
                      className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* carts */}
      {cart && (
        <div
          className=" absolute z-50"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex flex-col h-full bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-nunito font-semibold text-gray-900"
                          id="slide-over-title"
                        >
                          Keranjang Belanja
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={() => setCart(!cart)}
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close panel</span>

                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8  overflow-y-scroll">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className=""
                          >
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                            <li className="flex mb-3  border border-border-card rounded-lg p-3">
                              <div className=" w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                  
                                    <BoxRemove className="cursor-pointer text-gray-400 hover:text-red-500"/>
                                  </div>                            
                                  <p className="mt-1 ">
                                 Rp 75000 
                                    </p>

                                </div>                   
                              </div>
                            </li>                     
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarEunoya;
