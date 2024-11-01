export default function QuestionList({ question, options,handleOptionClick }) {
    return (
      <div>
        <h2> {question} </h2>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
}
  