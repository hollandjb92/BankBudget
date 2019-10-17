import React, {Component} from "react";
import "../contact_page/contact_page.css"


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      render() {
        return (
            <div className = "container">
            <div className = "h1">Contact</div>
            <br/>
            <br/>
            <form>
                    <div className="form-group">
                            <label for="formGroupExampleInput"><h3>Name: </h3></label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                          </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1"><h3>Email address: </h3></label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                            <label for="exampleFormControlTextarea1"><h3>Message: </h3></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
      }

}

export default Contact;