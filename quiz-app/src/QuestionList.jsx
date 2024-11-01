export default function QuestionList({ question, options,handleOptionClick,currentAnswer }) {
    return (
      <div>
        <h2> {question} </h2>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}
                className={currentAnswer===option?'selected':''}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
}
  