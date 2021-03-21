$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/cucumber/scenarios/teste_stefanini.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "\tEu como usuário do sistema.\n\tDESEJO realizar o cadastro de novos usuários.\n\tPARA QUE seja possível armazenar e gerenciar seus dados.",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarUsuario.queEstouAcessandoATelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário sem nome",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "informo o e-mail \"david@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.informoOEMail(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:882)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:104)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:71)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat com.cucumber.core.Element.criarElemento(Element.java:26)\r\n\tat com.cucumber.core.Element.sendKeys(Element.java:46)\r\n\tat com.cucumber.pages.CadastroDeUsuariosPage.escreverNome(CadastroDeUsuariosPage.java:18)\r\n\tat com.cucumber.scenarios.CadastrarUsuario.informoOEMail(CadastrarUsuario.java:78)\r\n\tat ✽.informo o e-mail \"david@gmail.com\"(classpath:com/cucumber/scenarios/teste_stefanini.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informo a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.informoASenha(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuario.clicoEmCadastrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "visualizo mensagem de erro sem nome \"O campo Nome é obrigatório.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastrarUsuario.visualizoMensagemDeErroSemNome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarUsuario.queEstouAcessandoATelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário sem e-mail",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "informo o nome completo \"David Oliveira\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.informoONomeCompleto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.informoASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuario.clicoEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo mensagem de erro sem email \"O campo E-mail é obrigatório.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastrarUsuario.visualizoMensagemDeErroSemEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
