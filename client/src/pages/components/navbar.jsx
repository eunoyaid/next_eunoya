import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import icBrand from "/public/icons/icBrand.svg";
import { useTheme } from "next-themes";
import { Bag2, CloseCircle, Moon, Sun1 } from "iconsax-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Checkbox, Select } from "flowbite-react";

const show = {
  opacity: 1,
  transition: { duration: 0.3 },
  display: "block",
};

const hide = {
  opacity: 0,
  transition: { duration: 0.3 },
  y: "50%",
  transitionEnd: {
    display: "none",
  },
};

const NavbarEunoya = () => {
  const { theme, setTheme } = useTheme();
  const [cart, setCart] = useState();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system " ? systemTheme : theme;
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [qty, setQty] = useState(0);

  return (
    <div className=" bg-white dark:bg-gray-800 dark:border-gray-800 dark:shadow py-3 px-5 lg:py-4 lg:px-6 smooth-shadow fixed w-[90%]  z-20 mx-auto rounded-xl border border-gray-100    mt-3 left-0 right-0">
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
              className="b font-nunito text-lg  font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="b font-nunito text-lg font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              href="/blogs"
              className="b font-nunito text-lg font-medium text-gray-500 dark:text-secondary hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link
              href="/wedding"
              className="b font-nunito text-lg font-medium  text-gray-500 dark:text-secondary hover:text-gray-900"
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
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image
                  className="w-8 h-8 rounded-lg"
                  width={100}
                  height={100}
                  src={session?.user?.image}
                  priority
                  alt="Rounded avatar"
                />
              </motion.button>

              <motion.div
                className="absolute  mt-6 right-0 z-10  w-56 origin-top-right rounded-md bg-white border border-border-card  dark:bg-gray-800  dark:border-gray-700 dark:shadow "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
                animate={isVisible ? show : hide}
              >
                <ul className="p-2 ">
                  <li className="text-gray-700 block px-4 py-2 capitalize text-sm rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-50 dark:hover:text-header">
                    Profile
                  </li>
                  <li className="text-gray-700 block px-4 py-2 capitalize text-sm rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-50 dark:hover:text-header">
                    Riwayat Transaksi
                  </li>
                  <li className="text-gray-700 block px-4 py-2 capitalize text-sm rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-50 dark:hover:text-header">
                    {session ? (
                      <button onClick={() => signOut()}>Sign out</button>
                    ) : (
                      <button onClick={() => signIn()}>Sign in</button>
                    )}
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </nav>
      </div>

      {/* carts */}
      {cart && (
        <div className=" fixed z-50">
          <div className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity "></div>
            <div className=" inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex flex-col h-full bg-white shadow-xl">
                    <div className="flex-1 overflow-y-scroll py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <p
                          className="text-lg font-nunito  text-gray-900"
                          id="slide-over-title"
                        >
                          Keranjang Belanja
                        </p>
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
                      <div className="mt-8  ">
                        <ul>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                          <li className="flex mb-3 justify-between  items-center border border-border-card rounded-lg p-3">
                            <div className="desc flex gap-x-3 items-center">
                              <Checkbox />
                              <div className=" w-14 h-14 bg-gray-300 flex-shrink-0 overflow-hidden rounded-lg ">
                                <img
                                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className=" flex  flex-col">
                                <p className="flex justify-between   text-sm">
                                  Throwback Hip Bag
                                </p>

                                <p className="mt-1 text-xs">Rp 75000</p>
                                <div className="btns flex gap-x-3 items-center text-xs mt-2">
                                  <button
                                    onClick={() =>
                                      setQty(qty === 0 ? qty + 0 : qty - 1)
                                    }
                                    className="border rounded bg-gray-200  p-1"
                                  >
                                    -
                                  </button>{" "}
                                  {qty}{" "}
                                  <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border rounded bg-gray-200 p-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <CloseCircle className="cursor-pointer text-gray-400 hover:text-red-500" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Harga</p>
                        <p>Rp 262000</p>
                      </div>

                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base  text-white shadow-sm"
                        >
                          Checkout
                        </a>
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
