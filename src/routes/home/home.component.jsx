import {useContext,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './home.component.css'

import { NavbarContext } from '../../contexts/navbar.context'

// let naya = new Date("Mar 6 08:16:20 2023 GMT");
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// const timerId = setInterval( ()=>{
    
// }, 1000);

function Home() {
    const { setActiveLink } = useContext(NavbarContext);
    let date = new Date();

    const [seconds, setSeconds] = useState(date.getSeconds());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [hours, setHours] = useState(date.getHours());
    const [currDate, setDate] = useState(date.getDate());

    setInterval(() => {
        const countDownDate = new Date("Jan 26, 2023").getTime();

        const currTime = new Date().getTime();
        var timeleft = countDownDate - currTime;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDate(days);
    }, 1000)
    
    return (
        <>
        <div className='container'>
            {/* Landing Page banner */}
            <div className='page-banner'>
                
                    <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                
                
                    <h2>13th-14th Decemeber 2021</h2>
            
            </div>

            {/* Samar Countdown */}
            <div className="count-down flex">
                <div className='count-down-div'>
                    <p className='count-div-item-1'>{currDate}</p>
                    <p>Days</p>
                </div>
                <div className='count-down-div'>
                    <p className='count-div-item-1'>{hours}</p>
                    <p>Hours</p>
                </div>
                <div className='count-down-div'>
                    <p className='count-div-item-1'>{minutes}</p>
                    <p>Minutes</p>                    
                </div>
                <div className='count-down-div'>
                <p className='count-div-item-1'>{seconds}</p>
                <p>Seconds</p>
                </div>
            </div>

            {/* Samar Youtube */}
            <div className="embadded-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H2OSghiMRaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
            {/* speakers, schedule, sponsers, gallary */}
            <div className='flex sssg-container'>
            <div className="sssg speakers">
                <div className='card sssg-item'>
                    <div class="card2 sssg-item-child">
                    <img src="https://cdn-icons-png.flaticon.com/512/2572/2572204.png" alt="" />
                    </div>
                </div>
                <p>Speakers</p>
            </div>
                
            <div className="sssg schedule">
                <Link
                    onClick={() => {
                                setActiveLink(2)
                            }}
                            to='/schedule'
                >
                    <div className='card sssg-item'>
                        <div class="card2 sssg-item-child">
                        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176395.png" alt="" />
                        </div>
                    </div>
                    <p>Schedule</p>
                </Link>
            </div>

            <div className="sssg sponsers">
                <Link
                    onClick={() => {
                                setActiveLink(3)
                            }}
                            to='/sponsors'
                >
                    <div className='card sssg-item'>
                        <div class="card2 sssg-item-child">
                            <img src="https://cdn-icons-png.flaticon.com/512/3349/3349234.png" alt="" />
                        </div>
                    </div>
                    <p>Sponsers</p>
                </Link>
            </div>

            <div className="sssg gallery">
                <Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/gallery'
                >
                    <div className='card sssg-item'>
                        <div class="card2 sssg-item-child">
                            <img src="https://cdn-icons-png.flaticon.com/128/1040/1040241.png" alt="" />
                        </div>
                    </div>
                    <p>Gallary</p>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home
