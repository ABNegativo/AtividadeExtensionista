<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envio Concluído</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .success-message {
            font-size: 24px;
            color: #4CAF50;
            margin-bottom: 20px;
        }
        .gif-container {
            margin-bottom: 20px;
        }
        .back-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .back-button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="success-message">Envio bem-sucedido!</div>
    <div style="display: flex;
    align-items: center;
    justify-content: center;" class="gif-container">
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<dotlottie-player src="https://lottie.host/1c6fc883-6b32-4127-8ab1-963fd78a0697/jFhI94oPoB.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
        <!-- <img src="https://lottie.host/embed/1c6fc883-6b32-4127-8ab1-963fd78a0697/jFhI94oPoB.json" alt="Success" width="200"> -->
    </div>
    <p>Cadastro realizado com sucesso. Obrigado!</p>

</div>

</body>
</html>
