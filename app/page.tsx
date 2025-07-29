"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Users, BarChart3, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Inter } from "next/font/google"

const poppins = Inter({
  subsets: ["latin"],
  variable: "--font-poppins",
})

export default function MetaAdsLanding() {
  const [currentSlide1, setCurrentSlide1] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

useEffect(() => {
  // Desactiva restauración automática del navegador
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Elimina cualquier hash en la URL (evita que #id haga scroll)
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  // Forzar scroll al tope después de que todo cargue
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 10);
}, []);





  const handleOpenModal = (imgSrc: string) => {
  setSelectedImage(imgSrc);
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
  setSelectedImage("");
};



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide indicator when user is near the bottom (within 100px)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offsetTop = el.offsetTop;
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    let scrollTo;

    if (sectionHeight < viewportHeight) {
      scrollTo = offsetTop - 100; // margen superior
    } else {
      scrollTo = offsetTop - (viewportHeight / 2) + (sectionHeight / 2);
    }

    // Ajuste para no salir del documento
    const maxScroll = document.body.scrollHeight - viewportHeight;
    if (scrollTo > maxScroll) scrollTo = maxScroll;
    if (scrollTo < 0) scrollTo = 0;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  }
};



  return (
    <div
  className={`min-h-screen bg-gradient-to-br from-[#001F3F] via-[#007AFF] to-[#4A90E2] ${poppins.variable} font-sans scroll-smooth`}
>
      {/* Header */}
<header className="border-b border-white/30 border-b-2 backdrop-blur-sm bg-transparent">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* Logo más chico (antes h-8) */}
        <img
          src="/Meta1.png"
          alt="Bruno Meta Ads"
          className="h-6 w-auto"
        />
        <span className="font-bold text-white text-xl">
          Bruno Meta Ads
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
  <button
    onClick={() => scrollToSection("clientes")}
    className="text-blue-100 hover:text-white transition-colors"
  >
    Clientes
  </button>
  <button
    onClick={() => scrollToSection("section-4")}
    className="text-blue-100 hover:text-white transition-colors"
  >
    Servicios
  </button>
  <button
    onClick={() => scrollToSection("section-5")}
    className="text-blue-100 hover:text-white transition-colors"
  >
    Contacto
  </button>
</nav>

      <Button className="bg-white text-blue-900 hover:bg-blue-50" asChild>
        <Link href="https://wa.me/5491123400821" target="_blank" rel="noopener noreferrer">
          Consulta Gratis
        </Link>
      </Button>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section id="section-1" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-700/50 text-blue-100 border-blue-600 text-base sm:text-lg">
  Especialista en Publicidad
</Badge>

           <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-7 leading-tight text-center">
  Multiplica tus ventas<br />
  <span className="inline-flex items-center justify-center gap-x-1 sm:gap-x-3 mt-2">
  con
  <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-300 ml-1 sm:ml-2">Meta Ads</span>
  <span className="ml-2 sm:ml-2">
    <img
      src="/Meta2.png"
      alt="Meta Logo"
      className="h-5 sm:h-7 lg:h-10 w-auto mt-1 sm:mt-3"
    />
  </span>
</span>
</h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Publicidad estratégica que genera resultados. Más leads, más ventas, más crecimiento para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8" asChild>
                <Link href="https://wa.me/5491123400821" target="_blank" rel="noopener noreferrer">
                  Contactame
                </Link>
              </Button>
             <Button
  size="lg"
  variant="outline"
  className="border-blue-300 text-blue-100 hover:bg-blue-800/50 text-lg px-8 bg-transparent"
  onClick={() => scrollToSection("clientes")}
>
  Ver Casos de Éxito
</Button>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="section-2" className="py-16 bg-transparent backdrop-blur-sm">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-2xl md:text-5xl font-bold text-white mb-2">97%</div>
        <div className="text-blue-200 text-xs md:text-base">Campañas Rentables</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-5xl font-bold text-white mb-2">x4</div>
        <div className="text-blue-200 text-xs md:text-base">ROAS promedio</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-5xl font-bold text-white mb-2">+10</div>
        <div className="text-blue-200 text-xs md:text-base">Clientes Actualmente</div>
      </div>
    </div>
  </div>
</section>

    {/* Clients Section */}
<section id="clientes" className="py-24">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-3 sm:mb-4">Clientes</h2>
<p className="text-lg text-blue-200 mb-6">
  Casos de éxito reales que demuestran el poder de una estrategia bien ejecutada
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 sm:mt-8">
  {/* Testimonio 1 */}
  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/30 p-4 sm:p-8 flex flex-col items-center max-w-xs sm:max-w-none mx-auto">
    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <img
        src="/Jhoel.png"
        alt="Jhoel"
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border border-white"
      />
      <div className="text-left">
        <div className="flex items-center gap-1 sm:gap-2 mb-1">
          <p className="text-white font-semibold text-base sm:text-xl">Jhoel</p>
          <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
        </div>
        <p className="text-white/80 text-xs sm:text-base">Mentor de Comunicación</p>
        <p className="text-white/60 text-xs sm:text-sm">ROAS: 4.2x | Ventas: +180%</p>
      </div>
    </div>
    <hr className="border-white/30 w-full my-2 sm:my-4" />
    <p className="text-white text-base sm:text-lg leading-relaxed text-center">
      "La verdad que los resultados fueron muy positivos. Antes dependía del boca a boca y me costaba conseguir alumnos para mis mentorías. Bruno me ayudó a crear campañas en Meta Ads que atraen personas interesadas todos los meses. Hoy tengo un flujo constante de leads y cierro ventas cada mes."
    </p>
  </div>

  {/* Testimonio 2 */}
  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/30 p-4 sm:p-8 flex flex-col items-center max-w-xs sm:max-w-none mx-auto">
    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <img
        src="/MerchingStore.jpg"
        alt="Merching Store"
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border border-white"
      />
      <div className="text-left">
        <div className="flex items-center gap-1 sm:gap-2 mb-1">
          <p className="text-white font-semibold text-base sm:text-xl">Merching Store</p>
          <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
        </div>
        <p className="text-white/80 text-xs sm:text-base">Importadora Mayorista</p>
        <p className="text-white/60 text-xs sm:text-sm">ROAS: 3.5x | Ventas: +95%</p>
      </div>
    </div>
    <hr className="border-white/30 w-full my-2 sm:my-4" />
    <p className="text-white text-base sm:text-lg leading-relaxed text-center">
      "Nuestro negocio se movía solo con clientes habituales y referidos. Con la estrategia de Bruno logramos llegar a más distribuidores en todo el país. Las campañas nos están trayendo clientes nuevos cada semana. Muy contentos con los resultados."
    </p>
  </div>
</div>
  </div>
</section>



      {/* Services Section */}
      <section id="section-4" className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-3 sm:mb-16">
      <h2 className="text-4xl font-bold text-white mb-6 sm:mb-4">Así llevo tu negocio al siguiente nivel:</h2>
      <p className="text-lg text-blue-200 mb+4 sm:mb-4">
  Mi método se basa en dos etapas clave para que tus campañas sean un éxito.
</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-4">
  {/* Etapa 1 */}
  <Card className="bg-transparent border-white/30 border-2 backdrop-blur-sm max-w-xs sm:max-w-none mx-auto">
    <CardContent className="p-4 sm:p-6">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
          1
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">Etapa 1: Optimización de Marca</h3>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start space-x-2 sm:space-x-4">
          <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Trabajo sobre el branding de la marca para generar confianza
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
        <div className="flex items-start space-x-2 sm:space-x-4">
          <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Estrategias de contenido orientadas a la conexión con la audiencia
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
        <div className="flex items-start space-x-2 sm:space-x-4">
          <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Preparación de la marca para escalar con campañas publicitarias
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Etapa 2 */}
  <Card className="bg-transparent border-white/30 border-2 backdrop-blur-sm max-w-xs sm:max-w-none mx-auto">
    <CardContent className="p-4 sm:p-6">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
          2
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">Etapa 2: Publicidad en Meta</h3>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start space-x-2 sm:space-x-4">
          <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Análisis del nicho y la competencia para identificar oportunidades
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
        <div className="flex items-start space-x-2 sm:space-x-4">
          <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Planificación publicitaria basada en el 'Ciclo de venta PECA'
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
        <div className="flex items-start space-x-2 sm:space-x-4">
          <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Reportes semanales con métricas clave
            </h4>
            <p className="text-blue-200"></p>
          </div>
        </div>
        <div className="flex items-start space-x-2 sm:space-x-4">
          <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Optimización diaria para maximizar el retorno de inversión (ROI)
            </h4>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section id="section-5" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para hacer crecer tu negocio?</h2>
<p className="text-lg text-blue-200 mb-6">
  Agenda tu consulta gratuita y reviso tu caso para definir la mejor estrategia en Meta Ads.
</p>
<div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/30 border-2 max-w-md mx-auto mt-4">
              <div className="flex justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-12 py-4" asChild>
                  <Link href="https://wa.me/5491123400821" target="_blank" rel="noopener noreferrer">
                    Consulta Gratuita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 border-t-2 py-6">
  <div className="container mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <img
        src="/Meta2.png" 
        alt="Bruno Meta Ads"
        className="h-5 w-auto" // Podés ajustar el tamaño si querés
      />
      <span className="font-bold text-white">Bruno Meta Ads</span>
    </div>
    <span className="text-white/70 text-sm">© 2025 MetaAds Pro. Todos los derechos reservados.</span>
  </div>
</footer>


      
      {/* Scroll Indicator */}
{showScrollIndicator && (
  <button
  onClick={() => {
    const sections = ["section-1", "section-2", "clientes", "section-4", "section-5"];
    const currentScroll = window.scrollY;
    const tolerance = 150;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop;
        if (offsetTop > currentScroll + tolerance) {
          const sectionHeight = el.offsetHeight;
          const viewportHeight = window.innerHeight;

          let scrollTo;

          if (sectionHeight < viewportHeight) {
            scrollTo = offsetTop - 100;
          } else {
            scrollTo = offsetTop - (viewportHeight / 2) + (sectionHeight / 2);
          }

          const maxScroll = document.body.scrollHeight - viewportHeight;
          if (scrollTo > maxScroll) scrollTo = maxScroll;
          if (scrollTo < 0) scrollTo = 0;

          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });
          break;
        }
      }
    }
  }}
  className="fixed bottom-12 sm:bottom-8 right-16 z-50 animate-bounce"
>
   <div className="bg-white/40 rounded-full p-3 sm:p-2 hover:bg-white/60 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 sm:h-6 sm:w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</button>

)}

    </div>
  )
}
