import axios from "axios";
import { Button } from "flowbite-react";
import { Check, Key } from "iconsax-react";
import { useRouter } from "next/router";
import React from "react";
import { BiCheck } from "react-icons/bi";
import useSWR from "swr";

const DetailsProduct = () => {
  const router = useRouter();
  const { slug } = router.query;
  const address = `https://dummyjson.com/products/1 `;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  console.log(data);
  let loading = !data && !error;
  return (
    <div className="mx-auto  max-w-2xl pt-24 pb-4 px-4 sm:py-14 sm:px-6 lg:max-w-3xl lg:pt-36 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="left mb-5  relative overflow-hidden h-80 rounded-xl">
          <img
            className="absolute object-cover w-full h-full "
            src={data.thumbnail}
            alt=""
          />
        </div>
        <div className="right">
          <div className=" rounded-xl border border-border-card smooth-shadow p-4  ">
            {data && (
              <div className="card-wrapper">
                <div className="flex justify-between ">
                  <div className="product-detail">
                    <p className="title capitalize text-2xl font-semibold">
                      {" "}
                      {data.title}{" "}
                    </p>
                  </div>
                  <span className=" flex items-center text-[10px] text-red-500 py-0.5 px-2  bg-red-200 rounded-lg lowercase">
                    -10%{" "}
                  </span>
                </div>
                <p className="text-xs  text-primary my-2  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
                  {" "}
                  {data.category}{" "}
                </p>
                <div className="detail-price flex gap-3 items-center">
                  <p className="price">Rp {data.price}</p>
                  <p className="realPrice line-through text-gray-400 text-sm animate-pulse">
                    Rp {data.price + 20}
                  </p>
                </div>
                <hr className="my-3" />
                <div className="feature-list">
                  <ul>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">tamplate premium</p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">romantic music</p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">gallery foto</p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">custom durasi</p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">navigasi map </p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">animasi keren</p>{" "}
                    </li>
                    <li className="gap-2 flex items-center mb-3">
                      {" "}
                      <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />{" "}
                      <p className="text-xs capitalize  ">3x revisi</p>{" "}
                    </li>
                  </ul>
                </div>

                <Button>Order Now</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="desc mt-10">
        <h3 className="capitalize font-nunito font-semibold text-center">
          lemme tell you a story about this theme
        </h3>
        <p className="desc text-xs mt-3"> {data.description} </p>
      </div>
      <div className="testimonial mt-10">
        <h3 className="capitalize font-nunito font-semibold text-center">
          what they say
        </h3>
        <ul className="list-testi mt-3 h-52 overflow-y-scroll ">
          <li className="mb-4">
            <p className="text-xs">
              sangat di rekomendasikan, tema di buat berdasarkan kemaun kita dan
              pengerjaan nya juga cepat
            </p>
            <div className="reviewer flex gap-2 mt-3">
              <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
              <span className="text-xs">tomo</span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-xs">
              sangat di rekomendasikan, tema di buat berdasarkan kemaun kita dan
              pengerjaan nya juga cepat
            </p>
            <div className="reviewer flex gap-2 mt-3">
              <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
              <span className="text-xs">tomo</span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-xs">
              sangat di rekomendasikan, tema di buat berdasarkan kemaun kita dan
              pengerjaan nya juga cepat
            </p>
            <div className="reviewer flex gap-2 mt-3">
              <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
              <span className="text-xs">tomo</span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-xs">
              sangat di rekomendasikan, tema di buat berdasarkan kemaun kita dan
              pengerjaan nya juga cepat
            </p>
            <div className="reviewer flex gap-2 mt-3">
              <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
              <span className="text-xs">tomo</span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-xs">
              sangat di rekomendasikan, tema di buat berdasarkan kemaun kita dan
              pengerjaan nya juga cepat
            </p>
            <div className="reviewer flex gap-2 mt-3">
              <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
              <span className="text-xs">tomo</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsProduct;
