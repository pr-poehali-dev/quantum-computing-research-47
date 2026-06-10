import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "TriangleAlert",
    title: "Ямы и разбитый асфальт",
    description:
      "Опасные ямы, выбоины и разрушения дорожного покрытия, которые угрожают безопасности водителей и могут повредить автомобиль.",
  },
  {
    icon: "TrafficCone",
    title: "Неисправные светофоры",
    description:
      "Сломанные или не работающие светофоры, отсутствующие или повреждённые дорожные знаки, создающие аварийные ситуации.",
  },
  {
    icon: "MapPin",
    title: "Нарушения разметки",
    description:
      "Стёртая, неправильная или отсутствующая дорожная разметка, которая вводит водителей в заблуждение и приводит к нарушениям.",
  },
  {
    icon: "Truck",
    title: "Незаконная парковка",
    description:
      "Транспортные средства, блокирующие проезд, припаркованные на тротуарах, в запрещённых местах или мешающие движению.",
  },
  {
    icon: "Flashlight",
    title: "Нет освещения",
    description:
      "Тёмные участки дорог, неработающие фонари и плохая освещённость на пешеходных переходах, повышающие риск аварий.",
  },
  {
    icon: "Building2",
    title: "Другие проблемы",
    description:
      "Любые иные нарушения и опасные ситуации на дорогах: строительный мусор, незакреплённые ограждения, опасные повороты.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Типы нарушений
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          О чём можно <span className="text-primary">сообщить</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Любая проблема на дороге заслуживает внимания. Мы передаём ваши обращения в ответственные службы для оперативного устранения.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="AlertCircle" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
