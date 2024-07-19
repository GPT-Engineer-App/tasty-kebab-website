import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MenuPage = () => {
  const menuSections = [
    {
      title: "Starters",
      items: [
        { name: "Hummus", description: "Creamy chickpea dip with olive oil", price: "$5.99", image: "/images/kebab1.jpg" },
        { name: "Falafel", description: "Deep-fried chickpea balls", price: "$6.99", image: "/images/kebab2.jpg" },
      ],
    },
    {
      title: "Main Course",
      items: [
        { name: "Chicken Kebab", description: "Grilled marinated chicken chunks", price: "$12.99", image: "/images/kebab3.jpg" },
        { name: "Lamb Kebab", description: "Tender lamb pieces with special spices", price: "$14.99", image: "/images/kebab1.jpg" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Baklava", description: "Sweet pastry with nuts and honey", price: "$4.99", image: "/images/kebab2.jpg" },
        { name: "Rice Pudding", description: "Creamy rice dessert with cinnamon", price: "$3.99", image: "/images/kebab3.jpg" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
      {menuSections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">{item.price}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuPage;