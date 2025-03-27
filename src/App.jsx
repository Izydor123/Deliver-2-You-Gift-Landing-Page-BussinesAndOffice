import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/notebook.jpg'
import image1 from './assets/pot.jpg'
import image2 from './assets/projector.jpg'
import image3 from './assets/multi.jpg'
import image4 from './assets/bag.jpg'
import catalogue from './assets/Catalogue.pdf'

function App() {

  return (
    <section className='app'>
      <Header title="Negócios e Escritório" desc1="Encontre as melhores soluções para equipar seu espaço de trabalho com eficiência e estilo" desc2="Produtos de escritório que impulsionam a produtividade e inspiram criatividade."/>
      <Product
       image={imageMain} 
       title="Carpeta Multifunción Harbur: Tecnologia e Versatilidade num Só Objecto" 
       desc1="Esta pasta multifunção em poliéster 300D RPET representa o encontro perfeito entre funcionalidade moderna e design elegante. Com um acabamento em tom de cinzento sofisticado, destaca-se pela sua tecnologia integrada de MagSafe e carregamento Qi, permitindo carregar dispositivos sem fios de forma prática e eficiente."
       desc2="As suas dimensões compactas (23,5 cm x 2 cm x 31 cm) a tornam ideal para profissionais e estudantes que valorizam mobilidade e tecnologia. O material RPET demonstra ainda um compromisso com a sustentabilidade, sendo fabricado a partir de plástico reciclado."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/166"/>
      <ProductsList 
        data={[
        {id:1, text:"Organizador Soporte Tronser", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/172", image:image1},
        {id:2, text:"Proyector Heroux", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/175", image:image2},
        {id:3, text:"Lapicero Multifunción Dowex", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/184", image:image3},
        {id:4, text:"Tarjetero Restek", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/197", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue text="Conheça os nossos outros produtos associados os negócios e escritório" link={catalogue}/>
      <Footer/>
    </section>
  )
}

export default App