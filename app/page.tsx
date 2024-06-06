import { Button, Hero } from "./components";
import { Card } from "./components/Card/Card";

export default function Home() {
  return (
    <main className="lg:mx-16 xl:mx-48">
      <Hero
        classList="h-screen"
        title="Environmental Health Analytics Platform (EHAP)"
        tags={["Plataforma Integrada", "Análises Detalhadas", "Interface Intuitiva"]}
        imgsrc="/analytics.png"
        variant="left"
      >
        <p className="text-white mb-4">A Environmental Health Analytics Platform (EHAP) da EcoInsight Solutions oferece uma solução inovadora para monitorar, analisar e fornecer insights detalhados sobre a saúde ambiental. Integrando dados de poluição oceânica e qualidade do ar, nossa plataforma é projetada para apoiar decisões informadas e promover práticas sustentáveis.</p>
        <Button variant="success" type="link" href="/login">Conheça a Plataforma</Button>
      </Hero>
      <Hero
        classList="h-screen"
        title="Casos de Uso"
        tags={["Pesquisadores", "Formuladores de Políticas", "Empresas"]}
        imgsrc="/use-case.png"
        variant="right"
      >
        <p className="text-white mb-4">A EHAP fornece dados ambientais detalhados e ferramentas avançadas de análise que permitem a pesquisadores explorar tendências e gerar relatórios personalizados. Para formuladores de políticas, oferece informações cruciais para a criação de políticas ambientais eficazes e baseadas em evidências, integrando dados de qualidade do ar e poluição oceânica. Empresas podem usar a EHAP para melhorar práticas de sustentabilidade, reduzir a pegada ambiental e demonstrar compromisso com a responsabilidade ambiental, fortalecendo a imagem corporativa e atendendo às expectativas de stakeholders.</p>
        <Button variant="success" type="link" href="/login">Explore os Dados</Button>
      </Hero>
      <article className="h-screen">
        <header>
          <h2 className="text-5xl font-bold tracking-tight text-white mb-4 text-center">Idealizadores</h2>
        </header>
        <section>
          <p className="text-white italic">&quot;Acreditamos que a Environmental Health Analytics Platform (EHAP) transformará a maneira como empresas e instituições lidam com dados ambientais. Nossa missão é capacitar nossos usuários com insights precisos e ferramentas avançadas para promover práticas sustentáveis e melhorar a saúde do nosso planeta.&quot;</p>
          <div className="flex justify-center gap-16 mt-16">
            <Card variant="horizontal" title="Ives Jundi Chiba" subtitle="Back-end Developer, DBA" imgsrc="/ives.png">
              <p>RM: 553243 | 1TDSPR</p>
              <p>E-mail: ivesjundi@gmail.com</p>
            </Card>
            <Card variant="horizontal" title="Ellie de Oliveira" subtitle="Designer, Data Scientist" imgsrc="/ellie.png">
              <p>RM: 552824 | 1TDSPR</p>
              <p>E-mail: ellie.a.oliveira@gmail.com</p>
            </Card>
          </div>
          <div className="flex justify-center mt-16">
            <Button variant="success" type="link" href="/login">Busque a Solução</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
