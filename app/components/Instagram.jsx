"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import {motion} from "framer-motion"
const instagramPosts = [
  {
    id: 1,
    image: "/images/1.jpg",
    link: "https://www.instagram.com/reel/DaOS2FByPI2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    image: "/images/2.jpg",
    link: "https://www.instagram.com/reel/DW6jytckk9u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    image: "/images/3.jpg",
    link: "https://www.instagram.com/reel/DW4pvtYkmsN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    image: "/images/4.jpg",
    link: "https://www.instagram.com/reel/DXcld5mElia/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    image: "/images/5.jpg",
    link: "https://www.instagram.com/reel/DXu2YE4EkkY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    image: "/images/6.jpg",
    link: "https://www.instagram.com/p/DYbOyTmSdyy/?utm_source=ig_web_copy_link",
  },
  {
    id: 7,
    image: "/images/7.jpg",
    link: "https://www.instagram.com/reel/DZf2l9Ey60A/?utm_source=ig_web_copy_link",
  },
  {
    id: 8,
    image: "/images/8.jpg",
    link: "https://www.instagram.com/p/DYKxlesmdTa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
export default function InstagramGallery() {
  return (
    <section className="py-12 bg-[#fff]">
      <div className="max-w-[1450px] mx-auto px-5">

        <motion.div
        variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
     className="text-center mb-12">
          

          <h2 className="text-3xl md:text-5xl mt-3 font-light">
            Follow Our Smile Journey <span className="text-[#133A34]  text-3xl md:text-5xl font-normal">
           On Instagram
          </span>
          </h2>

          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-md">
            Discover our latest smile transformations, patient stories,
            and behind-the-scenes moments from our dental clinic.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">

          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/5]">

                <Image
                  src={post.image}
                  alt={`Instagram ${post.id}`}
                  fill
                  className="object-cover transition duration-500 scale-110 group-hover:scale-115"
                />


                <div className="absolute inset-0 flex items-center justify-center">

                  <div className=" flex items-center justify-center  ">

                    <Play
                      className="fill-white ml-1"
                      size={62}
                    />

                  </div>

                </div>

              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}