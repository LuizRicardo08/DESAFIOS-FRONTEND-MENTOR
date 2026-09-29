const links = [
    {
        nome: 'Cartão de Preview',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/carao-de-preview-blog/'
    },

    {
        nome: 'Resumo de plano de música',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/componente-de-resumo-de-pedido/'
    },

    {
        nome: 'Links de perfil social',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/links-de-perfil-social/'
    },

    {
        nome: 'Página de receitas',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/pagina-de-receitas/'
    },

    {
        nome: 'Pré-vizualização de prfume',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/pre-vizualizacao-perfume/'
    },

    {
        nome: 'Resumo de resultado',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/resumo-de-resultado/'
    },

    {
        nome: 'Seção de 4 blocos',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/secao-de-4-cartoes/'
    },

    {
        nome: 'Tabela de preço único',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/tabela-de-preço-unico/'
    },

    {
        nome: 'Seção de prova social',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/secao-de-prova-social/'
    },

    {
        nome: 'Reserva de Hotel (nível júnior)',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/confirmacao-de-reserva-hotel/'
    },

    {
        nome: 'Página inicial Huddle',
        url: 'https://luizricardo08.github.io/DESAFIOS-FRONTEND-MENTOR/pagina-inicial-huddle/'
    },
]

const divLinks = document.querySelector("#links")

links.forEach((link) => {
    const a = document.createElement("a")
    a.textContent = link.nome
    a.setAttribute('href', link.url)
    a.setAttribute('target', '_blank')

    divLinks.appendChild(a)
})

console.log(divLinks)