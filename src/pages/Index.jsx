import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative h-[500px] rounded-lg overflow-hidden mb-12">
        <img src="/images/restaurant.jpg" alt="Kebab Delight restaurant interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Kebab Delight</h1>
            <p className="text-xl text-white mb-6">Experience the authentic taste of Mediterranean cuisine</p>
            <Button size="lg">Order Now</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg text-muted-foreground">
          Kebab Delight brings the rich flavors of Mediterranean cuisine to your table. Our passion for authentic recipes and fresh ingredients ensures an unforgettable dining experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { image: "/images/kebab1.jpg", title: "Chicken Kebab Plate" },
            { image: "/images/kebab2.jpg", title: "Grilled Beef Kebab" },
            { image: "/images/kebab3.jpg", title: "Vegetarian Kebab Skewer" }
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground">A mouth-watering blend of spices and tender ingredients, grilled to perfection.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <Card key={item}>
              <CardContent className="pt-6">
                <p className="italic mb-4">"The best kebabs I've ever tasted! The flavors are incredible and the service is top-notch."</p>
                <p className="font-semibold">- Happy Customer {item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;