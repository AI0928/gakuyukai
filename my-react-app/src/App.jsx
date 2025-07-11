import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Title from './components/title/Title.jsx'
import ProjectCard from './components/project-card/ProjectCard.jsx'
import ImageCarousel from './components/image-carousel/ImageCarousel.jsx'
// import img1 from './assets/kackar-mountains-9655201_1280.jpg';
import DescriptionBox from './components/description-box/DescriptionBox.jsx'
import DetailTable from './components/detail-table/DetailTable.jsx'


function App() {
  const myTitle = "企画紹介";
  const projects = [
    "スタンプラリー", "工科展", "クラブ展", "WAKUWAKU LAND",
    "MAKE", "脱出ゲーム", "献血", "楽市楽座", "トレゾール",
    "condort","Laugh & Music", "狂夜祭", "後夜祭"
  ];

  // const descriptionText = "ここに企画の説明が入ります。企画の内容や目的、参加方法などを詳しく説明します。例えば、スタンプラリーでは、参加者が指定された場所を訪れてスタンプを集めることで、特典を得ることができます。また、工科展では、学生たちの研究やプロジェクトを展示し、来場者に技術やアイデアを紹介します。各企画の詳細は、公式ウェブサイトやSNSで随時更新されますので、ぜひチェックしてください！";
  // const details = [
  //   { label: "場所", value: "〇〇教室" },
  //   { label: "時間", value: "10:00～16:00" },
  //   { label: "注意事項", value: "特になし" }
  // ];

  
  return (
    <div className="app-root">
      <Header />
      <Title text={myTitle}/>
      {/* <Title text="スタンプラリー"/> */}
      <div className="scroll-area">
        <div className="project-list">
          {projects.map((title, idx) => (
            <ProjectCard key={idx} title={title} />
          ))}
        </div>
        
        {/* <ImageCarousel images={[
          img1,
          img1,
          img1
        ]} />
        <DescriptionBox text={descriptionText} />
        <DetailTable details={details} /> */}

        <Footer />

      </div>

      
    </div>
  )
}

export default App
