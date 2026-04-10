'use strict';

// ===================== DATA =====================

const PALM_LINES = [
  { id:'life',     name:'生命線',  nameEn:'Life Line',       icon:'❤️',  path:[[32,22],[22,40],[18,58],[20,75],[24,85]] },
  { id:'head',     name:'知能線',  nameEn:'Head Line',       icon:'🧠',  path:[[30,36],[42,38],[55,40],[65,44],[72,48]], dash:[8,4] },
  { id:'heart',    name:'感情線',  nameEn:'Heart Line',      icon:'💜',  path:[[20,22],[35,18],[50,17],[65,18],[75,22]] },
  { id:'fate',     name:'運命線',  nameEn:'Fate Line',       icon:'⭐',  path:[[48,82],[48,65],[47,48],[46,32],[45,18]] },
  { id:'sun',      name:'太陽線',  nameEn:'Sun Line',        icon:'☀️',  path:[[65,55],[65,42],[64,30],[63,18]], dash:[6,4] },
  { id:'marriage', name:'結婚線',  nameEn:'Marriage Line',   icon:'💍',  path:[[78,20],[72,20],[68,20]], dash:[5,3] },
  { id:'money',    name:'金運線',  nameEn:'Money Line',      icon:'💰',  path:[[55,58],[58,48],[60,38],[62,28]], dash:[4,4] },
  { id:'popular',  name:'人気線',  nameEn:'Popularity Line', icon:'✨',  path:[[72,42],[70,35],[68,25]], dash:[3,5] },
  { id:'charm',    name:'モテ線',  nameEn:'Charm Line',      icon:'🌹',  path:[[38,44],[36,36],[35,26]], dash:[4,4] },
  { id:'devotion', name:'つくし線',nameEn:'Devotion Line',   icon:'🌿',  path:[[26,52],[30,46],[34,40]], dash:[5,5] },
];

const READINGS = {
  life: {
    scores:[72,85,91,68,78,82,88,75,65,93],
    texts:[
      '生命線が手首までしっかりと伸び、強靭な生命力を持っています。健康への意識が高く、困難な状況でも驚くほどの回復力を発揮するでしょう。線の弧が大きく、活発で行動的な人生を示しています。',
      '深く刻まれた生命線は、旺盛な活力と意志の強さの表れです。大きな病気にかかりにくい体質で、精神的にも肉体的にもタフ。人生の節目で力強く立ち上がれる底力があります。',
      '生命線は曲線が美しく、バイタリティが豊か。中年以降に人生の充実期が訪れることを示唆しています。',
    ],
    deep:{
      title:'生命線・詳細鑑定',
      content:[
        '生命線は単なる寿命の線ではなく、活力・生きるエネルギーの質を映す鏡です。あなたの生命線の深さは、日常のストレスに屈しない精神的な芯の強さと、高い免疫力を同時に示しています。',
        '線の途中に見られる小さな枝線は、人生の中で何度か大きな転機を迎えることを暗示しています。しかしその分岐点のたびに、より豊かな方向へ歩みを進める力が備わっています。',
        '親指の付け根（金星丘）への広がりが大きいほど、愛情の器が深く、パートナーへの献身度が高いことを意味します。愛する人のためなら底力が何倍にも引き出されるタイプです。',
      ],
      advice:['年1〜2回、自然の中でゆっくり過ごす時間が生命エネルギーをリチャージします','睡眠の質を高める工夫（就寝前のルーティン）が効果的です','好きな人・ものと過ごす時間があなたの源泉です','水分補給と適度な運動で健康運がさらにアップします'],
    }
  },
  head: {
    scores:[88,72,65,90,83,79,71,86,92,77],
    texts:[
      '知能線が長く横に伸び、論理的思考力と分析力に長けています。直感と理論のバランスが取れており、問題解決能力が高い。クリエイティブな仕事で才能を発揮できます。',
      '知能線がわずかに下向きで、豊かな想像力とロマンチックな一面を示しています。現実的な判断力と夢見る力を兼ね備えたバランス型の知性の持ち主。',
      '鮮明で深い知能線は集中力と記憶力の高さを示します。一度興味を持ったことは徹底的に掘り下げる探求心があります。',
    ],
    deep:{
      title:'知能線・詳細鑑定',
      content:[
        'あなたの知能線は、知的好奇心の旺盛さと多才な思考回路を示しています。線の長さは思考の射程距離——どれだけ広い視野で物事を捉えられるかを示し、平均より優れた洞察力を持つことを意味しています。',
        '知能線と感情線の間の「ます目」の広さが適度で、熱意を持ちつつ冷静に行動に移せるバランス感覚があります。交渉や調整の場面でとても有利に働きます。',
        '線の末端の形も重要です。先が二股に分かれている場合は異なる立場からの思考が得意で、これは交渉や調整の場面で有利に働きます。',
      ],
      advice:['毎日15分の読書やインプットの時間が知能線を輝かせます','新しい分野への挑戦が潜在的な才能を引き出します','アウトプット（書く・話す・教える）を意識すると思考が深まります','マインドマップや図解で思考を整理するとあなたの才能が最大化されます'],
    }
  },
  heart: {
    scores:[85,92,78,71,88,65,90,73,82,95],
    texts:[
      '感情線が鮮明で長く、豊かな感受性と深い愛情を持つ人です。感情表現が豊かで周囲の人を惹きつける魅力があります。恋愛においては一途で情熱的なタイプ。',
      '感情線が手のひら全体に広がるように伸びており、博愛精神と高い共感力を示しています。人の気持ちを察する能力が高く、自然とリーダー的な存在になっていきます。',
      '深い感情線は愛情の深さと情熱の強さを表しています。一度好きになると真剣に向き合う誠実なタイプ。その純粋さが相手の心を動かします。',
    ],
    deep:{
      title:'感情線・詳細鑑定',
      content:[
        '感情線はその人の愛の形と感情エネルギーの使い方を映し出します。あなたの感情線は豊かな感情の波と、それを相手に伝えようとする誠実さを同時に示しています。',
        '線の流れを詳しく見ると、中ほどで若干の揺らぎが見られます。これは感情的な試練を経験し、それによって感情の深みが増したことを示しています。その経験があなたをより繊細で思いやりのある人間に育てています。',
        '感情線が人差し指の付け根方向にしっかり向かっていることは、理想主義的な愛を追い求める傾向があることを意味します。妥協よりも本物の絆を求める姿勢は、現代では希少な価値ある資質です。',
      ],
      advice:['感情を言葉にして伝える練習がより深い絆を生み出します','自分の感情を日記に書くことで感情線のエネルギーが整います','相手の気持ちを聞く前に自分の気持ちを確認する習慣を','感情の波が激しい時期は創作や音楽などで昇華するのがおすすめです'],
    }
  },
  fate: {
    scores:[76,88,93,70,82,65,91,78,85,72],
    texts:[
      '運命線がはっきりと刻まれており、目標に向かって着実に進む力があります。30代以降に本来の力が開花し、人生の大きな転換点を迎えるでしょう。',
      '運命線が手首の近くから始まり、早くから自分の道を歩んできた自立した魂の持ち主です。困難な状況でも自力で道を切り拓く強さがあります。',
      '途中から現れる運命線は、大きな変化をきっかけに才能が開花するタイプ。遅咲きに見えても最終的に大きく花開く運命です。',
    ],
    deep:{
      title:'運命線・詳細鑑定',
      content:[
        '運命線は「自分らしい人生を生きているか」を映す指針です。あなたの運命線は、迷いながらも確かに前進してきた軌跡を刻んでいます。',
        '線の起点から、これまで多くの選択を自らの意志で行ってきたことが読み取れます。自力開拓型であり、環境に流されず自分の信念に従って歩んできた証拠です。',
        '線の途中に見られる枝は人生の岐路を示しています。複数の才能と選択肢があり、どの道を選んでも自分なりの成功を手にできる多才さがあります。',
      ],
      advice:['5年後の自分のビジョンを具体的に描くことが運命線を強化します','本業以外のスキルアップが運命の扉を予想外の方向から開けます','直感に従った行動があなたの運命線を輝かせる最大のカギです','信頼できるメンターを持つことで運命の流れが加速します'],
    }
  },
  sun: {
    scores:[80,93,75,88,70,92,67,85,91,78],
    texts:[
      '太陽線が美しく伸びており、才能と個性が開花して多くの人に認められる運を持っています。クリエイティブな分野での成功と名声が約束されています。',
      '太陽線の存在自体が「人に与える影響力」を示し、あなたには周囲を明るくしインスピレーションを与える特別な光があります。',
      '太陽線がくっきりと刻まれており、努力が正当に評価され名声と成功を手にする運命。40代以降に特に輝きが増すでしょう。',
    ],
    deep:{
      title:'太陽線・詳細鑑定',
      content:[
        '太陽線（アポロ線）は、その人が世の中にどれだけ輝けるかを示す線です。この線がある人は、社会での認知と成功の土台を持って生まれた幸運な存在です。',
        'あなたの太陽線は薬指の付け根に向かってしっかりと伸びており、芸術的・審美的なセンスと、それを通じた社会的評価を示しています。',
        '太陽線の輝きを最大化するのは「見せる勇気」です。SNS、創作活動、プレゼンテーションなど、自分を表現する機会を積極的に作ることで太陽線はさらに力強く刻まれていきます。',
      ],
      advice:['創作物を定期的に外部に発信することで才能が開花します','「人に見せる」ことへの恐れを手放すと成功への扉が開きます','美意識を磨く（美術館・音楽・デザインに触れる）ことが運を高めます','自分のブランディングを意識した活動が名声運を引き寄せます'],
    }
  },
  marriage: {
    scores:[83,70,92,77,88,65,80,95,72,85],
    texts:[
      '結婚線が明確に1本存在し、深く真剣な愛に恵まれる相を示しています。一生に一度の大きな愛と安定した結婚生活が待っています。',
      '結婚線が2本見られ、人生において2つの深い愛の縁があることを暗示。どちらも本物の愛であり、あなたの人生を豊かに彩るでしょう。',
      '結婚線が上向きにカーブしており、結婚後に運気が上昇する「格上げ婚」の相。パートナーとともに成長し互いを高め合える素晴らしい関係が待っています。',
    ],
    deep:{
      title:'結婚線・詳細鑑定',
      content:[
        '結婚線（小指の付け根付近の横線）は、深い愛の縁と生涯のパートナーとの絆を読む重要な線です。あなたの結婚線は形と位置の両方から豊かな愛情運を示しています。',
        '線の位置がやや高めなことから、焦らずじっくりと本当の相手を見つけるタイプです。条件よりも心のつながりを重視し、直感で「この人だ」と感じた相手と深い絆を築いていくでしょう。',
        '線の長さと深さから、パートナーシップにおける誠実さと粘り強さが読み取れます。関係を長く丁寧に育てる力があります。',
      ],
      advice:['「理想のパートナー像」を具体的に書き出すと縁が引き寄せられます','新しい出会いの場に月1回は足を運ぶ習慣を作りましょう','自分磨き（内面・外見両方）への投資が最高のパートナーを引き寄せます','感謝の気持ちをこまめに言葉で伝えましょう'],
    }
  },
  money: {
    scores:[78,85,90,72,65,93,80,88,75,82],
    texts:[
      '金運線が明確に存在し、財運に恵まれた相を示しています。本業以外にも収入を得るチャンスがあり、副業や投資での成功を示す吉相です。',
      '財運線が複数本見られ、多方面からの収入が見込める恵まれた手相です。特に40代以降に金運が大きく花開くことが期待されます。',
      '太く深い金運線は堅実な蓄財能力を示しています。努力した分だけ確実に報われる着実型の財運の持ち主です。',
    ],
    deep:{
      title:'金運線・詳細鑑定',
      content:[
        '金運線（財運線）は、お金をどのように引き寄せ、使い、増やすかというお金との関係性全体を示します。あなたの金運線は、単なる収入の多さではなく、財を引き寄せる磁力の強さを表しています。',
        'この線が薬指と小指の間のエリアに向かって伸びているのは、才能や個性を通じてお金を引き寄せることができることを意味します。好きなことや得意なことを仕事にするほど金運が上がるタイプです。',
        '線の途中にある財布の相（小さな四角い印）がある場合、贈り物・遺産・思わぬ臨時収入など予期しない収入が生涯に複数回訪れることを示しています。',
      ],
      advice:['毎月少額からでも投資を始めることが金運線を活性化させます','お金に対するネガティブな信念を手放すことで財運が開きます','「与えることで豊かになる」という循環を意識しましょう','家計簿でお金の流れを見える化することで金運アップします'],
    }
  },
  popular: {
    scores:[91,76,85,92,78,88,70,93,82,75],
    texts:[
      '人気線が鮮明に刻まれており、多くの人に好かれる天性の魅力を持っています。どんなコミュニティに入っても自然と中心的な存在になれる素質があります。',
      '太陽指方向へ伸びる人気線は、SNSや公の場での知名度アップを示す吉相です。発信活動を始めると一気に注目を集める可能性があります。',
      '人気線が明確に存在し、特に異性からの人気が高い相を示しています。存在感があり、自然と人が集まってくる磁力の強い人です。',
    ],
    deep:{
      title:'人気線・詳細鑑定',
      content:[
        '人気線は、その人が社会の中でどれほどの「引力」を持つかを示す線です。この線が強い人は意識せずとも人々を惹きつけ、自然とコミュニティの中心になっていきます。',
        'あなたの人気線の始点が生命線や感情線と近い位置にあることは、人気の源泉が「パフォーマンス」ではなく「真摯な人間性」にあることを示しています。ありのままのあなたが人を惹きつけています。',
        'このタイプの人気は息が長いのが特徴です。年齢を重ねるほどに「あの人は信頼できる」という形で評価が高まっていきます。特に30代後半から40代にかけて人気運が一段と花開きます。',
      ],
      advice:['自己紹介を磨く——自分の強みを30秒で語れるようにしましょう','笑顔と相手の名前を呼ぶことが人気運を大きく高めます','SNSや動画での定期的な発信が潜在的な人気を顕在化させます','「受け取り上手」になることでさらに人が寄ってきます'],
    }
  },
  charm: {
    scores:[88,75,93,80,92,70,85,77,90,82],
    texts:[
      'モテ線（魅惑線）が美しく伸びており、異性を惹きつける天然の色気と魅力を持っています。意識しなくても多くの人から好意を寄せられる相です。',
      'モテ線の存在は、外見だけでなく内面的な魅力——雰囲気・声・仕草——で人を惹きつける特別な個性を示しています。',
      'はっきりとしたモテ線は、生まれながらのフェロモンの強さを示しています。同性異性問わず「この人の傍にいたい」と思わせる不思議な磁力があります。',
    ],
    deep:{
      title:'モテ線・詳細鑑定',
      content:[
        'モテ線（魅惑線）は手相の中でも特に神秘的な線のひとつです。この線は恋愛的な魅力だけでなく、「人を惹きつける総合的な磁力」を表しています。',
        'あなたのモテ線は知能線から分かれて上方向に向かう形を示しており、知性と感性が融合した魅力を持つタイプです。頭が良くて思いやりがある——この組み合わせは異性に最も響く魅力の形です。',
        'この線がある人は「意識していない時ほどモテる」という特徴があります。頑張りすぎず自然体でいる時に最も輝きます。また年齢を重ねるほどにその魅力が深みを増すタイプです。',
      ],
      advice:['作り込まずに自然体でいることが最大のモテ戦略です','「聞き上手」を意識するとモテ線のエネルギーが倍増します','自分の好きな香りを持つことがフェロモンオーラを高めます','目線と笑顔に少し意識を向けるとモテ運が劇的に変わります'],
    }
  },
  devotion: {
    scores:[82,90,75,88,70,93,80,78,85,91],
    texts:[
      'つくし線が刻まれており、愛する人のためなら自分を犠牲にできる深い献身の心を持っています。その純粋な愛は必ず相手の心を動かします。',
      'つくし線の存在は、人のために尽くすことで自分も幸福を感じられる「give型」の愛情パターンを示しています。その姿勢が周囲に深い感動を与えます。',
      'つくし線が見られ、パートナーや大切な人への深い愛情と責任感を持つ人です。その献身が最終的に大きな愛情となって返ってくる幸運な相です。',
    ],
    deep:{
      title:'つくし線・詳細鑑定',
      content:[
        'つくし線は愛の深さと人への献身度を表す稀有な線です。この線を持つ人は、愛する人のために自分の時間・エネルギー・場合によっては夢をも差し出せる深い愛の器を持っています。',
        'これは美しい特質である反面、自分を後回しにしすぎると長期的には心が疲れてしまいます。あなたのつくし線は生命線と近い位置から始まっており、「自己犠牲」の傾向と「自己肯定感」のバランスを取ることが人生のテーマであることを示しています。',
        'このタイプが真に幸福になるためのカギは「自分を愛する」ことです。自分を大切にしながら相手を愛する——このバランスが取れた時に、つくし線は最もポジティブな形で輝きます。',
      ],
      advice:['「自分への時間」を週に1日は確保する習慣を作りましょう','NOを言える勇気があなたの魅力をさらに高めます','与えることと受け取ることのバランスを意識しましょう','自己肯定感を高める言葉を毎朝唱えてみてください'],
    }
  },
};

const PERSONALITIES = [
  '手相全体から読み取れるあなたの人間性は、深い共感力と強い意志を兼ね備えた稀有な存在です。表面上は穏やかで人当たりが良く、誰とでもすぐに打ち解けられる社交性を持ちながら、内側には揺るぎない芯と信念が宿っています。\n\nあなたの最大の魅力は「誠実さ」です。約束を守り、言葉と行動が一致している姿勢が、気づかないうちに多くの人からの信頼を勝ち取っています。繊細な感受性が芸術や美しいものへの高いセンスとなって現れており、創造的な活動においても才能を発揮できるでしょう。\n\n一方で完璧主義な面があり、自分に厳しくなりすぎることも。もう少し自分を許す余裕を持つと、さらにエネルギーが循環しやすくなります。',
  '手のひら全体の線のバランスから、あなたは知性と感性を高次元で統合した、非常に稀な手相の持ち主であることが分かります。論理的思考と直感、理性と感情——これらを自由自在に使い分けながら人生の複雑な問いに向き合う力があります。\n\nコミュニケーションにおいては、相手の言葉の裏にある感情を読み取る能力が突出しています。これがあなたを優れたリスナーにする一方、人の悩みを吸い込みすぎてしまう繊細さでもあります。\n\nあなたの人生は「人との縁」によって大きく動いていきます。日々の人とのつながりを大切にする姿勢が、運命そのものを変える力を持っています。',
  'あなたの手相は、強い生命力と豊かな創造性を持つ魂を示しています。物事の本質を見抜く直感力と、それを実現するための行動力が見事に共存しており、「夢想家」であると同時に「実行者」でもあるバランスの良い人格を形成しています。\n\n人間関係においては深く少数の関係を好み、表面的な付き合いよりも本音で語り合える絆を大切にします。その深い愛着心と義理堅さから、一度仲間として認めた人とは生涯にわたる絆を結ぶことができます。\n\n「自分にとっての正しさ」に従って行動するスタイルが、あなたの人生を独自の彩りで満たす源になっています。',
];

const FUTURES = [
  { period:'〜6ヶ月', label:'直近', title:'新しい縁と出会い', text:'今後半年以内に、あなたの人生に大きな影響を与える人物との出会いが予感されます。職場・趣味・SNSなど意外な場所でのご縁を大切に。今まで縁がなかった分野の人との交流が新しい道を開くカギになりそうです。' },
  { period:'〜1年', label:'1年以内', title:'転機とチャンスの到来', text:'大きな変化を求めていた思いが現実に動き出す時期です。転職・引越し・新しいプロジェクトなど「踏み出す勇気」が求められる局面が訪れます。迷いがあっても直感を信じて一歩踏み出すと、運命の歯車が回り始めます。' },
  { period:'1〜3年', label:'中期', title:'実力が評価される時期', text:'これまで積み上げてきた努力と実力が正当に評価される時期が訪れます。自分の強みを活かした場所での活躍が期待でき、経済的にも精神的にも充実した日々が待っています。着実に進んだ先に大きな花が咲きます。' },
  { period:'3〜5年', label:'長期', title:'愛と絆の深まり', text:'人生における愛——恋愛・家族・友情——がより深く豊かな形へと進化する時期です。大切なパートナーとの絆の深まり、もしくは真の意味での生涯のパートナーとの出会いが暗示されています。愛を与え受け取ることへの恐れを手放しましょう。' },
];

// ===================== STATE =====================
let imgSrc = null;
let lineVis = {};
let scores = {};
let readingTexts = {};
let currentTab = 'Lines';

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  setupUpload();
  setupTabs();
});

// ===================== UPLOAD =====================
function setupUpload() {
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const dropZoneBtn = document.getElementById('dropZoneBtn');
  const screenUpload = document.getElementById('screenUpload');
  const dropOverlay = document.getElementById('dropOverlay');

  uploadBtn.addEventListener('click', () => fileInput.click());
  dropZoneBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', e => { if (e.target.files[0]) loadFile(e.target.files[0]); });

  screenUpload.addEventListener('dragover', e => { e.preventDefault(); dropOverlay.classList.add('active'); });
  screenUpload.addEventListener('dragleave', () => dropOverlay.classList.remove('active'));
  screenUpload.addEventListener('drop', e => {
    e.preventDefault();
    dropOverlay.classList.remove('active');
    if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]);
  });

  document.getElementById('retakeBtn').addEventListener('click', resetToUpload);
}

async function loadFile(file) {
  // HEIC/HEIF → JPEG 自動変換（Safari以外のブラウザ対応）
  const isHeic = file.type === 'image/heic' || file.type === 'image/heif'
    || /\.(heic|heif)$/i.test(file.name);
  if (isHeic) {
    try {
      const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.88 });
      file = Array.isArray(converted) ? converted[0] : converted;
    } catch(e) {
      alert('HEIC画像の変換に失敗しました。\n写真をJPEGまたはPNGに変換してからお試しください。');
      return;
    }
  }
  // MIME型が空でも拡張子で判断（iOS等でtype未設定になる場合がある）
  const ext = file.name.split('.').pop().toLowerCase();
  const knownImg = /^(jpe?g|png|webp|gif|bmp|avif|heic|heif)$/.test(ext);
  if (!file.type.startsWith('image/') && !knownImg) return;
  // Object URL を使用（大容量でも確実に表示できる）
  if (imgSrc && imgSrc.startsWith('blob:')) URL.revokeObjectURL(imgSrc);
  imgSrc = URL.createObjectURL(file);
  runAnalysis();
}

// ===================== ANALYSIS =====================
function runAnalysis() {
  showLoading();
  generateData();

  const steps = [
    '手のひらの輪郭を検出中...',
    '主要な掌紋を認識中...',
    '生命線・感情線を解析中...',
    '特殊線（モテ線・金運線）を探索中...',
    '人格パターンを分析中...',
    '運命の流れを読み解いています...',
  ];

  const stepEl = document.getElementById('loadingStep');
  const progressEl = document.getElementById('progressBar');
  let i = 0;

  const tick = () => {
    if (i < steps.length) {
      stepEl.textContent = steps[i];
      progressEl.style.width = ((i + 1) / steps.length * 100) + '%';
      i++;
      setTimeout(tick, 500);
    } else {
      setTimeout(() => {
        hideLoading();
        showResult();
      }, 400);
    }
  };
  tick();
}

function generateData() {
  PALM_LINES.forEach(l => {
    lineVis[l.id] = true;
    const d = READINGS[l.id];
    scores[l.id] = d.scores[Math.floor(Math.random() * d.scores.length)];
    readingTexts[l.id] = d.texts[Math.floor(Math.random() * d.texts.length)];
  });
}

// ===================== SHOW RESULT =====================
function showResult() {
  // Transition screens
  const uploadScreen = document.getElementById('screenUpload');
  const resultScreen = document.getElementById('screenResult');
  uploadScreen.classList.add('slide-out');
  setTimeout(() => { uploadScreen.classList.remove('active', 'slide-out'); }, 350);
  resultScreen.classList.add('active');

  // Show tab bar
  const tabBar = document.getElementById('tabBar');
  tabBar.style.display = 'flex';

  // Show top bar actions
  document.getElementById('retakeBtn').style.opacity = '1';
  document.getElementById('retakeBtn').style.pointerEvents = 'auto';

  // Draw canvas
  drawCanvas();

  // Build score cards
  buildScores();

  // Build reading list
  buildReadings();

  // Build personality
  buildPersonality();

  // Build future
  buildFuture();

  // Build detail options
  buildDetailOptions();

  // Set tab to lines
  switchTab('Lines');

  // Animate score bars after render
  setTimeout(() => {
    document.querySelectorAll('.score-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 400);
}

// ===================== MEDIAPIPE =====================
let handsInstance = null;
let landmarkPending = null;
let detectedLandmarkPaths = null;

async function getHandsInstance() {
  if (handsInstance) return handsInstance;
  const h = new Hands({ locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}` });
  h.setOptions({ maxNumHands:1, modelComplexity:1, minDetectionConfidence:0.5, minTrackingConfidence:0.5 });
  h.onResults(r => {
    if (landmarkPending) {
      landmarkPending(r.multiHandLandmarks?.length ? r.multiHandLandmarks[0] : null);
      landmarkPending = null;
    }
  });
  await h.initialize();
  handsInstance = h;
  return h;
}

async function detectLandmarks(imgEl) {
  try {
    const h = await getHandsInstance();
    return await new Promise(resolve => { landmarkPending = resolve; h.send({ image: imgEl }); });
  } catch(e) { return null; }
}

// ===================== IMAGE ANALYSIS =====================
function lerp(a, b, t) { return { x: a.x+(b.x-a.x)*t, y: a.y+(b.y-a.y)*t }; }

// グレースケール変換
function getGrayData(canvas) {
  const {width:W, height:H} = canvas;
  const px = canvas.getContext('2d').getImageData(0,0,W,H).data;
  const g = new Float32Array(W*H);
  for (let i=0;i<g.length;i++) g[i]=0.299*px[i*4]+0.587*px[i*4+1]+0.114*px[i*4+2];
  return g;
}

// 局所コントラストマップ: 周囲の肌より「どれだけ暗いか」= シワらしさ
// → 暗い背景は周囲も暗いのでスコア低。シワは周囲の肌より暗くスコア高。
function getCreaseMap(canvas) {
  const {width:W, height:H} = canvas;
  const g = getGrayData(canvas);
  // ブラー半径: 手のひら全体の約2%（シワ幅の数倍）
  const R = Math.max(8, Math.round(Math.min(W,H)*0.025));
  // セパラブル ボックスブラーで局所平均を計算（O(WH)）
  const tmp = new Float32Array(W*H);
  const blr = new Float32Array(W*H);
  // 水平方向
  for (let y=0;y<H;y++){
    let s=0, lo=0, hi=0;
    for (let x=0;x<W;x++){
      while(hi<=Math.min(x+R,W-1)){ s+=g[y*W+hi]; hi++; }
      while(lo<Math.max(0,x-R)){ s-=g[y*W+lo]; lo++; }
      tmp[y*W+x]=s/(hi-lo);
    }
  }
  // 垂直方向
  for (let x=0;x<W;x++){
    let s=0, lo=0, hi=0;
    for (let y=0;y<H;y++){
      while(hi<=Math.min(y+R,H-1)){ s+=tmp[hi*W+x]; hi++; }
      while(lo<Math.max(0,y-R)){ s-=tmp[lo*W+x]; lo++; }
      blr[y*W+x]=s/(hi-lo);
    }
  }
  // シワマップ: 局所平均 − 自身の輝度（暗い＝正の値）
  const c = new Float32Array(W*H);
  for (let i=0;i<W*H;i++) c[i]=Math.max(0, blr[i]-g[i]);
  return c;
}

// 指定エリアで「シワらしさが最も高い行」のY座標
function creasiestRow(c, W, H, x0, x1, y0, y1) {
  x0=Math.max(0,~~x0); x1=Math.min(W,~~x1);
  y0=Math.max(0,~~y0); y1=Math.min(H,~~y1);
  if (y0>=y1||x0>=x1) return ~~((y0+y1)/2);
  let bestY=~~((y0+y1)/2), best=-1;
  for (let py=y0;py<y1;py++){
    let s=0,n=0;
    for (let px=x0;px<x1;px++){s+=c[py*W+px];n++;}
    const v=s/n; if(v>best){best=v;bestY=py;}
  }
  return bestY;
}

// 指定エリアで「シワらしさが最も高い列」のX座標
function creasiestCol(c, W, H, x0, x1, y0, y1) {
  x0=Math.max(0,~~x0); x1=Math.min(W,~~x1);
  y0=Math.max(0,~~y0); y1=Math.min(H,~~y1);
  if (y0>=y1||x0>=x1) return ~~((x0+x1)/2);
  let bestX=~~((x0+x1)/2), best=-1;
  for (let px=x0;px<x1;px++){
    let s=0,n=0;
    for (let py=y0;py<y1;py++){s+=c[py*W+px];n++;}
    const v=s/n; if(v>best){best=v;bestX=px;}
  }
  return bestX;
}

// ===================== 手相線パス計算 =====================
function calcCreasePaths(lm, canvas) {
  const W=canvas.width, H=canvas.height;
  const p=lm.map(l=>({x:l.x*W, y:l.y*H}));
  // 局所コントラストマップ（背景の影に惑わされずシワを検出）
  const c=getCreaseMap(canvas);
  const lr=lerp;

  // ── 手全体のバウンディングボックス（全21点から厳密算出）──
  const allX=p.map(pt=>pt.x), allY=p.map(pt=>pt.y);
  const hMinX=Math.min(...allX), hMaxX=Math.max(...allX);
  const hMinY=Math.min(...allY), hMaxY=Math.max(...allY);

  // 座標を手の範囲内にクランプ
  const cx2 = v=>Math.max(hMinX, Math.min(hMaxX, v));
  const cy2 = v=>Math.max(hMinY, Math.min(hMaxY, v));

  // 手の基本寸法
  const fingerBaseY = Math.min(p[5].y,p[9].y,p[13].y,p[17].y);
  const wristY      = p[0].y;
  const palmH       = Math.abs(wristY - fingerBaseY);
  const centerX     = p[9].x;

  const flip       = p[5].x > p[17].x;
  const thumbSideX = flip ? Math.max(p[1].x,p[2].x) : Math.min(p[1].x,p[2].x);
  const pinkySideX = p[17].x;
  const xLeft      = Math.min(thumbSideX, pinkySideX);
  const xRight     = Math.max(thumbSideX, pinkySideX);
  const palmW      = xRight - xLeft;

  // ── シワスナップ: 解剖学的位置から searchR 以内でシワらしさ最大点を探す ──
  // 局所コントラストマップを使うので背景に引っ張られない
  function snapX(baseX, baseY, searchR) {
    const x0=Math.max(hMinX, baseX-searchR), x1=Math.min(hMaxX, baseX+searchR);
    const y0=Math.max(hMinY, baseY-palmH*0.05), y1=Math.min(hMaxY, baseY+palmH*0.05);
    if (x0>=x1||y0>=y1) return cx2(baseX);
    return cx2(creasiestCol(c, W, H, x0, x1, y0, y1));
  }
  function snapY(baseX, baseY, searchR) {
    const x0=Math.max(hMinX, baseX-palmW*0.06), x1=Math.min(hMaxX, baseX+palmW*0.06);
    const y0=Math.max(hMinY, baseY-searchR), y1=Math.min(hMaxY, baseY+searchR);
    if (x0>=x1||y0>=y1) return cy2(baseY);
    return cy2(creasiestRow(c, W, H, x0, x1, y0, y1));
  }

  // ─────────────────────────────────────────────
  // 【生命線】親指の付け根を囲むC字カーブ（二次ベジェ）
  // ─────────────────────────────────────────────
  const lifeP0 = {x:cx2(lr(p[2],p[5],0.52).x), y:cy2(lr(p[2],p[5],0.52).y)};
  const lifeP2 = {x:cx2(lr(p[0],p[1],0.32).x), y:cy2(lr(p[0],p[1],0.32).y)};
  const lifeCtrlX = cx2(thumbSideX + (flip?-1:1)*palmW*0.14);
  const lifeCtrlY = cy2((lifeP0.y+lifeP2.y)*0.5);
  const lifeRaw = [];
  for (let i=0;i<10;i++){
    const t=i/9, mt=1-t;
    const bx=mt*mt*lifeP0.x + 2*mt*t*lifeCtrlX + t*t*lifeP2.x;
    const by=mt*mt*lifeP0.y + 2*mt*t*lifeCtrlY + t*t*lifeP2.y;
    const x=snapX(bx, by, palmW*0.10);  // 検索幅を広げ実際のシワを拾う
    lifeRaw.push({x, y:cy2(by)});
  }

  // ─────────────────────────────────────────────
  // 【感情線】小指側〜人差し指付け根の横線（指付け根下14〜22%）
  // ─────────────────────────────────────────────
  const heartBaseY = fingerBaseY + palmH*0.17;
  const heartRaw = [];
  for (let i=0;i<=9;i++){
    const xC=cx2(xLeft+palmW*(i/9));
    const y=snapY(xC, heartBaseY, palmH*0.10);
    heartRaw.push({x:xC, y});
  }

  // ─────────────────────────────────────────────
  // 【知能線】生命線起点付近〜小指方向（感情線から15〜25%下）
  // ─────────────────────────────────────────────
  const headBaseY = fingerBaseY + palmH*0.34;
  const headRaw = [];
  for (let i=0;i<=8;i++){
    const t=i/8;
    const xC=cx2(lifeP0.x + (xRight-lifeP0.x)*t);
    const y=snapY(xC, headBaseY+palmH*0.06*t, palmH*0.11);
    headRaw.push({x:xC, y});
  }

  // ─────────────────────────────────────────────
  // 【運命線】手首中央〜中指付け根の縦線
  // ─────────────────────────────────────────────
  const fateRaw = [];
  for (let i=0;i<8;i++){
    const t=i/7;
    const sy=cy2(wristY+(fingerBaseY-wristY)*t);
    const x=snapX(centerX, sy, palmW*0.12);
    fateRaw.push({x, y:sy});
  }

  // ─────────────────────────────────────────────
  // 【太陽線】薬指(p[13])下の縦線
  // ─────────────────────────────────────────────
  const sunPts = [
    {x:cx2(p[13].x), y:cy2(fingerBaseY+palmH*0.12)},
    {x:cx2(p[13].x), y:cy2(fingerBaseY+palmH*0.52)}
  ];

  // ─────────────────────────────────────────────
  // 【結婚線】小指付け根の外側の短い横線
  // ─────────────────────────────────────────────
  const marY  = cy2(fingerBaseY+palmH*0.10);
  const marX0 = cx2(p[17].x+(flip?1:-1)*palmW*0.06);
  const marX1 = cx2(p[17].x-(flip?1:-1)*palmW*0.18);
  const marPts = [{x:marX0, y:marY},{x:marX1, y:marY}];

  // ─────────────────────────────────────────────
  // 【その他の線】骨格基準で固定
  // ─────────────────────────────────────────────
  const monX=cx2(lr(p[9],p[13],0.5).x);
  const popX=cx2(lr(p[13],p[17],0.38).x);
  const chX =cx2(lr(p[5],p[9],0.3).x);
  const devX=cx2(lr(p[1],p[5],0.3).x);

  return {
    life:     lifeRaw,
    heart:    heartRaw,
    head:     headRaw,
    fate:     fateRaw,
    sun:      sunPts,
    marriage: marPts,
    money:    [{x:monX,y:cy2(fingerBaseY+palmH*0.28)},{x:monX,y:cy2(fingerBaseY+palmH*0.62)}],
    popular:  [{x:popX,y:cy2(fingerBaseY+palmH*0.14)},{x:popX,y:cy2(fingerBaseY+palmH*0.42)}],
    charm:    [{x:chX, y:cy2(fingerBaseY+palmH*0.28)},{x:cx2(chX-(flip?-1:1)*palmH*0.04),y:cy2(fingerBaseY+palmH*0.50)}],
    devotion: [{x:devX,y:cy2(fingerBaseY+palmH*0.40)},{x:cx2(devX+(flip?-1:1)*palmH*0.05),y:cy2(fingerBaseY+palmH*0.60)}],
  };
}

// ===================== CANVAS =====================
function drawCanvas() {
  const canvas = document.getElementById('palmCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.onerror = () => {
    alert('画像を読み込めませんでした。\nJPEGまたはPNG形式の写真をお試しください。');
  };
  img.onload = async () => {
    const maxW = Math.min(img.width, 800);
    const scale = maxW / img.width;
    canvas.width  = img.width  * scale;
    canvas.height = img.height * scale;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 1) Detect hand landmarks
    const lm = await detectLandmarks(img);
    // 2) If found: run image-analysis crease detection
    detectedLandmarkPaths = lm ? calcCreasePaths(lm, canvas) : null;

    PALM_LINES.forEach((l, i) =>
      setTimeout(() => { if (lineVis[l.id]) drawLine(ctx, l, canvas.width, canvas.height); }, i * 100)
    );
    buildLegend();
  };
  img.src = imgSrc;
}

function drawLine(ctx, line, cw, ch) {
  // Use landmark-based path if available, otherwise fallback to fixed %
  const pts = detectedLandmarkPaths && detectedLandmarkPaths[line.id]
    ? detectedLandmarkPaths[line.id]
    : line.path.map(([x,y]) => ({ x: x/100*cw, y: y/100*ch }));

  ctx.save();
  ctx.strokeStyle = '#ff3333';
  ctx.lineWidth = Math.max(2.5, cw / 180);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = 'rgba(255,50,50,0.7)';
  ctx.shadowBlur = 12;
  ctx.setLineDash(line.dash || []);

  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  if (pts.length === 2) {
    ctx.lineTo(pts[1].x, pts[1].y);
  } else {
    for (let i = 1; i < pts.length - 1; i++) {
      const nx = i + 1 < pts.length ? i + 1 : i;
      const mx = (pts[i].x + pts[nx].x) / 2;
      const my = (pts[i].y + pts[nx].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    ctx.lineTo(pts[pts.length-1].x, pts[pts.length-1].y);
  }
  ctx.stroke();

  // Label at last point
  const last = pts[pts.length-1];
  ctx.setLineDash([]);
  ctx.shadowBlur = 0;
  const fs = Math.max(9, cw / 80);
  ctx.font = `bold ${fs}px sans-serif`;
  const tw = ctx.measureText(line.name).width;
  ctx.fillStyle = 'rgba(0,0,0,0.72)';
  ctx.fillRect(last.x - tw/2 - 3, last.y - fs - 2, tw + 6, fs + 6);
  ctx.fillStyle = '#ffbbbb';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(line.name, last.x, last.y + 1);
  ctx.restore();
}

function redrawCanvas() {
  const canvas = document.getElementById('palmCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    PALM_LINES.forEach((l, i) =>
      setTimeout(() => { if (lineVis[l.id]) drawLine(ctx, l, canvas.width, canvas.height); }, i * 80)
    );
  };
  img.src = imgSrc;
}

function buildLegend() {
  const wrap = document.getElementById('lineLegend');
  wrap.innerHTML = '';
  PALM_LINES.forEach(l => {
    const chip = document.createElement('div');
    chip.className = 'legend-chip on';
    chip.dataset.id = l.id;
    chip.innerHTML = `<div class="legend-dot"></div>${l.icon} ${l.name}`;
    chip.addEventListener('click', () => {
      lineVis[l.id] = !lineVis[l.id];
      chip.classList.toggle('on', lineVis[l.id]);
      redrawCanvas();
    });
    wrap.appendChild(chip);
  });
}

// ===================== SCORES =====================
const SCORE_ITEMS = [
  { id:'life',    emoji:'❤️', label:'生命力' },
  { id:'heart',   emoji:'💕', label:'恋愛運' },
  { id:'money',   emoji:'💰', label:'金運' },
  { id:'fate',    emoji:'⭐', label:'仕事運' },
  { id:'charm',   emoji:'🌹', label:'モテ度' },
  { id:'popular', emoji:'✨', label:'人気運' },
  { id:'head',    emoji:'🧠', label:'知性' },
  { id:'marriage',emoji:'💍', label:'結婚運' },
];

function buildScores() {
  const grid = document.getElementById('scoresGrid');
  grid.innerHTML = '';
  SCORE_ITEMS.forEach((item, i) => {
    const s = scores[item.id] || 75;
    const el = document.createElement('div');
    el.className = 'score-card stagger-in';
    el.style.animationDelay = (i * 0.05) + 's';
    el.innerHTML = `
      <span class="score-emoji">${item.emoji}</span>
      <div class="score-label">${item.label}</div>
      <div class="score-value">${s}<span>点</span></div>
      <div class="score-bar"><div class="score-fill" data-w="${s}"></div></div>
    `;
    grid.appendChild(el);
  });
}

// ===================== READINGS =====================
function buildReadings() {
  const list = document.getElementById('readingsGrid');
  list.innerHTML = '';
  PALM_LINES.forEach((l, i) => {
    const el = document.createElement('div');
    el.className = 'reading-row stagger-in';
    el.style.animationDelay = (i * 0.05) + 's';
    el.innerHTML = `
      <div class="reading-icon-wrap">${l.icon}</div>
      <div class="reading-body">
        <div class="reading-name">${l.name}</div>
        <div class="reading-name-en">${l.nameEn}</div>
        <div class="reading-text">${readingTexts[l.id]}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

// ===================== PERSONALITY =====================
function buildPersonality() {
  const el = document.getElementById('personalityText');
  const txt = PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)];
  el.innerHTML = txt.split('\n\n').map(p => `<p>${p}</p>`).join('');
}

// ===================== FUTURE =====================
function buildFuture() {
  const list = document.getElementById('futureTimeline');
  list.innerHTML = '';
  FUTURES.forEach((f, i) => {
    const el = document.createElement('div');
    el.className = 'future-card stagger-in';
    el.style.animationDelay = (i * 0.07) + 's';
    el.innerHTML = `
      <div class="future-badge">
        <span class="future-badge-label">今後</span>
        <span class="future-badge-val">${f.period}</span>
        <span class="future-badge-label">${f.label}</span>
      </div>
      <div class="future-body">
        <h4>${f.title}</h4>
        <p>${f.text}</p>
      </div>
    `;
    list.appendChild(el);
  });
}

// ===================== DETAIL =====================
function buildDetailOptions() {
  const grid = document.getElementById('detailOptions');
  grid.innerHTML = '';
  PALM_LINES.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'detail-chip';
    btn.dataset.id = l.id;
    btn.innerHTML = `${l.icon} ${l.name}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.detail-chip').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      showDeepReading(l.id);
    });
    grid.appendChild(btn);
  });
}

function showDeepReading(id) {
  const line = PALM_LINES.find(l => l.id === id);
  const data = READINGS[id];
  const score = scores[id] || 80;
  const stars = Math.round(score / 20);
  const starStr = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  const labels = ['やや弱め','普通','やや強め','強い','非常に強い'];
  const label = labels[Math.min(stars - 1, 4)];

  const el = document.getElementById('deepReading');
  el.innerHTML = `
    <div class="deep-card">
      <div class="deep-top">
        <div class="deep-top-icon">${line.icon}</div>
        <div>
          <div class="deep-top-title">${data.deep.title}</div>
          <div class="deep-top-en">${line.nameEn} — 詳細分析</div>
        </div>
      </div>
      <div class="deep-body">
        <div class="deep-score-row">
          <div class="deep-score-num">${score}<span>点</span></div>
          <div>
            <div class="deep-stars">${starStr}</div>
            <div class="deep-rating-label">${label}</div>
          </div>
        </div>
        <div class="deep-section-label">詳細分析</div>
        <div class="deep-text">${data.deep.content.map(p => `<p>${p}</p>`).join('')}</div>
        <div class="advice-block">
          <div class="deep-section-label">あなたへのアドバイス</div>
          ${data.deep.advice.map(a => `<div class="advice-item"><div class="advice-dot"></div><span>${a}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `;

  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===================== TABS =====================
function setupTabs() {
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(tabName) {
  currentTab = tabName;

  // Update tab buttons
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    const isActive = panel.id === 'tab' + tabName;
    panel.classList.toggle('active', isActive);
  });

  // Trigger score bar animation when switching to Scores tab
  if (tabName === 'Scores') {
    setTimeout(() => {
      document.querySelectorAll('.score-fill').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 100);
  }
}

// ===================== RESET =====================
function resetToUpload() {
  const uploadScreen = document.getElementById('screenUpload');
  const resultScreen = document.getElementById('screenResult');

  resultScreen.classList.remove('active');
  uploadScreen.classList.add('active');

  document.getElementById('tabBar').style.display = 'none';
  document.getElementById('retakeBtn').style.opacity = '0';
  document.getElementById('retakeBtn').style.pointerEvents = 'none';
  document.getElementById('fileInput').value = '';
  document.getElementById('deepReading').innerHTML = '';
  document.querySelectorAll('.score-fill').forEach(el => el.style.width = '0');
  document.querySelectorAll('.detail-chip').forEach(el => el.classList.remove('selected'));

  imgSrc = null;
  lineVis = {};
  scores = {};
  readingTexts = {};
  detectedLandmarkPaths = null;
}

// ===================== LOADING =====================
function showLoading() { document.getElementById('loadingScreen').classList.add('active'); }
function hideLoading() { document.getElementById('loadingScreen').classList.remove('active'); }
