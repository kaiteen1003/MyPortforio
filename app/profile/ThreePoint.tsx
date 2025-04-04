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
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-black text-center mb-4">
            ADVANTAGE
            <span className="text-blue-600  text-3xl"> 1</span>
          </h3>

          {/* タイトル */}
          <h2 className="text-4xl font-bold">
            大学で学んだ情報工学にかかわる全般の知識
          </h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full mt-3" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 左側：画像 */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/SkillIcon1.png"
              alt="Skill Visual"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* 右側：テキスト */}
          <div className="w-full md:w-1/2 text-base md:text-lg leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">扱える言語：</h3>
              <p>Python、C、C#、Java、TypeScript など</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">保有資格：</h3>
              <p>基本情報技術者、特許検索インストラクター</p>
            </div>
            <p>
              <strong>
                大学では、情報工学に関する幅広い知識と技術の習得に努めてきました。
                環境構築からデザイン、フロントエンド・バックエンドの開発、アプリ制作に至るまで、一連の開発プロセスを体系的に学びました。さらに、特許取得のプロセスなど、技術を形にする上流工程についても理解を深め、企画から実装・運用までの全体像を把握しています。
                このように、情報工学全般に対する総合的な知識と実践経験は、私の大きな強みです。
              </strong>
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-black text-center mb-4">
              ADVANTAGE
              <span className="text-blue-600  text-3xl"> 2</span>
            </h3>
            {/* タイトル */}
            <h2 className="text-4xl font-bold">
              チーム開発・実践力を養ったプロジェクト経験
            </h2>
            <div className="w-32 h-1 bg-black mx-auto rounded-full mt-3" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* 左側：テキスト */}
            <div className="w-full md:w-1/2 text-base md:text-lg leading-relaxed space-y-6 order-2 md:order-1">
              <div>
                <h3 className="text-xl font-semibold mb-2">担当経験：</h3>
                <p>
                  フロントエンド/バックエンド設計、UI/UXデザイン、ドキュメント管理
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">使用ツール：</h3>
                <p>GitHub、Figma、Firebase、React など</p>
              </div>

              <p>
                <strong>
                  複数人によるチーム開発プロジェクトを通じて、実践的な開発スキルとコミュニケーション力を磨いてきました。
                  要件定義から設計、実装、テスト、ドキュメント整備まで一貫して経験し、技術だけでなくプロジェクト推進力も身につけています。
                </strong>
              </p>
            </div>

            {/* 右側：画像 */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="/images/SkillIcon2.png"
                alt="Project Skill Visual"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePoint;
