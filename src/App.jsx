import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import InvitationForm from "./InvitationForm";

function App() {
  return (
    <div className="App container">
      <header>
        <img className="visual-01" src="/visual_01.png" alt="visual" />
        <h1>
          예찬쓰 🎉
          <br />
          생일파티
        </h1>
        <img className="visual-02" src="/visual_02.png" alt="visual" />
      </header>
      <p className="precautions">
        ⚠️ 아래 <strong>참석자 전원</strong>이 꼭 작성해야 할 양식이 있습니다.
        <br />
        끝까지 읽고 반드시 <strong>5월 25일까지 양식을 작성</strong>해주세요!
      </p>
      <h2>초대합니다</h2>
      <p className="date-time">2022년 6월 4일 (토) 오후 7시 정각</p>
      <p className="location">서울특별시 마포구 서교동 363-20 5층</p>
      <div className="map-services">
        <a href="http://naver.me/GUQJXICc" target="_blank" rel="noreferrer">
          🟢 네이버 지도 ↗️
        </a>
        <a href="http://kko.to/dnRiNQgPL" target="_blank" rel="noreferrer">
          🟡 카카오 지도 ↗️
        </a>
      </div>
      <Nav />
      <hr />
      <h2>행사 순서</h2>
      <ul className="notices">
        <li>
          <code>18:45</code> - ✍️ 행사 참가자 등록 시작
        </li>
        <li>
          <code>19:00</code> - 🍽 오프닝 & 식사 시작
        </li>
        <li>
          <code>20:30</code> - 🎉 생일 축하 행사 시작
        </li>
        <li>
          <code>20:45</code> - 🎁 이벤트!
        </li>
        <li>
          <code>22:00</code> - 🍻 자유시간
        </li>
      </ul>
      <hr />
      <h2>안내 사항</h2>
      <ul className="notices">
        <li>
          오후 7시 정각에 오프닝과 함께 식사를 시작하며, 식사 시간에 2시간
          제한이 있으니 시간에 유의해주세요!
        </li>
        <li>
          행사 장소에 샤워 시설이 있지만 별도의 세면도구는 없습니다. 필요하신
          경우 개인 세면도구(칫솔, 치약, 수건 등)을 챙겨 와 주세요
        </li>
        <li>
          행사 진행 도중 겪은 불편 사항이나 문의 사항은 주최자인 이예찬에게 연락
          주세요. 메일:{" "}
          <a href="mailto:me@yechanny.com" target="_blank" rel="noreferrer">
            me@yechanny.com
          </a>
          , 전화번호:{" "}
          <a href="sms:010-2923-5278" target="_blank" rel="noreferrer">
            010-2923-5278
          </a>
        </li>
      </ul>
      <hr />
      <h2>참석자 작성 양식</h2>
      <p className="precautions warning">
        ⚠️ 참석자 기념품 및 현수막 제작에 필요한 양식입니다.
        <br />
        기념품을 드리기 위해 꼭 작성해주세요 🙏
      </p>
      <img
        src="/sample.jpg"
        alt="명찰 샘플 이미지"
        className="sample_nametag"
      />
      <p className="nametag-notice">
        기념품은 명찰을 준비하려고 합니다 😆 서로 친해졌으면 하는 마음과 기념할
        수 있는 무언가를 드리기 위해 고민해보았어요! 명찰 제작을 위해 필요한
        정보를 <strong>꼭</strong> 작성해주세요!
      </p>
      <InvitationForm></InvitationForm>
    </div>
  );
}

export default App;
