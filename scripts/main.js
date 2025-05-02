document.addEventListener('DOMContentLoaded', function() {
    // Configurações
    const config = {
        balloonImages: [
            'https://i.imgur.com/blue-balloon.png',
            'https://i.imgur.com/red-balloon.png'
        ],
        confettiImages: [
            'https://i.imgur.com/confetti-heart.png',
            'https://i.imgur.com/confetti-star.png'
        ],
        animationDuration: 1500 // Tempo para animação/redirecionamento (não usado diretamente neste código)
    };

    // Elemento da caixa de presente
    const giftBox = document.getElementById('giftBox');
    const hiddenMessage = document.getElementById('hiddenMessage');

    // Evento de clique na caixa de presente
    if (giftBox) {
        giftBox.addEventListener('click', function() {
            const closedImg = this.querySelector('.closed');
            const openImg = this.querySelector('.open');

            if (closedImg && openImg) {
                closedImg.style.opacity = '0';
                closedImg.style.transform = 'rotate(15deg) scale(0.8)';

                openImg.style.opacity = '1';
                openImg.style.transform = 'scale(1.1)';

                // Mostrar mensagem após um pequeno delay para a animação
                setTimeout(() => {
                    if (hiddenMessage) {
                        hiddenMessage.classList.add('show');
                    }
                }, 800);

                // Redirecionar para a página de surpresa após 3 segundos
                setTimeout(() => {
                    window.location.href = 'surpresa.html';
                }, 3000);
            } else {
                console.error("Imagens da caixa de presente não encontradas!");
            }
        });
    } else {
        console.error("Elemento da caixa de presente não encontrado!");
    }

    // Função para verificar se os caminhos das imagens estão corretos
    function checkImagePaths() {
        const imagesToCheck = [
            'assets/images/16832762.png',
            'assets/images/16832813.png',
            // Adicione aqui outros caminhos de imagens que você usa
            // ...config.balloonImages,
            // ...config.confettiImages
        ];

        imagesToCheck.forEach(img => {
            const testImg = new Image();
            testImg.onload = () => console.log(`✅ ${img} carregada`);
            testImg.onerror = () => console.error(`❌ ${img} FALHOU ao carregar`);
            testImg.src = img;
        });
    }

    // Execute a verificação dos caminhos das imagens
    checkImagePaths();
});