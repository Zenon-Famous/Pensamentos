const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('pensamentos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conctado com sucesso')
}catch(err) {
    console.log(`não foi possivel conectar: ${err}`)
}

module.exports = sequelize