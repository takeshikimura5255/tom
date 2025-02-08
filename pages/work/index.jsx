import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-[-25%] xl:w-[400px]"
            >
              製作事例 <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[300px] mx-auto text-[12px] lg:mx-0"
            >
              私はウェブデザインとウェブサイト制作において確実な実績と専門知識を誇っています。<br />
              美しさと機能性を融合させたWebデザインを提供することに自信を持っています。<br />
              私の利点は、顧客のニーズに合わせてカスタマイズされたデザインを提供することです。<br />
              お客様のニーズとビジョンを丁寧に聴き、それを実装するための最適なデザインアプローチを提案します。<br />
              ウェブサイト制作においては、使いやすさと快適性を重視しています。<br />
              ユーザーエクスペリエンスを最適化するために、直感的なナビゲーション、スムーズなページ切り替え、高速読み込み速度など、訪問者がストレスなくサイトを閲覧できる環境を提供します。<br />
              また、ウェブサイトの性能とセキュリティにも徹底的に取り組んでいます。<br />
              最新の技術とベストプラクティスを活用して、高速ページのロードとデータの安全性を確保します。<br />
              お客様の信頼を守るために、SSL暗号化とセキュリティ対策を徹底的に念頭に置いています。<br />
              お客様とのコミュニケーションを円滑に行い、クライアントの要望を正確に理解し、それを具現化するための最高品質のウェブサイトを提供します。
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
