const Calculation = require('./../model/Calculation.js')


module.exports  = {
    async create(req,res){
        const calc = req.body;
        try {
            const result = eval(calc.values)
            const calculation = {
                name: calc.name,
                values: calc.values,
                result: result
            }
            Calculation.create(calculation);
            res.status(200).send({message: "Calculo realizado com successo!", result: result})
        } catch(err) {
            res.status(400).send({message: "Não foi possível realizar o calculo!"})
        }
    },
    async findAll(req,res){
        const calcs = await Calculation.findAll({
            raw: true
        }).then(result => result);
        res.render("calculations", {calculations: calcs});
    }
}