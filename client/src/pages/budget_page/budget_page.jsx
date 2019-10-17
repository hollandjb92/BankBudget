import React, { Component } from "react";
import "../budget_page/budget_page.css"


class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className= "align">
                <div className="heading">
                    <br/>
                    <h1>Manage your money with our daily budget planner</h1>
                    <h4>To get you started, we automatically suggest budget goals for you based on your
                        spending.</h4>
                    <p>Then you can create and adjust budget goals as you go.</p>
                    <br/>
                </div>

                <img src="https://sudburycommunityservicecentre.ca/wp-content/uploads/2019/01/budget-1.jpg" alt="Budget img"/>
                <h1>Create budgets you can actually stick to</h1>
                <h4>We calculate average spending by category, so you
                    can easily create a budget based on spending
                    patterns. See how much you’re spending on what,
                    year-to-year or month-to-month.</h4>
                <h1>Meet your budget goals</h1>
                <h4>Plan ahead and see how much you’ll save cutting back in any category. You can even plan for one-time-only
                expenses and recurring monthly expenses.</h4>

                <h1>Know what's left with JPEG daily budget tracker</h1>
                <h4>We’ll show you exactly how your spending
                decisions affect the money you have at the end of
                the month or year. You’ll know what you can do
                today to save more tomorrow.</h4>

                <h4>Sign up for JPEG today</h4>
                <h4>From budgets and bills to free credit score and more, you’ll
                discover the effortless way to stay on top of it all.</h4>
            </div>
                      




        )
    }
                        
}
                        
export default Budget;