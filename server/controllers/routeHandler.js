import Input from "../models/inputModel.js"

export const getInput = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const message = req.body.message;

    const newInput = new Input({
        name,
        phone,
        email,
        message
    })

    newInput.save();
}