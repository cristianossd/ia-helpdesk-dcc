/*
 * States structure
 *
 * title: resource title
 * content: resource content
 * related: array with related resources references
 * link: resource addr in DCC/UFBA page
 *
 */

var tutorials = {
  'init': {
    title: 'Initial page',
    related: [0, 3, 5, 8, 14, 16, 18, 21, 24]
  },

  0: {
    title: 'Arquivos pessoais',
    content: 'Como acessar seus arquivos de fora da rede. Página pessoal no' +
             'www.dcc.ufba.br',
    related: [1, 2]
  },

  1: {
    title: 'Como acessar seus arquivos de fora da rede',
    content: 'Assim se torna necessário a existência de um programa cliente que se ' +
             'comunique com nosso servidor no protocolo SSH para usar o serviço SFTP. ' +
             'Tais programas clientes variam entre os sistemas operacionais existentes, ' +
             'podendo existir mais de uma opção. ' +
             'Acessando no GNU/Linux através de programas gráficos ' +
             'Existem algumas possibilidades de acessar seus arquivos por programas ' +
             'gráficos no GNU/Linux, o programa gFTP ou seu navegador de arquivos como o ' +
             'Nautilus ou Konqueror, dispõem de funcionalidades interessantes. ' +
             'Configuração do gFTP ' +
             'Utilizaremos o gFTP para acessar pelo protocolo SFTP, anteriormente ' +
             'esclarecido, para isso devemos informar: ' +
             'Em seguida, basta acessar o botão marcado em azul para efetuar a conexão. ' +
             'Assim na marcação em amarelo estarão seus arquivos no servidor da rede DCC, ' +
             'já na marcação em verde estarão seus arquivos no seu computador pessoal. ' +
             'Para realizar transferências entre as áreas, basta usar os botões em forma ' +
             'de seta ou o recurso de arrastar e soltar. ' +
             'Configuração do Nautilus ' +
             'Acessando no GNU/Linux através de comandos: ' +
             'No GNU/Linux a instalação do pacote _ssh_ provém uma série de comandos como ' +
             'os descritos na tabela abaixo: ' +
             'Para utilizar estes comandos sugerimos a leitura do manual de cada um: _man ' +
             'ssh, man scp, man sftp_. ' +
             'Acessando no Microsoft Windows ' +
             'Como o já explicado, o acesso aos arquivos em nossos servidores só pode ser ' +
             'feito via protocolo SSH. Como este é um protocolo nativo Linux, não podemos ' +
             'usar aplicações Windows comuns de FTP. Encontramos o programa freeware WinSCP ' +
             '(http://winscp.net/eng/index.php) que fornecesuporte a scp e sftp para ' +
             'Windows. Para baixar o instalável clique aqui. ' +
             'Com o programa aberto, marque a opção SFTP (allow SCP fallback) para permitir ' +
             'ver seus arquivos e fazer transferências servidor-cliente e cliente-servidor ' +
             'e preencha: Host name: homes.dcc.ufba.br Port: 22 (padrão) User name: ' +
             'seulogin Password: suasenha ' +
             'Para copiar arquivos, basta arrastar o arquivo de uma janela para a outra. ' +
             'Também pode-se apagar, copiar e mover arquivos, criar diretórios, etc. ' +
             'Enfim, o programa é bem completo e há muitas coisas para se explorar! ' +
             'Para deslogar, basta ir em Session >> Disconect ou pressionar Ctrl+Shift+D. ' +
             'Foi usado Microsoft Windows XP ® Pack 2.',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1210034088',
    related: [2]
  },

  2: {
    title: 'Página pessoal no www.dcc.ufba.br',
    content: 'Atenção: Os procedimentos descritos a seguir assume que você esta fazendo ' +
             'uso de uma das máquinas do DCC. ' +
             'Observação ' +
             'Veja que, como a montagem de HOMES é feita em /home/usuario/ArquivosDCC, ' +
             'todo o processo abaixo refere-se a esse diretório pois estamos considerando ' +
             'que o usuário está logado em alguma de nossas máquinas clientes. Note ' +
             'também que esse tutorial pode ser muito bem aplicado a outros servidores ' +
             'da rede (como quem usa app.dcc.ufba.br, por exemplo) bastando apenas ' +
             'remover o ArquivosDCC do processo. ' +
             'O Apache2 (www.apache.org) é o servidor Web de plataforma livre usado em ' +
             'nossos servidores. Dentre outras coisas, ele disponibiliza aos usuários do ' +
             'computador em que ele está instalada páginas pessoais. ' +
             'Para isso basta que seja criado um diretorio chamado public_html em seu ' +
             'home, uma pasta /home/usuario/ArquivosDCC/public_html. Deste modo, se o ' +
             'Apache receber o pedido http://www.dcc.ufba.br/~usuario, ele ira buscar o ' +
             'diretorio/arquivo em /home/usuario/ArquivosDCC/public_html/ que poderá ' +
             'conter uma página web completa. Caso não exista um arquivo index.html ' +
             'então, ao chamar a página via Web, o Apache irá mostrar os arquivos ' +
             'presentes nessa pasta. ' +
             'Como fazer ' +
             'Para que tal recurso funcione deve-se simplesmente ter uma pasta public_html ' +
             'em seu home e dar as devidas permissões à ela. Primeiramente, crie a pasta ' +
             'public_html. ' +
             'Atualização: Senão, tente os comandos abaixo e atualize a página ' +
             '(homes.dcc.ufba.br/~usuario) do navegador ' +
             'OBS: Se não estiver logado em uma máquina do laboratório de estudos do DCC ' +
             '(Sala 147 do IM), siga este Tutorial. Você terá acesso a seus arquivos da ' +
             'conta DCC de fora da rede e logo após isso execute os comandos acima, ' +
             'tudo via terminal do Linux. ' +
             'Além disto, qualquer usuário tem que ter permissão de leitura e execução ' +
             'na pasta public_html, assim como em todas as suas subpastas. Assim, caso ' +
             'não tenhamos diretório/arquivo index.html, ele listará todos os arquivos, ' +
             'mas só estarão disponíveis para download e/ou visualização aqueles que ' +
             'tiverem permissão de leitura. ' +
             'Logado em uma das maquinas disponíveis nos laboratórios da rede DCC, no ' +
             'terminal, recomendamos que seja feito: ' +
             'Assim, todo o conteúdo presente nesta pasta estará disponível em ' +
             'http://www.dcc.ufba.br/~usuario. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1210041395',
    related: []
  },

  3: {
    title: 'Certificado de segurança',
    content: 'Certificado de Segurança do DCC/UFBA',
    related: [4]
  },

  4: {
    title: 'Certificado de Segurança do DCC/UFBA',
    content: 'Para reforçar a segurança de acesso aos diversos serviços da rede, as ' +
             'máquinas que implementam esses serviços são configuradas com certificados ' +
             'de segurança que permitem a identificação de cada máquina exclusivamente. ' +
             'Para que seu computador possa se beneficiar dessa segurança, você deve ' +
             'configurá-lo para que reconheça esses certificados. Isso é feito pela ' +
             'instalação do Certificado Raiz (também chamado de Autoridade Certificadora ' +
             '(Certified Authority - CA)) do Departamento de Ciência da Computação da ' +
             'UFBA. ' +
             'Uma vez que ele esteja instalado, seu sistema será capaz de autenticar ' +
             'qualquer servidor legítimo do Departamento. Isso porque os servidores ' +
             'usam certificados individuais gerados a partir do certificado raiz.' +
             'Atualmente, a autoridade que autentica os certificados dos servidores ' +
             'do DCC é a CAcert. Assim, é necessário que cada cliente da rede DCC ' +
             'instale o certificado raiz da cacert.org para se beneficiar da segurança ' +
             'proposta por este tipo de certificação. ' +
             'Abaixo fizemos um pequeno texto ensinando como instalar tal certificado. ' +
             'Recomendações para a Instalação do Certificado (IMPORTANTE) ' +
             'Os passos para instalação do certificado são bastante simples. Neste ' +
             'exemplo, é usado a instalação do certificado para webmail da rede DCC, ' +
             'e o browser Mozilla Firefox 3.0 (Iceweasel): ' +
             '1 - Conecte-se a webmail, uma tela semelhante a esta será mostrada, ' +
             'clique em "*Entendo os riscos*" ' +
             '2 - Agora o navegador da a opção de adicionar o certificado de segurança ' +
             'do site sob sua responsabilidade, clique no botão "Adicionar exceção...". ' +
             '3 - Na cacha "Adicionar exceção de segurança", Você tem a opção de verificar ' +
             'o certificado do site, clique em "Verificar certificado", para uma nova ' +
             'classificação da segurança deste site. ' +
             '4 - Nesse momento o navegador exibe o veredito segundo suas entidades ' +
             'bases na expedição de certificados seguros, como a CAcert ainda não é ' +
             'reconhecida como uma homologadora confiável ainda pelo Mozilla, será mostrada ' +
             'uma tela desta forma. ' +
             '5 - Clique no botão "exibir...", as informações abaixo selecionadas tem ' +
             'contida a data de expiração e de concessão do certificado pela CAcert e ' +
             'as assinaturas SSH1 e MD5. ' +
             'Recomenda-se verificar algumas informações de legitimidade do certificado ' +
             'durante o processo de instalação. O Certificado Raiz do DCC/UFBA DEVE ' +
             'apresentar os seguintes detalhes: ' +
             '6 - Com às informações confirmadas, feche a caixa "Visualizador de ' +
             'certificados:", certifique que a caixa "Salvar esta exceção ' +
             'permanentemente" está marcada, agora clique em "Confirmar exceção de ' +
             'segurança". ' +
             '7 - Para verificar se o certificado foi corretamente instalado, abra a ' +
             'página do webmail, e confirme, pela apresentação da janela de diálogo que ' +
             'se abre, que o certificado apresentado pelo servidor é válido (isso ' +
             'significa que ele está sendo corretamente autenticado pelo certificado raiz ' +
             'que foi instalado). Use a vontade! ' +
             'Programas que Usam o Certificado Raiz ' +
             'O certificado é reconhecido tanto por navegadores Web (Internet Explorer, ' +
             'Firefox) quanto por leitores de email (Microsoft Outlook, Thunderbird). Na ' +
             'plataforma Microsoft o certificado é instalado em nível de sistema, de ' +
             'modo que tanto o Internet Explorer quanto o Outlook o reconhecerão. ' +
             'Entretanto, se você estiver usando o browser Firefox nessa plataforma, ' +
             'será necessário instalar o certificado duas vezes: uma pelo Firefox e outra ' +
             'pelo Internet Explorer.',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1224853366',
    related: []
  },

  5: {
    title: 'Gerenciamento de Projetos',
    content: 'Registro no Redmine. Gerenciamento de Projetos',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1343241325',
    related: [6, 7]
  },

  6: {
    title: 'Registro no Redmine',
    content: 'Observação: O registro no redmine só é permitido para usuários que possuem ' +
             'conta na Rede DCC ' +
             'O primeiro passo é acessar a página do Redmine. ' +
             'Clique em Sign in no canto superior direito da janela do seu browser. ' +
             'Você deverá digitar seu login e senha da Rede DCC nos respectivos campos. ' +
             'Informe seu nome e Sobrenome e clique no botão submit ' +
             'Pronto seu registro no Redmine foi realizado com sucesso. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1343236317',
    related: []
  },

  7: {
    title: 'Gerenciamento de Projetos',
    content: 'O serviço de gerenciamento de projetos da Rede DCC está disponível para ' +
             'os grupos de pesquisa do Departamento de Ciência da Computação da UFBA. ' +
             'A criação dos projetos é feita mediante solicitção ao GRACO, através ' +
             'do email suporte@dcc.ufba.br. Sendo necessário informar o nome do projeto, ' +
             'o login do DCC do administrador e software que pretende usar. ' +
             'Atualmente disponibilizamos os seguintes softwares: ' +
             'REDMINE' +
             'Redmine é uma aplicação web flexível e de fácil utilização, para ' +
             'gerenciamento de projetos. É open source e liberado sob os termos da GNU ' +
             'General Public License v2 (GPL). Com ele é possível gerir vários projetos e ' +
             'subprojetos, podendo definir se os mesmos são públicos ou apenas um grupo ' +
             'específico pode visualiza-lo. Possui funcionalidades interessantes como ' +
             'rastreamento de tempo, campos personalizados, notícias, documentos e ' +
             'gerenciamento de arquivos, entre outros. Para acessa-lo utilize sua conta ' +
             'de usuário e senha do DCC conforme o tuturial do link abaixo. ' +
             'Registrando-se no Redmine ' +
             'Para maiores informações sobre esse software clique aqui. ' +
             'TRAC ' +
             'Trac é um sistema de acompanhamento de projetos de desenvolvimento de ' +
             'software. Ele fornece uma interface para Subversion (ou outros sistemas ' +
             'de controle de versão ), um Wiki integrado e instalações de comunicação ' +
             'conveniente. Permite marcação wiki em descrições de problema e as mensagens ' +
             'de commit, a criação de links e referências sem costura entre bugs, tarefas, ' +
             'changesets, arquivos e páginas wiki. A linha do tempo mostra todos os ' +
             'eventos de projetos atuais e passados, tornando a visão geral do projeto ' +
             'e o acompanhamento do progresso muito fácil. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1343241325',
    related: [6]
  },

  8: {
    title: 'Serviços de email',
    content: 'Redirecionamento de mensagens de email. Acessando email via IMAP. Acessando ' +
             'Email via POP',
    related: [9, 10, 13]
  },

  9: {
    title: 'Redirecionamento de mensagens de email',
    content: 'Informamos a todos(as) que já é possível configurar o redirecionamentos ' +
             'de mensagens de e-mails através na nova interface do webmail DCC. ' +
             'Implementamos mais esse serviço no intuito de facilitar o processo ' +
             'para o usuário, que agora dispõe de uma interface simples e organizada ' +
             'para configurar o serviço. ' +
             'O Redirecionamento de mensagens de e-mail serve para aquelas pessoas que ' +
             'não usam o e-mail institucional do DCC, podendo redirecionar suas mensagens ' +
             'para uma outra conta de e-mail e continuar informados do que acontece no ' +
             'Departamento de Ciência da Computação. ' +
             'Para ativar o redirecionamento siga os seguintes passos: ' +
             'Acesse o módulo de redirecionamento de e-mails em nosso webmail, clicando ' +
             'aqui; ' +
             'Após este processo, todas as mensagens passarão a ser redirecionados para o ' +
             'e-mail externo fornecido. Não serão guardadas cópias locais das mensagens. ' +
             'Por isso, certifique-se de que o e-mail externo fornecido é válido. ' +
             'Vale ressaltar que algumas listas de discussão como Todos, Estudantes-comp, ' +
             'Posgrad-comp, entre outras, enviam avisos importantes para o seu e-mail ' +
             'local. Portanto, se você não usa o e-mail local, é muito importante que você ' +
             'redirecione suas mensagens para um e-mail que você use. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/RedirecionamentoEmails',
    related: []
  },

  10: {
    title: 'Acessando email via IMAP',
    content: 'IMAP (Internet Message Access Protocol) é um protocolo de gerenciamento de ' +
             'correio eletrônico pelo qual as mensagens ficam armazenadas no servidor, e ' +
             'o usuário pode ter acesso a suas pastas e mensagens em qualquer computador, ' +
             'tanto por webmail como por cliente de correio eletrônico. Além disso, é ' +
             'possível efetuar buscas por mensagens diretamente no servidor, utilizando ' +
             'palavras-chaves. ' +
             'O protocolo IMAP permite você ler seu email deixando-os no servidor por ' +
             'oposição ao POP que baixa os email em seu computador e os apaga do servidor. ' +
             'Para saber mais ver a Wikipédia. ' +
             'Geralmente, ao configurar um cliente de correio eletrônico é preciso definir ' +
             'as informações do servidor IMAP e do servidor SMTP. No caso do acesso por ' +
             'webmail, não será preciso o usuário informar quais os servidores de IMAP ou ' +
             'SMTP. Tudo já estará devidamente configurado. ' +
             'Para efeitos de esclarecimentos, SMTP (Simple Mail Transfer Protocol) é o ' +
             'protocolo padrão para envio de email através da internet. ' +
             'Configuração do Cliente IMAP/SMTP ' +
             'Servidor IMAP da rede DCC: mail.dcc.ufba.br ' +
             'Servidor SMTP da rede DCC: mail.dcc.ufba.br ' +
             'Tanto no cliente de correio eletrônico quanto no webmail será preciso o ' +
             'usuário informar sua conta de acesso e senha da rede DCC. ' +
             'Adicionalmente, por questões de segurança, os usuários devem sempre ' +
             'estar atentos no momento da configuração do cliente de correio eletrônico ' +
             'para ativar as opções de segurança necessárias. A opção de segurança mais ' +
             'importante é utilizar conexões seguras pelo protocolo SSL (Secure Sockets ' +
             'Layer) que permite o trafégo encriptado das informações durante a leitura ' +
             'de emails. Uma conexão segura de IMAP (IMAPS) usa a porta de acesso 993 no ' +
             'servidor e não a porta padrão 143. Atualmente somente conexões seguras, via ' +
             'porta 993, estão sendo aceita pelo nosso servidor. ' +
             'A maioria dos clientes para diversas plataformas possuem estas opções nos ' +
             'menus de ferramentas, configurações ou preferências. ' +
             'Obs: parte deste conteúdo foi baseado nas informações contidas em: ' +
             'http://pt.wikipedia.org/wiki/SSL ' +
             'http://pt.wikipedia.org/wiki/SMTP ' +
             'http://pt.wikipedia.org/wiki/IMAP ' +
             'Ms Outlook ' +
             'Mozilla Thunderbird',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1225801768',
    related: [11, 12]
  },

  11: {
    title: 'Como configurar o Ms Outlook',
    content: 'Para criar, editar ou remover contas do Outlook Express acesse a opção ' +
             'Configurações de Contas... no menu Ferramentas. ' +
             'Na nova janela, clique no botão NOVO... dentro da guia email; ' +
             'Na tela seguinte, marque a opção Definir manualmente as configurações do ' +
             'servidor ou tipos de servidor adicionais ' +
             'Clique em Avançar ' +
             'Selecione a opção Email da Internet e clique em Avançar ' +
             'Em Informações do usuário, informe o nome do responsável pela conta e o ' +
             'e-mail do dcc (substituir meulogin pela sua conta de usuário) ' +
             'Em Informações do servidor, preencha como na imagem abaixo: ' +
             'Tipo de Conta: IMAP ' +
             'Servidor de entrada de emails: mail.dcc.ufba.br ' +
             'Servidor de saída de emails (smtp): mail.dcc.ufba.br ' +
             'Em Informações de Logon preencha Nome de Usuário com seu login do dcc e ' +
             'coloque sua senha do dcc no campo Senha (o modo lembrar senha é opcional). ' +
             'Após isso selecione a opção Mais Configurações... ' +
             'Na nova janela clique na aba Servidor de saída e marque a opção Meu servidor ' +
             'de saída (SMTP) requer autenticação ' +
             'Selecione a alternativa Usar mesmas config. do servidor de email ' +
             'de entrada de emails ' +
             'Feito isso vá até a aba Avançado. Na seção Servidor de entrada (IMAP): na opção ' +
             'Usar o seguinte tipo de conexão criptografada: escolha SSL (como na figura abaixo). ' +
             'Em seguida clique em Ok e voltará para a tela de configuração da conta de e-mail. ' +
             'Para testar clique em Testar configurações de conta... ' +
             'Se estiver tudo certo aparecerá uma janela como a imagem abaixo e você ' +
             'receberá um e-mail teste na sua conta do dcc. ' +
             'Feito isso, clique em Fechar e depois em Avançar. Em seguida clique em ' +
             'Concluir. ' +
             'Pronto! Seu Outlook estará configurado. ' +
             'Se você optar pelo protocolo POP3 as configurações serão as mesmas, ' +
             'porém as mensagens deixarão de estar na sua caixa na interface web do e-mail, ' +
             'pois com esse protocolo todas as mensagens da sua caixa de entrada serão baixadas ' +
             'para o Outlook. ' +
             'Importante: Foi utilizado o Microsoft Outlook Express 2007 no Windows 7 ' +
             'Ultimate. ' +
             'Qualquer dúvida, não hesite em contatar-nos através do suporte@dcc.ufba.br. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1226935108',
    related: []
  },

  12: {
    title: 'Como configurar o Mozilla Thunderbird',
    content: 'Para criar, editar ou remover contas do Mozilla Thunderbird acesse a opção ' +
             'Configurar contas no menu Preferências. ' +
             'Na janela de configurar contas, acesse a opção Ações de conta e em seguida ' +
             'em Nova conta de email para adicionar uma conta. ' +
             'Avançando será preciso informar o Seu nome, observe que é seu nome e não o ' +
             'login em nosso servidor, então este campo pode conter qualquer coisa. Já o ' +
             'campo Endereço de email você deve informar seu email em nosso servidor junto ' +
             'com o domínio. Em nosso caso o domínio é dcc.ufba.br e seulogin representa a ' +
             'sua conta de usuário em nossos servidores. ' +
             'Em seguida o Thunderbird tentará configurar os servidores de email ' +
             'automaticamente mas falhará, prossiga clicando em Configuração Manual. ' +
             'Na configuração dos servidores de email, selecione os protocolos IMAP e ' +
             'SMTP para Recebimento e Envio respectivamente, modifique o nome dos ' +
             'servidores para mail.dcc.ufba.br e ative as opções de SSL selecionando ' +
             'SSL/TSL para os dois protocolos. ' +
             'Versão do Mozilla Thunderbird utilizada: 31.8.0. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1225894074',
    related: []
  },

  13: {
    title: 'Acessando Email via POP',
    content: 'POP3 (Post Office Protocol) é um protocolo utilizado no acesso remoto a uma ' +
             'caixa de correio eletrônico. O POP3 permite que todas as mensagens contidas ' +
             'numa caixa de correio eletrônico possam ser transferidas sequencialmente ' +
             'para um computador local. ' +
             'O funcionamento do protocolo POP3 diz-se off-line, porque todas as mensagens ' +
             'são transferidas do servidor para o computador do usuário, permitindo-o ' +
             'fechar a conexão com o servidor após a transferência e apagar as mensagens ' +
             'no servidor. Assim em qualquer outro momento (sem a necessidade da conexão ' +
             'estabelecida) pode-se ler, responder, encaminhar ou realizar outras operações ' +
             'com as mensagens transferidas. ' +
             'A característica off-line do protocolo POP3 é particularmente útil para ' +
             'usuários que se ligam à internet através de redes públicas comutadas, em que ' +
             'o custo da ligação é proporcional ao tempo de ligação (ex: a rede telefónica ' +
             'convencional). ' +
             'Geralmente, ao configurar um cliente de correio eletrônico é preciso definir ' +
             'as informações do servidor POP3 e do servidor SMTP. No caso do acesso por ' +
             'webmail, não será preciso o usuário informar quais os servidores de POP3 ou ' +
             'SMTP. Tudo já estará devidamente configurado. ' +
             'Para efeitos de esclarecimentos, SMTP (Simple Mail Transfer Protocol) é o ' +
             'protocolo padrão para envio de email através da internet. ' +
             'Configuração do Cliente POP3/SMTP ' +
             'A maioria dos clientes de e-mail, para diversas plataformas, possuem estas ' +
             'opções nos menus de ferramentas, configurações ou preferências: ' +
             'Servidor POP3 da rede DCC: mail.dcc.ufba.br ' +
             'Servidor SMTP da rede DCC: mail.dcc.ufba.br ' +
             'Adicionalmente, por questões de segurança, os usuários devem sempre estar ' +
             'atentos no momento da configuração do cliente de correio eletrônico para ' +
             'ativar as opções de segurança necessárias. É necessário ativar o uso de ' +
             'conexões seguras pelo protocolo SSL (Secure Sockets Layer) que permite o ' +
             'trafégo encriptado das informações durante a leitura de emails. Uma conexão ' +
             'segura de POP3 (POP3S) usa a porta de acesso 995 no servidor e não a porta ' +
             'padrão 110. Atualmente somente a conexão segura, via porta 995, está sendo ' +
             'aceita pelo nosso servidor. ' +
             'Tanto no cliente de correio eletrônico quanto no webmail será preciso o ' +
             'usuário informar sua conta de acesso e senha da rede DCC. ' +
             'Obs: parte deste conteúdo foi baseado nas informações contidas em: ' +
             'http://pt.wikipedia.org/wiki/SSL ' +
             'http://pt.wikipedia.org/wiki/SMTP ' +
             'http://pt.wikipedia.org/wiki/Post_Office_Protocol',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1225803416',
    related: []
  },

  14: {
    title: 'VPN do DCC',
    content: 'Acessando o Proxy Externo do DCC utilizando OpenVPN',
    related: [15]
  },

  15: {
    title: 'Acessando o Proxy Externo do DCC utilizando OpenVPN',
    content: 'Introdução ' +
             'A Rede DCC oferece para os professores, pesquisadores e alunos de Projeto ' +
             'Final e Iniciação Científica o serviço de Proxy Externo, que permite acessar ' +
             'a alguns serviços web cujo acesso é restrito à rede DCC mesmo quando fora ' +
             'da rede, por exemplo os periódicos do Capes. A finalidade deste tutorial é ' +
             'instruir o usuário como configurar seu sistema para acessar o proxy. ' +
             'Configuração ' +
             'Para ter acesso ao proxy é preciso configurar uma conexão VPN com o servidor ' +
             'e configurar o browser para utilizar o proxy. ' +
             'Configurando a VPN ' +
             'Para ter acesso ao proxy é preciso estabelecer uma conexão VPN com o ' +
             'servidor, desta forma podemos autenticar os usuários do proxy e proteger a ' +
             'integridade dos dados que trafegam entre os servidor e o cliente. Para isto ' +
             'utilizamos o software OpenVPN, veja como configurá-lo abaixo. Existem duas ' +
             'formas de configuração no GNU/Linux, via linha de comando ou via interface ' +
             'gráfica, e também no Windows. Esteja a vontade em escolher a que melhor convir. ' +
             'Configuração no GNU/Linux via linha de comando ' +
             'Configuração no GNU/Linux interface gráfica ' +
             'Configuração no Windows ' +
             'Configuração no Mac OS ' +
             'Certificado Root CA ' +
             'Para configurar a conexão VPN será necessário o certificado Root CA, ' +
             'disponível neste link. Clique com o botão direito do mouse e salve em seu ' +
             'computador. ' +
             'Configurando o Browser ' +
             'Basta configurar o browser para utilizar o endereço 10.8.0.1 e porta 8080 ' +
             'como proxy. A localização da configuração do proxy no browser varia de acordo ' +
             'com o software utilizado, a seguir alguns exemplos. ' +
             'Iceweasel (GNU/Linux) ' +
             'Menu Editar, Preferências, clicar o no ícone Avançado, na aba Rede, botão ' +
             'Configurar. ' +
             'Firefox (Windows) ' +
             'Menu Ferramentas, Opções, clicar o no ícone Avançado, na aba Rede, botão ' +
             'Configurar. ' +
             'Internet Explorer (Windows) ' +
             'Menu Ferramentas, Opções da Internet, aba Conexões, clicar no botão ' +
             'Configurações da LAN. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1263925447',
    related: []
  },

  16: {
    title: 'Quota de Armazenamento',
    content: 'Problema com cota excedida em sua conta DCC',
    related: [17]
  },

  17: {
    title: 'Problema com cota excedida em sua conta DCC',
    content: 'Introdução ' +
             'Esse tutorial visa explicar aos usuários como resolver o problema de cota ' +
             'excedida nos servidor de arquivos na rede DCC. Além disso, ele pode ser ' +
             'utilizado como guia de referência para saber se sua cota está mesmo ' +
             'estourada. ' +
             'Em tempos, para contextualizar o problema, cada usuário da rede DCC ' +
             '(aluno, professor, pesquisador, convidado) possui uma conta institucional ' +
             'que lhe dá acesso à uma série de serviços, dentre eles um servidor de ' +
             'arquivos. Nesse servidor de arquivos o usuário pode armazenar vários ' +
             'documentos e mantê-los com segurança, podendo acessá-los a partir de ' +
             'qualquer máquina na internet (veja como acessar seus arquivos). ' +
             'A cota de armazenamento é definida de acordo à semestralidade do aluno ou ' +
             'ao tipo de conta (por exemplo, professores e pesquisadores possuem cota ' +
             'maior que alunos de graduação). ' +
             'Ao exceder a cota de uso no servidor de arquivos, o usuário passa a ser ' +
             'notificado diariamente a fim de que resolva tal situação. ' +
             'Minha cota está realmente estourada? ' +
             'Muitas vezes a mensagem de cota estourada pega alguns usuários de supresa, ' +
             'pois eles não acham os arquivos que podem estar causando esse problema ou, ' +
             'ainda, mesmo depois de remover boa parte dos arquivos a mensagem de alerta ' +
             'continua a ocorrer. Como isso pode ser possível? ' +
             'Bom, isso ocorre pois em sistemas GNU/Linux existem uma série de ' +
             'arquivos ocultos em nossa pasta HOME que armazenam cache de programas ou ' +
             'mesmo a nossa Lixeira. O que ocorre com frequência é que os usuários não ' +
             'removem de fato os arquivos. Invés disso, apenas os movem para a lixeira e, ' +
             'assim, eles continuam em sua pasta virtual do servidor de arquivos sendo ' +
             'contabilizados no calculo de sua cota. ' +
             'Para verificar se você está com o mesmo problema execute o seguinte: ' +
             'Abra um terminal de comandos. Tipicamente em ambientes GNOME, isso pode ser ' +
             'feito acessando Aplicações > Acessórios > Terminal. ' +
             'Execute o seguinte comando: ' +
             'Se o resultado desse comando for algo parecido com o seguinte, significa que ' +
             'você apenas moveu os arquivos para sua lixeira e necessita removê-los de fato ' +
             'do sistema. ' +
             'É possível usar o nautilus (gerenciador gráfico de arquivos para o GNOME) ' +
             'para verificar tal problema. Para isso, abra o nautius (Locais > Pasta ' +
             'Pessoal), acesse sua pasta ArquivosDCC e entre no modo de exibição de ' +
             'arquivos ocultos pressionando Ctrl+h. Será exibido uma série de pastas ' +
             'iniciadas com . (ponto) verifique os arquivos em tais pastas. ' +
             'Removendo os arquivos ' +
             'Utilize uma das máquinas de nossos laboratórios para executar o procedimento ' +
             'abaixo. ' +
             'Usando o terminal ' +
             'Abra um terminal de comandos. Tipicamente em ambientes GNOME, isso pode ser ' +
             'feito acessando Aplicações > Acessórios > Terminal. ' +
             'Acesse sua pasta ArquivosDCC e execute o seguinte comando: ' +
             'Esse comando irá listar os diretórios e arquivos com seus respectivos ' +
             'tamanhos. Agora basta procurar aqueles arquivos maiores e sem importância e ' +
             'removê-los. Por exemplo, suponha que o resultado do comando acima seja parecido ' +
             'com o seguinte: ' +
             'E o usuário fulano considera que os arquivos nas pastas Trash não são ' +
             'importantes, bem como os arquivos de cache do openoffice e mozilla. Daí ' +
             'podemos remover tais arquivos com o seguinte comando: ' +
             'Usando o gerenciador de arquivos do GNOME ' +
             'É possível usar o nautilus (gerenciador gráfico de arquivos para o GNOME) ' +
             'para verificar tal problema. Para isso, abra o nautius (Locais > Pasta ' +
             'Pessoal), acesse sua pasta ArquivosDCC e entre no modo de exibição de ' +
             'arquivos ocultos pressionando Ctrl+h. Será exibido uma série de pastas ' +
             'iniciadas com . (ponto) verifique os arquivos em tais pastas e selecione ' +
             'aqueles maiores e possíveis de serem removidos. ' +
             'Remova tais arquivos utilizando a combinação de teclas Shift-Delete ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1241803034',
    related: []
  },

  18: {
    title: 'Servidor de aplicações',
    content: 'Usando o servidor de aplicações (app). Usando o GIT no servidor de aplicações',
    related: [19, 20]
  },

  19: {
    title: 'Usando o Servidor de Aplicações (App)',
    content: 'O que é? ' +
             'O servidor de aplicações da rede DCC (app.dcc.ufba.br) tem o intuito de ' +
             'fornecer aos seus usuários, acesso a um servidor majoritarieamente de ' +
             'aplicações Web (apache, mysql, postgresql, php, ruby, ...) para que os ' +
             'mesmos possam ter um espaço mais amplo para desenvolvimento e testes, ' +
             'sendo possível, inclusive, acesso a seus dados de fora da Rede DCC (via ssh). ' +
             'Atualmente, o uso do servidor é feito em sua maioria pelos alunos que cursam ' +
             'a disciplina Banco de Dados (MAT A60) e pelos alunos do Doutorado ' +
             'Multi-Institucional, servindo de laboratório para as aulas práticas. ' +
             'Como utilizar ' +
             'O uso de tal servidor, não é considerado um serviço geral, pela limitação ' +
             'de recursos físicos e humanos para manutenção do mesmo. Assim, se deseja ' +
             'usar, é preciso que entre em contato com o Graco (suporte@dcc.ufba.br), ' +
             'apresentando justificativas para o uso do servidor. ' +
             'Seus direitos ' +
             'Página pessoal do tipo http://app.dcc.ufba.br/~usuario. Veja como fazer ' +
             'aqui. ' +
             'Você pode solicatar também um banco de dados. ' +
             'Mysql: Acessível via https://app.dcc.ufba.br/phpmyadmin ' +
             'Postgresql: Acessível via https://app.dcc.ufba.br/phppgadmin ' +
             'Um shell. Você pode acessar app de qualquer lugar, basta: ' +
             'ssh usuario@app.dcc.ufba.br -p 2299 ' +
             'OBS: Ao usar o comando SSH e acessar o servidor de sua escolha remotamente, ' +
             'você pode usar os comandos de criação de Página Pessoal e dar acesso a ' +
             'qualquer browser a seus arquivos no servidor que foi acessado por SSH. ' +
             'Exemplos, www.app.dcc.ufba.br/~usuario ou acessando pela porta 22 ao ' +
             'invés da 2299, www.homes.dcc.ufba.br/~usuario. ' +
             'Para transferir arquivos, você pode usar o WinSCP (Windows) ou o gFTP ' +
             '(Linux). Veja mais informações aqui.',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1219550947',
    related: [1]
  },

  20: {
    title: 'Usando GIT no Servidor de Aplicações',
    content: 'A Rede DCC disponibiliza o Subversion (SVN) como sistema de controle de ' +
             'versão para os Grupos de Pesquisa e para as disciplinas do DCC, mas para ' +
             'os projetos hospedados no Servidor de Aplicações há a possibilidade de usar ' +
             'o GIT para esta finalidade, desta forma poderá ser acessado de qualquer lugar. ' +
             'Criando um repositório ' +
             'Repositório vazio ' +
             'Logado no Servidor de Aplicação por SSH, deve-se criar uma pasta e ' +
             'inicializar o repositório nela. ' +
             'Repositório com arquivos ' +
             'Logado no Servidor de Aplicação por SSH, deve-se inicializar o repositório ' +
             'dentro da pasta e adicionar os arquivos. ' +
             'Baixando os arquivos de um repositório remoto ' +
             'O GIT suporta alguns protocolos para transportar os arquivos de um ' +
             'repositório remoto para um local, tais como git, http e ssh. No caso da ' +
             'Rede DCC, usamos preferencialmente o ssh. Considerando que o usuário já ' +
             'disponha de permissão de acesso ao Servidor de Aplicações e de um repositório ' +
             'numa pasta a qual ele tenha acesso. ' +
             'A segunda linha do exemplo acima, demonstra a forma como se deve acessar o ' +
             'Servidor de Aplicações do DCC, subistituíndo apenas o login e o endereço da ' +
             'pasta do projeto. O login e a porta são opcionais, caso o usuário local seja ' +
             'igual ao remoto e a porta de acesso do servidor seja a porta padrão, estes ' +
             'podem ser omitidos. ' +
             'Atualizando os arquivos do repositório local ' +
             'É possível baixar as atualizações do repositório remoto e mesclar com as ' +
             'dos repositório local usando o git-pull. ' +
             'Atualizando os arquivos de um repositório remoto ' +
             'Omitindo o endereço remoto do repositório, como no segundo exemplo, é ' +
             'usando o mesmo endereço de onde o mesmo foi baixado. ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1234880203',
    related: []
  },

  21: {
    title: 'Sistema de Controle de Versão',
    content: 'Usando GIT no Servidor de Aplicações. Usando repositórios Subversion (Linux). ' +
             'Usando repositórios Subersion (Windows)',
    related: [20, 22, 23]
  },

  22: {
    title: 'Usando repositórios Subersion (Linux)',
    content: 'Inicialmente, temos que criar uma pasta onde será gerada a cópia de trabalho ' +
             'a partir do repositório. ' +
             'Quando for preciso efetuar modificações em um projeto que já está no svn, ' +
             'antes é preciso fazer o checkout, ou seja, efetuar o download dos arquivos ' +
             'correspondentes ao projeto. ' +
             'Os arquivos existentes neste repositório serão copiados para a pasta de ' +
             'destino e será possível criar e modificar arquivos e pastas. ' +
             'Tais modificações, porém, são locais e não afetam os arquivos situados no ' +
             'servidor Subversion a não ser que exportemos as nossas alterações. Para isso ' +
             'usamos os seguintes comandos que geram uma lista de atualizações que serão ' +
             'efetivadas com o uso do commit  que efetivamente envia as modificações ao ' +
             'repositório. ' +
             'Para adicionar um novo arquivo ao repositório, use: ' +
             'Para criar uma pasta: ' +
             'Já para remover algum arquivo do diretório, use ' +
             'lembrando que você deve estar na pasta que corresponda  ao compartilhamento ' +
             'onde você quer colocar (ou apagar) o arquivo. ' +
             'Para que aos arquivos adicionados e/ou removidos sejam efetivados no ' +
             'repositório é necessário usar o ' +
             'Este é o comando que atualiza o que você modificou na pasta local no ' +
             'repositório. Se você modificar um arquivo, para atualizá-lo no repositório ' +
             'usa-se este mesmo comando. ' +
             'Se nenhum arquivo for listado, serão atualizados todos os arquivos do ' +
             'diretório local. Se não for adicionada o -m "[comentário]"  será aberto um ' +
             'editor de texto onde deverá ser digitado um comentário. ' +
             'São interessantes também os comandos ' +
             'que mostra uma lista com as modificações recentes do diretório e ' +
             'que mostra as diferenças existentes entre os arquivos da sua pasta e os ' +
             'correspondentes no diretório.',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1218829237',
    related: []
  },

  23: {
    title: 'Usando repositórios Subersion (Windows)',
    content: 'Muita gente ainda não está acostumado com o linux e reclama da forma de se ' +
             'utilizar o repositório svn pela linha de comando, mas para estes(amantes ' +
             'do Windows) existe uma solução prática, o TortoiseSVN, que é um programa ' +
             'para gerenciamento de arquivos em um repositório svn , neste tutorial ' +
             'mostrarei como utilizar esta ferramenta. ' +
             'Como usar o TortoiseSVN para criação de repositorios e manutenção dos ' +
             'mesmos no windows. ' +
             '1 – Baixar o TortoiseSVN: ' +
             '1.2 - Se preferir você pode instalar o pacote de linguagem em português: ' +
             '2 - Usando o TortoiseSVN ' +
             'O TortoiseSVN lhe permite criar seu próprio repositório, porém nosso ' +
             'objetivo é somente aprender a adicionar e excluir arquivos/diretórios ' +
             'em um repositório existente, porém se tiver enteresse em saber como fazer ' +
             'seu próprio repositório siga o seguinte link e aprenda Mais Tortoise . ' +
             'Considerando que o seu Tortoise está em português, vamos lá! ' +
             '3 - Adicionando arquivos no repositório ' +
             'Agora que ja criamos e lincanmos nossa pasta com o repositório svn vamos ' +
             'adicionar arquivos. ' +
             '4 - Submetendo o arquivo ao repositório: ' +
             '5 - Excluindo arquivos ' +
             'Para deletarmos um arquivo da pasta de trabalho e também do repósitorio, ' +
             'basta apenas selecionarmos a opção TortoiseSVN, depois Excluir. ' +
             'Depois é só submeter a versão. ' +
             'Pronto, aprendemos as operações mais básicas, porém essenciais de utilização ' +
             'do TortoiseSVN, mas existem várias opções no TortoiseSVN para a manipulação ' +
             'de pastas/arquivos, podemos voltar uma versão anterior do documento, ' +
             'comparar duas versões, alterar o nome do arquivo/pasta (lembre-se, altere ' +
             'o nome apenas pelo Tortoise, caso seja feito diretamente pelo Windows pode ' +
             'prejudicar o envio do docmento). ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1253331144',
    related: []
  },

  24: {
    title: 'Foswiki',
    content: 'Guia Rápido Foswiki. Alteração de Senha Foswiki. Adicionando um template ' +
             'alternativo à uma Web no Foswiki',
    related: [25, 26, 27]
  },

  25: {
    title: 'Guia Rápido Foswiki',
    content: 'Esse tutorial foi feito para o TWiki, porém é utilizado para Foswiki que ' +
             'utiliza a mesma sintaxe. ' +
             'Tabela de conteúdo: ' +
             'O que é o Foswiki ' +
             'Editando uma página ' +
             'Sintaxe Foswiki ' +
             'Anexando arquivos ' +
             'Inserindo imagens ' +
             'Criando um Tópico ' +
             'TWiki e português ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1251297453',
    related: []
  },

  26: {
    title: 'Alteração de Senha Foswiki',
    content: 'Acesse [1] e digite seu login. Você irá receber uma mensagem (no email que ' +
             'você usou para se cadastrar no Foswiki). Depois acesse [2] e faça o login ' +
             'com seu usuário e a senha que foi gerada. Aparecerá um formulário para que ' +
             'você altere a senha. ' +
             '[1] https://wiki.dcc.ufba.br/System/ResetPassword?username= ' +
             '[2] https://wiki.dcc.ufba.br/System/ChangePassword',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1334701157',
    related: []
  },

  27: {
    title: 'Adicionando um template alternativo à uma Web no Foswiki ',
    content: 'Escolhendo um template ' +
             'Observando a estrutura do template ' +
             'Incorporando o HTML ao Foswiki ' +
             'Dica de pré-visualização ' +
             'Incorporação do CSS ao Foswiki ' +
             'Referenciando o template ' +
             'Referencia direta ' +
             'Referencia indireta ' +
             'Outros tópicos (extra) ' +
             'Templates com JavaScript ' +
             'Aplicando template em um tópico específico ',
    link: 'https://wiki.dcc.ufba.br/Intranet/Tutorial1406330829',
    related: []
  }
};
