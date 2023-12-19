import Button from "./Button";
import Card from "./Card";

const CenterSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-img-wrapper"></div>
      <div className="cta-wrapper">
        <div className="cta-img-container">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="action-img"
          />
        </div>
        <div className="cta-text-wrapper">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <Button
            title="Get in Touch"
            style={{
              backgroundColor: "#ffc823",
              borderRadius: "7px",
              border: "none",
              padding: "10px 20px 10px 20px",
              color: "black",
              fontWeight: "600",
              width: "max-content",
              fontSize: "1.1rem",
            }}
          />
        </div>
      </div>

      {/* Cards  */}
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="cards-wrapper">
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! "
          imgLink="https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg"
          userName="Praveen Kumar"
          jobRole="Head of SEO"
        />
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum Ipsam corrupti blanditiis dolorum Ipsam corrupti blanditiis dolorum!"
          imgLink="https://img.freepik.com/free-photo/smiley-man-with-headphones-front-view_23-2149915903.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702425600&semt=ais"
          userName="Rahul Meena"
          jobRole="@foodie123"
        />
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab!"
          imgLink="https://thumbs.dreamstime.com/b/asian-man-indian-origin-7252735.jpg"
          userName="Surya Rathore"
          jobRole="@apna_restaurant"
        />
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum!"
          imgLink="https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
          userName="Ravina Sharma"
          jobRole="@abc_institute"
        />
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima"
          imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93oMRTER91MjzLblgrupOjtjj__qVr37IOg&usqp=CAU"
          userName="Praveen Kumar"
          jobRole="Senior Consultant"
        />
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum!"
          imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2YuDK4qOQuEMLckUF1qBTdljrnuBqgjYIg&usqp=CAU"
          userName="Mahima Pal"
          jobRole="Influencer"
        />
        <Button
           title="more.."
           style={{
            backgroundColor: "#ffc823",
            borderRadius: "7px",
            border: "none",
            padding: "10px 20px 10px 20px",
            color: "black",
            fontWeight: "600",
            width: "max-content",
            fontSize: "1.1rem",
            marginTop : "20px"
          }}
        />
      </div>
    </div>
  );
};

export default CenterSection;
