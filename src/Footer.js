import React from 'react';
import { FaYoutube,FaTwitter,FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './App.css';

function Footer({ phone, email }) {
  return (
    <footer class="fixed-botton bg-dark py-4 mt-5 ">
            <div class="container-fluid justify-content-center text-white">
                <div class="row justify-content-center">
                    <div class="col text-left">
                        <h5 class="text-uppercase fw-bold">Lorem</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam dui nibh, vulputate sagittis orci porta, fringilla pretium massa.
                        </p>
                    </div>

                    <div class="col text-center">
                        <h5 class="text-uppercase fw-bold">Contato</h5>
                        
                        <p class="text-white">
                            <FaPhoneAlt/>
                            {phone}
                        </p>

                        <p>
                            <MdEmail/>
                            <a href="#mailto" class="text-white underline-a">{email}</a>
                        </p>
                    </div>

                    <div class="col">
                        <h5 class="text-uppercase fw-bold">Nos acompanhe nas redes</h5>

                        <p>
                            <FaYoutube/>
                            <a href="#www.youtube.com" class="text-white underline-a">Youtube</a>
                        </p>

                        <p>
                            <FaTwitter/>
                            <a href="#twitter.com" class="text-white underline-a">twitter</a>
                        </p>
                        
                        <p>
                            <FaFacebookF/>
                            <a href="#facebook.com" class="text-white underline-a">facebook</a>
                        </p>

                    </div>
                </div>
            </div>
    </footer>
  );
}

export default Footer;
