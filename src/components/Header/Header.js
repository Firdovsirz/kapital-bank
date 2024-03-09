import React from 'react'
import "../Header/Header.css"
import logo from "../../assets/kb-logo-main-removebg-preview.png"
import birbank from "../../assets/birbanklogo-mobile.svg"

export default function Header() {
    return (
        <header>
            <nav className='main-nav'>
                <img src={logo} alt="kapitalbank-logo" className='logo' />
                <div className='main-nav-items'>
                    <a href="#" className='physical-person'>Fiziki şəxslər üçün</a>
                    <a href="#" className='for-business'> Biznes üçün</a>
                    <a href=""><i class="fa-solid fa-location-dot"></i></a>
                    <a href="#" className='service-network'>Xidmət şəbəkəsi</a>
                    <p className='en'>EN</p>
                    <p className='ru'>RU</p>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </nav>
            <nav className='secondary-nav'>
                <ul className='pages'>
                    <li><a href="#">KARTLAR</a></li>
                    <li><a href="#">KREDİTLƏR</a></li>
                    <li><a href="#">İPOTEKALAR</a></li>
                    <li><a href="#">DEPOZİTLƏR</a></li>
                    <li><a href="#">PUL KÖÇÜRMƏLƏRİ</a></li>
                    <li><a href="#">ONLAYN XİDMƏTLƏR</a></li>
                    <li><a href="#">KAMPANİYALAR</a></li>
                    <li><a href="#">FƏRDİ BANKÇILIQ</a></li>
                </ul>
                <button className='birbank-btn'><img src={birbank} alt="" />birbank</button>
            </nav>
        </header>
    )
}
