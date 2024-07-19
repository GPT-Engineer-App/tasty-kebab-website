import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-orange-50 to-yellow-50">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-orange-600"
      >
        About Kebab Delight
      </motion.h1>
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-orange-500">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Founded in 2010, Kebab Delight has been serving authentic Mediterranean cuisine to food lovers in the heart of the city. Our passion for traditional recipes and commitment to using the freshest ingredients has made us a favorite among locals and tourists alike.
        </p>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src="/images/restaurant.jpg" alt="Kebab Delight restaurant interior" className="w-full h-64 object-cover" />
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-orange-500">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Kebab Delight, our mission is to bring the rich flavors and culinary traditions of the Mediterranean to your table. We strive to create a warm and welcoming atmosphere where every guest feels like family.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-500">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { image: "/images/kebab1.jpg", name: "Chef Ali", position: "Head Chef" },
            { image: "/images/kebab2.jpg", name: "Maria", position: "Restaurant Manager" },
            { image: "/images/kebab3.jpg", name: "Hassan", position: "Sous Chef" }
          ].map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-orange-500">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;