import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Подал жалобу на яму у нашего дома — через три дня приехала бригада и всё заделали. Никогда не думал, что это может работать так быстро!",
    name: "Алексей",
    role: "Водитель, Москва",
  },
  {
    quote:
      "Наконец-то появился инструмент, где можно реально достучаться до служб. Обращение оформляется за пару минут, а результат виден. Очень удобно.",
    name: "Марина",
    role: "Водитель, Санкт-Петербург",
  },
  {
    quote:
      "Объединились с соседями, подали коллективную жалобу на разбитую дорогу во дворе. Получили официальный ответ и через неделю начался ремонт.",
    name: "Дмитрий",
    role: "Водитель, Екатеринбург",
  },
  {
    quote:
      "Сломанный светофор на перекрёстке создавал опасность каждый день. После жалобы через сервис его починили за 2 дня. Это реально работает!",
    name: "Ольга",
    role: "Водитель, Казань",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят водители
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Тысячи водителей уже воспользовались сервисом и получили реальный результат. Вот что они рассказывают.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
