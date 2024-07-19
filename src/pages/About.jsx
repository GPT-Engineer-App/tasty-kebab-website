const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Kebab Delight</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Founded in 2010, Kebab Delight has been serving authentic Mediterranean cuisine to food lovers in the heart of the city. Our passion for traditional recipes and commitment to using the freshest ingredients has made us a favorite among locals and tourists alike.
        </p>
        <img src="/images/restaurant.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg mb-4" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-4">
          At Kebab Delight, our mission is to bring the rich flavors and culinary traditions of the Mediterranean to your table. We strive to create a warm and welcoming atmosphere where every guest feels like family.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { image: "/images/kebab1.jpg", name: "Chef Ali", position: "Head Chef" },
            { image: "/images/kebab2.jpg", name: "Maria", position: "Restaurant Manager" },
            { image: "/images/kebab3.jpg", name: "Hassan", position: "Sous Chef" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;