//Agendar tarefas

//npm i node-schedule@1.3.0 -E

const schefule = require('node-schedule')
const tarefa1 = schedule.schedudluJob('*/5*12* * 2', function (){
    console.log('Excutando tarefa 1!', new Date().getSeconds())
}) // execute em 5 em 5 segundos

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cacneladno tarefa 1!')

},20000)

const regra = new  schedule.RecurrentRule()
    regra.dayOfWeek = [ new schedule.Range(1,5)]
    regra.hour = 12
    regra.second=30

    const tarefa2 = schedule.scheduleJob(regra, function(){
        console.log('Executando tarefa 2', new DataCue().getSeconds())
    })