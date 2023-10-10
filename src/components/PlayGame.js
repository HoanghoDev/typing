import { useEffect, useState } from "react";
const PlayGame = ({onGame, onChangeScore}) => {
  const [defaultData] = useState('Ea laboris reprehenderit mollit irure veniam est irure. Consequat ipsum cillum voluptate cupidatat officia. Lorem enim sint id reprehenderit do reprehenderit. Qui ad commodo minim aliquip sunt cupidatat Lorem quis. Dolore labore nostrud nisi deserunt eiusmod. Commodo cupidatat adipisicing officia consequat nostrud nulla pariatur Lorem. Commodo nulla eu mollit sunt ad amet dolor fugiat id dolore aliquip eiusmod reprehenderit velit. Consectetur exercitation tempor Lorem duis incididunt pariatur cupidatat cupidatat pariatur cillum reprehenderit exercitation deserunt. Non id labore dolore ad minim ex cupidatat anim nostrud dolore officia id.');
  const [dataTyping, setDataTyping] = useState([]);
  const [textTyping, setTextTyping] = useState({
    value: '',
    position: 0
  });
    useEffect(() => {
      const addWord = (quantityAdd = 20) => {
        const arrayDefaultData = defaultData.split(' ');
        const gamingText = [];
        for (let index = 0; index < quantityAdd; index++) {
          const positionRandom = Math.floor(Math.random() * arrayDefaultData.length); 
          gamingText.push({
            value: arrayDefaultData[positionRandom],
            status: null
          });
        }
        setDataTyping(gamingText);
      }
      if(dataTyping.length === 0 || textTyping.position > (dataTyping.length - 1)){
        addWord();
        setTextTyping({...textTyping, position: 0});
      }
      
    }, [textTyping.position])
    const handleChangeTyping = e => {
        const valueInput = e.target.value;
        if(!valueInput.includes(' ')){
          setTextTyping({...textTyping, value: valueInput});
        }else if(textTyping.value !== ''){
          checkResult();
        }
    } 
    const checkResult = () => {
      const dataCheck = dataTyping;
      if(textTyping.value === dataCheck[textTyping.position].value){
        dataCheck[textTyping.position].status = true;
        onChangeScore(1);
      }else{
        dataCheck[textTyping.position].status = false;
        onChangeScore(-1);
      }
      setDataTyping(dataCheck);
      setTextTyping({value: '', position: textTyping.position + 1});
    }
  return (
    <div className="playing">
        <ul className="list">
        {
          (dataTyping).map((word, index) => 
            <li key={index} className={
              word.status === true 
              ? 'true' 
              : word.status === false 
              ? 'false'
              : ''
          }>
              {word.value}
          </li>
          )
        }
        </ul>
    <div className="inputForm">
      <input type="text" autoFocus value={textTyping.value} onChange={handleChangeTyping}/>
    </div>
  </div>
  )
}
export default PlayGame;