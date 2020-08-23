import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderSubmit(value) {
    return value === "English" ? "Name" : "Nombre";
  }

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </label>

        <input type="text" />
      </div>
    );
  }
}

export default Field;
