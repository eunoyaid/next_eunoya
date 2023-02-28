import ModalOrder from "@/pages/components/modalOrder";
import BtnCart from "@/pages/components/utils/btnCart";
import CustomButton from "@/pages/components/utils/customButton";
import axios from "axios";
import { Eye } from "iconsax-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import useSWR from "swr";

const DetailsProduct = () => {
  const [modal, setModal] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const address = `${process.env.NEXT_PUBLIC_API_URL}/products/?filters[slug][$eq]=${slug}&populate=*`;
  const auth = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
  async function fetcher(url) {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return response.data.data;
  }
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;
  console.log(data);

  // open modal order
  const openModal = () => {
    // setModal((modal = true));
    console.log("test");
  };

  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className="mx-auto  max-w-2xl pt-24 pb-4 px-4 sm:py-14 sm:px-6 lg:max-w-3xl lg:pt-36 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="left mb-5  relative overflow-hidden h-80 rounded-xl">
              <Eye className="absolute h-10 w-10 animate-pulse bg-secondary rounded-full p-2 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
              <img
                className="absolute object-cover w-full h-full "
                src={
                  process.env.NEXT_PUBLIC_UPLOAD_URL +
                  item?.attributes?.thumbnail?.data?.attributes?.url
                }
                alt=""
              />
            </div>

            <div className="right">
              <div className=" rounded-xl border border-border-card smooth-shadow p-4  ">
                <div className="card-wrapper">
                  <div className="flex justify-between ">
                    <div className="product-detail">
                      <p className="title capitalize text-2xl font-semibold">
                        {item.attributes.title}
                      </p>
                    </div>
                    {item.attributes.discount ? (
                      <span className=" flex items-center text-[10px] text-red-500 py-0.5 px-2  bg-red-200 rounded-lg lowercase">
                        -{item.attributes.discount}%
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-xs  text-primary my-2  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
                    {item.attributes.category.data.attributes.title}
                  </p>
                  <div className="detail-price flex gap-3 items-center">
                    <p className="price">
                      Rp{" "}
                      {item.attributes.price -
                        (item.attributes.price * item.attributes.discount) /
                          100}
                    </p>

                    {item.attributes.discount ? (
                      <span className="realPrice line-through text-gray-400 text-sm animate-pulse">
                        Rp {item.attributes.price}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <hr className="my-3" />
                  <div className="feature-list">
                    <ul>
                      {item.attributes.features?.data.map((value, index) => (
                        <li
                          key={value.id}
                          className="gap-2 flex items-center mb-3"
                        >
                          <BiCheck className="text-primary  items-center bg-secondary rounded-full border border-primary h-4 w-4 flex" />
                          <p className="text-sm capitalize  ">
                            {" "}
                            {value.attributes?.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="add-shop flex  gap-3">
                    <CustomButton onClick={openModal}>Order Now</CustomButton>
                    <BtnCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalOrder />
          <div className="desc mt-10">
            <h3 className="capitalize font-nunito font-semibold text-center">
              lemme tell you a story about this theme
            </h3>
            <p className="desc text-sm mt-3"> {item.attributes.description} </p>
          </div>

          <div className="testimonial mt-10">
            <h3 className="capitalize font-nunito font-semibold text-center">
              what they say
            </h3>
            <ul className="list-testi mt-3 h-52 overflow-y-scroll ">
              <li className="mb-4">
                <p className="text-xs">
                  sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                  dan pengerjaan nya juga cepat
                </p>
                <div className="reviewer flex gap-2 mt-3">
                  <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
                  <span className="text-xs">tomo</span>
                </div>
              </li>
              <li className="mb-4">
                <p className="text-xs">
                  sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                  dan pengerjaan nya juga cepat
                </p>
                <div className="reviewer flex gap-2 mt-3">
                  <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
                  <span className="text-xs">tomo</span>
                </div>
              </li>
              <li className="mb-4">
                <p className="text-xs">
                  sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                  dan pengerjaan nya juga cepat
                </p>
                <div className="reviewer flex gap-2 mt-3">
                  <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
                  <span className="text-xs">tomo</span>
                </div>
              </li>
              <li className="mb-4">
                <p className="text-xs">
                  sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                  dan pengerjaan nya juga cepat
                </p>
                <div className="reviewer flex gap-2 mt-3">
                  <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
                  <span className="text-xs">tomo</span>
                </div>
              </li>
              <li className="mb-4">
                <p className="text-xs">
                  sangat di rekomendasikan, tema di buat berdasarkan kemaun kita
                  dan pengerjaan nya juga cepat
                </p>
                <div className="reviewer flex gap-2 mt-3">
                  <div className="avatar bg-gray-400 h-4 w-4 rounded"></div>
                  <span className="text-xs">tomo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsProduct;
