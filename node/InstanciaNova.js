//Uma Factory exporta uma nova instância

module.exports = () =>{
    return {
        valor : 1,
        inc(){
            this.valor ++;
        }
    }
}