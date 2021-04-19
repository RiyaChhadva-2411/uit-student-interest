import React from "react";
import "./RegisterInterest.css";
import registerinterest from "../svg/studentinterest.jpg";

export default class Registerinterest extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid Registerinterest__container">
                    <div className="row Registerinterest__row">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Registerinterest__svg-column1">
                            <div className="Registerinterest__svg">
                                <img src={registerinterest} alt="register-interest" className="Registerinterest__image" />
                            </div>
                        </div>

                       <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Registerinterest__svg-column2">
                           <div className="Registerinterest__heading">
                               Your Interests!
                           </div>
                           <form className="Registerinterest__Form-main">
                               <div className="form-row Registerinterest__Form">
                                   <div className="Registerinterest__property">First Interest:</div>
                                   <input type="text" name="interest_1" id="interest_1" className="form-control Registerinterest__Interest" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                               </div>

                               <div className="form-row Registerinterest__Form">
                                   <div className="Registerinterest__property">Second Interest:</div>
                                   <input type="text" name="interest_2" id="interest_2" className="form-control Registerinterest__Interest" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                                </div>
                                
                                <div className="form-row Registerinterest__Form">
                                   <div className="Registerinterest__property">Time alloted to first interest:</div>
                                   <input type="tel" name="interesttime_1" id="interesttime_1" className="form-control Registerinterest__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="form-row Registerinterest__Form">
                                   <div className="Registerinterest__property">Time alloted to second interest:</div>
                                   <input type="tel" name="interesttime_2" id="interesttime_2" className="form-control Registerinterest__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="row Registerinterest__Submit-row">
                        <button type="submit" className="btn Registerinterest__Submit-Button">Submit</button>
                        </div>
                           </form>
                           </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
