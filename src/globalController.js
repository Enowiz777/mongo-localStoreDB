import Item from "./models/item"


// Find the item from the DB and return the Data.
// Send the data to views.
export const handleHome = async (req, res) => {
    const items = await Item.find({});
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

export const getEdit = async (req, res) => {
    // get Id from params
    const { Id } = req.params;
    // find the item with the id
    let item;
    if (Id.match(/^[0-9a-fA-F]{24}$/)) {
        item = await Item.findOne({ _id: Id })
    } else {
        return res.render("404", { pageTitle: "Video not found." });
    }

    if (!item){
        return res.render("404", { pageTitle: "Video not found." });
    } 

    return res.render("edit", { pageTitle: `Edit:`, item });
}

export const postEdit = async (req, res) =>  {
    // get the Id from the param
    const { id } = req.params;
}