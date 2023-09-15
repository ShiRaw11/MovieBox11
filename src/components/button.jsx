import { Link } from "react-router-dom";
import React from 'react'

function MovieButton({onClickButtonHandler, buttonText, buttonIconRight, buttonIconLeft, buttonType, buttonStyle, to}){

    if(to) {
        return (
          <>
              <Link to={to} className={`inline-flex items-center justify-center gap-2 transition-colors duration-400 ease-in-out bg-rose text-gray w-[120px] h-[50px] rounded-full text-[16px] font-medium border-solid border-rose hover:bg-white hover:border-2 hover:text-blue outline-offset-2 outline-rose hover:outline-none ${ buttonStyle ? buttonStyle : ""}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClickButtonHandler}>
                  {buttonIconLeft}
                  {buttonText}
                  {buttonIconRight}
              </Link>
          </>
        )
      }
      return (
        <>
            <button className={`inline-flex items-center  justify-center gap-2 transition-colors duration-400 ease-in-out bg-rose text-gray w-[120px] h-[50px] rounded-full text-[16px] font-medium border-solid border-rose hover:bg-white hover:border-2 hover:text-rose outline-offset-2 outline-rose hover:outline-none ${ buttonStyle ? buttonStyle : ""}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClickButtonHandler}>
                {buttonIconLeft}
                {buttonText}
                {buttonIconRight}
            </button>
        </>
      )
}


export default MovieButton