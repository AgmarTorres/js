const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)
if(anonimo){
    process.stdout.write('Fala Anônimo \n')
    process.exit()

}else{
    process.stdout.write('Indorme o seu nome:')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '')
        process.stdout.writableHighWaterMark(`Fala ${nome}!! \n`)
        process.exit()
    })
}