import { BtnStyled, BtnContein } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnContein>
      {options.map(Btn => (
        <BtnStyled key={Btn} type="button" onClick={() => onLeaveFeedback(Btn)}>
          {Btn}
        </BtnStyled>
      ))}
    </BtnContein>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
