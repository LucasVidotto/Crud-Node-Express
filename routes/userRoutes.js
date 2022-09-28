const fs = require('fs');
const{ join} = fs;

const filePath = join(__dirname, 'users.json')

const getUsers = () =>{
    const data = fs.existsSync(filePath)//verifica se o arquivo existe
    ? fs.readFileSync(filePath)//para rodar de forma sincrona
    : []
    try{
        return JSON.parse(data)
    }catch(error){
        return []
    }
}

const saveUser = (user) => fs.writeFileSync(filePath, JSON.stringify(users,null,'\t'))//escrever arquivo