import React from 'react';
import './about.css';
import { Routes, Route } from 'react-router-dom'

import Partners from '../Partners/partners';

const styles = {
    background: {
        background: 'green'
    }
}

export default function About() {
    return (
        <div>
            <header>
                
            </header>
            <div>
                <img class="img-fluid mt-0" src={'image2.png'} alt="donating"></img>
                <h2>Who we are.</h2>
            </div>
            <div>
                <Routes>
                    <Route path='/partners' element={<Partners />} />
                </Routes>
            </div>



            <div style={styles.background}>
                <img class="img-fluid" src={'image1.jpg'} alt="donating"></img>
                <h2>Who we are.</h2>
            </div>


        </div>

    )
}