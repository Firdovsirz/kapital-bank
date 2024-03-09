import React from 'react'
import "../Footer/Footer.css"
import qrCode from "../../assets/qr-code-removebg-preview.png"
import playStore from "../../assets/play-store.jpg"
import appGallery from "../../assets/app-gallery.jpg"
import gov from "../../assets/gov.png"
import aesf from "../../assets/aesf-logo.png"
import info from "../../assets/info.png"
import msp from "../../assets/msp.png"


export default function Footer() {
    return (
        <footer>
            <div className='footer-main'>
                <div className='kapital-bank'>
                    <h1>Kapital Bank</h1>
                    <ul>
                        <li><a href="#">Bank haqqında</a></li>
                        <li><a href="#">İnsan resursları</a></li>
                        <li><a href="#">Xidmət şəbəkəsi</a></li>
                        <li><a href="#">Birbank</a></li>
                        <li><a href="#">Xəbərlər</a></li>
                        <li><a href="#">Təklif və şikayətlər</a></li>
                    </ul>
                </div>
                <div className='products'>
                    <h1>Məhsullar</h1>
                    <ul>
                        <li><a href="#">Kartlar</a></li>
                        <li><a href="#">Kreditlər</a></li>
                        <li><a href="#">Depozitlər</a></li>
                        <li><a href="#">Sığorta</a></li>
                        <li><a href="#">Pul köçürmələri</a></li>
                        <li><a href="#">Fərdi bankçılıq</a></li>
                        <li><a href="#">Onlayn xidmətlər</a></li>
                    </ul>
                </div>
                <div className='quick-links'>
                    <h1>Çevik keçidlər</h1>
                    <ul>
                        <li><a href="#">Birbank kartı sifariş et</a></li>
                        <li><a href="#">Kredit sifariş et</a></li>
                        <li><a href="#">Debet kart sifariş et</a></li>
                    </ul>
                </div>
                <div className='other'>
                    <h1>Digər</h1>
                    <ul>
                        <li><a href="#">Onlayn növbə</a></li>
                        <li><a href="#">Tariflər</a></li>
                        <li><a href="#">Necə etməli</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Bloqlar</a></li>
                    </ul>
                </div>
                <div className='download-application'>
                    <h1>
                        Birbank tətbiqini yükləmək üçün
                        QR-kodu oxudun.
                    </h1>
                    <div className='apps'>
                        <img className='qr' src={qrCode} alt="qr-code" />
                        <div className='play'>
                            <img className='store' src={playStore} alt="" />
                            <div className='play-text'>
                                <p className='google-play'>Google Play</p>
                                <p className='play-download'>Mobil tətbiqi yüklə</p>
                            </div>
                        </div>
                        <div className='apple'>
                            <i class="fa-brands fa-apple"></i>
                            <div className='apple-text'>
                                <p className='app-store'>App Store</p>
                                <p className='app-download'>Mobil tətbiqi yüklə</p>
                            </div>
                        </div>
                        <div className='app-gallery'>
                            <img src={appGallery} alt="" />
                            <div className='app-gallery-text'>
                                <p className='gallery-text'>App Gallery</p>
                                <p className='gallery-download'>Mobil tətbiqi yüklə</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-medias'>
                <div className='footer-call'>
                    <i class="fa-solid fa-phone"></i>
                    <a href='tel:196'>196</a>
                </div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-telegram"></i>
            </div>
            <div className='footer-line'></div>
            <div className='laws'>
                <p className='copyright'>&copy; 2024 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</p>
                <ul>
                    <li><img src={gov} alt="gov" /></li>
                    <li><img src={info} alt="info" /></li>
                    <li><img src={aesf} alt="aesf" /></li>
                    <li><img src={msp} alt="msp" /></li>
                </ul>
            </div>
            <div className='footer-info'>
                <p>“Kapital Bank” ASC (Bakı şəh., Nəsimi r-nu, Füzuli küç. 71) 05 noyabr 2018-ci il tarixli 244 nömrəli Bank Lisenziyası əsasında fəaliyyət göstərir.</p>
            </div>
        </footer>
    )
}
