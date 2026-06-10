import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, ThumbsUp, Send } from "lucide-react"

const initialComments = [
  {
    name: "Алексей М.",
    date: "8 июня 2025",
    text: "Подал жалобу на яму у нашего дома — через три дня приехала бригада и всё заделали. Наконец-то работает!",
    likes: 14,
  },
  {
    name: "Марина К.",
    date: "5 июня 2025",
    text: "Очень удобный сервис. Оформила обращение за 2 минуты, получила подтверждение. Жду результата.",
    likes: 9,
  },
  {
    name: "Дмитрий В.",
    date: "1 июня 2025",
    text: "Давно хотел куда-то написать про неисправный светофор на нашем перекрёстке. Теперь есть куда — спасибо!",
    likes: 7,
  },
]

export function CommentsSection() {
  const [comments, setComments] = useState(initialComments)
  const [form, setForm] = useState({ name: "", text: "" })
  const [liked, setLiked] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.text.trim()) return
    setComments([
      {
        name: form.name,
        date: new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }),
        text: form.text,
        likes: 0,
      },
      ...comments,
    ])
    setForm({ name: "", text: "" })
  }

  const handleLike = (index: number) => {
    if (liked.includes(index)) return
    setLiked([...liked, index])
    setComments(comments.map((c, i) => i === index ? { ...c, likes: c.likes + 1 } : c))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <MessageCircle className="h-4 w-4" />
            Комментарии
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Что говорят <span className="text-primary">водители</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Оставьте свой комментарий — ваш опыт важен для других
          </p>
        </div>

        {/* Форма */}
        <Card className="border-none shadow-xl bg-background mb-10">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <Textarea
                placeholder="Напишите комментарий..."
                value={form.text}
                onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                rows={3}
                required
              />
              <Button type="submit" className="group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Оставить комментарий
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Список комментариев */}
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                        {comment.name[0]}
                      </div>
                      <div>
                        <span className="font-semibold text-sm">{comment.name}</span>
                        <span className="text-muted-foreground text-xs ml-2">{comment.date}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground pl-11">{comment.text}</p>
                  </div>
                  <button
                    onClick={() => handleLike(index)}
                    className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-all flex-shrink-0 ${
                      liked.includes(index)
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <ThumbsUp className="h-3 w-3" />
                    {comment.likes}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
