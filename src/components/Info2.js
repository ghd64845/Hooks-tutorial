import React, { useState, useEffect } from "react";

const Info2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log({
      name,
      nickname
    });
  });
  // 마운트 될 때문 사용하고 싶을때
  // useEffect(() => {
  //   console.log("마운트 될 때만 실행");
  // }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeName} />
        <input name="nickname" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name :</b> {name}
        </div>
        <div>
          <b>nickname :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
