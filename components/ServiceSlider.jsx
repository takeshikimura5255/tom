import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxPencil2,
    title: "ウェブデザイン",
    description: "ユーザビリティやアクセシビリティに配慮しながら、使いやすく魅力的なデザインを実現するために、ユーザーのニーズやビジネスの要件を分析し、ワイヤフレームやプロトタイプを作成します。",
  },
  {
    Icon: RxDesktop,
    title: "ウェブサイト制作",
    description: "Web開発の分野において、私は幅広い技術スタックとフレームワークに精通しています。常に最新の技術動向に関心を持ち、自己啓発を重視しており、Web開発の分野での専門知識を継続的に深めています。",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description: "検索エンジンアルゴリズムの変化に常に注意を払いながら、キーワード研究、オンページ最適化、メタデータ最適化、コンテンツ戦略開発、リンクビルディングなど様々なSEO技術をよく知っています。",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
