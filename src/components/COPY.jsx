// class FeedbackWidget extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = options => {
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const Btn = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const precent = this.countPositiveFeedbackPercentage();

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Btn}
//           onLeaveFeedback={this.onLeaveFeedback}
//         ></FeedbackOptions>

//         <Section title="Statistics">
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               precent={precent}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </Section>
//     );
//   }
// }

// export default FeedbackWidget;
