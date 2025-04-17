# Некоторые команды Git:
git add — добавление файлов в индекс.
git status — проверка статуса репозитория. 
git commit — добавление файлов в репозиторий. 
git log — просмотр журнала коммитов. 
git show — просмотр коммита. 
git diff — просмотр изменений до коммита. 
git difftool — запуск внешнего инструмента сравнения файлов. 
git restore — отмена изменений. 
git rm — удаление файлов из индекса. 
git reset — откат коммита. 
git branch — создание новой ветки.
git checkout — переключение между ветками. 
git merge — слияние репозиториев. 
git branch -d — удаление ветки. 
git remote add origin url — привязка локального и удалённого репозитория. 
git remote — просмотр удалённых репозиториев. 
git push — отправка изменений в удалённый репозиторий. тольок после commit
git pull — получение изменений из удалённого репозитория
git help -a - помощь
git clone url - скопировать/клонировать удаленный репозиторий 


### Понятие репозитория
репозиторий - это хранилище кода, включающее: 
1. все файлы и папки проекта
2. историю изменений (commits)
3. информацию о ветках и настройках


### виды репозиториев:
1. Локальный - хранится на компьютере разработчика (папка.git)
2. Удаленный(remote) - либо zethub либо github


### структура проекта 
project/            #корневая папка проекта
|
|
|-- .git/           #скрытая папка с данными git (история, настройки)
|
|-- src/            #исходный код (например, main.py , index.js)
|-- docs/           #документация (readme.md, api-описание)
|-- tests/          #тесты (unit-тесты, интеграционные тесты)
|-- config/         #файлы конфигурации (настройки сервера, БД)
|-- assets/         #ресурсы (изображение, шрифты)
|
|-- .gitignore      #файл, указывающий, какие файлы git должен игнорировать


# основные элементы
- .git/ - служебная папка git (нельзя удалять!)
- README.md - описание проекта (обычно в корне)
- .gitignore - список файлов, которые git не отслеживает


# жизненный цикл файлов в git
файлы в git проходят несколько стадий:
1. неотслеживаемые (untracked) - git о них не знает
2. изменённые (modified) - файлы, которые уже в репозитории, но были изменены.
3. индексированные (staged) - файлы, подготовленные к клммиьу (git add)
4. зафиксированные (commited) - изменения сохранены в репозитории (git comit)


# важные правила
коммиты должны быть атомарными - каждое изменение логически завершённое.
- .gitignore обязателен - чтобы не засорять репозиторий ненужными файлами.
- README.md - лица проекта - должен содержать описание, установку и использование
