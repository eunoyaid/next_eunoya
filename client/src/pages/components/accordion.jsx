import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import {
  ArrowCircleDown,
  Box,
  BoxTime,
  MessageFavorite,
  TickCircle,
} from "iconsax-react";
import Image from "next/image";
import { useState } from "react";


const AccordionItem = ({ header, icon, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {icon}
        {header}
        <ArrowCircleDown
          className={` ml-auto  transition transition-[height 0.2s ease-in-out]`}
        />
      </>
    }
    className={`border bg-white border-border-card  dark:bg-gray-800 dark:border-gray-800 dark:shadow rounded-xl mb-5`}
    buttonProps={{
      className: ({ isEnter }) =>
        `${`flex cursor-pointer items-center  w-full m-0 p-4 text-center capitalize hover:text-primary transition  `} ${
          isEnter && ` rounded-lg transition text-primary `
        }`,
    }}
    contentProps={{ className: `transition-height  duration-300 ease-in-out` }}
    panelProps={{
      className: `p-4 pt-2 text-textSecondary lowercase font-normal`,
    }}
  />
);

export default function AccordionCustom() {
  const [open, setOpen] = useState();

  return (
    <div>
      <Accordion transition transitionTimeout={200}>
        <AccordionItem
          icon={<Box className="mr-2" />}
          header="Rincian produk"
          initialEntered
        >
          <div className="mb-3">
            <h5 className="text-textPrimary dark:text-secondary capitalize mb-2 text-sm">
              Deskripsi
            </h5>
            <p className=" text-xs dark:text-gray-300">
              tema floral di buat dengan mengabungkan warna coklat dan perpaduan
              aksen daun-daun yang membuat tema ini terlihat lebih estestik
            </p>
          </div>
          <div>
            <h5 className="text-textPrimary capitalize mb-2 text-sm dark:text-secondary">
              fitur
            </h5>

            <ul className="text-xs flex flex-wrap gap-x-4 gap-y-2">
              <li className="flex gap-2 items-center dark:text-gray-300">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
              <li className="flex gap-2 items-center dark:text-gray-300">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
              <li className="flex gap-2 items-center dark:text-gray-300 ">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
              <li className="flex gap-2 items-center dark:text-gray-300">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
              <li className="flex gap-2 items-center dark:text-gray-300">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
              <li className="flex gap-2 items-center dark:text-gray-300">
                {" "}
                <TickCircle size={`20`} /> tamplate premium{" "}
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={<BoxTime className="mr-2" />}
          header="info pengiriman"
        >
          <div className="mb-3">
            <h5 className="text-textPrimary capitalize mb-2 text-sm dark:text-secondary">
              biaya pengiriman
            </h5>
            <p className="uppercase text-xs dark:text-gray-300">GRATIS</p>
          </div>
          <div>
            <h5 className="text-textPrimary capitalize mb-2 text-sm dark:text-secondary">
              waktu pengerjaan
            </h5>
            <p className=" text-xs dark:text-gray-300">
              di butuhkan waktu 2-4 hari untuk mengerjakan orderan ini, waktu
              pengerjaan akan bertambah lama tergantung dari banyak sedikit nya
              revisi yang di berikan oleh customer
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={<MessageFavorite className="mr-2" />}
          header="Ulasan Produk (20)"
        >
          <ul className="list-review max-h-56 overflow-y-scroll">
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="review mb-4">
              <p className="text-sm dark:text-secondary">
                sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                dan pengerjaan nya juga cepat
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="reviewer  flex gap-x-2 items-center">
                  <div className="avatar relative w-6 rounded h-6 overflow-hidden">
                    <Image
                      className="absolute h-full w-full object-cover"
                      width={100}
                      height={100}
                      alt="avatar"
                      src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    ></Image>
                  </div>
                  <div className="name capitalize text-xs dark:text-gray-300">
                    tomo
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-xs dark:text-gray-300">4.95</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
