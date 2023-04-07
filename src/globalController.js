import Item from "./models/item"

export const searchRoute = async (req, res) =>{
    // console.log(req);
    const query = req.query.search;
    const items = await Item.find({ title: query});
    return res.render("home", { pageTitle: "Home", items });

};

export const sortRoute = async (req, res) => {
    let url = req._parsedUrl.pathname;
    let result = url.substring(1, url.length);
    const items = await Item.find({}).sort(result);
    return res.render("home", { pageTitle: "Home", items });

};


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
    price,
    unit,
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
        price: price,
        unit: unit,
    });
    return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.render("/", {
            pageTitle: "Home",
            errorMessage: error._message,
          });
    }
};


// Controller that handle Edit - PUT and POST.

export const getEdit = async (req, res) => {
    // get Id from params
    const { Id } = req.params;
    // item data variable.
    let item; 

    // validate ID string.
    if (Id.match(/^[0-9a-fA-F]{24}$/)) {
        // find the item with the Id
        item = await Item.findOne({ _id: Id })
    } else {
        return res.render("404", { pageTitle: "Video not found." });
    }

    // If item is not found with the ID, return the 404 page.
    if (!item){
        return res.render("404", { pageTitle: "Video not found." });
    } 
    return res.render("edit", { pageTitle: `Edit:`, item });
}

export const postEdit = async (req, res) =>  {
    // get the Id from the param
    const { Id } = req.params;
    
    // get the inputs that users typed
    const { 
        title, 
        manufacturer, 
        distributer, 
        description,
        price,
        unit,
    } = req.body;

    // create a filter and update
    const filter = { _id: Id};
    const update = { 
        title: title,
        manufacturer: manufacturer,
        distributer: distributer,
        description: description,
        price: price,
        unit: unit,
    };

    // You should set the new option to true to return the document after update was applied.
    try {
        await Item.findOneAndUpdate( filter, update, {
            new: true
        });
    } catch (error) {
        console.log("error:", error);
    }

    return res.redirect("/");
}

// Delete Controller - POST and GET

export const postDelete = async (req, res) =>  {

    // get id
    const { Id } = req.params;
    let itemDeleted;

    // validate ID string.
    if (Id.match(/^[0-9a-fA-F]{24}$/)) {
        // delete a record from the DB.
        itemDeleted = await Item.findByIdAndDelete(Id);
        console.log(itemDeleted);
    } else {
        return res.render("404", { pageTitle: "Video not found." });
    }

    return res.redirect("/");
}