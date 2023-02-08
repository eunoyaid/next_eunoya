import React from "react";
import axios from "axios";
import useSWR from "swr";
import moment from "moment";
import { motion } from "framer-motion";

const ListDoa = () => {
  const address = `http://localhost:1337/api/doas`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;

  return (
    <motion.div
      initial={{ y: 100, x: 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
      id="listDoa"
      className="bg-white rounded-xl border mb-10 border-gray-200 shadow  overflow-y-scroll p-5 w-full"
    >
      <p className="text-center  text-xl font-semibold mb-4 capitalize">
        doa terbaik mereka untuk pasangan
      </p>

      <ul className="overflow-y-scroll h-56">
        {error && error.message}
        {loading && "loading"}
        {data?.map((item) => (
          <li key={item.id}>
            <article className="p-3 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    {item.attributes.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      {moment(item.attributes.createdAt).fromNow()}
                    </time>
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {item.attributes.doa}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ListDoa;
