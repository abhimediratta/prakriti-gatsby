import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return ( <
            Layout >
            <SEO title="About" keywords={[`gatsby`, `About`, `react`]} /> <
            div className = "site-About" >
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <p>
                    Prakriti florist has been owned and operated by Mrs. Indu Arora & her family since 1997. Prakriti Florist tries to treat every customer the way they would like to be treated. Staffs are well trained, have many years of experience and are always professional. The shop has been processing internet orders since 2007 with a computerized network to manage and record all orders.
                    </p>

                    <p>
                    Our Tips and Info section is designed to help ensure that our customers get the most enjoyment possible out of their purchase. Because of the importance of properly caring for flowers, we have provided some useful information on how to properly care for our products.
                    </p>

                    <p>
                    We highly recommend that before your flowers arrive at their destination, where we give some general care information and also specific care instructions for different flower types.
                    </p>
                </div>
            </div>
        </div> 
        </div> 
        </Layout >
        )
    }
}
export default About