
// requiring model 
const url  = require('../model/model.js');
const shortidget = require('shortid');
// creating route for posting url and creating a query in database and generating shortid for it
async function handlegeneratenewshorturl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error : " url is required"})
    const shortid  = shortidget.generate(8);
    await url.create({
shortid:shortid,
redirecturl:body.url,
visithistory:[],


    });
    return res.json({id :shortid});
}
// function for redirecting to the actual url
async function redirecttoactualurl(req, res) {
    const shortidredirect = req.params.shortid;

    try {
        // Find the entry and push the current timestamp into the visit history
        const entry = await url.findOneAndUpdate(
            { shortid: shortidredirect }, // Correct the query to match the field name
            { $push: { visithistory: { timestamp: Date.now() } } }, // Wrap timestamp in an object
            { new: true } // Return the updated document
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Redirect to the actual URL
        res.redirect(entry.redirecturl);
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}
// function for getting analytics
async function getanalytics(req, res) {
    const shortidanalytics = req.params.shortid;

    try {
        // Use the correct key in the query
        const result = await url.findOne({ shortid: shortidanalytics });

        // Check if result is found
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Safely access the visit history
        return res.json({ totalClicks: result.visithistory.length });
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}



// exporting functions
module.exports ={

    handlegeneratenewshorturl,redirecttoactualurl,getanalytics

};