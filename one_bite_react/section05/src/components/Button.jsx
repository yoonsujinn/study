const Button = ({children, text, color="black"}) => {


  //매개변수로 이벤트 객체를 제공한다.
  const onClickButton = (e) => {
      console.log(text)
      console.log(e)
  }


  return <button 
    onClick={onClickButton}
    // onMouseEnter={onClickButton} 
    style={{color: color}}>
    {text} - {color}
    {children}
    </button>
}


export default Button;