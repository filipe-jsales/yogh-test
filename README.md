# Client Customization Plugin

## Descrição

O **Client Customization Plugin** é um plugin de personalização para WordPress. Ele adiciona uma mensagem ao final do conteúdo de posts, exibindo o nome e a URL do site. Foi desenvolvido com suporte a múltiplos idiomas e seguindo os padrões de codificação do WordPress.
Essa seção também faz parte da documentação técnica onde eu simulo um readme de produção do plugin para futuros desenvolvedores ou proprietários do código.

---

## Funcionalidades

- Adiciona uma mensagem personalizada ao final dos posts.
- Compatível com sites em múltiplos idiomas.
- Código otimizado e conforme os padrões do WordPress Code Standard.

---

## Instalação

1. Faça o download do arquivo ZIP do plugin.
2. Acesse o painel de administração do WordPress.
3. Vá até **Plugins > Adicionar Novo > Enviar Plugin**.
4. Faça o upload do arquivo ZIP e clique em **Ativar**.

---

## Configuração

- A mensagem é exibida automaticamente ao final de todo post no site.
- Para personalização ou tradução da mensagem, edite os arquivos de tradução `.pot` gerados para o plugin.

---

## Desenvolvimento

### Melhorias implementadas:

1. **Legibilidade do Código**:
   - Substituí a função anônima por uma função nomeada.
   - Usei `sprintf()` para criar a mensagem de forma mais organizada.
   - Adicionei comentários pontuais para facilitar o entendimento.

2. **Suporte a Idiomas**:
   - Utilizei as funções `__()` e `_e()` para permitir tradução.
   - Criei um domínio de texto (`Text Domain`) chamado `client-customization`.

3. **Conformidade com WordPress Code Standards**:
   - Segui as boas práticas de nomeação e estruturação do código.
   - Adicionei verificações para garantir que o conteúdo só seja aplicado a posts (`is_singular('post')`).

---

## Contribuição

Contribuições são bem-vindas! Para colaborar:
1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit de suas alterações (`git commit -m 'Adicionei uma nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Suporte

Se você encontrar problemas ou tiver dúvidas, entre em contato pelo e-mail de suporte: **suporte@yogh.com.br**.

---

## Licença

Este plugin está licenciado sob a [Licença GPLv2](https://www.gnu.org/licenses/gpl-2.0.html). Você pode utilizá-lo e modificá-lo conforme necessário.


## Referências:

- https://developer.wordpress.org/coding-standards/wordpress-coding-standards/
- https://developer.wordpress.org/plugins/
- https://developer.wordpress.org/plugins/hooks/
- https://codex.wordpress.org/I18n_for_WordPress_Developers