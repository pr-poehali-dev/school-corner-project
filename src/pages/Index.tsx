import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'schedule' | 'anthem' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const schedule = [
    { day: 'Понедельник', lessons: ['Математика', 'Русский язык', 'История', 'Физкультура', 'Английский'] },
    { day: 'Вторник', lessons: ['Литература', 'Алгебра', 'Физика', 'География', 'Биология'] },
    { day: 'Среда', lessons: ['Химия', 'Геометрия', 'Информатика', 'Обществознание', 'ОБЖ'] },
    { day: 'Четверг', lessons: ['Английский', 'Русский язык', 'История', 'Музыка', 'Физкультура'] },
    { day: 'Пятница', lessons: ['Математика', 'Литература', 'Физика', 'Технология', 'ИЗО'] }
  ];

  const anthemText = `Россия — священная наша держава,
Россия — любимая наша страна.
Могучая воля, великая слава —
Твоё достоянье на все времена!

Славься, Отечество наше свободное,
Братских народов союз вековой,
Предками данная мудрость народная!
Славься, страна! Мы гордимся тобой!

От южных морей до полярного края
Раскинулись наши леса и поля.
Одна ты на свете! Одна ты такая —
Хранимая Богом родная земля!

Славься, Отечество наше свободное,
Братских народов союз вековой,
Предками данная мудрость народная!
Славься, страна! Мы гордимся тобой!

Широкий простор для мечты и для жизни
Грядущие нам открывают года.
Нам силу даёт наша верность Отчизне.
Так было, так есть и так будет всегда!

Славься, Отечество наше свободное,
Братских народов союз вековой,
Предками данная мудрость народная!
Славься, страна! Мы гордимся тобой!`;

  const lessonTimes = ['8:30 - 9:15', '9:25 - 10:10', '10:25 - 11:10', '11:30 - 12:15', '12:25 - 13:10'];

  const handlePlayAnthem = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/f/f3/Anthem_of_Russia_%282000%29.ogg');
      audio.play();
      audio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-bold text-primary mb-2">
            Классный уголок
          </h1>
          <p className="text-lg text-muted-foreground">
            Информация для учеников класса
          </p>
        </header>

        {!activeSection && (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-scale-in">
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur"
              onClick={() => setActiveSection('schedule')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-center text-2xl font-heading">
                  Расписание уроков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Недельное расписание занятий с временем уроков
                </p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur"
              onClick={() => setActiveSection('anthem')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Music" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-center text-2xl font-heading">
                  Гимн России
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Текст и аудио государственного гимна
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <Button 
              onClick={() => setActiveSection(null)}
              variant="ghost"
              className="mb-6"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>

            <Card className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="Calendar" size={32} className="text-primary" />
                  Расписание уроков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {schedule.map((day, idx) => (
                    <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        {day.day}
                      </h3>
                      <div className="grid gap-3">
                        {day.lessons.map((lesson, lessonIdx) => (
                          <div 
                            key={lessonIdx}
                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-center w-32 text-sm font-medium text-muted-foreground">
                              <Icon name="Clock" size={16} className="mr-2" />
                              {lessonTimes[lessonIdx]}
                            </div>
                            <Separator orientation="vertical" className="h-8" />
                            <div className="flex-1 font-medium">
                              {lesson}
                            </div>
                          </div>
                        ))}
                      </div>
                      {idx < schedule.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'anthem' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Button 
              onClick={() => setActiveSection(null)}
              variant="ghost"
              className="mb-6"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>

            <Card className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="Music" size={32} className="text-primary" />
                  Государственный гимн Российской Федерации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex justify-center">
                  <Button 
                    size="lg"
                    onClick={handlePlayAnthem}
                    className="gap-2"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                    {isPlaying ? 'Остановить' : 'Прослушать гимн'}
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-foreground bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                    {anthemText}
                  </pre>
                </div>

                <div className="mt-6 text-sm text-muted-foreground text-center">
                  <p>Музыка: А. В. Александров</p>
                  <p>Слова: С. В. Михалков</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
