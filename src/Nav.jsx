import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={["nav", isVisible ? "visible" : ""].join(" ")}>
      <div
        className="nav-toggle"
        role="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        가는 길 안내 {isVisible ? "접기 🔼" : "보기 🔽"}
      </div>
      {isVisible && (
        <div className="nav-images">
          <figure>
            <img
              src="nav_01.jpg"
              alt="정면에 상상마당이 보이고 우측에 짱오락실이 보이는 사진"
            />
            <figcaption>
              홍대입구역에서 상상마당쪽으로 걸어오다가 정면에 상상마당이 보이면
              우측에 짱오락실을 두고 <strong>맞은편 골목</strong>으로
              들어갑니다.
            </figcaption>
          </figure>
          <figure>
            <img
              src="nav_02.jpg"
              alt="정면에 FLEX707이라 쓰여진 간판이 보이는 사진"
            />
            <figcaption>
              골목에서 조금만 들어가면 우측에 FLEX707이라 쓰여진 건물 입구가
              있습니다. 입구로 들어가서 <strong>5층(꼭대기층)</strong>으로
              올라갑니다.{" "}
              <u>4층엔 다른 파티룸이 있으니 헷갈리지 않도록 유의하세요!</u>
            </figcaption>
          </figure>
          <div className="nav-close" onClick={() => setIsVisible(!isVisible)}>
            닫기
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
