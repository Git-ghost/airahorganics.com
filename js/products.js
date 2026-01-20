const products = [
    // ===== FACE =====
    {
        id: 1,
        name: "Serum me Kolagjen Natyral – 30ml",
        price: 30.00,
        size: "30ml",
        image: "assets/images/serummekolagjen.jpg",
        category: "face",
        description: "Serum rigjenerues me kolagjen natyral dhe vajra të pasur bimorë, i formuluar për të përmirësuar elasticitetin, për të zbutur linjat e imëta dhe për të përforcuar strukturën e lëkurës. Ideale për lëkurë të thatë, të lodhur ose me shenja të hershme plakjeje.",
        ingredients: [
            "Kolagjen natyral – përmirëson tonin dhe densitetin e lëkurës, ndihmon në rikthimin e elasticitetit dhe reduktimin e rrudhave",
            "Vaj i farës së zezë (Nigella Sativa) – vepron si antioksidant dhe qetësues, me veti mbrojtëse dhe balancuese për lëkurën",
            "Vaj shafrani – pasuron lëkurën me acide yndyrore esenciale, rrit butësinë dhe ndihmon në përmirësimin e tonit të lëkurës"
        ],
        actions: [
            "Rigjeneron dhe tonifikon lëkurën",
            "Rrit elasticitetin dhe ndjesinë e qëndrueshmërisë",
            "Përmirëson teksturën dhe pamjen e përgjithshme të lëkurës",
            "Ofron hidratim të qëndrueshëm pa e yndyrosur lëkurën"
        ],
        usage: "Aplikohet në lëkurë të pastër, në mëngjes dhe/ose në mbrëmje. Masazhohet butësisht në fytyrë dhe qafë derisa të përthithet plotësisht. Përdoret si hap i parë në rutinën e kujdesit, përpara kremit hidratues."
    },
    {
        id: 2,
        name: "Krem i bukurisë Antike Rigjenerues – 30ml",
        price: 30.00,
        size: "30ml",
        image: "assets/images/kremibukuriseantike.jpg",
        category: "face",
        description: "Formulë e pasur me përbërës natyralë me veti të fuqishme rigjeneruese, ushqyese dhe mbrojtëse. I krijuar për të rikthyer balancën, elasticitetin dhe pamjen e shëndetshme të lëkurës, ky krem është ideal për lëkurë të thatë, të ndjeshme, të irrituar apo me shenja të lodhjes.",
        ingredients: [
            "Dyll blete i papërpunuar – formon një barrierë mbrojtëse natyrale pa bllokuar poret, mban lagështinë dhe qetëson irritimet",
            "Propolis dhe polen blete – veprojnë si përbërës antibakterialë dhe antiinflamatorë, duke përshpejtuar rigjenerimin e qelizave të dëmtuara",
            "Mjaltë natyral – hidratues i fuqishëm, pasuron lëkurën me enzima dhe antioksidantë, duke ndihmon në zbutjen dhe rigjenerimin e saj"
        ],
        actions: [
            "Rigjeneron shtresën e jashtme të lëkurës",
            "Redukton thatësinë, ndjeshmërinë dhe irritimet",
            "Zbut dhe ushqen në thellësi pa e rënduar lëkurën",
            "Jep ndjesi komforti dhe qëndrueshmëri gjatë gjithë ditës"
        ],
        usage: "Aplikohet në mbrëmje në fytyrë të pastër. Masazhohet me lëvizje rrethore deri në përthithje të plotë. Mund të përdoret edhe si maskë nate për një efekt të thelluar rigjenerues."
    },
    {
        id: 3,
        name: "Krem Mbrojtës nga Dielli SPF 40-50 – 30ml",
        price: 20.00,
        size: "30ml",
        image: "assets/images/kremmbrojtesngadielli.jpg",
        category: "face",
        description: "Krem natyral për mbrojtje të lartë nga dielli, me faktor fizik mbrojtës (oksid zinku) dhe përbërës bimorë që ushqejnë dhe zbutin lëkurën. Formulë e sigurt, pa kimikate të dëmshme, e përshtatshme për përdorim të përditshëm dhe për çdo lloj lëkure, përfshirë edhe atë të ndjeshmen.",
        ingredients: [
            "Oksid zinku – faktor fizik që pasqyron rrezet UVA dhe UVB, duke ofruar mbrojtje të menjëhershme pas aplikimit",
            "Vaj karrote – i pasur me beta-karoten dhe antioksidantë, ndihmon në mbrojtjen dhe rigjenerimin e lëkurës",
            "Vaj bajame – zbut dhe hidraton thellë",
            "Vaj kokosi – ushqen dhe forcon barrierën natyrore të lëkurës",
            "Ekstrakt kamomili – qetëson dhe redukton skuqjet",
            "Vitamina E – antioksidant që mbron qelizat nga dëmtimet oksidative"
        ],
        actions: [
            "Mbrojtje e lartë dhe e menjëhershme nga rrezet UVA/UVB",
            "Hidratim dhe ushqim i lëkurës gjatë gjithë ditës",
            "Ndihmon në parandalimin e plakjes së parakohshme të shkaktuar nga dielli",
            "E butë dhe e sigurt edhe për lëkurë të ndjeshme"
        ],
        usage: "Aplikohet në lëkurë të pastër, para ekspozimit në diell. Për efekt maksimal, rinovo aplikimin çdo 2-3 orë ose pas djersitjes dhe kontaktit me ujë."
    },
    {
        id: 4,
        name: "Serum me Acid Hialuronik & AHA – 30ml",
        price: 30.00,
        size: "30ml",
        image: "assets/images/category4.jpg",
        category: "face",
        description: "Serum hidratues dhe eksfoliues i formuluar për të përmirësuar strukturën e lëkurës, uniformuar tonin dhe rikthyer shkëlqimin natyral. Kombinimi i acidit hialuronik me AHA vepron në thellësi për të ruajtur lagështinë, stimuluar rigjenerimin qelizor dhe zbutur vijat e imëta, ndërsa lavanda dhe kamomili ofrojnë qetësim dhe mbrojtje.",
        ingredients: [
            "Acid hialuronik – hidraton intensivisht dhe ruan lagështinë në lëkurë",
            "AHA (Acidet Alfa-Hidroksi) – eksfolim i butë që ndihmon në zbutjen e teksturës së lëkurës dhe përmirësimin e tonit",
            "Ekstrakt lavande – qetëson dhe ka veti antibakteriale natyrore",
            "Ekstrakt kamomili – redukton irritimet dhe skuqjet, duke përforcuar barrierën natyrore të lëkurës"
        ],
        actions: [
            "Hidratim i thellë dhe i qëndrueshëm",
            "Përmirësim i teksturës dhe uniformim i tonit të lëkurës",
            "Zbutje e vijave të imëta dhe përmirësim i elasticitetit",
            "Qetësim i lëkurës së ndjeshme dhe reduktim i skuqjes"
        ],
        usage: "Aplikohet 3-4 pika në lëkurë të pastër, në mëngjes ose mbrëmje, para kremit hidratues."
    },
    {
        id: 5,
        name: "Krem Anti–Rrudhë me Acid Hialuronik – 30ml",
        price: 20.00,
        size: "30ml",
        image: "assets/images/kremantirrudhemeacidhialuronik.jpg",
        category: "face",
        description: "Një formulë e avancuar anti–aging me acid hialuronik, e pasuruar me vaj bajame, vitaminë E, vaj jojoba dhe vaj sherbele (sage oil). Ky krem hidraton në thellësi, redukton dukshëm rrudhat dhe shenjat e plakjes, duke rikthyer elasticitetin dhe butësinë e lëkurës.",
        ingredients: [
            "Acid Hialuronik – hidratim i thellë, mbush rrudhat dhe rikthien volum natyral",
            "Vaj Bajame & Jojoba – ushqejnë, zbusin dhe rigjenerojnë lëkurën",
            "Vitaminë E – antioksidant i fuqishëm, lufton radikalet e lira dhe plakjen e parakohshme",
            "Vaj Sherbele – veprim tonifikues, përmirëson elasticitetin dhe ekuilibrin e lëkurës"
        ],
        actions: [
            "Redukton rrudhat dhe linjat e imëta",
            "Rivendos elasticitetin dhe butësinë e lëkurës",
            "Ofron hidratim të thellë dhe mbrojtje antioksidante",
            "I përshtatshëm për përdorim të përditshëm",
            "Për lëkurë të freskët, të shëndetshme dhe me shkëlqim natyral"
        ],
        usage: "Apliko në fytyrë dhe qafë, në lëkurë të pastër, mëngjes dhe mbrëmje. Masazho butësisht deri në përthithje të plotë."
    },
    {
        id: 6,
        name: "Krem Kundër Akneve me Tea Tree & Vaj Farash Qershie – 30ml",
        price: 15.00,
        size: "30ml",
        image: "assets/images/kremkunderaknevemeteatreedheqershie.jpg",
        category: "face",
        description: "Krem i lehtë dhe efektiv, i formuluar posaçërisht për lëkurë me akne. I pasur me vaj tea tree, vaj farash qershie dhe vitaminë E, ky krem vepron në mënyrë natyrale për të reduktuar papastërtitë, qetësuar irritimet dhe për të balancuar yndyrën e lëkurës.",
        ingredients: [
            "Vaj Tea Tree – veprim antibakterial dhe antiseptik, ndihmon në reduktimin e akneve dhe parandalon daljen e tyre të re",
            "Vaj Farash Qershie – ushqen lëkurën, pasuron me acide yndyrore esenciale dhe rigjeneron qelizat",
            "Vitaminë E – antioksidant i fuqishëm, qetëson irritimet dhe ndihmon në shërimin e shenjave",
            "Vaj Sherbele – veprim tonifikues, përmirëson elasticitetin dhe ekuilibrin e lëkurës"
        ],
        actions: [
            "Redukton aknet dhe papastërtitë",
            "Qetëson skuqjet dhe inflamacionin",
            "Balancion prodhimin e yndyrës",
            "Ndihmon në rigjenerimin e lëkurës dhe zbeh shenjat pas akneve"
        ],
        usage: "Apliko krem në zonat me akne, në lëkurë të pastër, 2 herë në ditë (mëngjes dhe mbrëmje)."
    },
    {
        id: 7,
        name: "Serum për Zonën e Syve me Ekstrakt Kafeje & Kastraveci – 10ml",
        price: 12.00,
        size: "10ml",
        image: "assets/images/serumperzonenesyvemeekstraktkafeje.jpg",
        category: "face",
        description: "Ky serum i lehtë është formuluar posaçërisht për lëkurën delikate rreth syve. Përbërja e pasur me ekstrakt kafeje, vaj bajame, vitaminë E, ekstrakt kastraveci dhe kamomil vepron në mënyrë të shumëanshme për të reduktuar qeskat, rrudhat e mimikës dhe rrathët e zinj. Rezultati: sy më të freskët, më të ndritshëm dhe një pamje e pushuar.",
        ingredients: [
            "Ekstrakt Kafeje – stimulun qarkullimin, redukton qeskat dhe fryrjet",
            "Kastravec – efekt freskues dhe zbardhues, ndihmon kundër rrathëve të zinj",
            "Kamomil – qetëson dhe zbut lëkurën e irrituar",
            "Vaj Bajame – ushqen, hidratoi dhe e mban lëkurën të butë",
            "Vitaminë E – antioksidant i fuqishëm, parandalon plakjen e parakohshme"
        ],
        actions: [
            "Zvogëlon qeskat dhe rrathët e zinj",
            "Redukton rrudhat e imëta dhe shenjat e lodhjes",
            "Forcon dhe tonifikon lëkurën rreth syve",
            "Jep ndriçim dhe freski të menjëhershme"
        ],
        usage: "Apliko disa pika serumi në zonën poshtë dhe rreth syve, mëngjes dhe mbrëmje, duke masazhuar lehtë me majat e gishtave derisa të përthithet."
    },
    {
        id: 18,
        name: "Larës Shkumë me Acid Hialuronik – 250ml",
        price: 20.00,
        size: "250ml",
        image: "assets/images/larësshkumëmeacidhialuronik.jpg",
        category: "wash",
        description: "Larës fytyre i butë në formë shkumë, i pasur me acid hialuronik dhe vitamina ushqyese. Pastron në thellësi duke hequr papastërtitë dhe yndyrën e tepërt, pa e tharë lëkurën dhe pa shkaktuar irritim. Ideale për çdo lloj lëkure, edhe për lëkurë të ndjeshme.",
        ingredients: [
            "Acid Hialuronik – hidraton dhe ruan lagështinë",
            "Vitamina ushqyese – për ushqim dhe rigjenerim",
            "Përbërës pastrues të butë – heqin papastërtitë pa irritim"
        ],
        actions: [
            "Pastron poret dhe heq papastërtitë",
            "Nuk e than dhe nuk e irriton lëkurën",
            "Hidraton falë acidit hialuronik",
            "Jep ndjesi freskie dhe butësie pas përdorimit"
        ],
        usage: "Apliko 1–2 pompime në fytyrë të lagur, masazho lehtë me lëvizje rrethore dhe shpëlaje me ujë të vakët. Përdoret mëngjes dhe mbrëmje."
    },
    {
        id: 19,
        name: "Sapun Natyral me Tea Tree – Kundër Akneve",
        price: 7.00,
        size: "100gr",
        image: "assets/images/sapunnatyralmeteatree.jpg",
        category: "wash",
        description: "Sapun natyral i formuluar me vaj esencial Tea Tree, i njohur për vetitë e tij antibakteriale dhe qetësuese. Pastron lëkurën në thellësi, ndihmon në reduktimin e akneve dhe parandalon daljen e tyre pa e tharë tepër lëkurën.",
        ingredients: [
            "Vaj esencial Tea Tree – antibakterial natyror",
            "Baza sapuni natyrale – pastrim i butë",
            "Vajra bimorë ushqyes"
        ],
        actions: [
            "Pastron butësisht dhe në thellësi",
            "Lufton bakteret që shkaktojnë akne",
            "Qetëson irritimet dhe skuqjet",
            "Ndihmon në parandalimin e akneve të reja"
        ],
        usage: "Shkumoni sapunin me ujë dhe aplikojeni në fytyrë ose trup, lëreni disa sekonda dhe shpëlajeni mirë. Mund të përdoret çdo ditë."
    },
    {
        id: 20,
        name: "Sapun Natyral me Mjaltë, Tërshërë & Turmeric",
        price: 10.00,
        size: "100gr",
        image: "assets/images/sapunnatyralmemjalttershere.jpg",
        category: "wash",
        description: "Sapun i butë dhe 100% natyral, i pasur me mjaltë ushqyes, tërshërë qetësuese dhe turmeric (shafran i Indisë) me veti antioksiduese. Formuluar për çdo lloj lëkure, ky sapun pastron butësisht e ushqen.",
        ingredients: [
            "Mjaltë – hidraton dhe zbut lëkurën",
            "Tërshërë – qetëson irritimet dhe skuqjet",
            "Turmeric – barazon tonin e lëkurës dhe sjell shkëlqim"
        ],
        actions: [
            "Pastron butësisht, pa tharje dhe pa irritim",
            "Ushqen dhe ndriçon lëkurën në mënyrë të butë",
            "I përshtatshëm për përdorim të përditshëm dhe çdo tip lëkure"
        ],
        usage: "Përdoreni në fytyrë ose trup. Shkumoni me ujë, masazhoni lehtë dhe shpëlajeni mirë."
    },
    {
        id: 21,
        name: "Sapun Natyral me Glicerinë, Mjaltë, Turmeric & Lavandë",
        price: 10.00,
        size: "100gr",
        image: "assets/images/category21.jpg",
        category: "wash",
        description: "Sapun artizanal i butë me bazë glicerine natyrale, i pasuruar me mjaltë ushqyes, turmeric rigjenerues dhe vaj esencial lavande qetësues. I pasur me aromë të ëmbël lulesh dhe mjalti.",
        ingredients: [
            "Glicerinë natyrale – ruan lagështinë e lëkurës",
            "Mjaltë – ushqen dhe zbut lëkurën",
            "Turmeric – ndihmon në rigjenerim dhe shkëlqim natyral",
            "Lavandë – qetëson dhe relakson lëkurën"
        ],
        actions: [
            "Pastron delikatisht duke hidratuar dhe relaksuar lëkurën",
            "Ndjesi këndshme freskie me notat e mjaltit dhe lavandës",
            "I përshtatshëm për përdorim të përditshëm"
        ],
        usage: "Shkumoni me ujë, aplikoni në fytyrë ose trup dhe shpëlajeni. I përshtatshëm për çdo lloj lëkure."
    },
    {
        id: 22,
        name: "Sapun Intim Natyral me Aromë Misk Tahara",
        price: 20.00,
        size: "100gr",
        image: "assets/images/category22.jpg",
        category: "wash",
        description: "Sapun i butë intim me bazë natyrale, i formuluar për pastrim delikat dhe respektim të pH-së natyrale. Jep ndjesi pastërtie dhe freskie gjatë gjithë ditës, pa tharë ose irrituar lëkurën.",
        ingredients: [
            "Përbërës pastrues natyralë të butë",
            "Misk Tahara – aromë elegante dhe pastërtie",
            "Përbërës balancues të pH-së"
        ],
        actions: [
            "Pastrim i butë dhe natyral",
            "Mbron dhe respekton pH-në intime",
            "Jep ndjesi pastërtie që zgjat",
            "Eleganca e aromës Misk Tahara"
        ],
        usage: "Aplikohet gjatë larjes së përditshme, shkumoni butësisht dhe shpëlani me ujë të vakët."
    },
    {
        id: 31,
        name: "Maskë natyrale me argjile jeshile (green clay) dhe mjaltë",
        price: 15.00,
        size: "100gr",
        image: "assets/images/category31.jpg",
        category: "face",
        description: "E krijuar posaçërisht për lëkurë të yndyrshme dhe me tendencë për akne. Pastron thellësisht poret, kontrollon yndyrën e tepërt dhe ndihmon në reduktimin e puçrrave.",
        ingredients: [
            "Argjilë jeshile – pastron dhe dezinfekton poret",
            "Mjaltë – ushqen dhe rigjeneron lëkurën",
            "Ekstrakte bimore balancuese"
        ],
        actions: [
            "Pastron thellësisht dhe kontrollon yndyrën",
            "Parandalon shfaqjen e akneve",
            "Qetëson irritimet dhe skuqjet"
        ],
        usage: "Apliko një shtresë të hollë mbi fytyrë të pastër, lëre të thahet 10–15 minuta dhe shpëlaje me ujë të vakët. Përdor 1–2 herë në javë."
    },
    {
        id: 32,
        name: "Maskë Zbardhuese & Ushqyese me Mjaltë dhe Bime Aziatike",
        price: 20.00,
        size: "100gr",
        image: "assets/images/category32.jpg",
        category: "face",
        description: "Maskë natyrale e krijuar për të ushqyer, rigjeneruar dhe zbardhur lëkurën në mënyrë të butë. E pasur me mjaltë dhe ekstrakte bimesh aziatike.",
        ingredients: [
            "Mjaltë – ushqim dhe rigjenerim",
            "Bimë aziatike – veti zbardhuese dhe uniformuese",
            "Vitamina dhe minerale natyrale"
        ],
        actions: [
            "Ndihmon në zbardhjen dhe uniformimin e tonit të lëkurës",
            "Ushqen thellë dhe rikthen shkëlqimin",
            "Qetëson dhe lë lëkurën të butë"
        ],
        usage: "Apliko një shtresë të hollë mbi fytyrë të pastruar, lëre të veprojë 10–15 minuta dhe shpëlaje me ujë të vakët. Përdor 1–2 herë në javë."
    },
    {
        id: 33,
        name: "Pudra Nila Natyrale – Pastrim & Zbardhje",
        price: 20.00,
        size: "100gr",
        image: "assets/images/category33.jpg",
        category: "face",
        description: "Pudër natyrale për pastrimin dhe zbardhjen e lëkurës, e pasur me përbërës bimorë që veprojnë butësisht për të reduktuar njollat dhe për të rigjeneruar lëkurën.",
        ingredients: [
            "Pudër Nila natyrale – veti zbardhuese dhe pastruese",
            "Ekstrakte bimore rigjeneruese",
            "Minerale natyrale"
        ],
        actions: [
            "Ndihmon në reduktimin e njollave dhe hiperpigmentimit",
            "Pastron dhe rigjeneron lëkurën në mënyrë natyrale",
            "Lë lëkurën të ndriçuar dhe të barabartë"
        ],
        usage: "Përziej 1 lugë të vogël pudër me 2 lugë të mëdha kos. Apliko mbi fytyrë të pastër, lëre 10–15 minuta. Shpëlaje me peshqir të njomë. Përdor 2–3 herë në javë."
    },
    {
        id: 34,
        name: "Skrab Fytyre Natyral me Lavandë & Tërshërë",
        price: 15.00,
        size: "150ml",
        image: "assets/images/category34.jpg",
        category: "face",
        description: "Skrab i butë dhe ushqyes për fytyrën, i pasuruar me lavandë, vaj bajame, gjalpë shea, vaj kokosi, fara bimesh dhe tërshërë. Pastron butësisht poret dhe heq qelizat e vdekura.",
        ingredients: [
            "Lavandë – qetësuese dhe antibakteriale",
            "Tërshërë – eksfolim i butë dhe qetësim",
            "Gjalpë shea & Vaj kokosi – ushqim intensiv",
            "Fara bimesh – eksfolim natyral"
        ],
        actions: [
            "Eksfolion dhe pastron butësisht lëkurën",
            "Ushqen dhe rigjeneron thellë",
            "Qetëson irritimet dhe skuqjet"
        ],
        usage: "Apliko një sasi të vogël në fytyrë të lagur, masazho me lëvizje rrethore 1–2 minuta dhe shpëlaje me ujë të vakët. Përdor 2–3 herë në javë."
    },
    {
        id: 37,
        name: "Lip Balm Natyral – Jasemin & Lavandë",
        price: 4.00,
        size: "10ml",
        image: "assets/images/category29.jpg",
        category: "face",
        description: "Lip balm natyral për buzë të butë, të hidratuara dhe me aromë të këndshme. I pasur me vajra ushqyes për të mbrojtur buzët në çdo stinë.",
        ingredients: [
            "Dyll blete – mbrojtje natyrale",
            "Vajra bimorë ushqyes",
            "Jasemin & Lavandë – aromë qetësuese"
        ],
        actions: [
            "Hidraton dhe mbron buzët e thata",
            "Ushqen dhe rigjeneron buzët e ndjeshme",
            "Jep ndjesi butësie dhe komforti"
        ],
        usage: "Apliko në buzët e pastra sipas nevojës, më shpesh gjatë ditës ose para gjumit."
    },
    {
        id: 38,
        name: "Serum Ushqyes me Vitaminat A, C & E",
        price: 25.00,
        size: "30ml",
        image: "assets/images/category38.jpg",
        category: "face",
        description: "Serum i pasur me vitamina A, C dhe E, i krijuar për të ushqyer, rigjeneruar dhe mbrojtur lëkurën nga dëmtimet e përditshme dhe plakja e parakohshme.",
        ingredients: [
            "Vitamina A – rigjenerim qelizor",
            "Vitamina C – ndriçim dhe antioksidant",
            "Vitamina E – mbrojtje dhe hidratim"
        ],
        actions: [
            "Ushqen dhe rigjeneron lëkurën",
            "Parandalon shfaqjen e rrudhave",
            "Mbështet prodhimin e kolagjenit"
        ],
        usage: "Apliko 2–3 pika mbi fytyrë të pastër, para kremit hidratues, çdo mëngjes dhe mbrëmje. Masazho butësisht."
    },

    // ===== HAIR =====
    {
        id: 8,
        name: "Shampo Natyrale me Rozmarinë & Hithër – 350ml",
        price: 28.00,
        size: "350ml",
        image: "assets/images/shamponatyralemerozmarinedhehither.jpg",
        category: "hair",
        description: "Shampo natyrale e formuluar me ekstrakte të rozmarinës dhe hithrës, e krijuar për të stimuluar rritjen e flokëve dhe për të forcuar rrënjët. Pastron butësisht skalpin, parandalon rënien e flokëve dhe rrit volumin natyral.",
        ingredients: [
            "Ekstrakt Rozmarine – stimulon qarkullimin në skalp dhe nxit rritjen",
            "Ekstrakt Hithre – kontrollon yndyrën dhe forcon folikulat",
            "Pro-Vitamina B5 – hidraton dhe i jep shkëlqim flokut"
        ],
        actions: [
            "Stimulon rritjen e flokëve të rinj",
            "Forcon rrënjët dhe parandalon rënien",
            "Jep volum dhe shkëlqim natyral"
        ],
        usage: "Apliko në flokë të lagur, masazho butësisht skalpin dhe shpëlaj me ujë të bollshëm. Përsërite sipas nevojës."
    },
    {
        id: 9,
        name: "Shampo Qetësuese për Ekzemë & Psoriazë – 500ml",
        price: 30.00,
        size: "500ml",
        image: "assets/images/shampoqetesueseperekzemedhepsoriaze.jpg",
        category: "hair",
        description: "Shampo speciale e krijuar për skalp shumë të ndjeshëm, të irrituar apo me probleme si ekzema dhe psoriaza. Pastron me shumë delikatesë, qetëson kruarjet dhe hidraton lëkurën e kokës.",
        ingredients: [
            "Ekstrakt Aloe Vera – qetëson irritimet dhe hidraton",
            "Vajra bimore qetësuese – reduktojnë skuqjen dhe kruarjen",
            "Përbërës ushqyes natyralë – për mbrojtjen e skalpit"
        ],
        actions: [
            "Qetëson kruarjet dhe irritimet e skalpit",
            "Pastron butësisht pa tharë lëkurën",
            "Hidraton dhe mbron lëkurën e ndjeshme"
        ],
        usage: "Apliko në flokë të lagur, lëre të veprojë 2-3 minuta për efekt maksimal qetësues, pastaj shpëlaje mirë."
    },
    {
        id: 10,
        name: "Shampo Premium Kundër Zbokthit – Tea Tree Oil – 500ml",
        price: 30.00,
        size: "500ml",
        image: "assets/images/shampopremiumkunderzbokthit.jpg",
        category: "hair",
        description: "Shampo e fuqishme dhe efektive kundër zbokthit, e pasuruar me vaj esencial Tea Tree. Lufton në mënyrë natyrale kërpudhat që shkaktojnë zbokthin, balancon skalpin dhe parandalon rikthimin e tij.",
        ingredients: [
            "Vaj Tea Tree – veti të fuqishme antifungale dhe antibakteriale",
            "Ekstrakt Mentoli – freskon skalpin dhe redukton kruarjen",
            "Vajra esencialë pastrues"
        ],
        actions: [
            "Eliminon zbokthin që në përdorimet e para",
            "Parandalon rikthimin e zbokthit",
            "Freskon dhe balancon skalpin"
        ],
        usage: "Apliko në flokë të lagur, masazho mirë skalpin dhe shpëlaje. Përdor rregullisht për rezultate afatgjata."
    },
    {
        id: 11,
        name: "Shampo me Argjilë për Flokë të Yndyrshëm – 250ml",
        price: 17.00,
        size: "250ml",
        image: "assets/images/shampomeargjileperfloketeyndyrshem.jpg",
        category: "hair",
        description: "Shampo natyrale e pasur me argjilë, e krijuar për të pastruar thellësisht skalpin dhe flokët, duke larguar yndyrën e tepërt pa e tharë lëkurën e kokës. Ideale për flokë që humbasin volum gjatë ditës.",
        ingredients: [
            "Argjilë natyrale – thith yndyrën e tepërt dhe papastërtitë",
            "Ekstrakte bimore zbutëse – qetësojnë skalpin",
            "Vajra ushqyes të lehtë – për shkëlqim natyral"
        ],
        actions: [
            "Pastrim i thellë dhe reduktim i yndyrës",
            "Jep volum dhe freski natyrale",
            "I përshtatshëm për përdorim të përditshëm"
        ],
        usage: "Apliko në flokë të lagur, masazho butësisht skalpin dhe shpëlaj. Përsërite për pastrim maksimal nëse është e nevojshme."
    },
    {
        id: 39,
        name: "Shampo me Argjilë për Flokë të Yndyrshëm – 500ml",
        price: 30.00,
        size: "500ml",
        image: "assets/images/shampomeargjileperfloketeyndyrshem.jpg",
        category: "hair",
        description: "Shampo natyrale e pasur me argjilë, e krijuar për të pastruar thellësisht skalpin dhe flokët, duke larguar yndyrën e tepërt pa e tharë lëkurën e kokës. Ideale për flokë që humbasin volum gjatë ditës.",
        ingredients: [
            "Argjilë natyrale – thith yndyrën e tepërt dhe papastërtitë",
            "Ekstrakte bimore zbutëse – qetësojnë skalpin",
            "Vajra ushqyes të lehtë – për shkëlqim natyral"
        ],
        actions: [
            "Pastrim i thellë dhe reduktim i yndyrës",
            "Jep volum dhe freski natyrale",
            "I përshtatshëm për përdorim të përditshëm"
        ],
        usage: "Apliko në flokë të lagur, masazho butësisht skalpin dhe shpëlaj. Përsërite për pastrim maksimal nëse është e nevojshme."
    },
    {
        id: 12,
        name: "Luxury Hair Oil – 100% Vajra Natyralë – 100ml",
        price: 35.00,
        size: "100ml",
        image: "assets/images/luxuthairoil.jpg",
        category: "hair",
        description: "Trajtim luksoz për flokët me një përzierje të 10 vajrave më të çmuar bimorë. Ky vaj ushqen në thellësi, riparon majat e dëmtuara dhe i jep flokëve një butësi dhe shkëlqim të jashtëzakonshëm.",
        ingredients: [
            "Vaj Arganti – riparon dhe ushqen",
            "Vaj Jojoba – balancon dhe shton shkëlqimin",
            "Vaj Bajame & Kokosi – zbutje intensive e fijeve"
        ],
        actions: [
            "Ushqen dhe riparon flokët e dëmtuar",
            "Mbron nga nxehtësia dhe faktorët e jashtëm",
            "Eliminon elektrizimin dhe shton shkëlqimin"
        ],
        usage: "Apliko disa pika në flokë të lagur ose të thatë, nga gjatësia drejt majave. Nuk ka nevojë për shpëlarje."
    },
    {
        id: 13,
        name: "Vaj Rigjenerues Premium – 20+ Vajra Bimore – 100ml",
        price: 20.00,
        size: "100ml",
        image: "assets/images/vajrigjieneruespremiumperfloke.jpg",
        category: "hair",
        description: "Vaji trajtues i pasur me mbi 20 lloje vajrash bimore është krijuar për rikthimin e shëndetit të flokëve dhe skalpit. Ky eliksir ushqen rrënjët, stimulon rritjen dhe ndihmon në problemet e skalpit.",
        ingredients: [
            "Mbi 20 vajra bimore të zgjedhur",
            "Ekstrakte bimore rigjeneruese",
            "Vitamina ushqyese për flokun"
        ],
        actions: [
            "Nxit rritjen e flokëve të rinj dhe forcon fijet",
            "Qetëson dhe ndihmon në reduktimin e dermatitit dhe ekzemës",
            "Ushqen thellë skalpin dhe flokët"
        ],
        usage: "Masazho një sasi të vogël në skalp dhe në gjatësi. Lëre të veprojë 3-8 orë, pastaj shpëlaj me shampo. Përdor 1-2 herë në javë."
    },
    {
        id: 14,
        name: "Seti Premium për Çdo Lloj Floku – Shampo + Maskë",
        price: 32.00,
        size: "Set",
        image: "assets/images/setipremiumpercdollojfloku.jpg",
        category: "hair",
        description: "I veçantë për flokë të thatë, të dekoruar dhe kaçurrel. Ky set ofron një ritual të plotë ushqimi dhe riparimi. Përbërësit natyralë dhe proteinat e mëndafshit rikthejnë shkëlqimin dhe forcën e flokëve.",
        ingredients: [
            "Proteina mëndafshi – forcojnë dhe mbrojnë fijen",
            "Vaj ulliri & Aloe vera – ushqim dhe hidratim",
            "Vaj kastori & Kokosi – riparim intensiv"
        ],
        actions: [
            "Forcon dhe mbron fijet e dobësuara",
            "Lehtëson krehjen dhe redukton këputjen",
            "Flokë të butë, të menaxhueshëm dhe të shëndetshëm"
        ],
        usage: "Lani flokët me shampon, shpëlajeni. Aplikoni maskën nga gjatësia drejt majave; lëreni 5-10 minuta si maskë ose 1-2 minuta si zbutës, pastaj shpëlajeni."
    },

    // ===== BODY =====
    {
        id: 23,
        name: "Balm Rigjenerues për Thembrat – 50gr",
        price: 20.00,
        size: "50gr",
        image: "assets/images/category23.jpg",
        category: "body",
        description: "Balm natyral i pasur me dyll blete dhe përzierje vajrash bimore si rozmarina dhe bajamja, i krijuar posaçërisht për kujdesin e thembrave të thata dhe të çara. Rigjeneron lëkurën dhe rikthen butësinë e humbur.",
        ingredients: [
            "Dyll blete – mbrojtje dhe izolim",
            "Vaj Rozmarine – qarkullim dhe rigjenerim",
            "Vaj Bajame – ushqim dhe zbutje"
        ],
        actions: [
            "Zbut dhe rigjeneron lëkurën e ashpër",
            "Ndihmon në shërimin e çarjeve",
            "Krijon shtresë mbrojtëse hidratuese"
        ],
        usage: "Apliko një shtresë të hollë në thembra të pastra, masazho derisa të përthithet. Përdor çdo mbrëmje."
    },
    {
        id: 24,
        name: "Skrab Trupi me Lavandë, Tërshërë & Vajra – 150gr",
        price: 15.00,
        size: "150gr",
        image: "assets/images/category24.jpg",
        category: "body",
        description: "Skrab natyral i formuluar me lavandë relaksuese, tërshërë qetësuese, gjalpë shea dhe vaj kokosi. Pastron butësisht qelizat e vdekura dhe e lë lëkurën të hidratuar.",
        ingredients: [
            "Tërshërë – eksfolim i butë",
            "Vaj Kokosi & Gjalpë Shea – hidratim",
            "Fara lulesh – eksfolim natyral",
            "Lavandë – relaksim"
        ],
        actions: [
            "Heq qelizat e vdekura dhe pastron poret",
            "Ushqen dhe zbut lëkurën",
            "Ndihmon në rigjenerim dhe tonifikim"
        ],
        usage: "Apliko skrabin në lëkurë të lagur, masazho me lëvizje rrethore dhe shpëlaje me ujë të ngrohtë. Përdor 2–3 herë në javë."
    },
    {
        id: 25,
        name: "Skrab Natyral Kundër Celulitit – 150gr",
        price: 15.00,
        size: "150gr",
        image: "assets/images/category25.jpg",
        category: "body",
        description: "Skrab trupor i pasur me ekstrakt kafeje, kanellë dhe kripë Himalaje. Stimulon qarkullimin dhe përmirëson pamjen e zonave me celulit.",
        ingredients: [
            "Ekstrakt kafeje – stimulon qarkullimin",
            "Kanellë – ngroh dhe tonifikon",
            "Kripë Himalaje – pastrim i poret"
        ],
        actions: [
            "Ndihmon në reduktimin e celulitit",
            "Eksfolion dhe pastron thellësisht",
            "Lë lëkurën të fortë dhe të lëmuar"
        ],
        usage: "Apliko në zonat me celulit mbi lëkurë të lagur, masazho 5–10 minuta dhe shpëlaje. Përdor 2–3 herë në javë."
    },
    {
        id: 26,
        name: "Vaj Kundër Celulitit – 100ml",
        price: 20.00,
        size: "100ml",
        image: "assets/images/category26.jpg",
        category: "body",
        description: "Vaj i pasur natyral i formuluar me kanellë, avokado, ekstrakt kafeje dhe vaj kokosi. Tonifikon lëkurën dhe ndihmon në reduktimin e celulitit.",
        ingredients: [
            "Vaj Avokado – ushqim",
            "Ekstrakt kafeje – stimulon qarkullimin",
            "Kanellë – veti tonifikuese"
        ],
        actions: [
            "Stimulon qarkullimin dhe tonifikon",
            "Ndihmon në reduktimin e celulitit",
            "Depërton thellë për hidratim"
        ],
        usage: "Masazho vajin në zonat me celulit çdo ditë, mundësisht pas dushit. Përdor paralelisht me skrabin për rezultate më të mira."
    },
    {
        id: 27,
        name: "Vaj Natyral për Trupin – 100ml",
        price: 15.00,
        size: "100ml",
        image: "assets/images/category27.jpg",
        category: "body",
        description: "Vaj i butë i pasuruar me lavandë, vaj bajame, vaj jojoba, avokado dhe trëndafil. Hidraton në thellësi dhe i jep lëkurës butësi dhe shkëlqim.",
        ingredients: [
            "Vaj Jojoba & Bajame – ushqim intensiv",
            "Ekstrakt Trëndafili – veti rigjeneruese",
            "Vaj esencial Lavande – relaksim"
        ],
        actions: [
            "Hidraton dhe ushqen në thellësi",
            "Rigjeneron lëkurën e thatë",
            "Aromë relaksuese lavandë & trëndafil"
        ],
        usage: "Masazho një sasi të vogël në trup pas dushit ose sipas nevojës. Përdor çdo ditë."
    },
    {
        id: 28,
        name: "Serum Natyral për Qerpikët – 10ml",
        price: 10.00,
        size: "10ml",
        image: "assets/images/category28.jpg",
        category: "body",
        description: "Serum i butë për stimulimin dhe ushqimin e qerpikëve, i pasuruar me vaj kastori. Ndihmon në forcimin e qerpikëve ekzistues dhe stimulon rritjen.",
        ingredients: [
            "Vaj Kastori – pasur me acid ricinoleik",
            "Vitamina E – mbrojtje antioxidant",
            "Vajra bimorë ushqyes"
        ],
        actions: [
            "Forcon dhe ushqen qerpikët",
            "Stimulon rritjen e fijeve të reja",
            "Parandalon thyerjen e qerpikëve"
        ],
        usage: "Apliko një sasi të vogël në bazën e qerpikëve çdo natë pas pastrimit të fytyrës."
    },
    {
        id: 29,
        name: "Petal Touch – Krem Trupi Luksoz – 250ml",
        price: 30.00,
        size: "250ml",
        image: "assets/images/petaltouch.jpg",
        category: "body",
        description: "Krem trupi luksoz që e mbështjell lëkurën me butësi dhe aromë delikate lulesh. Formula me gardenia, vanilje dhe jasemin i jep lëkurës ndjesi mëndafshi.",
        ingredients: [
            "Ekstrakt Gardenie & Jasemini",
            "Vaj Vanilje – aromë elegante",
            "Gjalpë Shea & Vajra bimorë ushqyes"
        ],
        actions: [
            "Ushqen dhe zbut thellësisht",
            "Jep shkëlqim natyral dhe ndjesi mëndafshi",
            "Aromë elegante që zgjat"
        ],
        usage: "Apliko pas dushit në lëkurë të pastër dhe masazho derisa të përthithet plotësisht."
    },
    {
        id: 30,
        name: "Krem Natyral për Gjirin – 30gr",
        price: 20.00,
        size: "30gr",
        image: "assets/images/category30.jpg",
        category: "body",
        description: "Krem ushqyes dhe qetësues për gjirin, i pasuruar me dyll blete dhe kamomil. Formula natyrale pa aroma artificiale ushqen dhe mbron lëkurën e ndjeshme.",
        ingredients: [
            "Dyll blete – mbrojtje",
            "Ekstrakt Kamomili – qetëson irritimet",
            "Vitamina E – veti rigjeneruese"
        ],
        actions: [
            "Ushqen lëkurën e ndjeshme",
            "I sigurt për foshnjën – nuk ka nevojë për shpëlarje",
            "I sigurt gjatë shtatëzanisë dhe gjidhënies"
        ],
        usage: "Apliko një shtresë të hollë në gjirin e pastërt sipas nevojës. Masazho butësisht."
    },
    {
        id: 36,
        name: "Deodorant Natyral Pa Alumin & Toksina – 50ml",
        price: 14.00,
        size: "50ml",
        image: "assets/images/category36.jpg",
        category: "body",
        description: "Deodorant natyral pa alumin dhe pa parabene, respektues i funksionit natyral të gjëndrave limfatike. Ofron mbrojtje të gjatë kundër erës së pakëndshme.",
        ingredients: [
            "Pa alumin, pa parabene, pa toksina",
            "Minerale natyrale deodorant",
            "Vajra esencialë pastërtie"
        ],
        actions: [
            "Mbrojtje e sigurt pa bllokuar poret",
            "I sigurt për shtatzëna dhe fëmijë",
            "Freski e gjatë pa irritim"
        ],
        usage: "Apliko një shtresë të hollë në sqetulla mbi lëkurë të pastër dhe të dry. Ideal për çdo ditë."
    },

    // ===== BABY & KIDS =====
    {
        id: 15,
        name: "Set Kujdesi për Flokët e Fëmijëve – Shampo + Zbutës",
        price: 32.00,
        size: "Set",
        image: "assets/images/setkujdesiperfloketefemijeve.jpg",
        category: "kids",
        description: "Shampo e butë me lavandë dhe zbutës me vaj kokosi. Formula pa sulfate dhe kimikate të forta, e sigurt për lëkurën delikate të fëmijëve.",
        ingredients: [
            "Ekstrakt Lavande – efekt qetësues",
            "Vaj Kokosi – ushqim dhe krehje e lehtë",
            "Pa sulfate dhe parabene"
        ],
        actions: [
            "Pastron butësisht pa i tharë flokët",
            "Lehtëson krehjen dhe eliminon ngatërresat",
            "Qetëson dhe relakson fëmijën"
        ],
        usage: "Lani flokët me shampon, shpëlajeni. Aplikoni zbutësin, lëreni 1-2 minuta dhe shpëlajeni."
    },
    {
        id: 16,
        name: "Balm Natyral për Bebe – 50gr",
        price: 20.00,
        size: "50gr",
        image: "assets/images/balmnatyralperbebe.jpg",
        category: "kids",
        description: "Balsam 100% natyral i krijuar për lëkurën e bebeve. Formula me dyll blete, kamomil dhe sheabutter ofron mbrojtje natyrale dhe qetëson irritimet.",
        ingredients: [
            "Dyll blete & Kamomil – mbrojtje dhe qetësim",
            "Shea Butter – ushqim intensiv",
            "Vaj Ulliri – hidratim i thellë"
        ],
        actions: [
            "Qetëson skuqjet dhe irritimet",
            "Mbron nga tharja dhe faktorët e jashtëm",
            "I butë për përdorim të përditshëm"
        ],
        usage: "Apliko një shtresë të hollë në lëkurën e pastër të bebes, veçanërisht në zonat e irrituara."
    },
    {
        id: 17,
        name: "Vaj Natyral për Flokët e Fëmijëve – 100ml",
        price: 20.00,
        size: "100ml",
        image: "assets/images/vajnatyralperfoloketefemijeve.jpg",
        category: "kids",
        description: "Vaj i pasur me 20 lloje bimësh i zgjedhur për flokët e fëmijëve. Ndihmon në largimin e rrjebullit dhe stimulon rritjen e flokëve të rinj.",
        ingredients: [
            "Mbi 20 vajra bimorë organikë",
            "Ekstrakt Kamomili & Lavande",
            "Kompleks rigjenerues natyral"
        ],
        actions: [
            "Largon rrjebullin (koret e kokes) me delikatesë",
            "Forcon rrënjët dhe trash flokët",
            "Stimulon rritjen e flokëve të rinj"
        ],
        usage: "Masazho një sasi të vogël në kokë, lëre të veprojë disa orë dhe shpëlaj me shampo të butë."
    },
    {
        id: 35,
        name: "Serum për Qerpikë & Vetulla me Vaj Kastori – 10ml",
        price: 10.00,
        size: "10ml",
        image: "assets/images/category35.jpg",
        category: "face",
        description: "Serum natyral i formuluar me vaj kastori, vitaminë E dhe vajra trajtues. Ndihmon në forcimin, trashjen dhe zgjatjen natyrale të qerpikëve.",
        ingredients: [
            "Vaj Kastori – pasur me acid ricinoleik",
            "Vitamina E – mbrojtje antioxidant",
            "Vajra trajtues stimulues"
        ],
        actions: [
            "Nxit rritjen natyrale dhe forcon fijet",
            "Parandalon rënien dhe thyerjen",
            "Jep volum dhe dendësi natyrale"
        ],
        usage: "Apliko me furçë të pastër në qerpikë ose vetulla çdo mbrëmje para gjumit."
    }
];
