// Parsed 360 questions for WinAPI
const winapiQuestions = [
  {
    "id": 1,
    "question": "Какая функция используется для создания окна в Windows API?",
    "answers": [
      {
        "text": "OpenWindow",
        "isCorrect": false
      },
      {
        "text": "MakeWindow",
        "isCorrect": false
      },
      {
        "text": "CreateWindow",
        "isCorrect": true
      },
      {
        "text": "BuildWindow",
        "isCorrect": false
      },
      {
        "text": "NewWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "question": "Какой заголовочный файл необходимо подключить для работы с Windows API?",
    "answers": [
      {
        "text": "win32.h",
        "isCorrect": false
      },
      {
        "text": "system.h",
        "isCorrect": false
      },
      {
        "text": "winbase.h",
        "isCorrect": false
      },
      {
        "text": "windows.h",
        "isCorrect": true
      },
      {
        "text": "winapi.h",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "question": "Какая функция является точкой входа в Windows-приложение?",
    "answers": [
      {
        "text": "Start",
        "isCorrect": false
      },
      {
        "text": "AppMain",
        "isCorrect": false
      },
      {
        "text": "WinStart",
        "isCorrect": false
      },
      {
        "text": "WinMain",
        "isCorrect": true
      },
      {
        "text": "main",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "question": "Что такое HWND в Windows API?",
    "answers": [
      {
        "text": "Идентификатор процесса",
        "isCorrect": false
      },
      {
        "text": "Тип данных для строк",
        "isCorrect": false
      },
      {
        "text": "Дескриптор файла",
        "isCorrect": false
      },
      {
        "text": "Указатель на функцию",
        "isCorrect": false
      },
      {
        "text": "Дескриптор окна",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 5,
    "question": "Какая функция отображает окно на экране?",
    "answers": [
      {
        "text": "DisplayWindow",
        "isCorrect": false
      },
      {
        "text": "RenderWindow",
        "isCorrect": false
      },
      {
        "text": "PresentWindow",
        "isCorrect": false
      },
      {
        "text": "OpenWindow",
        "isCorrect": false
      },
      {
        "text": "ShowWindow",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 6,
    "question": "Какая структура используется для регистрации класса окна?",
    "answers": [
      {
        "text": "WINCLASS",
        "isCorrect": false
      },
      {
        "text": "WINDOWCLASS",
        "isCorrect": false
      },
      {
        "text": "WNDTYPE",
        "isCorrect": false
      },
      {
        "text": "CLASSWIN",
        "isCorrect": false
      },
      {
        "text": "WNDCLASS",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 7,
    "question": "Какая функция регистрирует класс окна?",
    "answers": [
      {
        "text": "CreateClass",
        "isCorrect": false
      },
      {
        "text": "AddClass",
        "isCorrect": false
      },
      {
        "text": "SetClass",
        "isCorrect": false
      },
      {
        "text": "InitClass",
        "isCorrect": false
      },
      {
        "text": "RegisterClass",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 8,
    "question": "Как называется функция обратного вызова для обработки сообщений окна?",
    "answers": [
      {
        "text": "WinCallback",
        "isCorrect": false
      },
      {
        "text": "MsgHandler",
        "isCorrect": false
      },
      {
        "text": "EventProc",
        "isCorrect": false
      },
      {
        "text": "WindowFunc",
        "isCorrect": false
      },
      {
        "text": "WndProc",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 9,
    "question": "Какое сообщение посылается при закрытии окна?",
    "answers": [
      {
        "text": "WM_QUIT",
        "isCorrect": false
      },
      {
        "text": "WM_CLOSE_WINDOW",
        "isCorrect": false
      },
      {
        "text": "WM_EXIT",
        "isCorrect": false
      },
      {
        "text": "WM_DESTROY",
        "isCorrect": true
      },
      {
        "text": "WM_END",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "question": "Какая функция завершает цикл обработки сообщений?",
    "answers": [
      {
        "text": "StopMessages",
        "isCorrect": false
      },
      {
        "text": "ExitLoop",
        "isCorrect": false
      },
      {
        "text": "QuitApp",
        "isCorrect": false
      },
      {
        "text": "EndMessageLoop",
        "isCorrect": false
      },
      {
        "text": "PostQuitMessage",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 11,
    "question": "Какая функция извлекает сообщение из очереди сообщений?",
    "answers": [
      {
        "text": "ReadMessage",
        "isCorrect": false
      },
      {
        "text": "PeekMessage",
        "isCorrect": false
      },
      {
        "text": "FetchMessage",
        "isCorrect": false
      },
      {
        "text": "PopMessage",
        "isCorrect": false
      },
      {
        "text": "GetMessage",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 12,
    "question": "Какая функция передаёт сообщение оконной процедуре?",
    "answers": [
      {
        "text": "ForwardMessage",
        "isCorrect": false
      },
      {
        "text": "DeliverMessage",
        "isCorrect": false
      },
      {
        "text": "RouteMessage",
        "isCorrect": false
      },
      {
        "text": "SendToWindow",
        "isCorrect": false
      },
      {
        "text": "DispatchMessage",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 13,
    "question": "Какая функция транслирует виртуальные клавиши в символы?",
    "answers": [
      {
        "text": "ConvertMessage",
        "isCorrect": false
      },
      {
        "text": "KeyToChar",
        "isCorrect": false
      },
      {
        "text": "ParseMessage",
        "isCorrect": false
      },
      {
        "text": "MapMessage",
        "isCorrect": false
      },
      {
        "text": "TranslateMessage",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 14,
    "question": "Какое сообщение генерируется при нажатии клавиши?",
    "answers": [
      {
        "text": "WM_PRESS",
        "isCorrect": false
      },
      {
        "text": "WM_KEYBOARD",
        "isCorrect": false
      },
      {
        "text": "WM_KEY",
        "isCorrect": false
      },
      {
        "text": "WM_KEYPRESS",
        "isCorrect": false
      },
      {
        "text": "WM_KEYDOWN",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 15,
    "question": "Какое сообщение генерируется при нажатии левой кнопки мыши?",
    "answers": [
      {
        "text": "WM_CLICK",
        "isCorrect": false
      },
      {
        "text": "WM_LEFTCLICK",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSEPRESSED",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSECLICK",
        "isCorrect": false
      },
      {
        "text": "WM_LBUTTONDOWN",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 16,
    "question": "Что такое HDC в Windows API?",
    "answers": [
      {
        "text": "Тип данных для цвета",
        "isCorrect": false
      },
      {
        "text": "Идентификатор дисплея",
        "isCorrect": false
      },
      {
        "text": "Указатель на графику",
        "isCorrect": false
      },
      {
        "text": "Дескриптор окна",
        "isCorrect": false
      },
      {
        "text": "Дескриптор контекста устройства",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 17,
    "question": "Какая функция получает контекст устройства для рисования?",
    "answers": [
      {
        "text": "AcquireDC",
        "isCorrect": false
      },
      {
        "text": "CreateDC",
        "isCorrect": false
      },
      {
        "text": "OpenDC",
        "isCorrect": false
      },
      {
        "text": "FetchDC",
        "isCorrect": false
      },
      {
        "text": "GetDC",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 18,
    "question": "Какая функция освобождает контекст устройства?",
    "answers": [
      {
        "text": "DeleteDC",
        "isCorrect": false
      },
      {
        "text": "CloseDC",
        "isCorrect": false
      },
      {
        "text": "FreeDC",
        "isCorrect": false
      },
      {
        "text": "RemoveDC",
        "isCorrect": false
      },
      {
        "text": "ReleaseDC",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 19,
    "question": "Какое сообщение посылается при необходимости перерисовки окна?",
    "answers": [
      {
        "text": "WM_REDRAW",
        "isCorrect": false
      },
      {
        "text": "WM_REFRESH",
        "isCorrect": false
      },
      {
        "text": "WM_DRAW",
        "isCorrect": false
      },
      {
        "text": "WM_RENDER",
        "isCorrect": false
      },
      {
        "text": "WM_PAINT",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 20,
    "question": "Какая функция начинает операцию рисования при обработке WM_PAINT?",
    "answers": [
      {
        "text": "OpenPaint",
        "isCorrect": false
      },
      {
        "text": "CreatePaint",
        "isCorrect": false
      },
      {
        "text": "StartPaint",
        "isCorrect": false
      },
      {
        "text": "InitPaint",
        "isCorrect": false
      },
      {
        "text": "BeginPaint",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 21,
    "question": "Какая функция завершает операцию рисования?",
    "answers": [
      {
        "text": "FinishPaint",
        "isCorrect": false
      },
      {
        "text": "StopPaint",
        "isCorrect": false
      },
      {
        "text": "ClosePaint",
        "isCorrect": false
      },
      {
        "text": "DonePaint",
        "isCorrect": false
      },
      {
        "text": "EndPaint",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 22,
    "question": "Какая функция выводит текст в контексте устройства?",
    "answers": [
      {
        "text": "PrintText",
        "isCorrect": false
      },
      {
        "text": "DrawText",
        "isCorrect": false
      },
      {
        "text": "WriteText",
        "isCorrect": false
      },
      {
        "text": "ShowText",
        "isCorrect": false
      },
      {
        "text": "TextOut",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 23,
    "question": "Какая функция рисует линию в контексте устройства?",
    "answers": [
      {
        "text": "MakeLine",
        "isCorrect": false
      },
      {
        "text": "DrawLine",
        "isCorrect": false
      },
      {
        "text": "CreateLine",
        "isCorrect": false
      },
      {
        "text": "PaintLine",
        "isCorrect": false
      },
      {
        "text": "LineTo",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 24,
    "question": "Какая функция рисует прямоугольник?",
    "answers": [
      {
        "text": "DrawRect",
        "isCorrect": false
      },
      {
        "text": "MakeRect",
        "isCorrect": false
      },
      {
        "text": "FillRect",
        "isCorrect": false
      },
      {
        "text": "PaintRect",
        "isCorrect": false
      },
      {
        "text": "Rectangle",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 25,
    "question": "Что такое HINSTANCE в Windows API?",
    "answers": [
      {
        "text": "Указатель на главное окно",
        "isCorrect": false
      },
      {
        "text": "Идентификатор потока",
        "isCorrect": false
      },
      {
        "text": "Дескриптор экземпляра приложения",
        "isCorrect": true
      },
      {
        "text": "Дескриптор модуля DLL",
        "isCorrect": false
      },
      {
        "text": "Тип для хранения адреса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 26,
    "question": "Какая функция создаёт дочернее окно?",
    "answers": [
      {
        "text": "AddChildWindow",
        "isCorrect": false
      },
      {
        "text": "MakeChild",
        "isCorrect": false
      },
      {
        "text": "CreateChild",
        "isCorrect": false
      },
      {
        "text": "NewWindow",
        "isCorrect": false
      },
      {
        "text": "CreateWindowEx",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 27,
    "question": "Какое сообщение посылается при изменении размера окна?",
    "answers": [
      {
        "text": "WM_SIZE",
        "isCorrect": true
      },
      {
        "text": "WM_RESIZE",
        "isCorrect": false
      },
      {
        "text": "WM_CHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_SCALE",
        "isCorrect": false
      },
      {
        "text": "WM_DIMENSION",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "question": "Какая функция перемещает и изменяет размер окна?",
    "answers": [
      {
        "text": "ResizeWindow",
        "isCorrect": false
      },
      {
        "text": "SetWindowPos",
        "isCorrect": false
      },
      {
        "text": "ChangeWindow",
        "isCorrect": false
      },
      {
        "text": "MoveWindow",
        "isCorrect": true
      },
      {
        "text": "PlaceWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "question": "Какая функция устанавливает заголовок окна?",
    "answers": [
      {
        "text": "SetTitle",
        "isCorrect": false
      },
      {
        "text": "SetWindowText",
        "isCorrect": true
      },
      {
        "text": "ChangeCaption",
        "isCorrect": false
      },
      {
        "text": "SetCaption",
        "isCorrect": false
      },
      {
        "text": "UpdateTitle",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "question": "Какая функция получает заголовок окна?",
    "answers": [
      {
        "text": "ReadTitle",
        "isCorrect": false
      },
      {
        "text": "FetchCaption",
        "isCorrect": false
      },
      {
        "text": "GetWindowText",
        "isCorrect": true
      },
      {
        "text": "GetCaption",
        "isCorrect": false
      },
      {
        "text": "ReadWindowText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "question": "Что означает стиль окна WS_OVERLAPPEDWINDOW?",
    "answers": [
      {
        "text": "Окно без рамки",
        "isCorrect": false
      },
      {
        "text": "Дочернее окно",
        "isCorrect": false
      },
      {
        "text": "Всплывающее окно",
        "isCorrect": false
      },
      {
        "text": "Окно инструментов",
        "isCorrect": false
      },
      {
        "text": "Стандартное перекрывающееся окно с заголовком и рамкой",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 32,
    "question": "Какая функция посылает сообщение окну?",
    "answers": [
      {
        "text": "PostMessage",
        "isCorrect": false
      },
      {
        "text": "SendMessage",
        "isCorrect": true
      },
      {
        "text": "TransmitMessage",
        "isCorrect": false
      },
      {
        "text": "DeliverMessage",
        "isCorrect": false
      },
      {
        "text": "PushMessage",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "question": "В чём разница между SendMessage и PostMessage?",
    "answers": [
      {
        "text": "SendMessage быстрее",
        "isCorrect": false
      },
      {
        "text": "PostMessage синхронный",
        "isCorrect": false
      },
      {
        "text": "Нет разницы",
        "isCorrect": false
      },
      {
        "text": "SendMessage ждёт обработки, PostMessage помещает в очередь",
        "isCorrect": true
      },
      {
        "text": "SendMessage только для дочерних окон",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "question": "Какая функция создаёт таймер?",
    "answers": [
      {
        "text": "SetTimer",
        "isCorrect": true
      },
      {
        "text": "CreateTimer",
        "isCorrect": false
      },
      {
        "text": "StartTimer",
        "isCorrect": false
      },
      {
        "text": "AddTimer",
        "isCorrect": false
      },
      {
        "text": "InitTimer",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "question": "Какое сообщение посылается при срабатывании таймера?",
    "answers": [
      {
        "text": "WM_TICK",
        "isCorrect": false
      },
      {
        "text": "WM_ALARM",
        "isCorrect": false
      },
      {
        "text": "WM_TIMER",
        "isCorrect": true
      },
      {
        "text": "WM_CLOCK",
        "isCorrect": false
      },
      {
        "text": "WM_TIMEOUT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "question": "Какая функция уничтожает таймер?",
    "answers": [
      {
        "text": "DeleteTimer",
        "isCorrect": false
      },
      {
        "text": "RemoveTimer",
        "isCorrect": false
      },
      {
        "text": "StopTimer",
        "isCorrect": false
      },
      {
        "text": "DestroyTimer",
        "isCorrect": false
      },
      {
        "text": "KillTimer",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 37,
    "question": "Какая функция уничтожает окно?",
    "answers": [
      {
        "text": "DeleteWindow",
        "isCorrect": false
      },
      {
        "text": "DestroyWindow",
        "isCorrect": true
      },
      {
        "text": "CloseWindow",
        "isCorrect": false
      },
      {
        "text": "RemoveWindow",
        "isCorrect": false
      },
      {
        "text": "KillWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "question": "Что такое WM_CREATE?",
    "answers": [
      {
        "text": "Функция создания окна",
        "isCorrect": false
      },
      {
        "text": "Флаг стиля окна",
        "isCorrect": false
      },
      {
        "text": "Тип дескриптора",
        "isCorrect": false
      },
      {
        "text": "Сообщение, посылаемое при создании окна",
        "isCorrect": true
      },
      {
        "text": "Структура данных",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "question": "Какая функция обрабатывает необработанные сообщения по умолчанию?",
    "answers": [
      {
        "text": "DefWindowProc",
        "isCorrect": true
      },
      {
        "text": "DefaultProc",
        "isCorrect": false
      },
      {
        "text": "BaseWindowProc",
        "isCorrect": false
      },
      {
        "text": "StandardProc",
        "isCorrect": false
      },
      {
        "text": "HandleDefault",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "question": "Какая функция отображает стандартное диалоговое окно с сообщением?",
    "answers": [
      {
        "text": "ShowDialog",
        "isCorrect": false
      },
      {
        "text": "AlertBox",
        "isCorrect": false
      },
      {
        "text": "MessageBox",
        "isCorrect": true
      },
      {
        "text": "InfoBox",
        "isCorrect": false
      },
      {
        "text": "MsgDialog",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 41,
    "question": "Какой параметр MessageBox используется для отображения кнопок Yes/No?",
    "answers": [
      {
        "text": "MB_CONFIRM",
        "isCorrect": false
      },
      {
        "text": "MB_YESNO",
        "isCorrect": true
      },
      {
        "text": "MB_QUESTION",
        "isCorrect": false
      },
      {
        "text": "MB_CHOICE",
        "isCorrect": false
      },
      {
        "text": "MB_YESCANCEL",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "question": "Какая функция загружает иконку из ресурсов?",
    "answers": [
      {
        "text": "GetIcon",
        "isCorrect": false
      },
      {
        "text": "FetchIcon",
        "isCorrect": false
      },
      {
        "text": "ReadIcon",
        "isCorrect": false
      },
      {
        "text": "ImportIcon",
        "isCorrect": false
      },
      {
        "text": "LoadIcon",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 43,
    "question": "Какая функция загружает курсор из ресурсов?",
    "answers": [
      {
        "text": "GetCursor",
        "isCorrect": false
      },
      {
        "text": "FetchCursor",
        "isCorrect": false
      },
      {
        "text": "ReadCursor",
        "isCorrect": false
      },
      {
        "text": "LoadCursor",
        "isCorrect": true
      },
      {
        "text": "ImportCursor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 44,
    "question": "Что такое LPARAM в Windows API?",
    "answers": [
      {
        "text": "32/64-битный параметр сообщения (длинный)",
        "isCorrect": true
      },
      {
        "text": "Указатель на строку",
        "isCorrect": false
      },
      {
        "text": "Тип для дескрипторов",
        "isCorrect": false
      },
      {
        "text": "Флаг сообщения",
        "isCorrect": false
      },
      {
        "text": "Идентификатор окна",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "question": "Что такое WPARAM в Windows API?",
    "answers": [
      {
        "text": "Широкий символ",
        "isCorrect": false
      },
      {
        "text": "Параметр сообщения (слово)",
        "isCorrect": true
      },
      {
        "text": "Указатель на параметр",
        "isCorrect": false
      },
      {
        "text": "Флаг стиля",
        "isCorrect": false
      },
      {
        "text": "Дескриптор процесса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "question": "Как называется цикл обработки сообщений в Windows API?",
    "answers": [
      {
        "text": "Event Loop",
        "isCorrect": false
      },
      {
        "text": "Main Loop",
        "isCorrect": false
      },
      {
        "text": "Window Loop",
        "isCorrect": false
      },
      {
        "text": "Process Loop",
        "isCorrect": false
      },
      {
        "text": "Message Loop (цикл сообщений)",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 47,
    "question": "Какая функция принудительно перерисовывает окно?",
    "answers": [
      {
        "text": "RedrawWindow",
        "isCorrect": false
      },
      {
        "text": "RefreshWindow",
        "isCorrect": false
      },
      {
        "text": "InvalidateRect",
        "isCorrect": true
      },
      {
        "text": "UpdateWindow",
        "isCorrect": false
      },
      {
        "text": "RepaintWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "question": "Какая функция немедленно обновляет окно?",
    "answers": [
      {
        "text": "UpdateWindow",
        "isCorrect": true
      },
      {
        "text": "RefreshWindow",
        "isCorrect": false
      },
      {
        "text": "RepaintNow",
        "isCorrect": false
      },
      {
        "text": "ForceRepaint",
        "isCorrect": false
      },
      {
        "text": "FlushWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "question": "Что такое COLORREF в Windows API?",
    "answers": [
      {
        "text": "Ссылка на цветовую схему",
        "isCorrect": false
      },
      {
        "text": "Дескриптор цвета",
        "isCorrect": false
      },
      {
        "text": "Индекс цвета в палитре",
        "isCorrect": false
      },
      {
        "text": "Тип данных для хранения цвета RGB",
        "isCorrect": true
      },
      {
        "text": "Название цвета",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "question": "Какой макрос создаёт значение COLORREF из компонентов RGB?",
    "answers": [
      {
        "text": "MAKECOLOR(r,g,b)",
        "isCorrect": false
      },
      {
        "text": "RGB(r, g, b)",
        "isCorrect": true
      },
      {
        "text": "COLOR(r,g,b)",
        "isCorrect": false
      },
      {
        "text": "SETRGB(r,g,b)",
        "isCorrect": false
      },
      {
        "text": "NEWCOLOR(r,g,b)",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "question": "Какая функция создаёт кисть заданного цвета?",
    "answers": [
      {
        "text": "MakeBrush",
        "isCorrect": false
      },
      {
        "text": "NewBrush",
        "isCorrect": false
      },
      {
        "text": "CreateSolidBrush",
        "isCorrect": true
      },
      {
        "text": "SetBrush",
        "isCorrect": false
      },
      {
        "text": "InitBrush",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 52,
    "question": "Какая функция создаёт перо для рисования?",
    "answers": [
      {
        "text": "MakePen",
        "isCorrect": false
      },
      {
        "text": "NewPen",
        "isCorrect": false
      },
      {
        "text": "SetPen",
        "isCorrect": false
      },
      {
        "text": "InitPen",
        "isCorrect": false
      },
      {
        "text": "CreatePen",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 53,
    "question": "Какая функция выбирает объект GDI в контекст устройства?",
    "answers": [
      {
        "text": "SelectObject",
        "isCorrect": true
      },
      {
        "text": "UseObject",
        "isCorrect": false
      },
      {
        "text": "SetObject",
        "isCorrect": false
      },
      {
        "text": "InsertObject",
        "isCorrect": false
      },
      {
        "text": "ApplyObject",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "question": "Какая функция удаляет объект GDI из памяти?",
    "answers": [
      {
        "text": "RemoveObject",
        "isCorrect": false
      },
      {
        "text": "FreeObject",
        "isCorrect": false
      },
      {
        "text": "DestroyObject",
        "isCorrect": false
      },
      {
        "text": "DeleteObject",
        "isCorrect": true
      },
      {
        "text": "ReleaseObject",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "question": "Что такое GDI в Windows?",
    "answers": [
      {
        "text": "Global Device Index",
        "isCorrect": false
      },
      {
        "text": "Graphics Data Input",
        "isCorrect": false
      },
      {
        "text": "Graphics Device Interface — интерфейс графических устройств",
        "isCorrect": true
      },
      {
        "text": "General Display Interface",
        "isCorrect": false
      },
      {
        "text": "Graphical Driver Interface",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "question": "Какая функция рисует эллипс?",
    "answers": [
      {
        "text": "Ellipse",
        "isCorrect": true
      },
      {
        "text": "DrawEllipse",
        "isCorrect": false
      },
      {
        "text": "Circle",
        "isCorrect": false
      },
      {
        "text": "DrawCircle",
        "isCorrect": false
      },
      {
        "text": "Oval",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "question": "Какая функция рисует многоугольник?",
    "answers": [
      {
        "text": "DrawPolygon",
        "isCorrect": false
      },
      {
        "text": "PolyLine",
        "isCorrect": false
      },
      {
        "text": "Shape",
        "isCorrect": false
      },
      {
        "text": "DrawShape",
        "isCorrect": false
      },
      {
        "text": "Polygon",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 58,
    "question": "Какая функция заливает область цветом?",
    "answers": [
      {
        "text": "ColorRect",
        "isCorrect": false
      },
      {
        "text": "FillRect",
        "isCorrect": true
      },
      {
        "text": "PaintArea",
        "isCorrect": false
      },
      {
        "text": "FloodFill",
        "isCorrect": false
      },
      {
        "text": "FillArea",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "question": "Какая функция перемещает точку рисования?",
    "answers": [
      {
        "text": "MoveTo",
        "isCorrect": false
      },
      {
        "text": "SetPosition",
        "isCorrect": false
      },
      {
        "text": "GotoPoint",
        "isCorrect": false
      },
      {
        "text": "MoveToEx",
        "isCorrect": true
      },
      {
        "text": "MovePoint",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "question": "Какой стиль окна делает его дочерним?",
    "answers": [
      {
        "text": "WS_CHILD",
        "isCorrect": true
      },
      {
        "text": "WS_POPUP",
        "isCorrect": false
      },
      {
        "text": "WS_OWNED",
        "isCorrect": false
      },
      {
        "text": "WS_CHILDWINDOW",
        "isCorrect": false
      },
      {
        "text": "WS_SUBWINDOW",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "question": "Какой стиль окна добавляет полосу прокрутки?",
    "answers": [
      {
        "text": "WS_SCROLL",
        "isCorrect": false
      },
      {
        "text": "WS_SCROLLBAR",
        "isCorrect": false
      },
      {
        "text": "WS_VSCROLL",
        "isCorrect": true
      },
      {
        "text": "WS_VERTICAL",
        "isCorrect": false
      },
      {
        "text": "WS_VBAR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "question": "Какая функция создаёт кнопку?",
    "answers": [
      {
        "text": "CreateButton",
        "isCorrect": false
      },
      {
        "text": "AddButton",
        "isCorrect": false
      },
      {
        "text": "MakeButton",
        "isCorrect": false
      },
      {
        "text": "NewButton",
        "isCorrect": false
      },
      {
        "text": "CreateWindow с классом BUTTON",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 63,
    "question": "Какое сообщение посылается при нажатии кнопки?",
    "answers": [
      {
        "text": "WM_BUTTON",
        "isCorrect": false
      },
      {
        "text": "BN_CLICKED через WM_COMMAND",
        "isCorrect": true
      },
      {
        "text": "BM_CLICK",
        "isCorrect": false
      },
      {
        "text": "WM_PRESS",
        "isCorrect": false
      },
      {
        "text": "BTN_CLICK",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "question": "Какая функция создаёт поле ввода текста?",
    "answers": [
      {
        "text": "CreateEdit",
        "isCorrect": false
      },
      {
        "text": "AddTextBox",
        "isCorrect": false
      },
      {
        "text": "MakeInput",
        "isCorrect": false
      },
      {
        "text": "CreateWindow с классом EDIT",
        "isCorrect": true
      },
      {
        "text": "NewEditBox",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "question": "Какая функция создаёт список (listbox)?",
    "answers": [
      {
        "text": "CreateWindow с классом LISTBOX",
        "isCorrect": true
      },
      {
        "text": "CreateList",
        "isCorrect": false
      },
      {
        "text": "AddListBox",
        "isCorrect": false
      },
      {
        "text": "MakeList",
        "isCorrect": false
      },
      {
        "text": "NewListBox",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "question": "Какая функция добавляет элемент в список?",
    "answers": [
      {
        "text": "AddItem",
        "isCorrect": false
      },
      {
        "text": "LB_INSERT",
        "isCorrect": false
      },
      {
        "text": "SendMessage с LB_ADDSTRING",
        "isCorrect": true
      },
      {
        "text": "ListAdd",
        "isCorrect": false
      },
      {
        "text": "AppendItem",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "question": "Какая функция создаёт меню?",
    "answers": [
      {
        "text": "MakeMenu",
        "isCorrect": false
      },
      {
        "text": "AddMenu",
        "isCorrect": false
      },
      {
        "text": "NewMenu",
        "isCorrect": false
      },
      {
        "text": "InitMenu",
        "isCorrect": false
      },
      {
        "text": "CreateMenu",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 68,
    "question": "Какая функция добавляет пункт в меню?",
    "answers": [
      {
        "text": "AddMenuItem",
        "isCorrect": false
      },
      {
        "text": "AppendMenu",
        "isCorrect": true
      },
      {
        "text": "InsertMenu",
        "isCorrect": false
      },
      {
        "text": "PushMenuItem",
        "isCorrect": false
      },
      {
        "text": "CreateMenuItem",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "question": "Какая функция устанавливает меню для окна?",
    "answers": [
      {
        "text": "AttachMenu",
        "isCorrect": false
      },
      {
        "text": "AssignMenu",
        "isCorrect": false
      },
      {
        "text": "LinkMenu",
        "isCorrect": false
      },
      {
        "text": "SetMenu",
        "isCorrect": true
      },
      {
        "text": "AddMenuToWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "question": "Какое сообщение посылается при выборе пункта меню?",
    "answers": [
      {
        "text": "WM_COMMAND",
        "isCorrect": true
      },
      {
        "text": "WM_MENU",
        "isCorrect": false
      },
      {
        "text": "WM_MENUSELECT",
        "isCorrect": false
      },
      {
        "text": "WM_MENUCLICK",
        "isCorrect": false
      },
      {
        "text": "WM_ITEM",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "question": "Что такое акселератор в Windows API?",
    "answers": [
      {
        "text": "Аппаратное ускорение графики",
        "isCorrect": false
      },
      {
        "text": "Быстрый таймер",
        "isCorrect": false
      },
      {
        "text": "Сочетание клавиш для быстрого вызова команд",
        "isCorrect": true
      },
      {
        "text": "Оптимизатор кода",
        "isCorrect": false
      },
      {
        "text": "Кэш сообщений",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "question": "Какая функция загружает таблицу акселераторов?",
    "answers": [
      {
        "text": "GetAccelerators",
        "isCorrect": false
      },
      {
        "text": "ReadKeys",
        "isCorrect": false
      },
      {
        "text": "FetchHotkeys",
        "isCorrect": false
      },
      {
        "text": "LoadHotkeys",
        "isCorrect": false
      },
      {
        "text": "LoadAccelerators",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 73,
    "question": "Какая функция обрабатывает акселераторы в цикле сообщений?",
    "answers": [
      {
        "text": "HandleAccelerator",
        "isCorrect": false
      },
      {
        "text": "TranslateAccelerator",
        "isCorrect": true
      },
      {
        "text": "ProcessHotkey",
        "isCorrect": false
      },
      {
        "text": "ApplyAccel",
        "isCorrect": false
      },
      {
        "text": "ConvertAccel",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "question": "Что такое диалоговое окно в Windows API?",
    "answers": [
      {
        "text": "Тип главного окна",
        "isCorrect": false
      },
      {
        "text": "Окно без заголовка",
        "isCorrect": false
      },
      {
        "text": "Дочернее окно кнопки",
        "isCorrect": false
      },
      {
        "text": "Вспомогательное окно для взаимодействия с пользователем",
        "isCorrect": true
      },
      {
        "text": "Всплывающая подсказка",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "question": "Какая функция создаёт модальный диалог?",
    "answers": [
      {
        "text": "DialogBox",
        "isCorrect": true
      },
      {
        "text": "CreateDialog",
        "isCorrect": false
      },
      {
        "text": "ModalDialog",
        "isCorrect": false
      },
      {
        "text": "ShowDialog",
        "isCorrect": false
      },
      {
        "text": "OpenDialog",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 76,
    "question": "Какая функция создаёт немодальный диалог?",
    "answers": [
      {
        "text": "DialogBox",
        "isCorrect": false
      },
      {
        "text": "ModelessDialog",
        "isCorrect": false
      },
      {
        "text": "OpenDialog",
        "isCorrect": false
      },
      {
        "text": "MakeDialog",
        "isCorrect": false
      },
      {
        "text": "CreateDialog",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 77,
    "question": "Какая функция завершает модальный диалог?",
    "answers": [
      {
        "text": "CloseDialog",
        "isCorrect": false
      },
      {
        "text": "DestroyDialog",
        "isCorrect": false
      },
      {
        "text": "QuitDialog",
        "isCorrect": false
      },
      {
        "text": "FinishDialog",
        "isCorrect": false
      },
      {
        "text": "EndDialog",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 78,
    "question": "Что такое ресурс в Windows API?",
    "answers": [
      {
        "text": "Системная память",
        "isCorrect": false
      },
      {
        "text": "Данные (иконки, меню, строки), встроенные в исполняемый файл",
        "isCorrect": true
      },
      {
        "text": "Дескриптор файла",
        "isCorrect": false
      },
      {
        "text": "Поток данных",
        "isCorrect": false
      },
      {
        "text": "Сетевой ресурс",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "question": "Какой файл содержит описание ресурсов Windows-приложения?",
    "answers": [
      {
        "text": ".res файл",
        "isCorrect": false
      },
      {
        "text": ".rsx файл",
        "isCorrect": false
      },
      {
        "text": ".resource файл",
        "isCorrect": false
      },
      {
        "text": ".rc файл (файл ресурсов)",
        "isCorrect": true
      },
      {
        "text": ".win файл",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "question": "Какая функция загружает строку из таблицы строк ресурсов?",
    "answers": [
      {
        "text": "LoadString",
        "isCorrect": true
      },
      {
        "text": "GetString",
        "isCorrect": false
      },
      {
        "text": "FetchString",
        "isCorrect": false
      },
      {
        "text": "ReadString",
        "isCorrect": false
      },
      {
        "text": "ImportString",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "question": "Какая функция загружает растровое изображение из ресурсов?",
    "answers": [
      {
        "text": "GetBitmap",
        "isCorrect": false
      },
      {
        "text": "FetchBitmap",
        "isCorrect": false
      },
      {
        "text": "ReadBitmap",
        "isCorrect": false
      },
      {
        "text": "OpenBitmap",
        "isCorrect": false
      },
      {
        "text": "LoadBitmap",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 82,
    "question": "Что такое HBITMAP?",
    "answers": [
      {
        "text": "Тип для пикселей",
        "isCorrect": false
      },
      {
        "text": "Указатель на изображение",
        "isCorrect": false
      },
      {
        "text": "Размер картинки",
        "isCorrect": false
      },
      {
        "text": "Формат файла",
        "isCorrect": false
      },
      {
        "text": "Дескриптор растрового изображения",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 83,
    "question": "Какая функция копирует пиксели между контекстами устройств?",
    "answers": [
      {
        "text": "CopyPixels",
        "isCorrect": false
      },
      {
        "text": "BitBlt",
        "isCorrect": true
      },
      {
        "text": "TransferBitmap",
        "isCorrect": false
      },
      {
        "text": "BlitImage",
        "isCorrect": false
      },
      {
        "text": "CopyDC",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "question": "Какая функция загружает меню из ресурсов?",
    "answers": [
      {
        "text": "GetMenu",
        "isCorrect": false
      },
      {
        "text": "LoadMenu",
        "isCorrect": true
      },
      {
        "text": "FetchMenu",
        "isCorrect": false
      },
      {
        "text": "ReadMenu",
        "isCorrect": false
      },
      {
        "text": "ImportMenu",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "question": "Что такое совместимый контекст устройства (compatible DC)?",
    "answers": [
      {
        "text": "DC для видеокарты",
        "isCorrect": false
      },
      {
        "text": "DC для принтера",
        "isCorrect": false
      },
      {
        "text": "DC другого монитора",
        "isCorrect": false
      },
      {
        "text": "DC в памяти, совместимый с экранным DC для двойной буферизации",
        "isCorrect": true
      },
      {
        "text": "Копия DC окна",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "question": "Какая функция создаёт совместимый DC?",
    "answers": [
      {
        "text": "MakeMemDC",
        "isCorrect": false
      },
      {
        "text": "NewDC",
        "isCorrect": false
      },
      {
        "text": "CloneDC",
        "isCorrect": false
      },
      {
        "text": "CreateCompatibleDC",
        "isCorrect": true
      },
      {
        "text": "CreateMemoryDC",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "question": "Какая функция создаёт совместимое растровое изображение?",
    "answers": [
      {
        "text": "MakeBitmap",
        "isCorrect": false
      },
      {
        "text": "NewBitmap",
        "isCorrect": false
      },
      {
        "text": "CloneBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateMemBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateCompatibleBitmap",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 88,
    "question": "Что такое PAINTSTRUCT?",
    "answers": [
      {
        "text": "Структура цвета пера",
        "isCorrect": false
      },
      {
        "text": "Структура с информацией о перерисовке при обработке WM_PAINT",
        "isCorrect": true
      },
      {
        "text": "Структура для создания кисти",
        "isCorrect": false
      },
      {
        "text": "Параметры контекста устройства",
        "isCorrect": false
      },
      {
        "text": "Формат шрифта",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "question": "Какое поле PAINTSTRUCT содержит дескриптор контекста устройства?",
    "answers": [
      {
        "text": "dc",
        "isCorrect": false
      },
      {
        "text": "context",
        "isCorrect": false
      },
      {
        "text": "device",
        "isCorrect": false
      },
      {
        "text": "hdc",
        "isCorrect": true
      },
      {
        "text": "hDC",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "question": "Что такое WM_MOUSEMOVE?",
    "answers": [
      {
        "text": "Сообщение о перемещении курсора мыши",
        "isCorrect": true
      },
      {
        "text": "Сообщение о прокрутке",
        "isCorrect": false
      },
      {
        "text": "Событие перетаскивания",
        "isCorrect": false
      },
      {
        "text": "Клик мышью",
        "isCorrect": false
      },
      {
        "text": "Сообщение о движении колеса",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 91,
    "question": "Как получить координаты мыши из параметра lParam сообщения WM_MOUSEMOVE?",
    "answers": [
      {
        "text": "Прямым приведением к int",
        "isCorrect": false
      },
      {
        "text": "Функцией GetMousePos",
        "isCorrect": false
      },
      {
        "text": "Макросами GET_X_LPARAM и GET_Y_LPARAM",
        "isCorrect": true
      },
      {
        "text": "Структурой MOUSEPOS",
        "isCorrect": false
      },
      {
        "text": "Функцией GetCursorPos",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "question": "Какая функция получает текущую позицию курсора?",
    "answers": [
      {
        "text": "GetMousePos",
        "isCorrect": false
      },
      {
        "text": "GetCursorPos",
        "isCorrect": true
      },
      {
        "text": "CursorPosition",
        "isCorrect": false
      },
      {
        "text": "FetchCursor",
        "isCorrect": false
      },
      {
        "text": "ReadCursorPos",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "question": "Что такое WM_RBUTTONDOWN?",
    "answers": [
      {
        "text": "Сообщение о контекстном меню",
        "isCorrect": false
      },
      {
        "text": "Нажатие средней кнопки",
        "isCorrect": false
      },
      {
        "text": "Отпускание правой кнопки",
        "isCorrect": false
      },
      {
        "text": "Двойной клик правой кнопкой",
        "isCorrect": false
      },
      {
        "text": "Сообщение о нажатии правой кнопки мыши",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 94,
    "question": "Что такое WM_MOUSEWHEEL?",
    "answers": [
      {
        "text": "Сообщение о скролле окна",
        "isCorrect": false
      },
      {
        "text": "Движение мыши",
        "isCorrect": false
      },
      {
        "text": "Нажатие колеса",
        "isCorrect": false
      },
      {
        "text": "Горизонтальная прокрутка",
        "isCorrect": false
      },
      {
        "text": "Сообщение о прокрутке колеса мыши",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 95,
    "question": "Что такое хук (hook) в Windows API?",
    "answers": [
      {
        "text": "Указатель на функцию",
        "isCorrect": false
      },
      {
        "text": "Системный вызов",
        "isCorrect": false
      },
      {
        "text": "Обработчик исключений",
        "isCorrect": false
      },
      {
        "text": "Тип сообщения",
        "isCorrect": false
      },
      {
        "text": "Механизм перехвата системных событий",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 96,
    "question": "Какая функция устанавливает хук?",
    "answers": [
      {
        "text": "InstallHook",
        "isCorrect": false
      },
      {
        "text": "CreateHook",
        "isCorrect": false
      },
      {
        "text": "AddHook",
        "isCorrect": false
      },
      {
        "text": "SetWindowsHookEx",
        "isCorrect": true
      },
      {
        "text": "RegisterHook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "question": "Какая функция удаляет хук?",
    "answers": [
      {
        "text": "RemoveHook",
        "isCorrect": false
      },
      {
        "text": "UnhookWindowsHookEx",
        "isCorrect": true
      },
      {
        "text": "DeleteHook",
        "isCorrect": false
      },
      {
        "text": "KillHook",
        "isCorrect": false
      },
      {
        "text": "DestroyHook",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "question": "Что такое WH_KEYBOARD в Windows API?",
    "answers": [
      {
        "text": "Виртуальный код клавиши",
        "isCorrect": false
      },
      {
        "text": "Состояние клавиатуры",
        "isCorrect": false
      },
      {
        "text": "Тип устройства",
        "isCorrect": false
      },
      {
        "text": "Флаг нажатой клавиши",
        "isCorrect": false
      },
      {
        "text": "Тип хука для перехвата клавиатурных сообщений",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 99,
    "question": "Что такое поток (thread) в Windows?",
    "answers": [
      {
        "text": "Очередь сообщений",
        "isCorrect": false
      },
      {
        "text": "Тип данных для массивов",
        "isCorrect": false
      },
      {
        "text": "Канал между процессами",
        "isCorrect": false
      },
      {
        "text": "Поток ввода-вывода",
        "isCorrect": false
      },
      {
        "text": "Единица исполнения внутри процесса",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 100,
    "question": "Какая функция создаёт новый поток?",
    "answers": [
      {
        "text": "StartThread",
        "isCorrect": false
      },
      {
        "text": "MakeThread",
        "isCorrect": false
      },
      {
        "text": "NewThread",
        "isCorrect": false
      },
      {
        "text": "AddThread",
        "isCorrect": false
      },
      {
        "text": "CreateThread",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 101,
    "question": "Какая функция ожидает завершения потока?",
    "answers": [
      {
        "text": "JoinThread",
        "isCorrect": false
      },
      {
        "text": "WaitThread",
        "isCorrect": false
      },
      {
        "text": "SyncThread",
        "isCorrect": false
      },
      {
        "text": "WaitForSingleObject",
        "isCorrect": true
      },
      {
        "text": "AwaitThread",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 102,
    "question": "Что такое мьютекс в Windows?",
    "answers": [
      {
        "text": "Тип сообщения",
        "isCorrect": false
      },
      {
        "text": "Специальный поток",
        "isCorrect": false
      },
      {
        "text": "Быстрый таймер",
        "isCorrect": false
      },
      {
        "text": "Очередь событий",
        "isCorrect": false
      },
      {
        "text": "Объект синхронизации для взаимного исключения",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 103,
    "question": "Какая функция создаёт мьютекс?",
    "answers": [
      {
        "text": "MakeMutex",
        "isCorrect": false
      },
      {
        "text": "NewMutex",
        "isCorrect": false
      },
      {
        "text": "InitMutex",
        "isCorrect": false
      },
      {
        "text": "CreateMutex",
        "isCorrect": true
      },
      {
        "text": "AddMutex",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 104,
    "question": "Какая функция захватывает мьютекс?",
    "answers": [
      {
        "text": "WaitForSingleObject",
        "isCorrect": true
      },
      {
        "text": "LockMutex",
        "isCorrect": false
      },
      {
        "text": "AcquireMutex",
        "isCorrect": false
      },
      {
        "text": "GetMutex",
        "isCorrect": false
      },
      {
        "text": "ClaimMutex",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 105,
    "question": "Какая функция освобождает мьютекс?",
    "answers": [
      {
        "text": "FreeMutex",
        "isCorrect": false
      },
      {
        "text": "UnlockMutex",
        "isCorrect": false
      },
      {
        "text": "DropMutex",
        "isCorrect": false
      },
      {
        "text": "DeleteMutex",
        "isCorrect": false
      },
      {
        "text": "ReleaseMutex",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 106,
    "question": "Что такое семафор в Windows?",
    "answers": [
      {
        "text": "Объект синхронизации со счётчиком",
        "isCorrect": true
      },
      {
        "text": "Тип сигнала",
        "isCorrect": false
      },
      {
        "text": "Флаг состояния потока",
        "isCorrect": false
      },
      {
        "text": "Вид таймера",
        "isCorrect": false
      },
      {
        "text": "Объект для блокировки файла",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 107,
    "question": "Какая функция создаёт семафор?",
    "answers": [
      {
        "text": "MakeSemaphore",
        "isCorrect": false
      },
      {
        "text": "NewSemaphore",
        "isCorrect": false
      },
      {
        "text": "CreateSemaphore",
        "isCorrect": true
      },
      {
        "text": "InitSemaphore",
        "isCorrect": false
      },
      {
        "text": "AddSemaphore",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 108,
    "question": "Какая функция открывает файл в Windows API?",
    "answers": [
      {
        "text": "OpenFile",
        "isCorrect": false
      },
      {
        "text": "CreateFile",
        "isCorrect": true
      },
      {
        "text": "FetchFile",
        "isCorrect": false
      },
      {
        "text": "ReadFile",
        "isCorrect": false
      },
      {
        "text": "AccessFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 109,
    "question": "Какая функция читает данные из файла?",
    "answers": [
      {
        "text": "GetFileData",
        "isCorrect": false
      },
      {
        "text": "FetchData",
        "isCorrect": false
      },
      {
        "text": "InputFile",
        "isCorrect": false
      },
      {
        "text": "ReadFile",
        "isCorrect": true
      },
      {
        "text": "LoadFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 110,
    "question": "Какая функция записывает данные в файл?",
    "answers": [
      {
        "text": "WriteFile",
        "isCorrect": true
      },
      {
        "text": "PutData",
        "isCorrect": false
      },
      {
        "text": "SaveFile",
        "isCorrect": false
      },
      {
        "text": "OutputFile",
        "isCorrect": false
      },
      {
        "text": "StoreFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 111,
    "question": "Какая функция закрывает дескриптор объекта?",
    "answers": [
      {
        "text": "DeleteHandle",
        "isCorrect": false
      },
      {
        "text": "FreeHandle",
        "isCorrect": false
      },
      {
        "text": "CloseHandle",
        "isCorrect": true
      },
      {
        "text": "ReleaseHandle",
        "isCorrect": false
      },
      {
        "text": "RemoveHandle",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 112,
    "question": "Какая функция выделяет память из кучи процесса?",
    "answers": [
      {
        "text": "MallocWin",
        "isCorrect": false
      },
      {
        "text": "AllocMem",
        "isCorrect": false
      },
      {
        "text": "WinMalloc",
        "isCorrect": false
      },
      {
        "text": "GetMemory",
        "isCorrect": false
      },
      {
        "text": "HeapAlloc",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 113,
    "question": "Какая функция освобождает память, выделенную HeapAlloc?",
    "answers": [
      {
        "text": "FreeHeap",
        "isCorrect": false
      },
      {
        "text": "HeapFree",
        "isCorrect": true
      },
      {
        "text": "DeleteMem",
        "isCorrect": false
      },
      {
        "text": "ReleaseMem",
        "isCorrect": false
      },
      {
        "text": "WinFree",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 114,
    "question": "Что такое виртуальная память в Windows?",
    "answers": [
      {
        "text": "Адресное пространство процесса, управляемое ОС",
        "isCorrect": true
      },
      {
        "text": "Оперативная память",
        "isCorrect": false
      },
      {
        "text": "Физическая память",
        "isCorrect": false
      },
      {
        "text": "Кэш процессора",
        "isCorrect": false
      },
      {
        "text": "Файл подкачки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 115,
    "question": "Какая функция выделяет виртуальную память?",
    "answers": [
      {
        "text": "AllocVirtual",
        "isCorrect": false
      },
      {
        "text": "GetVirtualMem",
        "isCorrect": false
      },
      {
        "text": "ReserveMemory",
        "isCorrect": false
      },
      {
        "text": "VirtualAlloc",
        "isCorrect": true
      },
      {
        "text": "MapMemory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 116,
    "question": "Что такое DLL (Dynamic Link Library)?",
    "answers": [
      {
        "text": "Статическая библиотека",
        "isCorrect": false
      },
      {
        "text": "Файл ресурсов",
        "isCorrect": false
      },
      {
        "text": "Динамически подключаемая библиотека с общим кодом",
        "isCorrect": true
      },
      {
        "text": "Конфигурационный файл",
        "isCorrect": false
      },
      {
        "text": "Исполняемый модуль",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 117,
    "question": "Какая функция загружает DLL во время выполнения?",
    "answers": [
      {
        "text": "ImportDLL",
        "isCorrect": false
      },
      {
        "text": "OpenDLL",
        "isCorrect": false
      },
      {
        "text": "FetchLibrary",
        "isCorrect": false
      },
      {
        "text": "AttachDLL",
        "isCorrect": false
      },
      {
        "text": "LoadLibrary",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 118,
    "question": "Какая функция получает адрес функции из DLL?",
    "answers": [
      {
        "text": "GetProcAddress",
        "isCorrect": true
      },
      {
        "text": "FindFunction",
        "isCorrect": false
      },
      {
        "text": "GetFunction",
        "isCorrect": false
      },
      {
        "text": "LocateProc",
        "isCorrect": false
      },
      {
        "text": "FetchAddress",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 119,
    "question": "Какая функция выгружает DLL?",
    "answers": [
      {
        "text": "UnloadDLL",
        "isCorrect": false
      },
      {
        "text": "FreeLibrary",
        "isCorrect": true
      },
      {
        "text": "ReleaseDLL",
        "isCorrect": false
      },
      {
        "text": "RemoveLibrary",
        "isCorrect": false
      },
      {
        "text": "DeleteDLL",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 120,
    "question": "Что такое реестр Windows?",
    "answers": [
      {
        "text": "Список запущенных процессов",
        "isCorrect": false
      },
      {
        "text": "Журнал событий",
        "isCorrect": false
      },
      {
        "text": "Системный файл настроек",
        "isCorrect": false
      },
      {
        "text": "Иерархическая база данных конфигурации системы",
        "isCorrect": true
      },
      {
        "text": "База данных файлов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 121,
    "question": "Какая функция открывает ключ реестра?",
    "answers": [
      {
        "text": "OpenRegistry",
        "isCorrect": false
      },
      {
        "text": "FetchRegKey",
        "isCorrect": false
      },
      {
        "text": "RegOpenKeyEx",
        "isCorrect": true
      },
      {
        "text": "GetRegKey",
        "isCorrect": false
      },
      {
        "text": "ReadRegistry",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 122,
    "question": "Какая функция создаёт ключ реестра?",
    "answers": [
      {
        "text": "RegCreateKeyEx",
        "isCorrect": true
      },
      {
        "text": "AddRegKey",
        "isCorrect": false
      },
      {
        "text": "MakeRegKey",
        "isCorrect": false
      },
      {
        "text": "NewRegKey",
        "isCorrect": false
      },
      {
        "text": "SetRegKey",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 123,
    "question": "Какая функция читает значение из реестра?",
    "answers": [
      {
        "text": "ReadRegValue",
        "isCorrect": false
      },
      {
        "text": "GetRegValue",
        "isCorrect": false
      },
      {
        "text": "FetchRegValue",
        "isCorrect": false
      },
      {
        "text": "RegRead",
        "isCorrect": false
      },
      {
        "text": "RegQueryValueEx",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 124,
    "question": "Какая функция записывает значение в реестр?",
    "answers": [
      {
        "text": "WriteRegValue",
        "isCorrect": false
      },
      {
        "text": "RegSetValueEx",
        "isCorrect": true
      },
      {
        "text": "PutRegValue",
        "isCorrect": false
      },
      {
        "text": "StoreRegValue",
        "isCorrect": false
      },
      {
        "text": "RegWrite",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 125,
    "question": "Какая функция закрывает ключ реестра?",
    "answers": [
      {
        "text": "CloseRegistry",
        "isCorrect": false
      },
      {
        "text": "FreeRegKey",
        "isCorrect": false
      },
      {
        "text": "ReleaseRegKey",
        "isCorrect": false
      },
      {
        "text": "RegCloseKey",
        "isCorrect": true
      },
      {
        "text": "DeleteRegKey",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 126,
    "question": "Что такое событие (event) в Windows API?",
    "answers": [
      {
        "text": "Объект синхронизации с сигнальным состоянием",
        "isCorrect": true
      },
      {
        "text": "Сообщение окну",
        "isCorrect": false
      },
      {
        "text": "Прерывание процессора",
        "isCorrect": false
      },
      {
        "text": "Тип исключения",
        "isCorrect": false
      },
      {
        "text": "Системный вызов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 127,
    "question": "Какая функция создаёт событие (event)?",
    "answers": [
      {
        "text": "MakeEvent",
        "isCorrect": false
      },
      {
        "text": "NewEvent",
        "isCorrect": false
      },
      {
        "text": "CreateEvent",
        "isCorrect": true
      },
      {
        "text": "AddEvent",
        "isCorrect": false
      },
      {
        "text": "InitEvent",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 128,
    "question": "Какая функция переводит событие в сигнальное состояние?",
    "answers": [
      {
        "text": "SignalEvent",
        "isCorrect": false
      },
      {
        "text": "SetEvent",
        "isCorrect": true
      },
      {
        "text": "FireEvent",
        "isCorrect": false
      },
      {
        "text": "TriggerEvent",
        "isCorrect": false
      },
      {
        "text": "ActivateEvent",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 129,
    "question": "Какая функция сбрасывает событие в несигнальное состояние?",
    "answers": [
      {
        "text": "ClearEvent",
        "isCorrect": false
      },
      {
        "text": "UnsetEvent",
        "isCorrect": false
      },
      {
        "text": "CancelEvent",
        "isCorrect": false
      },
      {
        "text": "DeactivateEvent",
        "isCorrect": false
      },
      {
        "text": "ResetEvent",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 130,
    "question": "Что такое pipe (канал) в Windows API?",
    "answers": [
      {
        "text": "Тип потока ввода",
        "isCorrect": false
      },
      {
        "text": "Сетевое соединение",
        "isCorrect": false
      },
      {
        "text": "Буфер сообщений",
        "isCorrect": false
      },
      {
        "text": "Механизм межпроцессного взаимодействия через поток данных",
        "isCorrect": true
      },
      {
        "text": "Тип файла",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 131,
    "question": "Какая функция создаёт анонимный канал?",
    "answers": [
      {
        "text": "CreatePipe",
        "isCorrect": true
      },
      {
        "text": "MakePipe",
        "isCorrect": false
      },
      {
        "text": "NewPipe",
        "isCorrect": false
      },
      {
        "text": "OpenPipe",
        "isCorrect": false
      },
      {
        "text": "InitPipe",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 132,
    "question": "Что такое именованный канал (named pipe)?",
    "answers": [
      {
        "text": "Канал с паролем",
        "isCorrect": false
      },
      {
        "text": "Канал с именем, доступный между разными процессами",
        "isCorrect": true
      },
      {
        "text": "Защищённый канал",
        "isCorrect": false
      },
      {
        "text": "Сетевой сокет",
        "isCorrect": false
      },
      {
        "text": "Зашифрованный буфер",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 133,
    "question": "Какая функция создаёт именованный канал?",
    "answers": [
      {
        "text": "MakeNamedPipe",
        "isCorrect": false
      },
      {
        "text": "NewNamedPipe",
        "isCorrect": false
      },
      {
        "text": "CreateNamedPipe",
        "isCorrect": true
      },
      {
        "text": "OpenNamedPipe",
        "isCorrect": false
      },
      {
        "text": "AddNamedPipe",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 134,
    "question": "Что такое WM_CLOSE?",
    "answers": [
      {
        "text": "Сообщение об уничтожении окна",
        "isCorrect": false
      },
      {
        "text": "Завершение приложения",
        "isCorrect": false
      },
      {
        "text": "Скрытие окна",
        "isCorrect": false
      },
      {
        "text": "Сообщение о запросе закрытия окна",
        "isCorrect": true
      },
      {
        "text": "Минимизация окна",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 135,
    "question": "Что произойдёт, если не вызвать DefWindowProc для WM_CLOSE?",
    "answers": [
      {
        "text": "Окно закроется автоматически",
        "isCorrect": false
      },
      {
        "text": "Приложение завершится",
        "isCorrect": false
      },
      {
        "text": "Система выдаст ошибку",
        "isCorrect": false
      },
      {
        "text": "Окно скроется",
        "isCorrect": false
      },
      {
        "text": "Окно не закроется — нужно вызвать DestroyWindow вручную",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 136,
    "question": "Что такое WM_ACTIVATE?",
    "answers": [
      {
        "text": "Сообщение об активации или деактивации окна",
        "isCorrect": true
      },
      {
        "text": "Запуск приложения",
        "isCorrect": false
      },
      {
        "text": "Нажатие на заголовок",
        "isCorrect": false
      },
      {
        "text": "Получение фокуса ввода",
        "isCorrect": false
      },
      {
        "text": "Переключение между окнами",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 137,
    "question": "Что такое WM_SETFOCUS?",
    "answers": [
      {
        "text": "Установка курсора",
        "isCorrect": false
      },
      {
        "text": "Активация окна",
        "isCorrect": false
      },
      {
        "text": "Сообщение о получении окном фокуса клавиатуры",
        "isCorrect": true
      },
      {
        "text": "Выбор элемента управления",
        "isCorrect": false
      },
      {
        "text": "Первый клик мышью",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 138,
    "question": "Что такое WM_KILLFOCUS?",
    "answers": [
      {
        "text": "Закрытие окна",
        "isCorrect": false
      },
      {
        "text": "Деактивация приложения",
        "isCorrect": false
      },
      {
        "text": "Сообщение об утрате окном фокуса клавиатуры",
        "isCorrect": true
      },
      {
        "text": "Минимизация",
        "isCorrect": false
      },
      {
        "text": "Потеря захвата мыши",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 139,
    "question": "Что такое RECT в Windows API?",
    "answers": [
      {
        "text": "Стиль рамки окна",
        "isCorrect": false
      },
      {
        "text": "Функция рисования прямоугольника",
        "isCorrect": false
      },
      {
        "text": "Размер окна",
        "isCorrect": false
      },
      {
        "text": "Тип для хранения цвета",
        "isCorrect": false
      },
      {
        "text": "Структура, описывающая прямоугольную область координатами",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 140,
    "question": "Что такое POINT в Windows API?",
    "answers": [
      {
        "text": "Структура с координатами точки (x, y)",
        "isCorrect": true
      },
      {
        "text": "Размер шрифта",
        "isCorrect": false
      },
      {
        "text": "Тип данных для пикселя",
        "isCorrect": false
      },
      {
        "text": "Указатель в памяти",
        "isCorrect": false
      },
      {
        "text": "Параметр сообщения",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 141,
    "question": "Что такое SIZE в Windows API?",
    "answers": [
      {
        "text": "Тип для размера памяти",
        "isCorrect": false
      },
      {
        "text": "Размер файла",
        "isCorrect": false
      },
      {
        "text": "Длина строки",
        "isCorrect": false
      },
      {
        "text": "Количество пикселей",
        "isCorrect": false
      },
      {
        "text": "Структура с шириной и высотой (cx, cy)",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 142,
    "question": "Какая функция получает размеры клиентской области окна?",
    "answers": [
      {
        "text": "WindowDimensions",
        "isCorrect": false
      },
      {
        "text": "ClientArea",
        "isCorrect": false
      },
      {
        "text": "GetClientSize",
        "isCorrect": false
      },
      {
        "text": "GetClientRect",
        "isCorrect": true
      },
      {
        "text": "GetWindowSize",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 143,
    "question": "Что такое клиентская область окна?",
    "answers": [
      {
        "text": "Вся площадь окна",
        "isCorrect": false
      },
      {
        "text": "Область заголовка",
        "isCorrect": false
      },
      {
        "text": "Область окна без заголовка и рамок, доступная для рисования",
        "isCorrect": true
      },
      {
        "text": "Рабочий стол",
        "isCorrect": false
      },
      {
        "text": "Область системного меню",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 144,
    "question": "Какая функция получает прямоугольник всего окна включая рамку?",
    "answers": [
      {
        "text": "WindowBounds",
        "isCorrect": false
      },
      {
        "text": "GetFrameRect",
        "isCorrect": false
      },
      {
        "text": "GetOuterRect",
        "isCorrect": false
      },
      {
        "text": "GetFullRect",
        "isCorrect": false
      },
      {
        "text": "GetWindowRect",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 145,
    "question": "Какой тип данных TCHAR используется для?",
    "answers": [
      {
        "text": "Только Unicode символа",
        "isCorrect": false
      },
      {
        "text": "Типа для дескриптора",
        "isCorrect": false
      },
      {
        "text": "Только ANSI символа",
        "isCorrect": false
      },
      {
        "text": "Числового типа",
        "isCorrect": false
      },
      {
        "text": "Символа, совместимого с Unicode и ANSI в зависимости от сборки",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 146,
    "question": "Что такое LPCSTR в Windows API?",
    "answers": [
      {
        "text": "Тип для пути к файлу",
        "isCorrect": false
      },
      {
        "text": "Длинная строка",
        "isCorrect": false
      },
      {
        "text": "Указатель на структуру",
        "isCorrect": false
      },
      {
        "text": "Unicode строка",
        "isCorrect": false
      },
      {
        "text": "Константный указатель на строку ANSI (char*)",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 147,
    "question": "Что такое LPWSTR в Windows API?",
    "answers": [
      {
        "text": "Указатель на ресурс",
        "isCorrect": false
      },
      {
        "text": "Широкий символ",
        "isCorrect": false
      },
      {
        "text": "Тип для длинных чисел",
        "isCorrect": false
      },
      {
        "text": "Ссылка на окно",
        "isCorrect": false
      },
      {
        "text": "Указатель на строку Unicode (wchar_t*)",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 148,
    "question": "Что такое BOOL в Windows API?",
    "answers": [
      {
        "text": "Тип C++ bool",
        "isCorrect": false
      },
      {
        "text": "Флаг битовой маски",
        "isCorrect": false
      },
      {
        "text": "Тип для статуса ошибки",
        "isCorrect": false
      },
      {
        "text": "Логический регистр",
        "isCorrect": false
      },
      {
        "text": "Целочисленный тип для логических значений (TRUE/FALSE)",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 149,
    "question": "Какая функция получает последнюю ошибку Windows API?",
    "answers": [
      {
        "text": "FetchError",
        "isCorrect": false
      },
      {
        "text": "ReadError",
        "isCorrect": false
      },
      {
        "text": "LastError",
        "isCorrect": false
      },
      {
        "text": "GetError",
        "isCorrect": false
      },
      {
        "text": "GetLastError",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 150,
    "question": "Что такое контекстное меню и как его вызвать?",
    "answers": [
      {
        "text": "Меню в строке меню окна",
        "isCorrect": false
      },
      {
        "text": "Выпадающий список",
        "isCorrect": false
      },
      {
        "text": "Системное меню окна",
        "isCorrect": false
      },
      {
        "text": "Меню пуск",
        "isCorrect": false
      },
      {
        "text": "Меню по правой кнопке мыши, вызывается через TrackPopupMenu",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 151,
    "question": "Какая функция отображает всплывающее меню?",
    "answers": [
      {
        "text": "DisplayMenu",
        "isCorrect": false
      },
      {
        "text": "OpenContextMenu",
        "isCorrect": false
      },
      {
        "text": "PopMenu",
        "isCorrect": false
      },
      {
        "text": "ShowPopupMenu",
        "isCorrect": false
      },
      {
        "text": "TrackPopupMenu",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 152,
    "question": "Что такое статус-бар (status bar) в Windows?",
    "answers": [
      {
        "text": "Полоса прокрутки",
        "isCorrect": false
      },
      {
        "text": "Строка заголовка",
        "isCorrect": false
      },
      {
        "text": "Панель инструментов",
        "isCorrect": false
      },
      {
        "text": "Системный трей",
        "isCorrect": false
      },
      {
        "text": "Панель в нижней части окна для отображения информации",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 153,
    "question": "Что такое тулбар (toolbar) в Windows API?",
    "answers": [
      {
        "text": "Строка меню",
        "isCorrect": false
      },
      {
        "text": "Статус-бар",
        "isCorrect": false
      },
      {
        "text": "Панель задач",
        "isCorrect": false
      },
      {
        "text": "Контекстное меню",
        "isCorrect": false
      },
      {
        "text": "Панель инструментов с кнопками быстрого доступа",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 154,
    "question": "Что такое комбо-бокс (ComboBox)?",
    "answers": [
      {
        "text": "Кнопка с меню",
        "isCorrect": false
      },
      {
        "text": "Список с множественным выбором",
        "isCorrect": false
      },
      {
        "text": "Поле ввода числа",
        "isCorrect": false
      },
      {
        "text": "Флажок с несколькими вариантами",
        "isCorrect": false
      },
      {
        "text": "Элемент управления — сочетание поля ввода и выпадающего списка",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 155,
    "question": "Что такое чекбокс (CheckBox) в Windows API?",
    "answers": [
      {
        "text": "Переключатель из группы",
        "isCorrect": false
      },
      {
        "text": "Кнопка подтверждения",
        "isCorrect": false
      },
      {
        "text": "Флаг в реестре",
        "isCorrect": false
      },
      {
        "text": "Двоичный параметр меню",
        "isCorrect": false
      },
      {
        "text": "Элемент управления для включения/выключения параметра",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 156,
    "question": "Что такое RadioButton в Windows API?",
    "answers": [
      {
        "text": "Кнопка с меню",
        "isCorrect": false
      },
      {
        "text": "Флажок включения",
        "isCorrect": false
      },
      {
        "text": "Кнопка подтверждения",
        "isCorrect": false
      },
      {
        "text": "Переключатель режима",
        "isCorrect": false
      },
      {
        "text": "Элемент выбора одного варианта из группы взаимоисключающих",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 157,
    "question": "Что такое ScrollBar в Windows API?",
    "answers": [
      {
        "text": "Индикатор прогресса",
        "isCorrect": false
      },
      {
        "text": "Ползунок уровня громкости",
        "isCorrect": false
      },
      {
        "text": "Элемент управления для прокрутки содержимого",
        "isCorrect": true
      },
      {
        "text": "Шкала времени",
        "isCorrect": false
      },
      {
        "text": "Горизонтальный разделитель",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 158,
    "question": "Что такое ProgressBar в Windows API?",
    "answers": [
      {
        "text": "Элемент управления для отображения прогресса операции",
        "isCorrect": true
      },
      {
        "text": "Полоса прокрутки",
        "isCorrect": false
      },
      {
        "text": "Шкала уровня сигнала",
        "isCorrect": false
      },
      {
        "text": "Ползунок значения",
        "isCorrect": false
      },
      {
        "text": "Индикатор загрузки CPU",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 159,
    "question": "Что такое TreeView в Windows API?",
    "answers": [
      {
        "text": "Список файлов",
        "isCorrect": false
      },
      {
        "text": "Таблица с данными",
        "isCorrect": false
      },
      {
        "text": "Группа элементов",
        "isCorrect": false
      },
      {
        "text": "Структура папок только",
        "isCorrect": false
      },
      {
        "text": "Элемент управления для отображения иерархических данных",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 160,
    "question": "Что такое ListView в Windows API?",
    "answers": [
      {
        "text": "Простой список строк",
        "isCorrect": false
      },
      {
        "text": "Элемент управления для отображения списка элементов с иконками",
        "isCorrect": true
      },
      {
        "text": "Таблица данных",
        "isCorrect": false
      },
      {
        "text": "Дерево файлов",
        "isCorrect": false
      },
      {
        "text": "Список выбора",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 161,
    "question": "Какая функция инициализирует общие элементы управления (Common Controls)?",
    "answers": [
      {
        "text": "LoadCommonControls",
        "isCorrect": false
      },
      {
        "text": "StartControls",
        "isCorrect": false
      },
      {
        "text": "RegisterControls",
        "isCorrect": false
      },
      {
        "text": "InitCommonControls или InitCommonControlsEx",
        "isCorrect": true
      },
      {
        "text": "InitControls",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 162,
    "question": "Какой заголовочный файл нужен для работы с Common Controls?",
    "answers": [
      {
        "text": "commctrl.h",
        "isCorrect": true
      },
      {
        "text": "controls.h",
        "isCorrect": false
      },
      {
        "text": "winctrl.h",
        "isCorrect": false
      },
      {
        "text": "comctl.h",
        "isCorrect": false
      },
      {
        "text": "commonctrl.h",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 163,
    "question": "Какая функция получает дескриптор рабочего стола?",
    "answers": [
      {
        "text": "DesktopHandle",
        "isCorrect": false
      },
      {
        "text": "GetDesktop",
        "isCorrect": false
      },
      {
        "text": "GetDesktopWindow",
        "isCorrect": true
      },
      {
        "text": "FetchDesktop",
        "isCorrect": false
      },
      {
        "text": "OpenDesktop",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 164,
    "question": "Что такое WM_CHAR?",
    "answers": [
      {
        "text": "Код нажатой клавиши",
        "isCorrect": false
      },
      {
        "text": "Сообщение с символом, введённым с клавиатуры",
        "isCorrect": true
      },
      {
        "text": "Unicode символ",
        "isCorrect": false
      },
      {
        "text": "Специальный символ",
        "isCorrect": false
      },
      {
        "text": "Управляющий код клавиши",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 165,
    "question": "Какая функция получает состояние виртуальной клавиши?",
    "answers": [
      {
        "text": "CheckKey",
        "isCorrect": false
      },
      {
        "text": "KeyStatus",
        "isCorrect": false
      },
      {
        "text": "GetVirtualKey",
        "isCorrect": false
      },
      {
        "text": "ReadKey",
        "isCorrect": false
      },
      {
        "text": "GetKeyState",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 166,
    "question": "Что такое DWORD в Windows API?",
    "answers": [
      {
        "text": "Двойное слово со знаком",
        "isCorrect": false
      },
      {
        "text": "64-битное число",
        "isCorrect": false
      },
      {
        "text": "Беззнаковое 32-битное целое число",
        "isCorrect": true
      },
      {
        "text": "Тип для дескрипторов",
        "isCorrect": false
      },
      {
        "text": "Тип строки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 167,
    "question": "Что такое WORD в Windows API?",
    "answers": [
      {
        "text": "Беззнаковое 16-битное целое число",
        "isCorrect": true
      },
      {
        "text": "Строка символов",
        "isCorrect": false
      },
      {
        "text": "32-битное число",
        "isCorrect": false
      },
      {
        "text": "Тип для сообщений",
        "isCorrect": false
      },
      {
        "text": "Зарезервированное слово",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 168,
    "question": "Что такое BYTE в Windows API?",
    "answers": [
      {
        "text": "Знаковый символ",
        "isCorrect": false
      },
      {
        "text": "Минимальная единица хранения с знаком",
        "isCorrect": false
      },
      {
        "text": "Беззнаковое 8-битное целое число",
        "isCorrect": true
      },
      {
        "text": "Тип для флагов",
        "isCorrect": false
      },
      {
        "text": "Половина слова",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 169,
    "question": "Что такое HANDLE в Windows API?",
    "answers": [
      {
        "text": "Указатель на функцию",
        "isCorrect": false
      },
      {
        "text": "Обобщённый тип дескриптора для системных объектов",
        "isCorrect": true
      },
      {
        "text": "Адрес в памяти",
        "isCorrect": false
      },
      {
        "text": "Идентификатор сообщения",
        "isCorrect": false
      },
      {
        "text": "Тип для ресурсов",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 170,
    "question": "Что такое CALLBACK в объявлении функции Windows API?",
    "answers": [
      {
        "text": "Тип возвращаемого значения",
        "isCorrect": false
      },
      {
        "text": "Признак виртуальной функции",
        "isCorrect": false
      },
      {
        "text": "Модификатор экспорта",
        "isCorrect": false
      },
      {
        "text": "Синоним extern",
        "isCorrect": false
      },
      {
        "text": "Соглашение о вызове __stdcall для функций обратного вызова",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 171,
    "question": "Что такое WINAPI в объявлении функций?",
    "answers": [
      {
        "text": "Пространство имён Windows",
        "isCorrect": false
      },
      {
        "text": "Тип импорта функции",
        "isCorrect": false
      },
      {
        "text": "Соглашение о вызове __stdcall для функций Windows API",
        "isCorrect": true
      },
      {
        "text": "Модификатор inline",
        "isCorrect": false
      },
      {
        "text": "Признак системного вызова",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 172,
    "question": "Что такое LRESULT — тип возвращаемого значения оконной процедуры?",
    "answers": [
      {
        "text": "Знаковое целое 32/64-битное — результат обработки сообщения",
        "isCorrect": true
      },
      {
        "text": "Тип для результата логической операции",
        "isCorrect": false
      },
      {
        "text": "Код ошибки",
        "isCorrect": false
      },
      {
        "text": "Дескриптор объекта",
        "isCorrect": false
      },
      {
        "text": "Статус завершения потока",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 173,
    "question": "Что такое WM_GETMINMAXINFO?",
    "answers": [
      {
        "text": "Запрос размеров клиентской области",
        "isCorrect": false
      },
      {
        "text": "Получение информации о рамке",
        "isCorrect": false
      },
      {
        "text": "Запрос позиции окна",
        "isCorrect": false
      },
      {
        "text": "Сообщение для установки минимальных и максимальных размеров окна",
        "isCorrect": true
      },
      {
        "text": "Сообщение о переполнении",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 174,
    "question": "Что такое WM_MOVE?",
    "answers": [
      {
        "text": "Команда переместить окно",
        "isCorrect": false
      },
      {
        "text": "Сообщение, посылаемое при перемещении окна",
        "isCorrect": true
      },
      {
        "text": "Движение мыши над окном",
        "isCorrect": false
      },
      {
        "text": "Перетаскивание дочернего окна",
        "isCorrect": false
      },
      {
        "text": "Изменение позиции элемента",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 175,
    "question": "Какая функция Windows API используется для получения дескриптора экземпляра модуля приложения?",
    "answers": [
      {
        "text": "GetInstance",
        "isCorrect": false
      },
      {
        "text": "GetAppHandle",
        "isCorrect": false
      },
      {
        "text": "LoadModule",
        "isCorrect": false
      },
      {
        "text": "GetModuleHandle",
        "isCorrect": true
      },
      {
        "text": "GetModule",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 176,
    "question": "Какой тип данных в Windows API предназначен для хранения символов (поддерживает как ANSI, так и Unicode)?",
    "answers": [
      {
        "text": "CHAR",
        "isCorrect": false
      },
      {
        "text": "TCHAR",
        "isCorrect": true
      },
      {
        "text": "WCHAR",
        "isCorrect": false
      },
      {
        "text": "STRING",
        "isCorrect": false
      },
      {
        "text": "TSTR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 177,
    "question": "Какая функция используется для обновления прямоугольной области окна, помечая ее как «требующую перерисовки»?",
    "answers": [
      {
        "text": "UpdateRect",
        "isCorrect": false
      },
      {
        "text": "RefreshRect",
        "isCorrect": false
      },
      {
        "text": "RedrawRect",
        "isCorrect": false
      },
      {
        "text": "PaintRect",
        "isCorrect": false
      },
      {
        "text": "InvalidateRect",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 178,
    "question": "Какая структура используется для хранения информации о системе, например, разрешении экрана?",
    "answers": [
      {
        "text": "SYSTEM_INFO",
        "isCorrect": true
      },
      {
        "text": "SCREEN_INFO",
        "isCorrect": false
      },
      {
        "text": "DISPLAY_INFO",
        "isCorrect": false
      },
      {
        "text": "SYSTEM_CONFIG",
        "isCorrect": false
      },
      {
        "text": "MONITOR_INFO",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 179,
    "question": "Какая функция позволяет узнать размеры клиентской области окна?",
    "answers": [
      {
        "text": "GetWindowRect",
        "isCorrect": false
      },
      {
        "text": "GetClientSize",
        "isCorrect": false
      },
      {
        "text": "GetClientRect",
        "isCorrect": true
      },
      {
        "text": "GetInnerRect",
        "isCorrect": false
      },
      {
        "text": "GetAreaSize",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 180,
    "question": "Какой стиль окна обеспечивает наличие системного меню и кнопки закрытия?",
    "answers": [
      {
        "text": "WS_CAPTION",
        "isCorrect": false
      },
      {
        "text": "WS_SYSMENU",
        "isCorrect": true
      },
      {
        "text": "WS_BORDER",
        "isCorrect": false
      },
      {
        "text": "WS_OVERLAPPED",
        "isCorrect": false
      },
      {
        "text": "WS_DLGFRAME",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 181,
    "question": "Как называется процесс, при котором операционная система посылает сообщение приложению?",
    "answers": [
      {
        "text": "Event Processing",
        "isCorrect": false
      },
      {
        "text": "Signal Handling",
        "isCorrect": false
      },
      {
        "text": "Process Messaging",
        "isCorrect": false
      },
      {
        "text": "Message Queuing",
        "isCorrect": true
      },
      {
        "text": "Thread Signaling",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 182,
    "question": "Какой параметр функции CreateWindow определяет стиль создаваемого окна?",
    "answers": [
      {
        "text": "dwStyle",
        "isCorrect": true
      },
      {
        "text": "dwFlags",
        "isCorrect": false
      },
      {
        "text": "nStyle",
        "isCorrect": false
      },
      {
        "text": "style",
        "isCorrect": false
      },
      {
        "text": "windowStyle",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 183,
    "question": "Какая функция используется для скрытия окна?",
    "answers": [
      {
        "text": "HideWindow",
        "isCorrect": false
      },
      {
        "text": "SetWindowVisible(false)",
        "isCorrect": false
      },
      {
        "text": "ShowWindow(hwnd, SW_HIDE)",
        "isCorrect": true
      },
      {
        "text": "DestroyWindow",
        "isCorrect": false
      },
      {
        "text": "CloseWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 184,
    "question": "Какая функция позволяет переместить окно в новую позицию?",
    "answers": [
      {
        "text": "MoveWindow",
        "isCorrect": false
      },
      {
        "text": "SetWindowLocation",
        "isCorrect": false
      },
      {
        "text": "RepositionWindow",
        "isCorrect": false
      },
      {
        "text": "ChangeWindowPos",
        "isCorrect": false
      },
      {
        "text": "SetWindowPos",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 185,
    "question": "Какое сообщение получает окно при потере фокуса ввода?",
    "answers": [
      {
        "text": "WM_LOSTFOCUS",
        "isCorrect": false
      },
      {
        "text": "WM_KILLFOCUS",
        "isCorrect": true
      },
      {
        "text": "WM_FOCUSOFF",
        "isCorrect": false
      },
      {
        "text": "WM_SETFOCUS(false)",
        "isCorrect": false
      },
      {
        "text": "WM_EXITFOCUS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 186,
    "question": "Какой тип данных используется для представления размера (ширина и высота)?",
    "answers": [
      {
        "text": "SIZE",
        "isCorrect": true
      },
      {
        "text": "RECT",
        "isCorrect": false
      },
      {
        "text": "POINT",
        "isCorrect": false
      },
      {
        "text": "DIMENSION",
        "isCorrect": false
      },
      {
        "text": "WIDTHHEIGHT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 187,
    "question": "Какая функция возвращает ширину экрана в пикселях?",
    "answers": [
      {
        "text": "GetScreenWidth",
        "isCorrect": false
      },
      {
        "text": "GetDisplayWidth",
        "isCorrect": false
      },
      {
        "text": "GetScreenSize",
        "isCorrect": false
      },
      {
        "text": "GetSystemMetrics(SM_CXSCREEN)",
        "isCorrect": true
      },
      {
        "text": "GetSystemWidth",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 188,
    "question": "Какая функция создает «кисть» для заливки фона цветом?",
    "answers": [
      {
        "text": "CreateBrush",
        "isCorrect": false
      },
      {
        "text": "NewBrush",
        "isCorrect": false
      },
      {
        "text": "CreateSolidBrush",
        "isCorrect": true
      },
      {
        "text": "FillBrush",
        "isCorrect": false
      },
      {
        "text": "SetBrushColor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 189,
    "question": "Какой макрос проверяет, успешно ли завершилась функция (возвращает ли она 0/NULL)?",
    "answers": [
      {
        "text": "FAILED()",
        "isCorrect": false
      },
      {
        "text": "IS_VALID()",
        "isCorrect": false
      },
      {
        "text": "IS_OK()",
        "isCorrect": false
      },
      {
        "text": "CHECK()",
        "isCorrect": false
      },
      {
        "text": "SUCCEEDED()",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 190,
    "question": "Какая функция позволяет получить доступ к данным, связанным с окном (например, указатель на объект класса)?",
    "answers": [
      {
        "text": "GetWindowLongPtr",
        "isCorrect": true
      },
      {
        "text": "GetWindowData",
        "isCorrect": false
      },
      {
        "text": "GetObjectPtr",
        "isCorrect": false
      },
      {
        "text": "GetWindowInfo",
        "isCorrect": false
      },
      {
        "text": "GetWindowExtra",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 191,
    "question": "Какая функция устанавливает данные (например, указатель) для окна?",
    "answers": [
      {
        "text": "SetWindowData",
        "isCorrect": false
      },
      {
        "text": "SetWindowLongPtr",
        "isCorrect": true
      },
      {
        "text": "SetObjectPtr",
        "isCorrect": false
      },
      {
        "text": "SetWindowInfo",
        "isCorrect": false
      },
      {
        "text": "SetWindowExtra",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 192,
    "question": "Какое сообщение отправляется при изменении системных параметров (например, цвета фона)?",
    "answers": [
      {
        "text": "WM_SETTINGCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_SYSCOLORCHANGE",
        "isCorrect": true
      },
      {
        "text": "WM_COLORCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_DISPLAYCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_WINCHANGE",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 193,
    "question": "Какая функция загружает стандартный системный курсор (например, стрелку)?",
    "answers": [
      {
        "text": "GetCursor",
        "isCorrect": false
      },
      {
        "text": "SetCursor",
        "isCorrect": false
      },
      {
        "text": "LoadSystemCursor",
        "isCorrect": false
      },
      {
        "text": "LoadCursor(NULL, IDC_ARROW)",
        "isCorrect": true
      },
      {
        "text": "GetSystemCursor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 194,
    "question": "Что возвращает GetMessage, если приложение должно завершить работу?",
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
        "text": "-1",
        "isCorrect": false
      },
      {
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "text": "NULL",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 195,
    "question": "Какая функция преобразует виртуальный код клавиши в скан-код?",
    "answers": [
      {
        "text": "VkKeyScan",
        "isCorrect": false
      },
      {
        "text": "ConvertKey",
        "isCorrect": false
      },
      {
        "text": "TranslateKey",
        "isCorrect": false
      },
      {
        "text": "GetScanCode",
        "isCorrect": false
      },
      {
        "text": "MapVirtualKey",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 196,
    "question": "Какая функция используется для обработки сообщений, которые не были обработаны вручную?",
    "answers": [
      {
        "text": "DefaultHandler",
        "isCorrect": false
      },
      {
        "text": "BaseProc",
        "isCorrect": false
      },
      {
        "text": "DefWindowProc",
        "isCorrect": true
      },
      {
        "text": "HandleDefault",
        "isCorrect": false
      },
      {
        "text": "ProcessDefault",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 197,
    "question": "Какой тип данных используется для параметров сообщения (32-бит или 64-бит в зависимости от ОС)?",
    "answers": [
      {
        "text": "WPARAM",
        "isCorrect": false
      },
      {
        "text": "LPARAM",
        "isCorrect": true
      },
      {
        "text": "UINT_PTR",
        "isCorrect": false
      },
      {
        "text": "LONG_PTR",
        "isCorrect": false
      },
      {
        "text": "PTR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 198,
    "question": "Какая функция позволяет принудительно вызвать перерисовку окна прямо сейчас?",
    "answers": [
      {
        "text": "UpdateWindow",
        "isCorrect": true
      },
      {
        "text": "RefreshWindow",
        "isCorrect": false
      },
      {
        "text": "RedrawWindow",
        "isCorrect": false
      },
      {
        "text": "PaintWindow",
        "isCorrect": false
      },
      {
        "text": "FlushWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 199,
    "question": "Как называется основная структура для описания класса окна?",
    "answers": [
      {
        "text": "WNDCLASS",
        "isCorrect": false
      },
      {
        "text": "WINDOW_CLASS",
        "isCorrect": false
      },
      {
        "text": "CLASS_STRUCT",
        "isCorrect": false
      },
      {
        "text": "WND_INFO",
        "isCorrect": false
      },
      {
        "text": "WNDCLASSEX",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 200,
    "question": "Какая функция используется для вывода текста в определенную точку?",
    "answers": [
      {
        "text": "DrawText",
        "isCorrect": false
      },
      {
        "text": "WriteText",
        "isCorrect": false
      },
      {
        "text": "TextOut",
        "isCorrect": true
      },
      {
        "text": "PrintText",
        "isCorrect": false
      },
      {
        "text": "OutputText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 201,
    "question": "Какая функция создает перо с заданным цветом и стилем?",
    "answers": [
      {
        "text": "CreateLine",
        "isCorrect": false
      },
      {
        "text": "MakePen",
        "isCorrect": false
      },
      {
        "text": "SelectPen",
        "isCorrect": false
      },
      {
        "text": "CreatePen",
        "isCorrect": true
      },
      {
        "text": "NewPen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 202,
    "question": "Какая функция позволяет выбрать объект (перо, кисть) в контекст устройства?",
    "answers": [
      {
        "text": "UseObject",
        "isCorrect": false
      },
      {
        "text": "SelectObject",
        "isCorrect": true
      },
      {
        "text": "SetObject",
        "isCorrect": false
      },
      {
        "text": "ApplyObject",
        "isCorrect": false
      },
      {
        "text": "AttachObject",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 203,
    "question": "Какая функция удаляет объект GDI, освобождая ресурсы?",
    "answers": [
      {
        "text": "FreeObject",
        "isCorrect": false
      },
      {
        "text": "ReleaseObject",
        "isCorrect": false
      },
      {
        "text": "DestroyObject",
        "isCorrect": false
      },
      {
        "text": "RemoveObject",
        "isCorrect": false
      },
      {
        "text": "DeleteObject",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 204,
    "question": "Что такое «дескриптор» (handle) в Windows API с точки зрения типа данных?",
    "answers": [
      {
        "text": "PVOID",
        "isCorrect": true
      },
      {
        "text": "INT",
        "isCorrect": false
      },
      {
        "text": "LONG",
        "isCorrect": false
      },
      {
        "text": "DWORD",
        "isCorrect": false
      },
      {
        "text": "UINT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 205,
    "question": "Какая функция используется для получения идентификатора текущего процесса (PID)?",
    "answers": [
      {
        "text": "GetProcessId",
        "isCorrect": false
      },
      {
        "text": "GetPID",
        "isCorrect": false
      },
      {
        "text": "GetCurrentProcessId",
        "isCorrect": true
      },
      {
        "text": "GetCurrentPID",
        "isCorrect": false
      },
      {
        "text": "GetSystemProcessId",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 206,
    "question": "Какая функция создает новый процесс в Windows?",
    "answers": [
      {
        "text": "RunProcess",
        "isCorrect": false
      },
      {
        "text": "CreateProcess",
        "isCorrect": true
      },
      {
        "text": "StartProcess",
        "isCorrect": false
      },
      {
        "text": "ExecuteProcess",
        "isCorrect": false
      },
      {
        "text": "LaunchProcess",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 207,
    "question": "Как называется функция, которая завершает работу текущего процесса?",
    "answers": [
      {
        "text": "TerminateProcess",
        "isCorrect": false
      },
      {
        "text": "CloseProcess",
        "isCorrect": false
      },
      {
        "text": "StopProcess",
        "isCorrect": false
      },
      {
        "text": "ExitProcess",
        "isCorrect": true
      },
      {
        "text": "QuitProcess",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 208,
    "question": "Какой макрос позволяет безопасно объединять строку с типом TCHAR в зависимости от настроек проекта?",
    "answers": [
      {
        "text": "TEXT()",
        "isCorrect": true
      },
      {
        "text": "T()",
        "isCorrect": false
      },
      {
        "text": "W()",
        "isCorrect": false
      },
      {
        "text": "STR()",
        "isCorrect": false
      },
      {
        "text": "L()",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 209,
    "question": "Какое сообщение отправляется окну, когда пользователь нажимает левую кнопку мыши?",
    "answers": [
      {
        "text": "WM_MOUSECLICK",
        "isCorrect": false
      },
      {
        "text": "WM_LEFTDOWN",
        "isCorrect": false
      },
      {
        "text": "WM_LBUTTONDOWN",
        "isCorrect": true
      },
      {
        "text": "WM_CLICK",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSEPRESS",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 210,
    "question": "Какая функция возвращает координаты курсора мыши относительно экрана?",
    "answers": [
      {
        "text": "GetMouseLocation",
        "isCorrect": false
      },
      {
        "text": "GetCursorXY",
        "isCorrect": false
      },
      {
        "text": "GetCursorLocation",
        "isCorrect": false
      },
      {
        "text": "GetMousePos",
        "isCorrect": false
      },
      {
        "text": "GetCursorPos",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 211,
    "question": "Какая функция преобразует координаты экрана в координаты клиентской области окна?",
    "answers": [
      {
        "text": "ConvertCoords",
        "isCorrect": false
      },
      {
        "text": "ClientToScreen",
        "isCorrect": false
      },
      {
        "text": "TransformPoint",
        "isCorrect": false
      },
      {
        "text": "ScreenToClient",
        "isCorrect": true
      },
      {
        "text": "MapWindowPoints",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 212,
    "question": "Какое сообщение получает окно при перемещении мыши внутри него?",
    "answers": [
      {
        "text": "WM_MOUSEHOVER",
        "isCorrect": false
      },
      {
        "text": "WM_MOVE",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSETRACK",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSEENTER",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSEMOVE",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 213,
    "question": "Какая функция позволяет захватить мышь, чтобы окно получало сообщения, даже если курсор за его пределами?",
    "answers": [
      {
        "text": "TrackMouse",
        "isCorrect": false
      },
      {
        "text": "GetCapture",
        "isCorrect": false
      },
      {
        "text": "ReleaseCapture",
        "isCorrect": false
      },
      {
        "text": "CaptureMouse",
        "isCorrect": false
      },
      {
        "text": "SetCapture",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 214,
    "question": "Какая функция освобождает захват мыши?",
    "answers": [
      {
        "text": "SetCapture(NULL)",
        "isCorrect": false
      },
      {
        "text": "ClearCapture",
        "isCorrect": false
      },
      {
        "text": "EndCapture",
        "isCorrect": false
      },
      {
        "text": "FreeCapture",
        "isCorrect": false
      },
      {
        "text": "ReleaseCapture",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 215,
    "question": "Какая функция создает контекст устройства, совместимый с экраном (для двойной буферизации)?",
    "answers": [
      {
        "text": "CreateDCEx",
        "isCorrect": false
      },
      {
        "text": "CreateScreenDC",
        "isCorrect": false
      },
      {
        "text": "CreateBufferDC",
        "isCorrect": false
      },
      {
        "text": "CreateMemoryDC",
        "isCorrect": false
      },
      {
        "text": "CreateCompatibleDC",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 216,
    "question": "Какая функция создает растровое изображение, совместимое с текущим экраном?",
    "answers": [
      {
        "text": "CreateBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateMemBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateScreenBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateDeviceBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateCompatibleBitmap",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 217,
    "question": "Какая функция выполняет быстрое копирование блока пикселей (Blt)?",
    "answers": [
      {
        "text": "CopyPixels",
        "isCorrect": false
      },
      {
        "text": "BlitBits",
        "isCorrect": false
      },
      {
        "text": "DrawBits",
        "isCorrect": false
      },
      {
        "text": "TransferBits",
        "isCorrect": false
      },
      {
        "text": "BitBlt",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 218,
    "question": "Какая функция позволяет узнать, нажата ли определенная виртуальная клавиша в данный момент?",
    "answers": [
      {
        "text": "IsKeyDown",
        "isCorrect": false
      },
      {
        "text": "GetKeyState",
        "isCorrect": false
      },
      {
        "text": "CheckKey",
        "isCorrect": false
      },
      {
        "text": "GetKeyStatus",
        "isCorrect": false
      },
      {
        "text": "GetAsyncKeyState",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 219,
    "question": "Какой стиль окна делает его дочерним окном другого окна?",
    "answers": [
      {
        "text": "WS_OVERLAPPED",
        "isCorrect": false
      },
      {
        "text": "WS_POPUP",
        "isCorrect": false
      },
      {
        "text": "WS_TABSTOP",
        "isCorrect": false
      },
      {
        "text": "WS_CHILD",
        "isCorrect": true
      },
      {
        "text": "WS_GROUP",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 220,
    "question": "Какая функция используется для изменения размера окна (включая рамку)?",
    "answers": [
      {
        "text": "ResizeWindow",
        "isCorrect": false
      },
      {
        "text": "AdjustWindowRect",
        "isCorrect": false
      },
      {
        "text": "ScaleWindow",
        "isCorrect": false
      },
      {
        "text": "MoveWindow",
        "isCorrect": false
      },
      {
        "text": "SetWindowPos",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 221,
    "question": "Какая функция определяет, скрыто ли окно в данный момент?",
    "answers": [
      {
        "text": "CheckVisibility",
        "isCorrect": false
      },
      {
        "text": "GetWindowStatus",
        "isCorrect": false
      },
      {
        "text": "IsVisible",
        "isCorrect": false
      },
      {
        "text": "GetWindowVisible",
        "isCorrect": false
      },
      {
        "text": "IsWindowVisible",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 222,
    "question": "Какая функция позволяет найти окно по его заголовку?",
    "answers": [
      {
        "text": "LocateWindow",
        "isCorrect": false
      },
      {
        "text": "SearchWindow",
        "isCorrect": false
      },
      {
        "text": "FindHandle",
        "isCorrect": false
      },
      {
        "text": "GetWindowByTitle",
        "isCorrect": false
      },
      {
        "text": "FindWindow",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 223,
    "question": "Какая функция получает дескриптор родительского окна?",
    "answers": [
      {
        "text": "GetRootWindow",
        "isCorrect": false
      },
      {
        "text": "GetOwner",
        "isCorrect": false
      },
      {
        "text": "GetParentWindow",
        "isCorrect": false
      },
      {
        "text": "GetAncestor",
        "isCorrect": false
      },
      {
        "text": "GetParent",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 224,
    "question": "Какое сообщение посылается окну при изменении его размеров пользователем?",
    "answers": [
      {
        "text": "WM_SIZING",
        "isCorrect": false
      },
      {
        "text": "WM_RESIZE",
        "isCorrect": false
      },
      {
        "text": "WM_CHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_WINDOWSIZE",
        "isCorrect": false
      },
      {
        "text": "WM_SIZE",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 225,
    "question": "Какое сообщение посылается для запроса отрисовки неклиентской области (рамки)?",
    "answers": [
      {
        "text": "WM_PAINT",
        "isCorrect": false
      },
      {
        "text": "WM_BORDERPAINT",
        "isCorrect": false
      },
      {
        "text": "WM_FRAMEPAINT",
        "isCorrect": false
      },
      {
        "text": "WM_NCCALCSIZE",
        "isCorrect": false
      },
      {
        "text": "WM_NCPAINT",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 226,
    "question": "Что возвращает функция GetMessage, если произошла ошибка?",
    "answers": [
      {
        "text": "0",
        "isCorrect": false
      },
      {
        "text": "INVALID_HANDLE",
        "isCorrect": false
      },
      {
        "text": "NULL",
        "isCorrect": false
      },
      {
        "text": "FALSE",
        "isCorrect": false
      },
      {
        "text": "-1",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 227,
    "question": "Какая функция закрывает дескриптор любого системного объекта (Handle)?",
    "answers": [
      {
        "text": "DeleteHandle",
        "isCorrect": false
      },
      {
        "text": "FreeHandle",
        "isCorrect": false
      },
      {
        "text": "CloseHandle",
        "isCorrect": true
      },
      {
        "text": "ReleaseHandle",
        "isCorrect": false
      },
      {
        "text": "DestroyHandle",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 228,
    "question": "Какая функция выделяет блок памяти в куче процесса?",
    "answers": [
      {
        "text": "VirtualAlloc",
        "isCorrect": false
      },
      {
        "text": "LocalAlloc",
        "isCorrect": false
      },
      {
        "text": "GlobalAlloc",
        "isCorrect": false
      },
      {
        "text": "malloc",
        "isCorrect": false
      },
      {
        "text": "HeapAlloc",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 229,
    "question": "Какая функция освобождает блок памяти, выделенный через HeapAlloc?",
    "answers": [
      {
        "text": "HeapFree",
        "isCorrect": true
      },
      {
        "text": "LocalFree",
        "isCorrect": false
      },
      {
        "text": "VirtualFree",
        "isCorrect": false
      },
      {
        "text": "GlobalFree",
        "isCorrect": false
      },
      {
        "text": "free",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 230,
    "question": "Какая функция загружает библиотеку DLL в адресное пространство процесса?",
    "answers": [
      {
        "text": "AttachLibrary",
        "isCorrect": false
      },
      {
        "text": "GetModuleHandle",
        "isCorrect": false
      },
      {
        "text": "LoadDLL",
        "isCorrect": false
      },
      {
        "text": "LoadLibrary",
        "isCorrect": true
      },
      {
        "text": "OpenLibrary",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 231,
    "question": "Какая функция выгружает библиотеку DLL?",
    "answers": [
      {
        "text": "UnloadLibrary",
        "isCorrect": false
      },
      {
        "text": "CloseLibrary",
        "isCorrect": false
      },
      {
        "text": "DetachLibrary",
        "isCorrect": false
      },
      {
        "text": "FreeLibrary",
        "isCorrect": true
      },
      {
        "text": "RemoveLibrary",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 232,
    "question": "Какая функция позволяет найти адрес конкретной функции в загруженной DLL?",
    "answers": [
      {
        "text": "FindFunction",
        "isCorrect": false
      },
      {
        "text": "GetFunctionAddress",
        "isCorrect": false
      },
      {
        "text": "ResolveProc",
        "isCorrect": false
      },
      {
        "text": "GetExport",
        "isCorrect": false
      },
      {
        "text": "GetProcAddress",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 233,
    "question": "Какой тип данных используется для хранения знакового 32-битного целого числа?",
    "answers": [
      {
        "text": "INT",
        "isCorrect": false
      },
      {
        "text": "DWORD",
        "isCorrect": false
      },
      {
        "text": "SHORT",
        "isCorrect": false
      },
      {
        "text": "INTEGER",
        "isCorrect": false
      },
      {
        "text": "LONG",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 234,
    "question": "Какая функция получает текущее системное время?",
    "answers": [
      {
        "text": "GetLocalTime",
        "isCorrect": true
      },
      {
        "text": "GetSystemTime",
        "isCorrect": false
      },
      {
        "text": "GetTickCount",
        "isCorrect": false
      },
      {
        "text": "GetCurrentTime",
        "isCorrect": false
      },
      {
        "text": "GetTime",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 235,
    "question": "Какой тип данных в Windows API является 32-битным знаковым целым числом?",
    "answers": [
      {
        "text": "INT",
        "isCorrect": false
      },
      {
        "text": "WORD",
        "isCorrect": false
      },
      {
        "text": "BYTE",
        "isCorrect": false
      },
      {
        "text": "SHORT",
        "isCorrect": false
      },
      {
        "text": "LONG",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 236,
    "question": "Какая функция используется для получения дескриптора текущего потока?",
    "answers": [
      {
        "text": "GetThreadId",
        "isCorrect": false
      },
      {
        "text": "OpenThread",
        "isCorrect": false
      },
      {
        "text": "GetCurrentThreadId",
        "isCorrect": false
      },
      {
        "text": "GetThreadHandle",
        "isCorrect": false
      },
      {
        "text": "GetCurrentThread",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 237,
    "question": "Какой тип данных представляет 64-битное целое число (поддерживается в современных версиях Windows)?",
    "answers": [
      {
        "text": "INT64",
        "isCorrect": false
      },
      {
        "text": "QWORD",
        "isCorrect": false
      },
      {
        "text": "DOUBLE",
        "isCorrect": false
      },
      {
        "text": "LARGE_INTEGER",
        "isCorrect": false
      },
      {
        "text": "LONGLONG",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 238,
    "question": "Какая функция создает поток выполнения в процессе?",
    "answers": [
      {
        "text": "BeginThread",
        "isCorrect": false
      },
      {
        "text": "LaunchThread",
        "isCorrect": false
      },
      {
        "text": "StartThread",
        "isCorrect": false
      },
      {
        "text": "NewThread",
        "isCorrect": false
      },
      {
        "text": "CreateThread",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 239,
    "question": "Какая функция ожидает завершения работы указанного объекта (например, потока или процесса)?",
    "answers": [
      {
        "text": "JoinObject",
        "isCorrect": false
      },
      {
        "text": "WaitForObject",
        "isCorrect": false
      },
      {
        "text": "WaitThread",
        "isCorrect": false
      },
      {
        "text": "WaitObject",
        "isCorrect": false
      },
      {
        "text": "WaitForSingleObject",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 240,
    "question": "Как называется примитив синхронизации, позволяющий только одному потоку получить доступ к ресурсу?",
    "answers": [
      {
        "text": "Mutex",
        "isCorrect": false
      },
      {
        "text": "Event",
        "isCorrect": false
      },
      {
        "text": "Semaphore",
        "isCorrect": false
      },
      {
        "text": "Lock",
        "isCorrect": false
      },
      {
        "text": "CriticalSection",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 241,
    "question": "Какая функция инициализирует структуру критической секции?",
    "answers": [
      {
        "text": "InitSection",
        "isCorrect": false
      },
      {
        "text": "CreateCriticalSection",
        "isCorrect": false
      },
      {
        "text": "StartSection",
        "isCorrect": false
      },
      {
        "text": "BeginCriticalSection",
        "isCorrect": false
      },
      {
        "text": "InitializeCriticalSection",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 242,
    "question": "Какая функция входит в критическую секцию (захватывает владение)?",
    "answers": [
      {
        "text": "LockCriticalSection",
        "isCorrect": false
      },
      {
        "text": "AcquireCriticalSection",
        "isCorrect": false
      },
      {
        "text": "StartCriticalSection",
        "isCorrect": false
      },
      {
        "text": "TakeCriticalSection",
        "isCorrect": false
      },
      {
        "text": "EnterCriticalSection",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 243,
    "question": "Какая функция покидает критическую секцию (освобождает владение)?",
    "answers": [
      {
        "text": "LeaveCriticalSection",
        "isCorrect": true
      },
      {
        "text": "UnlockCriticalSection",
        "isCorrect": false
      },
      {
        "text": "EndCriticalSection",
        "isCorrect": false
      },
      {
        "text": "FreeCriticalSection",
        "isCorrect": false
      },
      {
        "text": "ReleaseCriticalSection",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 244,
    "question": "Какая функция удаляет критическую секцию из памяти?",
    "answers": [
      {
        "text": "CloseCriticalSection",
        "isCorrect": false
      },
      {
        "text": "FreeCriticalSection",
        "isCorrect": false
      },
      {
        "text": "DestroyCriticalSection",
        "isCorrect": false
      },
      {
        "text": "RemoveCriticalSection",
        "isCorrect": false
      },
      {
        "text": "DeleteCriticalSection",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 245,
    "question": "Какой примитив синхронизации может использоваться для ограничения количества потоков, имеющих доступ к ресурсу?",
    "answers": [
      {
        "text": "Barrier",
        "isCorrect": false
      },
      {
        "text": "CriticalSection",
        "isCorrect": false
      },
      {
        "text": "Mutex",
        "isCorrect": false
      },
      {
        "text": "Event",
        "isCorrect": false
      },
      {
        "text": "Semaphore",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 246,
    "question": "Какая функция создает объект мьютекса?",
    "answers": [
      {
        "text": "NewMutex",
        "isCorrect": false
      },
      {
        "text": "OpenMutex",
        "isCorrect": false
      },
      {
        "text": "InitMutex",
        "isCorrect": false
      },
      {
        "text": "StartMutex",
        "isCorrect": false
      },
      {
        "text": "CreateMutex",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 247,
    "question": "Какая функция используется для создания события (Event) синхронизации?",
    "answers": [
      {
        "text": "OpenEvent",
        "isCorrect": false
      },
      {
        "text": "StartEvent",
        "isCorrect": false
      },
      {
        "text": "InitEvent",
        "isCorrect": false
      },
      {
        "text": "NewEvent",
        "isCorrect": false
      },
      {
        "text": "CreateEvent",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 248,
    "question": "Какая функция переводит событие в сигнальное состояние?",
    "answers": [
      {
        "text": "TriggerEvent",
        "isCorrect": false
      },
      {
        "text": "ActivateEvent",
        "isCorrect": false
      },
      {
        "text": "SignalEvent",
        "isCorrect": false
      },
      {
        "text": "RunEvent",
        "isCorrect": false
      },
      {
        "text": "SetEvent",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 249,
    "question": "Какая функция переводит событие в несигнальное состояние?",
    "answers": [
      {
        "text": "StopEvent",
        "isCorrect": false
      },
      {
        "text": "ResetEvent",
        "isCorrect": true
      },
      {
        "text": "ClearEvent",
        "isCorrect": false
      },
      {
        "text": "UnsignalEvent",
        "isCorrect": false
      },
      {
        "text": "DisableEvent",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 250,
    "question": "Какой флаг указывает, что событие должно сбрасываться вручную?",
    "answers": [
      {
        "text": "RESET",
        "isCorrect": false
      },
      {
        "text": "FALSE",
        "isCorrect": false
      },
      {
        "text": "STATIC",
        "isCorrect": false
      },
      {
        "text": "TRUE (bManualReset)",
        "isCorrect": true
      },
      {
        "text": "MANUAL",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 251,
    "question": "Какая функция возвращает версию Windows (с учетом ограничений современных версий)?",
    "answers": [
      {
        "text": "GetVersionEx",
        "isCorrect": true
      },
      {
        "text": "SystemVersion",
        "isCorrect": false
      },
      {
        "text": "CheckVersion",
        "isCorrect": false
      },
      {
        "text": "GetOSVersion",
        "isCorrect": false
      },
      {
        "text": "GetWindowsVersion",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 252,
    "question": "Какая функция получает текущую рабочую директорию процесса?",
    "answers": [
      {
        "text": "GetWorkDir",
        "isCorrect": false
      },
      {
        "text": "GetPath",
        "isCorrect": false
      },
      {
        "text": "GetCurrentDirectory",
        "isCorrect": true
      },
      {
        "text": "GetCurrentPath",
        "isCorrect": false
      },
      {
        "text": "GetFolder",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 253,
    "question": "Какая функция изменяет текущую рабочую директорию?",
    "answers": [
      {
        "text": "SetWorkDir",
        "isCorrect": false
      },
      {
        "text": "ChangeDir",
        "isCorrect": false
      },
      {
        "text": "UpdateFolder",
        "isCorrect": false
      },
      {
        "text": "SetPath",
        "isCorrect": false
      },
      {
        "text": "SetCurrentDirectory",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 254,
    "question": "Какая функция создает папку (каталог) в файловой системе?",
    "answers": [
      {
        "text": "MakeDir",
        "isCorrect": false
      },
      {
        "text": "CreateDirectory",
        "isCorrect": true
      },
      {
        "text": "NewFolder",
        "isCorrect": false
      },
      {
        "text": "InitDirectory",
        "isCorrect": false
      },
      {
        "text": "AddDirectory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 255,
    "question": "Какая функция удаляет пустую папку?",
    "answers": [
      {
        "text": "DeleteDir",
        "isCorrect": false
      },
      {
        "text": "DropDirectory",
        "isCorrect": false
      },
      {
        "text": "KillFolder",
        "isCorrect": false
      },
      {
        "text": "RemoveDirectory",
        "isCorrect": true
      },
      {
        "text": "DestroyDirectory",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 256,
    "question": "Какая функция открывает существующий файл или создает новый?",
    "answers": [
      {
        "text": "CreateFile",
        "isCorrect": true
      },
      {
        "text": "OpenFile",
        "isCorrect": false
      },
      {
        "text": "InitFile",
        "isCorrect": false
      },
      {
        "text": "FileOpen",
        "isCorrect": false
      },
      {
        "text": "AccessFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 257,
    "question": "Какая функция закрывает дескриптор файла?",
    "answers": [
      {
        "text": "CloseFile",
        "isCorrect": false
      },
      {
        "text": "ReleaseFile",
        "isCorrect": false
      },
      {
        "text": "CloseHandle",
        "isCorrect": true
      },
      {
        "text": "DeleteFile",
        "isCorrect": false
      },
      {
        "text": "FreeFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 258,
    "question": "Какая функция записывает данные в файл?",
    "answers": [
      {
        "text": "SaveFile",
        "isCorrect": false
      },
      {
        "text": "SendFile",
        "isCorrect": false
      },
      {
        "text": "PutFile",
        "isCorrect": false
      },
      {
        "text": "StoreFile",
        "isCorrect": false
      },
      {
        "text": "WriteFile",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 259,
    "question": "Какая функция считывает данные из файла?",
    "answers": [
      {
        "text": "LoadFile",
        "isCorrect": false
      },
      {
        "text": "ReadFile",
        "isCorrect": true
      },
      {
        "text": "GetFile",
        "isCorrect": false
      },
      {
        "text": "FetchFile",
        "isCorrect": false
      },
      {
        "text": "ReceiveFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 260,
    "question": "Какая функция перемещает указатель текущей позиции в файле?",
    "answers": [
      {
        "text": "MoveFilePointer",
        "isCorrect": false
      },
      {
        "text": "ChangePointer",
        "isCorrect": false
      },
      {
        "text": "GotoFilePos",
        "isCorrect": false
      },
      {
        "text": "SetFilePointer",
        "isCorrect": true
      },
      {
        "text": "SeekFile",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 261,
    "question": "Какая функция получает размер файла?",
    "answers": [
      {
        "text": "GetFileSize",
        "isCorrect": true
      },
      {
        "text": "GetFileLength",
        "isCorrect": false
      },
      {
        "text": "FileSize",
        "isCorrect": false
      },
      {
        "text": "GetSize",
        "isCorrect": false
      },
      {
        "text": "CheckFileSize",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 262,
    "question": "Какой тип данных используется для хранения атрибутов файла?",
    "answers": [
      {
        "text": "WORD",
        "isCorrect": false
      },
      {
        "text": "LONG",
        "isCorrect": false
      },
      {
        "text": "DWORD",
        "isCorrect": true
      },
      {
        "text": "ATTRIB",
        "isCorrect": false
      },
      {
        "text": "INT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 263,
    "question": "Какая функция получает атрибуты файла по его имени?",
    "answers": [
      {
        "text": "GetAttributes",
        "isCorrect": false
      },
      {
        "text": "GetFileAttributes",
        "isCorrect": true
      },
      {
        "text": "FileAttributes",
        "isCorrect": false
      },
      {
        "text": "FetchFileAttrs",
        "isCorrect": false
      },
      {
        "text": "CheckFileAttrs",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 264,
    "question": "Какая функция проверяет, существует ли файл?",
    "answers": [
      {
        "text": "FileExists",
        "isCorrect": false
      },
      {
        "text": "CheckFile",
        "isCorrect": false
      },
      {
        "text": "VerifyFile",
        "isCorrect": false
      },
      {
        "text": "GetFileAttributes != INVALID_FILE_ATTRIBUTES",
        "isCorrect": true
      },
      {
        "text": "IsFilePresent",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 265,
    "question": "Какой тип данных в Windows API используется для представления строки в Юникоде (UTF-16)?",
    "answers": [
      {
        "text": "WCHAR",
        "isCorrect": true
      },
      {
        "text": "TCHAR",
        "isCorrect": false
      },
      {
        "text": "CHAR",
        "isCorrect": false
      },
      {
        "text": "STR",
        "isCorrect": false
      },
      {
        "text": "UCHAR",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 266,
    "question": "Какая функция используется для загрузки иконки из файла ресурсов (.rc)?",
    "answers": [
      {
        "text": "GetIcon",
        "isCorrect": false
      },
      {
        "text": "SetIcon",
        "isCorrect": false
      },
      {
        "text": "FindIcon",
        "isCorrect": false
      },
      {
        "text": "ImportIcon",
        "isCorrect": false
      },
      {
        "text": "LoadIcon",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 267,
    "question": "Какой макрос автоматически выбирает между ANSI и Юникодом в зависимости от настроек проекта?",
    "answers": [
      {
        "text": "TCHAR",
        "isCorrect": false
      },
      {
        "text": "_T()",
        "isCorrect": false
      },
      {
        "text": "TEXT()",
        "isCorrect": true
      },
      {
        "text": "W()",
        "isCorrect": false
      },
      {
        "text": "STR()",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 268,
    "question": "Какое сообщение отправляется окну, когда пользователь нажимает правую кнопку мыши?",
    "answers": [
      {
        "text": "WM_MOUSECLICK",
        "isCorrect": false
      },
      {
        "text": "WM_RBUTTONDOWN",
        "isCorrect": true
      },
      {
        "text": "WM_RCLICK",
        "isCorrect": false
      },
      {
        "text": "WM_RIGHTDOWN",
        "isCorrect": false
      },
      {
        "text": "WM_MOUSEBUTTON",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 269,
    "question": "Какая функция Windows API используется для копирования строки в другую строку?",
    "answers": [
      {
        "text": "strcpy",
        "isCorrect": false
      },
      {
        "text": "CopyString",
        "isCorrect": false
      },
      {
        "text": "MoveString",
        "isCorrect": false
      },
      {
        "text": "lstrcpy",
        "isCorrect": true
      },
      {
        "text": "StringCopy",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 270,
    "question": "Какая функция Windows API используется для сравнения двух строк?",
    "answers": [
      {
        "text": "lstrcmp",
        "isCorrect": true
      },
      {
        "text": "strcmp",
        "isCorrect": false
      },
      {
        "text": "CompareString",
        "isCorrect": false
      },
      {
        "text": "CheckString",
        "isCorrect": false
      },
      {
        "text": "MatchString",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 271,
    "question": "Какая функция возвращает длину строки в символах?",
    "answers": [
      {
        "text": "strlen",
        "isCorrect": false
      },
      {
        "text": "StringLength",
        "isCorrect": false
      },
      {
        "text": "lstrlen",
        "isCorrect": true
      },
      {
        "text": "GetLength",
        "isCorrect": false
      },
      {
        "text": "CountString",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 272,
    "question": "Какой параметр функции CreateWindow определяет заголовок окна?",
    "answers": [
      {
        "text": "lpTitle",
        "isCorrect": false
      },
      {
        "text": "lpCaption",
        "isCorrect": false
      },
      {
        "text": "lpName",
        "isCorrect": false
      },
      {
        "text": "lpWindowName",
        "isCorrect": true
      },
      {
        "text": "lpText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 273,
    "question": "Какая функция создает элемент управления (например, кнопку) внутри родительского окна?",
    "answers": [
      {
        "text": "CreateWindow",
        "isCorrect": true
      },
      {
        "text": "CreateChild",
        "isCorrect": false
      },
      {
        "text": "AddControl",
        "isCorrect": false
      },
      {
        "text": "NewControl",
        "isCorrect": false
      },
      {
        "text": "AddElement",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 274,
    "question": "Какое сообщение отправляется элементу управления, когда на него нажимают?",
    "answers": [
      {
        "text": "WM_CLICK",
        "isCorrect": false
      },
      {
        "text": "WM_NOTIFY",
        "isCorrect": false
      },
      {
        "text": "WM_COMMAND",
        "isCorrect": true
      },
      {
        "text": "WM_CONTROL",
        "isCorrect": false
      },
      {
        "text": "WM_MESSAGE",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 275,
    "question": "Какая функция получает дескриптор элемента управления по его ID?",
    "answers": [
      {
        "text": "GetControl",
        "isCorrect": false
      },
      {
        "text": "GetDlgItem",
        "isCorrect": true
      },
      {
        "text": "FindControl",
        "isCorrect": false
      },
      {
        "text": "GetItem",
        "isCorrect": false
      },
      {
        "text": "FetchItem",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 276,
    "question": "Какая функция меняет текст (заголовок) элемента управления?",
    "answers": [
      {
        "text": "SetDlgItemText",
        "isCorrect": false
      },
      {
        "text": "SetItemText",
        "isCorrect": false
      },
      {
        "text": "ChangeText",
        "isCorrect": false
      },
      {
        "text": "UpdateText",
        "isCorrect": false
      },
      {
        "text": "SetWindowText",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 277,
    "question": "Какая функция получает текст элемента управления?",
    "answers": [
      {
        "text": "GetWindowText",
        "isCorrect": true
      },
      {
        "text": "GetDlgItemText",
        "isCorrect": false
      },
      {
        "text": "GetItemText",
        "isCorrect": false
      },
      {
        "text": "FetchText",
        "isCorrect": false
      },
      {
        "text": "ReadText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 278,
    "question": "Какое сообщение отправляется родителю при изменении состояния CheckBox?",
    "answers": [
      {
        "text": "WM_NOTIFY",
        "isCorrect": false
      },
      {
        "text": "WM_COMMAND",
        "isCorrect": true
      },
      {
        "text": "WM_CHANGED",
        "isCorrect": false
      },
      {
        "text": "WM_UPDATE",
        "isCorrect": false
      },
      {
        "text": "WM_CLICK",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 279,
    "question": "Какая функция позволяет создать диалоговое окно на основе шаблона из ресурсов?",
    "answers": [
      {
        "text": "CreateDialog",
        "isCorrect": false
      },
      {
        "text": "ShowDialog",
        "isCorrect": false
      },
      {
        "text": "InitDialog",
        "isCorrect": false
      },
      {
        "text": "DialogBox",
        "isCorrect": true
      },
      {
        "text": "OpenDialog",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 280,
    "question": "Какая функция завершает работу модального диалогового окна?",
    "answers": [
      {
        "text": "CloseDialog",
        "isCorrect": false
      },
      {
        "text": "DestroyDialog",
        "isCorrect": false
      },
      {
        "text": "EndDialog",
        "isCorrect": true
      },
      {
        "text": "QuitDialog",
        "isCorrect": false
      },
      {
        "text": "ExitDialog",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 281,
    "question": "Какое сообщение отправляется диалоговому окну при его инициализации?",
    "answers": [
      {
        "text": "WM_CREATE",
        "isCorrect": false
      },
      {
        "text": "WM_START",
        "isCorrect": false
      },
      {
        "text": "WM_SETUP",
        "isCorrect": false
      },
      {
        "text": "WM_OPEN",
        "isCorrect": false
      },
      {
        "text": "WM_INITDIALOG",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 282,
    "question": "Какая функция используется для отрисовки текста в заданном прямоугольнике?",
    "answers": [
      {
        "text": "TextOut",
        "isCorrect": false
      },
      {
        "text": "DrawText",
        "isCorrect": true
      },
      {
        "text": "PrintText",
        "isCorrect": false
      },
      {
        "text": "WriteText",
        "isCorrect": false
      },
      {
        "text": "OutputText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 283,
    "question": "Какой тип данных описывает прямоугольник (RECT) с использованием 32-битных знаковых целых?",
    "answers": [
      {
        "text": "RECT",
        "isCorrect": true
      },
      {
        "text": "BOX",
        "isCorrect": false
      },
      {
        "text": "AREA",
        "isCorrect": false
      },
      {
        "text": "COORDINATES",
        "isCorrect": false
      },
      {
        "text": "WINDOWRECT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 284,
    "question": "Какая функция позволяет «собрать» (сопоставить) параметры прямоугольника?",
    "answers": [
      {
        "text": "MakeRect",
        "isCorrect": false
      },
      {
        "text": "InitRect",
        "isCorrect": false
      },
      {
        "text": "SetRect",
        "isCorrect": true
      },
      {
        "text": "DefineRect",
        "isCorrect": false
      },
      {
        "text": "BuildRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 285,
    "question": "Какая функция проверяет, пуст ли прямоугольник?",
    "answers": [
      {
        "text": "RectEmpty",
        "isCorrect": false
      },
      {
        "text": "CheckRect",
        "isCorrect": false
      },
      {
        "text": "VerifyRect",
        "isCorrect": false
      },
      {
        "text": "IsRectEmpty",
        "isCorrect": true
      },
      {
        "text": "EmptyRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 286,
    "question": "Какая функция копирует один прямоугольник в другой?",
    "answers": [
      {
        "text": "CopyRect",
        "isCorrect": true
      },
      {
        "text": "MoveRect",
        "isCorrect": false
      },
      {
        "text": "DuplicateRect",
        "isCorrect": false
      },
      {
        "text": "CloneRect",
        "isCorrect": false
      },
      {
        "text": "MapRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 287,
    "question": "Какая функция проверяет, пересекаются ли два прямоугольника?",
    "answers": [
      {
        "text": "CheckIntersection",
        "isCorrect": false
      },
      {
        "text": "CrossRect",
        "isCorrect": false
      },
      {
        "text": "OverlapRect",
        "isCorrect": false
      },
      {
        "text": "MeetRect",
        "isCorrect": false
      },
      {
        "text": "IntersectRect",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 288,
    "question": "Какая функция вычисляет пересечение двух прямоугольников?",
    "answers": [
      {
        "text": "GetIntersection",
        "isCorrect": false
      },
      {
        "text": "IntersectRect",
        "isCorrect": true
      },
      {
        "text": "CalculateIntersection",
        "isCorrect": false
      },
      {
        "text": "CreateIntersection",
        "isCorrect": false
      },
      {
        "text": "FindIntersection",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 289,
    "question": "Какая функция смещает прямоугольник на заданное расстояние?",
    "answers": [
      {
        "text": "MoveRect",
        "isCorrect": false
      },
      {
        "text": "ShiftRect",
        "isCorrect": false
      },
      {
        "text": "OffsetRect",
        "isCorrect": true
      },
      {
        "text": "TransposeRect",
        "isCorrect": false
      },
      {
        "text": "SlideRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 290,
    "question": "Какая функция растягивает прямоугольник?",
    "answers": [
      {
        "text": "ExpandRect",
        "isCorrect": false
      },
      {
        "text": "ResizeRect",
        "isCorrect": false
      },
      {
        "text": "ScaleRect",
        "isCorrect": false
      },
      {
        "text": "InflateRect",
        "isCorrect": true
      },
      {
        "text": "GrowRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 291,
    "question": "Какая функция используется для создания пера с пунктирным стилем?",
    "answers": [
      {
        "text": "CreatePen",
        "isCorrect": true
      },
      {
        "text": "CreateDashedPen",
        "isCorrect": false
      },
      {
        "text": "NewPen",
        "isCorrect": false
      },
      {
        "text": "SetPen",
        "isCorrect": false
      },
      {
        "text": "MakePen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 292,
    "question": "Какая функция возвращает текущий выбранный объект (перо, кисть) в DC?",
    "answers": [
      {
        "text": "GetObject",
        "isCorrect": false
      },
      {
        "text": "FetchObject",
        "isCorrect": false
      },
      {
        "text": "SelectObject",
        "isCorrect": false
      },
      {
        "text": "GetCurrent",
        "isCorrect": false
      },
      {
        "text": "GetCurrentObject",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 293,
    "question": "Какая функция восстанавливает предыдущий объект в DC (после его замены)?",
    "answers": [
      {
        "text": "RestoreObject",
        "isCorrect": false
      },
      {
        "text": "UndoObject",
        "isCorrect": false
      },
      {
        "text": "ResetObject",
        "isCorrect": false
      },
      {
        "text": "DefaultObject",
        "isCorrect": false
      },
      {
        "text": "SelectObject",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 294,
    "question": "Какой тип данных используется для представления цвета, хранящегося как 32-битное число?",
    "answers": [
      {
        "text": "RGB",
        "isCorrect": false
      },
      {
        "text": "DWORD",
        "isCorrect": false
      },
      {
        "text": "COLOR",
        "isCorrect": false
      },
      {
        "text": "COLORREF",
        "isCorrect": true
      },
      {
        "text": "INT32",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 295,
    "question": "Какая функция используется для загрузки растрового изображения (Bitmap) из ресурсов?",
    "answers": [
      {
        "text": "OpenBitmap",
        "isCorrect": false
      },
      {
        "text": "CreateBitmap",
        "isCorrect": false
      },
      {
        "text": "LoadBitmap",
        "isCorrect": true
      },
      {
        "text": "GetBitmap",
        "isCorrect": false
      },
      {
        "text": "ReadBitmap",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 296,
    "question": "Какое сообщение отправляется окну, когда нужно перерисовать его неклиентскую область?",
    "answers": [
      {
        "text": "WM_NCPAINT",
        "isCorrect": true
      },
      {
        "text": "WM_WINDOWPOSCHANGED",
        "isCorrect": false
      },
      {
        "text": "WM_NCCALCSIZE",
        "isCorrect": false
      },
      {
        "text": "WM_ERASEBKGND",
        "isCorrect": false
      },
      {
        "text": "WM_PAINT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 297,
    "question": "Какой тип данных в Windows API используется для представления логического значения (true/false)?",
    "answers": [
      {
        "text": "BIT",
        "isCorrect": false
      },
      {
        "text": "BOOLEAN",
        "isCorrect": false
      },
      {
        "text": "BYTE",
        "isCorrect": false
      },
      {
        "text": "INT",
        "isCorrect": false
      },
      {
        "text": "BOOL",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 298,
    "question": "Какая функция позволяет установить состояние таймера с заданным интервалом?",
    "answers": [
      {
        "text": "InitTimer",
        "isCorrect": false
      },
      {
        "text": "SetTimer",
        "isCorrect": true
      },
      {
        "text": "StartTimer",
        "isCorrect": false
      },
      {
        "text": "AddTimer",
        "isCorrect": false
      },
      {
        "text": "TimerCreate",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 299,
    "question": "Какой макрос позволяет скомпилировать приложение с поддержкой Юникода (UNICODE)?",
    "answers": [
      {
        "text": "WIDE_CHAR",
        "isCorrect": false
      },
      {
        "text": "WCHAR_MODE",
        "isCorrect": false
      },
      {
        "text": "USE_UNICODE",
        "isCorrect": false
      },
      {
        "text": "_UNICODE",
        "isCorrect": true
      },
      {
        "text": "UNICODE_SUPPORT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 300,
    "question": "Какая функция возвращает дескриптор главного контекста устройства рабочего стола?",
    "answers": [
      {
        "text": "GetDC(NULL)",
        "isCorrect": true
      },
      {
        "text": "GetWindowDC(NULL)",
        "isCorrect": false
      },
      {
        "text": "GetDesktopDC",
        "isCorrect": false
      },
      {
        "text": "GetScreenDC",
        "isCorrect": false
      },
      {
        "text": "GetPrimaryDC",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 301,
    "question": "Какое сообщение получает приложение при попытке завершения сеанса Windows?",
    "answers": [
      {
        "text": "WM_CLOSE",
        "isCorrect": false
      },
      {
        "text": "WM_QUIT",
        "isCorrect": false
      },
      {
        "text": "WM_QUERYENDSESSION",
        "isCorrect": true
      },
      {
        "text": "WM_ENDSESSION",
        "isCorrect": false
      },
      {
        "text": "WM_DESTROY",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 302,
    "question": "Какая функция преобразует виртуальный код клавиши в символ?",
    "answers": [
      {
        "text": "GetChar",
        "isCorrect": false
      },
      {
        "text": "KeyToChar",
        "isCorrect": false
      },
      {
        "text": "MapVirtualKey",
        "isCorrect": false
      },
      {
        "text": "VkKeyScan",
        "isCorrect": false
      },
      {
        "text": "ToAscii",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 303,
    "question": "Какая функция позволяет скрыть или показать системный курсор мыши?",
    "answers": [
      {
        "text": "HideCursor",
        "isCorrect": false
      },
      {
        "text": "ShowCursor",
        "isCorrect": true
      },
      {
        "text": "DrawCursor",
        "isCorrect": false
      },
      {
        "text": "ToggleCursor",
        "isCorrect": false
      },
      {
        "text": "SetCursor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 304,
    "question": "Какое сообщение отправляется окну, когда его нужно очистить (стереть фон)?",
    "answers": [
      {
        "text": "WM_PAINT",
        "isCorrect": false
      },
      {
        "text": "WM_CLEAR",
        "isCorrect": false
      },
      {
        "text": "WM_REFRESH",
        "isCorrect": false
      },
      {
        "text": "WM_ERASEBKGND",
        "isCorrect": true
      },
      {
        "text": "WM_BACKGROUND",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 305,
    "question": "Какая функция регистрирует «горячую» клавишу для всего приложения?",
    "answers": [
      {
        "text": "RegisterHotKey",
        "isCorrect": true
      },
      {
        "text": "AddHotKey",
        "isCorrect": false
      },
      {
        "text": "SetHotKey",
        "isCorrect": false
      },
      {
        "text": "BindKey",
        "isCorrect": false
      },
      {
        "text": "CreateHotKey",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 306,
    "question": "Какая функция снимает регистрацию «горячей» клавиши?",
    "answers": [
      {
        "text": "RemoveHotKey",
        "isCorrect": false
      },
      {
        "text": "ClearHotKey",
        "isCorrect": false
      },
      {
        "text": "UnregisterHotKey",
        "isCorrect": true
      },
      {
        "text": "UnbindKey",
        "isCorrect": false
      },
      {
        "text": "DeleteHotKey",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 307,
    "question": "Какое сообщение получает окно, когда нажата «горячая» клавиша?",
    "answers": [
      {
        "text": "WM_KEYPRESS",
        "isCorrect": false
      },
      {
        "text": "WM_KEYDOWN",
        "isCorrect": false
      },
      {
        "text": "WM_COMMAND",
        "isCorrect": false
      },
      {
        "text": "WM_USER_KEY",
        "isCorrect": false
      },
      {
        "text": "WM_HOTKEY",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 308,
    "question": "Какой параметр функции CreateWindow определяет родительское окно (или NULL для главного)?",
    "answers": [
      {
        "text": "hOwner",
        "isCorrect": false
      },
      {
        "text": "hWndParent",
        "isCorrect": true
      },
      {
        "text": "hParentWindow",
        "isCorrect": false
      },
      {
        "text": "lpParent",
        "isCorrect": false
      },
      {
        "text": "hParent",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 309,
    "question": "Какая функция позволяет создать шрифт с заданными параметрами?",
    "answers": [
      {
        "text": "NewFont",
        "isCorrect": false
      },
      {
        "text": "SetFont",
        "isCorrect": false
      },
      {
        "text": "InitFont",
        "isCorrect": false
      },
      {
        "text": "CreateFont",
        "isCorrect": true
      },
      {
        "text": "MakeFont",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 310,
    "question": "Какая функция получает дескриптор текущего шрифта, выбранного в DC?",
    "answers": [
      {
        "text": "GetCurrentObject",
        "isCorrect": true
      },
      {
        "text": "GetFont",
        "isCorrect": false
      },
      {
        "text": "GetCurrentFont",
        "isCorrect": false
      },
      {
        "text": "FetchFont",
        "isCorrect": false
      },
      {
        "text": "GetSelectedFont",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 311,
    "question": "Какая функция устанавливает цвет текста в DC?",
    "answers": [
      {
        "text": "SetColor",
        "isCorrect": false
      },
      {
        "text": "SetDrawColor",
        "isCorrect": false
      },
      {
        "text": "SetTextColor",
        "isCorrect": true
      },
      {
        "text": "SetTextColour",
        "isCorrect": false
      },
      {
        "text": "SetFontColor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 312,
    "question": "Какая функция устанавливает цвет фона текста в DC?",
    "answers": [
      {
        "text": "SetBackground",
        "isCorrect": false
      },
      {
        "text": "SetBkColor",
        "isCorrect": true
      },
      {
        "text": "SetTextBkColor",
        "isCorrect": false
      },
      {
        "text": "SetBk",
        "isCorrect": false
      },
      {
        "text": "SetFillColor",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 313,
    "question": "Какая функция устанавливает режим фона текста (прозрачный или непрозрачный)?",
    "answers": [
      {
        "text": "SetBackgroundMode",
        "isCorrect": false
      },
      {
        "text": "SetTransparency",
        "isCorrect": false
      },
      {
        "text": "SetBkStyle",
        "isCorrect": false
      },
      {
        "text": "SetMode",
        "isCorrect": false
      },
      {
        "text": "SetBkMode",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 314,
    "question": "Какое сообщение отправляется при изменении системных настроек (например, DPI)?",
    "answers": [
      {
        "text": "WM_SYSCOLORCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_SIZE",
        "isCorrect": false
      },
      {
        "text": "WM_DPICHANGED",
        "isCorrect": true
      },
      {
        "text": "WM_DISPLAYCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_SETTINGCHANGE",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 315,
    "question": "Какая структура содержит информацию о позиции мыши в сообщении WM_MOUSEMOVE?",
    "answers": [
      {
        "text": "POINTS",
        "isCorrect": true
      },
      {
        "text": "MOUSEINFO",
        "isCorrect": false
      },
      {
        "text": "POINT",
        "isCorrect": false
      },
      {
        "text": "MSG",
        "isCorrect": false
      },
      {
        "text": "RECT",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 316,
    "question": "Какая функция получает текущее состояние клавиш-модификаторов (Shift, Ctrl, Alt)?",
    "answers": [
      {
        "text": "IsKeyDown",
        "isCorrect": false
      },
      {
        "text": "GetKeyboardState",
        "isCorrect": false
      },
      {
        "text": "GetAsyncKeyState",
        "isCorrect": false
      },
      {
        "text": "GetKeyState",
        "isCorrect": true
      },
      {
        "text": "GetKeyStatus",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 317,
    "question": "Какой тип данных представляет 32-битное целое число со знаком?",
    "answers": [
      {
        "text": "LONG",
        "isCorrect": false
      },
      {
        "text": "INT",
        "isCorrect": true
      },
      {
        "text": "WORD",
        "isCorrect": false
      },
      {
        "text": "SHORT",
        "isCorrect": false
      },
      {
        "text": "DWORD",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 318,
    "question": "Какая функция создает «однопиксельное» перо (статическое)?",
    "answers": [
      {
        "text": "CreatePen",
        "isCorrect": true
      },
      {
        "text": "NewPen",
        "isCorrect": false
      },
      {
        "text": "CreateStaticPen",
        "isCorrect": false
      },
      {
        "text": "CreateSolidPen",
        "isCorrect": false
      },
      {
        "text": "MakePen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 319,
    "question": "Какая функция рисует эллипс (круг)?",
    "answers": [
      {
        "text": "DrawEllipse",
        "isCorrect": false
      },
      {
        "text": "PaintCircle",
        "isCorrect": false
      },
      {
        "text": "CreateEllipse",
        "isCorrect": false
      },
      {
        "text": "Circle",
        "isCorrect": false
      },
      {
        "text": "Ellipse",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 320,
    "question": "Какая функция рисует дугу?",
    "answers": [
      {
        "text": "ArcTo",
        "isCorrect": false
      },
      {
        "text": "CreateArc",
        "isCorrect": false
      },
      {
        "text": "Arc",
        "isCorrect": true
      },
      {
        "text": "PaintArc",
        "isCorrect": false
      },
      {
        "text": "DrawArc",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 321,
    "question": "Какая функция рисует сегмент круга (хорду)?",
    "answers": [
      {
        "text": "PaintChord",
        "isCorrect": false
      },
      {
        "text": "CreateChord",
        "isCorrect": false
      },
      {
        "text": "DrawChord",
        "isCorrect": false
      },
      {
        "text": "ArcChord",
        "isCorrect": false
      },
      {
        "text": "Chord",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 322,
    "question": "Какая функция рисует прямоугольник с закругленными углами?",
    "answers": [
      {
        "text": "DrawRoundRect",
        "isCorrect": false
      },
      {
        "text": "RoundBox",
        "isCorrect": false
      },
      {
        "text": "CreateRoundRect",
        "isCorrect": false
      },
      {
        "text": "RoundRect",
        "isCorrect": true
      },
      {
        "text": "PaintRoundRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 323,
    "question": "Какая функция заполняет область цветом текущей кисти?",
    "answers": [
      {
        "text": "PaintRect",
        "isCorrect": false
      },
      {
        "text": "FillArea",
        "isCorrect": false
      },
      {
        "text": "ColorRect",
        "isCorrect": false
      },
      {
        "text": "DrawRect",
        "isCorrect": false
      },
      {
        "text": "FillRect",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 324,
    "question": "Какая функция инвертирует цвета в прямоугольной области?",
    "answers": [
      {
        "text": "FlipRect",
        "isCorrect": false
      },
      {
        "text": "ReverseRect",
        "isCorrect": false
      },
      {
        "text": "ToggleRect",
        "isCorrect": false
      },
      {
        "text": "NotRect",
        "isCorrect": false
      },
      {
        "text": "InvertRect",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 325,
    "question": "Какая функция используется для загрузки иконки из ресурсов приложения?",
    "answers": [
      {
        "text": "ImportIcon",
        "isCorrect": false
      },
      {
        "text": "FindIcon",
        "isCorrect": false
      },
      {
        "text": "LoadIcon",
        "isCorrect": true
      },
      {
        "text": "SetIcon",
        "isCorrect": false
      },
      {
        "text": "GetIcon",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 326,
    "question": "Какой тип данных используется для представления дескриптора GDI-объекта (перо, кисть и т.д.)?",
    "answers": [
      {
        "text": "GDIHANDLE",
        "isCorrect": false
      },
      {
        "text": "OBJECT",
        "isCorrect": false
      },
      {
        "text": "HGDIOBJ",
        "isCorrect": true
      },
      {
        "text": "HANDLE",
        "isCorrect": false
      },
      {
        "text": "HOBJ",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 327,
    "question": "Какая функция возвращает дескриптор системного цвета по его идентификатору?",
    "answers": [
      {
        "text": "GetSysPen",
        "isCorrect": false
      },
      {
        "text": "GetColor",
        "isCorrect": false
      },
      {
        "text": "GetSysBrush",
        "isCorrect": false
      },
      {
        "text": "GetSystemColor",
        "isCorrect": false
      },
      {
        "text": "GetSysColor",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 328,
    "question": "Какое сообщение получает окно, когда меняется системный цвет?",
    "answers": [
      {
        "text": "WM_SYSCOLORCHANGE",
        "isCorrect": true
      },
      {
        "text": "WM_COLORCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_SETTINGCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_DISPLAYCHANGE",
        "isCorrect": false
      },
      {
        "text": "WM_WINCHANGE",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 329,
    "question": "Какая функция позволяет задать прозрачный фон при выводе текста?",
    "answers": [
      {
        "text": "SetTransparent(hdc)",
        "isCorrect": false
      },
      {
        "text": "SetBk(hdc, 0)",
        "isCorrect": false
      },
      {
        "text": "SetBackground(hdc, -1)",
        "isCorrect": false
      },
      {
        "text": "SetMode(hdc, 0)",
        "isCorrect": false
      },
      {
        "text": "SetBkMode",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 330,
    "question": "Какая функция используется для перемещения окна в заданные координаты (x, y)?",
    "answers": [
      {
        "text": "SetWindowLocation",
        "isCorrect": false
      },
      {
        "text": "SetWindowPos",
        "isCorrect": false
      },
      {
        "text": "MoveWindow",
        "isCorrect": true
      },
      {
        "text": "SetWindowXY",
        "isCorrect": false
      },
      {
        "text": "RepositionWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 331,
    "question": "Какая функция получает текущую позицию курсора мыши?",
    "answers": [
      {
        "text": "GetCursorXY",
        "isCorrect": false
      },
      {
        "text": "GetMouseLocation",
        "isCorrect": false
      },
      {
        "text": "GetMousePos",
        "isCorrect": false
      },
      {
        "text": "GetPoint",
        "isCorrect": false
      },
      {
        "text": "GetCursorPos",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 332,
    "question": "Какая функция преобразует координаты экрана в координаты клиентской области окна?",
    "answers": [
      {
        "text": "TransformCoords",
        "isCorrect": false
      },
      {
        "text": "MapWindowPoints",
        "isCorrect": false
      },
      {
        "text": "ConvertPoint",
        "isCorrect": false
      },
      {
        "text": "ClientToScreen",
        "isCorrect": false
      },
      {
        "text": "ScreenToClient",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 333,
    "question": "Какая функция создает «кисть» с заданным цветом?",
    "answers": [
      {
        "text": "SetBrushColor",
        "isCorrect": false
      },
      {
        "text": "CreateBrush",
        "isCorrect": false
      },
      {
        "text": "NewBrush",
        "isCorrect": false
      },
      {
        "text": "CreateSolidBrush",
        "isCorrect": true
      },
      {
        "text": "MakeBrush",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 334,
    "question": "Какой макрос создает значение цвета RGB?",
    "answers": [
      {
        "text": "MAKE_RGB(r, g, b)",
        "isCorrect": false
      },
      {
        "text": "SET_COLOR(r, g, b)",
        "isCorrect": false
      },
      {
        "text": "COLORREF(r, g, b)",
        "isCorrect": false
      },
      {
        "text": "RGB(r, g, b)",
        "isCorrect": true
      },
      {
        "text": "COLOR(r, g, b)",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 335,
    "question": "Какая функция начинает процесс рисования в WM_PAINT?",
    "answers": [
      {
        "text": "InitPaint",
        "isCorrect": false
      },
      {
        "text": "OpenPaint",
        "isCorrect": false
      },
      {
        "text": "StartPaint",
        "isCorrect": false
      },
      {
        "text": "DrawPaint",
        "isCorrect": false
      },
      {
        "text": "BeginPaint",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 336,
    "question": "Какая функция завершает процесс рисования в WM_PAINT?",
    "answers": [
      {
        "text": "StopPaint",
        "isCorrect": false
      },
      {
        "text": "ClosePaint",
        "isCorrect": false
      },
      {
        "text": "ReleasePaint",
        "isCorrect": false
      },
      {
        "text": "EndPaint",
        "isCorrect": true
      },
      {
        "text": "FinishPaint",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 337,
    "question": "Какая функция позволяет программно «инвалидировать» (пометить для перерисовки) область окна?",
    "answers": [
      {
        "text": "RefreshRect",
        "isCorrect": false
      },
      {
        "text": "InvalidateRect",
        "isCorrect": true
      },
      {
        "text": "UpdateRect",
        "isCorrect": false
      },
      {
        "text": "PaintRect",
        "isCorrect": false
      },
      {
        "text": "RedrawRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 338,
    "question": "Какая функция немедленно обновляет (перерисовывает) окно, если есть невалидные области?",
    "answers": [
      {
        "text": "UpdateWindow",
        "isCorrect": true
      },
      {
        "text": "FlushWindow",
        "isCorrect": false
      },
      {
        "text": "RedrawWindow",
        "isCorrect": false
      },
      {
        "text": "RefreshWindow",
        "isCorrect": false
      },
      {
        "text": "PaintWindow",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 339,
    "question": "Какое сообщение приходит в оконную процедуру при создании окна?",
    "answers": [
      {
        "text": "WM_OPEN",
        "isCorrect": false
      },
      {
        "text": "WM_INIT",
        "isCorrect": false
      },
      {
        "text": "WM_CREATE",
        "isCorrect": true
      },
      {
        "text": "WM_START",
        "isCorrect": false
      },
      {
        "text": "WM_CREATEWINDOW",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 340,
    "question": "Какая структура содержит параметры создания окна (передается в WM_CREATE)?",
    "answers": [
      {
        "text": "WINDOWSTRUCT",
        "isCorrect": false
      },
      {
        "text": "CREATEINFO",
        "isCorrect": false
      },
      {
        "text": "INITSTRUCT",
        "isCorrect": false
      },
      {
        "text": "SETUPSTRUCT",
        "isCorrect": false
      },
      {
        "text": "CREATESTRUCT",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 341,
    "question": "Какая функция создает «перо» для рисования линий?",
    "answers": [
      {
        "text": "NewPen",
        "isCorrect": false
      },
      {
        "text": "CreatePen",
        "isCorrect": true
      },
      {
        "text": "InitPen",
        "isCorrect": false
      },
      {
        "text": "MakePen",
        "isCorrect": false
      },
      {
        "text": "SetPen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 342,
    "question": "Какая функция устанавливает текущее перо в контекст устройства?",
    "answers": [
      {
        "text": "UseObject",
        "isCorrect": false
      },
      {
        "text": "AttachObject",
        "isCorrect": false
      },
      {
        "text": "SetObject",
        "isCorrect": false
      },
      {
        "text": "SelectObject",
        "isCorrect": true
      },
      {
        "text": "ApplyObject",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 343,
    "question": "Какая функция выбирает кисть в контекст устройства?",
    "answers": [
      {
        "text": "SelectObject",
        "isCorrect": true
      },
      {
        "text": "SetBrush",
        "isCorrect": false
      },
      {
        "text": "UseBrush",
        "isCorrect": false
      },
      {
        "text": "AttachBrush",
        "isCorrect": false
      },
      {
        "text": "ApplyBrush",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 344,
    "question": "Какая функция удаляет (освобождает) созданный GDI-объект?",
    "answers": [
      {
        "text": "DestroyObject",
        "isCorrect": false
      },
      {
        "text": "RemoveObject",
        "isCorrect": false
      },
      {
        "text": "DeleteObject",
        "isCorrect": true
      },
      {
        "text": "FreeObject",
        "isCorrect": false
      },
      {
        "text": "ReleaseObject",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 345,
    "question": "Какая функция получает размеры клиента окна?",
    "answers": [
      {
        "text": "GetWindowRect",
        "isCorrect": false
      },
      {
        "text": "GetClientRect",
        "isCorrect": true
      },
      {
        "text": "GetAreaRect",
        "isCorrect": false
      },
      {
        "text": "GetInnerRect",
        "isCorrect": false
      },
      {
        "text": "GetClientSize",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 346,
    "question": "Какая функция получает размеры всего окна (включая рамки и заголовок)?",
    "answers": [
      {
        "text": "GetFullWindowRect",
        "isCorrect": false
      },
      {
        "text": "GetOuterRect",
        "isCorrect": false
      },
      {
        "text": "GetClientRect",
        "isCorrect": false
      },
      {
        "text": "GetWindowRect",
        "isCorrect": true
      },
      {
        "text": "GetTotalRect",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 347,
    "question": "Какая функция рисует линию из текущей позиции в заданную?",
    "answers": [
      {
        "text": "LineTo",
        "isCorrect": true
      },
      {
        "text": "CreateLine",
        "isCorrect": false
      },
      {
        "text": "PaintLine",
        "isCorrect": false
      },
      {
        "text": "LineDraw",
        "isCorrect": false
      },
      {
        "text": "DrawLine",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 348,
    "question": "Какая функция устанавливает текущую позицию пера?",
    "answers": [
      {
        "text": "SetPos",
        "isCorrect": false
      },
      {
        "text": "MoveTo",
        "isCorrect": false
      },
      {
        "text": "Goto",
        "isCorrect": false
      },
      {
        "text": "SetCurrentPoint",
        "isCorrect": false
      },
      {
        "text": "MoveToEx",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 349,
    "question": "Какая функция рисует текст в заданной прямоугольной области?",
    "answers": [
      {
        "text": "PrintText",
        "isCorrect": false
      },
      {
        "text": "TextOut",
        "isCorrect": false
      },
      {
        "text": "DrawText",
        "isCorrect": true
      },
      {
        "text": "OutputText",
        "isCorrect": false
      },
      {
        "text": "WriteText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 350,
    "question": "Какая функция пишет строку текста в указанные координаты?",
    "answers": [
      {
        "text": "TextOut",
        "isCorrect": true
      },
      {
        "text": "OutputText",
        "isCorrect": false
      },
      {
        "text": "DrawText",
        "isCorrect": false
      },
      {
        "text": "PrintText",
        "isCorrect": false
      },
      {
        "text": "WriteText",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 351,
    "question": "Какая функция используется для создания таймера?",
    "answers": [
      {
        "text": "AddTimer",
        "isCorrect": false
      },
      {
        "text": "InitTimer",
        "isCorrect": false
      },
      {
        "text": "CreateTimer",
        "isCorrect": false
      },
      {
        "text": "SetTimer",
        "isCorrect": true
      },
      {
        "text": "StartTimer",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 352,
    "question": "Какое сообщение приходит от таймера?",
    "answers": [
      {
        "text": "WM_CLOCK",
        "isCorrect": false
      },
      {
        "text": "WM_TIMER",
        "isCorrect": true
      },
      {
        "text": "WM_TICK",
        "isCorrect": false
      },
      {
        "text": "WM_ALARM",
        "isCorrect": false
      },
      {
        "text": "WM_TIME",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 353,
    "question": "Какая функция уничтожает таймер?",
    "answers": [
      {
        "text": "KillTimer",
        "isCorrect": true
      },
      {
        "text": "StopTimer",
        "isCorrect": false
      },
      {
        "text": "ClearTimer",
        "isCorrect": false
      },
      {
        "text": "RemoveTimer",
        "isCorrect": false
      },
      {
        "text": "DeleteTimer",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 354,
    "question": "Что такое «дескриптор» в Windows API?",
    "answers": [
      {
        "text": "Указатель на структуру",
        "isCorrect": false
      },
      {
        "text": "Адрес переменной",
        "isCorrect": false
      },
      {
        "text": "Непрозрачный идентификатор системного ресурса",
        "isCorrect": true
      },
      {
        "text": "Номер процесса",
        "isCorrect": false
      },
      {
        "text": "Код ошибки",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 355,
    "question": "Какая функция Windows API используется для получения системного времени с точностью до миллисекунд?",
    "answers": [
      {
        "text": "GetSystemTime",
        "isCorrect": false
      },
      {
        "text": "GetCurrentTime",
        "isCorrect": false
      },
      {
        "text": "GetTime",
        "isCorrect": false
      },
      {
        "text": "GetLocalTime",
        "isCorrect": false
      },
      {
        "text": "GetTickCount",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 356,
    "question": "Какой стиль окна позволяет сделать его поверх всех остальных (Topmost)?",
    "answers": [
      {
        "text": "WS_STAY_ON_TOP",
        "isCorrect": false
      },
      {
        "text": "WS_EX_TOPMOST",
        "isCorrect": true
      },
      {
        "text": "WS_ABOVE",
        "isCorrect": false
      },
      {
        "text": "WS_ALWAYS_ON_TOP",
        "isCorrect": false
      },
      {
        "text": "WS_TOPMOST",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 357,
    "question": "Какая функция используется для создания модального диалогового окна из ресурсов?",
    "answers": [
      {
        "text": "DialogBox",
        "isCorrect": true
      },
      {
        "text": "OpenDialog",
        "isCorrect": false
      },
      {
        "text": "CreateDialog",
        "isCorrect": false
      },
      {
        "text": "ShowDialog",
        "isCorrect": false
      },
      {
        "text": "RunDialog",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 358,
    "question": "Какое сообщение приходит диалоговому окну, когда его нужно закрыть (например, по нажатию кнопки OK)?",
    "answers": [
      {
        "text": "WM_CLOSE",
        "isCorrect": false
      },
      {
        "text": "WM_QUIT",
        "isCorrect": false
      },
      {
        "text": "WM_EXIT",
        "isCorrect": false
      },
      {
        "text": "EndDialog",
        "isCorrect": true
      },
      {
        "text": "WM_DESTROY",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 359,
    "question": "Какая функция позволяет получить идентификатор потока (Thread ID)?",
    "answers": [
      {
        "text": "GetCurrentThread",
        "isCorrect": false
      },
      {
        "text": "GetId",
        "isCorrect": false
      },
      {
        "text": "GetCurrentThreadId",
        "isCorrect": true
      },
      {
        "text": "GetThreadHandle",
        "isCorrect": false
      },
      {
        "text": "GetThreadId",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 360,
    "question": "Какая функция используется для принудительного завершения работы любого процесса?",
    "answers": [
      {
        "text": "StopProcess",
        "isCorrect": false
      },
      {
        "text": "KillProcess",
        "isCorrect": false
      },
      {
        "text": "ExitProcess",
        "isCorrect": false
      },
      {
        "text": "CloseProcess",
        "isCorrect": false
      },
      {
        "text": "TerminateProcess",
        "isCorrect": true
      }
    ]
  }
];
