
class CalculatorController {
    sum(req, res) {
        try {
            const params = req.body.params;
            const result = params.reduce((acc, curr) => acc + curr, 0);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
    subtraction(req, res) {
        try {
            const params = req.body.params;
            const result = params.reduce((acc, curr) => acc - curr);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
    multiply(req, res) {
        try {
            const params = req.body.params;
            const result = params.reduce((acc, curr) => acc * curr);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
    division(req, res) {
        try {
            const params = req.body.params;
            const result = params.reduce((acc, curr) => acc / curr);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
}

const calculatorController = new CalculatorController;

export default calculatorController;
