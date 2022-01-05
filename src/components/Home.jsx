import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import hero_area from '../Assets/hero_area.jpg';
import jack from '../Assets/jack_doe.jpg';
import jane from '../Assets/jane_k_doe.jpg'

export default function Home() {

    return (
        <div className='home'>
            <header>
                <nav >
                    <div className='navbar'>
                        <div className='logo'>
                            <span>Oll</span>
                            <span>Ert</span>
                        </div>
                        <div className='links'>
                            <span className='homepage-nav-links'>Home</span>
                            <span className='homepage-nav-links'>About us</span>
                        </div>
                        <div>
                            <Link to="/loginsignup">
                            <button>
                                Login/SignUp
                            </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            
                <div className='body-container'>
                    <div className='hero-content'>
                        <div className='emphasis'>
                            Award winning collaborator
                        </div>
                        <div className='main-content'>
                            Designed by experts. Trusted by millions
                        </div>
                        <div>
                            <span className='hero-curve'></span>
                        </div>
                        <div className='download-btn'>
                            <button>
                                <FontAwesomeIcon icon={faDownload} className='download-icon'></FontAwesomeIcon>
                                Download
                            </button>
                        </div>

                    </div>
                    <div className='hero-image-container'>
                        <img src={hero_area} alt="" />
                    </div>
                </div>

            <footer>
                <div className='footer-container'>
                    <div className='avatars'>
                        <div className="person jack">
                            <img src={jack} alt="JACK" />
                            <div className='caption'>Jack Doe</div>
                            <span>Co-founder</span>
                            <span>Chief of Operations, Head Engineer</span>
                        </div>
                        <div className="person jane">
                            <img src={jane} alt="JANE" />
                            <div className='caption'>Jane Katherine Doe</div>
                            <span>Co-founder</span>
                            <span>Chief of Marketing, Head Analyst</span>
                        </div>
                    </div>
                    <div className='some-content'>
                        Lorem ipsum dolor <strong><em>sit amet consectetur adipisicing elit</em></strong>. Soluta doloremque, repellendus eum atque quos voluptatum ullam ea earum est quaerat fugit nesciunt neque, laborum, <em>illo dolor quae quo laudantium minima</em>. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam perspiciatis voluptate excepturi minima explicabo sed blanditiis facilis laboriosam delectus recusandae omnis dicta vero dolor, enim accusamus quaerat cum quisquam a? Lorem ipsum dolor sit amet <strong>consectetur adipisicing</strong> elit. Dolores dicta, natus officia ad non dignissimos, reprehenderit quisquam eveniet soluta ab rem fugiat amet beatae nemo totam ea temporibus tenetur earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis officia rem dolorum eveniet earum cumque recusandae, placeat eos.
                    </div>
                </div>
            </footer>
            
        </div>
    )
}
