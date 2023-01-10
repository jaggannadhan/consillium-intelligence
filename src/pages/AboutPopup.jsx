import React from "react";

export default class AboutPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      content: "",
      who: "",
      designation: ""
    };

    this.props.aboutPopupEvent
      .eventsObservable()
      .subscribe(this.setShow.bind(this));
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    if (event.target.className === "modal fade in") {
      this.setState({ show: false });
    }
  };

  setShow(params) {
    console.log(params.show);
    this.setState({
      show: params.show,
      content: params.content,
      who: params.who,
      designation: params.designation
    });
  }
  render() {
    return (
      <div
        className={this.state.show ? "modal fade in" : "modal fade"}
        style={{ display: this.state.show ? "block" : "none" }}
        id="MarkModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h3>
                {this.state.who}
                <br />
                <small>{this.state.designation}</small>
              </h3>
              <p>{this.state.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
