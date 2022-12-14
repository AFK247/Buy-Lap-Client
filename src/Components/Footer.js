import React from 'react';
import { Link } from 'react-router-dom';

//This is footer
const Footer = () => {
    return (
        <div  className='mx-3'>
            <footer className="bg-dark text-white mt-5">
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 p-4 text-center g-4">
                    <div className="col">
                        <h3 className=" mb-4 fw-bolder">Service</h3>

                        <p>The servide of Buy Lap is very good . We are always trusted and reliable .People come to to give review .So see the reviews and take the decision.We will be glad if you buy from Us </p>
                    </div>
                    <div className="col">
                        <h3 className=" mb-4 fw-bolder">PRODUCTS</h3>

                        <p>Business Laptop</p>
                        <p>Gaming Laptop</p>
                        <p>Office Laptop</p>
                        <p>Normal Laptop</p>
                        
                    </div>
                    <div className="col">
                        <h3 className="mb-4 fw-bolder">CONTACT</h3>

                        <p><i className="fas fa-home mr-3"></i> Rajshahi, Bangladesh</p>
                        <p><i className="fas fa-envelope mr-3"></i> asifferdous23@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 318 23</p>
                    </div>
                    <div className="col d-flex flex-column">
                        <h2 className="fw-bolder">Follow US</h2>

                        <p><Link href="#" className="text-primary text-decoration-none fab fa-facebook fs-3"></Link></p>
                        <p><Link href="#" className="text-danger text-decoration-none  fab fa-twitter fs-3"></Link></p>
                        <p><Link href="#" className="text-warning text-decoration-none  fab fa-linkedin fs-3"></Link></p>
                        <p><Link href="#" className="text-info text-decoration-none  fab fa-pinterest fs-3"></Link></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;