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
    const item = await Item.findById(Id).exec();
    console.log(item);
    


      return res.render("edit", { pageTitle: `Edit: ${video.title}`, item });
}

export const postEdit = async (req, res) =>  {
    // get the Id from the param
    const { id } = req.params;
}