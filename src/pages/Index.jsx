import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const testimonials = [
    {
      quote: "The best kebabs I've ever tasted! The flavors are incredible and the service is top-notch.",
      name: "Sarah Johnson",
      image: "/images/avatar1.jpg",
    },
    {
      quote: "Kebab Delight never disappoints. Their vegetarian options are just as delicious as the meat dishes.",
      name: "Michael Chen",
      image: "/images/avatar2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative h-[500px] rounded-lg overflow-hidden mb-12">
        <img src="/images/restaurant.jpg" alt="Kebab Delight restaurant interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to Kebab Delight
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white mb-6"
            >
              Experience the authentic taste of Mediterranean cuisine
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg">Order Now</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/images/chef.jpg" alt="Our Chef" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Kebab Delight brings the rich flavors of Mediterranean cuisine to your table. Our passion for authentic recipes and fresh ingredients ensures an unforgettable dining experience. With a team of skilled chefs and a warm, inviting atmosphere, we strive to make every visit special.
            </p>
            <Button className="mt-4" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { image: "/images/kebab1.jpg", title: "Chicken Kebab Plate" },
            { image: "/images/kebab2.jpg", title: "Grilled Beef Kebab" },
            { image: "/images/kebab3.jpg", title: "Vegetarian Kebab Skewer" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="p-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <p className="text-muted-foreground">A mouth-watering blend of spices and tender ingredients, grilled to perfection.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={ref}>
        <h2 className="text-3xl font-semibold mb-6">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: index * 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;