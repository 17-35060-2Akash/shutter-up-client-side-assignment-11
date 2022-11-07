import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo1.png';
import { FaFacebookSquare, FaGithubSquare, FaGoogle, FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className='bg-base-300' id="footer-contact">
                <div className="flex flex-col align-middle justify-center pt-20">
                    <div className='flex flex-col align-middle justify-center'>
                        <img className="w-40 mx-auto pb-6" src={logo} alt="" />
                        <p className="font-bold pb-5 text-xl">
                            Shutter Up Phototography<br />Shooting since 2002
                        </p>

                    </div>

                    <p className="font-semibold pb-5 text-lg">Office 41, 5/5 Monipuri Para, Bijoy Sharoni, Dhaka</p>
                    <div className='mt-4'>
                        <nav className="text-purple-600">
                            <Link to='/contacts' className='px-5 text-xl font-medium'>Contact Us</Link>
                            <Link to='/about' className='px-5 text-xl font-medium'>About Us</Link>
                        </nav>
                        <nav className="text-purple-600 py-4">
                            <Link to='/terms' className='px-5 text-xl font-medium'>Terms of Service</Link>
                            <Link to='/policy' className='px-5 text-xl font-medium'>Privacy Policy</Link>
                        </nav>

                    </div>
                    <div className="platform-icons flex flex-row align-middle justify-center my-4 ">
                        <Link to='/google' className='px-4 text-4xl'><FaGoogle></FaGoogle></Link>
                        <Link to='/git' className='px-4 text-4xl'><FaGithubSquare></FaGithubSquare></Link>
                        <Link to='linkedin' className='px-4 text-4xl'><FaLinkedin></FaLinkedin> </Link>
                        <Link to='/insta' className='px-4 text-4xl'><FaInstagram></FaInstagram> </Link>
                        <Link to='/facebook' className='px-4 text-4xl'><FaFacebookSquare></FaFacebookSquare> </Link>
                        <Link to='/wapp' className='px-4 text-4xl'><FaWhatsappSquare></FaWhatsappSquare> </Link>

                    </div>
                    <p className='text-xl font-semibold text-purple-600 pb-4 mt-20 pb-32'>Copyright©2022 - All right reserved by Nasin A Akash</p>

                </div>
            </section >
        </div >
    );
};

export default Footer;