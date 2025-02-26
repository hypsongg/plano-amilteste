// whatsapp-popup.js
document.addEventListener("DOMContentLoaded", function() {
    // Cria o container do pop-up
    var popupContainer = document.createElement("div");
    popupContainer.style.position = "fixed";
    popupContainer.style.bottom = "20px";
    popupContainer.style.left = "20px";
    popupContainer.style.zIndex = "1000";
    popupContainer.style.cursor = "pointer";
    popupContainer.style.display = "flex";
    popupContainer.style.alignItems = "center";
    popupContainer.style.backgroundColor = "#fff";
    popupContainer.style.borderRadius = "10px";
    popupContainer.style.padding = "10px";
    popupContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    popupContainer.style.opacity = "0";
    popupContainer.style.transition = "opacity 0.5s ease";

    // Cria a imagem do avatar
    var avatarImage = document.createElement("img");
    avatarImage.src = "https://cdn.leadster.com.br/neurolead/img/avatar/3.png";
    avatarImage.style.width = "50px";
    avatarImage.style.height = "50px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.marginRight = "10px";

    // Cria o container da mensagem
    var messageContainer = document.createElement("div");
    messageContainer.style.display = "flex";
    messageContainer.style.flexDirection = "column";

    // Cria o texto de carregamento
    var loadingText = document.createElement("div");
    loadingText.textContent = "...";
    loadingText.style.color = "#000";
    loadingText.style.fontFamily = "Arial, sans-serif";
    loadingText.style.fontSize = "14px";

    // Cria a mensagem de texto
    var message = document.createElement("div");
    message.innerHTML = "Olá! Já é nosso <b>Cliente?</b><br>Para gerar a segunda via, vá para o atendimento no <b>WhatsApp.</b>";
    message.style.color = "#000";
    message.style.fontFamily = "Arial, sans-serif";
    message.style.fontSize = "14px";
    message.style.display = "none"; // Inicialmente oculta

    // Cria o botão de fechar ("X")
    var closeButton = document.createElement("div");
    closeButton.textContent = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "#000";
    closeButton.style.fontFamily = "Arial, sans-serif";
    closeButton.style.fontSize = "14px";

    // Adiciona o texto de carregamento e a mensagem ao container da mensagem
    messageContainer.appendChild(loadingText);
    messageContainer.appendChild(message);

    // Adiciona a imagem, o container da mensagem e o botão de fechar ao pop-up
    popupContainer.appendChild(avatarImage);
    popupContainer.appendChild(messageContainer);
    popupContainer.appendChild(closeButton);

    // Adiciona o pop-up ao corpo da página
    document.body.appendChild(popupContainer);

    // Mostra o pop-up aos poucos
    setTimeout(function() {
        popupContainer.style.opacity = "1";
    }, 2000);

    // Após 3 segundos, substitui o texto de carregamento pela mensagem
    setTimeout(function() {
        loadingText.style.display = "none";
        message.style.display = "block";
    }, 3000);

    // Redireciona para o WhatsApp ao clicar no pop-up
    popupContainer.addEventListener("click", function(event) {
        // Impede que o redirecionamento ocorra ao clicar no botão de fechar
        if (event.target !== closeButton) {
            var phoneNumber = "+5511970179092";
            var text = encodeURIComponent("Desejo solicitar a segunda-via.");
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
        }
    });

    // Fecha o pop-up ao clicar no botão "X"
    closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Impede que o evento de clique no pop-up seja acionado
        popupContainer.style.display = "none";
    });
});