import React from "react";

const Practice2 = () => {
  const isLogin = true;
  const name = "Ali";
  const surname = "Can;";

  return (
    <div>
      {isLogin ? (
        <>
          <div>
            Hosgeldiniz {name} {surname}
          </div>

          <ul>
            <li>Profil</li>
            <li>Rezervasyonlar</li>
            <li>Cikis</li>
          </ul>
        </>
      ) : (
        <div>Lutfen giris yapiniz</div>
      )}
    </div>
  );
};

export default Practice2;
