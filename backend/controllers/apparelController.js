
const Apparel = require('../models/Apparel');

// Submit apparel information
exports.submitApparel = async (req, res) => {
    const { type, condition, contactInfo } = req.body;

    try {
        // Create a new apparel entry with the submitted data
        const newApparel = new Apparel({
            type,
            condition,
            contactInfo,
            // The dateSubmitted will automatically be set by the schema, so no need to include it here
        });

        // Save the new apparel entry to the database
        await newApparel.save();

        // Respond with a success message
        res.status(201).json({ message: 'Apparel submitted successfully' });
    } catch (err) {
        // Respond with an error message in case of failure
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
