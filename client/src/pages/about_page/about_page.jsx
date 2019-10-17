import React, {Component} from "react";
import "../about_page/about_page.css"


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      render() {
        return (
            <div >
            <h1> About JPEG Bank</h1>
            <br />
            <img src="http://uufl.net/wp-content/uploads/2014/11/vision-mission-values2.jpg" alt="Vision"/>
                <h2>Vision,Mission & Values </h2>

                <p>Our enduring vision is to help our customers succeed financially. That is supported by our five values, which articulate what’s most important to us. Our six goals clearly state our aspirations and help prioritize our areas of focus.</p>

                <h3>Our vision :-</h3>

                <p> We want to satisfy our customers’ financial needs and help them succeed financially.
                    This unites us around a simple premise: Customers can be better served when they have a relationship with a trusted provider that knows them well, provides reliable guidance, and can serve their full range of financial needs.</p>

                <h3>Our values :-</h3>
                <h4>Five primary values guide every action we take:</h4>

                <p>What’s right for customers. We place customers at the center of everything we do. We want to exceed customer expectations and build relationships that last a lifetime.
                People as a competitive advantage. We strive to attract, develop, motivate, and retain the best team members — and collaborate across businesses and functions to serve customers.
                Ethics. We’re committed to the highest standards of integrity, transparency, and principled performance. We do the right thing, in the right way, and hold ourselves accountable.
                Diversity and inclusion. We value and promote diversity and inclusion in all aspects of business and at all levels. Success comes from inviting and incorporating diverse perspectives.
                Leadership. We’re all called to be leaders. We want everyone to lead themselves, lead the team, and lead the business — in service to customers, communities, team members, and shareholders.</p>
                <h3>Our Mission:-</h3>
                <h4> We want to become the financial services leader in these areas:</h4>

                <p>Customer service and advice. After listening to and understanding our customers and their financial goals, we want to provide exceptional service and guidance to help them succeed financially.
                Team member engagement. Our team members are our most valuable resource. We want to be the employer of choice — a place where people feel included, valued, and supported; everyone is respected; and we work as a team.
                Innovation. Through innovative thinking, industry-leading technology, and a willingness to test and learn, we create lasting value for customers — and increased efficiency for our operations.
                Risk management. While working to set the global standard in managing all forms of risk, we want to serve customers’ needs and protect their assets, information, and privacy.
                Corporate citizenship. We make a positive contribution to communities through philanthropy, advancing diversity and inclusion, creating economic opportunity, and promoting environmental sustainability.
                Shareholder value. We want to deliver long-term value for shareholders through a balanced business model, strong risk discipline, efficient execution, and a world-class team.</p>

                </div>
        )
      }

}

export default About;