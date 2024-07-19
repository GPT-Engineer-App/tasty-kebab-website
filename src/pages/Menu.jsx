import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuPage = () => {
  const menuSections = [
    {
      title: "Starters",
      items: [
        { name: "Hummus", description: "Creamy chickpea dip with olive oil", price: "$5.99", image: "/images/hummus.jpg", dietary: ["Vegetarian", "Vegan"] },
        { name: "Falafel", description: "Deep-fried chickpea balls", price: "$6.99", image: "/images/falafel.jpg", dietary: ["Vegetarian", "Vegan"] },
        { name: "Baba Ganoush", description: "Smoky eggplant dip with tahini", price: "$6.99", image: "/images/baba-ganoush.jpg", dietary: ["Vegetarian", "Vegan"] },
        { name: "Tabbouleh", description: "Refreshing parsley and bulgur salad", price: "$7.99", image: "/images/tabbouleh.jpg", dietary: ["Vegetarian", "Vegan"] },
      ],
    },
    {
      title: "Main Course",
      items: [
        { name: "Chicken Kebab", description: "Grilled marinated chicken chunks", price: "$12.99", image: "/images/chicken-kebab.jpg" },
        { name: "Lamb Kebab", description: "Tender lamb pieces with special spices", price: "$14.99", image: "/images/lamb-kebab.jpg" },
        { name: "Beef Shawarma", description: "Thinly sliced seasoned beef in pita", price: "$13.99", image: "/images/beef-shawarma.jpg" },
        { name: "Vegetable Moussaka", description: "Layered eggplant and potato casserole", price: "$11.99", image: "/images/vegetable-moussaka.jpg", dietary: ["Vegetarian"] },
      ],
    },
    {
      title: "Sides",
      items: [
        { name: "Greek Salad", description: "Fresh vegetables with feta cheese", price: "$8.99", image: "/images/greek-salad.jpg", dietary: ["Vegetarian"] },
        { name: "Stuffed Grape Leaves", description: "Rice-filled vine leaves", price: "$7.99", image: "/images/stuffed-grape-leaves.jpg", dietary: ["Vegetarian", "Vegan"] },
        { name: "Pita Bread", description: "Freshly baked flatbread", price: "$2.99", image: "/images/pita-bread.jpg", dietary: ["Vegetarian", "Vegan"] },
        { name: "Tzatziki", description: "Yogurt cucumber dip", price: "$4.99", image: "/images/tzatziki.jpg", dietary: ["Vegetarian"] },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Baklava", description: "Sweet pastry with nuts and honey", price: "$4.99", image: "/images/baklava.jpg", dietary: ["Vegetarian"] },
        { name: "Rice Pudding", description: "Creamy rice dessert with cinnamon", price: "$3.99", image: "/images/rice-pudding.jpg", dietary: ["Vegetarian"] },
        { name: "Kunafa", description: "Sweet cheese pastry with rose syrup", price: "$5.99", image: "/images/kunafa.jpg", dietary: ["Vegetarian"] },
        { name: "Turkish Delight", description: "Soft candy cubes with various flavors", price: "$3.99", image: "/images/turkish-delight.jpg", dietary: ["Vegetarian"] },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
      <Tabs defaultValue="Starters" className="w-full">
        <TabsList className="mb-8 flex justify-center">
          {menuSections.map((section) => (
            <TabsTrigger key={section.title} value={section.title} className="px-4 py-2">
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {menuSections.map((section) => (
          <TabsContent key={section.title} value={section.title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <Card key={item.name} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-lg font-semibold text-green-600">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    {item.dietary && (
                      <div className="flex gap-2">
                        {item.dietary.map((diet) => (
                          <Badge key={diet} variant="secondary">
                            {diet}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuPage;