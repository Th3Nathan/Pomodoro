"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      time_minutes: 20,
      time_seconds: 0,
      ticking: 0,
      work_time: 20,
      break_time: 5,
      workOrBreak: "Work",
      color: "darkred"
    };
    return _this;
  }

  Clock.prototype.takeSecond = function takeSecond() {
    var _state = this.state;
    var time_minutes = _state.time_minutes;
    var time_seconds = _state.time_seconds;
    var ticking = _state.ticking;

    if (ticking) {
      if (time_seconds > 0) {
        this.setState({
          time_seconds: time_seconds - 1
        });
      } else if (time_seconds == 0 && time_minutes > 0) {
        this.setState({
          time_minutes: time_minutes - 1,
          time_seconds: 59
        });
      } else this.switchTimer();
    } else clearInterval(name);
  };

  Clock.prototype.switchTimer = function switchTimer() {
    var _state2 = this.state;
    var break_time = _state2.break_time;
    var work_time = _state2.work_time;
    var workOrBreak = _state2.workOrBreak;

    if (workOrBreak == "Work") {
      this.setState({
        workOrBreak: "Break",
        time_minutes: break_time,
        color: "darkgreen"
      });
      var snd = new Audio("http://soundbible.com/grab.php?id=1218&type=mp3");
      snd.play();
    } else this.setState({
      workOrBreak: "Work",
      time_minutes: work_time,
      color: "darkred"
    });
    var snd = new Audio("http://soundbible.com/grab.php?id=1218&type=mp3");
    snd.play();
  };

  Clock.prototype.toggleCountdown = function toggleCountdown() {
    var _state3 = this.state;
    var time_minutes = _state3.time_minutes;
    var time_seconds = _state3.time_seconds;
    var ticking = _state3.ticking;

    if (!ticking) {
      this.setState({ ticking: 1 });
      name = setInterval(this.takeSecond.bind(this), 1000);
    } else {
      clearInterval(name);
      this.setState({ ticking: 0 });
    }
  };

  //The following four functions might be better off as one. It's easy to understand as is, but a lot of code, would be annoying to make changes to each one. Will consider implementing something like handleTime(breakOrWork, increaseOrDecrease)

  Clock.prototype.addWorkMinute = function addWorkMinute() {
    var _state4 = this.state;
    var work_time = _state4.work_time;
    var time_seconds = _state4.time_seconds;
    var time_minutes = _state4.time_minutes;
    var ticking = _state4.ticking;
    var workOrBreak = _state4.workOrBreak;

    if (workOrBreak == "Work") this.setState({ work_time: work_time + 1,
      time_seconds: 0,
      time_minutes: work_time + 1,
      ticking: false
    });
  };

  Clock.prototype.takeWorkMinute = function takeWorkMinute() {
    var _state5 = this.state;
    var work_time = _state5.work_time;
    var time_seconds = _state5.time_seconds;
    var time_minutes = _state5.time_minutes;
    var ticking = _state5.ticking;
    var workOrBreak = _state5.workOrBreak;

    if (work_time > 1) {
      if (workOrBreak == "Work") this.setState({ work_time: work_time - 1,
        time_seconds: 0,
        time_minutes: work_time - 1,
        ticking: false
      });
    }
  };

  Clock.prototype.addBreakMinute = function addBreakMinute() {
    var _state6 = this.state;
    var break_time = _state6.break_time;
    var time_seconds = _state6.time_seconds;
    var time_minutes = _state6.time_minutes;
    var ticking = _state6.ticking;
    var workOrBreak = _state6.workOrBreak;

    this.setState({ break_time: break_time + 1
    });
    if (workOrBreak == "Break") this.setState({ break_time: break_time + 1,
      time_seconds: 0,
      time_minutes: break_time + 1,
      ticking: false
    });
  };

  Clock.prototype.takeBreakMinute = function takeBreakMinute() {
    var _state7 = this.state;
    var break_time = _state7.break_time;
    var time_seconds = _state7.time_seconds;
    var time_minutes = _state7.time_minutes;
    var ticking = _state7.ticking;
    var workOrBreak = _state7.workOrBreak;

    if (break_time > 1) {
      this.setState({ break_time: break_time - 1
      });
      if (workOrBreak == "Break") this.setState({ break_time: break_time - 1,
        time_seconds: 0,
        time_minutes: break_time - 1,
        ticking: false
      });
    }
  };

  Clock.prototype.render = function render() {
    var _this2 = this;

    var _state8 = this.state;
    var time_minutes = _state8.time_minutes;
    var time_seconds = _state8.time_seconds;
    var ticking = _state8.ticking;
    var work_time = _state8.work_time;
    var break_time = _state8.break_time;
    var workOrBreak = _state8.workOrBreak;
    var color = _state8.color;

    var stateColor = { background: color };

    return React.createElement(
      "div",
      { className: "container clock" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12" },
          React.createElement(
            "h1",
            { className: "title" },
            "Pomodoro Clock"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-2" },
          React.createElement(
            "h3",
            null,
            "Work: "
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-1" },
          React.createElement(
            "h3",
            { className: "time work_time" },
            work_time
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-1 selector" },
          React.createElement(
            "span",
            { onClick: function onClick() {
                return _this2.takeWorkMinute();
              }, className: "top" },
            "▼"
          ),
          React.createElement(
            "span",
            { onClick: function onClick() {
                return _this2.addWorkMinute();
              }, className: "bottom" },
            "▲"
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-4" },
          React.createElement(
            "div",
            { style: stateColor, onClick: function onClick() {
                return _this2.toggleCountdown();
              }, className: "time-box" },
            React.createElement(
              "h3",
              null,
              workOrBreak
            ),
            React.createElement(
              "h3",
              { className: "remaining" },
              time_minutes,
              " m ",
              time_seconds,
              " s"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-2" },
          React.createElement(
            "h3",
            null,
            "Break: "
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-1" },
          React.createElement(
            "h3",
            { className: "time work_time" },
            break_time
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-1 selector" },
          React.createElement(
            "span",
            { onClick: function onClick() {
                return _this2.takeBreakMinute();
              }, className: "top" },
            "▼"
          ),
          React.createElement(
            "span",
            { onClick: function onClick() {
                return _this2.addBreakMinute();
              }, className: "bottom" },
            "▲"
          )
        )
      )
    );
  };

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('container'));