import Item from "./models/item"

export const handleHome = async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    return res.render("home", { pageTitle: "Home", items });

};
export const handleTest = (req, res) => res.render("test");