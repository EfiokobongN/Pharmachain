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

            <div className='flex-2'>
                <h1>Why Choose <span className='spans'> Pharmachain?</span></h1>
                <div className='grid'>

                    <div className='shadow'>
                        <div className='img-align'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTloKYEuZgTm15i19cguRVKFppI4X3JMaadnBDzIQSVHA&s' alt='map' />
                        </div>
                        <h2>Easy Access</h2>
                        <p>Gain assess to over 100,000 medications for different medical conditions all in one place.</p>
                    </div>


                    <div className='shadow'>
                    <div className='img-align'>
                        <span className='flex-icon'>♡</span>
                        </div>
                        <h2>Save Life</h2>
                        <p>In case of emergency, PHARMACHAIN comes to the rescue providing the exact drugs needed, 
                            ensuring that life is preserved.</p>
                    </div>

                    <div className='shadow'>
                    <div className='img-align'>
                        <img src='' alt='delivery'/>
                        </div>
                        <h2>Fast Delivery</h2>
                        <p>Medications are delivered very quickly while maintaining their 
                            integrity during transit. see <a href='/#'>Pharmachain</a></p>
                          
                    </div>

                    <div className='shadow'>
                    <div className='img-align'>
                        <img src='' alt='partner'/>
                        </div>
                        <h2>Partnership</h2>
                        <p>HMOs, Healthcare Professionals and Institutions can utilize our solution to improve patient outcomes
                             which can lead to increased client retention and new client acquisition.</p>
                    </div>

                    <div className='shadow'>
                    <div className='img-align'>
                        <img src='' alt='safety'/>
                        </div>
                        <h2>Safety</h2>
                        <p>We protect users information with High standards, care and Excellence.</p>
                    </div>

                    <div className='shadow'>
                    <div className='img-align'>
                        <img src='' alt='cost'/>
                        </div>
                        <h2>Cost</h2>
                        <p>As a result of our integration with multiple Pharmacies, you can access a variety 
                            of branded and unbranded medications at the best prices.</p>
                    </div>
                </div>
            </div>


            <div className='flex-3'>
                <div className='flex-box'>
                    <span className='flex-icon'>₦</span>
                    <p className='flex-number'>0,999,999,999</p>
                </div>

                <div className='flex-3-text'>
                    <h2>Scale up your revenue by integrating <span className='spans'>PHARMACHAIN</span></h2>
                    <p>The integration of Pharmachain enables HOSPITALS to generate additional revenue streams by allowing
                         them to earn income on prescriptions filled outside the hospital premises.</p>
                         <button className='btn-span' ><a href='/#' >→ Get Started</a></button>
                </div>
            </div>

            <div className='header-2'>
                <h2>Here is a summary of how Pharmachain will directly <span className='h-h2'>BENEFIT YOU.</span></h2>
                <div className='header-btn'>
                    <div className='header-link'>
                        <div className='btn-link' role='tablist' aria-orientation='horizontal'>
                            <button className='tab-header' id='tabs-:r8:--tab-0' type='button' aria-selected='true' 
                            aria-controls='tabs-:r8:--tabpanel-0' role='tab'  tabIndex={-1} data-index='0'>
                            HMOs
                            </button>

                            <button className='tab-header' type='button' id='tabs-:r8:--tab-1' role='tab' tabIndex={0} aria-selected='false' 
                            aria-controls='tabs-:r8:--tabpanel-1'  data-index='1'>
                            Hospitals
                            </button>

                            <button className='tab-header' id='tabs-:r8:--tab-2' type='button' aria-selected='false' 
                            aria-controls='tabs-:r8:--tabpanel-2' role='tab'  tabIndex={-1} data-index='2'>
                            Professionals
                            </button>

                            <button className='tab-header' id='tabs-:r8:--tab-3' type='button' aria-selected='false' 
                            aria-controls='tabs-:r8:--tabpanel-3' role='tab'  tabIndex={-1} data-index='3'>
                            Pharmacies
                            </button>
                            
                        </div>

                        <div className='tab-panels'>
                            <span className='tab-para tpara' tabIndex={0} role='tabpanel' aria-labelledby='tabs-:r8:--tab-0' id='tabs-:r8:--tabpanel-0' hidden>
                                <div className='tab-texts pc-tab-text'>
                                    <p>Health Maintenance Organizations (HMOs) incur a substantial cost increase of more than five times the retail cost of medication due to the higher charges imposed on them. However, by taking advantage of the platform's integration with multiple pharmacies, HMOs can potentially lower their medication costs. Through the use of PHARMACHAIN, HMOs can streamline the medication ordering and delivery process, enabling patients to receive their medications in a timely and convenient manner.</p>
                                </div>
                            </span>

                            <span className='tab-para '  tabIndex={0} role='tabpanel' aria-labelledby='tabs-:r8:--tab-1' id='tabs-:r8:--tabpanel-1'>
                                <div className='tab-texts pc-tab-text'>
                                    <p>By leveraging PHARMACHAIN, hospitals can improve their patients' experience by reducing wait times by over 60 minutes. Additionally, this integration provides hospitals with an opportunity to multiply their revenue by allowing them to earn income on prescriptions filled outside the hospital premises.</p>
                                </div>
                            </span>

                            <span className='tab-para tpara' hidden tabIndex={0} role='tabpanel' aria-labelledby='tabs-:r8:--tab-2' id='tabs-:r8:--tabpanel-2'>
                                <div className='tab-texts pc-tab-text'>
                                    <p>Pharmachain offers healthcare professionals an extensive range of medicines, allowing for convenient and streamlined ordering processes. This capability not only saves time and effort on the sourcing of medications for patients but also contributes to improving patient compliance and accelerating recovery.</p>
                                </div>
                            </span>

                            <span className='tab-para tpara' hidden tabIndex={0} role='tabpanel' aria-labelledby='tabs-:r8:--tab-3' id='tabs-:r8:--tabpanel-3'>
                                <div className='tab-texts pc-tab-text'>
                                    <p>Pharmachain offers pharmacies a comprehensive platform that enables them to boost their sales, minimize costs, optimize inventory management, and streamline delivery processes. By leveraging Pharmachain's capabilities, pharmacies can expand their customer base beyond their local community, thus mitigating the risk of losses stemming from sluggish sales and expired medications.</p>
                                </div>
                            </span>
                        </div>

                        <div className='tab-links'>
                            <a  className='tab-btn inactive' href='/partner#hospitals'>Learn more 
                        <div className='tab-btn-a'>
                            <p>→</p>
                        </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space'></div>
            <div className='team-text'>
                <span className='svg'>
                    <svg width={100} height={100} viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <rect width={100} height={100} rx={50} fill='#EFFCFF'></rect>
                    </svg>
                </span>
                <span className='span-svg'>
                    <svg width={100} height={100} viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <rect width={100} height={100} rx={16} 
                        fill='#F2F7FF'></rect>
                    </svg>
                </span>
                <h2>Our team of experts are dedicated to providing you with the best service possible.We work
                     closely with leading pharmacies & pharmaceutical companies to ensure that you have access 
                     to quality and affordable medicines.</h2>
            </div>
            <div className='chara-slid'>
                <p className='slid-text'>In collabration with</p>
                <div className='slid-img'>
                    <div className='carousel'>
                        <div>
                            <div className='carousel-wrapper'>
                                <ul className='carousel-stage'>
                                    <li className='alice-span'>
                                        <div className='alice-logo'>
                                            <span className='wid'>
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fzagbayi.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Falpha.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fpharmaspace.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fcare-first.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fgreen-park.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fh-medix.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fmaima.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fnew-health.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fu-pharmacy.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fskylark.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Ftonia.png&w=256&q=75' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                            <img src='https://www.pharmachain.africa/_next/image?url=%2Fpartners%2Fzagbayi.png&w=256&q=75' alt='logo'/>

                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>

                                    <li className='alice-carousel__stage-item'>
                                        <div className='alice-logo'>
                                            <span >
                                                <img src='' alt='logo'/>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;