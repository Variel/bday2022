import { useState, useCallback } from "react";
import Swal from "sweetalert2";

import "./InvitationForm.css";

function InvitationForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    introduce: "",
    describeYechan: "",
    agreePhoto: "0",
  });

  const handleInput = useCallback((key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      introduce: "",
      describeYechan: "",
      agreePhoto: "0",
    });
    setFormSubmitted(false);
  }, []);

  const submitForm = useCallback(
    async (e) => {
      e.preventDefault();

      if (formData.agreePhoto !== "1") {
        const result = await Swal.fire({
          title: "추억 남기기에 동참해주세요!",
          html: "행사 시에 촬영 된 사진은 선별을 거쳐 참석한 분들께 선물해드릴 예정이에요.<br>촬영에 동의 해주시면 더 좋은 사진을 추억으로 남길 수 있어요.",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "그냥 제출하기",
          showConfirmButton: true,
          confirmButtonText: "사진 촬영 동의하기",
          reverseButtons: true,
          allowOutsideClick: false,
        });

        if (result.isConfirmed) {
          handleInput("agreePhoto", "1");
          return;
        }
      }

      const data = new FormData();
      for (var key in formData) {
        data.append(key, formData[key]);
      }

      fetch(
        "https://webhooks.integrately.com/a/webhooks/b7aea00e09cc4f00864eff03009e9c43",
        {
          method: "POST",
          body: data,
        }
      );

      setFormSubmitted(true);

      Swal.fire({
        title: "성공적으로 작성되었어요!",
        text: "작성해주신 정보가 성공적으로 전달되었어요. 감사합니다!",
        timer: 5000,
        icon: "success",
      });
    },
    [formData, handleInput]
  );

  return formSubmitted ? (
    <div className="form-submitted">
      <h3>양식 작성이 끝났어요!</h3>
      <p>
        양식을 다 작성해주셔서 감사합니다!
        <br />
        재밌는 행사가 될 수 있도록 준비할테니
        <br />
        건강한 모습으로 6월 4일에 만나요!
      </p>
      <button className="btn-rewrite" onClick={() => resetForm()}>
        다시 작성하기
      </button>
    </div>
  ) : (
    <form className="invitation-form" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="input-name">실명</label>
        <input
          type="text"
          id="input-name"
          maxLength="10"
          placeholder="예) 홍길동"
          onInput={(e) => handleInput("name", e.target.value)}
          required
        />
        <p className="text-help">
          행사에서 사용하실 이름을 적어주세요. 되도록 실명이면 좋을 것 같지만
          본인이 불리고 싶은 예명이 있다면 사용해도 좋아요. 그럴 경우, 불리는
          이름인 만큼 부르기 편한 이름으로 해주세요
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="input-introduce">한 줄 설명</label>
        <input
          type="text"
          id="input-introduce"
          maxLength="25"
          placeholder="예) 성수동 풀악셀"
          onInput={(e) => handleInput("introduce", e.target.value)}
          required
        />
        <p className="text-help">
          명찰에 일반적으로 직함 부분에 들어갈 문구를 작성해주세요. 트위터
          닉네임이나, 간단한 소개('잡스택 개발자' 등)를 너무 길지 않게
          작성해주세요
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="input-describe">예찬을 한마디로?</label>
        <input
          type="text"
          id="input-describe"
          placeholder="예) 그저 빛⭐️빛 개발자"
          onInput={(e) => handleInput("describeYechan", e.target.value)}
          required
        />
        <p className="text-help">
          행사 현수막에 들어갈 문구를 모집합니다! 이예찬을 한마디로
          표현해주세요! 아이디어 넘치는 주접 멘트 환영합니다 &gt;_&lt;
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="input-agree">
          <input
            type="checkbox"
            id="input-agree"
            checked={formData.agreePhoto === "1"}
            onChange={(e) =>
              handleInput("agreePhoto", e.target.checked ? "1" : "0")
            }
          />
          <span className="custom-checkbox">🟩</span>
          <span className="custom-checkbox-checked">✅</span>
          사진 및 영상 촬영에 동의합니다
        </label>
        <p className="text-help">
          우리 모두의 추억을 남기기 위해 행사에서 사진과 영상을 촬영할
          예정이에요. 사전 협의 된 사진(단체사진 등) 이외에는 외부에 공개되지
          않고 참석한 사람들 끼리 나눌 예정입니다.
        </p>
      </div>
      <div className="form-group text-center">
        <button type="submit">작성 완료</button>
      </div>
    </form>
  );
}

export default InvitationForm;
