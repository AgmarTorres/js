function tratarErroELancar(erro){
    throw new Error('... ')
}

function imprimirNomeGritado(obj){
   
    try{ 
          console.log(obj.nome.toUpperCase() + ' !!!!!')
    }catch(e){
        tratarErroELancar(e);
    }finally{ //executa de qualquer forma no try ou no catch
        console.log('final')

    }
}

const obj = {nome: 'Agmar'}
imprimirNomeGritado(obj)