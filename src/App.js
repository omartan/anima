import React from "react";
import "./App.css";

function App() {
  return <X1440 {...X1440Data} />;
}

export default App;


function X1440(props) {
  const {
    brand,
    ellipse13,
    overlapGroup,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    spanText,
    spanText2,
    spanText3,
    wasSuchenSie,
    buttonI339149256,
    buttonI339150256,
    buttonI339151256,
    text10,
    inputName,
    inputType,
    inputPlaceholder,
    inputRequired,
    inputName2,
    inputType2,
    inputPlaceholder2,
    inputRequired2,
    losGehts,
    profileButtonProps,
    loginButtonProps,
  } = props;

  return (
    <div className="x1440">
      <div className="navbar">
        <img className="brand" src={brand} />
        <div className="navs-base"></div>
        <div className="right">
          <ProfileButton textI33913114085={profileButtonProps.textI33913114085} />
          <LoginButton textI33913214010={loginButtonProps.textI33913214010} />
          <img className="ellipse-13" src={ellipse13} />
        </div>
      </div>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="filter-container">
          <div className="heading-section">
            <h1 className="text-3 valign-text-middle poppins-bold-mine-shaft-40px">{text3}</h1>
            <div className="rating-section">
              <div className="star-ratings">
                <div className="text-4 valign-text-middle fontawesome5free-solid-normal-ronchi-18px">{text4}</div>
                <div className="text- valign-text-middle fontawesome5free-solid-normal-ronchi-18px">{text5}</div>
                <div className="text- valign-text-middle fontawesome5free-solid-normal-ronchi-18px">{text6}</div>
                <div className="text-7 valign-text-middle fontawesome5free-solid-normal-ronchi-18px">{text7}</div>
                <div className="text- valign-text-middle fontawesome5free-regular-normal-ronchi-18px">{text8}</div>
              </div>
              <div className="text-9 poppins-bold-white-18px">
                <span className="span0">{spanText}</span>
                <span className="span1">{spanText2}</span>
                <span className="span2">{spanText3}</span>
              </div>
            </div>
          </div>
          <div className="heading-content-section">
            <div className="filter-section">
              <div className="was-suchen-sie valign-text-middle poppins-medium-mine-shaft-24px">{wasSuchenSie}</div>
              <div className="filter-buttons">
                <div className="frame-19 border-1px-azure-radiance smart-layers-pointers ">
                  <div className="button-i339149256 poppins-medium-azure-radiance-18px">{buttonI339149256}</div>
                </div>
                <div className="frame-19-1 border-1px-azure-radiance">
                  <div className="button-i339150256 poppins-medium-azure-radiance-18px">{buttonI339150256}</div>
                </div>
                <div className="frame-19-2 border-1px-azure-radiance">
                  <div className="button-i339151256 poppins-medium-azure-radiance-18px">{buttonI339151256}</div>
                </div>
              </div>
            </div>
            <div className="search-section">
              <div className="text-10 valign-text-middle poppins-medium-mine-shaft-24px">{text10}</div>
              <div className="search-container">
                <input
                  className="search-form border-1px-mischka"
                  name={inputName}
                  placeholder={inputPlaceholder}
                  type={inputType}
                  required={inputRequired}
                />
                <div className="search-button">
                  <div className="los-gehts valign-text-middle poppins-medium-white-18px">{losGehts}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProfileButton(props) {
  const { textI33913114085 } = props;

  return (
    <div className="profile-button smart-layers-pointers ">
      <div className="text-i33913114085 valign-text-middle poppins-medium-sonic-silver-15px">{textI33913114085}</div>
    </div>
  );
}


function LoginButton(props) {
  const { textI33913214010 } = props;

  return (
    <div className="login-button">
      <div className="text-i33913214010 valign-text-middle poppins-normal-white-15px">{textI33913214010}</div>
    </div>
  );
}
const profileButtonData = {
    textI33913114085: "Profile",
};

const loginButtonData = {
    textI33913214010: "Login",
};

const X1440Data = {
    brand: "./Brand.png",
    ellipse13: "",
    overlapGroup: "./hero.png",
    text3: "Finden Sie Ihre Unterstützung Mit Wenigen Klicks",
    text4: "",
    text5: "",
    text6: "",
    text7: "",
    text8: "",
    spanText: "4.6",
    spanText2: " ",
    spanText3: "(182k Bewertungen)",
    wasSuchenSie: "Was suchen Sie?",
    buttonI339149256: "Betreuung/Haushalt",
    buttonI339150256: "Pflege",
    buttonI339151256: "24h-Betreuung",
    text10: "Wo ist der Einsatzort?",
    inputName: "339155",
    inputType: "text",
    inputPlaceholder: "",
    inputRequired: true,
    inputName2: "339156",
    inputType2: "text",
    inputPlaceholder2: "",
    inputRequired2: true,
    losGehts: "Los geht’s",
    profileButtonProps: profileButtonData,
    loginButtonProps: loginButtonData,
};

