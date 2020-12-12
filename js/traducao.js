function getLangResources(){
    
    // Define arrays how many language you want to translate
    var br = new Array();
    var en = new Array();

    br['sobre'] = "Sobre"; 
    en['sobre'] = "About";
    
    br['equipe'] = "Equipe"; 
    en['equipe'] = "Team";

    br['pesquisa'] = "Pesquisa com usuários"; 
    en['pesquisa'] = "User research";

    br['contato'] = "Contato"; 
    en['contato'] = "Contact";

    br['publicacoes'] = "Publicações"; 
    en['publicacoes'] = "Papers";

    br['title_main'] = "Avaliação da escrita infantil"; 
    en['title_main'] = "Children's spelling assessment";
    
    br['intro_main'] = "Pesquisa desenvolvida pelo PixelLab, no Doutorado em Ciência da Computação do Instituto de Informática - Universidade Federal Goiás. O objetivo é desenvolver um método para auxiliar na condução de sessões automatizadas de ditado de palavras para crianças em fase inicial de alfabetização.";
    en['intro_main'] = "Research developed by PixelLab, at the Computer Science PhD course from Federal University of Goiás, Brazil. The goal is to develop a method to assist in conducting automated dictation sessions for children in the early stages of literacy.";


    
    // Added new array defined arrays.
    var resources = new Array();
    resources['br'] = br;
    resources['en'] = en;
    
    return resources;
}

function changeLanguage(lng){
var resources = getLangResources()[lng];

$("a[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h1[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h3[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("span[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("p[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("button[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
}


$(function() { 
    // Default Language
    changeLanguage("br");
 
    $("#br_button").click(function(){
        changeLanguage("br");
    });

    $("#eng_button").click(function(){
        changeLanguage("en");
    });
});