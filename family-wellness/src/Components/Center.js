const Center = () => {
  return (
     <section id="center-section">
        <div className="hero-grid-container">
            <div className="img-container">
                <img alt="" src="https://www.handandstoneavon.com/images/seasonal/Microsite_Holiday2023_Instore_Online_Mention.jpg" />
            </div>
        </div>
        <div className="action-card-container">
            <h2>Think Health. Think Massage</h2>
            <p>We are open 9am to 6pm, Monday through Sunday. If you would like to schedule an appointment with us, please call us at +91-8989898989 today!</p>
            <div className="action-btn-wrapper">
                <button>LEARN MORE ABOUT US</button>
                <button>CONTACT US TODAY</button>
            </div>
        </div>
        <div className="text-wrapper">
            <div className="action-text-container">
                <input type="checkbox"></input>
                <p className="action-text first-p">Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
            </div>
            <div className="action-text-container">
                <input type="checkbox"></input>
                <p className="action-text">We are committed to your long term health and well-being. Our multi-disciplanry clinic provides a balanced approach to healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
            </div>
            <div className="action-text-container last-div">
                <input type="checkbox"></input>
                <p className="action-text last-p">We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Ratlam.</p>
            </div>
        </div>
        <br/>
        <hr/>
        <div className="address-wrapper">
            <h2>Family Wellness Massage Therapy</h2>
            <p>9876, New Road, Suite 123, Ratlam, 457001</p>
            <p>Phone: +91-8989898989</p>
        </div>
     </section>
  );
};

export default Center;
