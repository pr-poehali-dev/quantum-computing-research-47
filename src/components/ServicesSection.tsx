import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "CarFront",
    title: "Незаконная парковка",
    description:
      "Транспортные средства, припаркованные на тротуарах, газонах, у пешеходных переходов или в других запрещённых местах.",
  },
  {
    icon: "Construction",
    title: "Дорожные проблемы",
    description:
      "Ямы, разбитый асфальт, стёртая разметка, повреждённые или отсутствующие знаки, неисправные светофоры.",
  },
  {
    icon: "BookOpen",
    title: "Нарушения инструктажей",
    description:
      "Отсутствие или ненадлежащее проведение инструктажей по охране труда, обучения сотрудников безопасным методам работы.",
  },
  {
    icon: "HardHat",
    title: "Необеспечение СИЗ",
    description:
      "Работники не обеспечены средствами индивидуальной защиты — касками, жилетами, перчатками, спецодеждой.",
  },
  {
    icon: "Wrench",
    title: "Нарушения при техобслуживании",
    description:
      "Нарушения порядка технического обслуживания и ремонта транспортных средств, несоблюдение регламентов безопасности.",
  },
  {
    icon: "AlertOctagon",
    title: "Неисправное оборудование",
    description:
      "Эксплуатация заведомо неисправной техники, механизмов или транспортных средств, создающих угрозу безопасности.",
  },
  {
    icon: "Map",
    title: "Отсутствие схем расстановки",
    description:
      "Отсутствие или несоответствие нормам схем расстановки транспорта и разметки на производственных площадках.",
  },
  {
    icon: "PackageOpen",
    title: "Нарушения при погрузке",
    description:
      "Несоблюдение правил работы с грузоподъёмными механизмами, нарушения при погрузочно-разгрузочных работах.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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