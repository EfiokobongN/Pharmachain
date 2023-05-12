import React from 'react';
import '../index.css';

function HomeScreen() {
    return (
        <div className='width'>
            <div className="hero">
                <div className="home-background">
                    <div className='left-text'>
                    <div className="text-flex">
                        <h1>
                           One way  solution for medicine
                            
                            <div className="wrap">
                                <div className="acce"> Accessibility</div>
                                <div className="deliv">Delivery</div>
                            </div>
                            </h1>
                        <p className="texts">
                            Easily order and receive medicine for your <br/> patients,
                            employee and enrolles
                        </p>
                        <div className='btn'>
                        
                            <a className="span" href="/#">
                                create a free account
                            </a>
                        
                        </div>
                    </div>
                    </div>
                    
                    <div className='num'>
                    <div className="numbers">
                        <div className="order-num">
                            <h3 className="span-num ">
                                <span>11,650</span>+
                                <p className="text-num">orders</p>
                            </h3>
                            
                        </div>

                        <div className="order-num">
                            <h3 className="span-num">
                                <span>11,650</span>+
                                <p className="text-num">delivered</p>
                            </h3>
                            
                        </div>

                        <div className="order-num">
                            <h3 className="span-num">
                                <span>10</span>+
                                <p className="text-num">partners</p>
                            </h3>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className='image'>
                <img src='https://www.pharmachain.africa/_next/image?url=%2Flaptop-dash.png&w=1920&q=75' alt='pharm'/>
                </div>

                <div className='flex-text'>
                    <h2 >
                    An efficient and cost effective way for HMOs to enhance their enrollee medication management.
                    </h2>
                    <p>We understand the challenges HMOs face that is why we have created a streamlined and efficient system that
                         makes it easy for you to request, deliver, and track medications for your enrollees.</p>
                         <a className='span' href='/#'>Get Started</a>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;