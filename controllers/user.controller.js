const getUsers = (req, res) => {
    res.json({msg: 'Get API desde el controlador'});
}
const postUser = (req, res) => {
    const user = req.body;
    res.status(201).json({ 
        msg: "Post API desde el controlador",
        user });
}

const putUser = (req, res) => {
    const query = req.query;
    const id = req.params;
    res.json({ 
        msg: "Put API desde el controlador",
        id,
        query});
}

const deleteUser = (req, res) => {
    res.json({ msg: "Delete API desde el controlador" });
}

const patchUser = (req, res) => {
    res.json({ msg: "Patch API desde el controlador" });
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    patchUser
}