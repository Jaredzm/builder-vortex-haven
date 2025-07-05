import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Users,
  BookOpen,
  Hospital,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Index() {
  const handleDonate = () => {
    // This would integrate with a payment processor in production
    window.open("#donate", "_blank");
  };

  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia beneficiaria",
      content:
        "Gracias a FASMAD, mi hijo pudo estudiar en la Unidad Educativa San Ignacio de Loyola. Hoy es técnico en mecánica automotriz y tiene un trabajo digno.",
      image: "👩‍💼",
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Paciente del Dispensario San Ignacio",
      content:
        "La atención médica de calidad y a bajo costo que brinda FASMAD ha sido fundamental para mi familia. Son ángeles en la tierra.",
      image: "👨‍⚕️",
    },
    {
      name: "Pedro Ramírez",
      role: "Voluntario desde 2015",
      content:
        "Ser parte de FASMAD me ha cambiado la vida. Ver la sonrisa de una familia que recibe ayuda no tiene precio.",
      image: "🙋‍♂️",
    },
  ];

  const programs = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Educación Integral",
      description:
        "Unidad Educativa Fiscomisional San Ignacio de Loyola con especializaciones en Mecánica Automotriz, Informática y Diseño Gráfico.",
      impact: "600+ estudiantes formados",
    },
    {
      icon: <Hospital className="h-8 w-8" />,
      title: "Atención Médica",
      description:
        "Dos centros médicos que brindan atención primaria de calidad: Dispensario San Ignacio de Loyola y Hospital del Día Casa del Buen Samaritano.",
      impact: "17,000+ atenciones anuales",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Asistencia Social",
      description:
        "Programas de apoyo a familias vulnerables en la provincia de Guayas, promoviendo la responsabilidad social y la solidaridad.",
      impact: "Miles de familias impactadas",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Heart className="h-16 w-16 mx-auto mb-4 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transformando vidas en
              <span className="text-accent block">Ecuador</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Desde 1988, FASMAD brinda educación, salud y esperanza a las
              comunidades más vulnerables de Guayas. Únete a nuestra misión de
              construir un Ecuador más justo y solidario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-4 h-auto shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={handleDonate}
              >
                <Heart className="mr-2 h-5 w-5" />
                DONAR AHORA
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-4 h-auto"
              >
                Conoce más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Promovemos un compromiso social para servir con amor, alegría y
              mística a los menos favorecidos de la provincia de Guayas, a
              través de programas de concientización sobre responsabilidad
              social, educación integral y salud.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-l-4 border-primary">
              <p className="text-lg font-medium text-foreground italic">
                "Fundada en 1988 por el Padre Ignacio María de Moreta, FASMAD
                nació del llamado a ayudar a las personas vulnerables que vivían
                en el botadero de basura San Eduardo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Nuestros Programas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres pilares fundamentales que transforman comunidades y cambian
              vidas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-secondary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <div className="bg-accent/10 rounded-lg p-3 border-l-3 border-accent">
                    <p className="font-semibold text-accent-foreground text-sm">
                      {program.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Historias que Inspiran
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce las experiencias de quienes han sido transformados por
              FASMAD
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-card"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{testimonial.image}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tu donación salva vidas
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Cada contribución nos permite seguir brindando educación, salud y
              esperanza a quienes más lo necesitan. Sé parte del cambio.
            </p>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-accent">$25</p>
                  <p className="text-sm opacity-90">
                    Alimenta a una familia por una semana
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">$50</p>
                  <p className="text-sm opacity-90">
                    Cubre consulta médica para 3 personas
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">$100</p>
                  <p className="text-sm opacity-90">
                    Beca mensual para un estudiante
                  </p>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-6 h-auto shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
              onClick={handleDonate}
            >
              <Heart className="mr-3 h-6 w-6" />
              DONAR AHORA
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              Contáctanos
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Teléfono</h4>
                <p className="text-muted-foreground">+593-4-XXX-XXXX</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@fasmad.org</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Ubicación</h4>
                <p className="text-muted-foreground">Guayaquil, Ecuador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 mr-2 text-accent" />
            <span className="font-bold text-lg">FASMAD</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Fundación de Asistencia Social Madre Dolorosa. Transformando
            vidas desde 1988.
          </p>
        </div>
      </footer>
    </div>
  );
}
