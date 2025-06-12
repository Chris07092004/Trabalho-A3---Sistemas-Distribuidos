class Time {
    constructor(id, nome, federacao, catagorias) {
        this.id = id;
        this.nome = nome;
        this.federacao = federacao;
        this.categorias = json.categorias;
    }
    static buildFromJSON(json) {
        let ret = new Time();
        ret.id = json.id;
        ret.nome = json.nome;
        ret.federacao = json.federacao;
        ret.categorias = json.categorias;
        return ret;
    }
    addCategoria(cat) {
        this.categorias.push(cat);
    }
    temCategoria(cat) {
        let idx = this.categorias.indexOf(cat);
        return idx >=0;
    }
}
export default Time;