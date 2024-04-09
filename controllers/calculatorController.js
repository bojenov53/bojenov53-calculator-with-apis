const sum = (req, res) => {
    try {
        const params = req.body.params;
        const result = params.reduce((acc, curr) => acc + curr, 0);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const subtraction = (req, res) => {
    try {
        const params = req.body.params;
        const result = params.reduce((acc, curr) => acc - curr);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const multiply  = (req, res) => {
    try {
        const params = req.body.params;
        const result = params.reduce((acc, curr) => acc * curr);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const division = (req, res) => {
    try {
        const params = req.body.params;
        const result = params.reduce((acc, curr) => acc / curr);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { sum, subtraction, multiply, division };
