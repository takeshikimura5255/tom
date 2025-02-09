import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "女性らしいデザイン",
          path: "/1.jpg",
          link: "https://www.ficjp.com/", //1
        },
        {
          title: "大手らしい新しいデザイン",
          path: "/3.jpg",
          link: "https://misshelly.com/", //3
        },
        {
          title: "力強く男らしいイメージ",
          path: "/2.jpg",
          link: "https://www.mitsubishi-fuso.com/ja/", //2
        },
        {
          title: "イラスト多様しグラフィカルなイメージ",
          path: "/4.jpg",
          link: "https://pro.pickyou.jp/", //4
        },
      ],
    },
    {
      images: [
        {
          title: "躍動感あるイメージ",
          path: "/5.jpg",
          link: "https://www.ohtake.ac.jp", //5
        },
        {
          title: "ポップな地域カフェのイメージ",
          path: "/6.jpg",
          link: "https://www.kao.co.jp/essential", //6
        },
        // {
        //   title: "信頼感のある地域感",
        //   path: "/thumb7.jpg",
        //   link: "https://www.takedc.com/",
        // },
        // {
        //   title: "堅さ、信頼さ",
        //   path: "/thumb8.jpg",
        //   link: "https://www.marutoku-tk.co.jp/",
        // },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <div className="w-[400px] h-[200px]">
                    <Image
                      src={image.path}
                      alt={image.title}
                      fill
                    />
                  </div>

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">訪問する</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">

                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
