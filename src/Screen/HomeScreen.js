import React from 'react';
import '../index.css';

function HomeScreen() {
    return (
        <div className='width'>
            <div className="hero">
                <div className="home-background">
                    <div className="left-text">
                        <h2>
                            One way solution for medicine
                            <div className="wrap">
                                <div className="acce"> accessibility</div>
                                <div className="deliv">delivery</div>
                            </div>
                        </h2>
                        <p className="texts">
                            Easily order and receive medicine for your patients,
                            employee and enrolles
                        </p>

                        <span className='spans'>
                            <a className="span" href="/#">
                                create a free account
                            </a>
                        </span>
                    </div>
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
    );
}
export default HomeScreen;