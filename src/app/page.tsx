"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sun } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="grid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Bar Bocamoll"
          navItems={[
            { name: "Carta", id: "menu" },
            { name: "Experiencia", id: "experience" },
            { name: "Ubicación", id: "location" }
          ]}
          button={{ text: "Reservar", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Donde el vermouth sabe mejor al s"
          description="Un rincón tranquilo para disfrutar de tapas auténticas, buenas pintas y tardes sin prisa."
          background={{ variant: "plain" }}
          tag="Terraza al aire libre · Ambiente tranquilo · Tapas caseras"
          tagAnimation="slide-up"
          buttons={[
            { text: "Ver carta", href: "#menu" },
            { text: "Cómo llegar", href: "#location" }
          ]}
          buttonAnimation="slide-up"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-vector/summer-hand-drawn-flat-ig-post-collection_23-2149393945.jpg?_wi=1", imageAlt: "Vermouth al sol" },
            { imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-fried-croquette-composition_23-2149199004.jpg?_wi=1", imageAlt: "Tapas de la casa" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/beach-restaurant-evening_661209-253.jpg", imageAlt: "Terraza de Bar Bocamoll" },
            { imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-fried-croquette-composition_23-2149199004.jpg?_wi=2", imageAlt: "Ambiente familiar" }
          ]}
          carouselPosition="right"
          ariaLabel="Bar Bocamoll hero section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Lo que dicen nuestros clientes"
          description="Reseñas reales de personas que han disfrutado de Bar Bocamoll"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Más de 4.5 estrellas en Google"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "5 estrellas",              quote: "Hemos estado tomando un vermouth al solecito en la terraza y nos ha gustado mucho el lugar. Tiene una terraza al aire libre con mesitas de madera muy acogedora.",              name: "David",              role: "Cliente satisfecho",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-photographer-standing-with-camera-outdoors-against-building_8353-6514.jpg",              imageAlt: "David"
            },
            {
              id: "2",              title: "4 estrellas",              quote: "La comida estaba buena y te regalaban unas minibravas por cada 2 pintas. Detalles que se agradecen en un bar.",              name: "Víctor",              role: "Cliente habitual",              imageSrc: "http://img.b2bpic.net/free-photo/happy-joyful-guy-enjoying-leisure-time_1262-20555.jpg",              imageAlt: "Víctor"
            },
            {
              id: "3",              title: "5 estrellas",              quote: "Un sitio genial para tomar una pinta y unas bravas o alguna otra tapa muy rica. Terraza tranquila, ambiente perfecto.",              name: "Pedro",              role: "Cliente frecuente",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-smiling-camera_74855-2828.jpg",              imageAlt: "Pedro"
            },
            {
              id: "4",              title: "5 estrellas",              quote: "El mejor lugar para desconectar sin prisa. La calidad de las tapas es excelente y el ambiente es inmejorable.",              name: "Elena",              role: "Cliente",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-coat_23-2149421552.jpg",              imageAlt: "Elena"
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Simple, auténtico y delicioso"
          description="En Bar Bocamoll creemos en lo simple: una buena terraza, una cerveza bien tirada, unas bravas que reconfortan y ese sol de invierno que invita a no levantarse."
          tag="Lo que nos hace especiales"
          tagAnimation="slide-up"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4nbvEc5CqmjXiXOHeLdfRX3UG/uploaded-1773758292238-kbr0u8fz.png"
          imageAlt="Terraza de Bar Bocamoll"
          mediaPosition="left"
          accordionItems={[
            { id: "1", title: "☀️ Terraza con encanto", content: "Mesitas de madera, sol agradable y un ambiente donde apetece quedarse horas. La terraza es el corazón de Bar Bocamoll." },
            { id: "2", title: "🍺 Tapas que acompañan", content: "Bravas, bacalao, vermouth y todo lo que hace que una buena conversación dure más. Cada tapa está hecha con cuidado." },
            { id: "3", title: "🎁 Detalles que marcan", content: "Pequeños gestos que se agradecen: minibravas con tu cerveza, ambiente cercano, ese toque personal que nos define." }
          ]}
          ariaLabel="Features section"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Lo que no te puedes perder"
          description="Nuestra carta cuidadosamente seleccionada para acompañar tus momentos perfectos."
          tag="Carta"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              brand: "🍷",              name: "Vermouth Clásico",              price: "5€",              rating: 5,
              reviewCount: "150+",              imageSrc: "http://img.b2bpic.net/free-vector/summer-hand-drawn-flat-ig-post-collection_23-2149393945.jpg?_wi=2",              imageAlt: "Vermouth Clásico"
            },
            {
              id: "2",              brand: "🍺",              name: "Pintas Bien Tiradas",              price: "3€",              rating: 5,
              reviewCount: "200+",              imageSrc: "http://img.b2bpic.net/free-photo/snack-board-with-cheese-cubes-dry-fish_114579-8749.jpg",              imageAlt: "Pintas Bien Tiradas"
            },
            {
              id: "3",              brand: "🍟",              name: "Bravas Bocamoll",              price: "6€",              rating: 5,
              reviewCount: "180+",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-fried-croquette-composition_23-2149199004.jpg?_wi=3",              imageAlt: "Bravas Bocamoll"
            }
          ]}
          ariaLabel="Menu section"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Un lugar para desconectar"
          description={[
            "Bocamoll no es solo un bar. Es ese sitio al que vienes un rato y te acabas quedando toda la tarde.",            "Donde el sol entra justo como debe, la terraza invita a sentarse y todo pasa más despacio.",            "Aquí se viene a desconectar, a compartir y a disfrutar sin prisa. Con una cerveza, una tapa y buenos amigos."
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Descubre más", href: "#location" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="About section"
        />
      </div>

      <div id="location" data-section="location">
        <FaqSplitMedia
          title="Ven a vernos"
          description="Estamos en el lugar perfecto para una pausa con sabor. Ya sea para un vermouth rápido o una tarde larga."
          textboxLayout="default"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/flat-map-with-summer-trip-elements_23-2147822192.jpg"
          imageAlt="Ubicación de Bar Bocamoll"
          mediaAnimation="slide-up"
          mediaPosition="right"
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "📍 Dónde estamos", content: "Bar Bocamoll está ubicado en el corazón del barrio, fácil de encontrar y con fácil acceso. Un lugar donde siempre apetece quedarse." },
            { id: "2", title: "🕐 Horarios", content: "Abierto de lunes a domingo. Horario flexible para que disfrutes de tu momento perfecto, sea mañana, tarde o noche." },
            { id: "3", title: "📞 Contacta con nosotros", content: "Llámanos para reservar tu mesa o para cualquier pregunta. Estamos aquí para recibirte con los brazos abiertos." }
          ]}
          buttons={[
            { text: "Cómo llegar", href: "#" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Location section"
        />
      </div>

      <div id="cta-final" data-section="cta-final">
        <ContactFaq
          ctaTitle="Hoy hace sol"
          ctaDescription="Y el vermouth te está esperando. Ven a descubrir ese rincón donde los momentos se quedan."
          ctaButton={{ text: "Reservar mesa", href: "#" }}
          ctaIcon={Sun}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            { id: "1", title: "¿Puedo reservar mesa?", content: "Sí, te recomendamos reservar especialmente en fin de semana. Llámanos o visítanos directamente en la terraza." },
            { id: "2", title: "¿Ofrecen eventos privados?", content: "Por supuesto. Nuestra terraza es perfecta para celebraciones íntimas. Consúltanos para más información." },
            { id: "3", title: "¿Hay opciones sin gluten?", content: "Sí, contamos con opciones para distintas dietas. Pregunta a nuestro equipo cuando visites Bar Bocamoll." },
            { id: "4", title: "¿Se puede traer grupo grande?", content: "Claro. Nuestra terraza es amplia y acogedora. Reserva con antelación para asegurar tu lugar." }
          ]}
          ariaLabel="Contact and CTA section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menú",              items: [
                { label: "Ver carta", href: "#menu" },
                { label: "Tapas", href: "#menu" },
                { label: "Bebidas", href: "#menu" }
              ]
            },
            {
              title: "Información",              items: [
                { label: "Ubicación", href: "#location" },
                { label: "Horarios", href: "#location" },
                { label: "Contacto", href: "#contact" }
              ]
            },
            {
              title: "Síguenos",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Google", href: "https://google.com" }
              ]
            }
          ]}
          copyrightText="© 2024 Bar Bocamoll · Hecho con calma"
          ariaLabel="Footer"
        />
      </div>
    </ThemeProvider>
  );
}