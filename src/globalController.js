import Item from "./models/item"


// Find the item from the DB and return the Data.
// Send the data to views.
export const handleHome = async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    return res.render("home", { pageTitle: "Home", items });

};
export const handleAdd = (req, res) => 
{

const { 
    title, 
    manufacturer, 
    distributer, 
    description,
    count,
    price,
} = req.body;

const item = new Item({
    title: title,
    manufacturer: manufacturer,
    distributer: distributer,
    description: description,
    createdAt: Date.now(),
    count: count,
    price: price,
})
console.log(item);
return res.redirect("/");
};
// Upload data
