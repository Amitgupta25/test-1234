import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
        <nav>
            <div class="container">
                <h1><a href="#">Your Turf Booking</a></h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section id="hero">
        <div class="container">
            <h2>Welcome to Your Turf Booking</h2>
            <p>Book your turf, play your game!</p>
            <a href="#booking" class="btn">Book Now</a>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Us</h2>
            <p>We offer state-of-the-art turf facilities for all your sports and recreational needs. Our flexible hours and easy online booking make it convenient for you to enjoy your favorite activities.</p>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="service">
                <h3>State-of-the-Art Facilities</h3>
                <p>Experience top-notch turf technology designed to meet the highest standards.</p>
            </div>
            <div class="service">
                <h3>Easy Online Booking</h3>
                <p>Reserve your turf spot with just a few clicks using our user-friendly online booking system.</p>
            </div>
            <div class="service">
                <h3>Flexible Hours</h3>
                <p>We offer flexible hours to accommodate your schedule, from early morning to late at night.</p>
            </div>
            <div class="service">
                <h3>Competitive Pricing</h3>
                <p>Access top-quality turf facilities without breaking the bank with our competitive prices.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us.</p>
            <a href="mailto:info@yourturfbooking.com" class="btn">Email Us</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Your Turf Booking</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
