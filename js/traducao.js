function getLangResources() {
  // Define arrays how many language you want to translate
  var br = new Array();
  var en = new Array();

  br["sobre"] = "Sobre";
  en["sobre"] = "About";

  br["equipe"] = "Equipe";
  en["equipe"] = "Team";

  br["pesquisa"] = "Coleta de dados";
  en["pesquisa"] = "Survey";

  br["contato"] = "Contato";
  en["contato"] = "Contact";

  br["publicacoes"] = "Publicações";
  en["publicacoes"] = "Papers";

  br["title_main"] = "Avaliação da escrita inicial infantil";
  en["title_main"] = "Children's early spelling assessment";

  br["intro_main"] =
    "Pesquisa desenvolvida pelo PixelLab, no Instituto de Informática da Universidade Federal de Goiás. O objetivo foi desenvolver um meio para que as avaliações de escrita inicial infantil, usualmente feitas com lápis e papel, pudessem também ocorrer em dispositivos com telas sensíveis ao toque.";
  en["intro_main"] =
    "Research developed by PixelLab, at the Computer Science Institute - Federal University of Goiás, Brazil. We aim to develop a model for children's early spelling assessments, usually done with pencil and paper, to be also performed on touchscreens devices.";

  br["page_sobre_text"] =
    "O projeto Children Literacy Aid Tools (CLAT) surgiu como uma proposta de uso da tecnologia para auxiliar a fase de alfabetização infantil, especialmente na avaliação da escrita.";
  en["page_sobre_text"] =
    "Children Literacy Aid Tool (CLAT) project emerges as a proposal to use technology to assist the child literacy process, especially in the evaluation of writing.";

  br["page_historia_text"] =
    "No Pacto Nacional na Idade Certa (PNAIC), algumas Secretarias Municipais de Educação optaram por acompanhar o desenvolvimento do programa a partir de avaliações periódicas da escrita das crianças. Um determinado número de avaliações eram solicitadas aos professores bimestralmente. No entanto, por serem aplicadas individualmente, diversos professores encontravam dificuldades para a realização dessas avaliações, considerando:";
  en["page_historia_text"] =
    "National Pact for the Right Age (PNAIC) was an extensive national program in 2012 in Brazil. During this period, some Municipal Education Departments chose to monitor the program's development based on children's spelling periodic evaluations. These Departments request numerous evaluations from teachers bimonthly. However, because they were applied individually, several teachers faced difficulties in conducting these evaluations, considering:";

  br["li1"] = "- Salas de alfabetização com 20 ou mais crianças.";
  en["li1"] = "- Literacy rooms with 20 or more children.";

  br["li2"] =
    "- Necessidade de apoio de outros profissionais da escola para atividade paralela com o restante da turma enquanto o(a) professor(a) aplica a avaliação individualmente.";
  en["li2"] =
    "- Need for support from other school professionals for parallel activity with the rest of the class while the teacher applied the assessment individually.";

  br["li3"] = "- Organização manual dos registros das crianças.";
  en["li3"] = "- Manual organization of children's activities.";

  br["li4"] =
    "- Dificuldades de compartilhamento dos resultados com os diferentes profissionais que atuam com crianças nessa fase (psicólogos, fonoaudiólogos, psicopedagogos, entre outros).";
  en["li4"] =
    "- Difficulties in sharing the results with the different professionals who work with children in this phase (psychologists, speech therapists, so forth.)";

  br["li5"] =
    "Embora o projeto CLAT tenha surgido a partir do cenário do PNAIC, programa que foi descontinuado pelo governo federal recentemente, a realização de avaliações de escrita infantil continua sendo uma atividade cotidiana em salas de alfabetização.";
  en["li5"] =
    "Although the CLAT project emerged from the PNAIC scenario, a recently discontinued program by the Brazilian government, children's spelling evaluations' performance continues to be a daily activity in literacy rooms.";

  br["title_nossaproposta"] = "Nossa Proposta";
  en["title_nossaproposta"] = "Our Proposal";

  br["text_nossaproposta"] =
    "Desenvolvemos um meio para que as avaliações de escrita - tradicionalmente realizadas em papel - possam ser feitas em um ambiente digital também. Assim, o especialista cria atividades de escrita inicial a aplicação captura o registro manual da criança. O diferencial da nossa aplicação é que capturamos a escrita à mão e os especialistas podem personalizar completamente a atividade, inserindo a sua própria voz e figuras. Dependendo do dispositivo utilizado, a criança pode escrever com o próprio dedo ou com apoio de canetas sensíveis ao toque (mesas digitais, tablets ou smartphones).";
  en["text_nossaproposta"] =
    "We are developing a mode for spelling assessments - traditionally done on paper - can be done in a digital environment as well. Thus, the professional creates early spelling activities, and the app captures the child's handwritten record. Our differential is that we capture the handwriting and the experts can completely customize the activity by inserting their own voices and pictures. Depending on the device used, the child can write with their own finger or with support from touch-sensitive pens (digital tablets, tablets or smartphones).";

  br["text_nossap2"] =
    "CLAT armazena sinais estratégicos de avaliação para os especialistas. Além do traçado manual da criança, mostramos também os gestos que ela realizou para leitura do que escreveu. Ao final da atividade, um relatório é gerado, similar ao que os especialistas usam na abordagem manual (com papel e lápis).";
  en["text_nossap2"] =
    "CLAT registers strategic evaluation signs for the specialists, besides the child's manual tracing, also the gestures she made to read what she wrote. When the activity is over, the application generates a report. This report is similar to what the experts use in the paper-based approach.";

  br["apresentacoes"] = "Apresentações";
  en["apresentacoes"] = "Presentation";
  br["apoio"] = "Apoio";
  en["apoio"] = "Support";

  br["student"] = "Discente";
  en["student"] = "Student";

  br["egressa"] = "Egressa";
  en["egressa"] = "Alumni";

  br["teacher"] = "Professora Colaboradora";
  en["teacher"] = "Supervisor";

  br["orientador"] = "Professor Orientador";
  en["orientador"] = "Supervisor";

  br["pesquisa1"] =
    "No período de abril a junho de 2020, realizamos duas pesquisas on-line, uma tendo como público-alvo pais e responsáveis por crianças de 4 a 7 anos de idade e outra pesquisa para profissionais que atuam com crianças em fase de alfabetização.";
  en["pesquisa1"] =
    "From April to June 2020, we conducted two online surveys, one targeting parents and caregivers of children aged 4 to 7 years and another survey for professionals working with children in the literacy phase.";

  br["pesquisa2"] =
    "Aos pais e/ou responsáveis realizamos perguntas para entender a experiência de ensino remoto durante a pandemia de COVID-19 com crianças em fase inicial de escrita. Já para os profissionais, o nosso objetivo foi entender como ocorrem as atividades de escrita infantil e, principalmente, como são feitas as avaliações de escrita infantil.";
  en["pesquisa2"] =
    "We ask parents or guardians questions to understand the remote teaching experience during the COVID-19 pandemic with children in their early writing stages. For professionals, our goal was to understand how children's spelling activities take place and, mostly, how children's spelling assessments are made.";

  br["confira"] = "Confira a síntese das pesquisas nas páginas abaixo:";
  en["confira"] = "Check out the summary of research on the pages below:";

  br["pesquisa_link"] = "Pesquisa com profissionais";
  en["pesquisa_link"] = "Professionals survey";

  br["pesquisa_link2"] = "Pesquisa com mães, pais ou responsáveis";
  en["pesquisa_link2"] = "Mothers, fathers or guardians survey";

  br["publicacoes_aceito"] = "Artigos aceitos";
  en["publicacoes_aceito"] = "Accepted papers";

  br["publicacoes_premio"] = "Premiação";
  en["publicacoes_premio"] = "Award";

  br["premio_descricao"] =
    "Melhor trabalho do V Prêmio Luiz Fernando de Computação, oferecido pela Comissão Especial da SBC para Sistemas Multimídia e Web (CE-WebMedia)";
  en["premio_descricao"] =
    "Best work of the V Luiz Fernando Computer Award, offered by SBC's Special Commission for Multimedia and Web Systems (CE-WebMedia)";

  br["midia"] = "Na Mídia";
  en["midia"] = "News";

  br["mensagem"] = "Envie-nos uma mensagem";
  en["mensagem"] = "Send us a message";

  br["email"] = "E-mail";
  en["email"] = "Email";

  br["texto"] = "Mensagem";
  en["texto"] = "Message";

  br["enviar"] = "Enviar";
  en["enviar"] = "Send";

  // Added new array defined arrays.
  var resources = new Array();
  resources["br"] = br;
  resources["en"] = en;

  return resources;
}

function changeLanguage(lng) {
  var resources = getLangResources()[lng];

  $("a[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("h1[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("h2[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("h3[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("span[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("p[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $("button[name='translate']").each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });

  $("input[name='email']").each(function (i, elt) {
    document.getElementById("name").placeholder = resources["email"];
  });

  $("input[name='translate']").each(function (i, elt) {
    document.getElementById("btnEnviar").value = resources["enviar"];
  });

  $("textarea[name='mensagem']").each(function (i, elt) {
    document.getElementById("texto").placeholder = resources["texto"];
  });
}

$(function () {
  // Default Language
  changeLanguage("br");

  $("#br_button").click(function () {
    changeLanguage("br");
  });

  $("#eng_button").click(function () {
    changeLanguage("en");
  });
});
