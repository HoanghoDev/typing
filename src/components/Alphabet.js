const Alphabet = ({word}) => {
    
    return (
        <li className={
            word.status === true 
            ? 'true' 
            : word.status === false 
            ? 'false'
            : ''
        }>
            {word.value}
        </li>
    );
}
export default Alphabet;