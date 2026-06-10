import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const cases = [
  {
    icon: "Construction",
    category: "Дорожное покрытие",
    title: "Яма на пр. Победы, 45",
    description:
      "Водитель зафиксировал опасную выбоину глубиной 15 см на оживлённом проспекте. После обращения через сервис дорожная служба устранила дефект за 3 дня.",
    result: "Устранено за 3 дня",
    tags: ["Асфальт", "Дорожная служба", "Выполнено"],
  },
  {
    icon: "TrafficCone",
    category: "Дорожные знаки",
    title: "Сбитый знак «Уступи дорогу»",
    description:
      "На перекрёстке отсутствовал знак приоритета после ДТП. Жалоба была подана через приложение с фотографией. ГИБДД восстановила знак на следующий день.",
    result: "Устранено за 1 день",
    tags: ["Знаки", "ГИБДД", "Выполнено"],
  },
  {
    icon: "Zap",
    category: "Освещение",
    title: "Тёмный пешеходный переход",
    description:
      "Неработающие фонари на пешеходном переходе вблизи школы создавали опасность. После коллективного обращения городской свет восстановили за 5 дней.",
    result: "Устранено за 5 дней",
    tags: ["Освещение", "Горсвет", "Выполнено"],
  },
  {
    icon: "CarFront",
    category: "Парковка",
    title: "Блокировка выезда во дворе",
    description:
      "Систематическая незаконная парковка блокировала выезд из жилого двора. После нескольких обращений установили знаки и нанесли разметку.",
    result: "Устранено за 7 дней",
    tags: ["Парковка", "ГИБДД", "Выполнено"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Реальные результаты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Благодаря обращениям водителей эти проблемы были решены. Ваш голос действительно меняет ситуацию на дорогах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    <Icon name={item.icon} fallback="AlertCircle" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                    {item.result}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
