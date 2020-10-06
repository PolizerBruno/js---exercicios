function preencher(valores){
    var nome = document.getElementById('search1_vCampo1');
    var cpf = document.getElementById('search1_vCampo2');
    var campeonato = document.getElementById('search1_vCampo3');
    var ano = document.getElementById('search1_vCampo4');
    var clube = document.getElementById('search1_vCampo5');
    var arq = document.getElementById('upLoadFile');

    nome.value = valores.Nome;
    cpf.value = valores.CPF;
    campeonato.value = valores.Campeonato;
    ano.value = valores.Ano;
    clube.value = valores.Clube;


}


valores =  
{
    "Nome": "RODRIGO COSTA DA SILVA",
    "CPF": "22720020800",
    "Clube": "PORTUGUESA ",
    "Campeonato": "BRASILEIRO",
    "Ano": "2003",
    "Path": "U:\\SAPESP_Importacao\\01 - Origem\\D. ARENA - ARQUIVOS DIGITALIZADOS\\RODRIGO COSTA DA SILVA CPF 227.200.208-00\\PORTUGUESA BRASILEIRAO 2003.jpeg"
},
preencher(valores);
