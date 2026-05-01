const allQuestions = [
  {
    "id": 1,
    "question": "Что такое ЭВМ",
    "answers": [
      {
        "text": "Электронно-вычислительная машина, предназначенная для автоматической обработки информации.",
        "isCorrect": true
      },
      {
        "text": "Устройство для ручного счёта и вычислений.",
        "isCorrect": false
      },
      {
        "text": "Программа для создания текстовых документов.",
        "isCorrect": false
      },
      {
        "text": "Электрическое устройство для хранения данных без обработки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "question": "Для чего предназначено АЛУ?",
    "answers": [
      {
        "text": "Для управления процессами в компьютере.",
        "isCorrect": false
      },
      {
        "text": "Для выполнения арифметических и логических операций.",
        "isCorrect": true
      },
      {
        "text": "Для хранения программ и данных.",
        "isCorrect": false
      },
      {
        "text": "Для вывода информации на экран.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "question": "ЭВМ по принципу Фон Неймана состоит из:",
    "answers": [
      {
        "text": "Центрального процессора, памяти, устройств ввода/вывода.",
        "isCorrect": true
      },
      {
        "text": "Только процессора и накопителя данных.",
        "isCorrect": false
      },
      {
        "text": "Только памяти и клавиатуры.",
        "isCorrect": false
      },
      {
        "text": "Процессора и монитора.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "question": "Перфокарты впервые стали использоваться в:",
    "answers": [
      {
        "text": "В 19 веке для управления ткацкими станками.",
        "isCorrect": true
      },
      {
        "text": "В 20 веке для хранения программ.",
        "isCorrect": false
      },
      {
        "text": "В 18 веке для арифметических вычислений.",
        "isCorrect": false
      },
      {
        "text": "В 21 веке для цифровых документов.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "question": "Принцип открытости архитектуры ЭВМ означает:",
    "answers": [
      {
        "text": "Возможность совместимости оборудования и программ разных производителей.",
        "isCorrect": true
      },
      {
        "text": "Возможность доступа к Интернету без ограничений.",
        "isCorrect": false
      },
      {
        "text": "Возможность использовать ЭВМ без операционной системы.",
        "isCorrect": false
      },
      {
        "text": "Возможность открывать корпус компьютера без лицензии.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "question": "Какое высказывание верно?",
    "answers": [
      {
        "text": "Все программы работают быстрее, чем процессы ЭВМ.",
        "isCorrect": false
      },
      {
        "text": "ЭВМ выполняет операции строго по заданной программе.",
        "isCorrect": true
      },
      {
        "text": "ЭВМ может сама придумывать новые алгоритмы без участия человека.",
        "isCorrect": false
      },
      {
        "text": "В ЭВМ нет центрального процессора.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "question": "Что такое системный интерфейс?",
    "answers": [
      {
        "text": "Программа для создания игр.",
        "isCorrect": false
      },
      {
        "text": "Совокупность правил и методов взаимодействия компонентов ЭВМ.",
        "isCorrect": true
      },
      {
        "text": "Встроенный экран для отображения информации.",
        "isCorrect": false
      },
      {
        "text": "Устройство для ввода текста с клавиатуры.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "question": "Какой принцип Фон Неймана обуславливает хранение программ и данных одной памяти?",
    "answers": [
      {
        "text": "Принцип адресации.",
        "isCorrect": false
      },
      {
        "text": "Принцип программного управления.",
        "isCorrect": false
      },
      {
        "text": "Принцип хранения программ.",
        "isCorrect": true
      },
      {
        "text": "Принцип последовательного исполнения.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "question": "Какой принцип Фон Неймана обуславливает последовательное выполнение команд программы?",
    "answers": [
      {
        "text": "Принцип хранения программ.",
        "isCorrect": false
      },
      {
        "text": "Принцип последовательного исполнения.",
        "isCorrect": true
      },
      {
        "text": "Принцип двоичного представления.",
        "isCorrect": false
      },
      {
        "text": "Принцип деления памяти на ячейки.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "question": "Какой принцип Фон Неймана обуславливает деление памяти на ячейки?",
    "answers": [
      {
        "text": "Принцип адресации.",
        "isCorrect": true
      },
      {
        "text": "Принцип программного управления.",
        "isCorrect": false
      },
      {
        "text": "Принцип двоичного представления.",
        "isCorrect": false
      },
      {
        "text": "Принцип последовательного исполнения.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "question": "Какой принцип Фон Неймана обуславливает представление данных в двоичном виде?",
    "answers": [
      {
        "text": "Принцип двоичного представления.",
        "isCorrect": true
      },
      {
        "text": "Принцип хранения программ.",
        "isCorrect": false
      },
      {
        "text": "Принцип адресации.",
        "isCorrect": false
      },
      {
        "text": "Принцип открытости архитектуры.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "question": "Мэйнфреймы – это …",
    "answers": [
      {
        "text": "Персональные компьютеры для домашних пользователей.",
        "isCorrect": false
      },
      {
        "text": "Мощные вычислительные системы для больших организаций.",
        "isCorrect": true
      },
      {
        "text": "Мини-компьютеры для обучения.",
        "isCorrect": false
      },
      {
        "text": "Портативные устройства для игр.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "question": "К какому классу ЭВМ по вычислительной мощности относят персональные компьютеры:",
    "answers": [
      {
        "text": "Мэйнфреймы",
        "isCorrect": false
      },
      {
        "text": "Мини-ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Персональные ЭВМ",
        "isCorrect": true
      },
      {
        "text": "Суперкомпьютеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "question": "По назначению ЭВМ классифицируют на:",
    "answers": [
      {
        "text": "Игровые и офисные",
        "isCorrect": false
      },
      {
        "text": "На универсальные и специализированные",
        "isCorrect": true
      },
      {
        "text": "На цифровые и аналоговые",
        "isCorrect": false
      },
      {
        "text": "На переносные и стационарные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "question": "На какие виды делятся ЭВМ по размерам и вычислительной мощности?",
    "answers": [
      {
        "text": "Большие, средние, малые",
        "isCorrect": true
      },
      {
        "text": "Красные, синие, зелёные",
        "isCorrect": false
      },
      {
        "text": "Настольные, портативные, мобильные",
        "isCorrect": false
      },
      {
        "text": "Простые, сложные, сверхсложные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "question": "Какое самое главное и принципиальное отличие вычислительных машин разных поколений?",
    "answers": [
      {
        "text": "Внешний вид корпуса",
        "isCorrect": false
      },
      {
        "text": "Элементная база и технологии изготовления",
        "isCorrect": true
      },
      {
        "text": "Производитель",
        "isCorrect": false
      },
      {
        "text": "Цвет и размер экрана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "question": "Что такое интегральная схема?",
    "answers": [
      {
        "text": "Отдельный резистор",
        "isCorrect": false
      },
      {
        "text": "Электронное устройство, в котором много элементов размещены на одной пластине",
        "isCorrect": true
      },
      {
        "text": "Программа для ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Встроенный аккумулятор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "question": "Какой была элементная база первого поколения ЭВМ?",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Микросхемы",
        "isCorrect": false
      },
      {
        "text": "Сверхпроводники",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "question": "Элементная база второго поколения (1960е годы) - это …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Оптоэлектронные элементы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "question": "Элементная база третьего поколения(1970е годы) - это …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Оптоэлектронные элементы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 21,
    "question": "Элементная база четвертого поколения(1980е годы) - это…",
    "answers": [
      {
        "text": "Микропроцессоры и масштабные интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Аналоговые устройства",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "question": "Абак - это:",
    "answers": [
      {
        "text": "Древнее устройство для вычислений",
        "isCorrect": true
      },
      {
        "text": "Электронная ЭВМ",
        "isCorrect": false
      },
      {
        "text": "Программируемый калькулятор",
        "isCorrect": false
      },
      {
        "text": "Счётная машина на микросхемах",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "question": "Какое поколение ЭВМ будет пользоваться популярностью в будущем?",
    "answers": [
      {
        "text": "Первое",
        "isCorrect": false
      },
      {
        "text": "Второе",
        "isCorrect": false
      },
      {
        "text": "Четвертое и последующие поколения",
        "isCorrect": true
      },
      {
        "text": "Второе и третье",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 24,
    "question": "Классификация ПЭВМ по конструктивным особенностям:",
    "answers": [
      {
        "text": "Настольные, портативные, ноутбуки",
        "isCorrect": true
      },
      {
        "text": "Красные, синие, зелёные",
        "isCorrect": false
      },
      {
        "text": "Универсальные и специализированные",
        "isCorrect": false
      },
      {
        "text": "Большие, средние, малые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "question": "В 50-е годы началось … поколение ЭВМ.",
    "answers": [
      {
        "text": "Первое",
        "isCorrect": true
      },
      {
        "text": "Второе",
        "isCorrect": false
      },
      {
        "text": "Третье",
        "isCorrect": false
      },
      {
        "text": "Четвёртое",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "question": "Что такое “ENIAC”?",
    "answers": [
      {
        "text": "Первая в мире программируемая электронная ЭВМ",
        "isCorrect": true
      },
      {
        "text": "Портативный калькулятор",
        "isCorrect": false
      },
      {
        "text": "Первая интегральная схема",
        "isCorrect": false
      },
      {
        "text": "Первый транзистор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "question": "Период первого поколения ЭВМ:",
    "answers": [
      {
        "text": "1951–1958",
        "isCorrect": true
      },
      {
        "text": "1960–1969",
        "isCorrect": false
      },
      {
        "text": "1970–1979",
        "isCorrect": false
      },
      {
        "text": "1980–1989",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "question": "Период второго поколения ЭВМ:",
    "answers": [
      {
        "text": "1951–1958",
        "isCorrect": false
      },
      {
        "text": "1959–1964",
        "isCorrect": true
      },
      {
        "text": "1970–1979",
        "isCorrect": false
      },
      {
        "text": "1980–1989",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "question": "Период третьего поколения ЭВМ:",
    "answers": [
      {
        "text": "1951–1958",
        "isCorrect": false
      },
      {
        "text": "1959–1964",
        "isCorrect": false
      },
      {
        "text": "1965–1971",
        "isCorrect": true
      },
      {
        "text": "1980–1989",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "question": "Для чего разрабатывался “Colossus” Аланом Тьюрингом?",
    "answers": [
      {
        "text": "Для расчётов в космической отрасли",
        "isCorrect": false
      },
      {
        "text": "Для дешифровки немецких шифров во Второй мировой войне",
        "isCorrect": true
      },
      {
        "text": "Для игры в шахматы",
        "isCorrect": false
      },
      {
        "text": "Для обработки бухгалтерских данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "question": "Кто описал машину для суммирования чисел в 1642 году?",
    "answers": [
      {
        "text": "Джон Непер",
        "isCorrect": false
      },
      {
        "text": "Блез Паскаль",
        "isCorrect": true
      },
      {
        "text": "Ли Ди Форест",
        "isCorrect": false
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "question": "В каком году Блез Паскаль описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "1623",
        "isCorrect": false
      },
      {
        "text": "1642",
        "isCorrect": true
      },
      {
        "text": "1687",
        "isCorrect": false
      },
      {
        "text": "1720",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "question": "В каком году Джоном Непером была создана деревянная машина для простейших вычислений?",
    "answers": [
      {
        "text": "1617",
        "isCorrect": true
      },
      {
        "text": "1642",
        "isCorrect": false
      },
      {
        "text": "1700",
        "isCorrect": false
      },
      {
        "text": "1769",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "question": "В каком году Ли Ди Форест запатентовал вакуумный триод?",
    "answers": [
      {
        "text": "1906",
        "isCorrect": true
      },
      {
        "text": "1920",
        "isCorrect": false
      },
      {
        "text": "1899",
        "isCorrect": false
      },
      {
        "text": "1915",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "question": "Кто запатентовал первый вакуумный триод?",
    "answers": [
      {
        "text": "Блез Паскаль",
        "isCorrect": false
      },
      {
        "text": "Ли Ди Форест",
        "isCorrect": true
      },
      {
        "text": "Джон Непер",
        "isCorrect": false
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "question": "В каком году была создана машина ENIAC?",
    "answers": [
      {
        "text": "1943",
        "isCorrect": false
      },
      {
        "text": "1945",
        "isCorrect": true
      },
      {
        "text": "1950",
        "isCorrect": false
      },
      {
        "text": "1937",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "question": "Кто в 1642 году описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "Джон Непер",
        "isCorrect": false
      },
      {
        "text": "Блез Паскаль",
        "isCorrect": true
      },
      {
        "text": "Ли Ди Форест",
        "isCorrect": false
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "question": "Когда была придумана первая вычислительная машина?",
    "answers": [
      {
        "text": "1617",
        "isCorrect": true
      },
      {
        "text": "1642",
        "isCorrect": false
      },
      {
        "text": "1700",
        "isCorrect": false
      },
      {
        "text": "1801",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "question": "Назовите первую ЭВМ, изобретённую в 1937 году.",
    "answers": [
      {
        "text": "ENIAC",
        "isCorrect": false
      },
      {
        "text": "ABC",
        "isCorrect": false
      },
      {
        "text": "Z1",
        "isCorrect": true
      },
      {
        "text": "Colossus",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "question": "В каком году была создана первая ЭВМ – АВС?",
    "answers": [
      {
        "text": "1937",
        "isCorrect": false
      },
      {
        "text": "1942",
        "isCorrect": true
      },
      {
        "text": "1945",
        "isCorrect": false
      },
      {
        "text": "1951",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "question": "Переведите число A16 из шестнадцатеричной в восьмеричную систему счисления.",
    "answers": [
      {
        "text": "12456₈",
        "isCorrect": false
      },
      {
        "text": "12056₈",
        "isCorrect": true
      },
      {
        "text": "12156₈",
        "isCorrect": false
      },
      {
        "text": "12345₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "question": "Переведите число F14 из шестнадцатеричной в восьмеричную систему счисления.",
    "answers": [
      {
        "text": "16024₈",
        "isCorrect": false
      },
      {
        "text": "17024₈",
        "isCorrect": true
      },
      {
        "text": "17124₈",
        "isCorrect": false
      },
      {
        "text": "17204₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "question": "Переведите число 88 из десятичной в двоичную систему счисления.",
    "answers": [
      {
        "text": "1011100₂",
        "isCorrect": false
      },
      {
        "text": "1011000₂",
        "isCorrect": true
      },
      {
        "text": "1101000₂",
        "isCorrect": false
      },
      {
        "text": "1110000₂",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "question": "Переведите число 129 из десятичной в двоичную систему счисления.",
    "answers": [
      {
        "text": "10000011₂",
        "isCorrect": false
      },
      {
        "text": "10000001₂",
        "isCorrect": true
      },
      {
        "text": "10000101₂",
        "isCorrect": false
      },
      {
        "text": "10010001₂",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "question": "Переведите число 110011 из двоичной системы счисления в восьмеричную.",
    "answers": [
      {
        "text": "63₈",
        "isCorrect": true
      },
      {
        "text": "61₈",
        "isCorrect": false
      },
      {
        "text": "65₈",
        "isCorrect": false
      },
      {
        "text": "60₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "question": "Переведите число 10011101 из двоичной системы счисления в десятичную.",
    "answers": [
      {
        "text": "157",
        "isCorrect": true
      },
      {
        "text": "158",
        "isCorrect": false
      },
      {
        "text": "159",
        "isCorrect": false
      },
      {
        "text": "156",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "question": "Переведите число 800 десятеричной системы счисления в шестнадцатеричную.",
    "answers": [
      {
        "text": "320₁₆",
        "isCorrect": true
      },
      {
        "text": "3F0₁₆",
        "isCorrect": false
      },
      {
        "text": "2F0₁₆",
        "isCorrect": false
      },
      {
        "text": "310₁₆",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "question": "Переведите число 1769 из десятеричной системы счисления в шестнадцатеричную.",
    "answers": [
      {
        "text": "6E9₁₆",
        "isCorrect": true
      },
      {
        "text": "6D9₁₆",
        "isCorrect": false
      },
      {
        "text": "7E9₁₆",
        "isCorrect": false
      },
      {
        "text": "6F9₁₆",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "question": "Вычислить разность чисел 6089 и 4489 в девятеричной системе.",
    "answers": [
      {
        "text": "1134₉",
        "isCorrect": false
      },
      {
        "text": "1500₉",
        "isCorrect": true
      },
      {
        "text": "1200₉",
        "isCorrect": false
      },
      {
        "text": "1340₉",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "question": "Вычислить разность чисел 10668 и 5468 в восьмеричной системе.",
    "answers": [
      {
        "text": "3200₈",
        "isCorrect": true
      },
      {
        "text": "3100₈",
        "isCorrect": false
      },
      {
        "text": "3300₈",
        "isCorrect": false
      },
      {
        "text": "3210₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "question": "Вычислить разность чисел 7778 и 4468 в восьмеричной системе.",
    "answers": [
      {
        "text": "331₈",
        "isCorrect": true
      },
      {
        "text": "332₈",
        "isCorrect": false
      },
      {
        "text": "330₈",
        "isCorrect": false
      },
      {
        "text": "333₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "question": "Вычислить разность чисел 55126 и 1155 6 в шестеричной системе.",
    "answers": [
      {
        "text": "53531₆",
        "isCorrect": true
      },
      {
        "text": "53530₆",
        "isCorrect": false
      },
      {
        "text": "53532₆",
        "isCorrect": false
      },
      {
        "text": "53431₆",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "question": "Переведите число 158 из десятеричной системы счисления в четверичную.",
    "answers": [
      {
        "text": "2132₄",
        "isCorrect": true
      },
      {
        "text": "2312₄",
        "isCorrect": false
      },
      {
        "text": "2123₄",
        "isCorrect": false
      },
      {
        "text": "1232₄",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "question": "Вычислить сумму чисел 8876 и 4856 в девятеричной системе.",
    "answers": [
      {
        "text": "1483₉",
        "isCorrect": true
      },
      {
        "text": "1482₉",
        "isCorrect": false
      },
      {
        "text": "1473₉",
        "isCorrect": false
      },
      {
        "text": "1484₉",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "question": "Вычислить сумму чисел 4A16 и F116 в восьмеричной системе.",
    "answers": [
      {
        "text": "473₈",
        "isCorrect": true
      },
      {
        "text": "471₈",
        "isCorrect": false
      },
      {
        "text": "474₈",
        "isCorrect": false
      },
      {
        "text": "472₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "question": "Вычислить сумму чисел 5168 и 7778 в восьмеричной системе.",
    "answers": [
      {
        "text": "1515₈",
        "isCorrect": true
      },
      {
        "text": "1514₈",
        "isCorrect": false
      },
      {
        "text": "1525₈",
        "isCorrect": false
      },
      {
        "text": "1505₈",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "question": "Вычислить сумму чисел 5126 и 456 в шестеричной системе.",
    "answers": [
      {
        "text": "10330₆",
        "isCorrect": true
      },
      {
        "text": "10331₆",
        "isCorrect": false
      },
      {
        "text": "10320₆",
        "isCorrect": false
      },
      {
        "text": "10332₆",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "question": "Двоичное представление данных основывается на …",
    "answers": [
      {
        "text": "Трёх состояниях сигнала",
        "isCorrect": false
      },
      {
        "text": "Двух состояниях сигнала",
        "isCorrect": true
      },
      {
        "text": "Числах от 0 до 9",
        "isCorrect": false
      },
      {
        "text": "Неопределённом сигнале",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "question": "Способ именования и изображения чисел с помощью символов, имеющих определенные количественные значения называется …",
    "answers": [
      {
        "text": "Алгоритм",
        "isCorrect": false
      },
      {
        "text": "Кодирование",
        "isCorrect": false
      },
      {
        "text": "Система счисления",
        "isCorrect": true
      },
      {
        "text": "Шифрование",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "question": "Информация кодируется в двоичной форме и разделяется на единицы или элементы называемые …",
    "answers": [
      {
        "text": "Биты",
        "isCorrect": true
      },
      {
        "text": "Байты",
        "isCorrect": false
      },
      {
        "text": "Символы",
        "isCorrect": false
      },
      {
        "text": "Сегменты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "question": "Кто изобрёл двоичную систему счисления?",
    "answers": [
      {
        "text": "Паскаль",
        "isCorrect": false
      },
      {
        "text": "Лейбниц",
        "isCorrect": true
      },
      {
        "text": "Непер",
        "isCorrect": false
      },
      {
        "text": "Тьюринг",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "question": "Что общего между машиной Бэббиджа, современным компьютером и человеческим мозгом?",
    "answers": [
      {
        "text": "Используют только электричество",
        "isCorrect": false
      },
      {
        "text": "Способность к обработке и хранению информации",
        "isCorrect": true
      },
      {
        "text": "Существуют физически",
        "isCorrect": false
      },
      {
        "text": "Не имеют памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "question": "Назовите сигнал, область определения которого есть дискретное пространство.",
    "answers": [
      {
        "text": "Аналоговый",
        "isCorrect": false
      },
      {
        "text": "Цифровой",
        "isCorrect": true
      },
      {
        "text": "Электрический",
        "isCorrect": false
      },
      {
        "text": "Оптический",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "question": "Назовите сигнал, область определения которого есть непрерывное пространство, то есть пространство, не являющееся дискретным.",
    "answers": [
      {
        "text": "Аналоговый",
        "isCorrect": true
      },
      {
        "text": "Цифровой",
        "isCorrect": false
      },
      {
        "text": "Двоичный",
        "isCorrect": false
      },
      {
        "text": "Бинарный",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "question": "По принципу Фон Неймана данные и команды представлены в:",
    "answers": [
      {
        "text": "Разных устройствах",
        "isCorrect": false
      },
      {
        "text": "Одной памяти",
        "isCorrect": true
      },
      {
        "text": "На внешних носителях",
        "isCorrect": false
      },
      {
        "text": "Только в процессоре",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "question": "Дискретная информация – это …",
    "answers": [
      {
        "text": "Непрерывная информация",
        "isCorrect": false
      },
      {
        "text": "Которая представлена отдельными элементами",
        "isCorrect": true
      },
      {
        "text": "Цветовая информация",
        "isCorrect": false
      },
      {
        "text": "Звуковая информация",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "question": "Какой вид информации использует ГВМ?",
    "answers": [
      {
        "text": "Аналоговую",
        "isCorrect": true
      },
      {
        "text": "Дискретную",
        "isCorrect": false
      },
      {
        "text": "Двоичную",
        "isCorrect": false
      },
      {
        "text": "Символьную",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "question": "Какой вид информации использует АВМ?",
    "answers": [
      {
        "text": "Дискретную",
        "isCorrect": true
      },
      {
        "text": "Аналоговую",
        "isCorrect": false
      },
      {
        "text": "Двоичную",
        "isCorrect": false
      },
      {
        "text": "Цветовую",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "question": "Какой вид информации использует ЦВМ?",
    "answers": [
      {
        "text": "Аналоговую",
        "isCorrect": false
      },
      {
        "text": "Дискретную",
        "isCorrect": false
      },
      {
        "text": "Двоичную",
        "isCorrect": true
      },
      {
        "text": "Цветовую",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "question": "Прикладное программное обеспечение –это:",
    "answers": [
      {
        "text": "Операционная система",
        "isCorrect": false
      },
      {
        "text": "Программы для конкретных задач пользователя",
        "isCorrect": true
      },
      {
        "text": "Драйверы устройств",
        "isCorrect": false
      },
      {
        "text": "Системные утилиты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "question": "Системное программное обеспечение –это:",
    "answers": [
      {
        "text": "Игры и офисные программы",
        "isCorrect": false
      },
      {
        "text": "Операционные системы и служебные программы",
        "isCorrect": true
      },
      {
        "text": "Базы данных",
        "isCorrect": false
      },
      {
        "text": "Графические редакторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "question": "Существует 2 вида программного обеспечения. Назовите их.",
    "answers": [
      {
        "text": "Операционная система и драйверы",
        "isCorrect": false
      },
      {
        "text": "Системное и прикладное",
        "isCorrect": true
      },
      {
        "text": "Игровое и офисное",
        "isCorrect": false
      },
      {
        "text": "Аналоговое и цифровое",
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
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Искусственные нейроны",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "question": "По каким признакам ЭВМ делятся на поколения?",
    "answers": [
      {
        "text": "По скорости и мощности",
        "isCorrect": false
      },
      {
        "text": "По элементной базе и технологиям изготовления",
        "isCorrect": true
      },
      {
        "text": "По цвету корпуса",
        "isCorrect": false
      },
      {
        "text": "По размеру экрана",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "question": "Четвёртое поколение ПК использует:",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": true
      },
      {
        "text": "Механические реле",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "question": "Третье поколение ПК использует:",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "question": "Как называется коэффициент, на который следует умножить тактовую частоту материнской платы, для достижения частоты процессора?",
    "answers": [
      {
        "text": "Делитель",
        "isCorrect": false
      },
      {
        "text": "Множитель",
        "isCorrect": true
      },
      {
        "text": "Частотный индекс",
        "isCorrect": false
      },
      {
        "text": "Режим синхронизации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "question": "Что такое процессор?",
    "answers": [
      {
        "text": "Устройство хранения данных",
        "isCorrect": false
      },
      {
        "text": "Центральное устройство обработки данных",
        "isCorrect": true
      },
      {
        "text": "Устройство ввода",
        "isCorrect": false
      },
      {
        "text": "Внешний накопитель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "question": "Что такое регистры?",
    "answers": [
      {
        "text": "Элементы памяти внутри процессора для временного хранения данных",
        "isCorrect": true
      },
      {
        "text": "Внешние устройства памяти",
        "isCorrect": false
      },
      {
        "text": "Драйверы",
        "isCorrect": false
      },
      {
        "text": "Порты ввода/вывода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "question": "Как называются проводники связывающие процессор с оперативной памятью и остальными устройствами компьютера?",
    "answers": [
      {
        "text": "Шины",
        "isCorrect": true
      },
      {
        "text": "Кабели питания",
        "isCorrect": false
      },
      {
        "text": "Резисторы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "question": "Сколько основных шин в компьютере?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": true
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "question": "Выберите правильные варианты основных шин:",
    "answers": [
      {
        "text": "Адресная, данных, управления",
        "isCorrect": true
      },
      {
        "text": "Питания, сигналов, управления",
        "isCorrect": false
      },
      {
        "text": "Данных, видео, аудио",
        "isCorrect": false
      },
      {
        "text": "Адресная, графическая, звуковая",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "question": "Сколько проводников входит в адресную шину?",
    "answers": [
      {
        "text": "Зависит от разрядности памяти",
        "isCorrect": true
      },
      {
        "text": "Всегда 8",
        "isCorrect": false
      },
      {
        "text": "Всегда 16",
        "isCorrect": false
      },
      {
        "text": "Всегда 32",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "question": "Из скольких линий состоит шина данных?",
    "answers": [
      {
        "text": "Зависит от разрядности процессора",
        "isCorrect": true
      },
      {
        "text": "Всегда 8",
        "isCorrect": false
      },
      {
        "text": "Всегда 16",
        "isCorrect": false
      },
      {
        "text": "Всегда 32",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "question": "Какие устройства называют периферийными?",
    "answers": [
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Внешние устройства ввода/вывода",
        "isCorrect": true
      },
      {
        "text": "Регистры",
        "isCorrect": false
      },
      {
        "text": "Кэш память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "question": "Дать определение клавиатуре.",
    "answers": [
      {
        "text": "Устройство вывода",
        "isCorrect": false
      },
      {
        "text": "Устройство ввода информации с помощью нажатия клавиш",
        "isCorrect": true
      },
      {
        "text": "Устройство хранения данных",
        "isCorrect": false
      },
      {
        "text": "Устройство обработки данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "question": "Что такое сканер?",
    "answers": [
      {
        "text": "Устройство ввода изображения в компьютер",
        "isCorrect": true
      },
      {
        "text": "Устройство вывода текста",
        "isCorrect": false
      },
      {
        "text": "Память",
        "isCorrect": false
      },
      {
        "text": "Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 88,
    "question": "Что такое принтер?",
    "answers": [
      {
        "text": "Устройство вывода текста и графики на бумагу",
        "isCorrect": true
      },
      {
        "text": "Устройство ввода",
        "isCorrect": false
      },
      {
        "text": "Устройство хранения",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "question": "Что такое стримеры?",
    "answers": [
      {
        "text": "Магнитные ленты для хранения больших объемов информации",
        "isCorrect": true
      },
      {
        "text": "Процессоры",
        "isCorrect": false
      },
      {
        "text": "Устройства ввода",
        "isCorrect": false
      },
      {
        "text": "Принтеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "question": "Что такое модем?",
    "answers": [
      {
        "text": "Устройство преобразования данных для передачи по телефонной линии",
        "isCorrect": true
      },
      {
        "text": "Устройство ввода",
        "isCorrect": false
      },
      {
        "text": "Устройство вывода",
        "isCorrect": false
      },
      {
        "text": "Центральный процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "question": "Назовите важнейшее для пользователя устройство, с помощью которого осуществляется ввод данных, команд и управляющих воздействий в ПК.",
    "answers": [
      {
        "text": "Принтер",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": true
      },
      {
        "text": "Монитор",
        "isCorrect": false
      },
      {
        "text": "Сканер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "question": "Все микропроцессоры можно разделить на группы: а) с полным набором команд, б) с сокращенным набором команд, в) с минимальным набором команд, г) с максимальным набором команд.(Выбрать правильные варианты ответов).",
    "answers": [
      {
        "text": "С полным набором команд",
        "isCorrect": true
      },
      {
        "text": "С сокращенным набором команд",
        "isCorrect": true
      },
      {
        "text": "С минимальным набором команд",
        "isCorrect": true
      },
      {
        "text": "С максимальным набором команд",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "question": "Как называется шина, по которой из оперативной памяти поступают команды выполняемые процессором?",
    "answers": [
      {
        "text": "Адресная шина",
        "isCorrect": false
      },
      {
        "text": "Шина управления",
        "isCorrect": true
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Видеошина",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "question": "Как называется шина, по которой происходит копирование данных из оперативной памяти в регистры процессора и наоборот?",
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
        "text": "Шина управления",
        "isCorrect": false
      },
      {
        "text": "Питания",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "question": "Данные, которые передаются по этой шине трактуются как адреса ячеек оперативной памяти.",
    "answers": [
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Адресная шина",
        "isCorrect": true
      },
      {
        "text": "Шина управления",
        "isCorrect": false
      },
      {
        "text": "Видеошина",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "question": "Как называются шины, специализирующиеся на обслуживании небольшого количества устройств определенного класса?",
    "answers": [
      {
        "text": "Шины общего назначения",
        "isCorrect": false
      },
      {
        "text": "Локальные шины",
        "isCorrect": true
      },
      {
        "text": "Адресные шины",
        "isCorrect": false
      },
      {
        "text": "Контроллерные шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "question": "Как называются шины общего назначения, позволяющие подключать большое число самых разнообразных устройств?",
    "answers": [
      {
        "text": "Локальные шины",
        "isCorrect": false
      },
      {
        "text": "Шины общего назначения",
        "isCorrect": true
      },
      {
        "text": "Адресные шины",
        "isCorrect": false
      },
      {
        "text": "Контроллерные шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "question": "К каким устройствам можно отнести принтер, графопостроители?",
    "answers": [
      {
        "text": "Ввод",
        "isCorrect": false
      },
      {
        "text": "Вывод",
        "isCorrect": true
      },
      {
        "text": "Хранение",
        "isCorrect": false
      },
      {
        "text": "Обработка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "question": "К каким устройствам можно отнести клавиатуру, сканер, графический планшет, манипуляторы?",
    "answers": [
      {
        "text": "Ввод",
        "isCorrect": true
      },
      {
        "text": "Вывод",
        "isCorrect": false
      },
      {
        "text": "Память",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "question": "Что обеспечивает взаимодействие машины с окружающей средой?",
    "answers": [
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Устройства ввода и вывода",
        "isCorrect": true
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Шины данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 101,
    "question": "Какая шина имеет провода и схемы сопряжения для подключения блоков ПК к системе энергопитания?",
    "answers": [
      {
        "text": "Адресная",
        "isCorrect": false
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Силовая шина",
        "isCorrect": true
      },
      {
        "text": "Шина управления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 102,
    "question": "Второе поколение ПК использовало:",
    "answers": [
      {
        "text": "Вакуумные лампы",
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
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
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
    "id": 104,
    "question": "По поколениям персональные компьютеры делятся на:",
    "answers": [
      {
        "text": "Первое, второе, третье, четвёртое",
        "isCorrect": true
      },
      {
        "text": "Малые, средние, большие",
        "isCorrect": false
      },
      {
        "text": "Стационарные и портативные",
        "isCorrect": false
      },
      {
        "text": "Аналоговые и цифровые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 105,
    "question": "По принципу действия ЭВМ делятся на:",
    "answers": [
      {
        "text": "Аналоговые, цифровые, гибридные",
        "isCorrect": true
      },
      {
        "text": "Малые, средние, большие",
        "isCorrect": false
      },
      {
        "text": "Стационарные и портативные",
        "isCorrect": false
      },
      {
        "text": "Первое, второе, третье поколение",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 106,
    "question": "Кто создал первую аналитическую вычислительную машину в 1822?",
    "answers": [
      {
        "text": "Блез Паскаль",
        "isCorrect": false
      },
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": true
      },
      {
        "text": "Алан Тьюринг",
        "isCorrect": false
      },
      {
        "text": "Джон Непер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 107,
    "question": "Первый программируемый компьютер был создан в…",
    "answers": [
      {
        "text": "1936",
        "isCorrect": true
      },
      {
        "text": "1822",
        "isCorrect": false
      },
      {
        "text": "1945",
        "isCorrect": false
      },
      {
        "text": "1950",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 108,
    "question": "Какого типа ПЗУ при классификации по технологии записи информации не существует?",
    "answers": [
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "RWM",
        "isCorrect": true
      },
      {
        "text": "EPROM",
        "isCorrect": false
      },
      {
        "text": "EEPROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 109,
    "question": "DRDRAM - это…",
    "answers": [
      {
        "text": "Тип оперативной памяти",
        "isCorrect": true
      },
      {
        "text": "Тип процессора",
        "isCorrect": false
      },
      {
        "text": "Тип жёсткого диска",
        "isCorrect": false
      },
      {
        "text": "Тип видеокарты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 110,
    "question": "EEPROM – это…",
    "answers": [
      {
        "text": "ПЗУ с возможностью стирания и перезаписи",
        "isCorrect": true
      },
      {
        "text": "ПЗУ только для чтения",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 111,
    "question": "EPROM – это…",
    "answers": [
      {
        "text": "ПЗУ, стираемое ультрафиолетом",
        "isCorrect": true
      },
      {
        "text": "ПЗУ для постоянного хранения",
        "isCorrect": false
      },
      {
        "text": "RAM",
        "isCorrect": false
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 112,
    "question": "PROM- это…",
    "answers": [
      {
        "text": "Перезаписываемое ПЗУ",
        "isCorrect": false
      },
      {
        "text": "ПЗУ программируемое один раз",
        "isCorrect": true
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 113,
    "question": "Как расшифровывается EEPROM?",
    "answers": [
      {
        "text": "Electrically Erasable Programmable Read-Only Memory",
        "isCorrect": true
      },
      {
        "text": "Electronically Erasable Programmable Read-Only Memory",
        "isCorrect": false
      },
      {
        "text": "Electric Erasable RAM",
        "isCorrect": false
      },
      {
        "text": "None",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 114,
    "question": "Как расшифровывается EPROM?",
    "answers": [
      {
        "text": "Electrically Programmable ROM",
        "isCorrect": false
      },
      {
        "text": "Erasable Programmable ROM",
        "isCorrect": true
      },
      {
        "text": "Electric PROM",
        "isCorrect": false
      },
      {
        "text": "Enhanced PROM",
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
        "text": "Permanent ROM",
        "isCorrect": false
      },
      {
        "text": "Process ROM",
        "isCorrect": false
      },
      {
        "text": "Primary ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 116,
    "question": "Как расшифровывается DDR SDRAM?",
    "answers": [
      {
        "text": "Double Data Rate Synchronous DRAM",
        "isCorrect": true
      },
      {
        "text": "Dual Dynamic RAM",
        "isCorrect": false
      },
      {
        "text": "Direct Data RAM",
        "isCorrect": false
      },
      {
        "text": "Double DRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 117,
    "question": "Как расшифровывается SDRAM?",
    "answers": [
      {
        "text": "Synchronous DRAM",
        "isCorrect": true
      },
      {
        "text": "Static DRAM",
        "isCorrect": false
      },
      {
        "text": "Serial DRAM",
        "isCorrect": false
      },
      {
        "text": "Synchronous Disk RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 118,
    "question": "Как расшифровывается BEDO DRAM?",
    "answers": [
      {
        "text": "Burst Extended Data Output DRAM",
        "isCorrect": true
      },
      {
        "text": "Basic Extended DRAM Output",
        "isCorrect": false
      },
      {
        "text": "Binary EDO DRAM",
        "isCorrect": false
      },
      {
        "text": "Block EDO RAM",
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
        "text": "Dynamic Rambus DRAM",
        "isCorrect": false
      },
      {
        "text": "Dual Rambus DRAM",
        "isCorrect": false
      },
      {
        "text": "Data Rate RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 120,
    "question": "Как расшифровывается RAM EDO?",
    "answers": [
      {
        "text": "Extended Data Out DRAM",
        "isCorrect": true
      },
      {
        "text": "Random Access Memory",
        "isCorrect": false
      },
      {
        "text": "Enhanced Data Output RAM",
        "isCorrect": false
      },
      {
        "text": "External Data Output RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 121,
    "question": "Как расшифровывается FPM DRAM?",
    "answers": [
      {
        "text": "Fast Page Mode DRAM",
        "isCorrect": true
      },
      {
        "text": "Full Page Memory",
        "isCorrect": false
      },
      {
        "text": "First Page Mode",
        "isCorrect": false
      },
      {
        "text": "Fast Processor Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 122,
    "question": "Как расшифровывается RIMM?",
    "answers": [
      {
        "text": "Rambus Inline Memory Module",
        "isCorrect": true
      },
      {
        "text": "Random Inline Memory Module",
        "isCorrect": false
      },
      {
        "text": "Rapid Interface Memory Module",
        "isCorrect": false
      },
      {
        "text": "RAM Integrated Memory Module",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 123,
    "question": "Как расшифровывается DIMM?",
    "answers": [
      {
        "text": "Dual Inline Memory Module",
        "isCorrect": true
      },
      {
        "text": "Double Inline Memory Module",
        "isCorrect": false
      },
      {
        "text": "Dynamic Inline Memory Module",
        "isCorrect": false
      },
      {
        "text": "Data Inline Memory Module",
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
        "text": "Synchronous Inline Memory Module",
        "isCorrect": false
      },
      {
        "text": "Standard Inline Memory Module",
        "isCorrect": false
      },
      {
        "text": "Simple Inline Memory Module",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 125,
    "question": "Как расшифровывается SIPP?",
    "answers": [
      {
        "text": "Single Inline Pin Package",
        "isCorrect": true
      },
      {
        "text": "Single Integrated Pin Package",
        "isCorrect": false
      },
      {
        "text": "Standard Inline Pin Package",
        "isCorrect": false
      },
      {
        "text": "Simple Inline Pin Package",
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
        "text": "Single Integrated Package",
        "isCorrect": false
      },
      {
        "text": "Standard Inline Package",
        "isCorrect": false
      },
      {
        "text": "Simple Inline Package",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 127,
    "question": "Как расшифровывается DIP?",
    "answers": [
      {
        "text": "Dual Inline Package",
        "isCorrect": true
      },
      {
        "text": "Double Integrated Package",
        "isCorrect": false
      },
      {
        "text": "Dual Integrated Package",
        "isCorrect": false
      },
      {
        "text": "Data Inline Package",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 128,
    "question": "Как расшифровывается ROM?",
    "answers": [
      {
        "text": "Read-Only Memory",
        "isCorrect": true
      },
      {
        "text": "Random-Access Memory",
        "isCorrect": false
      },
      {
        "text": "Rapid Output Memory",
        "isCorrect": false
      },
      {
        "text": "Recordable Output Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 129,
    "question": "Как расшифровывается RAM?",
    "answers": [
      {
        "text": "Random-Access Memory",
        "isCorrect": true
      },
      {
        "text": "Read-Active Memory",
        "isCorrect": false
      },
      {
        "text": "Rapid Access Module",
        "isCorrect": false
      },
      {
        "text": "Readable Access Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 130,
    "question": "Назовите типы кэш-памяти различаемых по принципу записи результатов в оперативную память.",
    "answers": [
      {
        "text": "Write-through, Write-back",
        "isCorrect": true
      },
      {
        "text": "Level 1, Level 2",
        "isCorrect": false
      },
      {
        "text": "Static, Dynamic",
        "isCorrect": false
      },
      {
        "text": "RAM, ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 131,
    "question": "Сколько типов кэш памяти различают по принципу записи результатов в оперативную память?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": true
      },
      {
        "text": "3",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 132,
    "question": "Что означает с английского Cache (кэш) ?",
    "answers": [
      {
        "text": "Быстрая память",
        "isCorrect": true
      },
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Память на диске",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 133,
    "question": "Что такое «Регистровая кэш-память»?",
    "answers": [
      {
        "text": "Память процессора для временного хранения данных",
        "isCorrect": true
      },
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": false
      },
      {
        "text": "Внешняя память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 134,
    "question": "Как расшифровывается SRAM?",
    "answers": [
      {
        "text": "Static RAM",
        "isCorrect": true
      },
      {
        "text": "Synchronous RAM",
        "isCorrect": false
      },
      {
        "text": "Serial RAM",
        "isCorrect": false
      },
      {
        "text": "Standard RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 135,
    "question": "Как расшифровывается DRAM?",
    "answers": [
      {
        "text": "Dynamic RAM",
        "isCorrect": true
      },
      {
        "text": "Direct RAM",
        "isCorrect": false
      },
      {
        "text": "Dual RAM",
        "isCorrect": false
      },
      {
        "text": "Data RAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 136,
    "question": "От чего жесткий диск получил название винчестер?",
    "answers": [
      {
        "text": "От производителя",
        "isCorrect": true
      },
      {
        "text": "От размера",
        "isCorrect": false
      },
      {
        "text": "От формы",
        "isCorrect": false
      },
      {
        "text": "От скорости",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 137,
    "question": "Чем известен один из основателей фирмы Seagate, Алан Шугарт?",
    "answers": [
      {
        "text": "Создал первый жёсткий диск",
        "isCorrect": true
      },
      {
        "text": "Создал первый компьютер",
        "isCorrect": false
      },
      {
        "text": "Создал первый процессор",
        "isCorrect": false
      },
      {
        "text": "Создал первый принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 138,
    "question": "Кто является изобретателем первой дискеты?",
    "answers": [
      {
        "text": "Алан Шугарт",
        "isCorrect": true
      },
      {
        "text": "Билл Гейтс",
        "isCorrect": false
      },
      {
        "text": "Стив Джобс",
        "isCorrect": false
      },
      {
        "text": "Чарльз Бэббидж",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 139,
    "question": "Файлы, хранящиеся в разбросанных по диску кластерах, называются…",
    "answers": [
      {
        "text": "Фрагментированные",
        "isCorrect": true
      },
      {
        "text": "Последовательные",
        "isCorrect": false
      },
      {
        "text": "Системные",
        "isCorrect": false
      },
      {
        "text": "Архивные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 140,
    "question": "Минимальная единица размещения информации на диске, состоящая из двух или большего числа смежных секторов дорожки, называется…",
    "answers": [
      {
        "text": "Сектор",
        "isCorrect": false
      },
      {
        "text": "Кластер",
        "isCorrect": true
      },
      {
        "text": "Блок",
        "isCorrect": false
      },
      {
        "text": "Трек",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 141,
    "question": "Какое количество установленных атрибутов должен иметь файл?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "Несколько",
        "isCorrect": true
      },
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "10",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 142,
    "question": "Каких атрибутов файла не существует?",
    "answers": [
      {
        "text": "Read-only",
        "isCorrect": false
      },
      {
        "text": "Hidden",
        "isCorrect": false
      },
      {
        "text": "Executable",
        "isCorrect": true
      },
      {
        "text": "System",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 143,
    "question": "Какое расширение графические файлы?",
    "answers": [
      {
        "text": ".exe",
        "isCorrect": false
      },
      {
        "text": ".doc",
        "isCorrect": false
      },
      {
        "text": ".bmp, .jpg, .png",
        "isCorrect": true
      },
      {
        "text": ".txt",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 144,
    "question": "Какое расширение имеют исполняемые файлы?",
    "answers": [
      {
        "text": ".exe",
        "isCorrect": true
      },
      {
        "text": ".bmp",
        "isCorrect": false
      },
      {
        "text": ".txt",
        "isCorrect": false
      },
      {
        "text": ".jpg",
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
        "text": "4 КБ",
        "isCorrect": true
      },
      {
        "text": "8 КБ",
        "isCorrect": false
      },
      {
        "text": "16 КБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 146,
    "question": "Какой стандартный размер кластера файловой системы NTFS?",
    "answers": [
      {
        "text": "512 байт",
        "isCorrect": false
      },
      {
        "text": "4 КБ",
        "isCorrect": true
      },
      {
        "text": "8 КБ",
        "isCorrect": false
      },
      {
        "text": "16 КБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 147,
    "question": "За счет чего достигается надежность файловой системы NTFS?",
    "answers": [
      {
        "text": "Жёсткого диска",
        "isCorrect": false
      },
      {
        "text": "Журналирования",
        "isCorrect": true
      },
      {
        "text": "RAID",
        "isCorrect": false
      },
      {
        "text": "Размеров кластеров",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 148,
    "question": "Какое главное преимущество файловой системы NTFS?",
    "answers": [
      {
        "text": "Совместимость с DOS",
        "isCorrect": false
      },
      {
        "text": "Безопасность и надежность",
        "isCorrect": true
      },
      {
        "text": "Малый размер",
        "isCorrect": false
      },
      {
        "text": "Простота",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 149,
    "question": "Какая файловая система рекомендуется для использования в Windows 98?",
    "answers": [
      {
        "text": "FAT16",
        "isCorrect": false
      },
      {
        "text": "FAT32",
        "isCorrect": true
      },
      {
        "text": "NTFS",
        "isCorrect": false
      },
      {
        "text": "EXT4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 150,
    "question": "Какая файловая система не поддерживается Windows XP?",
    "answers": [
      {
        "text": "FAT16",
        "isCorrect": false
      },
      {
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "EXT4",
        "isCorrect": true
      },
      {
        "text": "NTFS",
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
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "EXT4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 152,
    "question": "Какая файловая система является многопоточной?",
    "answers": [
      {
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "FAT16",
        "isCorrect": false
      },
      {
        "text": "EXT4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 153,
    "question": "Каким знаком отделяется имя файла от имени потока в файловой системе NTFS?",
    "answers": [
      {
        "text": ":",
        "isCorrect": true
      },
      {
        "text": ".",
        "isCorrect": false
      },
      {
        "text": "/",
        "isCorrect": false
      },
      {
        "text": "\\",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 154,
    "question": "Какова длина имени файла в ОС Windows 98?",
    "answers": [
      {
        "text": "8+3 символа",
        "isCorrect": true
      },
      {
        "text": "255 символов",
        "isCorrect": false
      },
      {
        "text": "32 символа",
        "isCorrect": false
      },
      {
        "text": "128 символов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 155,
    "question": "Какова длина имени файла в ОС DOS?",
    "answers": [
      {
        "text": "8+3 символа",
        "isCorrect": true
      },
      {
        "text": "255 символов",
        "isCorrect": false
      },
      {
        "text": "32 символа",
        "isCorrect": false
      },
      {
        "text": "128 символов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 156,
    "question": "Какая информация связывается с файлом в системе FAT16?",
    "answers": [
      {
        "text": "Имя файла, атрибуты, адрес первого кластера",
        "isCorrect": true
      },
      {
        "text": "Контрольная сумма",
        "isCorrect": false
      },
      {
        "text": "Версия файла",
        "isCorrect": false
      },
      {
        "text": "Доступ пользователей",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 157,
    "question": "Какая информация не связывается с файлом в системе FAT32?",
    "answers": [
      {
        "text": "Имя файла",
        "isCorrect": false
      },
      {
        "text": "Атрибуты",
        "isCorrect": false
      },
      {
        "text": "Доступ пользователей",
        "isCorrect": true
      },
      {
        "text": "Адрес кластера",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 158,
    "question": "Какая информация связывается с файлом в системе NTFS?",
    "answers": [
      {
        "text": "Имя, атрибуты, права доступа",
        "isCorrect": true
      },
      {
        "text": "Только имя",
        "isCorrect": false
      },
      {
        "text": "Только атрибуты",
        "isCorrect": false
      },
      {
        "text": "Только размер",
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
        "text": "FAT32",
        "isCorrect": false
      },
      {
        "text": "NTFS",
        "isCorrect": true
      },
      {
        "text": "EXT2",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 160,
    "question": "Совокупность программ, обеспечивающих доступ к данным на носителе информации называется…",
    "answers": [
      {
        "text": "BIOS",
        "isCorrect": false
      },
      {
        "text": "Драйвер",
        "isCorrect": true
      },
      {
        "text": "Операционная система",
        "isCorrect": false
      },
      {
        "text": "Архиватор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 161,
    "question": "Какой тип данных не может храниться в файле?",
    "answers": [
      {
        "text": "Текст",
        "isCorrect": false
      },
      {
        "text": "Числа",
        "isCorrect": false
      },
      {
        "text": "Команды микропроцессора",
        "isCorrect": true
      },
      {
        "text": "Графика",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 162,
    "question": "Как называется именованная область внешней памяти, выделенная для хранения массива данных?",
    "answers": [
      {
        "text": "Файл",
        "isCorrect": true
      },
      {
        "text": "Папка",
        "isCorrect": false
      },
      {
        "text": "Диск",
        "isCorrect": false
      },
      {
        "text": "Сектор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 163,
    "question": "Как называется именованная совокупность данных на внешнем носителе информации?",
    "answers": [
      {
        "text": "Папка",
        "isCorrect": true
      },
      {
        "text": "Файл",
        "isCorrect": false
      },
      {
        "text": "Диск",
        "isCorrect": false
      },
      {
        "text": "Блок",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 164,
    "question": "Какова скорость последовательного чтения накопителей DVD?",
    "answers": [
      {
        "text": "1,32 МБ/с",
        "isCorrect": false
      },
      {
        "text": "11 МБ/с",
        "isCorrect": true
      },
      {
        "text": "150 МБ/с",
        "isCorrect": false
      },
      {
        "text": "1 ГБ/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 165,
    "question": "Какова скорость последовательного чтения накопителей CD – ROM?",
    "answers": [
      {
        "text": "1,32 МБ/с",
        "isCorrect": true
      },
      {
        "text": "11 МБ/с",
        "isCorrect": false
      },
      {
        "text": "150 МБ/с",
        "isCorrect": false
      },
      {
        "text": "1 ГБ/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 166,
    "question": "Какова скорость последовательного чтения жестких магнитных дисков?",
    "answers": [
      {
        "text": "11 МБ/с",
        "isCorrect": false
      },
      {
        "text": "50–150 МБ/с",
        "isCorrect": true
      },
      {
        "text": "1,32 МБ/с",
        "isCorrect": false
      },
      {
        "text": "1 ГБ/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 167,
    "question": "Какова скорость последовательного чтения гибких магнитных дисков?",
    "answers": [
      {
        "text": "0,05–0,5 МБ/с",
        "isCorrect": true
      },
      {
        "text": "50–150 МБ/с",
        "isCorrect": false
      },
      {
        "text": "1,32 МБ/с",
        "isCorrect": false
      },
      {
        "text": "11 МБ/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 168,
    "question": "Чему равно время доступа накопителей DVD?",
    "answers": [
      {
        "text": "100–200 мс",
        "isCorrect": false
      },
      {
        "text": "150–200 мс",
        "isCorrect": true
      },
      {
        "text": "1–10 мс",
        "isCorrect": false
      },
      {
        "text": "0,5–1 мс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 169,
    "question": "Чему равно время доступа накопителей CD-ROM?",
    "answers": [
      {
        "text": "100–200 мс",
        "isCorrect": true
      },
      {
        "text": "1–10 мс",
        "isCorrect": false
      },
      {
        "text": "0,5–1 мс",
        "isCorrect": false
      },
      {
        "text": "10–50 мс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 170,
    "question": "Чему равно время доступа накопителей на жестких магнитных дисках?",
    "answers": [
      {
        "text": "0,5–10 мс",
        "isCorrect": true
      },
      {
        "text": "100–200 мс",
        "isCorrect": false
      },
      {
        "text": "1–50 мс",
        "isCorrect": false
      },
      {
        "text": "10–50 с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 171,
    "question": "Чему равно время доступа накопителей на гибких магнитных дисках?",
    "answers": [
      {
        "text": "100–200 мс",
        "isCorrect": false
      },
      {
        "text": "20–50 мс",
        "isCorrect": true
      },
      {
        "text": "0,5–1 мс",
        "isCorrect": false
      },
      {
        "text": "1–10 мс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 172,
    "question": "Наиболее полное определение носителя информации:",
    "answers": [
      {
        "text": "Устройство хранения данных",
        "isCorrect": true
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      },
      {
        "text": "Кэш",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 173,
    "question": "Что такое абсолютный адрес?",
    "answers": [
      {
        "text": "Адрес в регистре",
        "isCorrect": false
      },
      {
        "text": "Адрес, фиксированный для всей системы",
        "isCorrect": true
      },
      {
        "text": "Относительный адрес",
        "isCorrect": false
      },
      {
        "text": "Адрес в файле",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 174,
    "question": "Емкость жестких дисков современных компьютеров равна…",
    "answers": [
      {
        "text": "128–500 МБ",
        "isCorrect": false
      },
      {
        "text": "500 ГБ – 10 ТБ",
        "isCorrect": true
      },
      {
        "text": "1–10 ГБ",
        "isCorrect": false
      },
      {
        "text": "1–5 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 175,
    "question": "Емкость кэш памяти современных компьютеров равна…",
    "answers": [
      {
        "text": "32–256 КБ",
        "isCorrect": true
      },
      {
        "text": "1–4 МБ",
        "isCorrect": false
      },
      {
        "text": "1–10 ГБ",
        "isCorrect": false
      },
      {
        "text": "512–1024 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 176,
    "question": "Емкость оперативной памяти современных компьютеров равна…",
    "answers": [
      {
        "text": "2–128 МБ",
        "isCorrect": false
      },
      {
        "text": "4–128 ГБ",
        "isCorrect": true
      },
      {
        "text": "1–4 КБ",
        "isCorrect": false
      },
      {
        "text": "512–1024 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 177,
    "question": "Емкость ПЗУ, используемой для BIOS не превышает…",
    "answers": [
      {
        "text": "128–512 КБ",
        "isCorrect": true
      },
      {
        "text": "1–2 МБ",
        "isCorrect": false
      },
      {
        "text": "2–4 ГБ",
        "isCorrect": false
      },
      {
        "text": "512–1024 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 178,
    "question": "На основе чего создаются «полупостоянные» ПЗУ?",
    "answers": [
      {
        "text": "128–512 КБ",
        "isCorrect": true
      },
      {
        "text": "1–2 МБ",
        "isCorrect": false
      },
      {
        "text": "2–4 ГБ",
        "isCorrect": false
      },
      {
        "text": "512–1024 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 179,
    "question": "ПЗУ используется для хранения…",
    "answers": [
      {
        "text": "Программ, необходимых для запуска ПК",
        "isCorrect": true
      },
      {
        "text": "Временных данных",
        "isCorrect": false
      },
      {
        "text": "Файлов пользователя",
        "isCorrect": false
      },
      {
        "text": "Видео",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 180,
    "question": "ПЗУ не используется для хранения…",
    "answers": [
      {
        "text": "BIOS",
        "isCorrect": false
      },
      {
        "text": "Операционной системы",
        "isCorrect": false
      },
      {
        "text": "Временных данных",
        "isCorrect": true
      },
      {
        "text": "Процессов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 181,
    "question": "Что представляет собой оперативная память?",
    "answers": [
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Временное хранилище данных и команд",
        "isCorrect": true
      },
      {
        "text": "Кэш",
        "isCorrect": false
      },
      {
        "text": "Видеопамять",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 182,
    "question": "Каково назначение оперативной памяти?",
    "answers": [
      {
        "text": "Хранение данных на постоянной основе",
        "isCorrect": false
      },
      {
        "text": "Временное хранение и быстрый доступ к данным и программам",
        "isCorrect": true
      },
      {
        "text": "Увеличение объема диска",
        "isCorrect": false
      },
      {
        "text": "Ввод команд",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 183,
    "question": "Что включает в себя основная память?",
    "answers": [
      {
        "text": "ПЗУ и ОЗУ",
        "isCorrect": true
      },
      {
        "text": "Кэш",
        "isCorrect": false
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": false
      },
      {
        "text": "Видеокарту",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 184,
    "question": "Каково назначение регистровой кэш-памяти?",
    "answers": [
      {
        "text": "Временное хранение данных процессора для ускорения работы",
        "isCorrect": true
      },
      {
        "text": "Долговременное хранение файлов",
        "isCorrect": false
      },
      {
        "text": "Хранение BIOS",
        "isCorrect": false
      },
      {
        "text": "Хранение дисковых файлов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 185,
    "question": "Кэш-память имеет такое название потому что…",
    "answers": [
      {
        "text": "Она хранит только программы",
        "isCorrect": false
      },
      {
        "text": "Она хранит данные, чтобы ускорить доступ процессора",
        "isCorrect": true
      },
      {
        "text": "Она подключается напрямую к жёсткому диску",
        "isCorrect": false
      },
      {
        "text": "Она является постоянной память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 186,
    "question": "Какими параметрами характеризуется внешняя память ПК?",
    "answers": [
      {
        "text": "Ёмкость, скорость, тип хранения",
        "isCorrect": true
      },
      {
        "text": "Цвет и размер",
        "isCorrect": false
      },
      {
        "text": "Название производителя",
        "isCorrect": false
      },
      {
        "text": "Тактовая частота",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 187,
    "question": "Что такое системная шина?",
    "answers": [
      {
        "text": "Кабель USB",
        "isCorrect": false
      },
      {
        "text": "Совокупность линий связи, обеспечивающих обмен информацией между всеми устройствами ПК",
        "isCorrect": true
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Контроллер дисков",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 188,
    "question": "Основная часть системной платы - это:",
    "answers": [
      {
        "text": "Процессор",
        "isCorrect": false
      },
      {
        "text": "Микросхема BIOS",
        "isCorrect": false
      },
      {
        "text": "Чипсет",
        "isCorrect": true
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 189,
    "question": "Сколько видов операций существует в булевой алгебре?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "3 (Конъюнкция, дизъюнкция, инверсия)",
        "isCorrect": true
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 190,
    "question": "Что означает понятие «высказывание» в алгебре логики?",
    "answers": [
      {
        "text": "Любое предложение, которое можно оценить как истинное или ложное",
        "isCorrect": true
      },
      {
        "text": "Только числовое выражение",
        "isCorrect": false
      },
      {
        "text": "Только текст",
        "isCorrect": false
      },
      {
        "text": "Только формулу",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 191,
    "question": "Унарные(ая) операции(ия) алгебры логики:",
    "answers": [
      {
        "text": "И, ИЛИ",
        "isCorrect": false
      },
      {
        "text": "НЕ",
        "isCorrect": true
      },
      {
        "text": "XOR",
        "isCorrect": false
      },
      {
        "text": "NAND",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 192,
    "question": "Бинарные(ая) операции(ия) алгебры логики:",
    "answers": [
      {
        "text": "НЕ",
        "isCorrect": false
      },
      {
        "text": "И, ИЛИ",
        "isCorrect": true
      },
      {
        "text": "Инверсия",
        "isCorrect": false
      },
      {
        "text": "Транзистор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 193,
    "question": "Виды операции алгебры логики:",
    "answers": [
      {
        "text": "Арифметические",
        "isCorrect": false
      },
      {
        "text": "Логические",
        "isCorrect": true
      },
      {
        "text": "Памяти",
        "isCorrect": false
      },
      {
        "text": "Дисковые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 194,
    "question": "Для алгебры логики применимы следующие законы:",
    "answers": [
      {
        "text": "Законы Ньютона",
        "isCorrect": false
      },
      {
        "text": "Законы Булева алгебра",
        "isCorrect": true
      },
      {
        "text": "Законы термодинамики",
        "isCorrect": false
      },
      {
        "text": "Законы Ома",
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
        "text": "{–1, 0}",
        "isCorrect": false
      },
      {
        "text": "{0, 2}",
        "isCorrect": false
      },
      {
        "text": "{1, 2}",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 196,
    "question": "Каким является высказывание «Логическая единица соответствует логическому ДА»?",
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
        "text": "Неопределённым",
        "isCorrect": false
      },
      {
        "text": "Контроверсионным",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 197,
    "question": "Каким является высказывание «Микропроцессор является внешним устройством ПК»?",
    "answers": [
      {
        "text": "Истинным",
        "isCorrect": false
      },
      {
        "text": "Ложным",
        "isCorrect": true
      },
      {
        "text": "Неопределённым",
        "isCorrect": false
      },
      {
        "text": "Контроверсионным",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 198,
    "question": "Чему в алгебре логики равно НЕ (1 ИЛИ 0)?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "0",
        "isCorrect": true
      },
      {
        "text": "–1",
        "isCorrect": false
      },
      {
        "text": "0,5",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 199,
    "question": "Чему в алгебре логики равно НЕ (1 И 1)?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "0",
        "isCorrect": true
      },
      {
        "text": "–1",
        "isCorrect": false
      },
      {
        "text": "0,5",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 200,
    "question": "Чему в алгебре логики равно НЕ 0?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "–1",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 201,
    "question": "Чему в алгебре логики равно 1 ИЛИ 0?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "0,5",
        "isCorrect": false
      },
      {
        "text": "–1",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 202,
    "question": "Чему в алгебре логики равно 1 И 0?",
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
        "text": "–1",
        "isCorrect": false
      },
      {
        "text": "0,5",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 203,
    "question": "Чему в алгебре логики равно 1 ИЛИ 1?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "–1",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 204,
    "question": "Чему в алгебре логики равно 1 И 1 ?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "–1",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 205,
    "question": "Логическому нулю соответствует …",
    "answers": [
      {
        "text": "Истина",
        "isCorrect": false
      },
      {
        "text": "Ложь",
        "isCorrect": true
      },
      {
        "text": "Неопределённость",
        "isCorrect": false
      },
      {
        "text": "Отрицание",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 206,
    "question": "Логической единице соответствует …",
    "answers": [
      {
        "text": "Ложь",
        "isCorrect": false
      },
      {
        "text": "Истина",
        "isCorrect": true
      },
      {
        "text": "Отрицание",
        "isCorrect": false
      },
      {
        "text": "Случайное значение",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 207,
    "question": "Инверсии соответствует …",
    "answers": [
      {
        "text": "И",
        "isCorrect": false
      },
      {
        "text": "ИЛИ",
        "isCorrect": false
      },
      {
        "text": "НЕ",
        "isCorrect": true
      },
      {
        "text": "XOR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 208,
    "question": "Конъюнкции соответствует …",
    "answers": [
      {
        "text": "И",
        "isCorrect": true
      },
      {
        "text": "ИЛИ",
        "isCorrect": false
      },
      {
        "text": "НЕ",
        "isCorrect": false
      },
      {
        "text": "XOR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 209,
    "question": "Дизъюнкции соответствует …",
    "answers": [
      {
        "text": "НЕ",
        "isCorrect": false
      },
      {
        "text": "И",
        "isCorrect": false
      },
      {
        "text": "ИЛИ",
        "isCorrect": true
      },
      {
        "text": "XOR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 210,
    "question": "Инверсия - это:",
    "answers": [
      {
        "text": "Логическое И",
        "isCorrect": false
      },
      {
        "text": "Логическое ИЛИ",
        "isCorrect": false
      },
      {
        "text": "Логическое отрицание",
        "isCorrect": true
      },
      {
        "text": "Логическое сложение по модулю 2",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 211,
    "question": "Конъюнкция – это…",
    "answers": [
      {
        "text": "Логическое И",
        "isCorrect": true
      },
      {
        "text": "Логическое ИЛИ",
        "isCorrect": false
      },
      {
        "text": "Логическое НЕ",
        "isCorrect": false
      },
      {
        "text": "Логическое XOR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 212,
    "question": "Дизъюнкция – это…",
    "answers": [
      {
        "text": "Логическое И",
        "isCorrect": false
      },
      {
        "text": "Логическое ИЛИ",
        "isCorrect": true
      },
      {
        "text": "Логическое НЕ",
        "isCorrect": false
      },
      {
        "text": "Логическое XOR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 213,
    "question": "Раздел математической логики, значение всех элементов (функций и аргументов) которой определены в двухэлементном множестве 0 и 1 называют…",
    "answers": [
      {
        "text": "Булевой алгеброй",
        "isCorrect": true
      },
      {
        "text": "Теорией множеств",
        "isCorrect": false
      },
      {
        "text": "Дискретной математикой",
        "isCorrect": false
      },
      {
        "text": "Линейной алгеброй",
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
        "isCorrect": false
      },
      {
        "text": "2032",
        "isCorrect": true
      },
      {
        "text": "2102",
        "isCorrect": false
      },
      {
        "text": "2120",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 215,
    "question": "Переведите число 1A из шестнадцатеричной в двоичную систему счисления.",
    "answers": [
      {
        "text": "11010",
        "isCorrect": true
      },
      {
        "text": "10110",
        "isCorrect": false
      },
      {
        "text": "11100",
        "isCorrect": false
      },
      {
        "text": "10011",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 216,
    "question": "Устройства, использующиеся для связи с приборами и другими средствами автоматизации и для подключения ПК к каналам связи, к другим ЭВМ и вычислительным сетям- это…",
    "answers": [
      {
        "text": "Видеокарты",
        "isCorrect": false
      },
      {
        "text": "Сетевые интерфейсы",
        "isCorrect": true
      },
      {
        "text": "Жёсткие диски",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 217,
    "question": "Печатающие устройства для регистрации информации на бумажный носитель - это…",
    "answers": [
      {
        "text": "Принтеры",
        "isCorrect": true
      },
      {
        "text": "Сканеры",
        "isCorrect": false
      },
      {
        "text": "Мониторы",
        "isCorrect": false
      },
      {
        "text": "Клавиатуры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 218,
    "question": "Устройство для автоматического считывания с бумажных носителей и ввода в ПК машинописных текстов, графиков, рисунков, чертежей-это…",
    "answers": [
      {
        "text": "Принтер",
        "isCorrect": false
      },
      {
        "text": "Сканер",
        "isCorrect": true
      },
      {
        "text": "Мышь",
        "isCorrect": false
      },
      {
        "text": "Модем",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 219,
    "question": "Устройство для ручного ввода числовой, текстовой и управляющей информации в ПК- это…",
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
        "text": "Сканер",
        "isCorrect": false
      },
      {
        "text": "Принтер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 220,
    "question": "Что такое синхронизация данных",
    "answers": [
      {
        "text": "Процесс передачи данных",
        "isCorrect": false
      },
      {
        "text": "Процесс согласования времени передачи данных между устройствами",
        "isCorrect": true
      },
      {
        "text": "Процесс хранения данных",
        "isCorrect": false
      },
      {
        "text": "Процесс кодирования",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 221,
    "question": "Процессы передачи и приема данных, обратные синхронным называются…",
    "answers": [
      {
        "text": "Асинхронными",
        "isCorrect": true
      },
      {
        "text": "Дуплексными",
        "isCorrect": false
      },
      {
        "text": "Полудуплексными",
        "isCorrect": false
      },
      {
        "text": "Симплексными",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 222,
    "question": "В каком случае процессы называются синхронными?",
    "answers": [
      {
        "text": "Когда передача и прием данных происходят независимо",
        "isCorrect": false
      },
      {
        "text": "Когда передача и прием данных согласованы по времени",
        "isCorrect": true
      },
      {
        "text": "Когда данные не передаются",
        "isCorrect": false
      },
      {
        "text": "Когда используется флэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 223,
    "question": "В каком режиме передачи данных передача происходит одновременно с приемом данных?",
    "answers": [
      {
        "text": "Симплекс",
        "isCorrect": false
      },
      {
        "text": "Полудуплекс",
        "isCorrect": false
      },
      {
        "text": "Дуплекс",
        "isCorrect": true
      },
      {
        "text": "Асинхронный",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 224,
    "question": "В каком режиме передачи данных передача происходит только в одном направлении?",
    "answers": [
      {
        "text": "Дуплекс",
        "isCorrect": false
      },
      {
        "text": "Симплекс",
        "isCorrect": true
      },
      {
        "text": "Полудуплекс",
        "isCorrect": false
      },
      {
        "text": "Асинхронный",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 225,
    "question": "Перечислите виды режимов передачи данных:",
    "answers": [
      {
        "text": "Симплекс, полудуплекс, дуплекс",
        "isCorrect": true
      },
      {
        "text": "USB, PCI, COM",
        "isCorrect": false
      },
      {
        "text": "RISC, CISC",
        "isCorrect": false
      },
      {
        "text": "LIFO, FIFO",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 226,
    "question": "По степени централизации управления вычислительные системы делятся на:",
    "answers": [
      {
        "text": "Однопользовательские и многопользовательские",
        "isCorrect": false
      },
      {
        "text": "Централизованные и распределенные",
        "isCorrect": true
      },
      {
        "text": "Мобильные и стационарные",
        "isCorrect": false
      },
      {
        "text": "Десктопные и серверные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 227,
    "question": "Для передачи информации по каналам связи используются коды:",
    "answers": [
      {
        "text": "Двоичные",
        "isCorrect": true
      },
      {
        "text": "Шестнадцатеричные",
        "isCorrect": false
      },
      {
        "text": "Десятичные",
        "isCorrect": false
      },
      {
        "text": "Базовые",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 228,
    "question": "Дуплексный режим –это…",
    "answers": [
      {
        "text": "Передача данных только в одном направлении",
        "isCorrect": false
      },
      {
        "text": "Передача и прием данных одновременно",
        "isCorrect": true
      },
      {
        "text": "Передача данных через флэш-память",
        "isCorrect": false
      },
      {
        "text": "Передача данных с задержкой",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 229,
    "question": "Полудуплексный режим –это…",
    "answers": [
      {
        "text": "Одновременная передача и прием данных",
        "isCorrect": false
      },
      {
        "text": "Передача и прием данных поочередно",
        "isCorrect": true
      },
      {
        "text": "Передача данных только в одном направлении",
        "isCorrect": false
      },
      {
        "text": "Асинхронная передача данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 230,
    "question": "Симплексный режим – это…",
    "answers": [
      {
        "text": "Передача данных только в одном направлении",
        "isCorrect": true
      },
      {
        "text": "Одновременная передача и прием",
        "isCorrect": false
      },
      {
        "text": "Передача данных поочередно",
        "isCorrect": false
      },
      {
        "text": "Дуплексная передача",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 231,
    "question": "При обмене данными между узлами используются три метода передачи данных:",
    "answers": [
      {
        "text": "Параллельная, последовательная, радиосвязь",
        "isCorrect": true
      },
      {
        "text": "Только последовательная",
        "isCorrect": false
      },
      {
        "text": "Только параллельная",
        "isCorrect": false
      },
      {
        "text": "USB, HDMI, COM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 232,
    "question": "Связные интерфейсы обеспечивают передачу данных на любые расстояния с небольшой скоростью в пределах…",
    "answers": [
      {
        "text": "Нескольких метров",
        "isCorrect": false
      },
      {
        "text": "Нескольких километров",
        "isCorrect": true
      },
      {
        "text": "Нескольких сантиметров",
        "isCorrect": false
      },
      {
        "text": "Нескольких сотен метров",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 233,
    "question": "Шины – это…",
    "answers": [
      {
        "text": "Кабели для подключения принтера",
        "isCorrect": false
      },
      {
        "text": "Совокупность линий связи для передачи данных между устройствами ПК",
        "isCorrect": true
      },
      {
        "text": "Память процессора",
        "isCorrect": false
      },
      {
        "text": "Видеокарты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 234,
    "question": "При какой организации внутримашинного интерфейса все блоки ПК связаны друг с другом через общую или системную шину?",
    "answers": [
      {
        "text": "Локальная шина",
        "isCorrect": false
      },
      {
        "text": "Общая (системная) шина",
        "isCorrect": true
      },
      {
        "text": "Сетевой интерфейс",
        "isCorrect": false
      },
      {
        "text": "USB",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 235,
    "question": "Последовательной интерфейс обладает пропускной способностью порядка…",
    "answers": [
      {
        "text": "Несколько бит в секунду",
        "isCorrect": false
      },
      {
        "text": "Несколько килобит в секунду",
        "isCorrect": false
      },
      {
        "text": "Несколько сотен килобит в секунду",
        "isCorrect": true
      },
      {
        "text": "Несколько гигабит в секунду",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 236,
    "question": "Параллельный интерфейс обладает пропускной способностью порядка…",
    "answers": [
      {
        "text": "Несколько бит в секунду",
        "isCorrect": false
      },
      {
        "text": "Несколько килобит в секунду",
        "isCorrect": false
      },
      {
        "text": "Несколько мегабит в секунду",
        "isCorrect": true
      },
      {
        "text": "Несколько терабит в секунду",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 237,
    "question": "Пункты системного интерфейса ПК, через которые процессор обменивается информацией с другими устройствами-это…",
    "answers": [
      {
        "text": "Порты",
        "isCorrect": true
      },
      {
        "text": "Процессоры",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      },
      {
        "text": "Микросхемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 238,
    "question": "Шины общего назначения, позволяющие подключать большое число самых разнообразных устройств-это…",
    "answers": [
      {
        "text": "Системные шины",
        "isCorrect": true
      },
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "PCI",
        "isCorrect": false
      },
      {
        "text": "COM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 239,
    "question": "При какой организации внутримашинного интерфейса каждый блок ПК связан с прочими блоками своими локальными проводами?",
    "answers": [
      {
        "text": "Системная шина",
        "isCorrect": false
      },
      {
        "text": "Локальные соединения",
        "isCorrect": true
      },
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "Ethernet",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 240,
    "question": "Обслуживает процедуры прерывания, принимает запрос на прерывание от внешних устройств, определяет уровень приоритета этого запроса и выдает сигнал прерывания в процессор…",
    "answers": [
      {
        "text": "Контроллер прерываний",
        "isCorrect": true
      },
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Тактовый генератор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 241,
    "question": "Какая плата за счет параллельной работы с процессором значительно ускоряет выполнение процедур ввода-вывода при обслуживании нескольких внешних устройств; освобождает процессор от обработки процедур ввода-вывода, в т.ч. реализуют и режим прямого доступа к памяти?",
    "answers": [
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Плата DMA",
        "isCorrect": true
      },
      {
        "text": "Звуковая карта",
        "isCorrect": false
      },
      {
        "text": "Сетевая карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 242,
    "question": "Какая плата освобождает процессор от прямого управления накопителями на магнитных дисках, что существенно повышает эффективное быстродействие ПК?",
    "answers": [
      {
        "text": "Контроллер дисков",
        "isCorrect": true
      },
      {
        "text": "Звуковая карта",
        "isCorrect": false
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Сетевая карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 243,
    "question": "Базовая система ввода-вывода – микросхема, установленная на материнской плате. Назовите её.",
    "answers": [
      {
        "text": "BIOS",
        "isCorrect": true
      },
      {
        "text": "ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Кэш",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 244,
    "question": "Устройство, необходимое для редактирования и вывода звука, посредством звуковых колонок-это…",
    "answers": [
      {
        "text": "Звуковая карта",
        "isCorrect": true
      },
      {
        "text": "Микрофон",
        "isCorrect": false
      },
      {
        "text": "Модем",
        "isCorrect": false
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 245,
    "question": "Что предназначено для постоянного хранения информации, используемой при работе компьютера: операционной системы, документов, игр и т.д.?",
    "answers": [
      {
        "text": "ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": true
      },
      {
        "text": "Кэш",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 246,
    "question": "Контроллер, предназначенный для работы в графическом режиме - …",
    "answers": [
      {
        "text": "Видеокарта",
        "isCorrect": true
      },
      {
        "text": "Звуковая карта",
        "isCorrect": false
      },
      {
        "text": "Контроллер дисков",
        "isCorrect": false
      },
      {
        "text": "Сетевая карта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 247,
    "question": "Название основной платы компьютера –",
    "answers": [
      {
        "text": "Видеокарта",
        "isCorrect": false
      },
      {
        "text": "Материнская плата",
        "isCorrect": true
      },
      {
        "text": "ОЗУ",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 248,
    "question": "Какая память обеспечивает работу с программным обеспечением?",
    "answers": [
      {
        "text": "Постоянная",
        "isCorrect": false
      },
      {
        "text": "Оперативная",
        "isCorrect": true
      },
      {
        "text": "Кэш",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 249,
    "question": "Память первого уровня – небольшая (несколько десятков килобайт) сверхбыстрая память, предназначена для хранения промежуточных результатов –",
    "answers": [
      {
        "text": "ОЗУ",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": true
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 250,
    "question": "В каком году был создан первый микропроцессор?",
    "answers": [
      {
        "text": "1969",
        "isCorrect": false
      },
      {
        "text": "1971",
        "isCorrect": true
      },
      {
        "text": "1973",
        "isCorrect": false
      },
      {
        "text": "1975",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 251,
    "question": "Самым главным элементом в компьютере, его «мозгом» является …",
    "answers": [
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Центральный процессор",
        "isCorrect": true
      },
      {
        "text": "Жёсткий диск",
        "isCorrect": false
      },
      {
        "text": "Видеокарта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 252,
    "question": "Название передатчика в виде светодиода и приемника в виде фотодиода, работающих в инфракрасном диапазоне.",
    "answers": [
      {
        "text": "LED-порт",
        "isCorrect": false
      },
      {
        "text": "ИК-порт",
        "isCorrect": true
      },
      {
        "text": "USB-порт",
        "isCorrect": false
      },
      {
        "text": "HDMI-порт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 253,
    "question": "Что такое параллельная обработка?",
    "answers": [
      {
        "text": "Последовательное выполнение команд",
        "isCorrect": false
      },
      {
        "text": "Одновременное выполнение нескольких операций",
        "isCorrect": true
      },
      {
        "text": "Выполнение одной команды за много тактов",
        "isCorrect": false
      },
      {
        "text": "Передача данных между памятью и процессором",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 254,
    "question": "Выберите порт соответствующий данному определению - порт, осуществляющий ввод /вывод данных байтами (все биты одновременно):",
    "answers": [
      {
        "text": "Последовательный порт",
        "isCorrect": false
      },
      {
        "text": "Параллельный порт",
        "isCorrect": true
      },
      {
        "text": "USB-порт",
        "isCorrect": false
      },
      {
        "text": "COM-порт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 255,
    "question": "Сколько ячеек зарезервировано для каждого порта ввода-вывода в памяти ввода-вывода?",
    "answers": [
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      },
      {
        "text": "8",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 256,
    "question": "Все порты ввода-вывода (ПВВ) AVR-микроконтроллеров работают по принципу…",
    "answers": [
      {
        "text": "Последовательного обмена",
        "isCorrect": false
      },
      {
        "text": "Прямого доступа к памяти",
        "isCorrect": false
      },
      {
        "text": "Параллельного ввода/вывода",
        "isCorrect": true
      },
      {
        "text": "Динамического адреса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 257,
    "question": "Что для процессора представляет собой операция ввода-вывода?",
    "answers": [
      {
        "text": "Чтение или запись данных в память",
        "isCorrect": false
      },
      {
        "text": "Обмен данными с внешними устройствами",
        "isCorrect": true
      },
      {
        "text": "Выполнение арифметических операций",
        "isCorrect": false
      },
      {
        "text": "Кэширование данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 258,
    "question": "Что называется виртуальной ячейкой, соответствующей внешнему входу (или выходу) в компьютере?",
    "answers": [
      {
        "text": "Регистр",
        "isCorrect": false
      },
      {
        "text": "Порт ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Буфер",
        "isCorrect": false
      },
      {
        "text": "Адрес памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 259,
    "question": "При помощи чего осуществляется управление работой большинства устройств ввода-вывода компьютера?",
    "answers": [
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Контроллер ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Шина данных",
        "isCorrect": false
      },
      {
        "text": "Тактовый генератор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 260,
    "question": "Какие две основные архитектуры существует для построения процессора БД?",
    "answers": [
      {
        "text": "RISC и CISC",
        "isCorrect": true
      },
      {
        "text": "VLIW и DSP",
        "isCorrect": false
      },
      {
        "text": "Intel и AMD",
        "isCorrect": false
      },
      {
        "text": "ARM и x86",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 261,
    "question": "Сколько существует основных архитектур для построения процессора БД?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": true
      },
      {
        "text": "3",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 262,
    "question": "Основное требование к серверу БД –",
    "answers": [
      {
        "text": "Высокая производительность",
        "isCorrect": true
      },
      {
        "text": "Малый размер",
        "isCorrect": false
      },
      {
        "text": "Низкое энергопотребление",
        "isCorrect": false
      },
      {
        "text": "Универсальность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 263,
    "question": "Что является основной частью любой системы “клиент-сервер”?",
    "answers": [
      {
        "text": "Только сервер",
        "isCorrect": false
      },
      {
        "text": "Только клиент",
        "isCorrect": false
      },
      {
        "text": "Клиент и сервер",
        "isCorrect": true
      },
      {
        "text": "База данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 264,
    "question": "Какие черты технология клиент-сервер позаимствовала от мэйнфреймов?",
    "answers": [
      {
        "text": "Распределение ресурсов и централизованное управление",
        "isCorrect": true
      },
      {
        "text": "Однопроцессорность",
        "isCorrect": false
      },
      {
        "text": "Локальный ввод-вывод",
        "isCorrect": false
      },
      {
        "text": "Использование флэш-памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 265,
    "question": "Что предназначена для непосредственной работы пользователя или категории пользователей и обладает ресурсами, соответствующими локальным потребностям данного пользователя?",
    "answers": [
      {
        "text": "Сервер",
        "isCorrect": false
      },
      {
        "text": "Клиент",
        "isCorrect": true
      },
      {
        "text": "Мейнфрейм",
        "isCorrect": false
      },
      {
        "text": "Суперкомпьютер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 266,
    "question": "Какая идея лежит в основе широкого распространения локальных сетей компьютеров?",
    "answers": [
      {
        "text": "Дешёвые процессоры",
        "isCorrect": false
      },
      {
        "text": "Возможность совместного использования ресурсов",
        "isCorrect": true
      },
      {
        "text": "Объединение суперкомпьютеров",
        "isCorrect": false
      },
      {
        "text": "Использование облачных технологий",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 267,
    "question": "В связи с чем открытые системы приобретают еще большее значение и масштабность?",
    "answers": [
      {
        "text": "Стандартизация и совместимость оборудования и ПО",
        "isCorrect": true
      },
      {
        "text": "Высокая цена оборудования",
        "isCorrect": false
      },
      {
        "text": "Закрытые протоколы",
        "isCorrect": false
      },
      {
        "text": "Ограничение доступа",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 268,
    "question": "Благодаря чему стало возможным реальное распространение архитектуры \"клиент-сервер\"?",
    "answers": [
      {
        "text": "Высокая производительность процессоров",
        "isCorrect": false
      },
      {
        "text": "Развитие сетевых технологий",
        "isCorrect": true
      },
      {
        "text": "Появление микропроцессоров",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 269,
    "question": "Что построили ученые из группы теоретической астрофизики в 1998 году в Лос-Аламосской национальной лаборатории?",
    "answers": [
      {
        "text": "Суперкомпьютер Avalon",
        "isCorrect": true
      },
      {
        "text": "Первый мейнфрейм",
        "isCorrect": false
      },
      {
        "text": "Персональный компьютер",
        "isCorrect": false
      },
      {
        "text": "Кластер Intel Pentium",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 270,
    "question": "Где в 1998 году астрофизик Michael Warren и другие ученые из группы теоретической астрофизики построили суперкомпьютер Avalon?",
    "answers": [
      {
        "text": "Университет Калифорнии",
        "isCorrect": false
      },
      {
        "text": "Лос-Аламосская национальная лаборатория",
        "isCorrect": true
      },
      {
        "text": "Массачусетский технологический институт",
        "isCorrect": false
      },
      {
        "text": "IBM Research Center",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 271,
    "question": "В каком году в Лос-Аламосской национальной лаборатории астрофизик Michael Warren и другие ученые из группы теоретической астрофизики построили суперкомпьютер Avalon?",
    "answers": [
      {
        "text": "1995",
        "isCorrect": false
      },
      {
        "text": "1998",
        "isCorrect": true
      },
      {
        "text": "2000",
        "isCorrect": false
      },
      {
        "text": "2002",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 272,
    "question": "Как определила компания DEC концепцию кластерной системы, которую она же анонсировала в 1983 году?",
    "answers": [
      {
        "text": "Несколько компьютеров, работающих независимо",
        "isCorrect": false
      },
      {
        "text": "Система, объединяющая несколько машин в единый ресурс",
        "isCorrect": true
      },
      {
        "text": "Персональные компьютеры в сети",
        "isCorrect": false
      },
      {
        "text": "Однопроцессорные серверы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 273,
    "question": "В каком году компания DEC первой анонсировала концепцию кластерной системы?",
    "answers": [
      {
        "text": "1980",
        "isCorrect": false
      },
      {
        "text": "1983",
        "isCorrect": true
      },
      {
        "text": "1985",
        "isCorrect": false
      },
      {
        "text": "1990",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 274,
    "question": "Какая компания первой анонсировала концепцию кластерной системы в 1983 году?",
    "answers": [
      {
        "text": "IBM",
        "isCorrect": false
      },
      {
        "text": "DEC",
        "isCorrect": true
      },
      {
        "text": "Intel",
        "isCorrect": false
      },
      {
        "text": "HP",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 275,
    "question": "Дисковый массив RAID —",
    "answers": [
      {
        "text": "Группа жёстких дисков, объединённых для повышения производительности и надёжности",
        "isCorrect": true
      },
      {
        "text": "Тип флэш-памяти",
        "isCorrect": false
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Микропроцессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 276,
    "question": "Какое понятие означает наличие программного обеспечения, дающего возможность пользователям, администраторам и прикладным программам считать, что имеется только одна сущность, с которой они работают - кластер?",
    "answers": [
      {
        "text": "Виртуализация",
        "isCorrect": true
      },
      {
        "text": "Многопоточность",
        "isCorrect": false
      },
      {
        "text": "Суперкомпьютер",
        "isCorrect": false
      },
      {
        "text": "Параллельная обработка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 277,
    "question": "Вычислительный кластер — это совокупность компьютеров, объединенных в рамках некоторой сети для решения одной задачи, которая для пользователя представляется в качестве единого ресурса. В каких годах корпорация Digital Equipment предложила и реализовала такую концепцию кластера?",
    "answers": [
      {
        "text": "1970-е",
        "isCorrect": false
      },
      {
        "text": "1980-е",
        "isCorrect": true
      },
      {
        "text": "1990-е",
        "isCorrect": false
      },
      {
        "text": "2000-е",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 278,
    "question": "Дайте определение «вычислительный кластер» -",
    "answers": [
      {
        "text": "Один суперкомпьютер",
        "isCorrect": false
      },
      {
        "text": "Несколько компьютеров, объединённых для решения одной задачи",
        "isCorrect": true
      },
      {
        "text": "Мейнфрейм",
        "isCorrect": false
      },
      {
        "text": "Серверная ферма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 279,
    "question": "Как называются слабосвязанные системы, в связи узлов которых используется одна из стандартных сетевых технологий (Fast/Gigabit Ethernet, Myrinet) на базе шинной архитектуры или коммутатора?",
    "answers": [
      {
        "text": "Кластеры",
        "isCorrect": true
      },
      {
        "text": "Суперкомпьютеры",
        "isCorrect": false
      },
      {
        "text": "Мейнфреймы",
        "isCorrect": false
      },
      {
        "text": "Мини-компьютеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 280,
    "question": "Как называется завершенная компьютерная система, обладающая всем, что требуется для ее функционирования, включая процессоры, память, подсистему ввода/вывода, а также операционную систему, подсистемы, приложения и т.д.?",
    "answers": [
      {
        "text": "Компьютер",
        "isCorrect": true
      },
      {
        "text": "Сервер",
        "isCorrect": false
      },
      {
        "text": "Кластер",
        "isCorrect": false
      },
      {
        "text": "Мейнфрейм",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 281,
    "question": "Как называется связанный набор полноценных компьютеров, используемый в качестве единого ресурса?",
    "answers": [
      {
        "text": "Кластер",
        "isCorrect": true
      },
      {
        "text": "Мейнфрейм",
        "isCorrect": false
      },
      {
        "text": "Суперкомпьютер",
        "isCorrect": false
      },
      {
        "text": "Серверная ферма",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 282,
    "question": "Что является многоканальными устройствами согласования?",
    "answers": [
      {
        "text": "Контроллеры ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Тактовые генераторы",
        "isCorrect": false
      },
      {
        "text": "Жёсткие диски",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 283,
    "question": "Что не включает в себя система телеобработки информации?",
    "answers": [
      {
        "text": "Каналы связи",
        "isCorrect": false
      },
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Портативные носители",
        "isCorrect": true
      },
      {
        "text": "Устройства ввода-вывода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 284,
    "question": "Назовите первых представителей(я) систем распределенной обработки данных?",
    "answers": [
      {
        "text": "DEC VAXcluster",
        "isCorrect": true
      },
      {
        "text": "IBM PC",
        "isCorrect": false
      },
      {
        "text": "Apple Lisa",
        "isCorrect": false
      },
      {
        "text": "Intel Pentium",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 285,
    "question": "Распределенная обработка данных – это…",
    "answers": [
      {
        "text": "Обработка данных на одном компьютере",
        "isCorrect": false
      },
      {
        "text": "Обработка данных на нескольких взаимосвязанных компьютерах",
        "isCorrect": true
      },
      {
        "text": "Параллельная обработка в одной системе",
        "isCorrect": false
      },
      {
        "text": "Хранение данных в базе",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 286,
    "question": "Многомашинные вычислительные системы – это…",
    "answers": [
      {
        "text": "Один суперкомпьютер",
        "isCorrect": false
      },
      {
        "text": "Система из нескольких компьютеров, работающих совместно",
        "isCorrect": true
      },
      {
        "text": "Персональный компьютер",
        "isCorrect": false
      },
      {
        "text": "Мини-компьютер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 287,
    "question": "Что подразумевается под помехоустойчивостью системы связи?",
    "answers": [
      {
        "text": "Способность системы сохранять работоспособность при наличии помех",
        "isCorrect": true
      },
      {
        "text": "Высокая скорость передачи данных",
        "isCorrect": false
      },
      {
        "text": "Уменьшение задержек",
        "isCorrect": false
      },
      {
        "text": "Распределение нагрузки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 288,
    "question": "Дайте определение линии связи?",
    "answers": [
      {
        "text": "Средство передачи данных между устройствами",
        "isCorrect": true
      },
      {
        "text": "Порт ввода-вывода",
        "isCorrect": false
      },
      {
        "text": "Контроллер",
        "isCorrect": false
      },
      {
        "text": "Процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 289,
    "question": "Что происходит при передаче сообщения, когда сигнал поступает на кодирующее устройство (кодер)?",
    "answers": [
      {
        "text": "Сигнал усиливается",
        "isCorrect": false
      },
      {
        "text": "Сигнал преобразуется в определённый код",
        "isCorrect": true
      },
      {
        "text": "Сигнал теряется",
        "isCorrect": false
      },
      {
        "text": "Сигнал отправляется напрямую",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 290,
    "question": "Куда в первую очередь поступает сигнал при передаче сообщения?",
    "answers": [
      {
        "text": "К приемнику",
        "isCorrect": false
      },
      {
        "text": "К кодеру",
        "isCorrect": true
      },
      {
        "text": "К диспетчеру",
        "isCorrect": false
      },
      {
        "text": "К процессору",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 291,
    "question": "Для чего служат источник (передатчик) и получатель (приемник)?",
    "answers": [
      {
        "text": "Для хранения данных",
        "isCorrect": false
      },
      {
        "text": "Для передачи и приёма информации",
        "isCorrect": true
      },
      {
        "text": "Для обработки данных",
        "isCorrect": false
      },
      {
        "text": "Для кодирования",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 292,
    "question": "Для чего используется шина адреса?",
    "answers": [
      {
        "text": "Для передачи данных",
        "isCorrect": false
      },
      {
        "text": "Для передачи адресной информации",
        "isCorrect": true
      },
      {
        "text": "Для увеличения скорости процессора",
        "isCorrect": false
      },
      {
        "text": "Для синхронизации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 293,
    "question": "Чем определяется разрядность шины данных?",
    "answers": [
      {
        "text": "Количеством адресов памяти",
        "isCorrect": false
      },
      {
        "text": "Количеством бит данных, передаваемых одновременно",
        "isCorrect": true
      },
      {
        "text": "Тактовой частотой",
        "isCorrect": false
      },
      {
        "text": "Размером кэша",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 294,
    "question": "Выберите достоинство Инфракрасных излучателей?",
    "answers": [
      {
        "text": "Высокая скорость передачи данных",
        "isCorrect": false
      },
      {
        "text": "Простота и безопасность передачи на небольшие расстояния",
        "isCorrect": true
      },
      {
        "text": "Длинный радиус действия",
        "isCorrect": false
      },
      {
        "text": "Высокая мощность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 295,
    "question": "Какой интерфейс позволяет осуществлять связь между парой устройств, удаленных на расстояние, достигающее нескольких метров?",
    "answers": [
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "ИК (инфракрасный)",
        "isCorrect": true
      },
      {
        "text": "Ethernet",
        "isCorrect": false
      },
      {
        "text": "HDMI",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 296,
    "question": "Какой кабель используют для связи двух компьютеров, удаленных друг от друга на небольшое расстояние, и непосредственное соединение их СОМ-портов?",
    "answers": [
      {
        "text": "Кроссоверный кабель",
        "isCorrect": false
      },
      {
        "text": "Null-modem кабель",
        "isCorrect": true
      },
      {
        "text": "USB кабель",
        "isCorrect": false
      },
      {
        "text": "HDMI кабель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 297,
    "question": "Какой кабель используется для подключения внешних модемов?",
    "answers": [
      {
        "text": "Параллельный",
        "isCorrect": false
      },
      {
        "text": "Последовательный COM-кабель",
        "isCorrect": true
      },
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "RJ45",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 298,
    "question": "Какой порт используется для подключения электронных ключей (Security Devices), предназначенных для защиты от нелицензированного использования ПО?",
    "answers": [
      {
        "text": "COM",
        "isCorrect": false
      },
      {
        "text": "LPT",
        "isCorrect": false
      },
      {
        "text": "Parallel",
        "isCorrect": true
      },
      {
        "text": "USB",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 299,
    "question": "Для чего чаще всего используются СОМ-порты?",
    "answers": [
      {
        "text": "Подключение принтера",
        "isCorrect": false
      },
      {
        "text": "Последовательная передача данных с внешних устройств",
        "isCorrect": true
      },
      {
        "text": "Подключение флэш-памяти",
        "isCorrect": false
      },
      {
        "text": "Подключение монитора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 300,
    "question": "Хост-компьютер общается с устройствами через контроллер. Какие обязанности не входят в Хост?",
    "answers": [
      {
        "text": "Управление USB-топологией",
        "isCorrect": false
      },
      {
        "text": "Планирование передачи данных",
        "isCorrect": false
      },
      {
        "text": "Выработка тактового сигнала",
        "isCorrect": false
      },
      {
        "text": "Хранение прошивки подключённых устройств",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 301,
    "question": "В каком состоянии не могут находиться нисходящие (Downstream) порты хабов?",
    "answers": [
      {
        "text": "Powered",
        "isCorrect": false
      },
      {
        "text": "Enabled",
        "isCorrect": false
      },
      {
        "text": "Disabled",
        "isCorrect": false
      },
      {
        "text": "Upstream",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 302,
    "question": "Что позволяет возможность удаленного пробуждения (Remote Wakeup)?",
    "answers": [
      {
        "text": "Ускорять передачу данных",
        "isCorrect": false
      },
      {
        "text": "Снижать энергопотребление устройства",
        "isCorrect": false
      },
      {
        "text": "Принудительно завершать процессы",
        "isCorrect": false
      },
      {
        "text": "Выводить устройство из режима сна по сигналу",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 303,
    "question": "Сплошные передачи (Bulk Data Transfers) допускаются при:",
    "answers": [
      {
        "text": "Передаче аудио",
        "isCorrect": false
      },
      {
        "text": "Передаче видео",
        "isCorrect": false
      },
      {
        "text": "Управляющих запросах",
        "isCorrect": false
      },
      {
        "text": "Передаче больших объёмов данных без гарантии времени доставки",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 304,
    "question": "Для чего не используется Хаб?",
    "answers": [
      {
        "text": "Расширение числа USB-портов",
        "isCorrect": false
      },
      {
        "text": "Передача питания",
        "isCorrect": false
      },
      {
        "text": "Перенаправление данных",
        "isCorrect": false
      },
      {
        "text": "Буферизация и хранение данных",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 305,
    "question": "Сколько у каждого хаба имеется восходящих портов (Upstream Port), предназначенных для подключения к хосту или хабу верхнего уровня?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": true
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 306,
    "question": "Функции представляют собой устройства, способные передавать или принимать данные или управляющую информацию по шине. Примерами функций не являются:",
    "answers": [
      {
        "text": "Клавиатура",
        "isCorrect": false
      },
      {
        "text": "Мышь",
        "isCorrect": false
      },
      {
        "text": "Принтер",
        "isCorrect": false
      },
      {
        "text": "USB-кабель",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 307,
    "question": "Как расшифровывается аббревиатура LPT порта?",
    "answers": [
      {
        "text": "Last Personal Terminal",
        "isCorrect": false
      },
      {
        "text": "Local Port Transmission",
        "isCorrect": false
      },
      {
        "text": "Line Printer Terminal",
        "isCorrect": true
      },
      {
        "text": "Logic Port Transport",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 308,
    "question": "Что можно подключить к LPT-порту?",
    "answers": [
      {
        "text": "Флешку",
        "isCorrect": false
      },
      {
        "text": "USB-хаб",
        "isCorrect": false
      },
      {
        "text": "Принтер",
        "isCorrect": true
      },
      {
        "text": "HDMI-монитор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 309,
    "question": "Как по другому называется LPT-порт?",
    "answers": [
      {
        "text": "COM",
        "isCorrect": false
      },
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "Параллельный порт",
        "isCorrect": true
      },
      {
        "text": "MIDI",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 310,
    "question": "К какому интерфейсу относиться международный стандарт для подключения периферийных устройств персонального компьютера IEEE 1284?",
    "answers": [
      {
        "text": "Серийному",
        "isCorrect": false
      },
      {
        "text": "USB",
        "isCorrect": false
      },
      {
        "text": "VGA",
        "isCorrect": false
      },
      {
        "text": "Параллельному",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 311,
    "question": "Для чего не используются внешние шины?",
    "answers": [
      {
        "text": "Подключения устройств",
        "isCorrect": false
      },
      {
        "text": "Обмена данными",
        "isCorrect": false
      },
      {
        "text": "Расширения функциональности",
        "isCorrect": false
      },
      {
        "text": "Обработки данных внутри процессора",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 312,
    "question": "Какой тип передачи данных не допускает Архитектура USB?",
    "answers": [
      {
        "text": "Isochronous",
        "isCorrect": false
      },
      {
        "text": "Interrupt",
        "isCorrect": false
      },
      {
        "text": "Bulk",
        "isCorrect": false
      },
      {
        "text": "Synchronous packet switching",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 313,
    "question": "Что используется для низкой скорости передачи сигналов USB?",
    "answers": [
      {
        "text": "90-омный кабель",
        "isCorrect": false
      },
      {
        "text": "Экран без витой пары",
        "isCorrect": false
      },
      {
        "text": "Сигнальная линия с частотой 1,5 Мбит/с",
        "isCorrect": true
      },
      {
        "text": "Две витые пары",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 314,
    "question": "Что используется для полной скорости передачи сигналов USB?",
    "answers": [
      {
        "text": "1,5 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "12 Мбит/с",
        "isCorrect": true
      },
      {
        "text": "480 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "5 Гбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 315,
    "question": "Низкая скорость передачи сигналов USB составляет:",
    "answers": [
      {
        "text": "12 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "5 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "1,5 Мбит/с",
        "isCorrect": true
      },
      {
        "text": "0,5 Мбит/с",
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
        "text": "480 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "1,5 Мбит/с",
        "isCorrect": false
      },
      {
        "text": "5 Гбит/с",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 317,
    "question": "Сколько базовых типа передачи данных допускает Архитектура USB?",
    "answers": [
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": true
      },
      {
        "text": "5",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 318,
    "question": "Хост-контроллер (Host Controller), управляющий работой всей системы USB, является:",
    "answers": [
      {
        "text": "Программой ОС",
        "isCorrect": false
      },
      {
        "text": "Внешним модулем",
        "isCorrect": false
      },
      {
        "text": "Аппаратным блоком управления USB",
        "isCorrect": true
      },
      {
        "text": "Самостоятельным ПК",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 319,
    "question": "Что управляет работой всей системы USB?",
    "answers": [
      {
        "text": "Хаб",
        "isCorrect": false
      },
      {
        "text": "Драйвер",
        "isCorrect": false
      },
      {
        "text": "Хост-контроллер",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 320,
    "question": "В каком году была опубликована версия 1.0 Универсальной последовательной шины (USB)?",
    "answers": [
      {
        "text": "1993",
        "isCorrect": false
      },
      {
        "text": "1994",
        "isCorrect": false
      },
      {
        "text": "1996",
        "isCorrect": true
      },
      {
        "text": "1998",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 321,
    "question": "USB не обеспечивает:",
    "answers": [
      {
        "text": "Питание",
        "isCorrect": false
      },
      {
        "text": "Подключение устройств",
        "isCorrect": false
      },
      {
        "text": "Горячее подключение",
        "isCorrect": false
      },
      {
        "text": "Гарантированную задержку для Bulk-передач",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 322,
    "question": "Что означает «конвейерное выполнение команд»?",
    "answers": [
      {
        "text": "Ввод данных без задержек",
        "isCorrect": false
      },
      {
        "text": "Одновременное выполнение разных стадий нескольких команд",
        "isCorrect": true
      },
      {
        "text": "Параллельная обработка потоков",
        "isCorrect": false
      },
      {
        "text": "Сверхскалярность",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 323,
    "question": "В каком процессоре реализовалась возможность многозадачной работы?",
    "answers": [
      {
        "text": "4004",
        "isCorrect": false
      },
      {
        "text": "8008",
        "isCorrect": false
      },
      {
        "text": "Intel 80286",
        "isCorrect": true
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
        "text": "ALU",
        "isCorrect": false
      },
      {
        "text": "Регистров",
        "isCorrect": false
      },
      {
        "text": "Контроллера прерываний",
        "isCorrect": false
      },
      {
        "text": "Оперативной памяти",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 325,
    "question": "В современных компьютерах процессоры выполнены в виде компактного модуля размерами около…",
    "answers": [
      {
        "text": "1×1 см",
        "isCorrect": false
      },
      {
        "text": "2×2 см",
        "isCorrect": true
      },
      {
        "text": "5×5 см",
        "isCorrect": false
      },
      {
        "text": "10×10 см",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 326,
    "question": "Укажите фирму по производству процессоров для персональных компьютеров?",
    "answers": [
      {
        "text": "Sony",
        "isCorrect": false
      },
      {
        "text": "LG",
        "isCorrect": false
      },
      {
        "text": "Panasonic",
        "isCorrect": false
      },
      {
        "text": "Intel",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 327,
    "question": "Какой была стоимость первого микропроцессора Intel 4004?",
    "answers": [
      {
        "text": "$10",
        "isCorrect": false
      },
      {
        "text": "$50",
        "isCorrect": false
      },
      {
        "text": "$60",
        "isCorrect": true
      },
      {
        "text": "$100",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 328,
    "question": "Назовите основные характеристики процессора:",
    "answers": [
      {
        "text": "Цвет корпуса",
        "isCorrect": false
      },
      {
        "text": "Год выпуска",
        "isCorrect": false
      },
      {
        "text": "Разрядность, частота, кэш",
        "isCorrect": true
      },
      {
        "text": "Масса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 329,
    "question": "Когда началась история создания микропроцессоров?",
    "answers": [
      {
        "text": "1960",
        "isCorrect": false
      },
      {
        "text": "1965",
        "isCorrect": false
      },
      {
        "text": "1971",
        "isCorrect": true
      },
      {
        "text": "1975",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 330,
    "question": "Назовите две фирмы - производителя микропроцессоров?",
    "answers": [
      {
        "text": "Samsung и LG",
        "isCorrect": false
      },
      {
        "text": "HP и Dell",
        "isCorrect": false
      },
      {
        "text": "Intel и AMD",
        "isCorrect": true
      },
      {
        "text": "Philips и Hyundai",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 331,
    "question": "Укажите верный алгоритм работы процессора: 1.Изменение списка команд. 2.Считывание команды. 3.Расшифровывание машинной команды дешифратором. 4.Выполнение расшифрованной операции арифметико-логическим устройством",
    "answers": [
      {
        "text": "1-2-3-4",
        "isCorrect": false
      },
      {
        "text": "2-1-3-4",
        "isCorrect": false
      },
      {
        "text": "2-3-4-1",
        "isCorrect": true
      },
      {
        "text": "4-3-2-1",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 332,
    "question": "Методы увеличения производительности процессора?",
    "answers": [
      {
        "text": "Увеличение размера корпуса",
        "isCorrect": false
      },
      {
        "text": "Уменьшение веса",
        "isCorrect": false
      },
      {
        "text": "Конвейеризация, увеличение частоты, кэширование",
        "isCorrect": true
      },
      {
        "text": "Увеличение тепловыделения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 333,
    "question": "Сколько транзисторов содержал первый микропроцессор Intel 40044?",
    "answers": [
      {
        "text": "500",
        "isCorrect": false
      },
      {
        "text": "1000",
        "isCorrect": false
      },
      {
        "text": "2000",
        "isCorrect": false
      },
      {
        "text": "2300",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 334,
    "question": "Многоядерные процессоры содержат…",
    "answers": [
      {
        "text": "Один ALU",
        "isCorrect": false
      },
      {
        "text": "Несколько видеоядeр",
        "isCorrect": false
      },
      {
        "text": "Несколько полноценных вычислительных ядер",
        "isCorrect": true
      },
      {
        "text": "Один набор регистров",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 335,
    "question": "Какая из перечисленных функций микропроцессора неверна?",
    "answers": [
      {
        "text": "Выполнение команд",
        "isCorrect": false
      },
      {
        "text": "Управление устройствами",
        "isCorrect": false
      },
      {
        "text": "Арифметика",
        "isCorrect": false
      },
      {
        "text": "Хранение долгосрочных данных",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 336,
    "question": "Первые микропроцессоры появились в 1970-х и применялись в электронных калькуляторах. Какая арифметика в них использовалась?",
    "answers": [
      {
        "text": "Двоичная с плавающей точкой",
        "isCorrect": false
      },
      {
        "text": "IEEE 754",
        "isCorrect": false
      },
      {
        "text": "Десятичная",
        "isCorrect": true
      },
      {
        "text": "Логарифмическая",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 337,
    "question": "Где применялись первые микропроцессоры?",
    "answers": [
      {
        "text": "ПК",
        "isCorrect": false
      },
      {
        "text": "Серверы",
        "isCorrect": false
      },
      {
        "text": "Смартфоны",
        "isCorrect": false
      },
      {
        "text": "Калькуляторы",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 338,
    "question": "В чём измеряется тактовая частота микропроцессора?",
    "answers": [
      {
        "text": "Байтах",
        "isCorrect": false
      },
      {
        "text": "Вольтах",
        "isCorrect": false
      },
      {
        "text": "Герцах",
        "isCorrect": true
      },
      {
        "text": "Джоулях",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 339,
    "question": "Когда был выпущен Apple II?",
    "answers": [
      {
        "text": "1975",
        "isCorrect": false
      },
      {
        "text": "1977",
        "isCorrect": true
      },
      {
        "text": "1979",
        "isCorrect": false
      },
      {
        "text": "1981",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 340,
    "question": "Где формируется адрес команды?",
    "answers": [
      {
        "text": "В аккумуляторе",
        "isCorrect": false
      },
      {
        "text": "В ALU",
        "isCorrect": false
      },
      {
        "text": "В счетчике команд",
        "isCorrect": true
      },
      {
        "text": "В дешифраторе",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 341,
    "question": "Чьё назначение формировать последовательности тактовых импульсов, которые позволяют провести временное развертывание цикла работы процессора?",
    "answers": [
      {
        "text": "ALU",
        "isCorrect": false
      },
      {
        "text": "Регистры",
        "isCorrect": false
      },
      {
        "text": "Генератор тактовой частоты",
        "isCorrect": true
      },
      {
        "text": "Таймер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 342,
    "question": "Что такое УС?",
    "answers": [
      {
        "text": "Устройство Слежения",
        "isCorrect": false
      },
      {
        "text": "Универсальный Слот",
        "isCorrect": false
      },
      {
        "text": "Устройство Связи",
        "isCorrect": true
      },
      {
        "text": "Управляющий Сигнал",
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
        "isCorrect": false
      },
      {
        "text": "Блок установки опор",
        "isCorrect": false
      },
      {
        "text": "Блок управления и обмена",
        "isCorrect": true
      },
      {
        "text": "Базовый уровень организации",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 344,
    "question": "Что такое БАК?",
    "answers": [
      {
        "text": "Блок аналоговых кодов",
        "isCorrect": false
      },
      {
        "text": "Блок арифметико-логических команд",
        "isCorrect": true
      },
      {
        "text": "Блок ассинхронных каналов",
        "isCorrect": false
      },
      {
        "text": "Базовый аккумуляторный контур",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 345,
    "question": "Что такое БП?",
    "answers": [
      {
        "text": "Блок памяти",
        "isCorrect": false
      },
      {
        "text": "Блок переключения",
        "isCorrect": false
      },
      {
        "text": "Блок питания",
        "isCorrect": true
      },
      {
        "text": "Блок передачи",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 401,
    "question": "Для чего предназначена интерфейсная часть микропроцессора?",
    "answers": [
      {
        "text": "Для выполнения арифметических операций",
        "isCorrect": false
      },
      {
        "text": "Для хранения программ",
        "isCorrect": false
      },
      {
        "text": "Для связи микропроцессора с внешними устройствами",
        "isCorrect": true
      },
      {
        "text": "Для выполнения команд ветвления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 402,
    "question": "На сколько функциональных частей можно разделить микропроцессор?",
    "answers": [
      {
        "text": "На 2",
        "isCorrect": false
      },
      {
        "text": "На 3 АЛУ, блок управления, интерфейсная часть",
        "isCorrect": true
      },
      {
        "text": "На 4",
        "isCorrect": false
      },
      {
        "text": "На 5",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 403,
    "question": "Что не входит в состав микропроцессора Pentium?",
    "answers": [
      {
        "text": "АЛУ",
        "isCorrect": false
      },
      {
        "text": "Кэш-память уровня L1",
        "isCorrect": false
      },
      {
        "text": "Контроллер памяти он выносился в Northbridge",
        "isCorrect": true
      },
      {
        "text": "Блок предсказания переходов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 404,
    "question": "Когда был выпущен процессор Intel Celeron Mendocino?",
    "answers": [
      {
        "text": "1994",
        "isCorrect": false
      },
      {
        "text": "1996",
        "isCorrect": false
      },
      {
        "text": "1998",
        "isCorrect": true
      },
      {
        "text": "1999",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 405,
    "question": "Когда был выпущен процессор Intel Pentium 4 Willamette?",
    "answers": [
      {
        "text": "1999",
        "isCorrect": false
      },
      {
        "text": "2000",
        "isCorrect": true
      },
      {
        "text": "2001",
        "isCorrect": false
      },
      {
        "text": "2002",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 406,
    "question": "Когда был выпущен процессор Intel Pentium III Coppermine?",
    "answers": [
      {
        "text": "1998",
        "isCorrect": false
      },
      {
        "text": "1999",
        "isCorrect": true
      },
      {
        "text": "2000",
        "isCorrect": false
      },
      {
        "text": "2001",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 407,
    "question": "Когда был выпущен процессор Intel Pentium III Xeon?",
    "answers": [
      {
        "text": "1997",
        "isCorrect": false
      },
      {
        "text": "1998",
        "isCorrect": true
      },
      {
        "text": "1999",
        "isCorrect": false
      },
      {
        "text": "2000",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 408,
    "question": "Какая тактовая частота у процессора Intel Pentium III Xeon?",
    "answers": [
      {
        "text": "400–500 МГц",
        "isCorrect": false
      },
      {
        "text": "500–733 МГц",
        "isCorrect": true
      },
      {
        "text": "750–900 МГц",
        "isCorrect": false
      },
      {
        "text": "1 ГГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 409,
    "question": "Какая тактовая частота у процессора Intel Pentium MMX?",
    "answers": [
      {
        "text": "66–100 МГц",
        "isCorrect": false
      },
      {
        "text": "120–166 МГц",
        "isCorrect": false
      },
      {
        "text": "166–233 МГц",
        "isCorrect": true
      },
      {
        "text": "300–400 МГц",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 410,
    "question": "Какая тактовая частота у процессора Intel Pentium Pro?",
    "answers": [
      {
        "text": "60–90 МГц",
        "isCorrect": false
      },
      {
        "text": "100–120 МГц",
        "isCorrect": false
      },
      {
        "text": "130–166 МГц",
        "isCorrect": false
      },
      {
        "text": "150–200 МГц серии 150, 166, 180, 200",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 411,
    "question": "Какая тактовая частота у процессора Intel-80486?",
    "answers": [
      {
        "text": "10–25 МГц",
        "isCorrect": false
      },
      {
        "text": "25–50 МГц",
        "isCorrect": false
      },
      {
        "text": "20–100 МГц правильно: от 16 до 100 МГц",
        "isCorrect": true
      },
      {
        "text": "100–133 МГц",
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
        "text": "8 бит (внешняя шина), 16 бит ядро",
        "isCorrect": true
      },
      {
        "text": "16 бит полностью",
        "isCorrect": false
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
        "text": "16 бит",
        "isCorrect": true
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
    "id": 414,
    "question": "Какая разрядность у процессора Intel-8080?",
    "answers": [
      {
        "text": "4 бита",
        "isCorrect": false
      },
      {
        "text": "8 бит",
        "isCorrect": true
      },
      {
        "text": "16 бит",
        "isCorrect": false
      },
      {
        "text": "32 бита",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 415,
    "question": "Какая разрядность у процессора Intel-4004?",
    "answers": [
      {
        "text": "4 бита",
        "isCorrect": true
      },
      {
        "text": "8 бит",
        "isCorrect": false
      },
      {
        "text": "12 бит",
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
        "text": "Very Long Integer Word",
        "isCorrect": false
      },
      {
        "text": "Variable Load Instruction Window",
        "isCorrect": false
      },
      {
        "text": "Very Long Instruction Word",
        "isCorrect": true
      },
      {
        "text": "Virtual Level Instruction Workflow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 417,
    "question": "Как расшифровывается RISC?",
    "answers": [
      {
        "text": "Random Instruction Set Chip",
        "isCorrect": false
      },
      {
        "text": "Reduced Instruction Set Computer",
        "isCorrect": true
      },
      {
        "text": "Reconfigurable Interface System Core",
        "isCorrect": false
      },
      {
        "text": "Runtime Instruction Sequence Control",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 418,
    "question": "Как расшифровывается CISC?",
    "answers": [
      {
        "text": "Central Instruction System Code",
        "isCorrect": false
      },
      {
        "text": "Complex Instruction Set Computer",
        "isCorrect": true
      },
      {
        "text": "Core Integrated System Controller",
        "isCorrect": false
      },
      {
        "text": "Component Instruction Storage Chip",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 419,
    "question": "Кем был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "AMD",
        "isCorrect": false
      },
      {
        "text": "Intel",
        "isCorrect": true
      },
      {
        "text": "Motorola",
        "isCorrect": false
      },
      {
        "text": "IBM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 420,
    "question": "Когда был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "1969",
        "isCorrect": false
      },
      {
        "text": "1970",
        "isCorrect": false
      },
      {
        "text": "1971 Intel 4004",
        "isCorrect": true
      },
      {
        "text": "1972",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 421,
    "question": "На каком микропроцессоре впервые появился второй уровень кэш-памяти?",
    "answers": [
      {
        "text": "Intel 80386",
        "isCorrect": false
      },
      {
        "text": "Intel 80486",
        "isCorrect": false
      },
      {
        "text": "Intel Pentium Pro встроенный L2",
        "isCorrect": true
      },
      {
        "text": "Intel Pentium II",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 422,
    "question": "Сколько уровней имеет кэш-память?",
    "answers": [
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "3 L1, L2, L3",
        "isCorrect": true
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 423,
    "question": "Что определяет рабочая тактовая частота микропроцессора?",
    "answers": [
      {
        "text": "Количество регистров",
        "isCorrect": false
      },
      {
        "text": "Скорость выполнения команд",
        "isCorrect": true
      },
      {
        "text": "Разрядность",
        "isCorrect": false
      },
      {
        "text": "Размер кэша",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 424,
    "question": "Что определяет разрядность шины адреса микропроцессора?",
    "answers": [
      {
        "text": "Максимальную длину команды",
        "isCorrect": false
      },
      {
        "text": "Максимальный объем адресуемой памяти",
        "isCorrect": true
      },
      {
        "text": "Скорость работы АЛУ",
        "isCorrect": false
      },
      {
        "text": "Количество портов ввода",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 425,
    "question": "Что определяет разрядность шины данных микропроцессора?",
    "answers": [
      {
        "text": "Скорость передаваемой информации",
        "isCorrect": true
      },
      {
        "text": "Объем памяти",
        "isCorrect": false
      },
      {
        "text": "Количество команд",
        "isCorrect": false
      },
      {
        "text": "Частоту процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 426,
    "question": "Что относится к основным параметрам микропроцессора?",
    "answers": [
      {
        "text": "Тип BIOS",
        "isCorrect": false
      },
      {
        "text": "Количество USB-портов",
        "isCorrect": false
      },
      {
        "text": "Тактовая частота, разрядность, архитектура",
        "isCorrect": true
      },
      {
        "text": "Цвет корпуса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 427,
    "question": "Какую из функций не выполняет микропроцессор?",
    "answers": [
      {
        "text": "Управление устройствами",
        "isCorrect": false
      },
      {
        "text": "Выполнение логических операций",
        "isCorrect": false
      },
      {
        "text": "Сжатие данных автоматически",
        "isCorrect": true
      },
      {
        "text": "Выполнение арифметики",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 428,
    "question": "Какую из функций выполняет микропроцессор?",
    "answers": [
      {
        "text": "Подача питания устройствам",
        "isCorrect": false
      },
      {
        "text": "Управление вычислительным процессом",
        "isCorrect": true
      },
      {
        "text": "Хранение данных при отключении питания",
        "isCorrect": false
      },
      {
        "text": "Генерация тактовой частоты",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 429,
    "question": "Какая из аббревиатур обозначает микропроцессор?",
    "answers": [
      {
        "text": "HDD",
        "isCorrect": false
      },
      {
        "text": "CPU",
        "isCorrect": true
      },
      {
        "text": "GPU",
        "isCorrect": false
      },
      {
        "text": "PSU",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 430,
    "question": "Как расшифровывается DRAM ?",
    "answers": [
      {
        "text": "Direct Random Access Memory",
        "isCorrect": false
      },
      {
        "text": "Dynamic Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Digital Read And Memory",
        "isCorrect": false
      },
      {
        "text": "Dual Read Access Module",
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
        "text": "Simple Read Access Module",
        "isCorrect": false
      },
      {
        "text": "System Random Access Memory",
        "isCorrect": false
      },
      {
        "text": "Secure Rapid Access Memory",
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
        "text": "Монитор",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": false
      },
      {
        "text": "Регистры ЦП",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 433,
    "question": "Какое сокращение имеют запоминающие устройства динамического типа:",
    "answers": [
      {
        "text": "DRAM",
        "isCorrect": true
      },
      {
        "text": "SRAM",
        "isCorrect": false
      },
      {
        "text": "PROM",
        "isCorrect": false
      },
      {
        "text": "CMOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 434,
    "question": "Какое сокращение имеют запоминающие устройства статического типа:",
    "answers": [
      {
        "text": "DRAM",
        "isCorrect": false
      },
      {
        "text": "SRAM",
        "isCorrect": true
      },
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "EPROM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 435,
    "question": "Набор микросхем, предназначенных для временного хранения данных при включенном питании компьютера, называется…",
    "answers": [
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "RAM",
        "isCorrect": true
      },
      {
        "text": "HDD",
        "isCorrect": false
      },
      {
        "text": "CMOS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 436,
    "question": "Микросхема, предназначенная для длительного хранения данных, при выключенном питании компьютера, называется...",
    "answers": [
      {
        "text": "RAM",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": true
      },
      {
        "text": "DRAM",
        "isCorrect": false
      },
      {
        "text": "FIFO",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 437,
    "question": "В одном байте…",
    "answers": [
      {
        "text": "4 бита",
        "isCorrect": false
      },
      {
        "text": "6 бит",
        "isCorrect": false
      },
      {
        "text": "8 бит",
        "isCorrect": true
      },
      {
        "text": "16 бит",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 438,
    "question": "В одном килобайте…",
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
        "text": "512 байт",
        "isCorrect": false
      },
      {
        "text": "2048 байт",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 439,
    "question": "Как расшифровывается аббревиатура ОЗУ?",
    "answers": [
      {
        "text": "Общая запись устройств",
        "isCorrect": false
      },
      {
        "text": "Оперативное запоминающее устройство",
        "isCorrect": true
      },
      {
        "text": "Объем защищенной области",
        "isCorrect": false
      },
      {
        "text": "Отраженная зона управления",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 440,
    "question": "В одном мегабайте…",
    "answers": [
      {
        "text": "1000 КБ",
        "isCorrect": false
      },
      {
        "text": "1024 КБ",
        "isCorrect": true
      },
      {
        "text": "2048 КБ",
        "isCorrect": false
      },
      {
        "text": "4096 КБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 441,
    "question": "Как расшифровывается аббревиатура RAM?",
    "answers": [
      {
        "text": "Read Access Memory",
        "isCorrect": false
      },
      {
        "text": "Random Access Memory",
        "isCorrect": true
      },
      {
        "text": "Rapid Allocation Module",
        "isCorrect": false
      },
      {
        "text": "Remote Address Memory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 442,
    "question": "Какое сокращенное название имеет постоянная память?",
    "answers": [
      {
        "text": "RAM",
        "isCorrect": false
      },
      {
        "text": "ROM",
        "isCorrect": true
      },
      {
        "text": "HDD",
        "isCorrect": false
      },
      {
        "text": "PLD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 443,
    "question": "Какое сокращенное название имеет оперативная память?",
    "answers": [
      {
        "text": "ROM",
        "isCorrect": false
      },
      {
        "text": "CMOS",
        "isCorrect": false
      },
      {
        "text": "RAM",
        "isCorrect": true
      },
      {
        "text": "SSD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 444,
    "question": "Постоянное запоминающее устройство – это…",
    "answers": [
      {
        "text": "Часть процессора",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая память",
        "isCorrect": true
      },
      {
        "text": "Рабочая память программ",
        "isCorrect": false
      },
      {
        "text": "Кэш памяти",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 445,
    "question": "Как иначе называется жёсткий диск?",
    "answers": [
      {
        "text": "SSD",
        "isCorrect": false
      },
      {
        "text": "HDD",
        "isCorrect": true
      },
      {
        "text": "CMOS",
        "isCorrect": false
      },
      {
        "text": "FDD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 446,
    "question": "Оперативная память – это…",
    "answers": [
      {
        "text": "Постоянное хранилище данных",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая память",
        "isCorrect": false
      },
      {
        "text": "Быстрая временная память",
        "isCorrect": true
      },
      {
        "text": "Графический процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 447,
    "question": "Жесткий диск – это…",
    "answers": [
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Энергонезависимая память большого объёма",
        "isCorrect": true
      },
      {
        "text": "Быстрый кэш",
        "isCorrect": false
      },
      {
        "text": "Контроллер питания",
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
        "text": "В децибелах",
        "isCorrect": false
      },
      {
        "text": "В вольтах",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 449,
    "question": "Какую емкость имеет диск 3,5''?",
    "answers": [
      {
        "text": "360 КБ",
        "isCorrect": false
      },
      {
        "text": "720 КБ",
        "isCorrect": false
      },
      {
        "text": "1,44 МБ",
        "isCorrect": true
      },
      {
        "text": "2 МБ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 450,
    "question": "Почему флоппи диск имеет такое название?",
    "answers": [
      {
        "text": "Потому что он гибкий от слова floppy — \"мягкий\"",
        "isCorrect": true
      },
      {
        "text": "Потому что он металлический",
        "isCorrect": false
      },
      {
        "text": "Потому что он быстрый",
        "isCorrect": false
      },
      {
        "text": "Потому что invented by IBM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 451,
    "question": "Кто изобрёл флэш-память?",
    "answers": [
      {
        "text": "Robert Dennard",
        "isCorrect": false
      },
      {
        "text": "Fujio Masuoka",
        "isCorrect": true
      },
      {
        "text": "Jack Kilby",
        "isCorrect": false
      },
      {
        "text": "Gordon Moore",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 452,
    "question": "Какой элемент лежит в флэш-памяти типа NAND?",
    "answers": [
      {
        "text": "Транзистор с плавающим затвором, соединённый последовательно",
        "isCorrect": true
      },
      {
        "text": "Транзистор с плавающим затвором, соединённый параллельно",
        "isCorrect": false
      },
      {
        "text": "Конденсатор",
        "isCorrect": false
      },
      {
        "text": "Резистор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 453,
    "question": "Какой элемент лежит в основе флэш-памяти типа NOR?",
    "answers": [
      {
        "text": "Транзистор с плавающим затвором, соединённый параллельно",
        "isCorrect": true
      },
      {
        "text": "Транзистор с плавающим затвором, соединённый последовательно",
        "isCorrect": false
      },
      {
        "text": "Диод",
        "isCorrect": false
      },
      {
        "text": "Танталовый конденсатор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 454,
    "question": "Буферная Память – это…",
    "answers": [
      {
        "text": "Энергонезависимая память",
        "isCorrect": false
      },
      {
        "text": "Временная память для ускорения обмена данными",
        "isCorrect": true
      },
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Регистр процессора",
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
        "text": "Last In Final Out",
        "isCorrect": false
      },
      {
        "text": "Load In First Out",
        "isCorrect": false
      },
      {
        "text": "Logic In FIFO",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 456,
    "question": "Как расшифровывается FIFO?",
    "answers": [
      {
        "text": "First In First Out",
        "isCorrect": true
      },
      {
        "text": "Fast In Fast Out",
        "isCorrect": false
      },
      {
        "text": "First Input Fast Output",
        "isCorrect": false
      },
      {
        "text": "Flash In First Out",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 457,
    "question": "Видеопамять – это…",
    "answers": [
      {
        "text": "Постоянная память",
        "isCorrect": false
      },
      {
        "text": "Память для хранения графической информации",
        "isCorrect": true
      },
      {
        "text": "Буфер обмена",
        "isCorrect": false
      },
      {
        "text": "Регистры процессора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 458,
    "question": "В каком году был анонсирован NAND - тип флешь памяти?",
    "answers": [
      {
        "text": "1984",
        "isCorrect": false
      },
      {
        "text": "1987",
        "isCorrect": true
      },
      {
        "text": "1990",
        "isCorrect": false
      },
      {
        "text": "1992",
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
        "text": "SRAM",
        "isCorrect": false
      },
      {
        "text": "DRAM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 460,
    "question": "Какая фирма выпустила первый коммерческий флешь-чип?",
    "answers": [
      {
        "text": "Intel 1988",
        "isCorrect": true
      },
      {
        "text": "Toshiba",
        "isCorrect": false
      },
      {
        "text": "AMD",
        "isCorrect": false
      },
      {
        "text": "Micron",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 461,
    "question": "В каком году была выпущена первая коммерческая флэш-памяти (флэш-чип)?",
    "answers": [
      {
        "text": "1984",
        "isCorrect": false
      },
      {
        "text": "1987",
        "isCorrect": false
      },
      {
        "text": "1988",
        "isCorrect": true
      },
      {
        "text": "1990",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 462,
    "question": "В каком году была изобретена флэш-память?",
    "answers": [
      {
        "text": "1980",
        "isCorrect": false
      },
      {
        "text": "1984",
        "isCorrect": true
      },
      {
        "text": "1988",
        "isCorrect": false
      },
      {
        "text": "1992",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 463,
    "question": "Flash-Memory – это…",
    "answers": [
      {
        "text": "Энергонезависимая память",
        "isCorrect": true
      },
      {
        "text": "Временная память",
        "isCorrect": false
      },
      {
        "text": "Регистры процессора",
        "isCorrect": false
      },
      {
        "text": "Буфер обмена",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 464,
    "question": "FPM DRAM – это…",
    "answers": [
      {
        "text": "Fast Page Mode DRAM",
        "isCorrect": true
      },
      {
        "text": "Flash Page Memory",
        "isCorrect": false
      },
      {
        "text": "First Parallel Memory",
        "isCorrect": false
      },
      {
        "text": "Fast Peripheral Module",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 465,
    "question": "DDR SDRAM – это…",
    "answers": [
      {
        "text": "Double Data Rate Synchronous DRAM",
        "isCorrect": true
      },
      {
        "text": "Direct Dynamic RAM",
        "isCorrect": false
      },
      {
        "text": "Dual Disk RAM",
        "isCorrect": false
      },
      {
        "text": "Data Driven Register",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 466,
    "question": "К каким устройствам можно отнести принтер?",
    "answers": [
      {
        "text": "Вводные",
        "isCorrect": false
      },
      {
        "text": "Выводные",
        "isCorrect": true
      },
      {
        "text": "Ввод/вывод",
        "isCorrect": false
      },
      {
        "text": "Системные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 467,
    "question": "К каким устройствам можно отнести клавиатуру, сканер?",
    "answers": [
      {
        "text": "Вводные",
        "isCorrect": true
      },
      {
        "text": "Выводные",
        "isCorrect": false
      },
      {
        "text": "Ввод/вывод",
        "isCorrect": false
      },
      {
        "text": "Системные",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 468,
    "question": "Что необходимо использовать для одновременного подключения нескольких устройств USB?",
    "answers": [
      {
        "text": "Хаб USB",
        "isCorrect": true
      },
      {
        "text": "Концентратор HDMI",
        "isCorrect": false
      },
      {
        "text": "Коммутатор LAN",
        "isCorrect": false
      },
      {
        "text": "Роутер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 469,
    "question": "Сколько линий используется в параллельных портах для одновременной передачи байта информации?",
    "answers": [
      {
        "text": "4",
        "isCorrect": false
      },
      {
        "text": "8",
        "isCorrect": true
      },
      {
        "text": "16",
        "isCorrect": false
      },
      {
        "text": "32",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 470,
    "question": "В первых компьютерах использовались …",
    "answers": [
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Микросхемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 471,
    "question": "В каком году компания Hewlett Packard представила компьютер для бизнеса HP 2115?",
    "answers": [
      {
        "text": "1969",
        "isCorrect": false
      },
      {
        "text": "1972",
        "isCorrect": true
      },
      {
        "text": "1975",
        "isCorrect": false
      },
      {
        "text": "1978",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 472,
    "question": "Какой первый коммерческий модем разработала компания Bell Labs?",
    "answers": [
      {
        "text": "Acoustic Coupler",
        "isCorrect": true
      },
      {
        "text": "DSL",
        "isCorrect": false
      },
      {
        "text": "Cable Modem",
        "isCorrect": false
      },
      {
        "text": "Fiber Modem",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 473,
    "question": "Кто описал машину для суммирования чисел?",
    "answers": [
      {
        "text": "Charles Babbage аналитическая машина",
        "isCorrect": true
      },
      {
        "text": "Alan Turing",
        "isCorrect": false
      },
      {
        "text": "John von Neumann",
        "isCorrect": false
      },
      {
        "text": "Konrad Zuse",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 474,
    "question": "В каком году создана электронно-вычислительная машина ENIAC ?",
    "answers": [
      {
        "text": "1943",
        "isCorrect": false
      },
      {
        "text": "1945",
        "isCorrect": true
      },
      {
        "text": "1948",
        "isCorrect": false
      },
      {
        "text": "1950",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 475,
    "question": "Кто создал интегральную схему, расположив соединительные каналы непосредственно на кремниевой пластине?",
    "answers": [
      {
        "text": "Robert Noyce",
        "isCorrect": true
      },
      {
        "text": "Jack Kilby",
        "isCorrect": false
      },
      {
        "text": "Gordon Moore",
        "isCorrect": false
      },
      {
        "text": "John Bardeen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 476,
    "question": "Как называется максимальное количество ячеек основной памяти, которое может быть непосредственно адресовано микропроцессором?",
    "answers": [
      {
        "text": "Адресуемая память",
        "isCorrect": true
      },
      {
        "text": "Общая память",
        "isCorrect": false
      },
      {
        "text": "Буферная память",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 477,
    "question": "Компьютеры 1-го поколения используют …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": true
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 478,
    "question": "Компьютеры 2-го поколения используют …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 479,
    "question": "Компьютеры 3-го поколения используют …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 480,
    "question": "Компьютеры 4-го поколения используют …",
    "answers": [
      {
        "text": "Вакуумные лампы",
        "isCorrect": false
      },
      {
        "text": "Транзисторы",
        "isCorrect": false
      },
      {
        "text": "Интегральные схемы",
        "isCorrect": false
      },
      {
        "text": "Микропроцессоры",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 481,
    "question": "Мощные многопроцессорные вычислительные машины с быстродействием сотни миллионов — десятки миллиардов операций в секунду относятся к …",
    "answers": [
      {
        "text": "Персональным компьютерам",
        "isCorrect": false
      },
      {
        "text": "Суперкомпьютерам",
        "isCorrect": true
      },
      {
        "text": "Серверным системам",
        "isCorrect": false
      },
      {
        "text": "Мейнфреймам",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 482,
    "question": "Исторически первыми появились …",
    "answers": [
      {
        "text": "Персональные компьютеры",
        "isCorrect": false
      },
      {
        "text": "Мейнфреймы",
        "isCorrect": true
      },
      {
        "text": "Лэптопы",
        "isCorrect": false
      },
      {
        "text": "Мини-компьютеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 483,
    "question": "Процессоры семейства Intel Pentium 4 – это",
    "answers": [
      {
        "text": "Одноядерные до Pentium 4 Extreme Edition",
        "isCorrect": true
      },
      {
        "text": "Двухъядерные",
        "isCorrect": false
      },
      {
        "text": "Четырёхъядерные",
        "isCorrect": false
      },
      {
        "text": "Многоядерные с 8 ядрами",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 484,
    "question": "Intel Pentium D- это",
    "answers": [
      {
        "text": "Одноядерный процессор",
        "isCorrect": false
      },
      {
        "text": "Двухъядерный процессор",
        "isCorrect": true
      },
      {
        "text": "Четырёхъядерный процессор",
        "isCorrect": false
      },
      {
        "text": "Экстремальный серверный процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 485,
    "question": "AMD Athlon 64 X2 Dual-Core — это",
    "answers": [
      {
        "text": "Одноядерный процессор",
        "isCorrect": false
      },
      {
        "text": "Двухъядерный процессор",
        "isCorrect": true
      },
      {
        "text": "Четырёхъядерный процессор",
        "isCorrect": false
      },
      {
        "text": "Графический процессор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 486,
    "question": "2-ое поколение компьютеров создано на основе …",
    "answers": [
      {
        "text": "Вакуумных ламп",
        "isCorrect": false
      },
      {
        "text": "Транзисторов",
        "isCorrect": true
      },
      {
        "text": "Микропроцессоров",
        "isCorrect": false
      },
      {
        "text": "Интегральных схем",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 487,
    "question": "Какое устройство реализует сопряжение и связь с другими устройствами ПК?",
    "answers": [
      {
        "text": "Центральный процессор",
        "isCorrect": false
      },
      {
        "text": "Контроллер ввода-вывода",
        "isCorrect": true
      },
      {
        "text": "Память",
        "isCorrect": false
      },
      {
        "text": "Тактовый генератор",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 488,
    "question": "Как называется временный останов выполнения одной программы в целях оперативного выполнения другой, в данный момент более важной (приоритетной) программы?",
    "answers": [
      {
        "text": "Прерывание",
        "isCorrect": true
      },
      {
        "text": "Таймер",
        "isCorrect": false
      },
      {
        "text": "Кэширование",
        "isCorrect": false
      },
      {
        "text": "Буферизация",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 489,
    "question": "Что обслуживает процедуры прерывания, принимает запрос на прерывание от внешних устройств, определяет уровень приоритета этого запроса и выдает сигнал прерывания в процессор?",
    "answers": [
      {
        "text": "DMA",
        "isCorrect": false
      },
      {
        "text": "Контроллер прерываний",
        "isCorrect": true
      },
      {
        "text": "Тактовый генератор",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 490,
    "question": "Что определяет количество элементарных операций выполняемые процессором за единицу времени?",
    "answers": [
      {
        "text": "Тактовая частота",
        "isCorrect": true
      },
      {
        "text": "Разрядность",
        "isCorrect": false
      },
      {
        "text": "Размер кэша",
        "isCorrect": false
      },
      {
        "text": "Тип шины",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 491,
    "question": "На какие типы можно разделить всю память с произвольным доступом? а)GRAM, б)FRAM, в)CRAM, г)DRAM, д)SRAM",
    "answers": [
      {
        "text": "GRAM, FRAM, CRAM, DRAM, SRAM",
        "isCorrect": true
      },
      {
        "text": "ROM, PROM, EPROM, EEPROM",
        "isCorrect": false
      },
      {
        "text": "NAND, NOR, DRAM, SRAM",
        "isCorrect": false
      },
      {
        "text": "L1, L2, L3, L4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 492,
    "question": "В каком году был выпущен первый микропроцессор?",
    "answers": [
      {
        "text": "1970",
        "isCorrect": false
      },
      {
        "text": "1971 Intel 4004",
        "isCorrect": true
      },
      {
        "text": "1972",
        "isCorrect": false
      },
      {
        "text": "1973",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 493,
    "question": "Как называется устройство для автоматического считывания с бумажных носителей и ввода в ПК машинописных текстов, графиков, рисунков, чертежей?",
    "answers": [
      {
        "text": "Мышь",
        "isCorrect": false
      },
      {
        "text": "Сканер",
        "isCorrect": true
      },
      {
        "text": "Принтер",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 494,
    "question": "Как называется устройство для ручного ввода графической информации, изображений путем перемещения специального указателя?",
    "answers": [
      {
        "text": "Джойстик",
        "isCorrect": false
      },
      {
        "text": "Мышь",
        "isCorrect": true
      },
      {
        "text": "Сенсорная панель",
        "isCorrect": false
      },
      {
        "text": "Графический планшет",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 495,
    "question": "Как называется устройство для ввода графической информации на экран дисплея путем управления движением курсора по экрану с последующим кодированием координат курсора и вводом их в ПК?",
    "answers": [
      {
        "text": "Мышь",
        "isCorrect": true
      },
      {
        "text": "Тачскрин",
        "isCorrect": false
      },
      {
        "text": "Сканер",
        "isCorrect": false
      },
      {
        "text": "Джойстик",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 496,
    "question": "Как называется устройство для ввода отдельных элементов изображения программ или команд с полиэкрана дисплея в ПК?",
    "answers": [
      {
        "text": "Графический планшет",
        "isCorrect": true
      },
      {
        "text": "Джойстик",
        "isCorrect": false
      },
      {
        "text": "Мышь",
        "isCorrect": false
      },
      {
        "text": "Клавиатура",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 497,
    "question": "Как называются печатающие устройства для регистрации информации на бумажный носитель?",
    "answers": [
      {
        "text": "Принтеры",
        "isCorrect": true
      },
      {
        "text": "Сканеры",
        "isCorrect": false
      },
      {
        "text": "Микшеры",
        "isCorrect": false
      },
      {
        "text": "Мониторы",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 498,
    "question": "Как называются устройства для вывода графической информации из ПК на бумажный носитель?",
    "answers": [
      {
        "text": "Мониторы",
        "isCorrect": false
      },
      {
        "text": "Принтеры",
        "isCorrect": true
      },
      {
        "text": "Джойстики",
        "isCorrect": false
      },
      {
        "text": "Плоттеры",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 499,
    "question": "Какая плата за счет параллельной работы с процессором значительно ускоряет выполнение процедур ввода-вывода при обслуживании нескольких внешних устройств, освобождает процессор от обработки процедур ввода-вывода, в т.ч. реализуют и режим прямого доступа к памяти?",
    "answers": [
      {
        "text": "Контроллер прерываний",
        "isCorrect": false
      },
      {
        "text": "DMA-контроллер",
        "isCorrect": true
      },
      {
        "text": "Тактовый генератор",
        "isCorrect": false
      },
      {
        "text": "Кэш-память",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 500,
    "question": "Что показывает сколько бит данных процессор может принять и обработать в своих регистрах за один такт?",
    "answers": [
      {
        "text": "Разрядность процессора",
        "isCorrect": true
      },
      {
        "text": "Тактовая частота",
        "isCorrect": false
      },
      {
        "text": "Размер кэша",
        "isCorrect": false
      },
      {
        "text": "Тип шины",
        "isCorrect": false
      }
    ]
  }
];