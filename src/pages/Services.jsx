import './Services.css';

const servicesData = {
  buses: [
    { title: 'Luxury Bus', description: 'Spacious and premium interiors for large groups.', image: '/images/luxury-bus.jpg' },
    { title: 'Volvo Coach', description: 'Comfortable travel with advanced features.', image: '/images/volvo.jpg' },
    { title: 'AC Sleeper Bus', description: 'Ideal for long-distance journeys.', image: '/images/ac-sleeper.jpg' },
  ],
  suvs: [
    { title: 'Innova Crysta', description: 'Perfect for family city tours.', image: '/images/innova.jpg' },
    { title: 'Toyota Fortuner', description: 'Powerful SUV for all terrains.', image: '/images/fortuner.jpg' },
    { title: 'Mahindra XUV700', description: 'Comfort and space for 7 passengers.', image: '/images/xuv700.jpg' },
  ],
  minibuses: [
    { title: 'Mini Bus 1', description: 'Ideal for 10-15 people group outings.', image: '/images/mini-bus-1.jpg' },
    { title: 'Mini Bus 2', description: 'Compact yet roomy for local tours.', image: '/images/mini-bus-2.jpg' },
    { title: 'Mini Bus 3', description: 'Air-conditioned and fully equipped.', image: '/images/mini-bus-3.jpg' },
  ]
};

function Services() {
  return (
    <div className="services-wrapper">
      
      {/* <section className="services-hero">
        <div className="overlay">
          <h2>Our Premium Travel Services</h2>
          <p>Comfort, Safety & Convenience – Your Journey, Our Priority!</p>
          
        </div>
      </section> */}
      <section className="services-hero">
  <div className="overlay">
    <div className="hero-text">
      <h2>Our Premium Travel Services</h2>
      <p>Comfort, Safety & Convenience – Your Journey, Our Priority</p>
    </div>
  </div>
</section>
      <Section title="Luxury Buses" data={servicesData.buses} />
      <Section title="SUVs & Cars" data={servicesData.suvs} />
      <Section title="Mini Buses" data={servicesData.minibuses} />

      <section className="why-choose-services">
          <h2>🔹 Why Choose Us?</h2>
          <ul className="choose-list">
            <li>
              <span> ✔️Well-maintained & clean vehicles</span> – Hygienic & sanitized after every trip.
            </li>
            <li>
              <span> ✔️Experienced & professional drivers</span> – Safe & smooth rides guaranteed.
            </li>
            <li>
              <span> ✔️24/7 customer support</span> – Assistance anytime, anywhere.
            </li>
            <li>
              <span> ✔️Affordable & transparent pricing</span> – No hidden charges.
            </li>
          </ul>
        </section>
    </div>
    
  );
}


function Section({ title, data }) {
  return (
    <div className="service-section">
      <h3>{title}</h3>
      <div className="service-card-container">
        {data.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;