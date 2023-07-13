import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { TbShoppingCartDiscount } from 'react-icons/tb'
import { BiHeadphone } from 'react-icons/bi'
import './Home.css'
import HomeProduct from './HomeProduct'

const Home = () => {
    // const [HomeProduct, setHomeProduct] = useState(HomeProduct)
return (
    <>
        <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Notebook Collection 2023</h2>
                    <Link className='link' to='/product' >Shop Now <BsArrowRight /> </Link>
                </div>
                <div className="img_box">
                    <img src="../img/tablet_notebook1.png" alt="notebook" style={{width:'300px'}}/>
                </div>
            </div>
        </div>

        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src="../img/mobilephone1.png" alt="mobile" />
                    </div>
                    <div className="detail">
                        <p>20 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/watch.png" alt="watch" />
                    </div>
                    <div className="detail">
                        <p>35 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/laptop.png" alt="laptop" />
                    </div>
                    <div className="detail">
                        <p>42 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/printer.png" alt="printer" />
                    </div>
                    <div className="detail">
                        <p>18 products</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Orders above Rs.1000 </p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund</h3>
                        <p>Money Back Guarantee</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <TbShoppingCartDiscount />
                    </div>
                    <div className="detail">
                        <h3>Member's Discount</h3>
                        <p>On Every Order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="product">
            <div className="container">

                {
                    HomeProduct.map((curElm) => 
                    {
                        return(
                                <>
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <img src={curElm.Img} alt={curElm.Title}></img>
                                        </div>
                                    </div>
                                </>
                            )
                    })
                }

            </div>
        </div>
    </>
)
}

export default Home
