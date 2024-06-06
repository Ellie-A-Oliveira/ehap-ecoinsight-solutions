import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className="bg-secondary py-4 px-8">
            <p className="text-3xl font-bold tracking-tight text-white my-auto">
                <span className={`mr-1 ${styles.logo}`}>EHAP</span>
                <span className="text-gray text-sm">by EcoInsight Solutions</span>
            </p>

            <div className="text-gray my-8">
                <h6>Idealizadores:</h6>
                <p>Ives Jundi Chiba | 1TDSPR | RM: 553243</p>
                <p>Ellie de Oliveira | 1TDSPR | RM: 552824</p>
            </div>

            <p className="text-gray text-sm mt-2">EcoInsight Solutions</p>
            <p className="text-gray text-sm">Comprometidos com um futuro sustentável através da inovação tecnológica. </p>
            <p className="text-gray text-sm mt-4">© 2024 EcoInsight Solutions. Todos os direitos reservados.</p>
        </footer>
    )
}
