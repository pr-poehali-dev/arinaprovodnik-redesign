import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Путь к себе</h1>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Записаться на курс
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-foreground">
                Создайте гармоничные отношения с собой и партнёром
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Трансформационный курс для женщин, которые готовы освободиться от прошлого 
                и построить счастливые отношения
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Начать трансформацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}>
                  Программа курса
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e9586f3e-bb9a-4b6d-872f-72fa8809c57d/files/06512c92-916c-46d6-8e08-586b1013f706.jpg" 
                alt="Гармония и спокойствие"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            Что вы получите после курса
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Гармоничные отношения',
                description: 'Научитесь строить доверительные отношения, где вас ценят и любят'
              },
              {
                icon: 'Sparkles',
                title: 'Внутренняя целостность',
                description: 'Обретёте спокойствие, уверенность и психологическую гибкость'
              },
              {
                icon: 'Shield',
                title: 'Свобода от прошлого',
                description: 'Проработаете детские травмы и родительские паттерны'
              },
              {
                icon: 'Sun',
                title: 'Осознанность',
                description: 'Услышите свои истинные желания и потребности'
              },
              {
                icon: 'TrendingUp',
                title: 'Меньше конфликтов',
                description: 'Перестанете совершать ошибки, которые разрушают отношения'
              },
              {
                icon: 'Smile',
                title: 'Больше радости',
                description: 'Получите удовольствие от общения с партнёром и с собой'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">
            Программа курса
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Глубокая трансформация через последовательную работу с собой
          </p>
          
          <div className="space-y-8">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Теория отношений</h3>
                    <p className="text-muted-foreground">Фундаментальная база для построения гармоничных отношений</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-lg">Что вы изучите:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Принципы построения отношений между людьми на самом деле</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Развеете мифы и иллюзии о любви, поймёте, что мешает именно вам</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Детско-родительские отношения и их влияние на нынешние отношения</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Найдёте свои искажения, родительские директивы и паттерны</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Диагностика текущих отношений и выход из деструктивных связей</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Практики для отпускания обид и проживания подавленных эмоций</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-primary" />
                    Результат модуля:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Твердая теоретическая база по построению отношений</li>
                    <li>• Найдёте искажения, мешавшие строить гармоничные отношения</li>
                    <li>• Перестроите поведение так, что партнёр начнёт любить и ценить</li>
                    <li>• Уменьшите конфликты и усилите доверительный контакт</li>
                    <li>• Обретёте целостность, самостоятельность и уверенность</li>
                    <li>• Начнёте слышать свои желания и получать больше удовольствия</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-secondary text-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Моё рождение</h3>
                    <p className="text-muted-foreground italic">Программа модуля в разработке...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                О курсе
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Это не просто теоретический курс — это глубокая трансформационная работа 
                  с собой, которая меняет жизнь.
                </p>
                <p>
                  Вы получите инструменты для работы с детскими травмами, научитесь 
                  распознавать деструктивные паттерны и создавать здоровые, гармоничные 
                  отношения.
                </p>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Модульная структура</p>
                    <p>Последовательное погружение в теорию и практику</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Поддержка группы</p>
                    <p>Совместная работа с единомышленниками</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileText" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Практические упражнения</p>
                    <p>Техники для проработки и трансформации</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/e9586f3e-bb9a-4b6d-872f-72fa8809c57d/files/5df510fb-3f84-4536-84a0-b2a6f4fb0e46.jpg" 
                alt="Трансформация"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Начните свой путь к гармонии
            </h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами для записи на курс
            </p>
          </div>
          
          <Card className="shadow-2xl border-2 border-primary/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="anna@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ваш вопрос (необязательно)</label>
                  <Textarea 
                    placeholder="Расскажите, что привело вас на этот курс..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4">Путь к себе</h3>
            <p className="text-muted-foreground mb-6">
              Трансформационный курс для создания гармоничных отношений
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
