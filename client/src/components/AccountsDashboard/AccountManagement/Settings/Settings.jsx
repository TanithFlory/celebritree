import React from "react";
import faq from "./settingsFaq";
import SettingsForm from "./SettingsForm/SettingsForm";
import SSettings from "./Settings.styles";
import useOnLogged from "../../../../CustomHooks/useOnLogged";

const Settings = () => {
  useOnLogged();

  return (
    <SSettings>
      <SettingsForm />
      <div>
        <h2>Frequently Asked Questions</h2>
        {faq.map((data, index) => {
          return (
            <React.Fragment key={`faq-${index}`}>
              <h4>{data.question}</h4>
              <p>{data.answer}</p>
            </React.Fragment>
          );
        })}
      </div>
    </SSettings>
  );
};

export default Settings;
