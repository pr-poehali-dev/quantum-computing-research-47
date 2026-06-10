export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🚦 ДорогаОК</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Сервис для водителей, которые хотят сделать дороги безопаснее. © 2025 ДорогаОК. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О сервисе
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Типы нарушений
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Результаты
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Подать жалобу
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Работаем по всей России</li>
              <li className="text-sm text-muted-foreground">Ответ в течение 48 часов</li>
              <li className="text-sm text-muted-foreground">Сервис бесплатен для водителей</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
