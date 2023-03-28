import Item from "./models/item"


// Find the item from the DB and return the Data.
// Send the data to views.
export const handleHome = async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    return res.render("home", { pageTitle: "Home", items });

};

// Handle the addition for the POST request to HOME.
export const handleAdd = async (req, res) => 
{

// take the data from the req.body
const { 
    title, 
    manufacturer, 
    distributer, 
    description,
    count,
    price,
} = req.body;

// make an item object and store Item data. Mongoose will validate the data shape or a schema. 
/*
const item = new Item({
    title: title,
    manufacturer: manufacturer,
    distributer: distributer,
    description: description,
    createdAt: Date.now(),
    count: count,
    price: price,
})
*/

try {
    await Item.create({
        title: title,
        manufacturer: manufacturer,
        distributer: distributer,
        description: description,
        createdAt: Date.now(),
        count: count,
        price: price,
    });
    return res.redirect("/");
    } catch (error) {
        return res.render("/", {
            pageTitle: "Home",
            errorMessage: error._message,
          });
    }
};
// Handle Edit

export const handleEdit = async (req, res) => {
    console.log(req.params);
    return res.render("edit", { pageTitle: "Edit"});
}