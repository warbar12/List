const countries = [
  {
	name: 'Mauritania',
	translate: 'Мавритания'
  },
  {
	name: 'Aruba',
	translate: 'Аруба'
  },
  {
	name: 'Argentina',
	translate: 'Аргентина'
  },
  {
	name: 'Sweden',
	translate: 'Швеция'
  },
  {
	name: 'Maldives',
	translate: 'Мальдивы'
  },
  {
	name: 'Mexico',
	translate: 'Мексика'
  },
  {
	name: 'New Zealand',
	translate: 'Новая Зеландия'
  },
  {
	name: 'Ecuador',
	translate: 'Эквадор'
  },
  {
	name: 'Wallis and Futuna',
	translate: 'Уоллис и Футуна'
  },
  {
	name: 'Åland Islands',
	translate: 'Аландские острова'
  },
  {
	name: 'Montenegro',
	translate: 'Черногория'
  },
  {
	name: 'Pakistan',
	translate: 'Пакистан'
  },
  {
	name: 'Pitcairn Islands',
	translate: 'Острова Питкэрн'
  },
  {
	name: 'Zambia',
	translate: 'Замбия'
  },
  {
	name: 'Seychelles',
	translate: 'Сейшельские Острова'
  },
  {
	name: 'Malaysia',
	translate: 'Малайзия'
  },
  {
	name: 'Norway',
	translate: 'Норвегия'
  },
  {
	name: 'Uzbekistan',
	translate: 'Узбекистан'
  },
  {
	name: 'Vanuatu',
	translate: 'Вануату'
  },
  {
	name: 'French Southern and Antarctic Lands',
	translate: 'Французские Южные и Антарктические территории'
  },
  {
	name: 'Christmas Island',
	translate: 'Остров Рождества'
  },
  {
	name: 'Singapore',
	translate: 'Сингапур'
  },
  {
	name: 'Suriname',
	translate: 'Суринам'
  },
  {
	name: 'Western Sahara',
	translate: 'Западная Сахара'
  },
  {
	name: 'Saint Martin',
	translate: 'Сен-Мартен'
  },
  {
	name: 'Costa Rica',
	translate: 'Коста-Рика'
  },
  {
	name: 'Heard Island and McDonald Islands',
	translate: 'Остров Херд и острова Макдональд'
  },
  {
	name: 'Ireland',
	translate: 'Ирландия'
  },
  {
	name: 'Antarctica',
	translate: 'Антарктида'
  },
  {
	name: 'Australia',
	translate: 'Австралия'
  },
  {
	name: 'Libya',
	translate: 'Ливия'
  },
  {
	name: 'Qatar',
	translate: 'Катар'
  },
  {
	name: 'Greenland',
	translate: 'Гренландия'
  },
  {
	name: 'Mauritius',
	translate: 'Маврикий'
  },
  {
	name: 'Kazakhstan',
	translate: 'Казахстан'
  },
  {
	name: 'British Indian Ocean Territory',
	translate: 'Британская территория в Индийском океане'
  },
  {
	name: 'Albania',
	translate: 'Албания'
  },
  {
	name: 'Bahrain',
	translate: 'Бахрейн'
  },
  {
	name: 'Papua New Guinea',
	translate: 'Папуа — Новая Гвинея'
  },
  {
	name: 'Burundi',
	translate: 'Бурунди'
  },
  {
	name: 'India',
	translate: 'Индия'
  },
  {
	name: 'Uruguay',
	translate: 'Уругвай'
  },
  {
	name: 'Saint Lucia',
	translate: 'Сент-Люсия'
  },
  {
	name: 'Barbados',
	translate: 'Барбадос'
  },
  {
	name: 'New Caledonia',
	translate: 'Новая Каледония'
  },
  {
	name: 'Latvia',
	translate: 'Латвия'
  },
  {
	name: 'Estonia',
	translate: 'Эстония'
  },
  {
	name: 'Niue',
	translate: 'Ниуэ'
  },
  {
	name: 'Saint Barthélemy',
	translate: 'Сен-Бартелеми'
  },
  {
	name: 'Puerto Rico',
	translate: 'Пуэрто-Рико'
  },
  {
	name: 'Grenada',
	translate: 'Гренада'
  },
  {
	name: 'Macau',
	translate: 'Макао'
  },
  {
	name: 'Cyprus',
	translate: 'Кипр'
  },
  {
	name: 'Isle of Man',
	translate: 'Остров Мэн'
  },
  {
	name: 'Greece',
	translate: 'Греция'
  },
  {
	name: 'Syria',
	translate: 'Сирия'
  },
  {
	name: 'Lithuania',
	translate: 'Литва'
  },
  {
	name: 'Curaçao',
	translate: 'Кюрасао'
  },
  {
	name: 'Dominica',
	translate: 'Доминика'
  },
  {
	name: 'Niger',
	translate: 'Нигер'
  },
  {
	name: 'Kyrgyzstan',
	translate: 'Киргизия'
  },
  {
	name: 'Trinidad and Tobago',
	translate: 'Тринидад и Тобаго'
  },
  {
	name: 'Togo',
	translate: 'Того'
  },
  {
	name: 'Palestine',
	translate: 'Палестина'
  },
  {
	name: 'Madagascar',
	translate: 'Мадагаскар'
  },
  {
	name: 'Croatia',
	translate: 'Хорватия'
  },
  {
	name: 'Faroe Islands',
	translate: 'Фарерские острова'
  },
  {
	name: 'Haiti',
	translate: 'Гаити'
  },
  {
	name: 'Montserrat',
	translate: 'Монтсеррат'
  },
  {
	name: 'Cook Islands',
	translate: 'Острова Кука'
  },
  {
	name: 'Timor-Leste',
	translate: 'Восточный Тимор'
  },
  {
	name: 'Martinique',
	translate: 'Мартиника'
  },
  {
	name: 'Cuba',
	translate: 'Куба'
  },
  {
	name: 'Taiwan',
	translate: 'Тайвань'
  },
  {
	name: 'Eswatini',
	translate: 'Свазиленд'
  },
  {
	name: 'Ukraine',
	translate: 'Украина'
  },
  {
	name: 'Bermuda',
	translate: 'Бермудские Острова'
  },
  {
	name: 'South Korea',
	translate: 'Южная Корея'
  },
  {
	name: 'Peru',
	translate: 'Перу'
  },
  {
	name: 'Iraq',
	translate: 'Ирак'
  },
  {
	name: 'Moldova',
	translate: 'Молдавия'
  },
  {
	name: 'San Marino',
	translate: 'Сан-Марино'
  },
  {
	name: 'Venezuela',
	translate: 'Венесуэла'
  },
  {
	name: 'Guyana',
	translate: 'Гайана'
  },
  {
	name: 'Cayman Islands',
	translate: 'Каймановы острова'
  },
  {
	name: 'Cambodia',
	translate: 'Камбоджа'
  },
  {
	name: 'Cocos (Keeling) Islands',
	translate: 'Кокосовые острова'
  },
  {
	name: 'Malta',
	translate: 'Мальта'
  },
  {
	name: 'Sri Lanka',
	translate: 'Шри-Ланка'
  },
  {
	name: 'Israel',
	translate: 'Израиль'
  },
  {
	name: 'Sudan',
	translate: 'Судан'
  },
  {
	name: 'United States Virgin Islands',
	translate: 'Виргинские Острова'
  },
  {
	name: 'Eritrea',
	translate: 'Эритрея'
  },
  {
	name: 'Mali',
	translate: 'Мали'
  },
  {
	name: 'Somalia',
	translate: 'Сомали'
  },
  {
	name: 'Norfolk Island',
	translate: 'Норфолк'
  },
  {
	name: 'Comoros',
	translate: 'Коморы'
  },
  {
	name: 'Nicaragua',
	translate: 'Никарагуа'
  },
  {
	name: 'Russia',
	translate: 'Россия'
  },
  {
	name: 'Uganda',
	translate: 'Уганда'
  },
  {
	name: 'Nauru',
	translate: 'Науру'
  },
  {
	name: 'Switzerland',
	translate: 'Швейцария'
  },
  {
	name: 'Portugal',
	translate: 'Португалия'
  },
  {
	name: 'Tajikistan',
	translate: 'Таджикистан'
  },
  {
	name: 'South Sudan',
	translate: 'Южный Судан'
  },
  {
	name: 'Bouvet Island',
	translate: 'Остров Буве'
  },
  {
	name: 'Micronesia',
	translate: 'Федеративные Штаты Микронезии'
  },
  {
	name: 'American Samoa',
	translate: 'Американское Самоа'
  },
  {
	name: 'Czechia',
	translate: 'Чехия'
  },
  {
	name: 'Botswana',
	translate: 'Ботсвана'
  },
  {
	name: 'Tunisia',
	translate: 'Тунис'
  },
  {
	name: 'Anguilla',
	translate: 'Ангилья'
  },
  {
	name: 'Guinea-Bissau',
	translate: 'Гвинея-Бисау'
  },
  {
	name: 'Slovakia',
	translate: 'Словакия'
  },
  {
	name: 'Marshall Islands',
	translate: 'Маршалловы Острова'
  },
  {
	name: 'Algeria',
	translate: 'Алжир'
  },
  {
	name: 'Jamaica',
	translate: 'Ямайка'
  },
  {
	name: 'Mozambique',
	translate: 'Мозамбик'
  },
  {
	name: 'Spain',
	translate: 'Испания'
  },
  {
	name: 'Honduras',
	translate: 'Гондурас'
  },
  {
	name: 'Netherlands',
	translate: 'Нидерланды'
  },
  {
	name: 'South Africa',
	translate: 'Южная Африка'
  },
  {
	name: 'Azerbaijan',
	translate: 'Азербайджан'
  },
  {
	name: 'North Macedonia',
	translate: 'Северная Македония'
  },
  {
	name: 'Gambia',
	translate: 'Гамбия'
  },
  {
	name: 'Liberia',
	translate: 'Либерия'
  },
  {
	name: 'Luxembourg',
	translate: 'Люксембург'
  },
  {
	name: 'Cape Verde',
	translate: 'Кабо-Верде'
  },
  {
	name: 'Bahamas',
	translate: 'Багамские Острова'
  },
  {
	name: 'Georgia',
	translate: 'Грузия'
  },
  {
	name: 'Kiribati',
	translate: 'Кирибати'
  },
  {
	name: 'Tanzania',
	translate: 'Танзания'
  },
  {
	name: 'China',
	translate: 'Китай'
  },
  {
	name: 'Guatemala',
	translate: 'Гватемала'
  },
  {
	name: 'São Tomé and Príncipe',
	translate: 'Сан-Томе и Принсипи'
  },
  {
	name: 'Germany',
	translate: 'Германия'
  },
  {
	name: 'Sierra Leone',
	translate: 'Сьерра-Леоне'
  },
  {
	name: 'Chad',
	translate: 'Чад'
  },
  {
	name: 'United Kingdom',
	translate: 'Великобритания'
  },
  {
	name: 'Slovenia',
	translate: 'Словения'
  },
  {
	name: 'Thailand',
	translate: 'Таиланд'
  },
  {
	name: 'Indonesia',
	translate: 'Индонезия'
  },
  {
	name: 'Northern Mariana Islands',
	translate: 'Северные Марианские острова'
  },
  {
	name: 'Guam',
	translate: 'Гуам'
  },
  {
	name: 'Finland',
	translate: 'Финляндия'
  },
  {
	name: 'Mayotte',
	translate: 'Майотта'
  },
  {
	name: 'Gibraltar',
	translate: 'Гибралтар'
  },
  {
	name: 'Turkmenistan',
	translate: 'Туркмения'
  },
  {
	name: 'Kosovo',
	translate: 'Республика Косово'
  },
  {
	name: 'Ivory Coast',
	translate: 'Кот-д Ивуар'
  },
  {
	name: 'Morocco',
	translate: 'Марокко'
  },
  {
	name: 'Dominican Republic',
	translate: 'Доминиканская Республика'
  },
  {
	name: 'Ghana',
	translate: 'Гана'
  },
  {
	name: 'Vatican City',
	translate: 'Ватикан'
  },
  {
	name: 'Jersey',
	translate: 'Джерси'
  },
  {
	name: 'Turkey',
	translate: 'Турция'
  },
  {
	name: 'Tuvalu',
	translate: 'Тувалу'
  },
  {
	name: 'Iran',
	translate: 'Иран'
  },
  {
	name: 'Egypt',
	translate: 'Египет'
  },
  {
	name: 'Denmark',
	translate: 'Дания'
  },
  {
	name: 'Kenya',
	translate: 'Кения'
  },
  {
	name: 'Bulgaria',
	translate: 'Болгария'
  },
  {
	name: 'Zimbabwe',
	translate: 'Зимбабве'
  },
  {
	name: 'Angola',
	translate: 'Ангола'
  },
  {
	name: 'Nigeria',
	translate: 'Нигерия'
  },
  {
	name: 'Poland',
	translate: 'Польша'
  },
  {
	name: 'Senegal',
	translate: 'Сенегал'
  },
  {
	name: 'Saint Helena, Ascension and Tristan da Cunha',
	translate: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья'
  },
  {
	name: 'Lebanon',
	translate: 'Ливан'
  },
  {
	name: 'Samoa',
	translate: 'Самоа'
  },
  {
	name: 'Philippines',
	translate: 'Филиппины'
  },
  {
	name: 'Guernsey',
	translate: 'Гернси'
  },
  {
	name: 'El Salvador',
	translate: 'Сальвадор'
  },
  {
	name: 'Kuwait',
	translate: 'Кувейт'
  },
  {
	name: 'Tonga',
	translate: 'Тонга'
  },
  {
	name: 'Oman',
	translate: 'Оман'
  },
  {
	name: 'Afghanistan',
	translate: 'Афганистан'
  },
  {
	name: 'Saint Kitts and Nevis',
	translate: 'Сент-Китс и Невис'
  },
  {
	name: 'Central African Republic',
	translate: 'Центральноафриканская Республика'
  },
  {
	name: 'Serbia',
	translate: 'Сербия'
  },
  {
	name: 'Armenia',
	translate: 'Армения'
  },
  {
	name: 'Bangladesh',
	translate: 'Бангладеш'
  },
  {
	name: 'Laos',
	translate: 'Лаос'
  },
  {
	name: 'Chile',
	translate: 'Чили'
  },
  {
	name: 'French Polynesia',
	translate: 'Французская Полинезия'
  },
  {
	name: 'Panama',
	translate: 'Панама'
  },
  {
	name: 'United States',
	translate: 'Соединённые Штаты Америки'
  },
  {
	name: 'Nepal',
	translate: 'Непал'
  },
  {
	name: 'Myanmar',
	translate: 'Мьянма'
  },
  {
	name: 'Falkland Islands',
	translate: 'Фолклендские острова'
  },
  {
	name: 'Hungary',
	translate: 'Венгрия'
  },
  {
	name: 'Palau',
	translate: 'Палау'
  },
  {
	name: 'Equatorial Guinea',
	translate: 'Экваториальная Гвинея'
  },
  {
	name: 'Guinea',
	translate: 'Гвинея'
  },
  {
	name: 'United Arab Emirates',
	translate: 'Объединённые Арабские Эмираты'
  },
  {
	name: 'Turks and Caicos Islands',
	translate: 'Теркс и Кайкос'
  },
  {
	name: 'British Virgin Islands',
	translate: 'Британские Виргинские острова'
  },
  {
	name: 'Liechtenstein',
	translate: 'Лихтенштейн'
  },
  {
	name: 'Bosnia and Herzegovina',
	translate: 'Босния и Герцеговина'
  },
  {
	name: 'Malawi',
	translate: 'Малави'
  },
  {
	name: 'Bhutan',
	translate: 'Бутан'
  },
  {
	name: 'Cameroon',
	translate: 'Камерун'
  },
  {
	name: 'Andorra',
	translate: 'Андорра'
  },
  {
	name: 'Guadeloupe',
	translate: 'Гваделупа'
  },
  {
	name: 'Republic of the Congo',
	translate: 'Республика Конго'
  },
  {
	name: 'Réunion',
	translate: 'Реюньон'
  },
  {
	name: 'Burkina Faso',
	translate: 'Буркина-Фасо'
  },
  {
	name: 'Jordan',
	translate: 'Иордания'
  },
  {
	name: 'DR Congo',
	translate: 'Демократическая Республика Конго'
  },
  {
	name: 'Tokelau',
	translate: 'Токелау'
  },
  {
	name: 'Vietnam',
	translate: 'Вьетнам'
  },
  {
	name: 'Sint Maarten',
	translate: 'Синт-Мартен'
  },
  {
	name: 'Belgium',
	translate: 'Бельгия'
  },
  {
	name: 'United States Minor Outlying Islands',
	translate: 'Внешние малые острова США'
  },
  {
	name: 'Brazil',
	translate: 'Бразилия'
  },
  {
	name: 'Belize',
	translate: 'Белиз'
  },
  {
	name: 'Antigua and Barbuda',
	translate: 'Антигуа и Барбуда'
  },
  {
	name: 'Paraguay',
	translate: 'Парагвай'
  },
  {
	name: 'Benin',
	translate: 'Бенин'
  },
  {
	name: 'Brunei',
	translate: 'Бруней'
  },
  {
	name: 'Bolivia',
	translate: 'Боливия'
  },
  {
	name: 'Djibouti',
	translate: 'Джибути'
  },
  {
	name: 'French Guiana',
	translate: 'Французская Гвиана'
  },
  {
	name: 'Canada',
	translate: 'Канада'
  },
  {
	name: 'Saint Pierre and Miquelon',
	translate: 'Сен-Пьер и Микелон'
  },
  {
	name: 'Japan',
	translate: 'Япония'
  },
  {
	name: 'Rwanda',
	translate: 'Руанда'
  },
  {
	name: 'Saint Vincent and the Grenadines',
	translate: 'Сент-Винсент и Гренадины'
  },
  {
	name: 'Iceland',
	translate: 'Исландия'
  },
  {
	name: 'Belarus',
	translate: 'Беларусь'
  },
  {
	name: 'Hong Kong',
	translate: 'Гонконг'
  },
  {
	name: 'Lesotho',
	translate: 'Лесото'
  },
  {
	name: 'Fiji',
	translate: 'Фиджи'
  },
  {
	name: 'Austria',
	translate: 'Австрия'
  },
  {
	name: 'Colombia',
	translate: 'Колумбия'
  },
  {
	name: 'Gabon',
	translate: 'Габон'
  },
  {
	name: 'Saudi Arabia',
	translate: 'Саудовская Аравия'
  },
  {
	name: 'South Georgia',
	translate: 'Южная Георгия и Южные Сандвичевы острова'
  },
  {
	name: 'Ethiopia',
	translate: 'Эфиопия'
  },
  {
	name: 'Caribbean Netherlands',
	translate: 'Карибские Нидерланды'
  },
  {
	name: 'Monaco',
	translate: 'Монако'
  },
  {
	name: 'North Korea',
	translate: 'Северная Корея'
  },
  {
	name: 'Italy',
	translate: 'Италия'
  },
  {
	name: 'Namibia',
	translate: 'Намибия'
  },
  {
	name: 'Mongolia',
	translate: 'Монголия'
  },
  {
	name: 'Solomon Islands',
	translate: 'Соломоновы Острова'
  },
  {
	name: 'Yemen',
	translate: 'Йемен'
  },
  {
	name: 'Romania',
	translate: 'Румыния'
  },
  {
	name: 'Svalbard and Jan Mayen',
	translate: 'Шпицберген и Ян-Майен'
  },
  {
	name: 'France',
	translate: 'Франция'
  }
];