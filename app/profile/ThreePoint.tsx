import React from "react";

const ThreePoint = () => {
  return (
    <div>
      {" "}
      <h1 className="text-5xl font-bold mb-20 mt-20 text-center mx-auto underline">
        私の三つの強み
      </h1>
      <div className="flex w-3/4 items-center mx-auto gap-8">
        <img
          src="/images/Point1.png"
          alt="Image 1"
          className="w-1/3 h-auto rounded-xl object-cover"
        />
        <img
          src="/images/Point2.png"
          alt="Image 2"
          className="w-1/3 h-auto rounded-xl object-cover"
        />
        <img
          src="/images/Point3.png"
          alt="Image 3"
          className="w-1/3 h-auto rounded-xl object-cover"
        />
      </div>
      <div className="bg-[#000000] rounded-2xl p-8 mx-6 my-12 max-w-3xl mx-auto text-white flex flex-col items-center gap-8 font-serif">
        {/* Box 1 */}
        <div className="bg-[#434242] rounded-2xl p-8 flex-1 w-full text-white">
          <h2 className="text-xl font-bold mb-2">広く学んだ知識</h2>
          <p>
            扱える言語：
            <br /> Python、C、C#、Java、TypeScript など
          </p>
          <br />
          <p>
            保有資格：
            <br /> 基本情報技術者、特許検索インストラクター
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#434242] rounded-2xl p-8 flex-1 w-full text-white">
          <h2 className="text-xl font-bold mb-2">実務経験</h2>
          <p>
            現在まで３年以上大学内のベンチャー企業で働かせていただいており、
            そこで以下のような仕事をさせていただいておりました。 <br />
            ・Pythonを用いたAI製作や解析用csvの処理機能作成
            <br />
            ・TypeScript×React×FirebaseのWEBアプリケーション製作
            <br />
            ・上記アプリケーションの特許出願資料作成
            <br />
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#434242] rounded-2xl p-8 flex-1 w-full text-white">
          <h2 className="text-xl font-bold mb-2">製作へのモチベーション</h2>
          <p>コンテンツ3</p>
        </div>
      </div>
    </div>
  );
};

export default ThreePoint;
