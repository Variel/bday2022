import "./App.css";
import Nav from "./Nav";
import InvitationForm from "./InvitationForm";

function App() {
  return (
    <div className="App container">
      <header>
        <img className="visual-01" src="/visual_01.png" alt="visual" />
        <h1>
          μμ°¬μ° π
          <br />
          μμΌνν°
        </h1>
        <img className="visual-02" src="/visual_02.png" alt="visual" />
      </header>
      <p className="precautions">
        β οΈ μλ <strong>μ°Έμμ μ μ</strong>μ΄ κΌ­ μμ±ν΄μΌ ν  μμμ΄ μμ΅λλ€.
        <br />
        λκΉμ§ μ½κ³  λ°λμ <strong>5μ 25μΌκΉμ§ μμμ μμ±</strong>ν΄μ£ΌμΈμ!
      </p>
      <h2>μ΄λν©λλ€</h2>
      <p className="date-time">2022λ 6μ 4μΌ (ν ) μ€ν 7μ μ κ°</p>
      <p className="location">μμΈνΉλ³μ λ§ν¬κ΅¬ μκ΅λ 363-20 5μΈ΅</p>
      <div className="map-services">
        <a href="http://naver.me/GUQJXICc" target="_blank" rel="noreferrer">
          π’ λ€μ΄λ² μ§λ βοΈ
        </a>
        <a href="http://kko.to/dnRiNQgPL" target="_blank" rel="noreferrer">
          π‘ μΉ΄μΉ΄μ€ μ§λ βοΈ
        </a>
      </div>
      <Nav />
      <hr />
      <h2>νμ¬ μμ</h2>
      <ul className="notices">
        <li>
          <code>18:45</code> - βοΈ νμ¬ μ°Έκ°μ λ±λ‘ μμ
        </li>
        <li>
          <code>19:00</code> - π½ μ€νλ & μμ¬ μμ
        </li>
        <li>
          <code>20:30</code> - π μμΌ μΆν νμ¬ μμ
        </li>
        <li>
          <code>20:45</code> - π μ΄λ²€νΈ!
        </li>
        <li>
          <code>22:00</code> - π» μμ μκ°
        </li>
      </ul>
      <hr />
      <h2>μλ΄ μ¬ν­</h2>
      <ul className="notices">
        <li>
          μ€ν 7μ μ κ°μ μ€νλκ³Ό ν¨κ» μμ¬λ₯Ό μμνλ©°, μμ¬ μκ°μ 2μκ°
          μ νμ΄ μμΌλ μκ°μ μ μν΄μ£ΌμΈμ!
        </li>
        <li>
          νμ¬ μ₯μμ μ€μ μμ€μ΄ μμ§λ§ λ³λμ μΈλ©΄λκ΅¬λ μμ΅λλ€. νμνμ 
          κ²½μ° κ°μΈ μΈλ©΄λκ΅¬(μΉ«μ, μΉμ½, μκ±΄ λ±)μ μ±κ²¨ μ μ£ΌμΈμ
        </li>
        <li>
          νμ¬ μ§ν λμ€ κ²ͺμ λΆνΈ μ¬ν­μ΄λ λ¬Έμ μ¬ν­μ μ£Όμ΅μμΈ μ΄μμ°¬μκ² μ°λ½
          μ£ΌμΈμ. λ©μΌ:{" "}
          <a href="mailto:me@yechanny.com" target="_blank" rel="noreferrer">
            me@yechanny.com
          </a>
          , μ νλ²νΈ:{" "}
          <a href="sms:010-2923-5278" target="_blank" rel="noreferrer">
            010-2923-5278
          </a>
        </li>
        <li>
          κΈ°ν νμ¬μ λν λ¬Έμ μ¬ν­μ μ°μΈ‘ νλ¨μ <button className="btn-link" onClick={() => window.ChannelIO('showMessenger')}>μ±λν‘</button>μ μ΄μ©ν΄μ£ΌμΈμ
        </li>
      </ul>
      <hr />
      <h2>μ°Έμμ μμ± μμ</h2>
      <p className="precautions warning">
        β οΈ μ°Έμμ κΈ°λν λ° νμλ§ μ μμ νμν μμμλλ€.
        <br />
        κΈ°λνμ λλ¦¬κΈ° μν΄ κΌ­ μμ±ν΄μ£ΌμΈμ π
      </p>
      <img
        src="/sample.jpg"
        alt="λͺμ°° μν μ΄λ―Έμ§"
        className="sample_nametag"
      />
      <p className="nametag-notice">
        κΈ°λνμ λͺμ°°μ μ€λΉνλ €κ³  ν©λλ€ π μλ‘ μΉν΄μ‘μΌλ©΄ νλ λ§μκ³Ό κΈ°λν 
        μ μλ λ¬΄μΈκ°λ₯Ό λλ¦¬κΈ° μν΄ κ³ λ―Όν΄λ³΄μμ΄μ! λͺμ°° μ μμ μν΄ νμν
        μ λ³΄λ₯Ό <strong>κΌ­</strong> μμ±ν΄μ£ΌμΈμ!
      </p>
      <InvitationForm></InvitationForm>
      <p className="precautions unattend">
        β οΈ νΉμ μ°Έμνμ§ λͺ»νκ² λμκ±°λ λ§μμ΄ λ°λμ¨λμ? π­<br />
        μ°μΈ‘ νλ¨μ μ±λν‘μ ν΅ν΄ μ°Έκ° μ·¨μ λ¬Έμλ₯Ό λ¨κ²¨μ£ΌμΈμ.
      </p>
    </div>
  );
}

export default App;
