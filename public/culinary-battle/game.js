const spritePositions = [
  '0% 0%', '33.333% 0%', '66.667% 0%', '100% 0%',
  '0% 50%', '33.333% 50%', '66.667% 50%', '100% 50%',
  '0% 100%', '33.333% 100%', '66.667% 100%', '100% 100%',
];

function makeWordSet(prefix, sheet, definitions) {
  return definitions.map(([key, hanzi, pinyin, meaning], index) => ({
    id: `${prefix}_${key}`,
    hanzi,
    pinyin,
    meaning,
    sheet,
    position: spritePositions[index],
    index,
  }));
}

const wordSets = {
  salads: makeWordSet('s', 'assets/ingredients-salads-v1.png', [
    ['cucumber', '黄瓜', 'huángguā', 'огурец'],
    ['tomato', '西红柿', 'xīhóngshì', 'помидор'],
    ['carrot', '胡萝卜', 'húluóbo', 'морковь'],
    ['lettuce', '生菜', 'shēngcài', 'салатные листья'],
    ['cabbage', '白菜', 'báicài', 'пекинская капуста'],
    ['corn', '玉米', 'yùmǐ', 'кукуруза'],
    ['avocado', '牛油果', 'niúyóuguǒ', 'авокадо'],
    ['apple', '苹果', 'píngguǒ', 'яблоко'],
    ['orange', '橙子', 'chéngzi', 'апельсин'],
    ['strawberry', '草莓', 'cǎoméi', 'клубника'],
    ['pear', '梨', 'lí', 'груша'],
    ['grapes', '葡萄', 'pútáo', 'виноград'],
  ]),
  hot: makeWordSet('h', 'assets/ingredients-hot-v1.png', [
    ['noodles', '面条', 'miàntiáo', 'лапша'],
    ['beef', '牛肉', 'niúròu', 'говядина'],
    ['chicken', '鸡肉', 'jīròu', 'курица'],
    ['pork', '猪肉', 'zhūròu', 'свинина'],
    ['tofu', '豆腐', 'dòufu', 'тофу'],
    ['egg', '鸡蛋', 'jīdàn', 'яйцо'],
    ['rice', '米饭', 'mǐfàn', 'рис'],
    ['mushroom', '蘑菇', 'mógu', 'грибы'],
    ['greens', '青菜', 'qīngcài', 'зелень'],
    ['chili', '辣椒', 'làjiāo', 'острый перец'],
    ['scallion', '葱', 'cōng', 'зелёный лук'],
    ['peanuts', '花生', 'huāshēng', 'арахис'],
  ]),
  desserts: makeWordSet('d', 'assets/ingredients-desserts-v1.png', [
    ['flour', '面粉', 'miànfěn', 'мука'],
    ['sugar', '糖', 'táng', 'сахар'],
    ['milk', '牛奶', 'niúnǎi', 'молоко'],
    ['butter', '黄油', 'huángyóu', 'сливочное масло'],
    ['egg', '鸡蛋', 'jīdàn', 'яйцо'],
    ['cream', '奶油', 'nǎiyóu', 'сливки'],
    ['chocolate', '巧克力', 'qiǎokèlì', 'шоколад'],
    ['honey', '蜂蜜', 'fēngmì', 'мёд'],
    ['banana', '香蕉', 'xiāngjiāo', 'банан'],
    ['strawberry', '草莓', 'cǎoméi', 'клубника'],
    ['mango', '芒果', 'mángguǒ', 'манго'],
    ['redbeans', '红豆', 'hóngdòu', 'красная фасоль'],
  ]),
  drinks: makeWordSet('b', 'assets/ingredients-drinks-v1.png', [
    ['water', '水', 'shuǐ', 'вода'],
    ['milk', '牛奶', 'niúnǎi', 'молоко'],
    ['coffee', '咖啡', 'kāfēi', 'кофе'],
    ['tea', '茶叶', 'cháyè', 'чайные листья'],
    ['lemon', '柠檬', 'níngméng', 'лимон'],
    ['mint', '薄荷', 'bòhe', 'мята'],
    ['ice', '冰块', 'bīngkuài', 'лёд'],
    ['strawberry', '草莓', 'cǎoméi', 'клубника'],
    ['banana', '香蕉', 'xiāngjiāo', 'банан'],
    ['mango', '芒果', 'mángguǒ', 'манго'],
    ['orange', '橙子', 'chéngzi', 'апельсин'],
    ['honey', '蜂蜜', 'fēngmì', 'мёд'],
  ]),
};

wordSets.shifuExtras = [
  { id: 'x_bamboo', hanzi: '竹笋', pinyin: 'zhúsǔn', meaning: 'побеги бамбука', image: 'assets/ingredients/bamboo-shoots.png' },
  { id: 'x_wood_ear', hanzi: '木耳', pinyin: "mù'ěr", meaning: 'древесные грибы', image: 'assets/ingredients/wood-ear.png' },
  { id: 'x_mandarin_fish', hanzi: '桂鱼', pinyin: 'guìyú', meaning: 'рыба-мандаринка', image: 'assets/ingredients/mandarin-fish.png' },
  { id: 'x_pine_nuts', hanzi: '松子', pinyin: 'sōngzǐ', meaning: 'кедровые орехи', image: 'assets/ingredients/pine-nuts.png' },
  { id: 'x_vinegar', hanzi: '醋', pinyin: 'cù', meaning: 'чёрный рисовый уксус', image: 'assets/ingredients/black-vinegar.png' },
  { id: 'x_abalone', hanzi: '鲍鱼', pinyin: 'bàoyú', meaning: 'морское ушко', image: 'assets/ingredients/abalone.png' },
  { id: 'x_sea_cucumber', hanzi: '海参', pinyin: 'hǎishēn', meaning: 'трепанг', image: 'assets/ingredients/sea-cucumber.png' },
  { id: 'x_shiitake', hanzi: '香菇', pinyin: 'xiānggū', meaning: 'шиитаке', image: 'assets/ingredients/shiitake.png' },
  { id: 'x_jinhua_ham', hanzi: '金华火腿', pinyin: 'jīnhuá huǒtuǐ', meaning: 'ветчина Цзиньхуа', image: 'assets/ingredients/jinhua-ham.png' },
];

const ingredients = Object.fromEntries(
  Object.values(wordSets).flat().map((item) => [item.id, item]),
);

const themes = {
  salads: {
    title: 'Салаты',
    className: 'Свежая композиция',
    vesselName: 'салатник',
    vesselPosition: '0% 0%',
    resultSheet: 'assets/results-salads-clean-v2.png',
    wordIds: wordSets.salads.map((item) => item.id),
    recipes: [
      { name: '黄瓜西红柿沙拉 · овощной салат', phrase: '请做一份黄瓜西红柿沙拉。', pinyin: 'Qǐng zuò yī fèn huángguā xīhóngshì shālā.', translation: 'Пожалуйста, приготовьте салат с огурцом и помидором.', needs: ['s_cucumber', 's_tomato', 's_lettuce'], resultPosition: '0% 0%' },
      { name: '彩虹蔬菜沙拉 · радужный салат', phrase: '我要彩虹蔬菜沙拉。', pinyin: 'Wǒ yào cǎihóng shūcài shālā.', translation: 'Я хочу радужный овощной салат.', needs: ['s_cabbage', 's_carrot', 's_corn'], resultPosition: '50% 0%' },
      { name: '牛油果橙子沙拉 · салат с авокадо', phrase: '来一份牛油果橙子沙拉。', pinyin: 'Lái yī fèn niúyóuguǒ chéngzi shālā.', translation: 'Принесите салат с авокадо и апельсином.', needs: ['s_avocado', 's_orange', 's_lettuce'], resultPosition: '100% 0%' },
      { name: '苹果梨葡萄沙拉 · фруктовый салат', phrase: '请做苹果梨葡萄沙拉。', pinyin: 'Qǐng zuò píngguǒ lí pútáo shālā.', translation: 'Приготовьте салат из яблока, груши и винограда.', needs: ['s_apple', 's_pear', 's_grapes'], resultPosition: '0% 100%' },
      { name: '草莓水果沙拉 · клубничный салат', phrase: '我要草莓水果沙拉。', pinyin: 'Wǒ yào cǎoméi shuǐguǒ shālā.', translation: 'Я хочу фруктовый салат с клубникой.', needs: ['s_strawberry', 's_apple', 's_orange'], resultPosition: '50% 100%' },
    ],
  },
  hot: {
    title: 'Горячие блюда',
    className: 'Огонь и аромат',
    vesselName: 'вок',
    vesselPosition: '50% 0%',
    resultSheet: 'assets/results-hot-clean-v2.png',
    wordIds: wordSets.hot.map((item) => item.id),
    recipes: [
      { name: '牛肉面 · лапша с говядиной', phrase: '来一碗牛肉面。', pinyin: 'Lái yī wǎn niúròu miàn.', translation: 'Принесите миску лапши с говядиной.', needs: ['h_noodles', 'h_beef', 'h_greens'], resultPosition: '0% 0%' },
      { name: '蛋炒饭 · жареный рис', phrase: '我要一份蛋炒饭。', pinyin: 'Wǒ yào yī fèn dàn chǎofàn.', translation: 'Я хочу порцию жареного риса с яйцом.', needs: ['h_rice', 'h_egg', 'h_scallion'], resultPosition: '50% 0%' },
      { name: '香菇豆腐 · тофу с грибами', phrase: '请做香菇豆腐。', pinyin: 'Qǐng zuò xiānggū dòufu.', translation: 'Пожалуйста, приготовьте тофу с грибами.', needs: ['h_mushroom', 'h_tofu', 'h_greens'], resultPosition: '100% 0%' },
      { name: '宫保鸡丁 · курица гунбао', phrase: '来一份宫保鸡丁。', pinyin: 'Lái yī fèn gōngbǎo jīdīng.', translation: 'Принесите порцию курицы гунбао.', needs: ['h_chicken', 'h_chili', 'h_peanuts'], resultPosition: '0% 100%' },
      { name: '红烧肉盖饭 · свинина с рисом', phrase: '我要红烧肉盖饭。', pinyin: 'Wǒ yào hóngshāoròu gàifàn.', translation: 'Я хочу рис с красной тушёной свининой.', needs: ['h_pork', 'h_rice', 'h_scallion'], resultPosition: '50% 100%' },
    ],
  },
  desserts: {
    title: 'Десерты',
    className: 'Точная сладость',
    vesselName: 'кондитерскую чашу',
    vesselPosition: '100% 0%',
    resultSheet: 'assets/results-desserts-clean-v2.png',
    wordIds: wordSets.desserts.map((item) => item.id),
    recipes: [
      { name: '芒果布丁 · манговый пудинг', phrase: '请给我芒果布丁。', pinyin: 'Qǐng gěi wǒ mángguǒ bùdīng.', translation: 'Пожалуйста, дайте мне манговый пудинг.', needs: ['d_mango', 'd_milk', 'd_sugar'], resultPosition: '0% 0%' },
      { name: '巧克力蛋糕 · шоколадный торт', phrase: '我要巧克力蛋糕。', pinyin: 'Wǒ yào qiǎokèlì dàngāo.', translation: 'Я хочу шоколадный торт.', needs: ['d_flour', 'd_chocolate', 'd_egg'], resultPosition: '50% 0%' },
      { name: '草莓奶油蛋糕 · клубничный торт', phrase: '来一块草莓奶油蛋糕。', pinyin: 'Lái yī kuài cǎoméi nǎiyóu dàngāo.', translation: 'Принесите кусочек клубничного торта со сливками.', needs: ['d_flour', 'd_cream', 'd_strawberry'], resultPosition: '100% 0%' },
      { name: '香蕉煎饼 · банановые блинчики', phrase: '请做香蕉煎饼。', pinyin: 'Qǐng zuò xiāngjiāo jiānbǐng.', translation: 'Пожалуйста, приготовьте банановые блинчики.', needs: ['d_banana', 'd_flour', 'd_milk'], resultPosition: '0% 100%' },
      { name: '红豆包 · булочки с красной фасолью', phrase: '我要一笼红豆包。', pinyin: 'Wǒ yào yī lóng hóngdòu bāo.', translation: 'Я хочу корзинку булочек с красной фасолью.', needs: ['d_redbeans', 'd_flour', 'd_sugar'], resultPosition: '50% 100%' },
    ],
  },
  drinks: {
    title: 'Напитки',
    className: 'Бар без границ',
    vesselName: 'блендер',
    vesselPosition: '0% 100%',
    resultSheet: 'assets/results-drinks-clean-v2.png',
    wordIds: wordSets.drinks.map((item) => item.id),
    recipes: [
      { name: '草莓奶昔 · клубничный милкшейк', phrase: '请给我草莓奶昔。', pinyin: 'Qǐng gěi wǒ cǎoméi nǎixī.', translation: 'Пожалуйста, клубничный молочный коктейль.', needs: ['b_strawberry', 'b_milk', 'b_ice'], resultPosition: '0% 0%' },
      { name: '薄荷柠檬水 · мятный лимонад', phrase: '我要薄荷柠檬水。', pinyin: 'Wǒ yào bòhe níngméngshuǐ.', translation: 'Я хочу мятный лимонад.', needs: ['b_water', 'b_lemon', 'b_mint'], resultPosition: '50% 0%' },
      { name: '芒果香蕉冰沙 · фруктовый смузи', phrase: '来一杯芒果香蕉冰沙。', pinyin: 'Lái yī bēi mángguǒ xiāngjiāo bīngshā.', translation: 'Принесите мангово-банановый смузи.', needs: ['b_mango', 'b_banana', 'b_milk'], resultPosition: '100% 0%' },
      { name: '蜂蜜绿茶 · зелёный чай с мёдом', phrase: '请泡一杯蜂蜜绿茶。', pinyin: 'Qǐng pào yī bēi fēngmì lǜchá.', translation: 'Пожалуйста, заварите зелёный чай с мёдом.', needs: ['b_tea', 'b_honey', 'b_water'], resultPosition: '0% 100%' },
      { name: '蜂蜜拿铁 · медовый латте', phrase: '我要一杯蜂蜜拿铁。', pinyin: 'Wǒ yào yī bēi fēngmì nátiě.', translation: 'Я хочу чашку медового латте.', needs: ['b_coffee', 'b_milk', 'b_honey'], resultPosition: '50% 100%' },
    ],
  },
};

themes.shifu = {
  title: 'Испытание шифу',
  className: 'Китайская кухня',
  vesselName: 'вок шифу',
  vesselPosition: '50% 100%',
  resultSheet: 'assets/results-shifu-clean-v2.png',
  wordIds: [
    'h_noodles', 'h_beef', 'h_greens', 'h_chicken', 'h_chili', 'h_peanuts',
    'd_redbeans', 'd_flour', 'd_sugar', 'b_tea', 's_apple', 's_orange',
    's_cucumber', 'h_scallion', 'h_tofu', 'd_mango', 'b_milk', 's_strawberry',
    ...wordSets.shifuExtras.map((item) => item.id), 'h_pork', 'd_sugar',
  ],
  recipes: [
    { name: '牛肉面 · лапша с говядиной', phrase: '师傅，我要一碗牛肉面。', pinyin: 'Shīfu, wǒ yào yī wǎn niúròu miàn.', translation: 'Шифу, я хочу миску лапши с говядиной.', needs: ['h_noodles', 'h_beef', 'h_greens'], resultPosition: '0% 0%' },
    { name: '宫保鸡丁 · курица гунбао', phrase: '请做正宗的宫保鸡丁。', pinyin: 'Qǐng zuò zhèngzōng de gōngbǎo jīdīng.', translation: 'Приготовьте настоящую курицу гунбао.', needs: ['h_chicken', 'h_chili', 'h_peanuts'], resultPosition: '50% 0%' },
    { name: '红豆包 · булочки с фасолью', phrase: '来一笼红豆包。', pinyin: 'Lái yī lóng hóngdòu bāo.', translation: 'Принесите корзинку булочек с красной фасолью.', needs: ['d_redbeans', 'd_flour', 'd_sugar'], resultPosition: '100% 0%' },
    { name: '水果茶 · фруктовый чай', phrase: '请泡一壶水果茶。', pinyin: 'Qǐng pào yī hú shuǐguǒ chá.', translation: 'Пожалуйста, заварите чай с фруктами.', needs: ['b_tea', 's_apple', 's_orange'], resultPosition: '0% 100%' },
    { name: '凉拌黄瓜 · битые огурцы', phrase: '我要一份凉拌黄瓜。', pinyin: 'Wǒ yào yī fèn liángbàn huángguā.', translation: 'Я хочу порцию холодной закуски из огурцов.', needs: ['s_cucumber', 'h_chili', 'h_scallion'], resultPosition: '50% 100%' },
    { name: '鱼香肉丝 · свинина «рыбный аромат»', phrase: '请做一份鱼香肉丝。', pinyin: 'Qǐng zuò yī fèn yúxiāng ròusī.', translation: 'Приготовьте свинину «рыбный аромат».', needs: ['h_pork', 'x_bamboo', 'x_wood_ear', 'h_chili'], image: 'assets/dishes/yuxiang-rousi-cutout-v1.png' },
    { name: '松鼠桂鱼 · рыба-мандаринка «белка»', phrase: '我要一道松鼠桂鱼。', pinyin: 'Wǒ yào yī dào sōngshǔ guìyú.', translation: 'Я хочу рыбу-мандаринку «белка».', needs: ['x_mandarin_fish', 'x_pine_nuts', 'x_vinegar', 'd_sugar'], image: 'assets/dishes/squirrel-mandarin-fish-cutout-v1.png' },
    { name: '佛跳墙 · суп «Будда прыгает через стену»', phrase: '请准备正宗的佛跳墙。', pinyin: 'Qǐng zhǔnbèi zhèngzōng de fó tiào qiáng.', translation: 'Приготовьте настоящий суп «Будда прыгает через стену».', needs: ['x_abalone', 'x_sea_cucumber', 'x_shiitake', 'x_jinhua_ham'], image: 'assets/dishes/buddha-jumps-over-the-wall-cutout-v1.png' },
  ],
};

const modeConfig = {
  apprentice: {
    number: '01', label: 'Ученик шефа', needed: 2, options: 6,
    lead: 'В обычной теме вас ждут 5 заказов, а в испытании Шифу — 8. В каждом соберите ровно 2 ингредиента из 6 предложенных.',
    rules: ['На карточках показаны иероглифы, пиньинь и перевод.', 'Неверный продукт после проверки исчезнет, а правильные останутся в посуде.', 'Попытки не ограничены. За рецепт с первой проверки начисляется больше очков.'],
    continueLabel: 'Понятно — выбрать тему',
  },
  journeyman: {
    number: '02', label: 'Знаток рецептов', needed: 3, options: 8,
    lead: 'В обычной теме приготовьте 5 блюд, а у Шифу — 8. В каждом найдите ровно 3 ингредиента среди 8 вариантов.',
    rules: ['На карточках остаются иероглифы и пиньинь — русский перевод скрыт.', 'Неподходящие продукты исчезают после проверки; правильные остаются.', 'Количество попыток не ограничено. Чем меньше ошибок, тем выше результат.'],
    continueLabel: 'Я готов — выбрать тему',
  },
  master: {
    number: '03', label: 'Мастер вока', needed: 4, options: 10,
    lead: 'В обычной теме вас ждут 5 сложных заказов, а у Шифу — 8: для каждого выберите ровно 4 ингредиента из 10.',
    rules: ['В заказах и на карточках показаны только китайские иероглифы.', 'Ошибочный ингредиент исчезнет, а игра продолжится до верного рецепта.', 'Для высшей оценки приготовьте блюда с минимальным числом проверок.'],
    continueLabel: 'Принять вызов',
  },
};

const masterExtras = {
  黄瓜西红柿沙拉: 's_carrot', 彩虹蔬菜沙拉: 's_cucumber', 牛油果橙子沙拉: 's_pear', 苹果梨葡萄沙拉: 's_orange', 草莓水果沙拉: 's_grapes',
  牛肉面: 'h_scallion', 蛋炒饭: 'h_greens', 香菇豆腐: 'h_scallion', 宫保鸡丁: 'h_scallion', 红烧肉盖饭: 'h_greens',
  芒果布丁: 'd_cream', 巧克力蛋糕: 'd_butter', 草莓奶油蛋糕: 'd_sugar', 香蕉煎饼: 'd_egg', 红豆包: 'd_milk',
  草莓奶昔: 'b_honey', 薄荷柠檬水: 'b_ice', 芒果香蕉冰沙: 'b_ice', 蜂蜜绿茶: 'b_lemon', 蜂蜜拿铁: 'b_water',
  水果茶: 'b_water', 凉拌黄瓜: 's_cabbage',
};

const dishPinyin = {
  黄瓜西红柿沙拉: 'huángguā xīhóngshì shālā', 彩虹蔬菜沙拉: 'cǎihóng shūcài shālā', 牛油果橙子沙拉: 'niúyóuguǒ chéngzi shālā', 苹果梨葡萄沙拉: 'píngguǒ lí pútáo shālā', 草莓水果沙拉: 'cǎoméi shuǐguǒ shālā',
  牛肉面: 'niúròu miàn', 蛋炒饭: 'dàn chǎofàn', 香菇豆腐: 'xiānggū dòufu', 宫保鸡丁: 'gōngbǎo jīdīng', 红烧肉盖饭: 'hóngshāoròu gàifàn',
  芒果布丁: 'mángguǒ bùdīng', 巧克力蛋糕: 'qiǎokèlì dàngāo', 草莓奶油蛋糕: 'cǎoméi nǎiyóu dàngāo', 香蕉煎饼: 'xiāngjiāo jiānbǐng', 红豆包: 'hóngdòu bāo',
  草莓奶昔: 'cǎoméi nǎixī', 薄荷柠檬水: 'bòhe níngméngshuǐ', 芒果香蕉冰沙: 'mángguǒ xiāngjiāo bīngshā', 蜂蜜绿茶: 'fēngmì lǜchá', 蜂蜜拿铁: 'fēngmì nátiě',
  水果茶: 'shuǐguǒ chá', 凉拌黄瓜: 'liángbàn huángguā',
  鱼香肉丝: 'yúxiāng ròusī', 松鼠桂鱼: 'sōngshǔ guìyú', 佛跳墙: 'fó tiào qiáng',
};

const certificateTitles = {
  salads: 'Мастер свежей композиции', hot: 'Повелитель вока', desserts: 'Архитектор сладости', drinks: 'Алхимик чайного дома', shifu: 'Мастер пяти вкусов',
};

function dishHanzi(recipe) { return recipe.name.split(' · ')[0]; }
function dishTranslation(recipe) { return recipe.name.split(' · ')[1] || recipe.name; }
function fullNeeds(recipe) { return [...new Set([...recipe.needs, masterExtras[dishHanzi(recipe)]].filter(Boolean))]; }

const allMenuDishes = [];
const seenDishNames = new Set();
Object.entries(themes).forEach(([themeId, theme]) => {
  theme.recipes.forEach((recipe) => {
    const hanzi = dishHanzi(recipe);
    if (seenDishNames.has(hanzi)) return;
    seenDishNames.add(hanzi);
    allMenuDishes.push({ themeId, theme, recipe, hanzi, translation: dishTranslation(recipe), pinyin: dishPinyin[hanzi] || recipe.pinyin });
  });
});

const $ = (selector) => document.querySelector(selector);

function formatPinyin(value) {
  return String(value || '').normalize('NFC').replace(/[’ʼ]/g, "'");
}

const ingredientCanvasCache = new Map();
const vesselCanvasCache = new Map();
const dishCanvasCache = new Map();
const imagePromiseCache = new Map();
let signatureCanvasPromise;

function loadArtImage(source) {
  if (!imagePromiseCache.has(source)) {
    imagePromiseCache.set(source, new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = source;
    }));
  }
  return imagePromiseCache.get(source);
}

function isSheetBackground(red, green, blue, alpha) {
  return alpha < 12 || (red > 194 && green > 184 && blue > 168 && Math.max(red, green, blue) - Math.min(red, green, blue) < 72);
}

function removeConnectedBackground(canvas) {
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const width = canvas.width;
  const height = canvas.height;
  const pixels = context.getImageData(0, 0, width, height);
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;
  const enqueue = (index) => {
    if (index < 0 || index >= visited.length || visited[index]) return;
    const offset = index * 4;
    if (!isSheetBackground(pixels.data[offset], pixels.data[offset + 1], pixels.data[offset + 2], pixels.data[offset + 3])) return;
    visited[index] = 1;
    queue[tail++] = index;
  };
  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }
  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    pixels.data[index * 4 + 3] = 0;
    if (x > 0) enqueue(index - 1);
    if (x < width - 1) enqueue(index + 1);
    if (y > 0) enqueue(index - width);
    if (y < height - 1) enqueue(index + width);
  }
  context.putImageData(pixels, 0, 0);
  return canvas;
}

function createCutout(source, sourceX, sourceY, sourceWidth, sourceHeight, outputSize) {
  const working = document.createElement('canvas');
  working.width = 360;
  working.height = 360;
  const workingContext = working.getContext('2d', { willReadFrequently: true });
  const scale = Math.min(working.width / sourceWidth, working.height / sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;
  workingContext.drawImage(source, sourceX, sourceY, sourceWidth, sourceHeight, (working.width - width) / 2, (working.height - height) / 2, width, height);
  removeConnectedBackground(working);
  const output = document.createElement('canvas');
  output.width = outputSize;
  output.height = outputSize;
  output.getContext('2d').drawImage(working, 0, 0, outputSize, outputSize);
  return output;
}

function createCutoutRect(source, outputWidth, outputHeight) {
  const output = document.createElement('canvas');
  output.width = outputWidth;
  output.height = outputHeight;
  const context = output.getContext('2d', { willReadFrequently: true });
  const scale = Math.min(outputWidth / source.naturalWidth, outputHeight / source.naturalHeight);
  const width = source.naturalWidth * scale;
  const height = source.naturalHeight * scale;
  context.drawImage(source, (outputWidth - width) / 2, (outputHeight - height) / 2, width, height);
  return removeConnectedBackground(output);
}

function pruneDishFragments(canvas) {
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const { width, height } = canvas;
  const pixels = context.getImageData(0, 0, width, height);
  const labels = new Int32Array(width * height);
  const queue = new Int32Array(width * height);
  const components = [];
  let label = 0;
  const opaque = (index) => pixels.data[index * 4 + 3] > 18;

  for (let start = 0; start < labels.length; start += 1) {
    if (labels[start] || !opaque(start)) continue;
    label += 1;
    let head = 0;
    let tail = 0;
    let count = 0;
    let touchesEdge = false;
    labels[start] = label;
    queue[tail++] = start;
    while (head < tail) {
      const index = queue[head++];
      const x = index % width;
      const y = Math.floor(index / width);
      count += 1;
      if (x <= 2 || y <= 2 || x >= width - 3 || y >= height - 3) touchesEdge = true;
      const visit = (next) => {
        if (next < 0 || next >= labels.length || labels[next] || !opaque(next)) return;
        labels[next] = label;
        queue[tail++] = next;
      };
      if (x > 0) visit(index - 1);
      if (x < width - 1) visit(index + 1);
      if (y > 0) visit(index - width);
      if (y < height - 1) visit(index + width);
    }
    components.push({ label, count, touchesEdge });
  }

  if (!components.length) return canvas;
  const largest = components.reduce((best, item) => item.count > best.count ? item : best);
  const keep = new Set(components
    .filter((item) => item.label === largest.label || (!item.touchesEdge && item.count >= largest.count * .075))
    .map((item) => item.label));
  for (let index = 0; index < labels.length; index += 1) {
    if (labels[index] && !keep.has(labels[index])) pixels.data[index * 4 + 3] = 0;
  }
  context.putImageData(pixels, 0, 0);
  return canvas;
}

function centerDishCutout(canvas, padding = 18) {
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const { width, height } = canvas;
  const pixels = context.getImageData(0, 0, width, height).data;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (pixels[(y * width + x) * 4 + 3] <= 18) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  if (maxX < minX || maxY < minY) return canvas;
  const contentWidth = maxX - minX + 1;
  const contentHeight = maxY - minY + 1;
  const availableWidth = width - padding * 2;
  const availableHeight = height - padding * 2;
  const scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight);
  const drawWidth = contentWidth * scale;
  const drawHeight = contentHeight * scale;
  const centered = document.createElement('canvas');
  centered.width = width;
  centered.height = height;
  centered.getContext('2d').drawImage(
    canvas,
    minX, minY, contentWidth, contentHeight,
    (width - drawWidth) / 2, (height - drawHeight) / 2,
    drawWidth, drawHeight,
  );
  return centered;
}

async function buildIngredientCanvas(item) {
  const cacheKey = item.id;
  if (ingredientCanvasCache.has(cacheKey)) return ingredientCanvasCache.get(cacheKey);
  const task = (async () => {
    const source = await loadArtImage(item.image || item.sheet);
    if (item.image) {
      return createCutout(source, 0, 0, source.naturalWidth, source.naturalHeight, 180);
    }

    const column = item.index % 4;
    const row = Math.floor(item.index / 4);
    const sourceWidth = Math.floor(source.naturalWidth / 4);
    const sourceHeight = Math.floor(source.naturalHeight / 3);
    return createCutout(source, column * sourceWidth, row * sourceHeight, sourceWidth, sourceHeight, 180);
  })();
  ingredientCanvasCache.set(cacheKey, task);
  return task;
}

async function buildVesselCanvas(themeId) {
  if (vesselCanvasCache.has(themeId)) return vesselCanvasCache.get(themeId);
  const task = (async () => {
    const source = await loadArtImage('assets/theme-vessels-v1.png');
    const positions = { salads: 0, hot: 1, desserts: 2, drinks: 3, shifu: 4 };
    const index = positions[themeId] ?? 0;
    const sourceWidth = Math.floor(source.naturalWidth / 3);
    const sourceHeight = Math.floor(source.naturalHeight / 2);
    return createCutout(source, (index % 3) * sourceWidth, Math.floor(index / 3) * sourceHeight, sourceWidth, sourceHeight, 260);
  })();
  vesselCanvasCache.set(themeId, task);
  return task;
}

async function hydrateVesselArt(themeId) {
  const canvas = ui.vesselImage;
  const context = canvas.getContext('2d');
  const rimCanvas = ui.vesselRim;
  const rimContext = rimCanvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  rimContext.clearRect(0, 0, rimCanvas.width, rimCanvas.height);
  canvas.dataset.vesselTheme = themeId;
  rimCanvas.dataset.vesselTheme = themeId;
  try {
    const source = await buildVesselCanvas(themeId);
    if (canvas.dataset.vesselTheme !== themeId) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    rimContext.clearRect(0, 0, rimCanvas.width, rimCanvas.height);
    context.drawImage(source, 0, 0, canvas.width, canvas.height);
    rimContext.drawImage(source, 0, 0, rimCanvas.width, rimCanvas.height);
  } catch (error) {
    console.warn('Не удалось подготовить изображение посуды', error);
  }
}

function recipeCellIndex(recipe, failed = false) {
  if (failed) return 5;
  const positions = { '0% 0%': 0, '50% 0%': 1, '100% 0%': 2, '0% 100%': 3, '50% 100%': 4, '100% 100%': 5 };
  return positions[recipe.resultPosition] ?? 0;
}

async function buildDishCanvas(theme, recipe, failed = false) {
  const cacheKey = `${theme.title}:${dishHanzi(recipe)}:${failed ? 'failed' : 'ready'}`;
  if (dishCanvasCache.has(cacheKey)) return dishCanvasCache.get(cacheKey);
  const task = (async () => {
    if (!failed && recipe.image) {
      const source = await loadArtImage(recipe.image);
      return centerDishCutout(pruneDishFragments(createCutout(source, 0, 0, source.naturalWidth, source.naturalHeight, 300)));
    }
    const source = await loadArtImage(theme.resultSheet);
    const index = recipeCellIndex(recipe, failed);
    const sourceWidth = Math.floor(source.naturalWidth / 3);
    const sourceHeight = Math.floor(source.naturalHeight / 2);
    return centerDishCutout(pruneDishFragments(createCutout(source, (index % 3) * sourceWidth, Math.floor(index / 3) * sourceHeight, sourceWidth, sourceHeight, 300)));
  })();
  dishCanvasCache.set(cacheKey, task);
  return task;
}

function dishArtMarkup(dish, className) {
  return `<canvas class="${className}" width="300" height="300" data-dish-art="${dish.hanzi}" aria-hidden="true"></canvas>`;
}

async function hydrateDishArt(root = document) {
  const canvases = [...root.querySelectorAll('canvas[data-dish-art]')];
  await Promise.all(canvases.map(async (canvas) => {
    const dish = allMenuDishes.find((item) => item.hanzi === canvas.dataset.dishArt);
    if (!dish) return;
    const source = await buildDishCanvas(dish.theme, dish.recipe);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(source, 0, 0, canvas.width, canvas.height);
  }));
}

async function hydrateCookingResult(theme, recipe, failed = false) {
  const canvas = ui.dishResult;
  const key = `${theme.title}:${dishHanzi(recipe)}:${failed}`;
  canvas.dataset.resultKey = key;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  const source = await buildDishCanvas(theme, recipe, failed);
  if (canvas.dataset.resultKey !== key) return;
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
}

async function buildSignatureCanvas() {
  if (!signatureCanvasPromise) {
    signatureCanvasPromise = loadArtImage('assets/certificates/chef-lin-signature-v1.png')
      .then((source) => createCutoutRect(source, 420, 200));
  }
  return signatureCanvasPromise;
}

async function drawThemeVessel(canvas, themeId) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (themeId === 'shifu') {
    const [saladBowl, wok, blender] = await Promise.all([
      buildVesselCanvas('salads'), buildVesselCanvas('hot'), buildVesselCanvas('drinks'),
    ]);
    context.drawImage(saladBowl, 0, canvas.height * .43, canvas.width * .33, canvas.width * .33);
    context.drawImage(blender, canvas.width * .355, canvas.height * .11, canvas.width * .29, canvas.width * .29);
    context.drawImage(wok, canvas.width * .655, canvas.height * .43, canvas.width * .345, canvas.width * .345);
  } else {
    const source = await buildVesselCanvas(themeId || 'hot');
    const size = Math.min(canvas.width * .76, canvas.height * .96);
    context.drawImage(source, (canvas.width - size) / 2, (canvas.height - size) / 2, size, size);
  }
}

async function hydrateCertificateDecor(themeId) {
  await drawThemeVessel($('#certificate-vessel'), themeId);
  const signature = await buildSignatureCanvas();
  const signatureCanvas = $('#chef-signature');
  const signatureContext = signatureCanvas.getContext('2d');
  signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
  signatureContext.drawImage(signature, 0, 0, signatureCanvas.width, signatureCanvas.height);
}

async function hydrateAchievementVessels(root = document) {
  const canvases = [...root.querySelectorAll('canvas[data-certificate-vessel]')];
  await Promise.all(canvases.map((canvas) => drawThemeVessel(canvas, canvas.dataset.certificateVessel)));
}

function ingredientArtMarkup(id, className = 'ingredient-art') {
  return `<canvas class="${className}" width="180" height="180" data-ingredient-art="${id}" aria-hidden="true"></canvas>`;
}

async function hydrateIngredientArt(root = document) {
  const canvases = [...root.querySelectorAll('canvas[data-ingredient-art]')];
  await Promise.all(canvases.map(async (canvas) => {
    const item = ingredients[canvas.dataset.ingredientArt];
    if (!item || !canvas.getContext) return;
    const source = await buildIngredientCanvas(item);
    canvas.getContext('2d').drawImage(source, 0, 0, canvas.width, canvas.height);
  }));
}

function dishArtStyle(theme, recipe, failed = false) {
  if (!failed && recipe.image) return `background-image:url('${recipe.image}');background-position:center;background-size:cover`;
  return `background-image:url('${theme.resultSheet}');background-position:${failed ? '100% 100%' : recipe.resultPosition};background-size:300% 200%`;
}

const ui = {
  best: $('#best-score'),
  streak: $('#streak'),
  dishProgress: $('#dish-progress'),
  round: $('#round-label'),
  themeLabel: $('#theme-label'),
  orderTitle: $('#order-title'),
  phrase: $('#order-phrase'),
  pinyin: $('#order-pinyin'),
  translation: $('#order-translation'),
  grid: $('#ingredient-grid'),
  feedback: $('#feedback'),
  selectionCount: $('#selection-count'),
  cook: $('#cook-button'),
  progress: $('#progress-bar'),
  startOverlay: $('#start-overlay'),
  instructionOverlay: $('#instruction-overlay'),
  themeOverlay: $('#theme-overlay'),
  resultOverlay: $('#result-overlay'),
  menuOverlay: $('#menu-overlay'),
  grandOverlay: $('#grand-overlay'),
  achievementsOverlay: $('#achievements-overlay'),
  resetOverlay: $('#reset-overlay'),
  resultCopy: $('#result-copy'),
  finalScore: $('#final-score'),
  modeButton: $('#mode-button'),
  modeLabel: $('#mode-label'),
  chosenLevelLabel: $('#chosen-level-label'),
  sound: $('#sound-button'),
  orderCollapse: $('#order-collapse-button'),
  cookingStage: $('#cooking-stage'),
  vesselImage: $('#vessel-image'),
  vesselRim: $('#vessel-rim'),
  wokIngredients: $('#wok-ingredients'),
  dishResult: $('#dish-result'),
  wokHint: $('#wok-hint'),
};

let mode = 'apprentice';
let currentThemeId = 'salads';
let round = 0;
let score = 0;
let streak = 0;
let mistakesThisRound = 0;
let selected = new Set();
let locked = false;
let gameRecipes = [];
let activeNeeds = [];
let gameActive = false;
let instructionContext = 'start';
let menuFilter = 'all';
let selectedMenuDish = null;
let authorSelected = new Set();
let orderTextCollapsed = false;
let certificateViewContext = 'game';

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch { return new Set(); }
}

let completedDishes = loadSet('culinary-battle-dishes');

function loadCertificates() {
  try {
    const saved = JSON.parse(localStorage.getItem('culinary-battle-certificates') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

let earnedCertificates = loadCertificates();

const modeLabels = {
  apprentice: modeConfig.apprentice.label,
  journeyman: modeConfig.journeyman.label,
  master: modeConfig.master.label,
};

function certificateId(themeId, level) {
  return `${themeId}:${level}`;
}

function saveCertificates() {
  localStorage.setItem('culinary-battle-certificates', JSON.stringify(earnedCertificates));
}

function migrateCompletedThemesToCertificates() {
  let changed = false;
  Object.entries(themes).forEach(([themeId, theme]) => {
    const completed = theme.recipes.every((recipe) => completedDishes.has(dishHanzi(recipe)));
    const alreadyAwarded = earnedCertificates.some((certificate) => certificate.themeId === themeId);
    if (!completed || alreadyAwarded) return;
    earnedCertificates.push({
      id: certificateId(themeId, 'apprentice'),
      themeId,
      mode: 'apprentice',
      title: certificateTitles[themeId],
      themeName: theme.className,
      score: 0,
      earnedAt: new Date().toISOString(),
      migrated: true,
    });
    changed = true;
  });
  if (changed) saveCertificates();
}

migrateCompletedThemesToCertificates();

function shuffled(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const next = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[next]] = [copy[next], copy[index]];
  }
  return copy;
}

function setMode(nextMode) {
  mode = nextMode;
  document.body.classList.toggle('mode-intermediate', mode === 'journeyman');
  document.body.classList.toggle('mode-advanced', mode === 'master');
  ui.modeLabel.textContent = modeLabels[mode];
  ui.chosenLevelLabel.textContent = modeLabels[mode];
  document.querySelectorAll('.mode-card').forEach((card) => {
    card.classList.toggle('selected', card.dataset.mode === mode);
  });
}

function updateOrderTextState() {
  const ticket = $('#order-text')?.closest('.order-ticket');
  if (!ticket || !ui.orderCollapse) return;
  ticket.classList.toggle('text-collapsed', orderTextCollapsed);
  ui.orderCollapse.setAttribute('aria-expanded', String(!orderTextCollapsed));
  ui.orderCollapse.setAttribute('aria-label', orderTextCollapsed ? 'Показать текст заказа' : 'Свернуть текст заказа');
  ui.orderCollapse.innerHTML = orderTextCollapsed
    ? '<span aria-hidden="true">＋</span><span>Показать заказ</span>'
    : '<span aria-hidden="true">−</span><span>Свернуть текст</span>';
}

function updateVisibilityChoice() {
  document.querySelectorAll('[data-order-visibility]').forEach((button) => {
    const selectedOption = button.dataset.orderVisibility === (orderTextCollapsed ? 'audio' : 'shown');
    button.classList.toggle('selected', selectedOption);
    button.setAttribute('aria-pressed', String(selectedOption));
  });
}

function currentTheme() {
  return themes[currentThemeId];
}

function currentRecipe() {
  return gameRecipes[round];
}

function needsForMode(recipe) {
  return fullNeeds(recipe).slice(0, modeConfig[mode].needed);
}

function joinedList(values, separator, conjunction) {
  if (values.length < 2) return values[0] || '';
  if (values.length === 2) return `${values[0]} ${conjunction} ${values[1]}`;
  return `${values.slice(0, -1).join(separator)} ${conjunction} ${values.at(-1)}`;
}

function orderCopyForRecipe(recipe, needs = activeNeeds) {
  return {
    phrase: recipe.phrase,
    pinyin: formatPinyin(recipe.pinyin),
    translation: `Заказ: ${dishTranslation(recipe)}.`,
  };
}

function distractorIdsForRecipe(theme, recipe) {
  const completeRecipeNeeds = fullNeeds(recipe);
  const uniqueIds = [...new Set(theme.wordIds)].filter((id) => !completeRecipeNeeds.includes(id));
  if (currentThemeId !== 'salads') return uniqueIds;
  const fruitIds = new Set(['s_avocado', 's_apple', 's_orange', 's_strawberry', 's_pear', 's_grapes']);
  const fruitRecipe = fullNeeds(recipe).filter((id) => fruitIds.has(id)).length >= Math.ceil(fullNeeds(recipe).length / 2);
  return uniqueIds.filter((id) => fruitRecipe ? !fruitIds.has(id) : fruitIds.has(id));
}

function renderRound() {
  const theme = currentTheme();
  const recipe = currentRecipe();
  locked = false;
  mistakesThisRound = 0;
  selected = new Set();
  activeNeeds = needsForMode(recipe);
  const orderCopy = orderCopyForRecipe(recipe, activeNeeds);
  ui.themeLabel.textContent = theme.title;
  ui.orderTitle.textContent = `Новый заказ · ${theme.className}`;
  ui.round.textContent = `${round + 1} / ${gameRecipes.length}`;
  ui.progress.style.width = `${((round + 1) / gameRecipes.length) * 100}%`;
  ui.phrase.textContent = orderCopy.phrase;
  ui.pinyin.textContent = orderCopy.pinyin;
  ui.translation.textContent = orderCopy.translation;
  updateOrderTextState();
  ui.feedback.className = 'feedback';
  ui.feedback.querySelector('strong').textContent = 'Соберите рецепт';
  ui.selectionCount.textContent = `Выбрано: 0 из ${activeNeeds.length}`;
  ui.cook.disabled = true;
  resetCookingStage();
  updateStats();

  const distractorPool = distractorIdsForRecipe(theme, recipe);
  const distractors = shuffled(distractorPool).slice(0, modeConfig[mode].options - activeNeeds.length);
  const cardIds = shuffled([...activeNeeds, ...distractors]);
  ui.grid.innerHTML = cardIds.map((id) => {
    const item = ingredients[id];
    return `<button class="ingredient-card" type="button" data-id="${id}" aria-pressed="false">
      <span class="ingredient-check">✓</span>
      ${ingredientArtMarkup(id)}
      <span class="ingredient-hanzi" lang="zh-CN">${item.hanzi}</span>
      <span class="ingredient-pinyin">${formatPinyin(item.pinyin)}</span>
      <span class="ingredient-meaning">${item.meaning}</span>
    </button>`;
  }).join('');
  hydrateIngredientArt(ui.grid);
}

function updateStats() {
  ui.best.textContent = localStorage.getItem('culinary-battle-best') || '0';
  ui.streak.textContent = streak;
  ui.dishProgress.textContent = `${completedDishes.size} / ${allMenuDishes.length}`;
  const welcomeProgressText = $('#welcome-progress-text');
  const welcomeProgressBar = $('#welcome-progress-bar');
  if (welcomeProgressText) welcomeProgressText.textContent = `${completedDishes.size} из ${allMenuDishes.length}`;
  if (welcomeProgressBar) welcomeProgressBar.style.width = `${(completedDishes.size / allMenuDishes.length) * 100}%`;
  const achievementCount = $('#achievement-count');
  if (achievementCount) achievementCount.textContent = certificateCountLabel(earnedCertificates.length);
  updateGrandChefState();
}

function certificateCountLabel(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  const word = mod10 === 1 && mod100 !== 11 ? 'сертификат' : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 'сертификата' : 'сертификатов';
  return `${count} ${word}`;
}

function chooseIngredient(card) {
  if (locked) return;
  const id = card.dataset.id;
  const willSelect = !selected.has(id);
  if (willSelect && selected.size >= activeNeeds.length) {
    ui.feedback.className = 'feedback error';
    ui.feedback.querySelector('strong').textContent = `Нужно выбрать ровно ${activeNeeds.length}`;
    ui.selectionCount.textContent = 'Сначала уберите один из выбранных продуктов';
    return;
  }
  willSelect ? selected.add(id) : selected.delete(id);
  card.classList.toggle('selected', selected.has(id));
  card.setAttribute('aria-pressed', String(selected.has(id)));
  if (willSelect) flyIngredient(card, id);
  else removeVesselIngredient(id);
  ui.feedback.className = 'feedback';
  ui.feedback.querySelector('strong').textContent = 'Соберите рецепт';
  ui.selectionCount.textContent = `Выбрано: ${selected.size} из ${activeNeeds.length}`;
  ui.cook.disabled = selected.size !== activeNeeds.length;
}

function flyIngredient(card, id) {
  const art = card.querySelector('.ingredient-art');
  const start = art.getBoundingClientRect();
  const target = ui.cookingStage.getBoundingClientRect();
  const clone = document.createElement('canvas');
  clone.width = art.width;
  clone.height = art.height;
  clone.getContext('2d').drawImage(art, 0, 0);
  clone.className = 'ingredient-art flying-ingredient';
  clone.style.left = `${start.left}px`;
  clone.style.top = `${start.top}px`;
  clone.style.width = `${start.width}px`;
  clone.style.height = `${start.height}px`;
  document.body.appendChild(clone);
  const targetX = target.left + target.width / 2 - start.left - start.width / 2;
  const targetY = target.top + target.height * 0.42 - start.top - start.height / 2;
  requestAnimationFrame(() => {
    clone.style.transform = `translate(${targetX}px, ${targetY}px) scale(.55) rotate(${Math.random() * 24 - 12}deg)`;
    clone.style.opacity = '.35';
  });
  window.setTimeout(() => {
    clone.remove();
    if (selected.has(id) && !locked) addVesselIngredient(id);
  }, 540);
}

const vesselSlotLayouts = {
  1: [[50, 50]],
  2: [[36, 54], [64, 54]],
  3: [[27, 58], [50, 43], [73, 58]],
  4: [[20, 59], [40, 42], [60, 42], [80, 59]],
};

const blenderSlotLayouts = {
  1: [[50, 46]],
  2: [[42, 34], [58, 62]],
  3: [[39, 30], [61, 48], [44, 70]],
  4: [[39, 28], [61, 42], [39, 58], [61, 72]],
};

function layoutVesselIngredients() {
  const pieces = [...ui.wokIngredients.querySelectorAll('.wok-piece')];
  const layoutSet = currentThemeId === 'drinks' ? blenderSlotLayouts : vesselSlotLayouts;
  const slots = layoutSet[Math.min(4, pieces.length)] || layoutSet[1];
  pieces.forEach((piece, index) => {
    const [left, top] = slots[index] || slots.at(-1);
    piece.style.left = `${left}%`;
    piece.style.top = `${top}%`;
    piece.style.setProperty('--piece-rotation', `${[-9, 7, -4, 10][index] || 0}deg`);
    piece.style.zIndex = String(index + 1);
  });
}

function addVesselIngredient(id) {
  if (ui.wokIngredients.querySelector(`[data-id="${id}"]`)) return;
  const piece = document.createElement('canvas');
  piece.width = 180;
  piece.height = 180;
  piece.className = 'ingredient-art wok-piece';
  piece.dataset.id = id;
  piece.dataset.ingredientArt = id;
  ui.wokIngredients.appendChild(piece);
  layoutVesselIngredients();
  hydrateIngredientArt(ui.wokIngredients);
}

function removeVesselIngredient(id) {
  ui.wokIngredients.querySelector(`[data-id="${id}"]`)?.remove();
  layoutVesselIngredients();
}

function resetCookingStage() {
  const theme = currentTheme();
  ui.cookingStage.classList.remove('show-result', 'is-correct', 'is-wrong');
  ui.wokIngredients.innerHTML = '';
  ui.wokIngredients.dataset.theme = currentThemeId;
  ui.vesselRim.dataset.theme = currentThemeId;
  hydrateVesselArt(currentThemeId);
  ui.vesselImage.setAttribute('aria-label', `Пустой ${theme.vesselName}`);
  ui.dishResult.getContext('2d').clearRect(0, 0, ui.dishResult.width, ui.dishResult.height);
  ui.dishResult.setAttribute('aria-label', '');
  ui.wokHint.textContent = `Нажимайте на продукты — они отправятся в ${theme.vesselName}`;
}

function showCookingResult(correct) {
  const theme = currentTheme();
  const recipe = currentRecipe();
  hydrateCookingResult(theme, recipe, !correct);
  ui.dishResult.setAttribute('aria-label', correct ? `Готовое блюдо: ${recipe.name}` : 'Неудачный результат приготовления');
  ui.cookingStage.classList.add('show-result', correct ? 'is-correct' : 'is-wrong');
  ui.wokHint.textContent = correct ? 'Готово! 香 — как вкусно пахнет!' : 'Лишние продукты подгорели — сейчас они исчезнут';
}

function arraysMatch(first, second) {
  return first.length === second.length && first.every((value) => second.includes(value));
}

function cook() {
  if (locked || selected.size !== activeNeeds.length) return;
  const recipe = currentRecipe();
  const correct = arraysMatch([...selected], activeNeeds);
  ui.feedback.classList.remove('success', 'error');

  if (correct) {
    locked = true;
    showCookingResult(true);
    streak += 1;
    const difficultyBonus = mode === 'master' ? 50 : mode === 'journeyman' ? 25 : 0;
    const roundScore = Math.max(40, 100 + (streak - 1) * 20 + difficultyBonus - mistakesThisRound * 15);
    score += roundScore;
    completedDishes.add(dishHanzi(recipe));
    localStorage.setItem('culinary-battle-dishes', JSON.stringify([...completedDishes]));
    ui.feedback.classList.add('success');
    ui.feedback.querySelector('strong').textContent = '太好了! Рецепт выполнен';
    ui.selectionCount.textContent = `+${roundScore} очков`;
    document.querySelectorAll('.ingredient-card').forEach((card) => {
      if (activeNeeds.includes(card.dataset.id)) card.classList.add('correct');
    });
    updateStats();
    window.setTimeout(nextRound, 1700);
    return;
  }

  mistakesThisRound += 1;
  streak = 0;
  locked = true;
  showCookingResult(false);
  ui.feedback.classList.add('error');
  ui.feedback.querySelector('strong').textContent = 'Лишние ингредиенты подгорели';
  ui.selectionCount.textContent = 'Правильные продукты останутся в посуде';
  const wrongIds = [...selected].filter((id) => !activeNeeds.includes(id));
  document.querySelectorAll('.ingredient-card').forEach((card) => {
    if (wrongIds.includes(card.dataset.id)) card.classList.add('wrong', 'vanishing');
    else if (selected.has(card.dataset.id)) card.classList.add('correct-kept');
  });
  wrongIds.forEach((id) => ui.wokIngredients.querySelector(`[data-id="${id}"]`)?.classList.add('burn-away'));
  updateStats();

  window.setTimeout(() => {
    wrongIds.forEach((id) => {
      selected.delete(id);
      ui.grid.querySelector(`[data-id="${id}"]`)?.remove();
      removeVesselIngredient(id);
    });
    locked = false;
    ui.cookingStage.classList.remove('show-result', 'is-wrong');
    ui.dishResult.setAttribute('aria-label', '');
    document.querySelectorAll('.ingredient-card.correct-kept').forEach((card) => card.classList.remove('correct-kept'));
    ui.wokHint.textContent = `Добавьте недостающие продукты в ${currentTheme().vesselName}`;
    ui.feedback.className = 'feedback';
    ui.feedback.querySelector('strong').textContent = 'Продолжайте рецепт';
    ui.selectionCount.textContent = `Выбрано правильно: ${selected.size} из ${activeNeeds.length}`;
    ui.cook.disabled = selected.size !== activeNeeds.length;
  }, 1300);
}

function nextRound() {
  round += 1;
  if (round >= gameRecipes.length) finishGame();
  else renderRound();
}

function awardCurrentCertificate() {
  const id = certificateId(currentThemeId, mode);
  const existingIndex = earnedCertificates.findIndex((certificate) => certificate.id === id);
  const existing = earnedCertificates[existingIndex];
  const certificate = {
    id,
    themeId: currentThemeId,
    mode,
    title: certificateTitles[currentThemeId],
    themeName: currentTheme().className,
    score: Math.max(score, Number(existing?.score || 0)),
    earnedAt: existing?.earnedAt || new Date().toISOString(),
  };
  if (existingIndex >= 0) earnedCertificates.splice(existingIndex, 1, certificate);
  else earnedCertificates.push(certificate);
  saveCertificates();
  return certificate;
}

function configureCertificateActions(context) {
  certificateViewContext = context;
  $('#back-to-achievements').hidden = context !== 'achievements';
  $('#choose-theme-button').hidden = context === 'achievements';
  $('#restart-button').hidden = context === 'achievements';
}

function renderCertificateDecor(themeId, points) {
  const value = String(points ?? '—');
  ui.finalScore.textContent = value;
  ui.finalScore.dataset.digits = String(value.replace(/\D/g, '').length || 1);
  hydrateCertificateDecor(themeId);
}

function finishGame() {
  const oldBest = Number(localStorage.getItem('culinary-battle-best') || 0);
  const newBest = Math.max(score, oldBest);
  localStorage.setItem('culinary-battle-best', String(newBest));
  ui.best.textContent = newBest;
  renderCertificateDecor(currentThemeId, score);
  gameActive = false;
  awardCurrentCertificate();
  configureCertificateActions('game');
  $('#result-title').textContent = certificateTitles[currentThemeId];
  $('#certificate-theme').textContent = `Направление «${currentTheme().className}» · уровень «${modeLabels[mode]}»`;
  const grandUnlocked = isGrandChef();
  ui.resultCopy.textContent = grandUnlocked
    ? 'Все блюда изучены. Шеф Линь присваивает вам звание «Гранд-шеф» и открывает Авторскую кухню!'
    : `Все ${gameRecipes.length} заказов приготовлены. Сертификат добавлен к вашим достижениям.`;
  updateStats();
  ui.resultOverlay.hidden = false;
}

function startGame(themeId) {
  currentThemeId = themeId;
  round = 0;
  score = 0;
  streak = 0;
  mistakesThisRound = 0;
  gameRecipes = shuffled(currentTheme().recipes);
  gameActive = true;
  ui.startOverlay.hidden = true;
  ui.startOverlay.classList.remove('is-closing');
  ui.themeOverlay.hidden = true;
  ui.resultOverlay.hidden = true;
  renderRound();
}

function openThemeSelection() {
  ui.startOverlay.hidden = true;
  ui.instructionOverlay.hidden = true;
  ui.resultOverlay.hidden = true;
  ui.chosenLevelLabel.textContent = modeLabels[mode];
  ui.themeOverlay.hidden = false;
}

function showInstruction(context = 'start') {
  instructionContext = context;
  const config = modeConfig[mode];
  $('#instruction-number').textContent = config.number;
  $('#instruction-title').textContent = config.label;
  $('#instruction-lead').textContent = config.lead;
  $('#instruction-recipes').textContent = '5 / 8';
  $('#instruction-needed').textContent = config.needed;
  $('#instruction-options').textContent = config.options;
  $('#instruction-rules').innerHTML = config.rules.map((rule) => `<li>${rule}</li>`).join('');
  $('#order-visibility-choice').hidden = context === 'game';
  updateVisibilityChoice();
  $('#instruction-continue').innerHTML = context === 'game' ? 'Вернуться к заказу <span>→</span>' : `${config.continueLabel} <span>→</span>`;
  ui.instructionOverlay.hidden = false;
}

function returnToWelcome() {
  [ui.instructionOverlay, ui.themeOverlay, ui.resultOverlay, ui.menuOverlay, ui.grandOverlay, ui.achievementsOverlay, ui.resetOverlay].forEach((overlay) => { overlay.hidden = true; });
  ui.startOverlay.hidden = false;
}

function goHome() {
  if (gameActive && !window.confirm('Вернуться на главный экран? Текущий заказ начнётся заново.')) return;
  gameActive = false;
  returnToWelcome();
}

function speakOrder() {
  if (!('speechSynthesis' in window) || !gameRecipes.length) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(orderCopyForRecipe(currentRecipe(), activeNeeds).phrase);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
}

function isGrandChef() {
  return allMenuDishes.every((dish) => completedDishes.has(dish.hanzi));
}

function updateGrandChefState() {
  const button = $('#grand-chef-button');
  if (!button) return;
  const unlocked = isGrandChef();
  button.disabled = !unlocked;
  button.classList.toggle('unlocked', unlocked);
  button.querySelector('.grand-lock').textContent = unlocked ? '冠' : '锁';
  $('#grand-status').textContent = unlocked
    ? 'Звание «Гранд-шеф» получено — кухня открыта'
    : `Изучите ещё ${Math.max(0, allMenuDishes.length - completedDishes.size)} блюд`;
}

function renderMenuFilters() {
  const labels = { all: 'Все', salads: 'Салаты', hot: 'Горячее', desserts: 'Десерты', drinks: 'Напитки', shifu: 'Шифу' };
  $('#menu-filters').innerHTML = Object.entries(labels).map(([id, label]) => `<button class="menu-filter${menuFilter === id ? ' active' : ''}" type="button" data-filter="${id}">${label}</button>`).join('');
}

function renderDishDetail(dish) {
  if (!dish) {
    $('#dish-detail').innerHTML = '<div class="menu-empty"><strong>Ничего не найдено</strong><span>Попробуйте изменить запрос.</span></div>';
    return;
  }
  selectedMenuDish = dish;
  const learned = completedDishes.has(dish.hanzi);
  const menuNeeds = needsForMode(dish.recipe);
  const itemList = menuNeeds.map((id) => {
    const item = ingredients[id];
    return `<li>${ingredientArtMarkup(id, 'detail-ingredient-art')}<span><strong lang="zh-CN">${item.hanzi}</strong><small>${formatPinyin(item.pinyin)}</small><em>${item.meaning}</em></span></li>`;
  }).join('');
  $('#dish-detail').innerHTML = `${dishArtMarkup(dish, 'detail-dish-art')}<span class="dish-status ${learned ? 'learned' : ''}">${learned ? '✓ Приготовлено' : '○ Ещё не приготовлено'}</span><h3 lang="zh-CN">${dish.hanzi}</h3><strong class="detail-pinyin">${formatPinyin(dish.pinyin)}</strong><p>${dish.translation}</p><div class="detail-divider"></div><h4>Ингредиенты · ${modeLabels[mode]} · ${menuNeeds.length}</h4><ul class="detail-ingredients">${itemList}</ul>`;
  hydrateIngredientArt($('#dish-detail'));
  hydrateDishArt($('#dish-detail'));
}

function renderChefMenu() {
  const query = $('#menu-search').value.trim().toLowerCase();
  const visible = allMenuDishes.filter((dish) => {
    const categoryMatch = menuFilter === 'all' || dish.themeId === menuFilter;
    const textMatch = !query || `${dish.hanzi} ${dish.pinyin} ${dish.translation}`.toLowerCase().includes(query);
    return categoryMatch && textMatch;
  });
  if (!visible.includes(selectedMenuDish)) selectedMenuDish = visible[0] || null;
  renderMenuFilters();
  $('#dish-catalog').innerHTML = visible.map((dish) => {
    const index = allMenuDishes.indexOf(dish);
    const learned = completedDishes.has(dish.hanzi);
    return `<button class="dish-card${selectedMenuDish === dish ? ' selected' : ''}" type="button" data-dish="${index}">${dishArtMarkup(dish, 'menu-dish-art')}<span class="dish-card-copy"><strong lang="zh-CN">${dish.hanzi}</strong><small>${formatPinyin(dish.pinyin)}</small><em>${dish.translation}</em></span><span class="dish-check ${learned ? 'learned' : ''}">${learned ? '✓' : '○'}</span></button>`;
  }).join('');
  hydrateDishArt($('#dish-catalog'));
  const learnedCount = allMenuDishes.filter((dish) => completedDishes.has(dish.hanzi)).length;
  $('#menu-progress-text').textContent = `${learnedCount} из ${allMenuDishes.length}`;
  $('#menu-progress-bar').style.width = `${(learnedCount / allMenuDishes.length) * 100}%`;
  renderDishDetail(selectedMenuDish);
}

function openChefMenu() {
  if (!selectedMenuDish) selectedMenuDish = allMenuDishes[0];
  renderChefMenu();
  ui.menuOverlay.hidden = false;
}

function renderAchievements() {
  const ordered = [...earnedCertificates].sort((first, second) => new Date(second.earnedAt) - new Date(first.earnedAt));
  $('#achievements-summary-count').textContent = ordered.length;
  $('#achievement-grid').innerHTML = ordered.length ? ordered.map((certificate) => {
    const level = modeLabels[certificate.mode] || certificate.mode;
    const scoreLabel = certificate.score ? `${certificate.score} очков` : 'без оценки';
    return `<button class="achievement-card theme-${certificate.themeId}" type="button" data-certificate-id="${certificate.id}">
      <span class="achievement-preview"><canvas class="achievement-vessel" width="160" height="120" data-certificate-vessel="${certificate.themeId}" aria-hidden="true"></canvas><strong>${certificate.title}</strong><small>${certificate.themeName} · ${level}</small></span>
      <span class="achievement-copy"><span><strong>${certificate.title}</strong><small>${certificate.themeName} · ${level}</small></span><b>${scoreLabel}</b></span>
    </button>`;
  }).join('') : '<div class="achievement-empty"><div><strong>Сертификатов пока нет</strong><span>Завершите любой мастер-класс — первая награда появится здесь.</span></div></div>';
  hydrateAchievementVessels($('#achievement-grid'));
}

function openAchievements() {
  renderAchievements();
  ui.achievementsOverlay.hidden = false;
}

function openResetProgress() {
  ui.resetOverlay.hidden = false;
  window.setTimeout(() => $('#reset-cancel').focus(), 0);
}

function closeResetProgress() {
  ui.resetOverlay.hidden = true;
}

function resetAllProgress() {
  ['culinary-battle-dishes', 'culinary-battle-certificates', 'culinary-battle-best'].forEach((key) => localStorage.removeItem(key));
  completedDishes.clear();
  earnedCertificates = [];
  score = 0;
  streak = 0;
  round = 0;
  mistakesThisRound = 0;
  selected = new Set();
  authorSelected.clear();
  selectedMenuDish = null;
  gameActive = false;
  orderTextCollapsed = false;
  updateOrderTextState();
  updateVisibilityChoice();
  closeResetProgress();
  renderAchievements();
  updateStats();
}

function openEarnedCertificate(certificate) {
  if (!certificate) return;
  configureCertificateActions('achievements');
  $('#result-title').textContent = certificate.title;
  $('#certificate-theme').textContent = `Направление «${certificate.themeName}» · уровень «${modeLabels[certificate.mode] || certificate.mode}»`;
  ui.resultCopy.textContent = certificate.migrated
    ? 'Сертификат восстановлен по ранее завершённой теме.'
    : `Сертификат получен ${new Intl.DateTimeFormat('ru-RU').format(new Date(certificate.earnedAt))}.`;
  renderCertificateDecor(certificate.themeId, certificate.score || '—');
  ui.achievementsOverlay.hidden = true;
  ui.resultOverlay.hidden = false;
}

const authorIngredients = [...new Map(Object.values(wordSets).flat().map((item) => [item.hanzi, item])).values()];

function renderAuthorIngredients() {
  $('#author-ingredients').innerHTML = authorIngredients.map((item) => `<button class="author-ingredient${authorSelected.has(item.id) ? ' selected' : ''}" type="button" data-id="${item.id}">${ingredientArtMarkup(item.id)}<strong lang="zh-CN">${item.hanzi}</strong><small>${item.meaning}</small></button>`).join('');
  hydrateIngredientArt($('#author-ingredients'));
  $('#author-count').textContent = `Выбрано: ${authorSelected.size} из 5`;
  $('#author-cook').disabled = authorSelected.size < 2 || authorSelected.size > 5;
}

function clearAuthorKitchen() {
  authorSelected.clear();
  renderAuthorIngredients();
  $('#author-base').style.backgroundImage = '';
  $('#author-base').style.backgroundSize = '';
  $('#author-pieces').innerHTML = '';
  $('#author-plate').classList.remove('has-result', 'failed');
  $('#author-result-title').textContent = 'Соберите свой рецепт';
  $('#author-result-copy').textContent = 'Можно соединить любые продукты — от лапши до манго.';
}

function canonicalIngredients(ids) {
  return ids.map((id) => ingredients[id].hanzi).sort().join('|');
}

function createAuthorDish() {
  if (authorSelected.size < 2 || authorSelected.size > 5) return;
  const ids = [...authorSelected];
  const canonical = canonicalIngredients(ids);
  const known = allMenuDishes.find((dish) => canonicalIngredients(fullNeeds(dish.recipe)) === canonical || canonicalIngredients(dish.recipe.needs) === canonical);
  const groups = ids.map((id) => id[0]);
  const counts = groups.reduce((map, group) => ({ ...map, [group]: (map[group] || 0) + 1 }), {});
  const dominantPrefix = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const themeByPrefix = { s: 'salads', h: 'hot', d: 'desserts', b: 'drinks' };
  const dominantThemeId = themeByPrefix[dominantPrefix] || 'shifu';
  const veryMixed = Object.keys(counts).length >= 3;
  let sheet = themes[dominantThemeId].resultSheet;
  let position = ['0% 0%', '50% 0%', '100% 0%', '0% 100%', '50% 100%'][ids.join('').length % 5];
  let backgroundSize = '300% 200%';
  let title;
  let copy;
  if (known) {
    sheet = known.recipe.image || known.theme.resultSheet;
    position = known.recipe.image ? 'center' : known.recipe.resultPosition;
    backgroundSize = known.recipe.image ? 'cover' : '300% 200%';
    title = `${known.hanzi} · ${known.translation}`;
    copy = `Шеф Линь узнал настоящий рецепт: ${known.pinyin}. Отличная память Гранд-шефа!`;
  } else if (veryMixed) {
    sheet = 'assets/results-shifu-clean-v2.png';
    position = '100% 100%';
    title = 'Кулинарный эксперимент «Пять дорог»';
    copy = 'Смелое сочетание! На этот раз вкусы поспорили друг с другом, но именно так рождаются новые идеи.';
  } else {
    const first = ingredients[ids[0]].meaning;
    const second = ingredients[ids[1]].meaning;
    const names = { salads: 'Нефритовый сад', hot: 'Огненный вок', desserts: 'Облачный десерт', drinks: 'Эликсир чайного дома' };
    title = `${names[dominantThemeId]} · ${first} и ${second}`;
    copy = `Авторское блюдо из ${ids.map((id) => ingredients[id].meaning).join(', ')}. Шеф Линь ставит печать за смелость.`;
  }
  $('#author-base').style.backgroundImage = `url('${sheet}')`;
  $('#author-base').style.backgroundPosition = position;
  $('#author-base').style.backgroundSize = backgroundSize;
  $('#author-pieces').innerHTML = ids.map((id, index) => {
    const item = ingredients[id];
    const angle = -18 + index * 9;
    return `<canvas class="ingredient-art author-piece" width="180" height="180" data-ingredient-art="${id}" style="transform:translate(${(index - (ids.length - 1) / 2) * 28}px,${index % 2 ? 12 : -4}px) rotate(${angle}deg)" aria-hidden="true"></canvas>`;
  }).join('');
  hydrateIngredientArt($('#author-pieces'));
  $('#author-plate').classList.add('has-result');
  $('#author-plate').classList.toggle('failed', veryMixed && !known);
  $('#author-result-title').textContent = title;
  $('#author-result-copy').textContent = copy;
}

function openGrandKitchen() {
  if (!isGrandChef()) return;
  clearAuthorKitchen();
  ui.grandOverlay.hidden = false;
}

document.querySelectorAll('.mode-card').forEach((card) => {
  card.addEventListener('click', () => setMode(card.dataset.mode));
});

document.querySelectorAll('.theme-card').forEach((card) => {
  card.addEventListener('click', () => startGame(card.dataset.theme));
});

ui.grid.addEventListener('click', (event) => {
  const card = event.target.closest('.ingredient-card');
  if (card) chooseIngredient(card);
});

ui.cook.addEventListener('click', cook);
ui.sound.addEventListener('click', speakOrder);
ui.orderCollapse.addEventListener('click', () => {
  orderTextCollapsed = !orderTextCollapsed;
  updateOrderTextState();
  updateVisibilityChoice();
});
document.querySelectorAll('[data-order-visibility]').forEach((button) => {
  button.addEventListener('click', () => {
    orderTextCollapsed = button.dataset.orderVisibility === 'audio';
    updateVisibilityChoice();
    updateOrderTextState();
  });
});
ui.modeButton.addEventListener('click', () => showInstruction('game'));

$('#start-button').addEventListener('click', () => showInstruction('start'));
$('#instruction-close').addEventListener('click', () => { ui.instructionOverlay.hidden = true; });
$('#instruction-back').addEventListener('click', () => { ui.instructionOverlay.hidden = true; });
$('#instruction-continue').addEventListener('click', () => {
  ui.instructionOverlay.hidden = true;
  if (instructionContext === 'game') return;
  openThemeSelection();
});
$('#back-to-levels').addEventListener('click', () => {
  ui.themeOverlay.hidden = true;
  ui.startOverlay.hidden = false;
});
$('#restart-button').addEventListener('click', () => startGame(currentThemeId));
$('#choose-theme-button').addEventListener('click', openThemeSelection);
$('#print-certificate').addEventListener('click', () => window.print());
$('#back-to-achievements').addEventListener('click', () => {
  ui.resultOverlay.hidden = true;
  openAchievements();
});
$('#home-button').addEventListener('click', goHome);
document.querySelectorAll('[data-go-home]').forEach((button) => button.addEventListener('click', goHome));

$('#menu-button').addEventListener('click', openChefMenu);
$('#welcome-menu-button').addEventListener('click', openChefMenu);
$('#theme-menu-button').addEventListener('click', openChefMenu);
$('#menu-close').addEventListener('click', () => { ui.menuOverlay.hidden = true; });
$('#achievements-button').addEventListener('click', openAchievements);
$('#achievements-close').addEventListener('click', () => { ui.achievementsOverlay.hidden = true; });
$('#reset-progress-button').addEventListener('click', openResetProgress);
$('#reset-close').addEventListener('click', closeResetProgress);
$('#reset-cancel').addEventListener('click', closeResetProgress);
$('#reset-confirm').addEventListener('click', resetAllProgress);
ui.resetOverlay.addEventListener('click', (event) => {
  if (event.target === ui.resetOverlay) closeResetProgress();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !ui.resetOverlay.hidden) closeResetProgress();
});
$('#achievement-grid').addEventListener('click', (event) => {
  const card = event.target.closest('[data-certificate-id]');
  if (!card) return;
  openEarnedCertificate(earnedCertificates.find((certificate) => certificate.id === card.dataset.certificateId));
});
$('#menu-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  menuFilter = button.dataset.filter;
  selectedMenuDish = null;
  renderChefMenu();
});
$('#menu-search').addEventListener('input', () => { selectedMenuDish = null; renderChefMenu(); });
$('#dish-catalog').addEventListener('click', (event) => {
  const card = event.target.closest('[data-dish]');
  if (!card) return;
  selectedMenuDish = allMenuDishes[Number(card.dataset.dish)];
  renderChefMenu();
});

$('#grand-chef-button').addEventListener('click', openGrandKitchen);
$('#grand-close').addEventListener('click', () => { ui.grandOverlay.hidden = true; });
$('#author-clear').addEventListener('click', clearAuthorKitchen);
$('#author-cook').addEventListener('click', createAuthorDish);
$('#author-ingredients').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card) return;
  const id = card.dataset.id;
  if (authorSelected.has(id)) authorSelected.delete(id);
  else if (authorSelected.size < 5) authorSelected.add(id);
  renderAuthorIngredients();
});

const welcomeImage = $('#welcome-image');
welcomeImage.addEventListener('error', () => {
  if (welcomeImage.src.endsWith(welcomeImage.dataset.fallback)) return;
  welcomeImage.src = welcomeImage.dataset.fallback;
});

setMode('apprentice');
updateStats();
renderAuthorIngredients();
