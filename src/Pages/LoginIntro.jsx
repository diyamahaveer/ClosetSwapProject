import React from 'react'
import './LoginIntro.css'
import shoppingcart from '../Components/Assets/shoppingcart.png'
import cards from '../Components/Assets/cards.png'
import { Link } from 'react-router-dom';

const LoginIntro = () => {
    return ( 
        <div>
            <div className = 'loginintro'>
                <div className = 'loginintro-info'>
                    <h1> Get started with ClosetSwap </h1>  
                    <h4> ClosetSwap is a college student clothing rental platform. Sign up to borrow clothes
                        on your campus and get clothes as fast and as affordable as possible. </h4>
                    <img src = {shoppingcart} alt = "Shopping Cart" />
                    <h4> Once you find a piece of clothing, put it in cart and reserve for 24 hours. </h4>
                    <img src = {cards} alt = "Cards" />
                    <h4> Message the owner to approve the reservation and set up a day and time to pick up or return clothes. </h4>
                </div>
                <div className = 'loginintro-button'>
                    <Link to="/LoginSignup">
                    <button>Let's Go</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginIntro;