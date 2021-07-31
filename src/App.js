import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistic from "./components/Statistic";
import { ANSWER_OPTIONS } from "./data/AnswerOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onClick = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={ANSWER_OPTIONS} onLeaveFeedback={onClick} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
        {countTotalFeedback() !== 0 && (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// --OLD CODE--

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = (e) => {
//     const name = e.target.name;
//     this.setState((state) => ({ ...state, [name]: this.state[name] + 1 }));
//   };

//   countTotalFeedback = () =>
//     this.state.good + this.state.bad + this.state.neutral;

//   countPositiveFeedbackPercentage = () =>
//     this.state.good
//       ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//       : 0;

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>

//         {this.countTotalFeedback() ? (
//           <Section title="Statistic">
//             <Statistic
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
