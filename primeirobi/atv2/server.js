const express = require('express')
const app = express()

app.use(express.urlencoded({ extend: true}))

app.post('/enviar', (req, res) => {
    
    const { username, email } = req.body;

    console.log(`Recebido: Nome: ${username}, Email: ${email}`);

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; padding-top: 50px; background-color: #f4f4f9; }
                .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 300px; }
                h1 { color: #2ecc71; font-size: 1.5rem; }
                .info { margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px; }
                strong { color: #34495e; }
                a { display: inline-block; margin-top: 20px; color: #3498db; text-decoration: none; }
            </style>
            <title>Resposta da API</title>
        </head>
        <body>
            <div class="card">
                <h1>✅ Recebido com Sucesso!</h1>
                <div class="info">
                    <p><strong>Usuário:</strong> ${username}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                <a href="javascript:history.back()">← Voltar ao formulário</a>
            </div>
        </body>
        </html>`)
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})