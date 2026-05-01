const allQuestions = [
  {
    "id": 1,
    "question": "Что такое ЭВМ?",
    "answers": [
      {
        "text": "Комплекс технических и программных средств",
        "isCorrect": true
      },
      {
        "text": "Любое электронное устройство с экраном",
        "isCorrect": false
      },
      {
        "text": "Электронная вычислительная матрица",
        "isCorrect": false
      },
      {
        "text": "Математическая модель вычислений",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "question": "Для чего предназначено АЛУ?",
    "answers": [
      {
        "text": "Управление потоками команд",
        "isCorrect": false
      },
      {
        "text": "Выполнение арифметических и логических операций",
        "isCorrect": true
      },
      {
        "text": "Хранение оперативных данных",
        "isCorrect": false
      },
      {
        "text": "Синхронизация работы шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "question": "ЭВМ по принципу Фон Неймана состоит из:",
    "answers": [
      {
        "text": "Процессор, память, устройства ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Монитор, системный блок, клавиатура",
        "isCorrect": false
      },
      {
        "text": "АЛУ, ПЗУ и шина данных",
        "isCorrect": false
      },
      {
        "text": "Микросхемы, провода и корпус",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "question": "Перфокарты впервые стали использоваться в:",
    "answers": [
      {
        "text": "ЭВМ первого поколения",
        "isCorrect": false
      },
      {
        "text": "Ткацких станках Жаккарда",
        "isCorrect": true
      },
      {
        "text": "Механических калькуляторах Паскаля",
        "isCorrect": false
      },
      {
        "text": "Телеграфных аппаратах Морзе",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "question": "Принцип открытости архитектуры ЭВМ означает:",
    "answers": [
      {
        "text": "Свободный доступ к коду ПО",
        "isCorrect": false
      },
      {
        "text": "Работа без защитного корпуса",
        "isCorrect": false
      },
      {
        "text": "Возможность замены отдельных узлов",
        "isCorrect": true
      },
      {
        "text": "Отсутствие авторских прав",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "question": "Какое высказывание верно?",
    "answers": [
      {
        "text": "Контроллер управляет внешним устройством",
        "isCorrect": true
      },
      {
        "text": "Процессор хранит все данные",
        "isCorrect": false
      },
      {
        "text": "Шина данных всегда однонаправленная",
        "isCorrect": false
      },
      {
        "text": "ПЗУ — это энергозависимая память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "question": "Что такое системный интерфейс?",
    "answers": [
      {
        "text": "Графическая оболочка ОС",
        "isCorrect": false
      },
      {
        "text": "Совокупность шин и протоколов",
        "isCorrect": true
      },
      {
        "text": "Разъем для монитора",
        "isCorrect": false
      },
      {
        "text": "Панель настроек BIOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "question": "Какой принцип Фон Неймана обуславливает хранение программ и данных одной памяти?",
    "answers": [
      {
        "text": "Принцип адресности",
        "isCorrect": false
      },
      {
        "text": "Принцип однородности памяти",
        "isCorrect": true
      },
      {
        "text": "Принцип двоичного кодирования",
        "isCorrect": false
      },
      {
        "text": "Принцип программного управления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "question": "Какой принцип Фон Неймана обуславливает последовательное выполнение команд программы?",
    "answers": [
      {
        "text": "Принцип программного управления",
        "isCorrect": true
      },
      {
        "text": "Принцип иерархии памяти",
        "isCorrect": false
      },
      {
        "text": "Принцип жесткости архитектуры",
        "isCorrect": false
      },
      {
        "text": "Принцип параллелизма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "question": "Какой принцип Фон Неймана обуславливает деление памяти на ячейки?",
    "answers": [
      {
        "text": "Принцип дискретности",
        "isCorrect": false
      },
      {
        "text": "Принцип адресности",
        "isCorrect": true
      },
      {
        "text": "Принцип блочной структуры",
        "isCorrect": false
      },
      {
        "text": "Принцип произвольного доступа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "question": "Какой принцип Фон Неймана обуславливает представление данных в двоичном виде?",
    "answers": [
      {
        "text": "Принцип логической определенности",
        "isCorrect": false
      },
      {
        "text": "Принцип двоичного кодирования",
        "isCorrect": true
      },
      {
        "text": "Принцип квантования информации",
        "isCorrect": false
      },
      {
        "text": "Принцип элементной независимости",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "question": "Мэйнфреймы - это ...",
    "answers": [
      {
        "text": "Игровые персональные компьютеры",
        "isCorrect": false
      },
      {
        "text": "Мощные многопользовательские системы",
        "isCorrect": true
      },
      {
        "text": "Малогабаритные переносные устройства",
        "isCorrect": false
      },
      {
        "text": "Процессоры с RISC-архитектурой",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "question": "К какому классу ЭВМ по вычислительной мощности относят персональные компьютеры:",
    "answers": [
      {
        "text": "Микро-ЭВМ",
        "isCorrect": true
      },
      {
        "text": "Малые ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Средние ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Мини-ЭВМ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "question": "По назначению ЭВМ классифицируют на:",
    "answers": [
      {
        "text": "Настольные, мобильные и серверные",
        "isCorrect": false
      },
      {
        "text": "Универсальные, специализированные, проблемно-ориентированные",
        "isCorrect": true
      },
      {
        "text": "Бытовые, учебные и научные",
        "isCorrect": false
      },
      {
        "text": "Цифровые, аналоговые и гибридные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "question": "На какие виды делятся ЭВМ по размерам и вычислительной мощности?",
    "answers": [
      {
        "text": "Персональные, офисные и игровые",
        "isCorrect": false
      },
      {
        "text": "Стационарные и портативные",
        "isCorrect": false
      },
      {
        "text": "СуперЭВМ, большие, малые, микроЭВМ",
        "isCorrect": true
      },
      {
        "text": "Ламповые, транзисторные и чиповые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "question": "Какое самое главное и принципиальное отличие вычислительных машин разных поколений?",
    "answers": [
      {
        "text": "Используемая элементная база",
        "isCorrect": true
      },
      {
        "text": "Объем оперативной памяти",
        "isCorrect": false
      },
      {
        "text": "Скорость работы принтера",
        "isCorrect": false
      },
      {
        "text": "Количество внешних портов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "question": "Что такое интегральная схема?",
    "answers": [
      {
        "text": "Алгоритм работы процессора",
        "isCorrect": false
      },
      {
        "text": "Проводная сеть между ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Полупроводниковый кристалл с компонентами",
        "isCorrect": true
      },
      {
        "text": "Совокупность всех плат компьютера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "question": "Какой была элементная база первого поколения ЭВМ?",
    "answers": [
      {
        "text": "Электронно-вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Полупроводниковые транзисторы",
        "isCorrect": false
      },
      {
        "text": "Электромагнитные реле",
        "isCorrect": false
      },
      {
        "text": "Дискретные резисторные сборки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "question": "Элементная база второго поколения (1960е годы) - это ...",
    "answers": [
      {
        "text": "Сверхбольшие интегральные схемы",
        "isCorrect": false
      },
      {
        "text": "Полупроводниковые транзисторы",
        "isCorrect": true
      },
      {
        "text": "Магнитные сердечники памяти",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры Intel",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "question": "Элементная база третьего поколения(1970е годы) - это ...",
    "answers": [
      {
        "text": "Малые интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Искусственный интеллект",
        "isCorrect": false
      },
      {
        "text": "Оптоволоконные компоненты",
        "isCorrect": false
      },
      {
        "text": "Квантовые точки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "question": "Элементная база четвертого поколения (1980-е годы) - это...",
    "answers": [
      {
        "text": "Сверхбольшие интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Индивидуальные транзисторы",
        "isCorrect": false
      },
      {
        "text": "Магнитные сердечники",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "question": "Абак - это:",
    "answers": [
      {
        "text": "Счетная доска",
        "isCorrect": true
      },
      {
        "text": "Первый арифмометр",
        "isCorrect": false
      },
      {
        "text": "Механический компьютер",
        "isCorrect": false
      },
      {
        "text": "Электронный калькулятор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "question": "Какое поколение ЭВМ будет пользоваться популярностью в будущем?",
    "answers": [
      {
        "text": "Пятое и последующие",
        "isCorrect": true
      },
      {
        "text": "Второе",
        "isCorrect": false
      },
      {
        "text": "Третье аналоговое",
        "isCorrect": false
      },
      {
        "text": "Четвертое мобильное",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "question": "Классификация ПЭВМ по конструктивным особенностям:",
    "answers": [
      {
        "text": "Стационарные и портативные",
        "isCorrect": true
      },
      {
        "text": "Быстрые и медленные",
        "isCorrect": false
      },
      {
        "text": "Цифровые и текстовые",
        "isCorrect": false
      },
      {
        "text": "Научные и учебные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "question": "В 50-е годы началось ... поколение ЭВМ.",
    "answers": [
      {
        "text": "Второе",
        "isCorrect": true
      },
      {
        "text": "Четвертое",
        "isCorrect": false
      },
      {
        "text": "Нулевое",
        "isCorrect": false
      },
      {
        "text": "Третье",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "question": "Что такое 'ENIAC'?",
    "answers": [
      {
        "text": "Электронный цифровой компьютер",
        "isCorrect": true
      },
      {
        "text": "Механический интегратор",
        "isCorrect": false
      },
      {
        "text": "Язык программирования",
        "isCorrect": false
      },
      {
        "text": "Операционная система",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "question": "Период первого поколения ЭВМ:",
    "answers": [
      {
        "text": "1946 – 1955 годы",
        "isCorrect": true
      },
      {
        "text": "1930 – 1940 годы",
        "isCorrect": false
      },
      {
        "text": "1955 – 1960 годы",
        "isCorrect": false
      },
      {
        "text": "1940 – 1950 годы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "question": "Период второго поколения ЭВМ:",
    "answers": [
      {
        "text": "1955 – 1964 годы",
        "isCorrect": true
      },
      {
        "text": "1960 – 1970 годы",
        "isCorrect": false
      },
      {
        "text": "1950 – 1955 годы",
        "isCorrect": false
      },
      {
        "text": "1965 – 1975 годы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "question": "Период третьего поколения ЭВМ:",
    "answers": [
      {
        "text": "1964 – 1971 годы",
        "isCorrect": true
      },
      {
        "text": "1970 – 1980 годы",
        "isCorrect": false
      },
      {
        "text": "1960 – 1968 годы",
        "isCorrect": false
      },
      {
        "text": "1975 – 1982 годы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "question": "Для чего разрабатывался 'Colossus' Аланом Тьюрингом?",
    "answers": [
      {
        "text": "Для дешифровки сообщений",
        "isCorrect": true
      },
      {
        "text": "Расчета полета ядер",
        "isCorrect": false
      },
      {
        "text": "Прогноза погоды",
        "isCorrect": false
      },
      {
        "text": "Учета населения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "question": "Кто описал машину для суммирования чисел в 1642 году?",
    "answers": [
      {
        "text": "Блез Паскаль",
        "isCorrect": true
      },
      {
        "text": "Готфрид Лейбниц",
        "isCorrect": false
      },
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": false
      },
      {
        "text": "Ада Лавлейс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "question": "В каком году Блез Паскаль описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "1642 год",
        "isCorrect": true
      },
      {
        "text": "1650 год",
        "isCorrect": false
      },
      {
        "text": "1635 год",
        "isCorrect": false
      },
      {
        "text": "1672 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "question": "В каком году Джоном Непером была создана деревянная машина для вычислений?",
    "answers": [
      {
        "text": "1617 год",
        "isCorrect": true
      },
      {
        "text": "1600 год",
        "isCorrect": false
      },
      {
        "text": "1625 год",
        "isCorrect": false
      },
      {
        "text": "1590 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "question": "В каком году Ли де Форест запатентовал вакуумный триод?",
    "answers": [
      {
        "text": "1906 год",
        "isCorrect": true
      },
      {
        "text": "1912 год",
        "isCorrect": false
      },
      {
        "text": "1895 год",
        "isCorrect": false
      },
      {
        "text": "1920 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "question": "Кто запатентовал первый вакуумный триод?",
    "answers": [
      {
        "text": "Ли де Форест",
        "isCorrect": true
      },
      {
        "text": "Томас Эдисон",
        "isCorrect": false
      },
      {
        "text": "Джон Флеминг",
        "isCorrect": false
      },
      {
        "text": "Александр Попов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "question": "В каком году была создана машина ENIAC?",
    "answers": [
      {
        "text": "1945 год",
        "isCorrect": true
      },
      {
        "text": "1939 год",
        "isCorrect": false
      },
      {
        "text": "1951 год",
        "isCorrect": false
      },
      {
        "text": "1942 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "question": "Кто в 1642 году описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "Паскаль",
        "isCorrect": true
      },
      {
        "text": "Леонардо да Винчи",
        "isCorrect": false
      },
      {
        "text": "Непер",
        "isCorrect": false
      },
      {
        "text": "Шиккард",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "question": "Когда была придумана первая вычислительная машина?",
    "answers": [
      {
        "text": "В XVII веке",
        "isCorrect": true
      },
      {
        "text": "В XIX веке",
        "isCorrect": false
      },
      {
        "text": "В XX веке",
        "isCorrect": false
      },
      {
        "text": "В XV веке",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "question": "Назовите первую ЭВМ, изобретённую в 1937 году.",
    "answers": [
      {
        "text": "ABC",
        "isCorrect": true
      },
      {
        "text": "Z3",
        "isCorrect": false
      },
      {
        "text": "Mark I",
        "isCorrect": false
      },
      {
        "text": "EDVAC",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "question": "В каком году была создана первая ЭВМ - АВС?",
    "answers": [
      {
        "text": "1939 год",
        "isCorrect": true
      },
      {
        "text": "1945 год",
        "isCorrect": false
      },
      {
        "text": "1930 год",
        "isCorrect": false
      },
      {
        "text": "1950 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "question": "Переведите число A16 из шестнадцатеричной в восьмеричную систему счисления.",
    "answers": [
      {
        "text": "12",
        "isCorrect": true
      },
      {
        "text": "10",
        "isCorrect": false
      },
      {
        "text": "14",
        "isCorrect": false
      },
      {
        "text": "22",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "question": "Переведите число F14 из шестнадцатеричной в восьмеричную систему счисления.",
    "answers": [
      {
        "text": "7414",
        "isCorrect": false
      },
      {
        "text": "7424",
        "isCorrect": true
      },
      {
        "text": "6324",
        "isCorrect": false
      },
      {
        "text": "7524",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "question": "Переведите число 88 из десятичной в двоичную систему счисления.",
    "answers": [
      {
        "text": "1011000",
        "isCorrect": true
      },
      {
        "text": "1101000",
        "isCorrect": false
      },
      {
        "text": "1011010",
        "isCorrect": false
      },
      {
        "text": "1001100",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "question": "Переведите число 129 из десятичной в двоичную систему счисления.",
    "answers": [
      {
        "text": "10000011",
        "isCorrect": false
      },
      {
        "text": "11000001",
        "isCorrect": false
      },
      {
        "text": "10000001",
        "isCorrect": true
      },
      {
        "text": "10010001",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "question": "Переведите число 110011 из двоичной системы счисления в восьмеричную.",
    "answers": [
      {
        "text": "61",
        "isCorrect": false
      },
      {
        "text": "63",
        "isCorrect": true
      },
      {
        "text": "53",
        "isCorrect": false
      },
      {
        "text": "67",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "question": "Переведите число 10011101 из двоичной системы счисления в десятичную.",
    "answers": [
      {
        "text": "153",
        "isCorrect": false
      },
      {
        "text": "161",
        "isCorrect": false
      },
      {
        "text": "149",
        "isCorrect": false
      },
      {
        "text": "157",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 47,
    "question": "Переведите число 800 десятеричной системы счисления в шестнадцатеричную.",
    "answers": [
      {
        "text": "320",
        "isCorrect": true
      },
      {
        "text": "310",
        "isCorrect": false
      },
      {
        "text": "2F0",
        "isCorrect": false
      },
      {
        "text": "3A0",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "question": "Переведите число 1769 из десятеричной системы счисления в шестнадцатеричную.",
    "answers": [
      {
        "text": "6D9",
        "isCorrect": false
      },
      {
        "text": "6E9",
        "isCorrect": true
      },
      {
        "text": "7E9",
        "isCorrect": false
      },
      {
        "text": "6F9",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "question": "Вычислить разность чисел 6089 и 4489 в девятеричной системе.",
    "answers": [
      {
        "text": "150",
        "isCorrect": true
      },
      {
        "text": "160",
        "isCorrect": false
      },
      {
        "text": "250",
        "isCorrect": false
      },
      {
        "text": "140",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "question": "Вычислить разность чисел 10668 и 5468 в восьмеричной системе.",
    "answers": [
      {
        "text": "310",
        "isCorrect": false
      },
      {
        "text": "320",
        "isCorrect": true
      },
      {
        "text": "420",
        "isCorrect": false
      },
      {
        "text": "330",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "question": "Вычислить разность чисел 7778 и 4468 в восьмеричной системе.",
    "answers": [
      {
        "text": "321",
        "isCorrect": false
      },
      {
        "text": "332",
        "isCorrect": false
      },
      {
        "text": "331",
        "isCorrect": true
      },
      {
        "text": "231",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "question": "Вычислить разность чисел 55126 и 1155 6 в шестеричной системе.",
    "answers": [
      {
        "text": "4323",
        "isCorrect": false
      },
      {
        "text": "4413",
        "isCorrect": false
      },
      {
        "text": "4213",
        "isCorrect": false
      },
      {
        "text": "4313",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 53,
    "question": "Переведите число 158 из десятеричной системы счисления в четверичную.",
    "answers": [
      {
        "text": "2132",
        "isCorrect": true
      },
      {
        "text": "2232",
        "isCorrect": false
      },
      {
        "text": "2122",
        "isCorrect": false
      },
      {
        "text": "2133",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "question": "Вычислить сумму чисел 8876 и 4856 в девятеричной системе.",
    "answers": [
      {
        "text": "1473",
        "isCorrect": false
      },
      {
        "text": "1483",
        "isCorrect": true
      },
      {
        "text": "1383",
        "isCorrect": false
      },
      {
        "text": "1583",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "question": "Вычислить сумму чисел 4A16 и F116 в восьмеричной системе.",
    "answers": [
      {
        "text": "463",
        "isCorrect": false
      },
      {
        "text": "573",
        "isCorrect": false
      },
      {
        "text": "473",
        "isCorrect": true
      },
      {
        "text": "471",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "question": "Вычислить сумму чисел 5168 и 7778 в восьмеричной системе.",
    "answers": [
      {
        "text": "1515",
        "isCorrect": true
      },
      {
        "text": "1415",
        "isCorrect": false
      },
      {
        "text": "1525",
        "isCorrect": false
      },
      {
        "text": "1516",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "question": "Вычислить сумму чисел 5126 и 456 в шестеричной системе.",
    "answers": [
      {
        "text": "1011",
        "isCorrect": false
      },
      {
        "text": "601",
        "isCorrect": false
      },
      {
        "text": "1001",
        "isCorrect": true
      },
      {
        "text": "1002",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "question": "Двоичное представление данных основывается на ...",
    "answers": [
      {
        "text": "десяти цифрах",
        "isCorrect": false
      },
      {
        "text": "двух устойчивых состояниях",
        "isCorrect": true
      },
      {
        "text": "магнитных полях",
        "isCorrect": false
      },
      {
        "text": "скорости процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "question": "Способ именования и изображения чисел с помощью символов называется ...",
    "answers": [
      {
        "text": "система счисления",
        "isCorrect": true
      },
      {
        "text": "кодирование данных",
        "isCorrect": false
      },
      {
        "text": "алгоритм вычисления",
        "isCorrect": false
      },
      {
        "text": "математический базис",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "question": "Информация кодируется в двоичной форме и разделяется на элементы называемые ...",
    "answers": [
      {
        "text": "биты",
        "isCorrect": true
      },
      {
        "text": "байты данных",
        "isCorrect": false
      },
      {
        "text": "пакеты",
        "isCorrect": false
      },
      {
        "text": "регистры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "question": "Кто изобрёл двоичную систему счисления?",
    "answers": [
      {
        "text": "Готфрид Вильгельм Лейбниц",
        "isCorrect": true
      },
      {
        "text": "Блез Паскаль",
        "isCorrect": false
      },
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": false
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "question": "Что общего между машиной Бэббиджа, современным компьютером и человеческим мозгом?",
    "answers": [
      {
        "text": "Использование электричества",
        "isCorrect": false
      },
      {
        "text": "Способность обрабатывать информацию",
        "isCorrect": true
      },
      {
        "text": "Двоичная логика работы",
        "isCorrect": false
      },
      {
        "text": "Наличие транзисторов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "question": "Назовите сигнал, область определения которого есть дискретное пространство.",
    "answers": [
      {
        "text": "Аналоговый сигнал",
        "isCorrect": false
      },
      {
        "text": "Гармонический сигнал",
        "isCorrect": false
      },
      {
        "text": "Дискретный сигнал",
        "isCorrect": true
      },
      {
        "text": "Световой поток",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "question": "Назовите сигнал, область определения которого есть непрерывное пространство, то есть пространство, не являющееся дискретным.",
    "answers": [
      {
        "text": "Цифровой код",
        "isCorrect": false
      },
      {
        "text": "Непрерывный сигнал",
        "isCorrect": true
      },
      {
        "text": "Квантованный сигнал",
        "isCorrect": false
      },
      {
        "text": "Бинарный импульс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "question": "По принципу Фон Неймана данные и команды представлены в:",
    "answers": [
      {
        "text": "Текстовом формате",
        "isCorrect": false
      },
      {
        "text": "Двоичном виде",
        "isCorrect": true
      },
      {
        "text": "Разных типах памяти",
        "isCorrect": false
      },
      {
        "text": "Виде макрокоманд",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "question": "Дискретная информация - это ...",
    "answers": [
      {
        "text": "Постоянный сигнал",
        "isCorrect": false
      },
      {
        "text": "Прерывистая информация",
        "isCorrect": true
      },
      {
        "text": "Звуковая волна",
        "isCorrect": false
      },
      {
        "text": "Аналоговое вещание",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "question": "Какой вид информации использует ГВМ (Гибридная вычислительная машина)?",
    "answers": [
      {
        "text": "Цифровую и аналоговую",
        "isCorrect": true
      },
      {
        "text": "Только символьную",
        "isCorrect": false
      },
      {
        "text": "Исключительно релейную",
        "isCorrect": false
      },
      {
        "text": "Текстовые блоки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "question": "Какой вид информации использует АВМ (Аналоговая вычислительная машина)?",
    "answers": [
      {
        "text": "Двоичный код",
        "isCorrect": false
      },
      {
        "text": "Непрерывные величины",
        "isCorrect": true
      },
      {
        "text": "Логические предикаты",
        "isCorrect": false
      },
      {
        "text": "Целые числа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "question": "Какой вид информации использует ЦВМ (Цифровая вычислительная машина)?",
    "answers": [
      {
        "text": "Радиоволны",
        "isCorrect": false
      },
      {
        "text": "Переменное напряжение",
        "isCorrect": false
      },
      {
        "text": "Дискретные сигналы",
        "isCorrect": true
      },
      {
        "text": "Жидкостные потоки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "question": "Прикладное программное обеспечение - это:",
    "answers": [
      {
        "text": "Драйверы видеокарты",
        "isCorrect": false
      },
      {
        "text": "Программы для пользователя",
        "isCorrect": true
      },
      {
        "text": "Операционная система",
        "isCorrect": false
      },
      {
        "text": "Прошивка BIOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "question": "Системное программное обеспечение - это:",
    "answers": [
      {
        "text": "Текстовые редакторы",
        "isCorrect": false
      },
      {
        "text": "Среда работы программ",
        "isCorrect": true
      },
      {
        "text": "Графические игры",
        "isCorrect": false
      },
      {
        "text": "Базы данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "question": "Существует 2 вида программного обеспечения. Назовите их.",
    "answers": [
      {
        "text": "Системное и прикладное",
        "isCorrect": true
      },
      {
        "text": "Платное и свободное",
        "isCorrect": false
      },
      {
        "text": "Игровое и офисное",
        "isCorrect": false
      },
      {
        "text": "Серверное и клиентское",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 73,
    "question": "Что будут использовать нейрокомпьютеры в качестве элементной базы?",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Искусственные нейроны",
        "isCorrect": true
      },
      {
        "text": "Кремниевые транзисторы",
        "isCorrect": false
      },
      {
        "text": "Магнитные сердечники",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "question": "По каким признакам ЭВМ делятся на поколения?",
    "answers": [
      {
        "text": "По объему памяти",
        "isCorrect": false
      },
      {
        "text": "По элементной базе",
        "isCorrect": true
      },
      {
        "text": "По весу устройства",
        "isCorrect": false
      },
      {
        "text": "По языку программирования",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "question": "Четвёртое поколение ПК использует:",
    "answers": [
      {
        "text": "Перфокарты",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": true
      },
      {
        "text": "Электронные лампы",
        "isCorrect": false
      },
      {
        "text": "Ферритовые кольца",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "question": "Третье поколение ПК использует:",
    "answers": [
      {
        "text": "Интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Дискретные транзисторы",
        "isCorrect": false
      },
      {
        "text": "Механические реле",
        "isCorrect": false
      },
      {
        "text": "Квантовые точки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "question": "Как называется коэффициент, на который следует умножить тактовую частоту материнской платы, для достижения частоты процессора?",
    "answers": [
      {
        "text": "Системная шина",
        "isCorrect": false
      },
      {
        "text": "Множитель частоты",
        "isCorrect": true
      },
      {
        "text": "Делитель напряжения",
        "isCorrect": false
      },
      {
        "text": "Тайминг задержки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "question": "Что такое процессор?",
    "answers": [
      {
        "text": "Устройство ввода текста",
        "isCorrect": false
      },
      {
        "text": "Устройство обработки данных",
        "isCorrect": true
      },
      {
        "text": "Блок питания системы",
        "isCorrect": false
      },
      {
        "text": "Хранилище документов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "question": "Что такое регистры?",
    "answers": [
      {
        "text": "Сверхбыстрая память процессора",
        "isCorrect": true
      },
      {
        "text": "Внешние жесткие диски",
        "isCorrect": false
      },
      {
        "text": "Списки файлов ОС",
        "isCorrect": false
      },
      {
        "text": "Ячейки видеокарты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "question": "Как называются проводники связывающие процессор с оперативной памятью и остальными устройствами компьютера?",
    "answers": [
      {
        "text": "Сетевой кабель",
        "isCorrect": false
      },
      {
        "text": "Системная шина",
        "isCorrect": true
      },
      {
        "text": "Силовой провод",
        "isCorrect": false
      },
      {
        "text": "Оптическое волокно",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "question": "Сколько основных шин в компьютере?",
    "answers": [
      {
        "text": "Три основные шины",
        "isCorrect": true
      },
      {
        "text": "Пять системных линий",
        "isCorrect": false
      },
      {
        "text": "Десять каналов",
        "isCorrect": false
      },
      {
        "text": "Только две",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "question": "Выберите правильные варианты основных шин:",
    "answers": [
      {
        "text": "Системная, локальная, питания",
        "isCorrect": false
      },
      {
        "text": "Данных, адреса, управления",
        "isCorrect": true
      },
      {
        "text": "Видеошина и звуковая",
        "isCorrect": false
      },
      {
        "text": "Шины ввода и вывода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "question": "Сколько проводников входит в адресную шину?",
    "answers": [
      {
        "text": "Зависит от разрядности процессора",
        "isCorrect": true
      },
      {
        "text": "Всегда ровно 64",
        "isCorrect": false
      },
      {
        "text": "Один медный кабель",
        "isCorrect": false
      },
      {
        "text": "Фиксированно 32 линии",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "question": "Из скольких линий состоит шина данных?",
    "answers": [
      {
        "text": "Кратна машинному слову",
        "isCorrect": true
      },
      {
        "text": "Всего 4 линии",
        "isCorrect": false
      },
      {
        "text": "Зависит от монитора",
        "isCorrect": false
      },
      {
        "text": "Около тысячи проводов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "question": "Какие устройства называют периферийными?",
    "answers": [
      {
        "text": "Внешние подключаемые устройства",
        "isCorrect": true
      },
      {
        "text": "Только видеокарты",
        "isCorrect": false
      },
      {
        "text": "Внутренние регистры",
        "isCorrect": false
      },
      {
        "text": "Элементы блока питания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "question": "Дать определение клавиатуре.",
    "answers": [
      {
        "text": "Устройство вывода графики",
        "isCorrect": false
      },
      {
        "text": "Основное устройство ввода данных",
        "isCorrect": true
      },
      {
        "text": "Средство хранения информации",
        "isCorrect": false
      },
      {
        "text": "Манипулятор типа мышь",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "question": "Что такое сканер?",
    "answers": [
      {
        "text": "Устройство для печати",
        "isCorrect": false
      },
      {
        "text": "Оптический ввод изображений",
        "isCorrect": true
      },
      {
        "text": "Считыватель дисков",
        "isCorrect": false
      },
      {
        "text": "Звуковой контроллер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "question": "Что такое принтер?",
    "answers": [
      {
        "text": "Сенсорный экран",
        "isCorrect": false
      },
      {
        "text": "Устройство вывода на бумагу",
        "isCorrect": true
      },
      {
        "text": "Сетевой шлюз",
        "isCorrect": false
      },
      {
        "text": "Графический планшет",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "question": "Что такое стримеры?",
    "answers": [
      {
        "text": "Накопители на магнитной ленте",
        "isCorrect": true
      },
      {
        "text": "Сетевые трансляторы",
        "isCorrect": false
      },
      {
        "text": "Охлаждающие вентиляторы",
        "isCorrect": false
      },
      {
        "text": "Быстрые видеочипы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "question": "Что такое модем?",
    "answers": [
      {
        "text": "Устройство преобразования сигналов",
        "isCorrect": true
      },
      {
        "text": "Модуль оперативной памяти",
        "isCorrect": false
      },
      {
        "text": "Жесткий диск",
        "isCorrect": false
      },
      {
        "text": "Усилитель звука",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "question": "Назовите важнейшее для пользователя устройство ввода команд в ПК.",
    "answers": [
      {
        "text": "Клавиатура",
        "isCorrect": true
      },
      {
        "text": "Монитор",
        "isCorrect": false
      },
      {
        "text": "Дисковод",
        "isCorrect": false
      },
      {
        "text": "Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "question": "На какие группы делятся микропроцессоры по набору команд?",
    "answers": [
      {
        "text": "CISC и RISC",
        "isCorrect": true
      },
      {
        "text": "Простые и сложные",
        "isCorrect": false
      },
      {
        "text": "Бинарные и десятичные",
        "isCorrect": false
      },
      {
        "text": "Статичные и динамичные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "question": "Как называется шина, по которой из памяти поступают команды?",
    "answers": [
      {
        "text": "Шина данных",
        "isCorrect": true
      },
      {
        "text": "Шина прерываний",
        "isCorrect": false
      },
      {
        "text": "Шина питания",
        "isCorrect": false
      },
      {
        "text": "Локальная шина видео",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "question": "По какой шине происходит копирование данных в регистры процессора?",
    "answers": [
      {
        "text": "Шина данных",
        "isCorrect": true
      },
      {
        "text": "Адресная шина",
        "isCorrect": false
      },
      {
        "text": "Шина USB",
        "isCorrect": false
      },
      {
        "text": "Шина тактовой частоты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "question": "Данные по какой шине трактуются как адреса ячеек памяти?",
    "answers": [
      {
        "text": "Шина управления",
        "isCorrect": false
      },
      {
        "text": "Адресная шина",
        "isCorrect": true
      },
      {
        "text": "Системный таймер",
        "isCorrect": false
      },
      {
        "text": "Контроллер прерываний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "question": "Как называются шины для небольшого количества устройств одного класса?",
    "answers": [
      {
        "text": "Локальные шины",
        "isCorrect": true
      },
      {
        "text": "Магистральные шины",
        "isCorrect": false
      },
      {
        "text": "Глобальные сети",
        "isCorrect": false
      },
      {
        "text": "Универсальные порты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "question": "Как называются шины общего назначения для множества устройств?",
    "answers": [
      {
        "text": "Системные шины",
        "isCorrect": true
      },
      {
        "text": "Частные каналы",
        "isCorrect": false
      },
      {
        "text": "Шины кэша",
        "isCorrect": false
      },
      {
        "text": "Вторичные линии",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "question": "К каким устройствам можно отнести принтер и графопостроители?",
    "answers": [
      {
        "text": "Устройства вывода",
        "isCorrect": true
      },
      {
        "text": "Устройства ввода",
        "isCorrect": false
      },
      {
        "text": "Вычислительные блоки",
        "isCorrect": false
      },
      {
        "text": "Сетевые адаптеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "question": "К каким устройствам относятся клавиатура и сканер?",
    "answers": [
      {
        "text": "Устройства ввода",
        "isCorrect": true
      },
      {
        "text": "Устройства хранения",
        "isCorrect": false
      },
      {
        "text": "Устройства вывода",
        "isCorrect": false
      },
      {
        "text": "Системы охлаждения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "question": "Что обеспечивает взаимодействие машины с окружающей средой?",
    "answers": [
      {
        "text": "Внешние устройства",
        "isCorrect": true
      },
      {
        "text": "Математический сопроцессор",
        "isCorrect": false
      },
      {
        "text": "Регистры общего назначения",
        "isCorrect": false
      },
      {
        "text": "Кэш-память первого уровня",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 101,
    "question": "Какая шина имеет провода и схемы сопряжения для подключения блоков ПК к системе энергопитания?",
    "answers": [
      {
        "text": "Шина питания",
        "isCorrect": true
      },
      {
        "text": "Шина управления",
        "isCorrect": false
      },
      {
        "text": "Локальная шина",
        "isCorrect": false
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 102,
    "question": "Второе поколение ПК использовало:",
    "answers": [
      {
        "text": "Электронные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": true
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 103,
    "question": "Первое поколение ПК использовало:",
    "answers": [
      {
        "text": "Полупроводники",
        "isCorrect": false
      },
      {
        "text": "Реле",
        "isCorrect": false
      },
      {
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Магнитные сердечники",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 104,
    "question": "По поколениям персональные компьютеры делятся на:",
    "answers": [
      {
        "text": "Пять поколений",
        "isCorrect": true
      },
      {
        "text": "Три типа",
        "isCorrect": false
      },
      {
        "text": "Десять классов",
        "isCorrect": false
      },
      {
        "text": "Семь уровней",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 105,
    "question": "По принципу действия ЭВМ делятся на:",
    "answers": [
      {
        "text": "Серверные и клиентские",
        "isCorrect": false
      },
      {
        "text": "Стационарные и переносные",
        "isCorrect": false
      },
      {
        "text": "Цифровые, аналоговые, гибридные",
        "isCorrect": true
      },
      {
        "text": "Бинарные и десятичные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 106,
    "question": "Кто создал первую аналитическую вычислительную машину в 1822?",
    "answers": [
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      },
      {
        "text": "Блез Паскаль",
        "isCorrect": false
      },
      {
        "text": "Готфрид Лейбниц",
        "isCorrect": false
      },
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 107,
    "question": "Первый программируемый компьютер был создан в...",
    "answers": [
      {
        "text": "1941 году",
        "isCorrect": true
      },
      {
        "text": "1955 году",
        "isCorrect": false
      },
      {
        "text": "1960 году",
        "isCorrect": false
      },
      {
        "text": "1930 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 108,
    "question": "Какого типа ПЗУ при классификации по технологии записи информации не существует?",
    "answers": [
      {
        "text": "PROM",
        "isCorrect": false
      },
      {
        "text": "SPROM",
        "isCorrect": true
      },
      {
        "text": "EEPROM",
        "isCorrect": false
      },
      {
        "text": "EPROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 109,
    "question": "DRDRAM - это...",
    "answers": [
      {
        "text": "Динамическая память Rambus",
        "isCorrect": true
      },
      {
        "text": "Двойная статическая память",
        "isCorrect": false
      },
      {
        "text": "Регистровая видеопамять",
        "isCorrect": false
      },
      {
        "text": "Дискретный модуль ОЗУ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 110,
    "question": "EEPROM - это...",
    "answers": [
      {
        "text": "Электрически стираемое ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Энергозависимое ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Внешний модуль расширения",
        "isCorrect": false
      },
      {
        "text": "Эффективная системная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 111,
    "question": "EPROM - это...",
    "answers": [
      {
        "text": "ПЗУ со стиранием УФ",
        "isCorrect": true
      },
      {
        "text": "Расширенная оперативная память",
        "isCorrect": false
      },
      {
        "text": "Электронный программный модуль",
        "isCorrect": false
      },
      {
        "text": "Постоянная кэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 112,
    "question": "PROM- это...",
    "answers": [
      {
        "text": "Программируемое ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Первичная память",
        "isCorrect": false
      },
      {
        "text": "Процессорный модуль",
        "isCorrect": false
      },
      {
        "text": "Память только для чтения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 113,
    "question": "Как расшифровывается EEPROM?",
    "answers": [
      {
        "text": "Electrically Erasable Programmable ROM",
        "isCorrect": true
      },
      {
        "text": "Electronic Engine Programmable ROM",
        "isCorrect": false
      },
      {
        "text": "Extra Erasable Portable ROM",
        "isCorrect": false
      },
      {
        "text": "Extended Erased Program ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 114,
    "question": "Как расшифровывается EPROM?",
    "answers": [
      {
        "text": "Erasable Programmable ROM",
        "isCorrect": true
      },
      {
        "text": "Every Programmable ROM",
        "isCorrect": false
      },
      {
        "text": "Easy Program Read Memory",
        "isCorrect": false
      },
      {
        "text": "Extended Programmable ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 115,
    "question": "Как расшифровывается PROM?",
    "answers": [
      {
        "text": "Programmable Read-Only Memory",
        "isCorrect": true
      },
      {
        "text": "Primary Read-Only Memory",
        "isCorrect": false
      },
      {
        "text": "Port Read-Only Memory",
        "isCorrect": false
      },
      {
        "text": "Portable Read-Only Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 116,
    "question": "Как расшифровывается DDR SDRAM?",
    "answers": [
      {
        "text": "Double Data Rate SDRAM",
        "isCorrect": true
      },
      {
        "text": "Dual Data Register SDRAM",
        "isCorrect": false
      },
      {
        "text": "Direct Data Rate SDRAM",
        "isCorrect": false
      },
      {
        "text": "Digital Data Rate SDRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 117,
    "question": "Как расшифровывается SDRAM?",
    "answers": [
      {
        "text": "Synchronous Dynamic RAM",
        "isCorrect": true
      },
      {
        "text": "Static Dynamic RAM",
        "isCorrect": false
      },
      {
        "text": "Single Dynamic RAM",
        "isCorrect": false
      },
      {
        "text": "System Dynamic RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 118,
    "question": "Как расшифровывается BEDO DRAM?",
    "answers": [
      {
        "text": "Burst Extended Data Out",
        "isCorrect": true
      },
      {
        "text": "Basic Extended Data Out",
        "isCorrect": false
      },
      {
        "text": "Binary Extended Data Out",
        "isCorrect": false
      },
      {
        "text": "Buffer Extended Data Out",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 119,
    "question": "Как расшифровывается DRDRAM?",
    "answers": [
      {
        "text": "Direct Rambus DRAM",
        "isCorrect": true
      },
      {
        "text": "Digital Rambus DRAM",
        "isCorrect": false
      },
      {
        "text": "Dual Rambus DRAM",
        "isCorrect": false
      },
      {
        "text": "Data Rambus DRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 120,
    "question": "Как расшифровывается RAM EDO?",
    "answers": [
      {
        "text": "Extended Data Output",
        "isCorrect": true
      },
      {
        "text": "External Data Output",
        "isCorrect": false
      },
      {
        "text": "Electronic Data Output",
        "isCorrect": false
      },
      {
        "text": "Energy Data Output",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 121,
    "question": "Как расшифровывается FPM DRAM?",
    "answers": [
      {
        "text": "Fast Page Mode",
        "isCorrect": true
      },
      {
        "text": "Frequency Phase Mode",
        "isCorrect": false
      },
      {
        "text": "Fast Peripheral Module",
        "isCorrect": false
      },
      {
        "text": "Fixed Power Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 122,
    "question": "Как расшифровывается RIMM?",
    "answers": [
      {
        "text": "Rapid Internal Memory Method",
        "isCorrect": false
      },
      {
        "text": "Rambus Inline Memory Module",
        "isCorrect": true
      },
      {
        "text": "Registered Internal Multi Module",
        "isCorrect": false
      },
      {
        "text": "Reliable Interface Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 123,
    "question": "Как расшифровывается DIMM?",
    "answers": [
      {
        "text": "Direct Interconnect Memory",
        "isCorrect": false
      },
      {
        "text": "Double Integrated Main Module",
        "isCorrect": false
      },
      {
        "text": "Dual Inline Memory Module",
        "isCorrect": true
      },
      {
        "text": "Digital Inline Multi Module",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 124,
    "question": "Как расшифровывается SIMM?",
    "answers": [
      {
        "text": "Single Inline Memory Module",
        "isCorrect": true
      },
      {
        "text": "Simple Integrated Memory Mode",
        "isCorrect": false
      },
      {
        "text": "Static Internal Main Module",
        "isCorrect": false
      },
      {
        "text": "System Inline Memory Matrix",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 125,
    "question": "Как расшифровывается SIPP?",
    "answers": [
      {
        "text": "System Integrated Port Package",
        "isCorrect": false
      },
      {
        "text": "Simple Inline Pin Process",
        "isCorrect": false
      },
      {
        "text": "Single Inline Pin Package",
        "isCorrect": true
      },
      {
        "text": "Static Interface Peripheral Port",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 126,
    "question": "Как расшифровывается SIP?",
    "answers": [
      {
        "text": "Single Inline Package",
        "isCorrect": true
      },
      {
        "text": "Serial Interface Port",
        "isCorrect": false
      },
      {
        "text": "System Information Protocol",
        "isCorrect": false
      },
      {
        "text": "Standard Integrated Pinout",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 127,
    "question": "Как расшифровывается DIP?",
    "answers": [
      {
        "text": "Data Interchange Port",
        "isCorrect": false
      },
      {
        "text": "Digital Input Pin",
        "isCorrect": false
      },
      {
        "text": "Direct Integrated Process",
        "isCorrect": false
      },
      {
        "text": "Dual Inline Package",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 128,
    "question": "Как расшифровывается ROM?",
    "answers": [
      {
        "text": "Read Only Memory",
        "isCorrect": true
      },
      {
        "text": "Rapid Output Memory",
        "isCorrect": false
      },
      {
        "text": "Real-time Operations Module",
        "isCorrect": false
      },
      {
        "text": "Registered Output Matrix",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 129,
    "question": "Как расшифровывается RAM?",
    "answers": [
      {
        "text": "Rapid Access Module",
        "isCorrect": false
      },
      {
        "text": "Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Remote Audio Management",
        "isCorrect": false
      },
      {
        "text": "Real Advanced Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 130,
    "question": "Назовите типы кэш-памяти различаемых по принципу записи результатов в оперативную память.",
    "answers": [
      {
        "text": "Прямая и косвенная",
        "isCorrect": false
      },
      {
        "text": "Статическая и динамическая",
        "isCorrect": false
      },
      {
        "text": "Сквозная и обратная запись",
        "isCorrect": true
      },
      {
        "text": "Системная и прикладная",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 131,
    "question": "Сколько типов кэш памяти различают по принципу записи результатов в оперативную память?",
    "answers": [
      {
        "text": "Два",
        "isCorrect": true
      },
      {
        "text": "Три",
        "isCorrect": false
      },
      {
        "text": "Четыре",
        "isCorrect": false
      },
      {
        "text": "Пять",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 132,
    "question": "Что означает с английского Cache (кэш)?",
    "answers": [
      {
        "text": "Быстрое вычисление",
        "isCorrect": false
      },
      {
        "text": "Тайник или склад",
        "isCorrect": true
      },
      {
        "text": "Лишняя память",
        "isCorrect": false
      },
      {
        "text": "Промежуточное звено",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 133,
    "question": "Что такое 'Регистровая кэш-память'?",
    "answers": [
      {
        "text": "Сверхбыстрые регистры процессора",
        "isCorrect": true
      },
      {
        "text": "Кэш жесткого диска",
        "isCorrect": false
      },
      {
        "text": "Память контроллера прерываний",
        "isCorrect": false
      },
      {
        "text": "Буфер системной шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 134,
    "question": "Как расшифровывается SRAM?",
    "answers": [
      {
        "text": "Serial Random Access Memory",
        "isCorrect": false
      },
      {
        "text": "Synchronous Rapid Access Memory",
        "isCorrect": false
      },
      {
        "text": "Static Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Single Random Access Module",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 135,
    "question": "Как расшифровывается DRAM?",
    "answers": [
      {
        "text": "Dynamic Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Digital Random Access Module",
        "isCorrect": false
      },
      {
        "text": "Direct Random Access Method",
        "isCorrect": false
      },
      {
        "text": "Dual Random Access Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 136,
    "question": "От чего жесткий диск получил название винчестер?",
    "answers": [
      {
        "text": "Имя создателя устройства",
        "isCorrect": false
      },
      {
        "text": "Название города производства",
        "isCorrect": false
      },
      {
        "text": "Маркировка IBM 3030",
        "isCorrect": true
      },
      {
        "text": "Форма корпуса диска",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 137,
    "question": "Чем известен один из основателей фирмы Seagate, Алан Шугарт?",
    "answers": [
      {
        "text": "Изобрел транзистор",
        "isCorrect": false
      },
      {
        "text": "Разработал первый гибкий диск",
        "isCorrect": true
      },
      {
        "text": "Создал первый процессор",
        "isCorrect": false
      },
      {
        "text": "Основал компанию Intel",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 138,
    "question": "Кто является изобретателем первой дискеты?",
    "answers": [
      {
        "text": "Билл Гейтс",
        "isCorrect": false
      },
      {
        "text": "Гордон Мур",
        "isCorrect": false
      },
      {
        "text": "Стив Джобс",
        "isCorrect": false
      },
      {
        "text": "Алан Шугарт",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 139,
    "question": "Файлы, хранящиеся в разбросанных по диску кластерах, называются...",
    "answers": [
      {
        "text": "Индексированные",
        "isCorrect": false
      },
      {
        "text": "Фрагментированные",
        "isCorrect": true
      },
      {
        "text": "Сегментированные",
        "isCorrect": false
      },
      {
        "text": "Сжатые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 140,
    "question": "Минимальная единица размещения информации на диске, состоящая из двух или большего числа смежных секторов дорожки, называется...",
    "answers": [
      {
        "text": "Сектор",
        "isCorrect": false
      },
      {
        "text": "Трек",
        "isCorrect": false
      },
      {
        "text": "Кластер",
        "isCorrect": true
      },
      {
        "text": "Цилиндр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 141,
    "question": "Какое количество установленных атрибутов должен иметь файл?",
    "answers": [
      {
        "text": "Любое количество",
        "isCorrect": true
      },
      {
        "text": "Только четыре",
        "isCorrect": false
      },
      {
        "text": "Минимум один",
        "isCorrect": false
      },
      {
        "text": "Все существующие",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 142,
    "question": "Каких атрибутов файла не существует?",
    "answers": [
      {
        "text": "Скрытый",
        "isCorrect": false
      },
      {
        "text": "Анонимный",
        "isCorrect": true
      },
      {
        "text": "Только для чтения",
        "isCorrect": false
      },
      {
        "text": "Системный",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 143,
    "question": "Какое расширение графические файлы?",
    "answers": [
      {
        "text": "EXE",
        "isCorrect": false
      },
      {
        "text": "TXT",
        "isCorrect": false
      },
      {
        "text": "BMP",
        "isCorrect": true
      },
      {
        "text": "DLL",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 144,
    "question": "Какое расширение имеют исполняемые файлы?",
    "answers": [
      {
        "text": "EXE",
        "isCorrect": true
      },
      {
        "text": "DOCX",
        "isCorrect": false
      },
      {
        "text": "MP3",
        "isCorrect": false
      },
      {
        "text": "LOG",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 145,
    "question": "Какой стандартный размер кластера файловой системы FAT32?",
    "answers": [
      {
        "text": "512 байт",
        "isCorrect": false
      },
      {
        "text": "4 Кб",
        "isCorrect": true
      },
      {
        "text": "64 Кб",
        "isCorrect": false
      },
      {
        "text": "1 Мб",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 146,
    "question": "Какой стандартный размер кластера файловой системы NTFS?",
    "answers": [
      {
        "text": "1024 байта",
        "isCorrect": false
      },
      {
        "text": "128 байт",
        "isCorrect": false
      },
      {
        "text": "4 Кб",
        "isCorrect": true
      },
      {
        "text": "32 Кб",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 147,
    "question": "За счет чего достигается надежность файловой системы NTFS?",
    "answers": [
      {
        "text": "Сжатие тома",
        "isCorrect": false
      },
      {
        "text": "Журналирование транзакций",
        "isCorrect": true
      },
      {
        "text": "Индексация поиска",
        "isCorrect": false
      },
      {
        "text": "Очистка кэша",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 148,
    "question": "Какое главное преимущество файловой системы NTFS?",
    "answers": [
      {
        "text": "Скорость в DOS",
        "isCorrect": false
      },
      {
        "text": "Разграничение прав доступа",
        "isCorrect": true
      },
      {
        "text": "Отсутствие фрагментации",
        "isCorrect": false
      },
      {
        "text": "Малый размер метаданных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 149,
    "question": "Какая файловая система рекомендуется для использования в Windows 98?",
    "answers": [
      {
        "text": "NTFS",
        "isCorrect": false
      },
      {
        "text": "ReFS",
        "isCorrect": false
      },
      {
        "text": "ext3",
        "isCorrect": false
      },
      {
        "text": "FAT32",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 150,
    "question": "Какая файловая система не поддерживается Windows XP?",
    "answers": [
      {
        "text": "ext4",
        "isCorrect": true
      },
      {
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": false
      },
      {
        "text": "CDFS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 151,
    "question": "Какая файловая система рекомендуется для использования в Windows XP?",
    "answers": [
      {
        "text": "FAT16",
        "isCorrect": false
      },
      {
        "text": "HPFS",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "NFS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 152,
    "question": "Какая файловая система является многопоточной?",
    "answers": [
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "FAT12",
        "isCorrect": false
      },
      {
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "ISO9660",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 153,
    "question": "Каким знаком отделяется имя файла от имени потока в файловой системе NTFS?",
    "answers": [
      {
        "text": "Точка",
        "isCorrect": false
      },
      {
        "text": "Двоеточие",
        "isCorrect": true
      },
      {
        "text": "Решетка",
        "isCorrect": false
      },
      {
        "text": "Обратный слэш",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 154,
    "question": "Какова длина имени файла в ОС Windows 98?",
    "answers": [
      {
        "text": "8 символов",
        "isCorrect": false
      },
      {
        "text": "255 символов",
        "isCorrect": true
      },
      {
        "text": "128 символов",
        "isCorrect": false
      },
      {
        "text": "11 символов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 155,
    "question": "Какова длина имени файла в ОС DOS?",
    "answers": [
      {
        "text": "8 символов",
        "isCorrect": true
      },
      {
        "text": "255 символов",
        "isCorrect": false
      },
      {
        "text": "64 символа",
        "isCorrect": false
      },
      {
        "text": "32 символа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 156,
    "question": "Какая информация связывается с файлом в системе FAT16?",
    "answers": [
      {
        "text": "Права доступа",
        "isCorrect": false
      },
      {
        "text": "Дата создания",
        "isCorrect": true
      },
      {
        "text": "Квота пользователя",
        "isCorrect": false
      },
      {
        "text": "Список потоков",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 157,
    "question": "Какая информация не связывается с файлом в системе FAT32?",
    "answers": [
      {
        "text": "Размер файла",
        "isCorrect": false
      },
      {
        "text": "Имя файла",
        "isCorrect": false
      },
      {
        "text": "Права доступа",
        "isCorrect": true
      },
      {
        "text": "Атрибут архивации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 158,
    "question": "Какая информация связывается с файлом в системе NTFS?",
    "answers": [
      {
        "text": "Цвет ярлыка",
        "isCorrect": false
      },
      {
        "text": "Дескриптор защиты",
        "isCorrect": true
      },
      {
        "text": "Температура диска",
        "isCorrect": false
      },
      {
        "text": "Частота процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 159,
    "question": "Какая файловая система на сегодняшний день считается наиболее защищенной от сбоев?",
    "answers": [
      {
        "text": "FAT16",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "FAT12",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 160,
    "question": "Совокупность программ, обеспечивающих доступ к данным на носителе информации называется...",
    "answers": [
      {
        "text": "Драйвер шины",
        "isCorrect": false
      },
      {
        "text": "Файловая система",
        "isCorrect": true
      },
      {
        "text": "Архиватор данных",
        "isCorrect": false
      },
      {
        "text": "Менеджер памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 161,
    "question": "Какой тип данных не может храниться в файле?",
    "answers": [
      {
        "text": "Непрерывный аналоговый сигнал",
        "isCorrect": true
      },
      {
        "text": "Текстовые символы",
        "isCorrect": false
      },
      {
        "text": "Двоичный код",
        "isCorrect": false
      },
      {
        "text": "Табличные значения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 162,
    "question": "Как называется именованная область внешней памяти, выделенная для хранения массива данных?",
    "answers": [
      {
        "text": "Кластер",
        "isCorrect": false
      },
      {
        "text": "Файл",
        "isCorrect": true
      },
      {
        "text": "Сектор диска",
        "isCorrect": false
      },
      {
        "text": "Ячейка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 163,
    "question": "Как называется именованная совокупность данных на внешнем носителе информации?",
    "answers": [
      {
        "text": "Каталог",
        "isCorrect": false
      },
      {
        "text": "Запись",
        "isCorrect": false
      },
      {
        "text": "Атрибут",
        "isCorrect": false
      },
      {
        "text": "Файл",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 164,
    "question": "Какова скорость последовательного чтения накопителей DVD (1x)?",
    "answers": [
      {
        "text": "1.35 Мбайт/с",
        "isCorrect": true
      },
      {
        "text": "150 Кбайт/с",
        "isCorrect": false
      },
      {
        "text": "10 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "480 Мбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 165,
    "question": "Какова скорость последовательного чтения накопителей CD-ROM (1x)?",
    "answers": [
      {
        "text": "150 Кбайт/с",
        "isCorrect": true
      },
      {
        "text": "1.35 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "500 Кбайт/с",
        "isCorrect": false
      },
      {
        "text": "2 Мбайт/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 166,
    "question": "Какова скорость последовательного чтения жестких магнитных дисков?",
    "answers": [
      {
        "text": "100-250 Мбайт/с",
        "isCorrect": true
      },
      {
        "text": "10 Гбайт/с",
        "isCorrect": false
      },
      {
        "text": "150 Кбайт/с",
        "isCorrect": false
      },
      {
        "text": "500 Кбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 167,
    "question": "Какова скорость последовательного чтения гибких магнитных дисков?",
    "answers": [
      {
        "text": "Около 50 Кбайт/с",
        "isCorrect": true
      },
      {
        "text": "10 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "1.5 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "150 Кбайт/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 168,
    "question": "Чему равно время доступа накопителей DVD?",
    "answers": [
      {
        "text": "100–150 мс",
        "isCorrect": true
      },
      {
        "text": "5–10 мс",
        "isCorrect": false
      },
      {
        "text": "1–2 с",
        "isCorrect": false
      },
      {
        "text": "10–20 мкс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 169,
    "question": "Чему равно время доступа накопителей CD-ROM?",
    "answers": [
      {
        "text": "150–400 мс",
        "isCorrect": true
      },
      {
        "text": "10–15 мс",
        "isCorrect": false
      },
      {
        "text": "500–900 нс",
        "isCorrect": false
      },
      {
        "text": "2–5 мкс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 170,
    "question": "Чему равно время доступа накопителей на жестких магнитных дисках?",
    "answers": [
      {
        "text": "100–200 мс",
        "isCorrect": false
      },
      {
        "text": "3–15 мс",
        "isCorrect": true
      },
      {
        "text": "1–2 мкс",
        "isCorrect": false
      },
      {
        "text": "300–500 нс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 171,
    "question": "Чему равно время доступа накопителей на гибких магнитных дисках?",
    "answers": [
      {
        "text": "100–300 мс",
        "isCorrect": true
      },
      {
        "text": "5–10 мс",
        "isCorrect": false
      },
      {
        "text": "1–2 мкс",
        "isCorrect": false
      },
      {
        "text": "40–50 нс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 172,
    "question": "Наиболее полное определение носителя информации:",
    "answers": [
      {
        "text": "Физическая среда хранения",
        "isCorrect": true
      },
      {
        "text": "Кабель передачи данных",
        "isCorrect": false
      },
      {
        "text": "Процессорный регистр",
        "isCorrect": false
      },
      {
        "text": "Электрический импульс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 173,
    "question": "Что такое абсолютный адрес?",
    "answers": [
      {
        "text": "Числовой номер ячейки памяти",
        "isCorrect": true
      },
      {
        "text": "Имя переменной",
        "isCorrect": false
      },
      {
        "text": "Смещение относительно базы",
        "isCorrect": false
      },
      {
        "text": "Сетевой путь к файлу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 174,
    "question": "Емкость жестких дисков современных компьютеров равна...",
    "answers": [
      {
        "text": "512 мегабайт",
        "isCorrect": false
      },
      {
        "text": "100 килобайт",
        "isCorrect": false
      },
      {
        "text": "1–20 терабайт",
        "isCorrect": true
      },
      {
        "text": "10 гигабайт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 175,
    "question": "Емкость кэш памяти современных компьютеров равна...",
    "answers": [
      {
        "text": "16 гигабайт",
        "isCorrect": false
      },
      {
        "text": "Несколько десятков мегабайт",
        "isCorrect": true
      },
      {
        "text": "1 терабайт",
        "isCorrect": false
      },
      {
        "text": "512 байт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 176,
    "question": "Емкость оперативной памяти современных компьютеров равна...",
    "answers": [
      {
        "text": "8–64 гигабайта",
        "isCorrect": true
      },
      {
        "text": "1–2 мегабайта",
        "isCorrect": false
      },
      {
        "text": "500 терабайт",
        "isCorrect": false
      },
      {
        "text": "128 килобайт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 177,
    "question": "Емкость ПЗУ, используемой для BIOS не превышает...",
    "answers": [
      {
        "text": "1 терабайт",
        "isCorrect": false
      },
      {
        "text": "16 мегабайт",
        "isCorrect": true
      },
      {
        "text": "2 гигабайта",
        "isCorrect": false
      },
      {
        "text": "500 мегабайт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 178,
    "question": "На основе чего создаются 'полупостоянные' ПЗУ?",
    "answers": [
      {
        "text": "Технология Flash",
        "isCorrect": true
      },
      {
        "text": "Магнитные ленты",
        "isCorrect": false
      },
      {
        "text": "Оптические слои",
        "isCorrect": false
      },
      {
        "text": "Жидкие кристаллы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 179,
    "question": "ПЗУ используется для хранения...",
    "answers": [
      {
        "text": "Программ загрузки системы",
        "isCorrect": true
      },
      {
        "text": "Временных переменных",
        "isCorrect": false
      },
      {
        "text": "Текстов пользователя",
        "isCorrect": false
      },
      {
        "text": "Очереди печати",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 180,
    "question": "ПЗУ не используется для хранения...",
    "answers": [
      {
        "text": "Промежуточных результатов вычислений",
        "isCorrect": true
      },
      {
        "text": "Кода BIOS",
        "isCorrect": false
      },
      {
        "text": "Программ самотестирования",
        "isCorrect": false
      },
      {
        "text": "Таблиц знакогенератора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 181,
    "question": "Что представляет собой оперативная память?",
    "answers": [
      {
        "text": "Энергозависимое запоминающее устройство",
        "isCorrect": true
      },
      {
        "text": "Постоянный накопитель данных",
        "isCorrect": false
      },
      {
        "text": "Устройство для вычислений",
        "isCorrect": false
      },
      {
        "text": "Шина передачи сигналов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 182,
    "question": "Каково назначение оперативной памяти?",
    "answers": [
      {
        "text": "Хранение исполняемого программного кода",
        "isCorrect": true
      },
      {
        "text": "Долгосрочное архивирование файлов",
        "isCorrect": false
      },
      {
        "text": "Управление видеосигналом монитора",
        "isCorrect": false
      },
      {
        "text": "Охлаждение центрального процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 183,
    "question": "Что включает в себя основная память?",
    "answers": [
      {
        "text": "ОЗУ и ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Жесткий диск и кэш",
        "isCorrect": false
      },
      {
        "text": "Регистры процессора",
        "isCorrect": false
      },
      {
        "text": "Видеопамять и BIOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 184,
    "question": "Каково назначение регистровой кэш-памяти?",
    "answers": [
      {
        "text": "Ускорение доступа к данным",
        "isCorrect": true
      },
      {
        "text": "Увеличение объема дискового пространства",
        "isCorrect": false
      },
      {
        "text": "Защита от скачков напряжения",
        "isCorrect": false
      },
      {
        "text": "Кодирование текстовой информации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 185,
    "question": "Кэш-память имеет такое название потому что...",
    "answers": [
      {
        "text": "Она скрыта от пользователя",
        "isCorrect": true
      },
      {
        "text": "Очень быстро работает",
        "isCorrect": false
      },
      {
        "text": "Имеет маленький физический размер",
        "isCorrect": false
      },
      {
        "text": "Использует только двоичный код",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 186,
    "question": "Какими параметрами характеризуется внешняя память ПК?",
    "answers": [
      {
        "text": "Емкость и время доступа",
        "isCorrect": true
      },
      {
        "text": "Тактовая частота шины",
        "isCorrect": false
      },
      {
        "text": "Количество ядер процессора",
        "isCorrect": false
      },
      {
        "text": "Разрешение экрана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 187,
    "question": "Что такое системная шина?",
    "answers": [
      {
        "text": "Магистраль передачи данных",
        "isCorrect": true
      },
      {
        "text": "Программа управления оборудованием",
        "isCorrect": false
      },
      {
        "text": "Слот для видеокарты",
        "isCorrect": false
      },
      {
        "text": "Разъем питания платы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 188,
    "question": "Основная часть системной платы - это:",
    "answers": [
      {
        "text": "Чипсет",
        "isCorrect": true
      },
      {
        "text": "Жесткий диск",
        "isCorrect": false
      },
      {
        "text": "Блок питания",
        "isCorrect": false
      },
      {
        "text": "Оптический привод",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 189,
    "question": "Сколько видов операций существует в булевой алгебре?",
    "answers": [
      {
        "text": "Три основные операции",
        "isCorrect": true
      },
      {
        "text": "Более ста вариантов",
        "isCorrect": false
      },
      {
        "text": "Только одна",
        "isCorrect": false
      },
      {
        "text": "Десять базовых",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 190,
    "question": "Что означает понятие 'высказывание' в алгебре логики?",
    "answers": [
      {
        "text": "Утверждение, принимающее истинность/ложь",
        "isCorrect": true
      },
      {
        "text": "Любое вопросительное предложение",
        "isCorrect": false
      },
      {
        "text": "Математическая формула с X",
        "isCorrect": false
      },
      {
        "text": "Текст в кавычках",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 191,
    "question": "Унарные(ая) операции(ия) алгебры логики:",
    "answers": [
      {
        "text": "Отрицание (НЕ)",
        "isCorrect": true
      },
      {
        "text": "Сложение (ИЛИ)",
        "isCorrect": false
      },
      {
        "text": "Умножение (И)",
        "isCorrect": false
      },
      {
        "text": "Эквивалентность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 192,
    "question": "Бинарные(ая) операции(ия) алгебры логики:",
    "answers": [
      {
        "text": "Конъюнкция и дизъюнкция",
        "isCorrect": true
      },
      {
        "text": "Только инверсия",
        "isCorrect": false
      },
      {
        "text": "Извлечение квадратного корня",
        "isCorrect": false
      },
      {
        "text": "Возведение в степень",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 193,
    "question": "Виды операции алгебры логики:",
    "answers": [
      {
        "text": "Унарные и бинарные",
        "isCorrect": true
      },
      {
        "text": "Простые и сложные",
        "isCorrect": false
      },
      {
        "text": "Целые и дробные",
        "isCorrect": false
      },
      {
        "text": "Прямые и обратные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 194,
    "question": "Для алгебры логики применимы следующие законы:",
    "answers": [
      {
        "text": "Законы де Моргана",
        "isCorrect": true
      },
      {
        "text": "Закон Ома",
        "isCorrect": false
      },
      {
        "text": "Законы Ньютона",
        "isCorrect": false
      },
      {
        "text": "Правило буравчика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 195,
    "question": "В каком двухэлементном множестве определены все значения булевской алгебры?",
    "answers": [
      {
        "text": "{0, 1}",
        "isCorrect": true
      },
      {
        "text": "{Ложь, Неправда}",
        "isCorrect": false
      },
      {
        "text": "{+, -}",
        "isCorrect": false
      },
      {
        "text": "{A, B}",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 196,
    "question": "Каким является высказывание 'Логическая единица соответствует логическому ДА'?",
    "answers": [
      {
        "text": "Истинным",
        "isCorrect": true
      },
      {
        "text": "Ложным",
        "isCorrect": false
      },
      {
        "text": "Бессмысленным",
        "isCorrect": false
      },
      {
        "text": "Неопределенным",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 197,
    "question": "Каким является высказывание 'Микропроцессор является внешним устройством ПК'?",
    "answers": [
      {
        "text": "Ложным",
        "isCorrect": true
      },
      {
        "text": "Истинным",
        "isCorrect": false
      },
      {
        "text": "Аксиомой",
        "isCorrect": false
      },
      {
        "text": "Гипотезой",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 198,
    "question": "Чему в алгебре логики равно НЕ (1 ИЛИ 0)?",
    "answers": [
      {
        "text": "0",
        "isCorrect": true
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "Истина",
        "isCorrect": false
      },
      {
        "text": "10",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 199,
    "question": "Чему в алгебре логики равно НЕ (1 И 1)?",
    "answers": [
      {
        "text": "Ложь",
        "isCorrect": true
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "11",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 200,
    "question": "Чему в алгебре логики равно НЕ 0?",
    "answers": [
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "-1",
        "isCorrect": false
      },
      {
        "text": "Пустоте",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 201,
    "question": "Чему в алгебре логики равно 1 ИЛИ 0?",
    "answers": [
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "Логическая ошибка",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 202,
    "question": "Чему в алгебре логики равно 1 И 0?",
    "answers": [
      {
        "text": "Истина",
        "isCorrect": false
      },
      {
        "text": "0",
        "isCorrect": true
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "Неопределенность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 203,
    "question": "Чему в алгебре логики равно 1 ИЛИ 1?",
    "answers": [
      {
        "text": "10",
        "isCorrect": false
      },
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 204,
    "question": "Чему в алгебре логики равно 1 И 1?",
    "answers": [
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "Логический ноль",
        "isCorrect": false
      },
      {
        "text": "Два",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 205,
    "question": "Логическому нулю соответствует ...",
    "answers": [
      {
        "text": "Инверсия",
        "isCorrect": false
      },
      {
        "text": "Ложь",
        "isCorrect": true
      },
      {
        "text": "Истина",
        "isCorrect": false
      },
      {
        "text": "Дизъюнкция",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 206,
    "question": "Логической единице соответствует ...",
    "answers": [
      {
        "text": "Отрицание",
        "isCorrect": false
      },
      {
        "text": "Ложь",
        "isCorrect": false
      },
      {
        "text": "Истина",
        "isCorrect": true
      },
      {
        "text": "Пустое значение",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 207,
    "question": "Инверсии соответствует ...",
    "answers": [
      {
        "text": "Логическое ИЛИ",
        "isCorrect": false
      },
      {
        "text": "Логическое И",
        "isCorrect": false
      },
      {
        "text": "Частица НЕ",
        "isCorrect": true
      },
      {
        "text": "Сложение",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 208,
    "question": "Конъюнкции соответствует ...",
    "answers": [
      {
        "text": "Связка И",
        "isCorrect": true
      },
      {
        "text": "Связка ИЛИ",
        "isCorrect": false
      },
      {
        "text": "Отрицание",
        "isCorrect": false
      },
      {
        "text": "Сложение",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 209,
    "question": "Дизъюнкции соответствует ...",
    "answers": [
      {
        "text": "Логическое умножение",
        "isCorrect": false
      },
      {
        "text": "Связка И",
        "isCorrect": false
      },
      {
        "text": "Отрицание",
        "isCorrect": false
      },
      {
        "text": "Связка ИЛИ",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 210,
    "question": "Инверсия - это:",
    "answers": [
      {
        "text": "Логическое отрицание",
        "isCorrect": true
      },
      {
        "text": "Логическое сложение",
        "isCorrect": false
      },
      {
        "text": "Логическое умножение",
        "isCorrect": false
      },
      {
        "text": "Логическое следование",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 211,
    "question": "Конъюнкция - это...",
    "answers": [
      {
        "text": "Логическое сложение",
        "isCorrect": false
      },
      {
        "text": "Логическое умножение",
        "isCorrect": true
      },
      {
        "text": "Инвертирование",
        "isCorrect": false
      },
      {
        "text": "Эквиваленция",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 212,
    "question": "Дизъюнкция - это...",
    "answers": [
      {
        "text": "Логическое сложение",
        "isCorrect": true
      },
      {
        "text": "Логическое умножение",
        "isCorrect": false
      },
      {
        "text": "Отрицание аргумента",
        "isCorrect": false
      },
      {
        "text": "Строгая конъюнкция",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 213,
    "question": "Раздел математической логики, значение всех элементов которой определены в двухэлементном множестве 0 и 1 называют...",
    "answers": [
      {
        "text": "Теория алгоритмов",
        "isCorrect": false
      },
      {
        "text": "Алгебра логики",
        "isCorrect": true
      },
      {
        "text": "Линейная алгебра",
        "isCorrect": false
      },
      {
        "text": "Дискретный анализ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 214,
    "question": "Переведите число 8С из шестнадцатеричной в четверичную систему счисления.",
    "answers": [
      {
        "text": "2030",
        "isCorrect": true
      },
      {
        "text": "2130",
        "isCorrect": false
      },
      {
        "text": "1020",
        "isCorrect": false
      },
      {
        "text": "2020",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 215,
    "question": "Переведите число 1A из шестнадцатеричной в двоичную систему счисления.",
    "answers": [
      {
        "text": "11011",
        "isCorrect": false
      },
      {
        "text": "10010",
        "isCorrect": false
      },
      {
        "text": "11010",
        "isCorrect": true
      },
      {
        "text": "10110",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 216,
    "question": "Устройства, использующиеся для связи с приборами и другими средствами автоматизации и для подключения ПК к каналам связи- это...",
    "answers": [
      {
        "text": "Видеокарты",
        "isCorrect": false
      },
      {
        "text": "Сетевые адаптеры",
        "isCorrect": true
      },
      {
        "text": "Процессоры",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 217,
    "question": "Печатающие устройства для регистрации информации на бумажный носитель - это...",
    "answers": [
      {
        "text": "Сканеры",
        "isCorrect": false
      },
      {
        "text": "Принтеры",
        "isCorrect": true
      },
      {
        "text": "Мониторы",
        "isCorrect": false
      },
      {
        "text": "Плоттеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 218,
    "question": "Устройство для автоматического считывания с бумажных носителей и ввода в ПК текстов и рисунков-это...",
    "answers": [
      {
        "text": "Оцифровщик",
        "isCorrect": false
      },
      {
        "text": "Модем",
        "isCorrect": false
      },
      {
        "text": "Световое перо",
        "isCorrect": false
      },
      {
        "text": "Сканер",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 219,
    "question": "Устройство для ручного ввода числовой, текстовой и управляющей информации в ПК- это...",
    "answers": [
      {
        "text": "Мышь",
        "isCorrect": false
      },
      {
        "text": "Джойстик",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": true
      },
      {
        "text": "Микрофон",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 220,
    "question": "Что такое синхронизация данных?",
    "answers": [
      {
        "text": "Обновление версий ПО",
        "isCorrect": false
      },
      {
        "text": "Форматирование носителя",
        "isCorrect": false
      },
      {
        "text": "Устранение различий копий",
        "isCorrect": true
      },
      {
        "text": "Архивация старых файлов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 221,
    "question": "Процессы передачи и приема данных, обратные синхронным называются...",
    "answers": [
      {
        "text": "Асинхронными",
        "isCorrect": true
      },
      {
        "text": "Параллельными",
        "isCorrect": false
      },
      {
        "text": "Симплексными",
        "isCorrect": false
      },
      {
        "text": "Дискретными",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 222,
    "question": "В каком случае процессы называются синхронными?",
    "answers": [
      {
        "text": "При случайном интервале",
        "isCorrect": false
      },
      {
        "text": "При совпадении во времени",
        "isCorrect": true
      },
      {
        "text": "Через буфер обмена",
        "isCorrect": false
      },
      {
        "text": "В режиме ожидания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 223,
    "question": "В каком режиме передачи данных передача происходит одновременно с приемом данных?",
    "answers": [
      {
        "text": "Симплексный режим",
        "isCorrect": false
      },
      {
        "text": "Дуплексный режим",
        "isCorrect": true
      },
      {
        "text": "Полудуплексный режим",
        "isCorrect": false
      },
      {
        "text": "Пакетный режим",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 224,
    "question": "В каком режиме передачи данных передача происходит только в одном направлении?",
    "answers": [
      {
        "text": "Дуплексном",
        "isCorrect": false
      },
      {
        "text": "Полудуплексном",
        "isCorrect": false
      },
      {
        "text": "Симплексном",
        "isCorrect": true
      },
      {
        "text": "Асинхронном",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 225,
    "question": "Перечислите виды режимов передачи данных:",
    "answers": [
      {
        "text": "Симплексный, полудуплексный, дуплексный",
        "isCorrect": true
      },
      {
        "text": "Проводной и беспроводной",
        "isCorrect": false
      },
      {
        "text": "Внутренний, внешний, локальный",
        "isCorrect": false
      },
      {
        "text": "Аналоговый и цифровой",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 226,
    "question": "По степени централизации управления вычислительные системы делятся на:",
    "answers": [
      {
        "text": "Централизованные и децентрализованные",
        "isCorrect": true
      },
      {
        "text": "Линейные и кольцевые",
        "isCorrect": false
      },
      {
        "text": "Открытые и закрытые",
        "isCorrect": false
      },
      {
        "text": "Простые и сложные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 227,
    "question": "Для передачи информации по каналам связи используются коды:",
    "answers": [
      {
        "text": "Машинные инструкции",
        "isCorrect": false
      },
      {
        "text": "Десятичные числа",
        "isCorrect": false
      },
      {
        "text": "ASCII и подобные коды",
        "isCorrect": true
      },
      {
        "text": "Аналоговые сигналы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 228,
    "question": "Дуплексный режим - это...",
    "answers": [
      {
        "text": "Связь в обе стороны",
        "isCorrect": true
      },
      {
        "text": "Связь по очереди",
        "isCorrect": false
      },
      {
        "text": "Передача без приема",
        "isCorrect": false
      },
      {
        "text": "Связь через спутник",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 229,
    "question": "Полудуплексный режим - это...",
    "answers": [
      {
        "text": "Одновременный обмен данными",
        "isCorrect": false
      },
      {
        "text": "Поочередная передача и прием",
        "isCorrect": true
      },
      {
        "text": "Только односторонняя связь",
        "isCorrect": false
      },
      {
        "text": "Передача данных частями",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 230,
    "question": "Симплексный режим - это...",
    "answers": [
      {
        "text": "Передача в обе стороны",
        "isCorrect": false
      },
      {
        "text": "Связь по запросу",
        "isCorrect": false
      },
      {
        "text": "Передача только в одном направлении",
        "isCorrect": true
      },
      {
        "text": "Двусторонний обмен по очереди",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 231,
    "question": "При обмене данными между узлами используются три метода передачи данных:",
    "answers": [
      {
        "text": "Медные, оптика, радио",
        "isCorrect": false
      },
      {
        "text": "Симплекс, полудуплекс, дуплекс",
        "isCorrect": true
      },
      {
        "text": "Бит, байт, слово",
        "isCorrect": false
      },
      {
        "text": "Шина, звезда, кольцо",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 232,
    "question": "Связные интерфейсы обеспечивают передачу данных на любые расстояния с небольшой скоростью в пределах...",
    "answers": [
      {
        "text": "300 - 9600 бит/с",
        "isCorrect": true
      },
      {
        "text": "10 - 100 Гбит/с",
        "isCorrect": false
      },
      {
        "text": "1 - 5 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "100 - 500 Мбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 233,
    "question": "Шины - это...",
    "answers": [
      {
        "text": "Программные драйверы устройств",
        "isCorrect": false
      },
      {
        "text": "Совокупность линий передачи сигналов",
        "isCorrect": true
      },
      {
        "text": "Разъемы для процессора",
        "isCorrect": false
      },
      {
        "text": "Ячейки оперативной памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 234,
    "question": "При какой организации внутримашинного интерфейса все блоки ПК связаны друг с другом через общую или системную шину?",
    "answers": [
      {
        "text": "Радиальная структура",
        "isCorrect": false
      },
      {
        "text": "Магистральная структура",
        "isCorrect": true
      },
      {
        "text": "Звездообразная структура",
        "isCorrect": false
      },
      {
        "text": "Цепочечная структура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 235,
    "question": "Последовательной интерфейс обладает пропускной способностью порядка...",
    "answers": [
      {
        "text": "До 115 Кбит/с",
        "isCorrect": true
      },
      {
        "text": "Более 10 Гбайт/с",
        "isCorrect": false
      },
      {
        "text": "Около 2 Мбайт/с",
        "isCorrect": false
      },
      {
        "text": "Ровно 1 бит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 236,
    "question": "Параллельный интерфейс обладает пропускной способностью порядка...",
    "answers": [
      {
        "text": "Около 1-2 Мбайт/с",
        "isCorrect": true
      },
      {
        "text": "До 56 Кбит/с",
        "isCorrect": false
      },
      {
        "text": "Примерно 1 Тбайт/с",
        "isCorrect": false
      },
      {
        "text": "Менее 10 бит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 237,
    "question": "Пункты системного интерфейса ПК, через которые процессор обменивается информацией с другими устройствами - это...",
    "answers": [
      {
        "text": "Регистры памяти",
        "isCorrect": false
      },
      {
        "text": "Порты ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Слоты расширения",
        "isCorrect": false
      },
      {
        "text": "Кэш-линии",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 238,
    "question": "Шины общего назначения, позволяющие подключать большое число самых разнообразных устройств - это...",
    "answers": [
      {
        "text": "Шины расширения",
        "isCorrect": true
      },
      {
        "text": "Локальные шины видеокарты",
        "isCorrect": false
      },
      {
        "text": "Шины кэш-памяти",
        "isCorrect": false
      },
      {
        "text": "Служебные шины питания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 239,
    "question": "При какой организации внутримашинного интерфейса каждый блок ПК связан с прочими блоками своими локальными проводами?",
    "answers": [
      {
        "text": "Радиальная организация",
        "isCorrect": true
      },
      {
        "text": "Магистральная организация",
        "isCorrect": false
      },
      {
        "text": "Сетевая организация",
        "isCorrect": false
      },
      {
        "text": "Гибридная организация",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 240,
    "question": "Обслуживает процедуры прерывания, принимает запрос на прерывание от внешних устройств, определяет уровень приоритета этого запроса и выдает сигнал прерывания в процессор...",
    "answers": [
      {
        "text": "Южный мост",
        "isCorrect": false
      },
      {
        "text": "Контроллер прерываний",
        "isCorrect": true
      },
      {
        "text": "Системный таймер",
        "isCorrect": false
      },
      {
        "text": "АЛУ процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 241,
    "question": "Какая плата за счет параллельной работы с процессором значительно ускоряет выполнение процедур ввода-вывода; освобождает процессор от обработки процедур ввода-вывода, в т.ч. реализуют и режим прямого доступа к памяти?",
    "answers": [
      {
        "text": "Контроллер ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Сетевой адаптер",
        "isCorrect": false
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Модуль ОЗУ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 242,
    "question": "Какая плата освобождает процессор от прямого управления накопителями на магнитных дисках, что существенно повышает эффективное быстродействие ПК?",
    "answers": [
      {
        "text": "Математический сопроцессор",
        "isCorrect": false
      },
      {
        "text": "Дисковый контроллер",
        "isCorrect": true
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Плоттер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 243,
    "question": "Базовая система ввода-вывода - микросхема, установленная на материнской плате. Назовите её.",
    "answers": [
      {
        "text": "Чипсет",
        "isCorrect": false
      },
      {
        "text": "Микросхема BIOS",
        "isCorrect": true
      },
      {
        "text": "Контроллер DMA",
        "isCorrect": false
      },
      {
        "text": "Северный мост",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 244,
    "question": "Устройство, необходимое для редактирования и вывода звука, посредством звуковых колонок-это...",
    "answers": [
      {
        "text": "Усилитель мощности",
        "isCorrect": false
      },
      {
        "text": "Звуковая карта",
        "isCorrect": true
      },
      {
        "text": "Микрофон",
        "isCorrect": false
      },
      {
        "text": "Синтезатор частот",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 245,
    "question": "Что предназначено для постоянного хранения информации, используемой при работе компьютера: операционной системы, документов, игр и т.д.?",
    "answers": [
      {
        "text": "Кэш-память процессора",
        "isCorrect": false
      },
      {
        "text": "Жесткий диск",
        "isCorrect": true
      },
      {
        "text": "Регистры",
        "isCorrect": false
      },
      {
        "text": "Стример",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 246,
    "question": "Контроллер, предназначенный для работы в графическом режиме - ...",
    "answers": [
      {
        "text": "Драйвер",
        "isCorrect": false
      },
      {
        "text": "Видеоадаптер",
        "isCorrect": true
      },
      {
        "text": "Монитор",
        "isCorrect": false
      },
      {
        "text": "Сплиттер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 247,
    "question": "Название основной платы компьютера -",
    "answers": [
      {
        "text": "Материнская плата",
        "isCorrect": true
      },
      {
        "text": "Системная шина",
        "isCorrect": false
      },
      {
        "text": "Шасси",
        "isCorrect": false
      },
      {
        "text": "Процессорный блок",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 248,
    "question": "Какая память обеспечивает работу с программным обеспечением?",
    "answers": [
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": true
      },
      {
        "text": "Стэк",
        "isCorrect": false
      },
      {
        "text": "Виртуальная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 249,
    "question": "Память первого уровня - небольшая (несколько десятков килобайт) сверхбыстрая память, предназначена для хранения промежуточных результатов -",
    "answers": [
      {
        "text": "Регистровая память",
        "isCorrect": false
      },
      {
        "text": "Кэш L1",
        "isCorrect": true
      },
      {
        "text": "Буфер обмена",
        "isCorrect": false
      },
      {
        "text": "Файл подкачки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 250,
    "question": "В каком году был создан первый микропроцессор?",
    "answers": [
      {
        "text": "1965",
        "isCorrect": false
      },
      {
        "text": "1971",
        "isCorrect": true
      },
      {
        "text": "1980",
        "isCorrect": false
      },
      {
        "text": "1947",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 251,
    "question": "Самым главным элементом в компьютере, его 'мозгом' является ...",
    "answers": [
      {
        "text": "Блок питания",
        "isCorrect": false
      },
      {
        "text": "Центральный процессор",
        "isCorrect": true
      },
      {
        "text": "Жесткий диск",
        "isCorrect": false
      },
      {
        "text": "Монитор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 252,
    "question": "Название передатчика в виде светодиода и приемника в виде фотодиода, работающих в инфракрасном диапазоне.",
    "answers": [
      {
        "text": "Оптопара",
        "isCorrect": false
      },
      {
        "text": "ИК-порт",
        "isCorrect": true
      },
      {
        "text": "Bluetooth",
        "isCorrect": false
      },
      {
        "text": "Лазер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 253,
    "question": "Что такое параллельная обработка?",
    "answers": [
      {
        "text": "Одновременное выполнение вычислений",
        "isCorrect": true
      },
      {
        "text": "Запись в кэш",
        "isCorrect": false
      },
      {
        "text": "Передача данных битами",
        "isCorrect": false
      },
      {
        "text": "Ускорение шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 254,
    "question": "Выберите порт соответствующий данному определению - порт, осуществляющий ввод /вывод данных байтами (все биты одновременно):",
    "answers": [
      {
        "text": "COM-порт",
        "isCorrect": false
      },
      {
        "text": "LPT-порт",
        "isCorrect": true
      },
      {
        "text": "USB-порт",
        "isCorrect": false
      },
      {
        "text": "PS/2",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 255,
    "question": "Сколько ячеек зарезервировано для каждого порта ввода-вывода в памяти ввода-вывода?",
    "answers": [
      {
        "text": "Восемь бит",
        "isCorrect": false
      },
      {
        "text": "Одна ячейка",
        "isCorrect": true
      },
      {
        "text": "Целый сегмент",
        "isCorrect": false
      },
      {
        "text": "Половина слова",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 256,
    "question": "Все порты ввода-вывода (ПВВ) AVR-микроконтроллеров работают по принципу...",
    "answers": [
      {
        "text": "Прямой доступ",
        "isCorrect": false
      },
      {
        "text": "Чтение-модификация-запись",
        "isCorrect": true
      },
      {
        "text": "Последовательная передача",
        "isCorrect": false
      },
      {
        "text": "Конвейерная обработка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 257,
    "question": "Что для процессора представляет собой операция ввода-вывода?",
    "answers": [
      {
        "text": "Смена тактовой частоты",
        "isCorrect": false
      },
      {
        "text": "Обмен с портами",
        "isCorrect": true
      },
      {
        "text": "Прерывание ядра",
        "isCorrect": false
      },
      {
        "text": "Очистка кэша",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 258,
    "question": "Что называется виртуальной ячейкой, соответствующей внешнему входу (или выходу) в компьютере?",
    "answers": [
      {
        "text": "Ячейка ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Порт ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Слот расширения",
        "isCorrect": false
      },
      {
        "text": "Прерывание",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 259,
    "question": "При помощи чего осуществляется управление работой большинства устройств ввода-вывода компьютера?",
    "answers": [
      {
        "text": "Блок питания",
        "isCorrect": false
      },
      {
        "text": "Специальные контроллеры",
        "isCorrect": true
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Системный таймер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 260,
    "question": "Какие две основные архитектуры существует для построения процессора БД?",
    "answers": [
      {
        "text": "Шинная и кольцевая",
        "isCorrect": false
      },
      {
        "text": "Конвейерная и параллельная",
        "isCorrect": true
      },
      {
        "text": "Аналоговая и цифровая",
        "isCorrect": false
      },
      {
        "text": "Статическая и динамическая",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 261,
    "question": "Сколько существует основных архитектур для построения процессора БД?",
    "answers": [
      {
        "text": "Три основных типа",
        "isCorrect": true
      },
      {
        "text": "Только две архитектуры",
        "isCorrect": false
      },
      {
        "text": "Пять различных моделей",
        "isCorrect": false
      },
      {
        "text": "Одна универсальная структура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 262,
    "question": "Основное требование к серверу БД -",
    "answers": [
      {
        "text": "Наличие видеокарты",
        "isCorrect": false
      },
      {
        "text": "Высокая производительность",
        "isCorrect": true
      },
      {
        "text": "Минимальный объем диска",
        "isCorrect": false
      },
      {
        "text": "Компактный размер корпуса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 263,
    "question": "Что является основной частью любой системы 'клиент-сервер'?",
    "answers": [
      {
        "text": "Струйный принтер",
        "isCorrect": false
      },
      {
        "text": "Оптический привод",
        "isCorrect": false
      },
      {
        "text": "Сетевая среда передачи",
        "isCorrect": true
      },
      {
        "text": "Графический планшет",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 264,
    "question": "Какие черты технология клиент-сервер позаимствовала от мэйнфреймов?",
    "answers": [
      {
        "text": "Централизованное управление данными",
        "isCorrect": true
      },
      {
        "text": "Низкую скорость обработки",
        "isCorrect": false
      },
      {
        "text": "Отсутствие сетевых протоколов",
        "isCorrect": false
      },
      {
        "text": "Использование перфокарт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 265,
    "question": "Что предназначена для непосредственной работы пользователя и обладает ресурсами, соответствующими локальным потребностям?",
    "answers": [
      {
        "text": "Серверная стойка",
        "isCorrect": false
      },
      {
        "text": "Магистральный кабель",
        "isCorrect": false
      },
      {
        "text": "Рабочая станция",
        "isCorrect": true
      },
      {
        "text": "Коммутатор доступа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 266,
    "question": "Какая идея лежит в основе широкого распространения локальных сетей компьютеров?",
    "answers": [
      {
        "text": "Разделение дорогостоящих ресурсов",
        "isCorrect": true
      },
      {
        "text": "Увеличение стоимости оборудования",
        "isCorrect": false
      },
      {
        "text": "Отказ от цифровой передачи",
        "isCorrect": false
      },
      {
        "text": "Изоляция рабочих мест",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 267,
    "question": "В связи с чем открытые системы приобретают еще большее значение и масштабность?",
    "answers": [
      {
        "text": "Глобализация компьютерных сетей",
        "isCorrect": true
      },
      {
        "text": "Закрытие исходного кода",
        "isCorrect": false
      },
      {
        "text": "Ограничение числа пользователей",
        "isCorrect": false
      },
      {
        "text": "Использование магнитных лент",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 268,
    "question": "Благодаря чему стало возможным реальное распространение архитектуры 'клиент-сервер'?",
    "answers": [
      {
        "text": "Стандартизация сетевых протоколов",
        "isCorrect": true
      },
      {
        "text": "Изобретение манипулятора мышь",
        "isCorrect": false
      },
      {
        "text": "Снижение мощности процессоров",
        "isCorrect": false
      },
      {
        "text": "Отказ от баз данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 269,
    "question": "Что построили ученые из группы теоретической астрофизики в 1998 году в Лос-Аламосской национальной лаборатории?",
    "answers": [
      {
        "text": "Новый тип транзистора",
        "isCorrect": false
      },
      {
        "text": "Суперкомпьютер Avalon",
        "isCorrect": true
      },
      {
        "text": "Глобальный интернет-шлюз",
        "isCorrect": false
      },
      {
        "text": "Прототип квантовой памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 270,
    "question": "Где в 1998 году астрофизик Michael Warren и другие ученые построили суперкомпьютер Avalon?",
    "answers": [
      {
        "text": "В лаборатории Лос-Аламоса",
        "isCorrect": true
      },
      {
        "text": "В университете Беркли",
        "isCorrect": false
      },
      {
        "text": "В штаб-квартире IBM",
        "isCorrect": false
      },
      {
        "text": "В офисе Microsoft",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 271,
    "question": "В каком году в Лос-Аламосской национальной лаборатории построили суперкомпьютер Avalon?",
    "answers": [
      {
        "text": "В 1990 году",
        "isCorrect": false
      },
      {
        "text": "В 1985 году",
        "isCorrect": false
      },
      {
        "text": "В 2005 году",
        "isCorrect": false
      },
      {
        "text": "В 1998 году",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 272,
    "question": "Как определила компания DEC концепцию кластерной системы?",
    "answers": [
      {
        "text": "Группа независимых систем",
        "isCorrect": true
      },
      {
        "text": "Одиночный мощный компьютер",
        "isCorrect": false
      },
      {
        "text": "Виртуальный эмулятор ОС",
        "isCorrect": false
      },
      {
        "text": "Набор периферийных устройств",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 273,
    "question": "В каком году компания DEC первой анонсировала концепцию кластерной системы?",
    "answers": [
      {
        "text": "В 1983 году",
        "isCorrect": true
      },
      {
        "text": "В 1975 году",
        "isCorrect": false
      },
      {
        "text": "В 1995 году",
        "isCorrect": false
      },
      {
        "text": "В 2000 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 274,
    "question": "Какая компания первой анонсировала концепцию кластерной системы в 1983 году?",
    "answers": [
      {
        "text": "Intel Corporation",
        "isCorrect": false
      },
      {
        "text": "Digital Equipment Corporation",
        "isCorrect": true
      },
      {
        "text": "Apple Computers",
        "isCorrect": false
      },
      {
        "text": "Oracle Systems",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 275,
    "question": "Дисковый массив RAID -",
    "answers": [
      {
        "text": "Избыточный массив дисков",
        "isCorrect": true
      },
      {
        "text": "Быстрая оперативная память",
        "isCorrect": false
      },
      {
        "text": "Протокол беспроводной связи",
        "isCorrect": false
      },
      {
        "text": "Алгоритм сжатия текста",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 276,
    "question": "Какое понятие означает возможность считать кластер одной сущностью?",
    "answers": [
      {
        "text": "Многозадачность системы",
        "isCorrect": false
      },
      {
        "text": "Единый образ системы",
        "isCorrect": true
      },
      {
        "text": "Распределенная база данных",
        "isCorrect": false
      },
      {
        "text": "Сетевая топология шина",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 277,
    "question": "В каких годах корпорация Digital Equipment реализовала концепцию кластера?",
    "answers": [
      {
        "text": "Начало 1980-х годов",
        "isCorrect": true
      },
      {
        "text": "Конец 1960-х годов",
        "isCorrect": false
      },
      {
        "text": "Середина 1990-х годов",
        "isCorrect": false
      },
      {
        "text": "После 2010 года",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 278,
    "question": "Дайте определение 'вычислительный кластер' -",
    "answers": [
      {
        "text": "Одиночный домашний ПК",
        "isCorrect": false
      },
      {
        "text": "Группа связанных компьютеров",
        "isCorrect": true
      },
      {
        "text": "Сенсорная панель управления",
        "isCorrect": false
      },
      {
        "text": "Модем для связи",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 279,
    "question": "Как называются слабосвязанные системы на базе стандартных сетевых технологий?",
    "answers": [
      {
        "text": "Кластерные системы",
        "isCorrect": true
      },
      {
        "text": "Микропроцессорные сборки",
        "isCorrect": false
      },
      {
        "text": "Автономные контроллеры",
        "isCorrect": false
      },
      {
        "text": "Аналоговые вычислители",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 280,
    "question": "Как называется завершенная компьютерная система со всеми ресурсами внутри кластера?",
    "answers": [
      {
        "text": "Файловый архив",
        "isCorrect": false
      },
      {
        "text": "Сетевой экран",
        "isCorrect": false
      },
      {
        "text": "Вычислительный узел",
        "isCorrect": true
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 281,
    "question": "Как называется связанный набор полноценных компьютеров, используемый в качестве единого ресурса?",
    "answers": [
      {
        "text": "Вычислительный кластер",
        "isCorrect": true
      },
      {
        "text": "Системный блок",
        "isCorrect": false
      },
      {
        "text": "Локальная шина",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 282,
    "question": "Что является многоканальными устройствами согласования?",
    "answers": [
      {
        "text": "Мультиплексоры передачи данных",
        "isCorrect": true
      },
      {
        "text": "Внутренние регистры",
        "isCorrect": false
      },
      {
        "text": "Блоки питания",
        "isCorrect": false
      },
      {
        "text": "Жесткие диски",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 283,
    "question": "Что не включает в себя система телеобработки информации?",
    "answers": [
      {
        "text": "Локальное периферийное оборудование",
        "isCorrect": true
      },
      {
        "text": "Каналы связи",
        "isCorrect": false
      },
      {
        "text": "Абонентские пункты",
        "isCorrect": false
      },
      {
        "text": "Средства сопряжения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 284,
    "question": "Назовите первых представителей(я) систем распределенной обработки данных?",
    "answers": [
      {
        "text": "Системы телеобработки",
        "isCorrect": true
      },
      {
        "text": "Квантовые серверы",
        "isCorrect": false
      },
      {
        "text": "Облачные хранилища",
        "isCorrect": false
      },
      {
        "text": "Нейронные сети",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 285,
    "question": "Распределенная обработка данных - это...",
    "answers": [
      {
        "text": "Обработка на нескольких узлах",
        "isCorrect": true
      },
      {
        "text": "Архивация файлов",
        "isCorrect": false
      },
      {
        "text": "Форматирование диска",
        "isCorrect": false
      },
      {
        "text": "Печать документа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 286,
    "question": "Многомашинные вычислительные системы - это...",
    "answers": [
      {
        "text": "Комплекс взаимосвязанных ЭВМ",
        "isCorrect": true
      },
      {
        "text": "Многоядерный процессор",
        "isCorrect": false
      },
      {
        "text": "Виртуальная машина",
        "isCorrect": false
      },
      {
        "text": "Видеокарта с двумя чипами",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 287,
    "question": "Что подразумевается под помехоустойчивостью системы связи?",
    "answers": [
      {
        "text": "Способность противостоять искажениям",
        "isCorrect": true
      },
      {
        "text": "Скорость передачи тока",
        "isCorrect": false
      },
      {
        "text": "Длина кабеля",
        "isCorrect": false
      },
      {
        "text": "Вес оборудования",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 288,
    "question": "Дайте определение линии связи?",
    "answers": [
      {
        "text": "Физическая среда передачи сигналов",
        "isCorrect": true
      },
      {
        "text": "Программный протокол",
        "isCorrect": false
      },
      {
        "text": "Адрес в памяти",
        "isCorrect": false
      },
      {
        "text": "Алгоритм шифрования",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 289,
    "question": "Что происходит при передаче сообщения, когда сигнал поступает на кодирующее устройство (кодер)?",
    "answers": [
      {
        "text": "Преобразование в кодовую комбинацию",
        "isCorrect": true
      },
      {
        "text": "Удаление информации",
        "isCorrect": false
      },
      {
        "text": "Нагрев процессора",
        "isCorrect": false
      },
      {
        "text": "Воспроизведение звука",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 290,
    "question": "Куда в первую очередь поступает сигнал при передаче сообщения?",
    "answers": [
      {
        "text": "На кодирующее устройство",
        "isCorrect": true
      },
      {
        "text": "В монитор",
        "isCorrect": false
      },
      {
        "text": "На жесткий диск",
        "isCorrect": false
      },
      {
        "text": "В принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 291,
    "question": "Для чего служат источник (передатчик) и получатель (приемник)?",
    "answers": [
      {
        "text": "Для преобразования и восприятия",
        "isCorrect": true
      },
      {
        "text": "Для охлаждения системы",
        "isCorrect": false
      },
      {
        "text": "Для хранения архивов",
        "isCorrect": false
      },
      {
        "text": "Для фильтрации пыли",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 292,
    "question": "Для чего используется шина адреса?",
    "answers": [
      {
        "text": "Для выбора ячейки памяти",
        "isCorrect": true
      },
      {
        "text": "Для передачи питания",
        "isCorrect": false
      },
      {
        "text": "Для изменения громкости",
        "isCorrect": false
      },
      {
        "text": "Для ускорения интернета",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 293,
    "question": "Чем определяется разрядность шины данных?",
    "answers": [
      {
        "text": "Разрядностью процессора",
        "isCorrect": true
      },
      {
        "text": "Цветом корпуса",
        "isCorrect": false
      },
      {
        "text": "Скоростью мыши",
        "isCorrect": false
      },
      {
        "text": "Размером экрана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 294,
    "question": "Выберите достоинство Инфракрасных излучателей?",
    "answers": [
      {
        "text": "Отсутствие радиопомех",
        "isCorrect": true
      },
      {
        "text": "Связь через стены",
        "isCorrect": false
      },
      {
        "text": "Работа под водой",
        "isCorrect": false
      },
      {
        "text": "Неограниченная дальность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 295,
    "question": "Какой интерфейс позволяет осуществлять связь между парой устройств, удаленных на расстояние, достигающее нескольких метров?",
    "answers": [
      {
        "text": "Последовательный интерфейс RS-232",
        "isCorrect": true
      },
      {
        "text": "Шина PCI",
        "isCorrect": false
      },
      {
        "text": "Внутренняя шина кэша",
        "isCorrect": false
      },
      {
        "text": "Контроллер прерываний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 296,
    "question": "Какой кабель используют для связи двух компьютеров, удаленных друг от друга на небольшое расстояние, и непосредственное соединение их СОМ-портов?",
    "answers": [
      {
        "text": "Нуль-модемный кабель",
        "isCorrect": true
      },
      {
        "text": "Коаксиальный ТВ-кабель",
        "isCorrect": false
      },
      {
        "text": "Силовой шнур",
        "isCorrect": false
      },
      {
        "text": "Оптический патч-корд",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 297,
    "question": "Какой кабель используется для подключения внешних модемов?",
    "answers": [
      {
        "text": "Стандартный последовательный кабель",
        "isCorrect": true
      },
      {
        "text": "Акустический провод",
        "isCorrect": false
      },
      {
        "text": "SATA шлейф",
        "isCorrect": false
      },
      {
        "text": "VGA кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 298,
    "question": "Какой порт используется для подключения электронных ключей (Security Devices), предназначенных для защиты от нелицензированного использования ПО?",
    "answers": [
      {
        "text": "Параллельный LPT-порт",
        "isCorrect": true
      },
      {
        "text": "Игровой порт",
        "isCorrect": false
      },
      {
        "text": "Разъем PS/2",
        "isCorrect": false
      },
      {
        "text": "Слот расширения AGP",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 299,
    "question": "Для чего чаще всего используются СОМ-порты?",
    "answers": [
      {
        "text": "Для мышей и модемов",
        "isCorrect": true
      },
      {
        "text": "Для видеокарт",
        "isCorrect": false
      },
      {
        "text": "Для оперативной памяти",
        "isCorrect": false
      },
      {
        "text": "Для питания монитора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 300,
    "question": "Хост-компьютер общается с устройствами через контроллер. Какие обязанности не входят в Хост?",
    "answers": [
      {
        "text": "Управление сигналами шины",
        "isCorrect": true
      },
      {
        "text": "Обработка данных",
        "isCorrect": false
      },
      {
        "text": "Выполнение приложений",
        "isCorrect": false
      },
      {
        "text": "Координация запросов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 301,
    "question": "В каком состоянии не могут находиться нисходящие (Downstream) порты хабов?",
    "answers": [
      {
        "text": "Ожидание запроса",
        "isCorrect": true
      },
      {
        "text": "Отключено",
        "isCorrect": false
      },
      {
        "text": "Питание подано",
        "isCorrect": false
      },
      {
        "text": "Сброс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 302,
    "question": "Что позволяет возможность удаленного пробуждения (Remote Wakeup)?",
    "answers": [
      {
        "text": "Вывод системы из сна",
        "isCorrect": true
      },
      {
        "text": "Форматирование диска",
        "isCorrect": false
      },
      {
        "text": "Перезагрузку BIOS",
        "isCorrect": false
      },
      {
        "text": "Обновление драйверов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 303,
    "question": "Сплошные передачи (Bulk Data Transfers) допускаются при:",
    "answers": [
      {
        "text": "Наличии свободного времени шины",
        "isCorrect": true
      },
      {
        "text": "Максимальной загрузке CPU",
        "isCorrect": false
      },
      {
        "text": "Отключении всех функций",
        "isCorrect": false
      },
      {
        "text": "Использовании только USB 3.0",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 304,
    "question": "Для чего не используется Хаб?",
    "answers": [
      {
        "text": "Сложных математических вычислений",
        "isCorrect": true
      },
      {
        "text": "Точки подключения устройств",
        "isCorrect": false
      },
      {
        "text": "Управления питанием портов",
        "isCorrect": false
      },
      {
        "text": "Обнаружения новых подключений",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 305,
    "question": "Сколько у каждого хаба имеется восходящих портов (Upstream Port), предназначенных для подключения к хосту?",
    "answers": [
      {
        "text": "Ровно один",
        "isCorrect": true
      },
      {
        "text": "Два дублирующих",
        "isCorrect": false
      },
      {
        "text": "Зависит от модели",
        "isCorrect": false
      },
      {
        "text": "Минимум четыре",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 306,
    "question": "Функции представляют собой устройства, способные передавать данные. Примерами функций не являются:",
    "answers": [
      {
        "text": "USB-концентратор",
        "isCorrect": true
      },
      {
        "text": "Оптическая мышь",
        "isCorrect": false
      },
      {
        "text": "Цифровая камера",
        "isCorrect": false
      },
      {
        "text": "Струйный принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 307,
    "question": "Как расшифровывается аббревиатура LPT порта?",
    "answers": [
      {
        "text": "Line Print Terminal",
        "isCorrect": true
      },
      {
        "text": "Local Port Transfer",
        "isCorrect": false
      },
      {
        "text": "Low Packet Type",
        "isCorrect": false
      },
      {
        "text": "Logical Peripheral Tool",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 308,
    "question": "Что можно подключить к LPT-порту?",
    "answers": [
      {
        "text": "Принтер",
        "isCorrect": true
      },
      {
        "text": "Монитор HDMI",
        "isCorrect": false
      },
      {
        "text": "Блок питания",
        "isCorrect": false
      },
      {
        "text": "Оперативную память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 309,
    "question": "Как по другому называется LPT-порт?",
    "answers": [
      {
        "text": "Параллельный порт",
        "isCorrect": true
      },
      {
        "text": "Последовательная шина",
        "isCorrect": false
      },
      {
        "text": "Сетевой адаптер",
        "isCorrect": false
      },
      {
        "text": "Видеовыход",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 310,
    "question": "К какому интерфейсу относиться международный стандарт IEEE 1284?",
    "answers": [
      {
        "text": "LPT-порт",
        "isCorrect": true
      },
      {
        "text": "Bluetooth 4.0",
        "isCorrect": false
      },
      {
        "text": "Ethernet",
        "isCorrect": false
      },
      {
        "text": "SATA",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 311,
    "question": "Для чего не используются внешние шины?",
    "answers": [
      {
        "text": "Работы внутреннего кэша CPU",
        "isCorrect": true
      },
      {
        "text": "Подключения периферии",
        "isCorrect": false
      },
      {
        "text": "Связи с принтером",
        "isCorrect": false
      },
      {
        "text": "Передачи данных сканеру",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 312,
    "question": "Какой тип передачи данных не допускает Архитектура USB?",
    "answers": [
      {
        "text": "Прямая передача в память",
        "isCorrect": true
      },
      {
        "text": "Изохронные потоки",
        "isCorrect": false
      },
      {
        "text": "Прерывания",
        "isCorrect": false
      },
      {
        "text": "Управляющие посылки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 313,
    "question": "Что используется для низкой скорости передачи сигналов USB?",
    "answers": [
      {
        "text": "Неэкранированная витая пара",
        "isCorrect": true
      },
      {
        "text": "Оптоволоконный кабель",
        "isCorrect": false
      },
      {
        "text": "Коаксиальный провод",
        "isCorrect": false
      },
      {
        "text": "Медная шина питания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 314,
    "question": "Что используется для полной скорости передачи сигналов USB?",
    "answers": [
      {
        "text": "Экранированная витая пара",
        "isCorrect": true
      },
      {
        "text": "Обычный телефонный провод",
        "isCorrect": false
      },
      {
        "text": "Инфракрасный порт",
        "isCorrect": false
      },
      {
        "text": "Плоский шлейф IDE",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 315,
    "question": "Низкая скорость передачи сигналов USB составляет:",
    "answers": [
      {
        "text": "1.5 Мбит/с",
        "isCorrect": true
      },
      {
        "text": "100 Кбит/с",
        "isCorrect": false
      },
      {
        "text": "10 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "480 Кбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 316,
    "question": "Полная скорость передачи сигналов USB составляет:",
    "answers": [
      {
        "text": "12 Мбит/с",
        "isCorrect": true
      },
      {
        "text": "1.5 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "100 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "56 Кбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 317,
    "question": "Сколько базовых типа передачи данных допускает Архитектура USB?",
    "answers": [
      {
        "text": "Четыре",
        "isCorrect": true
      },
      {
        "text": "Восемь",
        "isCorrect": false
      },
      {
        "text": "Два",
        "isCorrect": false
      },
      {
        "text": "Шестнадцать",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 318,
    "question": "Хост-контроллер (Host Controller), управляющий работой всей системы USB, является:",
    "answers": [
      {
        "text": "Программно-аппаратным блоком",
        "isCorrect": true
      },
      {
        "text": "Внешним устройством ввода",
        "isCorrect": false
      },
      {
        "text": "Только сетевым протоколом",
        "isCorrect": false
      },
      {
        "text": "Механическим переключателем",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 319,
    "question": "Что управляет работой всей системы USB?",
    "answers": [
      {
        "text": "Хост-контроллер",
        "isCorrect": true
      },
      {
        "text": "Операционная система принтера",
        "isCorrect": false
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Южный мост отдельно",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 320,
    "question": "В каком году была опубликована версия 1.0 Универсальной последовательной шины (USB)?",
    "answers": [
      {
        "text": "1996 год",
        "isCorrect": true
      },
      {
        "text": "1990 год",
        "isCorrect": false
      },
      {
        "text": "2001 год",
        "isCorrect": false
      },
      {
        "text": "1985 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 321,
    "question": "USB не обеспечивает:",
    "answers": [
      {
        "text": "Параллельную передачу данных",
        "isCorrect": true
      },
      {
        "text": "Питание внешних устройств",
        "isCorrect": false
      },
      {
        "text": "Горячее подключение",
        "isCorrect": false
      },
      {
        "text": "Последовательный интерфейс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 322,
    "question": "Что означает \"конвейерное выполнение команд\"?",
    "answers": [
      {
        "text": "Обработка нескольких стадий одновременно",
        "isCorrect": true
      },
      {
        "text": "Увеличение объема памяти",
        "isCorrect": false
      },
      {
        "text": "Последовательный запуск программ",
        "isCorrect": false
      },
      {
        "text": "Использование внешних накопителей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 323,
    "question": "В каком процессоре реализовалась возможность многозадачной работы?",
    "answers": [
      {
        "text": "Intel 4004",
        "isCorrect": false
      },
      {
        "text": "Intel 80286",
        "isCorrect": true
      },
      {
        "text": "MOS 6502",
        "isCorrect": false
      },
      {
        "text": "Intel 8080",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 324,
    "question": "Какого элемента в составе микропроцессора не существует?",
    "answers": [
      {
        "text": "Устройство управления",
        "isCorrect": false
      },
      {
        "text": "Оперативная память (RAM)",
        "isCorrect": true
      },
      {
        "text": "Арифметико-логическое устройство",
        "isCorrect": false
      },
      {
        "text": "Регистры общего назначения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 325,
    "question": "В современных компьютерах процессоры выполнены в виде компактного модуля размерами около...",
    "answers": [
      {
        "text": "5x5 сантиметров",
        "isCorrect": true
      },
      {
        "text": "20x20 сантиметров",
        "isCorrect": false
      },
      {
        "text": "1x1 миллиметр",
        "isCorrect": false
      },
      {
        "text": "50x50 сантиметров",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 326,
    "question": "Укажите фирму по производству процессоров для персональных компьютеров?",
    "answers": [
      {
        "text": "Adobe",
        "isCorrect": false
      },
      {
        "text": "Cisco",
        "isCorrect": false
      },
      {
        "text": "AMD",
        "isCorrect": true
      },
      {
        "text": "Western Digital",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 327,
    "question": "Какой была стоимость первого микропроцессора Intel 4004?",
    "answers": [
      {
        "text": "200 долларов",
        "isCorrect": true
      },
      {
        "text": "1000 долларов",
        "isCorrect": false
      },
      {
        "text": "50 долларов",
        "isCorrect": false
      },
      {
        "text": "5 долларов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 328,
    "question": "Назовите основные характеристики процессора:",
    "answers": [
      {
        "text": "Объем жесткого диска",
        "isCorrect": false
      },
      {
        "text": "Тип видеокарты",
        "isCorrect": false
      },
      {
        "text": "Тактовая частота и разрядность",
        "isCorrect": true
      },
      {
        "text": "Разрешение монитора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 329,
    "question": "Когда началась история создания микропроцессоров?",
    "answers": [
      {
        "text": "В начале 1970-х",
        "isCorrect": true
      },
      {
        "text": "В конце 1950-х",
        "isCorrect": false
      },
      {
        "text": "В середине 1980-х",
        "isCorrect": false
      },
      {
        "text": "В 1945 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 330,
    "question": "Назовите две фирмы - производителя микропроцессоров?",
    "answers": [
      {
        "text": "Sony и Kingston",
        "isCorrect": false
      },
      {
        "text": "Intel и AMD",
        "isCorrect": true
      },
      {
        "text": "Microsoft и Google",
        "isCorrect": false
      },
      {
        "text": "Asus и MSI",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 331,
    "question": "Укажите верный алгоритм работы процессора:",
    "answers": [
      {
        "text": "2, 3, 4, 1",
        "isCorrect": true
      },
      {
        "text": "1, 2, 3, 4",
        "isCorrect": false
      },
      {
        "text": "4, 3, 2, 1",
        "isCorrect": false
      },
      {
        "text": "3, 1, 2, 4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 332,
    "question": "Методы увеличения производительности процессора?",
    "answers": [
      {
        "text": "Уменьшение кэш-памяти",
        "isCorrect": false
      },
      {
        "text": "Повышение тактовой частоты",
        "isCorrect": true
      },
      {
        "text": "Снижение количества ядер",
        "isCorrect": false
      },
      {
        "text": "Ограничение шины данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 333,
    "question": "Сколько транзисторов содержал первый микропроцессор Intel 4004?",
    "answers": [
      {
        "text": "Около 2300",
        "isCorrect": true
      },
      {
        "text": "Более 1 миллиона",
        "isCorrect": false
      },
      {
        "text": "Ровно 500",
        "isCorrect": false
      },
      {
        "text": "Примерно 10000",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 334,
    "question": "Многоядерные процессоры содержат...",
    "answers": [
      {
        "text": "Несколько вычислительных ядер",
        "isCorrect": true
      },
      {
        "text": "Много видеочипов",
        "isCorrect": false
      },
      {
        "text": "Разные материнские платы",
        "isCorrect": false
      },
      {
        "text": "Систему водяного охлаждения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 335,
    "question": "Какая из перечисленных функций микропроцессора неверна?",
    "answers": [
      {
        "text": "Длительное хранение файлов",
        "isCorrect": true
      },
      {
        "text": "Обработка данных",
        "isCorrect": false
      },
      {
        "text": "Управление работой устройств",
        "isCorrect": false
      },
      {
        "text": "Арифметические вычисления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 336,
    "question": "Какая арифметика использовалась в первых микропроцессорах?",
    "answers": [
      {
        "text": "Двоично-десятичный код (BCD)",
        "isCorrect": true
      },
      {
        "text": "Числа с плавающей точкой",
        "isCorrect": false
      },
      {
        "text": "Троичная логика",
        "isCorrect": false
      },
      {
        "text": "Квантовые вычисления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 337,
    "question": "Где применялись первые микропроцессоры?",
    "answers": [
      {
        "text": "В микрокалькуляторах",
        "isCorrect": true
      },
      {
        "text": "В суперкомпьютерах",
        "isCorrect": false
      },
      {
        "text": "В мобильных телефонах",
        "isCorrect": false
      },
      {
        "text": "В игровых приставках",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 338,
    "question": "В чём измеряется тактовая частота микропроцессора?",
    "answers": [
      {
        "text": "В Герцах (ГГц)",
        "isCorrect": true
      },
      {
        "text": "В Байтах",
        "isCorrect": false
      },
      {
        "text": "В Ваттах",
        "isCorrect": false
      },
      {
        "text": "В Амперах",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 339,
    "question": "Когда был выпущен Apple II?",
    "answers": [
      {
        "text": "1977 год",
        "isCorrect": true
      },
      {
        "text": "1984 год",
        "isCorrect": false
      },
      {
        "text": "1971 год",
        "isCorrect": false
      },
      {
        "text": "1991 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 340,
    "question": "Где формируется адрес команды?",
    "answers": [
      {
        "text": "В счетчике команд",
        "isCorrect": true
      },
      {
        "text": "В блоке питания",
        "isCorrect": false
      },
      {
        "text": "На жестком диске",
        "isCorrect": false
      },
      {
        "text": "В видеопамяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 341,
    "question": "Чьё назначение формировать последовательности тактовых импульсов, которые позволяют провести временное развертывание цикла работы процессора?",
    "answers": [
      {
        "text": "Делитель частоты шины",
        "isCorrect": false
      },
      {
        "text": "Блок тактовых импульсов",
        "isCorrect": true
      },
      {
        "text": "Системный таймер прерываний",
        "isCorrect": false
      },
      {
        "text": "Регистр состояний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 342,
    "question": "Что такое УС?",
    "answers": [
      {
        "text": "Универсальный сумматор",
        "isCorrect": false
      },
      {
        "text": "Узловой соединитель",
        "isCorrect": false
      },
      {
        "text": "Устройство синхронизации",
        "isCorrect": true
      },
      {
        "text": "Управляющая сетка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 343,
    "question": "Что такое БУО?",
    "answers": [
      {
        "text": "Блок управления операциями",
        "isCorrect": true
      },
      {
        "text": "Буферный узел обмена",
        "isCorrect": false
      },
      {
        "text": "База удаленных объектов",
        "isCorrect": false
      },
      {
        "text": "Блок удаления ошибок",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 344,
    "question": "Что такое БАК?",
    "answers": [
      {
        "text": "Базовый адресный контроллер",
        "isCorrect": false
      },
      {
        "text": "Блок анализа команд",
        "isCorrect": true
      },
      {
        "text": "Бинарный аккумулятор кодов",
        "isCorrect": false
      },
      {
        "text": "Блок аппаратного контроля",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 345,
    "question": "Что такое БП?",
    "answers": [
      {
        "text": "Буфер памяти",
        "isCorrect": false
      },
      {
        "text": "Базовый процессор",
        "isCorrect": false
      },
      {
        "text": "Блок прерываний",
        "isCorrect": true
      },
      {
        "text": "Бинарный преобразователь",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 346,
    "question": "Что такое БТИ?",
    "answers": [
      {
        "text": "Базовый таймер интерфейса",
        "isCorrect": false
      },
      {
        "text": "Блок текстовой индикации",
        "isCorrect": false
      },
      {
        "text": "Бинарный транслятор инструкций",
        "isCorrect": false
      },
      {
        "text": "Блок тактовых импульсов",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 347,
    "question": "Что такое БПА?",
    "answers": [
      {
        "text": "Блок программного адреса",
        "isCorrect": true
      },
      {
        "text": "Буфер приема адреса",
        "isCorrect": false
      },
      {
        "text": "Базовый порт адаптера",
        "isCorrect": false
      },
      {
        "text": "Блок пакетного анализа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 348,
    "question": "Что такое БРК?",
    "answers": [
      {
        "text": "Блок расширения команд",
        "isCorrect": false
      },
      {
        "text": "Бинарный распределитель каналов",
        "isCorrect": false
      },
      {
        "text": "Блок регистра команд",
        "isCorrect": true
      },
      {
        "text": "Базовый регистр кэша",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 349,
    "question": "Что такое ИПУ?",
    "answers": [
      {
        "text": "Интерфейс программных установок",
        "isCorrect": false
      },
      {
        "text": "Источник питания универсальный",
        "isCorrect": false
      },
      {
        "text": "Инженерный пульт управления",
        "isCorrect": true
      },
      {
        "text": "Индикатор параметров узла",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 350,
    "question": "ИПУ - обеспечивает:",
    "answers": [
      {
        "text": "Сжатие данных",
        "isCorrect": false
      },
      {
        "text": "Ручной контроль режимов",
        "isCorrect": true
      },
      {
        "text": "Охлаждение процессора",
        "isCorrect": false
      },
      {
        "text": "Сетевую маршрутизацию",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 351,
    "question": "Необходимым атрибутом микропроцессорных схем являются:",
    "answers": [
      {
        "text": "Схемы сброса",
        "isCorrect": true
      },
      {
        "text": "Механические реле",
        "isCorrect": false
      },
      {
        "text": "Оптические датчики",
        "isCorrect": false
      },
      {
        "text": "Магнитные ленты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 352,
    "question": "БРК, БТИ, БП, БУО - это структура",
    "answers": [
      {
        "text": "Оперативной памяти",
        "isCorrect": false
      },
      {
        "text": "Центрального устройства управления",
        "isCorrect": true
      },
      {
        "text": "Видеоподсистемы",
        "isCorrect": false
      },
      {
        "text": "Жесткого диска",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 353,
    "question": "Пуск или остановку ЭВМ, выполнение процессором заданного режима, вывод на средства индикации обеспечивает...",
    "answers": [
      {
        "text": "Математический сопроцессор",
        "isCorrect": false
      },
      {
        "text": "Блок плавающей запятой",
        "isCorrect": false
      },
      {
        "text": "Инженерный пульт управления",
        "isCorrect": true
      },
      {
        "text": "Контроллер прямого доступа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 354,
    "question": "Микрокомпьютер или микропроцессор является основой...",
    "answers": [
      {
        "text": "Аналоговых сумматоров",
        "isCorrect": false
      },
      {
        "text": "Механических машин",
        "isCorrect": false
      },
      {
        "text": "Оптических линз",
        "isCorrect": false
      },
      {
        "text": "Систем автоматического управления",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 355,
    "question": "Схемы сброса являются необходимым атрибутом для...",
    "answers": [
      {
        "text": "Начальной инициализации",
        "isCorrect": true
      },
      {
        "text": "Защиты от перегрева",
        "isCorrect": false
      },
      {
        "text": "Кодирования видео",
        "isCorrect": false
      },
      {
        "text": "Ускорения вычислений",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 356,
    "question": "Какая из команд не подаётся с панели управления к центральному процессору напрямую?",
    "answers": [
      {
        "text": "Сигнал «Сброс»",
        "isCorrect": false
      },
      {
        "text": "Арифметическое сложение",
        "isCorrect": true
      },
      {
        "text": "Команда «Пуск»",
        "isCorrect": false
      },
      {
        "text": "Режим «Стоп»",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 357,
    "question": "Где записаны различные рабочие константы?",
    "answers": [
      {
        "text": "В кэш-памяти",
        "isCorrect": false
      },
      {
        "text": "В АЛУ",
        "isCorrect": false
      },
      {
        "text": "В ПЗУ",
        "isCorrect": true
      },
      {
        "text": "В регистрах флагов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 358,
    "question": "Отдельный процессор для обработки сигналов, поступающих с приемника команд дистанционного управления?",
    "answers": [
      {
        "text": "Шифратор адреса",
        "isCorrect": false
      },
      {
        "text": "Микроконтроллер управления",
        "isCorrect": true
      },
      {
        "text": "Мультиплексор данных",
        "isCorrect": false
      },
      {
        "text": "Дешифратор команд",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 359,
    "question": "Центральное устройство управления ....... автоматическое взаимодействие всех устройств ЭВМ в процессе решения задачи.",
    "answers": [
      {
        "text": "Блокирует",
        "isCorrect": false
      },
      {
        "text": "Координирует",
        "isCorrect": true
      },
      {
        "text": "Игнорирует",
        "isCorrect": false
      },
      {
        "text": "Замедляет",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 360,
    "question": "На какие типы делится ЦУУ?",
    "answers": [
      {
        "text": "Схемное и микропрограммное",
        "isCorrect": true
      },
      {
        "text": "Аналоговое и релейное",
        "isCorrect": false
      },
      {
        "text": "Внешнее и скрытое",
        "isCorrect": false
      },
      {
        "text": "Однобитное и многобитное",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 361,
    "question": "Пуск или остановку ЭВМ обеспечивает:",
    "answers": [
      {
        "text": "Пульт управления",
        "isCorrect": true
      },
      {
        "text": "Операционная система",
        "isCorrect": false
      },
      {
        "text": "Кнопка питания корпуса",
        "isCorrect": false
      },
      {
        "text": "Системный таймер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 362,
    "question": "Организует и координирует автоматическое взаимодействие всех устройств ЭВМ в процессе решения задачи это:",
    "answers": [
      {
        "text": "Устройство управления",
        "isCorrect": true
      },
      {
        "text": "Системная шина",
        "isCorrect": false
      },
      {
        "text": "Арифметико-логический блок",
        "isCorrect": false
      },
      {
        "text": "Контроллер прерываний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 363,
    "question": "Поддержанный аппаратными средствами механизм, создающий ощущение, что компьютер имеет больше физической оперативной памяти, чем есть на самом деле это:",
    "answers": [
      {
        "text": "Виртуальная память",
        "isCorrect": true
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      },
      {
        "text": "Развернутая память",
        "isCorrect": false
      },
      {
        "text": "Видеопамять",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 364,
    "question": "Процесс, с помощью которого компьютерная система распределяет ограниченный объем физической памяти между различными процессами, называется:",
    "answers": [
      {
        "text": "Управление памятью",
        "isCorrect": true
      },
      {
        "text": "Дефрагментация данных",
        "isCorrect": false
      },
      {
        "text": "Сегментация диска",
        "isCorrect": false
      },
      {
        "text": "Буферизация ввода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 365,
    "question": "Память, организованная по принципам спецификации EMS, называется:",
    "answers": [
      {
        "text": "Дополнительная память",
        "isCorrect": true
      },
      {
        "text": "Расширенная память",
        "isCorrect": false
      },
      {
        "text": "Базовая область",
        "isCorrect": false
      },
      {
        "text": "Верхняя память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 366,
    "question": "Операционная система MS DOS может использовать лишь первый мегабайт памяти, который часто называют:",
    "answers": [
      {
        "text": "Базовая память",
        "isCorrect": true
      },
      {
        "text": "Системный кэш",
        "isCorrect": false
      },
      {
        "text": "Область загрузки",
        "isCorrect": false
      },
      {
        "text": "Нижняя память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 367,
    "question": "Память ПК, остающаяся за вычетом первого мегабайта (т.е. за вычетом базовой памяти), называется:",
    "answers": [
      {
        "text": "Расширенная память",
        "isCorrect": true
      },
      {
        "text": "Вторичное ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Регистровая память",
        "isCorrect": false
      },
      {
        "text": "Дополнительная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 368,
    "question": "EEPROM (ЭСППУ) это:",
    "answers": [
      {
        "text": "Электрически стираемое ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Динамическое ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Ультрафиолетовое ПЗУ",
        "isCorrect": false
      },
      {
        "text": "Маскируемое ПЗУ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 369,
    "question": "EPROM (СППЗУ) это:",
    "answers": [
      {
        "text": "Стираемое программируемое ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Статическое ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Электронное ПЗУ",
        "isCorrect": false
      },
      {
        "text": "Постоянная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 370,
    "question": "PROM (ППЗУ) это:",
    "answers": [
      {
        "text": "Программируемое ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Портативное ПЗУ",
        "isCorrect": false
      },
      {
        "text": "Перезаписываемое ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Прикладное ЗУ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 371,
    "question": "ROM (ПЗУ) расшифровывается как:",
    "answers": [
      {
        "text": "Постоянное запоминающее устройство",
        "isCorrect": true
      },
      {
        "text": "Оперативное запоминающее устройство",
        "isCorrect": false
      },
      {
        "text": "Регистровое устройство",
        "isCorrect": false
      },
      {
        "text": "Внешнее хранилище",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 372,
    "question": "Основой устройства управления является:",
    "answers": [
      {
        "text": "Генератор тактовых импульсов",
        "isCorrect": true
      },
      {
        "text": "Арифметический сумматор",
        "isCorrect": false
      },
      {
        "text": "Видеоконтроллер",
        "isCorrect": false
      },
      {
        "text": "Регистр данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 373,
    "question": "В основе автоматизации вычислительного процесса ЭВМ лежит принцип:",
    "answers": [
      {
        "text": "Программного управления",
        "isCorrect": true
      },
      {
        "text": "Двоичного кодирования",
        "isCorrect": false
      },
      {
        "text": "Открытой архитектуры",
        "isCorrect": false
      },
      {
        "text": "Модульности",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 374,
    "question": "Необходимым атрибутом микропроцессорных схем являются:",
    "answers": [
      {
        "text": "Внутренние регистры",
        "isCorrect": true
      },
      {
        "text": "Внешние дисководы",
        "isCorrect": false
      },
      {
        "text": "Звуковые платы",
        "isCorrect": false
      },
      {
        "text": "Световые индикаторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 375,
    "question": "Тактовая частота обычно вырабатывается в:",
    "answers": [
      {
        "text": "Кварцевом резонаторе",
        "isCorrect": true
      },
      {
        "text": "Блоке питания",
        "isCorrect": false
      },
      {
        "text": "Жестком диске",
        "isCorrect": false
      },
      {
        "text": "Модуле ОЗУ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 376,
    "question": "Блок-схема ЦУУ состоит из:",
    "answers": [
      {
        "text": "Регистров и дешифраторов",
        "isCorrect": true
      },
      {
        "text": "Монитора и клавиатуры",
        "isCorrect": false
      },
      {
        "text": "Накопителей информации",
        "isCorrect": false
      },
      {
        "text": "Шины питания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 377,
    "question": "В состав блока для формирования исполнительных адресов включаются:",
    "answers": [
      {
        "text": "Индексные регистры",
        "isCorrect": true
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Счётчик циклов",
        "isCorrect": false
      },
      {
        "text": "Видеопамять",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 378,
    "question": "Что такое MISC?",
    "answers": [
      {
        "text": "Компьютер с минимальным набором",
        "isCorrect": true
      },
      {
        "text": "Многопроцессорная система",
        "isCorrect": false
      },
      {
        "text": "Интерфейс управления памятью",
        "isCorrect": false
      },
      {
        "text": "Магистраль передачи данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 379,
    "question": "Что такое VLIW?",
    "answers": [
      {
        "text": "Длинная машинная команда",
        "isCorrect": true
      },
      {
        "text": "Виртуальный логический интерфейс",
        "isCorrect": false
      },
      {
        "text": "Векторный графический ускоритель",
        "isCorrect": false
      },
      {
        "text": "Скоростная шина ввода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 380,
    "question": "Что такое RISC?",
    "answers": [
      {
        "text": "Сокращенный набор команд",
        "isCorrect": true
      },
      {
        "text": "Реальный режим вычислений",
        "isCorrect": false
      },
      {
        "text": "Расширенный системный контроллер",
        "isCorrect": false
      },
      {
        "text": "Быстрая шина обмена",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 381,
    "question": "Что такое CISC?",
    "answers": [
      {
        "text": "Полный набор команд",
        "isCorrect": true
      },
      {
        "text": "Сокращенный набор команд",
        "isCorrect": false
      },
      {
        "text": "Параллельная архитектура вычислений",
        "isCorrect": false
      },
      {
        "text": "Шина передачи данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 382,
    "question": "Какая тактовая частота у микропроцессора Pentium 4 Willamette?",
    "answers": [
      {
        "text": "От 1.4 до 2.0 ГГц",
        "isCorrect": true
      },
      {
        "text": "Около 800 МГц",
        "isCorrect": false
      },
      {
        "text": "Свыше 3.2 ГГц",
        "isCorrect": false
      },
      {
        "text": "400 - 533 МГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 383,
    "question": "Как не обозначаются универсальные регистры?",
    "answers": [
      {
        "text": "IP, SP, BP",
        "isCorrect": true
      },
      {
        "text": "AX, BX, CX",
        "isCorrect": false
      },
      {
        "text": "EAX, EBX, ECX",
        "isCorrect": false
      },
      {
        "text": "R0, R1, R2",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 384,
    "question": "Как обозначаются регистры флагов?",
    "answers": [
      {
        "text": "FLAGS или EFLAGS",
        "isCorrect": true
      },
      {
        "text": "STATUS или CONTROL",
        "isCorrect": false
      },
      {
        "text": "INDEX или POINTER",
        "isCorrect": false
      },
      {
        "text": "SEGMENT REGISTERS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 385,
    "question": "Каких регистров не существует?",
    "answers": [
      {
        "text": "Регистры внешней памяти",
        "isCorrect": true
      },
      {
        "text": "Регистры общего назначения",
        "isCorrect": false
      },
      {
        "text": "Сегментные регистры",
        "isCorrect": false
      },
      {
        "text": "Управляющие регистры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 386,
    "question": "С какой информацией выполняет действия АЛУ?",
    "answers": [
      {
        "text": "Двоичные коды данных",
        "isCorrect": true
      },
      {
        "text": "Текстовые символы",
        "isCorrect": false
      },
      {
        "text": "Физические адреса диска",
        "isCorrect": false
      },
      {
        "text": "Аналоговые сигналы напряжения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 387,
    "question": "Что принимает команды и преобразует их в сигналы управления?",
    "answers": [
      {
        "text": "Дешифратор команд",
        "isCorrect": true
      },
      {
        "text": "Мультиплексор шины",
        "isCorrect": false
      },
      {
        "text": "Счетчик команд",
        "isCorrect": false
      },
      {
        "text": "Арифметический сумматор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 388,
    "question": "Какой регистр может только получать информацию с шин?",
    "answers": [
      {
        "text": "Регистр команд",
        "isCorrect": true
      },
      {
        "text": "Аккумулятор",
        "isCorrect": false
      },
      {
        "text": "Индексный регистр",
        "isCorrect": false
      },
      {
        "text": "Регистр базы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 389,
    "question": "Какую разрядность имеет первый регистр (в архитектуре 8086)?",
    "answers": [
      {
        "text": "16 бит",
        "isCorrect": true
      },
      {
        "text": "8 бит",
        "isCorrect": false
      },
      {
        "text": "32 бита",
        "isCorrect": false
      },
      {
        "text": "64 бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 390,
    "question": "Что хранит в своих ячейках ПЗУ?",
    "answers": [
      {
        "text": "Микропрограммы и BIOS",
        "isCorrect": true
      },
      {
        "text": "Пользовательские документы",
        "isCorrect": false
      },
      {
        "text": "Кэш-данные процессора",
        "isCorrect": false
      },
      {
        "text": "Временные результаты вычислений",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 391,
    "question": "Где находится узел формирования адреса?",
    "answers": [
      {
        "text": "В блоке интерфейса",
        "isCorrect": true
      },
      {
        "text": "В оперативной памяти",
        "isCorrect": false
      },
      {
        "text": "На системной шине",
        "isCorrect": false
      },
      {
        "text": "В устройстве ввода-вывода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 392,
    "question": "Что такое АЛУ?",
    "answers": [
      {
        "text": "Арифметико-логическое устройство",
        "isCorrect": true
      },
      {
        "text": "Автоматический логический узел",
        "isCorrect": false
      },
      {
        "text": "Адаптивный линейный ускоритель",
        "isCorrect": false
      },
      {
        "text": "Архивный локальный указатель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 393,
    "question": "Когда были разработаны микропроцессоры RISC?",
    "answers": [
      {
        "text": "В начале 1980-х",
        "isCorrect": true
      },
      {
        "text": "В конце 1990-х",
        "isCorrect": false
      },
      {
        "text": "В середине 1960-х",
        "isCorrect": false
      },
      {
        "text": "В 2005 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 394,
    "question": "Когда появилась архитектура CISC?",
    "answers": [
      {
        "text": "В начале 1970-х",
        "isCorrect": true
      },
      {
        "text": "В середине 1950-х",
        "isCorrect": false
      },
      {
        "text": "В конце 1980-х",
        "isCorrect": false
      },
      {
        "text": "После 2000 года",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 395,
    "question": "Имеют ли программисты доступ к внутренним VLIW-командам?",
    "answers": [
      {
        "text": "Нет, доступ закрыт",
        "isCorrect": true
      },
      {
        "text": "Да, через ассемблер",
        "isCorrect": false
      },
      {
        "text": "Только в режиме ядра",
        "isCorrect": false
      },
      {
        "text": "Да, через BIOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 396,
    "question": "Сколько тактов затрачивает CISC на простую команду?",
    "answers": [
      {
        "text": "Несколько тактов",
        "isCorrect": true
      },
      {
        "text": "Ровно один такт",
        "isCorrect": false
      },
      {
        "text": "Менее одного такта",
        "isCorrect": false
      },
      {
        "text": "Более ста тактов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 397,
    "question": "Сколько тактов затрачивает RISC на простую команду?",
    "answers": [
      {
        "text": "Один такт",
        "isCorrect": true
      },
      {
        "text": "Четыре такта",
        "isCorrect": false
      },
      {
        "text": "Десять тактов",
        "isCorrect": false
      },
      {
        "text": "Переменное количество",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 398,
    "question": "В чём измеряют производительность микропроцессора?",
    "answers": [
      {
        "text": "В MIPS или FLOPS",
        "isCorrect": true
      },
      {
        "text": "В вольтах",
        "isCorrect": false
      },
      {
        "text": "В битах в секунду",
        "isCorrect": false
      },
      {
        "text": "В мегабайтах",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 399,
    "question": "Сколько всего может быть портов ввода-вывода у микропроцессора?",
    "answers": [
      {
        "text": "65536 портов",
        "isCorrect": true
      },
      {
        "text": "256 портов",
        "isCorrect": false
      },
      {
        "text": "1024 порта",
        "isCorrect": false
      },
      {
        "text": "До бесконечности",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 400,
    "question": "Чего нет в интерфейсной части микропроцессора?",
    "answers": [
      {
        "text": "Схемы АЛУ",
        "isCorrect": true
      },
      {
        "text": "Буферных регистров",
        "isCorrect": false
      },
      {
        "text": "Узлов управления шиной",
        "isCorrect": false
      },
      {
        "text": "Генератора адресов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 401,
    "question": "Для чего предназначена интерфейсная часть микропроцессора?",
    "answers": [
      {
        "text": "Связь с системной шиной",
        "isCorrect": true
      },
      {
        "text": "Дешифрация сложных команд",
        "isCorrect": false
      },
      {
        "text": "Выполнение арифметических операций",
        "isCorrect": false
      },
      {
        "text": "Хранение временных данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 402,
    "question": "На сколько функциональных частей можно разделить микропроцессор?",
    "answers": [
      {
        "text": "На четыре",
        "isCorrect": false
      },
      {
        "text": "На две",
        "isCorrect": true
      },
      {
        "text": "На пять уровней",
        "isCorrect": false
      },
      {
        "text": "Три части",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 403,
    "question": "Что не входит в состав микропроцессора Pentium?",
    "answers": [
      {
        "text": "Кэш-память L3",
        "isCorrect": true
      },
      {
        "text": "Блок предсказания переходов",
        "isCorrect": false
      },
      {
        "text": "Конвейер команд",
        "isCorrect": false
      },
      {
        "text": "Математический сопроцессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 404,
    "question": "Когда был выпущен процессор Intel Celeron Mendocino?",
    "answers": [
      {
        "text": "В 1998 году",
        "isCorrect": true
      },
      {
        "text": "Летом 1996",
        "isCorrect": false
      },
      {
        "text": "В начале 1997 года",
        "isCorrect": false
      },
      {
        "text": "Осенью 1999",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 405,
    "question": "Когда был выпущен процессор Intel Pentium 4 Willamette?",
    "answers": [
      {
        "text": "В 1999 году",
        "isCorrect": false
      },
      {
        "text": "В 2001 году",
        "isCorrect": false
      },
      {
        "text": "В 2000 году",
        "isCorrect": true
      },
      {
        "text": "Зимой 2002",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 406,
    "question": "Когда был выпущен процессор Intel Pentium III Coppermine?",
    "answers": [
      {
        "text": "В 1998 году",
        "isCorrect": false
      },
      {
        "text": "В 1999 году",
        "isCorrect": true
      },
      {
        "text": "Весной 2000",
        "isCorrect": false
      },
      {
        "text": "В 2001 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 407,
    "question": "Когда был выпущен процессор Intel Pentium III Xeon?",
    "answers": [
      {
        "text": "В 1999 году",
        "isCorrect": true
      },
      {
        "text": "В 1997 году",
        "isCorrect": false
      },
      {
        "text": "Осенью 1998",
        "isCorrect": false
      },
      {
        "text": "В 2000 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 408,
    "question": "Какая тактовая частота у процессора Intel Pentium III Xeon?",
    "answers": [
      {
        "text": "100–200 МГц",
        "isCorrect": false
      },
      {
        "text": "500–1000 МГц",
        "isCorrect": true
      },
      {
        "text": "2–3 ГГц",
        "isCorrect": false
      },
      {
        "text": "66–133 МГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 409,
    "question": "Какая тактовая частота у процессора Intel Pentium MMX?",
    "answers": [
      {
        "text": "60–100 МГц",
        "isCorrect": false
      },
      {
        "text": "300–450 МГц",
        "isCorrect": false
      },
      {
        "text": "166–233 МГц",
        "isCorrect": true
      },
      {
        "text": "10–25 МГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 410,
    "question": "Какая тактовая частота у процессора Intel Pentium Pro?",
    "answers": [
      {
        "text": "150–200 МГц",
        "isCorrect": true
      },
      {
        "text": "33–66 МГц",
        "isCorrect": false
      },
      {
        "text": "400–600 МГц",
        "isCorrect": false
      },
      {
        "text": "800–1000 МГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 411,
    "question": "Какая тактовая частота у процессора Intel-80486?",
    "answers": [
      {
        "text": "25–100 МГц",
        "isCorrect": true
      },
      {
        "text": "5–12 МГц",
        "isCorrect": false
      },
      {
        "text": "150–300 МГц",
        "isCorrect": false
      },
      {
        "text": "1–2 ГГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 412,
    "question": "Какая разрядность у процессора Intel-8088?",
    "answers": [
      {
        "text": "4 бита",
        "isCorrect": false
      },
      {
        "text": "16 бит",
        "isCorrect": false
      },
      {
        "text": "8 бит",
        "isCorrect": true
      },
      {
        "text": "32 бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 413,
    "question": "Какая разрядность у процессора Intel-8086?",
    "answers": [
      {
        "text": "8 бит",
        "isCorrect": false
      },
      {
        "text": "32 бита",
        "isCorrect": false
      },
      {
        "text": "16 бит",
        "isCorrect": true
      },
      {
        "text": "64 бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 414,
    "question": "Какая разрядность у процессора Intel-8080?",
    "answers": [
      {
        "text": "8 бит",
        "isCorrect": true
      },
      {
        "text": "4 бита",
        "isCorrect": false
      },
      {
        "text": "16 бит",
        "isCorrect": false
      },
      {
        "text": "24 бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 415,
    "question": "Какая разрядность у процессора Intel-4004?",
    "answers": [
      {
        "text": "8 бит",
        "isCorrect": false
      },
      {
        "text": "4 бита",
        "isCorrect": true
      },
      {
        "text": "1 бит",
        "isCorrect": false
      },
      {
        "text": "16 бит",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 416,
    "question": "Как расшифровывается VLIW?",
    "answers": [
      {
        "text": "Very Long Instruction Word",
        "isCorrect": true
      },
      {
        "text": "Virtual Link Input Wave",
        "isCorrect": false
      },
      {
        "text": "Vector Logic Instruction Way",
        "isCorrect": false
      },
      {
        "text": "Variable Level Internal Wire",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 417,
    "question": "Как расшифровывается RISC?",
    "answers": [
      {
        "text": "Rapid Instruction Set Core",
        "isCorrect": false
      },
      {
        "text": "Real Integrated System Code",
        "isCorrect": false
      },
      {
        "text": "Reduced Instruction Set Computer",
        "isCorrect": true
      },
      {
        "text": "Remote Input System Controller",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 418,
    "question": "Как расшифровывается CISC?",
    "answers": [
      {
        "text": "Complex Instruction Set Computer",
        "isCorrect": true
      },
      {
        "text": "Central Input System Code",
        "isCorrect": false
      },
      {
        "text": "Core Integrated System Command",
        "isCorrect": false
      },
      {
        "text": "Combined Instruction Set Core",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 419,
    "question": "Кем был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "Корпорацией IBM",
        "isCorrect": false
      },
      {
        "text": "Фирмой Intel",
        "isCorrect": true
      },
      {
        "text": "Компанией Motorola",
        "isCorrect": false
      },
      {
        "text": "Бредом AMD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 420,
    "question": "Когда был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "В 1971 году",
        "isCorrect": true
      },
      {
        "text": "В 1969 году",
        "isCorrect": false
      },
      {
        "text": "В 1975 году",
        "isCorrect": false
      },
      {
        "text": "В 1981 году",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 421,
    "question": "На каком микропроцессоре впервые появился второй уровень кэш-памяти?",
    "answers": [
      {
        "text": "Intel Pentium Pro",
        "isCorrect": true
      },
      {
        "text": "Intel 8086",
        "isCorrect": false
      },
      {
        "text": "Intel 80386",
        "isCorrect": false
      },
      {
        "text": "Intel Pentium MMX",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 422,
    "question": "Сколько уровней имеет кэш-память?",
    "answers": [
      {
        "text": "Только один",
        "isCorrect": false
      },
      {
        "text": "Обычно до трех",
        "isCorrect": true
      },
      {
        "text": "Десять фиксированных",
        "isCorrect": false
      },
      {
        "text": "Всегда ровно пять",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 423,
    "question": "Что определяет рабочая тактовая частота микропроцессора?",
    "answers": [
      {
        "text": "Емкость жесткого диска",
        "isCorrect": false
      },
      {
        "text": "Скорость выполнения команд",
        "isCorrect": true
      },
      {
        "text": "Разрешение монитора",
        "isCorrect": false
      },
      {
        "text": "Объем видеопамяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 424,
    "question": "Что определяет разрядность шины адреса микропроцессора?",
    "answers": [
      {
        "text": "Скорость интернета",
        "isCorrect": false
      },
      {
        "text": "Количество ядер",
        "isCorrect": false
      },
      {
        "text": "Максимальный объем памяти",
        "isCorrect": true
      },
      {
        "text": "Частоту видеочипа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 425,
    "question": "Что определяет разрядность шины данных микропроцессора?",
    "answers": [
      {
        "text": "Количество бит за такт",
        "isCorrect": true
      },
      {
        "text": "Размер системного блока",
        "isCorrect": false
      },
      {
        "text": "Скорость вращения кулера",
        "isCorrect": false
      },
      {
        "text": "Напряжение процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 426,
    "question": "Что относится к основным параметрам микропроцессора?",
    "answers": [
      {
        "text": "Тактовая частота и разрядность",
        "isCorrect": true
      },
      {
        "text": "Материал корпуса",
        "isCorrect": false
      },
      {
        "text": "Длина кабеля питания",
        "isCorrect": false
      },
      {
        "text": "Количество клавиш",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 427,
    "question": "Какую из функций не выполняет микропроцессор?",
    "answers": [
      {
        "text": "Обработка данных",
        "isCorrect": false
      },
      {
        "text": "Управление памятью",
        "isCorrect": false
      },
      {
        "text": "Длительное хранение файлов",
        "isCorrect": true
      },
      {
        "text": "Арифметические расчеты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 428,
    "question": "Какую из функций выполняет микропроцессор?",
    "answers": [
      {
        "text": "Управление работой компьютера",
        "isCorrect": true
      },
      {
        "text": "Очистка монитора",
        "isCorrect": false
      },
      {
        "text": "Печать на бумаге",
        "isCorrect": false
      },
      {
        "text": "Стабилизация тока",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 429,
    "question": "Какая из аббревиатур обозначает микропроцессор?",
    "answers": [
      {
        "text": "BIOS",
        "isCorrect": false
      },
      {
        "text": "HDD",
        "isCorrect": false
      },
      {
        "text": "RAM",
        "isCorrect": false
      },
      {
        "text": "CPU",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 430,
    "question": "Как расшифровывается DRAM ?",
    "answers": [
      {
        "text": "Data Real Access Mode",
        "isCorrect": false
      },
      {
        "text": "Dynamic Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Digital Read Array Memory",
        "isCorrect": false
      },
      {
        "text": "Direct RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 431,
    "question": "Как расшифровывается аббревиатура SRAM?",
    "answers": [
      {
        "text": "Static Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "System Read Access Module",
        "isCorrect": false
      },
      {
        "text": "Single Random Array Memory",
        "isCorrect": false
      },
      {
        "text": "Super RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 432,
    "question": "К внешним устройствам не относится:",
    "answers": [
      {
        "text": "Принтер",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": false
      },
      {
        "text": "Микропроцессор",
        "isCorrect": true
      },
      {
        "text": "Модем",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 433,
    "question": "Какое сокращение имеют запоминающие устройства динамического типа:",
    "answers": [
      {
        "text": "SRAM",
        "isCorrect": false
      },
      {
        "text": "DRAM",
        "isCorrect": true
      },
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "HDD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 434,
    "question": "Какое сокращение имеют запоминающие устройства статического типа:",
    "answers": [
      {
        "text": "PROM",
        "isCorrect": false
      },
      {
        "text": "DRAM",
        "isCorrect": false
      },
      {
        "text": "SRAM",
        "isCorrect": true
      },
      {
        "text": "DDR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 435,
    "question": "Набор микросхем, предназначенных для временного хранения данных при включенном питании компьютера, называется...",
    "answers": [
      {
        "text": "Жесткий диск",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": true
      },
      {
        "text": "Блок питания",
        "isCorrect": false
      },
      {
        "text": "Сетевая карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 436,
    "question": "Микросхема, предназначенная для длительного хранения данных, при выключенном питании компьютера, называется...",
    "answers": [
      {
        "text": "ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      },
      {
        "text": "ПЗУ",
        "isCorrect": true
      },
      {
        "text": "Регистр",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 437,
    "question": "В одном байте...",
    "answers": [
      {
        "text": "Восемь бит",
        "isCorrect": true
      },
      {
        "text": "1024 бита",
        "isCorrect": false
      },
      {
        "text": "Шестнадцать бит",
        "isCorrect": false
      },
      {
        "text": "Два бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 438,
    "question": "В одном килобайте...",
    "answers": [
      {
        "text": "1000 байт",
        "isCorrect": false
      },
      {
        "text": "1024 байта",
        "isCorrect": true
      },
      {
        "text": "8000 бит",
        "isCorrect": false
      },
      {
        "text": "1024 мегабайта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 439,
    "question": "Как расшифровывается аббревиатура ОЗУ?",
    "answers": [
      {
        "text": "Общее защищенное управление",
        "isCorrect": false
      },
      {
        "text": "Оперативное запоминающее устройство",
        "isCorrect": true
      },
      {
        "text": "Основной звуковой узел",
        "isCorrect": false
      },
      {
        "text": "Оптическое записывающее устройство",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 440,
    "question": "В одном мегабайте...",
    "answers": [
      {
        "text": "1024 килобайта",
        "isCorrect": true
      },
      {
        "text": "1000 байт",
        "isCorrect": false
      },
      {
        "text": "1024 гигабайта",
        "isCorrect": false
      },
      {
        "text": "Миллион бит",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 441,
    "question": "Как расшифровывается аббревиатура RAM?",
    "answers": [
      {
        "text": "Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Read Active Module",
        "isCorrect": false
      },
      {
        "text": "Rapid Area Memory",
        "isCorrect": false
      },
      {
        "text": "Readily Available Mainframe",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 442,
    "question": "Какое сокращенное название имеет постоянная память?",
    "answers": [
      {
        "text": "HDD",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": true
      },
      {
        "text": "RAM",
        "isCorrect": false
      },
      {
        "text": "CPU",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 443,
    "question": "Какое сокращенное название имеет оперативная память?",
    "answers": [
      {
        "text": "RAM",
        "isCorrect": true
      },
      {
        "text": "BIOS",
        "isCorrect": false
      },
      {
        "text": "GPU",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 444,
    "question": "Постоянное запоминающее устройство - это...",
    "answers": [
      {
        "text": "Временный файловый буфер",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая память",
        "isCorrect": true
      },
      {
        "text": "Регистр процессора",
        "isCorrect": false
      },
      {
        "text": "Сменный оптический носитель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 445,
    "question": "Как иначе называется жёсткий диск?",
    "answers": [
      {
        "text": "Драм-картридж",
        "isCorrect": false
      },
      {
        "text": "Винчестер",
        "isCorrect": true
      },
      {
        "text": "Дискета",
        "isCorrect": false
      },
      {
        "text": "Плоттер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 446,
    "question": "Оперативная память - это...",
    "answers": [
      {
        "text": "Энергозависимое хранилище данных",
        "isCorrect": true
      },
      {
        "text": "Устройство долгосрочного архивирования",
        "isCorrect": false
      },
      {
        "text": "Контроллер системной шины",
        "isCorrect": false
      },
      {
        "text": "Постоянный программный модуль",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 447,
    "question": "Жесткий диск - это...",
    "answers": [
      {
        "text": "Внутренний кэш процессора",
        "isCorrect": false
      },
      {
        "text": "Логический элемент управления",
        "isCorrect": false
      },
      {
        "text": "Устройство внешней памяти",
        "isCorrect": true
      },
      {
        "text": "Модуль обработки прерываний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 448,
    "question": "В чем измеряется емкость памяти?",
    "answers": [
      {
        "text": "В герцах",
        "isCorrect": false
      },
      {
        "text": "В байтах",
        "isCorrect": true
      },
      {
        "text": "В ваттах",
        "isCorrect": false
      },
      {
        "text": "В амперах",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 449,
    "question": "Какую емкость имеет диск 3,5''?",
    "answers": [
      {
        "text": "1,44 Мб",
        "isCorrect": true
      },
      {
        "text": "700 Кб",
        "isCorrect": false
      },
      {
        "text": "4,7 Гб",
        "isCorrect": false
      },
      {
        "text": "100 Мб",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 450,
    "question": "Почему флоппи диск имеет такое название?",
    "answers": [
      {
        "text": "Из-за гибкого магнитного диска",
        "isCorrect": true
      },
      {
        "text": "Благодаря высокой скорости вращения",
        "isCorrect": false
      },
      {
        "text": "Из-за специфического шума",
        "isCorrect": false
      },
      {
        "text": "По имени изобретателя",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 451,
    "question": "Кто изобрёл флэш-память?",
    "answers": [
      {
        "text": "Фудзи Масуока",
        "isCorrect": true
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      },
      {
        "text": "Стив Возняк",
        "isCorrect": false
      },
      {
        "text": "Гордон Мур",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 452,
    "question": "Какой элемент лежит в флэш-памяти типа NAND?",
    "answers": [
      {
        "text": "Транзистор с плавающим затвором",
        "isCorrect": true
      },
      {
        "text": "Магнитная микро-катушка",
        "isCorrect": false
      },
      {
        "text": "Оптический кристалл",
        "isCorrect": false
      },
      {
        "text": "Вакуумная лампа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 453,
    "question": "Какой элемент лежит в основе флэш-памяти типа NOR?",
    "answers": [
      {
        "text": "Ячейки с параллельным подключением",
        "isCorrect": true
      },
      {
        "text": "Последовательная цепочка битов",
        "isCorrect": false
      },
      {
        "text": "Индуктивный сердечник",
        "isCorrect": false
      },
      {
        "text": "Фоторезистивный слой",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 454,
    "question": "Буферная Память - это...",
    "answers": [
      {
        "text": "Временное хранилище при обмене",
        "isCorrect": true
      },
      {
        "text": "Постоянный архив документов",
        "isCorrect": false
      },
      {
        "text": "Защищенный раздел системы",
        "isCorrect": false
      },
      {
        "text": "Сектор загрузки BIOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 455,
    "question": "LIFO расшифровывается как...",
    "answers": [
      {
        "text": "Last In First Out",
        "isCorrect": true
      },
      {
        "text": "Long Internal File Order",
        "isCorrect": false
      },
      {
        "text": "Low Input Frequency Output",
        "isCorrect": false
      },
      {
        "text": "Level Integrity Format Option",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 456,
    "question": "Как расшифровывается FIFO?",
    "answers": [
      {
        "text": "Fast Input Fast Output",
        "isCorrect": false
      },
      {
        "text": "File Information Folder Object",
        "isCorrect": false
      },
      {
        "text": "First In First Out",
        "isCorrect": true
      },
      {
        "text": "Fixed Index For Output",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 457,
    "question": "Видеопамять - это...",
    "answers": [
      {
        "text": "Память для графических данных",
        "isCorrect": true
      },
      {
        "text": "Хранилище видеокассет",
        "isCorrect": false
      },
      {
        "text": "Кэш аудио-контроллера",
        "isCorrect": false
      },
      {
        "text": "Реестр системных прерываний",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 458,
    "question": "В каком году был анонсирован NAND - тип флешь памяти?",
    "answers": [
      {
        "text": "1987 год",
        "isCorrect": true
      },
      {
        "text": "1995 год",
        "isCorrect": false
      },
      {
        "text": "1972 год",
        "isCorrect": false
      },
      {
        "text": "2001 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 459,
    "question": "Какого типа был первый коммерческий флешь-чип?",
    "answers": [
      {
        "text": "NOR",
        "isCorrect": true
      },
      {
        "text": "NAND",
        "isCorrect": false
      },
      {
        "text": "DRAM",
        "isCorrect": false
      },
      {
        "text": "SRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 460,
    "question": "Какая фирма выпустила первый коммерческий флешь-чип?",
    "answers": [
      {
        "text": "Intel",
        "isCorrect": true
      },
      {
        "text": "Toshiba",
        "isCorrect": false
      },
      {
        "text": "Samsung",
        "isCorrect": false
      },
      {
        "text": "Apple",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 461,
    "question": "В каком году была выпущена первая коммерческая флэш-память (флэш-чип)?",
    "answers": [
      {
        "text": "1987 год",
        "isCorrect": true
      },
      {
        "text": "1981 год",
        "isCorrect": false
      },
      {
        "text": "1992 год",
        "isCorrect": false
      },
      {
        "text": "1984 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 462,
    "question": "В каком году была изобретена флэш-память?",
    "answers": [
      {
        "text": "1985 год",
        "isCorrect": false
      },
      {
        "text": "1980 год",
        "isCorrect": true
      },
      {
        "text": "1978 год",
        "isCorrect": false
      },
      {
        "text": "1982 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 463,
    "question": "Flash-Memory - это...",
    "answers": [
      {
        "text": "Энергозависимый кэш процессора",
        "isCorrect": false
      },
      {
        "text": "Оптический носитель данных",
        "isCorrect": false
      },
      {
        "text": "Тип магнитной ленты",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая полупроводниковая память",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 464,
    "question": "FPM DRAM - это...",
    "answers": [
      {
        "text": "Память с быстрым страничным режимом",
        "isCorrect": true
      },
      {
        "text": "Полностью программируемый модуль",
        "isCorrect": false
      },
      {
        "text": "Протокол передачи файлов",
        "isCorrect": false
      },
      {
        "text": "Тип сегментированной видеопамяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 465,
    "question": "DDR SDRAM - это...",
    "answers": [
      {
        "text": "Динамическая двухканальная память",
        "isCorrect": false
      },
      {
        "text": "Память с удвоенной скоростью передачи",
        "isCorrect": true
      },
      {
        "text": "Цифровая оперативная память",
        "isCorrect": false
      },
      {
        "text": "Прямой доступ к регистрам",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 466,
    "question": "К каким устройствам можно отнести принтер?",
    "answers": [
      {
        "text": "Устройства ввода",
        "isCorrect": false
      },
      {
        "text": "Устройства вывода",
        "isCorrect": true
      },
      {
        "text": "Системные контроллеры",
        "isCorrect": false
      },
      {
        "text": "Накопители информации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 467,
    "question": "К каким устройствам можно отнести клавиатуру, сканер?",
    "answers": [
      {
        "text": "Устройства ввода",
        "isCorrect": true
      },
      {
        "text": "Периферия вывода",
        "isCorrect": false
      },
      {
        "text": "Средства обработки",
        "isCorrect": false
      },
      {
        "text": "Внешняя память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 468,
    "question": "Что необходимо использовать для одновременного подключения нескольких устройств USB?",
    "answers": [
      {
        "text": "Сетевой мост",
        "isCorrect": false
      },
      {
        "text": "USB-концентратор (хаб)",
        "isCorrect": true
      },
      {
        "text": "Маршрутизатор портов",
        "isCorrect": false
      },
      {
        "text": "Параллельный адаптер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 469,
    "question": "Сколько линий используется в параллельных портах для одновременной передачи байта информации?",
    "answers": [
      {
        "text": "16 линий",
        "isCorrect": false
      },
      {
        "text": "4 линии",
        "isCorrect": false
      },
      {
        "text": "8 линий",
        "isCorrect": true
      },
      {
        "text": "1 линия",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 470,
    "question": "В первых компьютерах использовались ...",
    "answers": [
      {
        "text": "Электронные вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Полупроводниковые транзисторы",
        "isCorrect": false
      },
      {
        "text": "Интегральные микросхемы",
        "isCorrect": false
      },
      {
        "text": "Магнитные домены",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 471,
    "question": "В каком году компания Hewlett Packard представила компьютер для бизнеса HP 2115?",
    "answers": [
      {
        "text": "1972 год",
        "isCorrect": false
      },
      {
        "text": "1966 год",
        "isCorrect": true
      },
      {
        "text": "1961 год",
        "isCorrect": false
      },
      {
        "text": "1975 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 472,
    "question": "Какой первый коммерческий модем разработала компания Bell Labs?",
    "answers": [
      {
        "text": "Dataphone",
        "isCorrect": true
      },
      {
        "text": "Courier 1200",
        "isCorrect": false
      },
      {
        "text": "Smartmodem 300",
        "isCorrect": false
      },
      {
        "text": "Bell 212A",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 473,
    "question": "Кто описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": false
      },
      {
        "text": "Алан Тюринг",
        "isCorrect": false
      },
      {
        "text": "Блез Паскаль",
        "isCorrect": true
      },
      {
        "text": "Джон фон Нейман",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 474,
    "question": "В каком году создана электронно-вычислительная машина ENIAC?",
    "answers": [
      {
        "text": "1945 год",
        "isCorrect": true
      },
      {
        "text": "1939 год",
        "isCorrect": false
      },
      {
        "text": "1951 год",
        "isCorrect": false
      },
      {
        "text": "1948 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 475,
    "question": "Кто создал интегральную схему, расположив соединительные каналы непосредственно на кремниевой пластине?",
    "answers": [
      {
        "text": "Роберт Нойс",
        "isCorrect": true
      },
      {
        "text": "Джек Килби",
        "isCorrect": false
      },
      {
        "text": "Гордон Мур",
        "isCorrect": false
      },
      {
        "text": "Уильям Шокли",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 476,
    "question": "Как называется максимальное количество ячеек основной памяти, которое может быть непосредственно адресовано микропроцессором?",
    "answers": [
      {
        "text": "Разрядность шины данных",
        "isCorrect": false
      },
      {
        "text": "Адресное пространство",
        "isCorrect": true
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      },
      {
        "text": "Сегментация памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 477,
    "question": "Компьютеры 1-го поколения используют ...",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Транзисторные ключи",
        "isCorrect": false
      },
      {
        "text": "Магнитные сердечники",
        "isCorrect": false
      },
      {
        "text": "Релейные схемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 478,
    "question": "Компьютеры 2-го поколения используют ...",
    "answers": [
      {
        "text": "БИС и СБИС",
        "isCorrect": false
      },
      {
        "text": "Вакуумные триоды",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": true
      },
      {
        "text": "Интегральные микросхемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 479,
    "question": "Компьютеры 3-го поколения используют ...",
    "answers": [
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Магнитную ленту",
        "isCorrect": false
      },
      {
        "text": "Дискретные транзисторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 480,
    "question": "Компьютеры 4-го поколения используют ...",
    "answers": [
      {
        "text": "Микропроцессоры",
        "isCorrect": true
      },
      {
        "text": "Транзисторные сборки",
        "isCorrect": false
      },
      {
        "text": "Оптические чипы",
        "isCorrect": false
      },
      {
        "text": "Вакуумные индикаторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 481,
    "question": "Мощные многопроцессорные вычислительные машины с быстродействием сотни миллионов - десятки миллиардов операций в секунду относятся к ...",
    "answers": [
      {
        "text": "суперкомпьютерам",
        "isCorrect": true
      },
      {
        "text": "серверным станциям",
        "isCorrect": false
      },
      {
        "text": "мейнкреймам",
        "isCorrect": false
      },
      {
        "text": "персональным ЭВМ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 482,
    "question": "Исторически первыми появились ...",
    "answers": [
      {
        "text": "интегральные схемы",
        "isCorrect": false
      },
      {
        "text": "микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "транзисторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 483,
    "question": "Процессоры семейства Intel Pentium 4 - это",
    "answers": [
      {
        "text": "многоядерные чипы",
        "isCorrect": false
      },
      {
        "text": "одноядерные процессоры",
        "isCorrect": true
      },
      {
        "text": "графические ускорители",
        "isCorrect": false
      },
      {
        "text": "квантовые вычислители",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 484,
    "question": "Intel Pentium D - это",
    "answers": [
      {
        "text": "двухъядерные процессоры",
        "isCorrect": true
      },
      {
        "text": "мобильные чипсеты",
        "isCorrect": false
      },
      {
        "text": "серверные модули",
        "isCorrect": false
      },
      {
        "text": "восьмиядерные системы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 485,
    "question": "AMD Athlon 64 X2 Dual-Core - это",
    "answers": [
      {
        "text": "одноядерный процессор",
        "isCorrect": false
      },
      {
        "text": "видеокарта",
        "isCorrect": false
      },
      {
        "text": "двухъядерный процессор",
        "isCorrect": true
      },
      {
        "text": "оперативная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 486,
    "question": "2-ое поколение компьютеров создано на основе ...",
    "answers": [
      {
        "text": "полупроводниковых транзисторов",
        "isCorrect": true
      },
      {
        "text": "вакуумных ламп",
        "isCorrect": false
      },
      {
        "text": "микросхем",
        "isCorrect": false
      },
      {
        "text": "биочипов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 487,
    "question": "Какое устройство реализует сопряжение и связь с другими устройствами ПК?",
    "answers": [
      {
        "text": "блок питания",
        "isCorrect": false
      },
      {
        "text": "интерфейсный блок",
        "isCorrect": true
      },
      {
        "text": "жесткий диск",
        "isCorrect": false
      },
      {
        "text": "монитор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 488,
    "question": "Как называется временный останов выполнения одной программы в целях оперативного выполнения другой?",
    "answers": [
      {
        "text": "перезагрузка",
        "isCorrect": false
      },
      {
        "text": "прерывание",
        "isCorrect": true
      },
      {
        "text": "цикл",
        "isCorrect": false
      },
      {
        "text": "блокировка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 489,
    "question": "Что обслуживает процедуры прерывания и определяет уровень их приоритета?",
    "answers": [
      {
        "text": "контроллер прерываний",
        "isCorrect": true
      },
      {
        "text": "видеоадаптер",
        "isCorrect": false
      },
      {
        "text": "сетевая карта",
        "isCorrect": false
      },
      {
        "text": "математический копроцессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 490,
    "question": "Что определяет количество элементарных операций выполняемые процессором за единицу времени?",
    "answers": [
      {
        "text": "объем кэша",
        "isCorrect": false
      },
      {
        "text": "разрядность",
        "isCorrect": false
      },
      {
        "text": "тактовая частота",
        "isCorrect": true
      },
      {
        "text": "шина адреса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 491,
    "question": "На какие типы можно разделить всю память с произвольным доступом?",
    "answers": [
      {
        "text": "GRAM и CRAM",
        "isCorrect": false
      },
      {
        "text": "DRAM и SRAM",
        "isCorrect": true
      },
      {
        "text": "FRAM и GRAM",
        "isCorrect": false
      },
      {
        "text": "SRAM и CRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 492,
    "question": "В каком году был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "1945 год",
        "isCorrect": false
      },
      {
        "text": "1971 год",
        "isCorrect": true
      },
      {
        "text": "1985 год",
        "isCorrect": false
      },
      {
        "text": "1991 год",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 493,
    "question": "Как называется устройство для автоматического считывания текстов и графики с бумажных носителей?",
    "answers": [
      {
        "text": "принтер",
        "isCorrect": false
      },
      {
        "text": "сканер",
        "isCorrect": true
      },
      {
        "text": "модем",
        "isCorrect": false
      },
      {
        "text": "плоттер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 494,
    "question": "Как называется устройство для ручного ввода графики путем перемещения специального указателя?",
    "answers": [
      {
        "text": "дигитайзер",
        "isCorrect": true
      },
      {
        "text": "клавиатура",
        "isCorrect": false
      },
      {
        "text": "джойстик",
        "isCorrect": false
      },
      {
        "text": "стример",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 495,
    "question": "Устройство для ввода графики на экран путем управления движением курсора?",
    "answers": [
      {
        "text": "микрофон",
        "isCorrect": false
      },
      {
        "text": "мышь",
        "isCorrect": true
      },
      {
        "text": "веб-камера",
        "isCorrect": false
      },
      {
        "text": "дисковод",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 496,
    "question": "Устройство для ввода отдельных элементов изображения или команд с экрана?",
    "answers": [
      {
        "text": "световое перо",
        "isCorrect": true
      },
      {
        "text": "акустическая система",
        "isCorrect": false
      },
      {
        "text": "жесткий диск",
        "isCorrect": false
      },
      {
        "text": "процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 497,
    "question": "Как называются печатающие устройства для регистрации информации на бумажный носитель?",
    "answers": [
      {
        "text": "сканеры",
        "isCorrect": false
      },
      {
        "text": "принтеры",
        "isCorrect": true
      },
      {
        "text": "мониторы",
        "isCorrect": false
      },
      {
        "text": "колонки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 498,
    "question": "Как называются устройства для вывода графической информации из ПК на бумажный носитель?",
    "answers": [
      {
        "text": "плоттеры",
        "isCorrect": true
      },
      {
        "text": "трекболы",
        "isCorrect": false
      },
      {
        "text": "наушники",
        "isCorrect": false
      },
      {
        "text": "модемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 499,
    "question": "Какая плата ускоряет ввод-вывод и реализует режим прямого доступа к памяти?",
    "answers": [
      {
        "text": "звуковая карта",
        "isCorrect": false
      },
      {
        "text": "контроллер ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "модуль ОЗУ",
        "isCorrect": false
      },
      {
        "text": "сетевой адаптер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 500,
    "question": "Что показывает сколько бит данных процессор может обработать за один такт?",
    "answers": [
      {
        "text": "объем кэша",
        "isCorrect": false
      },
      {
        "text": "разрядность процессора",
        "isCorrect": true
      },
      {
        "text": "время отклика",
        "isCorrect": false
      },
      {
        "text": "частота шины",
        "isCorrect": false
      }
    ]
  }
];