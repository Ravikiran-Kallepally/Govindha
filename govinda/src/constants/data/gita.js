// Bhagavad Gita — Chapter summaries and key verses
export const gitaChapters = [
  { id: 1, name: 'Arjuna Vishada Yoga', subtitle: 'Arjuna\'s Grief', verses: 47, theme: 'The crisis of duty', emoji: '😔', color: '#1565C0' },
  { id: 2, name: 'Sankhya Yoga', subtitle: 'Transcendent Knowledge', verses: 72, theme: 'Soul, duty, and wisdom', emoji: '📚', color: '#283593' },
  { id: 3, name: 'Karma Yoga', subtitle: 'Path of Action', verses: 43, theme: 'Righteous action', emoji: '⚡', color: '#1B5E20' },
  { id: 4, name: 'Jnana Yoga', subtitle: 'Path of Knowledge', verses: 42, theme: 'Divine wisdom', emoji: '💡', color: '#E65100' },
  { id: 5, name: 'Karma Sanyasa Yoga', subtitle: 'Renunciation', verses: 29, theme: 'Action and renunciation', emoji: '🕊️', color: '#4A148C' },
  { id: 6, name: 'Dhyana Yoga', subtitle: 'Path of Meditation', verses: 47, theme: 'Meditation and self-mastery', emoji: '🧘', color: '#006064' },
  { id: 7, name: 'Jnana Vijnana Yoga', subtitle: 'Knowledge & Wisdom', verses: 30, theme: 'Divine nature', emoji: '🌟', color: '#F57F17' },
  { id: 8, name: 'Aksara Brahma Yoga', subtitle: 'The Imperishable Absolute', verses: 28, theme: 'The eternal Brahman', emoji: '∞', color: '#37474F' },
  { id: 9, name: 'Raja Vidya Yoga', subtitle: 'Royal Knowledge', verses: 34, theme: 'Devotion and sovereignty', emoji: '👑', color: '#880E4F' },
  { id: 10, name: 'Vibhuti Yoga', subtitle: 'Divine Glories', verses: 42, theme: 'Krishna\'s divine manifestations', emoji: '✨', color: '#1A237E' },
  { id: 11, name: 'Vishvarupa Yoga', subtitle: 'Universal Form', verses: 55, theme: 'The cosmic form', emoji: '🌌', color: '#263238' },
  { id: 12, name: 'Bhakti Yoga', subtitle: 'Path of Devotion', verses: 20, theme: 'Love and surrender to God', emoji: '❤️', color: '#C62828' },
  { id: 13, name: 'Kshetra Yoga', subtitle: 'Field and its Knower', verses: 35, theme: 'Body and soul', emoji: '🌾', color: '#2E7D32' },
  { id: 14, name: 'Gunatraya Yoga', subtitle: 'Three Modes of Nature', verses: 27, theme: 'Sattva, Rajas, Tamas', emoji: '⚖️', color: '#6A1B9A' },
  { id: 15, name: 'Purushottama Yoga', subtitle: 'The Supreme Person', verses: 20, theme: 'The cosmic tree of life', emoji: '🌳', color: '#00600F' },
  { id: 16, name: 'Daivāsura Yoga', subtitle: 'Divine & Demonic', verses: 24, theme: 'Divine vs demonic qualities', emoji: '⚔️', color: '#B71C1C' },
  { id: 17, name: 'Shraddhatraya Yoga', subtitle: 'Three Types of Faith', verses: 28, theme: 'Faith and worship', emoji: '🙏', color: '#E65100' },
  { id: 18, name: 'Moksha Yoga', subtitle: 'Liberation', verses: 78, theme: 'Surrender and liberation', emoji: '🕊️', color: '#FFD600' },
];

// Key verses with full Sanskrit, transliteration, and multiple translations
export const keyVerses = [
  {
    id: 'bg-2-47',
    chapter: 2,
    verse: 47,
    shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: "Karmaṇy evādhikāras te mā phaleṣu kadācana,\nMā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi.",
    translations: {
      en: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to inaction.',
      hi: 'कर्म करने में ही तेरा अधिकार है, फल में नहीं। कर्म के फल का हेतु भी मत बन, और अकर्म में भी तेरी आसक्ति न हो।',
      te: 'కర్మ చేయడంలోనే నీకు అధికారం ఉంది, ఫలాలలో కాదు. కర్మ ఫలానికి కారణమవ్వకు, అకర్మంలో ఆసక్తి కలిగి ఉండకు.',
    },
    significance: 'The most famous verse of the Gita. The foundation of Nishkama Karma — selfless action.',
    tags: ['karma', 'action', 'detachment', 'most-famous'],
  },
  {
    id: 'bg-2-23',
    chapter: 2,
    verse: 23,
    shloka: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥',
    transliteration: 'Nainaṃ chindanti śastrāṇi nainaṃ dahati pāvakaḥ,\nNa cainaṃ kledayanty āpo na śoṣayati mārutaḥ.',
    translations: {
      en: 'The soul can never be cut by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.',
      hi: 'इस आत्मा को शस्त्र नहीं काट सकते, अग्नि नहीं जला सकती, जल नहीं भिगो सकता और वायु नहीं सुखा सकती।',
      te: 'ఈ ఆత్మను ఆయుధాలు ఖండించలేవు, అగ్ని దహించలేదు, జలం తడిపించలేదు, వాయువు ఎండించలేదు.',
    },
    significance: 'The immortality of the soul — the core of Krishna\'s teaching to a grief-stricken Arjuna.',
    tags: ['soul', 'atman', 'immortality', 'death'],
  },
  {
    id: 'bg-4-7',
    chapter: 4,
    verse: 7,
    shloka: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'Yadā yadā hi dharmasya glānir bhavati Bhārata,\nAbhyutthānam adharmasya tadātmānaṃ sṛjāmy aham.',
    translations: {
      en: 'Whenever righteousness declines and unrighteousness rises, O Arjuna, I manifest myself.',
      hi: 'जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ।',
      te: 'ఎప్పుడెప్పుడు ధర్మం క్షీణించి అధర్మం పెరుగుతుందో, అప్పుడప్పుడు నేను స్వయంగా అవతరిస్తాను.',
    },
    significance: 'The divine promise of Krishna — the very purpose of God\'s avatars on earth.',
    tags: ['dharma', 'avatar', 'divine-purpose'],
  },
  {
    id: 'bg-18-66',
    chapter: 18,
    verse: 66,
    shloka: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    transliteration: 'Sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja,\nAhaṃ tvāṃ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ.',
    translations: {
      en: 'Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
      hi: 'सभी धर्मों को त्यागकर केवल मेरी शरण में आ जा। मैं तुझे सभी पापों से मुक्त कर दूंगा, डर मत।',
      te: 'అన్ని ధర్మాలను వదిలి నా ఒక్కని శరణు పొందు. నేను నిన్ను అన్ని పాపాల నుండి విముక్తి కలిగిస్తాను. భయపడకు.',
    },
    significance: 'The Charama Shloka — Krishna\'s final and supreme instruction. Total surrender to God.',
    tags: ['surrender', 'moksha', 'devotion', 'liberation', 'final-teaching'],
  },
  {
    id: 'bg-11-32',
    chapter: 11,
    verse: 32,
    shloka: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः।',
    transliteration: "Kālo 'smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ.",
    translations: {
      en: 'I am Time, the great destroyer of worlds, and I have come here to destroy all people.',
      hi: 'मैं काल हूं, लोकों का विनाश करने वाला। मैं इन सभी लोगों को नष्ट करने यहाँ आया हूं।',
      te: 'నేను కాలాన్ని, లోకాలను నాశనం చేసే మహా శక్తిని. ఇక్కడ అందరినీ సంహరించేందుకు వచ్చాను.',
    },
    significance: 'The immortal line made famous worldwide. Krishna reveals himself as infinite Time.',
    tags: ['time', 'vishvarupa', 'cosmic-form', 'most-famous'],
  },

  // Chapter 1 — Arjuna Vishada Yoga
  {
    id: 'bg-1-28',
    chapter: 1,
    verse: 28,
    shloka: 'दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति॥',
    transliteration: 'Dṛṣṭvemaṃ sva-janaṃ Kṛṣṇa yuyutsuṃ samupasthitam,\nSīdanti mama gātrāṇi mukhaṃ ca pariśuṣyati.',
    translations: {
      en: 'My dear Krishna, seeing my friends and relatives present before me in such a fighting spirit, my limbs are quivering and my mouth is drying up.',
      hi: 'हे कृष्ण! युद्ध की इच्छा से उपस्थित इन अपने लोगों को देखकर मेरे अंग शिथिल हो रहे हैं और मुँह सूख रहा है।',
      te: 'హే కృష్ణా! యుద్ధ సంసిద్ధులైన నా స్వజనులను చూసి నా అంగాలు శిథిలమవుతున్నాయి, నోరు ఎండిపోతోంది.',
    },
    significance: 'Arjuna\'s crisis — the very human moment that triggers the Gita\'s teaching begins here.',
    tags: ['grief', 'crisis', 'arjuna', 'opening'],
  },
  {
    id: 'bg-1-46',
    chapter: 1,
    verse: 46,
    shloka: 'यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्॥',
    transliteration: 'Yadi mām apratīkāram aśastraṃ śastra-pāṇayaḥ,\nDhārtarāṣṭrā raṇe hanyus tan me kṣema-taraṃ bhavet.',
    translations: {
      en: 'It would be better for me if the sons of Dhritarashtra, weapons in hand, were to kill me in battle while I was unarmed and unresisting.',
      hi: 'यदि शस्त्रधारी धृतराष्ट्र के पुत्र युद्ध में मुझ प्रतिरोधहीन और निशस्त्र को मार डालें, तो यह मेरे लिए अधिक हितकर होगा।',
      te: 'ఆయుధాలు పట్టుకున్న ధృతరాష్ట్ర పుత్రులు యుద్ధంలో నిరాయుధుడైన నన్ను చంపినా, నాకు అదే శ్రేయస్కరం.',
    },
    significance: 'Arjuna\'s despair peaks — he would rather die than fight his kinsmen, setting up Krishna\'s entire discourse.',
    tags: ['despair', 'kinsmen', 'non-resistance', 'arjuna'],
  },

  // Chapter 3 — Karma Yoga
  {
    id: 'bg-3-21',
    chapter: 3,
    verse: 21,
    shloka: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥',
    transliteration: 'Yad yad ācarati śreṣṭhas tat tad evetaro janaḥ,\nSa yat pramāṇaṃ kurute lokas tad anuvartate.',
    translations: {
      en: 'Whatever action a great person performs, common people follow. And whatever standards he sets, the world follows.',
      hi: 'श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वैसा ही करते हैं। वह जो प्रमाण स्थापित करता है, संसार उसी का अनुसरण करता है।',
      te: 'మహాపురుషులు ఏమి చేస్తే, ఇతరులు కూడా అదే చేస్తారు. వారు ఏ ప్రమాణం ఏర్పరిస్తే, లోకం దానినే అనుసరిస్తుంది.',
    },
    significance: 'The responsibility of leaders — great souls set the standard that society follows.',
    tags: ['leadership', 'example', 'society', 'action'],
  },
  {
    id: 'bg-3-27',
    chapter: 3,
    verse: 27,
    shloka: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥',
    transliteration: 'Prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ,\nAhaṅkāra-vimūḍhātmā kartāham iti manyate.',
    translations: {
      en: 'All actions are performed by the qualities of nature. One who is deluded by false ego thinks "I am the doer."',
      hi: 'प्रकृति के गुणों द्वारा समस्त कर्म किए जाते हैं, परन्तु अहंकार से मोहित आत्मा "मैं कर्ता हूं" ऐसा मान लेती है।',
      te: 'ప్రకృతి గుణాల వల్ల సమస్త కర్మలు జరుగుతున్నాయి. అహంకారంతో మోహితమైన ఆత్మ నేనే కర్తను అని భ్రమపడుతుంది.',
    },
    significance: 'The illusion of doership — ego makes us think we act, but nature acts through us.',
    tags: ['ego', 'nature', 'doership', 'illusion'],
  },

  // Chapter 5 — Karma Sanyasa Yoga
  {
    id: 'bg-5-18',
    chapter: 5,
    verse: 18,
    shloka: 'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥',
    transliteration: 'Vidyā-vinaya-sampanne brāhmaṇe gavi hastini,\nŚuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ.',
    translations: {
      en: 'The humble sages, by virtue of true knowledge, see equally a learned scholar, a cow, an elephant, a dog, and a dog-eater.',
      hi: 'ज्ञानी पुरुष विद्या और विनम्रता से युक्त ब्राह्मण में, गाय में, हाथी में, कुत्ते में और चांडाल में भी समान दृष्टि रखते हैं।',
      te: 'నిజమైన జ్ఞానులు విద్యావంతులైన బ్రాహ్మణుడిలో, ఆవులో, ఏనుగులో, కుక్కలో, చండాలుడిలో సమానంగా చూస్తారు.',
    },
    significance: 'The ultimate equality — a liberated soul sees the divine spark in every being without distinction.',
    tags: ['equality', 'wisdom', 'unity', 'liberation'],
  },
  {
    id: 'bg-5-29',
    chapter: 5,
    verse: 29,
    shloka: 'भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्।\nसुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥',
    transliteration: 'Bhoktāraṃ yajña-tapasāṃ sarva-loka-maheśvaram,\nSuhṛdaṃ sarva-bhūtānāṃ jñātvā māṃ śāntim ṛcchati.',
    translations: {
      en: 'The sages, knowing Me as the ultimate purpose of all sacrifices and austerities, the Supreme Lord of all planets, and the benefactor and well-wisher of all living entities, attain peace.',
      hi: 'मुझे यज्ञों और तपस्याओं का भोक्ता, समस्त लोकों का महान ईश्वर और सम्पूर्ण प्राणियों का सुहृद जानकर वे शांति प्राप्त करते हैं।',
      te: 'నన్ను యజ్ఞాలు-తపస్సుల ఫలభోక్తగా, సర్వలోకాల మహేశ్వరుడిగా, సర్వప్రాణుల సుహృత్తుగా తెలుసుకుని శాంతిని పొందుతారు.',
    },
    significance: 'The path to peace — knowing God as the ultimate enjoyer, ruler, and friend of all creation.',
    tags: ['peace', 'devotion', 'omnipresence', 'surrender'],
  },

  // Chapter 6 — Dhyana Yoga
  {
    id: 'bg-6-5',
    chapter: 6,
    verse: 5,
    shloka: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    transliteration: "Uddhared ātmanātmānaṃ nātmānam avasādayet,\nĀtmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ.",
    translations: {
      en: 'Elevate yourself through the power of your own mind, and do not allow yourself to be degraded by it. The mind can be your best friend or your worst enemy.',
      hi: 'अपने आप को अपने द्वारा ऊपर उठाओ, नीचे मत जाने दो। क्योंकि मन ही आत्मा का बंधु है और मन ही शत्रु भी है।',
      te: 'నీ మనస్సు ద్వారా నిన్ను నీవే ఉద్ధరించుకో, నీచంగా పడిపోవద్దు. ఆత్మయే ఆత్మకు మిత్రుడు, ఆత్మయే శత్రువు కూడా.',
    },
    significance: 'Self-mastery is the foundation — you are your own savior and your own destroyer.',
    tags: ['mind', 'self-mastery', 'discipline', 'enemy'],
  },
  {
    id: 'bg-6-35',
    chapter: 6,
    verse: 35,
    shloka: 'श्रीभगवानुवाच।\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥',
    transliteration: 'Asaṃśayaṃ mahā-bāho mano durnigrahaṃ calam,\nAbhyāsena tu kaunteya vairāgyeṇa ca gṛhyate.',
    translations: {
      en: 'O mighty Arjuna, undoubtedly the mind is difficult to control and restless. But it can be controlled through consistent practice and detachment.',
      hi: 'हे महाबाहो! निःसंदेह मन चंचल और वश में करना कठिन है। परन्तु हे कुंतीपुत्र! अभ्यास और वैराग्य से इसे वश में किया जा सकता है।',
      te: 'హే మహాబాహో! నిస్సందేహంగా మనస్సు చంచలమైనది, అదుపు చేయడం కష్టం. కానీ కౌంతేయా, అభ్యాసం మరియు వైరాగ్యంతో దీన్ని నియంత్రించవచ్చు.',
    },
    significance: 'Krishna\'s prescription for the restless mind — consistent practice and detachment are the twin remedies.',
    tags: ['mind', 'practice', 'detachment', 'meditation'],
  },

  // Chapter 7 — Jnana Vijnana Yoga
  {
    id: 'bg-7-7',
    chapter: 7,
    verse: 7,
    shloka: 'मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥',
    transliteration: 'Mattaḥ parataraṃ nānyat kiñcid asti Dhanañjaya,\nMayi sarvam idaṃ protaṃ sūtre maṇi-gaṇā iva.',
    translations: {
      en: 'O Arjuna, there is nothing higher than Me. Everything rests upon Me, as pearls are strung on a thread.',
      hi: 'हे धनंजय! मुझसे परे कुछ भी नहीं है। यह सब कुछ मुझ में ऐसे पिरोया हुआ है जैसे धागे में मणियाँ।',
      te: 'హే ధనంజయా! నా కంటే ఉన్నతమైనది ఏదీ లేదు. ఈ సమస్తం సూత్రంలో మణులు ఉన్నట్లు నాలో ఉంది.',
    },
    significance: 'The thread metaphor — all creation is strung on God as beads on a necklace.',
    tags: ['omnipresence', 'thread', 'creation', 'supreme'],
  },
  {
    id: 'bg-7-19',
    chapter: 7,
    verse: 19,
    shloka: 'बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥',
    transliteration: 'Bahūnāṃ janmanām ante jñānavān māṃ prapadyate,\nVāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ.',
    translations: {
      en: 'After many births and deaths, one who is truly in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.',
      hi: 'अनेक जन्मों के बाद ज्ञानवान् मुझे प्राप्त होता है — यह जानकर कि वासुदेव ही सब कुछ है। ऐसा महात्मा अत्यंत दुर्लभ है।',
      te: 'అనేక జన్మల తర్వాత జ్ఞానవంతుడు వాసుదేవుడే సర్వస్వమని తెలుసుకుని నన్ను శరణు పొందుతాడు. అటువంటి మహాత్ముడు అతి అరుదు.',
    },
    significance: 'The rare great soul — spiritual evolution across lifetimes leads to the ultimate realization.',
    tags: ['rebirth', 'knowledge', 'rare', 'vasudeva', 'liberation'],
  },

  // Chapter 8 — Aksara Brahma Yoga
  {
    id: 'bg-8-5',
    chapter: 8,
    verse: 5,
    shloka: 'अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥',
    transliteration: 'Anta-kāle ca mām eva smaran muktvā kalevaram,\nYaḥ prayāti sa mad-bhāvaṃ yāti nāsty atra saṃśayaḥ.',
    translations: {
      en: 'Whoever, at the time of death, remembers Me alone while leaving the body, attains My divine nature. Of this there is no doubt.',
      hi: 'जो अंतकाल में मुझे स्मरण करते हुए शरीर छोड़ता है, वह मेरे भाव को प्राप्त होता है। इसमें कोई संशय नहीं।',
      te: 'అంత్యకాలంలో నన్ను స్మరించి శరీరాన్ని విడిచిపెట్టేవాడు నా భావాన్ని పొందుతాడు. ఇందులో సందేహం లేదు.',
    },
    significance: 'The moment of death matters most — consciousness at the final breath determines the next journey.',
    tags: ['death', 'last-thought', 'liberation', 'afterlife'],
  },
  {
    id: 'bg-8-16',
    chapter: 8,
    verse: 16,
    shloka: 'आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन।\nमामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते॥',
    transliteration: 'Ābrahma-bhuvanāl lokāḥ punar āvartino 'rjuna,\nMām upetya tu kaunteya punar janma na vidyate.',
    translations: {
      en: 'From the highest planet in the material world down to the lowest, all are places of misery where repeated birth and death occur. But one who attains to My abode never takes birth again.',
      hi: 'ब्रह्मलोक तक के समस्त लोक पुनरावृत्ति के अधीन हैं, हे अर्जुन! परन्तु मुझे प्राप्त होकर पुनर्जन्म नहीं होता।',
      te: 'బ్రహ్మలోకం వరకు అన్ని లోకాలు పునర్జన్మ చక్రంలో ఉన్నాయి. నన్ను చేరుకున్న వారికి మాత్రం పునర్జన్మ లేదు.',
    },
    significance: 'Moksha transcends all heavens — even the highest realms involve rebirth; only God\'s abode is eternal.',
    tags: ['liberation', 'rebirth', 'heaven', 'brahmaloka'],
  },

  // Chapter 9 — Raja Vidya Yoga
  {
    id: 'bg-9-22',
    chapter: 9,
    verse: 22,
    shloka: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    transliteration: 'Ananyāś cintayanto māṃ ye janāḥ paryupāsate,\nTeṣāṃ nityābhiyuktānāṃ yoga-kṣemaṃ vahāmy aham.',
    translations: {
      en: 'For those who worship Me with devotion, meditating on My transcendental form, I carry what they lack and preserve what they have.',
      hi: 'जो भक्त अनन्य भाव से मुझे निरन्तर स्मरण करते हुए भजते हैं, उनके अभाव की पूर्ति मैं करता हूँ और उनकी प्राप्ति की रक्षा करता हूँ।',
      te: 'అనన్య భక్తితో నన్ను ఆరాధించేవారికి నా దగ్గర లేనిది ఇస్తాను, వారికి ఉన్నదాన్ని రక్షిస్తాను.',
    },
    significance: 'The divine promise of care — God personally ensures the wellbeing of those completely surrendered to Him.',
    tags: ['devotion', 'promise', 'care', 'bhakti'],
  },
  {
    id: 'bg-9-26',
    chapter: 9,
    verse: 26,
    shloka: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥',
    transliteration: 'Patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati,\nTad ahaṃ bhakty-upahṛtam aśnāmi prayatātmanaḥ.',
    translations: {
      en: 'If one offers Me with love and devotion a leaf, a flower, fruit, or water, I will accept it.',
      hi: 'जो भक्त मुझे प्रेमपूर्वक पत्र, पुष्प, फल, जल अर्पित करता है, उसकी भक्ति से अर्पित उस शुद्ध वस्तु को मैं स्वीकार करता हूँ।',
      te: 'ఎవరైనా భక్తితో నాకు ఒక ఆకు, పువ్వు, పండు, నీళ్లు అర్పిస్తే, ఆ భక్తిని నేను అంగీకరిస్తాను.',
    },
    significance: 'God accepts the devotion, not the price — even the simplest offering made with pure love is received.',
    tags: ['devotion', 'offering', 'love', 'simplicity'],
  },

  // Chapter 10 — Vibhuti Yoga
  {
    id: 'bg-10-20',
    chapter: 10,
    verse: 20,
    shloka: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥',
    transliteration: 'Aham ātmā Guḍākeśa sarva-bhūtāśaya-sthitaḥ,\nAham ādiś ca madhyaṃ ca bhūtānām anta eva ca.',
    translations: {
      en: 'I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.',
      hi: 'हे गुडाकेश! मैं सर्व भूतों के हृदय में स्थित आत्मा हूँ। मैं ही समस्त प्राणियों का आदि, मध्य और अंत भी हूँ।',
      te: 'హే గుడాకేశా! నేను సర్వప్రాణుల హృదయంలో వసించే ఆత్మను. నేనే సర్వప్రాణుల ఆది, మధ్య మరియు అంతం.',
    },
    significance: 'The Self of all selves — God declares himself the inner soul dwelling in every heart.',
    tags: ['atman', 'omnipresence', 'divine-self', 'heart'],
  },
  {
    id: 'bg-10-41',
    chapter: 10,
    verse: 41,
    shloka: 'यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोऽशसम्भवम्॥',
    transliteration: 'Yad yad vibhūtimat sattvaṃ śrīmad ūrjitam eva vā,\nTat tad evāvagaccha tvaṃ mama tejo-'ṃśa-sambhavam.',
    translations: {
      en: 'Know that all glorious, beautiful, and mighty manifestations spring from but a spark of My splendor.',
      hi: 'जो भी विभूतिमान, श्रीसम्पन्न या शक्तिशाली वस्तु है, उसे तुम मेरे तेज के अंश से उत्पन्न जानो।',
      te: 'వైభవంగా, సౌందర్యంగా, శక్తివంతంగా ఉన్నదేదైనా నా తేజోంశ నుండే ఉద్భవించిందని తెలుసుకో.',
    },
    significance: 'Seeing God in excellence — every extraordinary beauty or power is a glimpse of the divine.',
    tags: ['manifestation', 'glory', 'excellence', 'divine-spark'],
  },

  // Chapter 12 — Bhakti Yoga
  {
    id: 'bg-12-13',
    chapter: 12,
    verse: 13,
    shloka: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    transliteration: 'Adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca,\nNirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī.',
    translations: {
      en: 'One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant — such a person is very dear to Me.',
      hi: 'जो समस्त प्राणियों का द्वेष नहीं करता, जो सबका मित्र और करुणामय है, जो ममतारहित और अहंकारशून्य है, सुख-दुःख में सम रहता है — वह मुझे प्रिय है।',
      te: 'అన్ని ప్రాణుల పట్ల ద్వేషం లేనివాడు, మిత్రుడిగా కరుణగా ఉండేవాడు, మమకారం అహంకారం లేనివాడు, సుఖదుఃఖాలలో సమంగా ఉండే క్షమాశీలి నాకు ప్రియుడు.',
    },
    significance: 'The qualities of a true devotee — the ideal human being as described by Krishna himself.',
    tags: ['devotee', 'qualities', 'compassion', 'equanimity'],
  },
  {
    id: 'bg-12-15',
    chapter: 12,
    verse: 15,
    shloka: 'यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥',
    transliteration: 'Yasmān nodvijate loko lokān nodvijate ca yaḥ,\nHarṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ.',
    translations: {
      en: 'One who does not disturb the world and is not disturbed by it, who is free from joy, envy, fear, and anxiety — he is very dear to Me.',
      hi: 'जिससे कोई उद्विग्न नहीं होता और जो किसी से उद्विग्न नहीं होता, जो हर्ष, द्वेष, भय और उद्वेग से मुक्त है — वह मुझे प्रिय है।',
      te: 'ఎవరివల్లా కలత కలగకుండా ఉండేవాడు, ఏ కలతలకూ చలించనివాడు, హర్షం అసూయ భయం ఆందోళన లేనివాడు నాకు ప్రియుడు.',
    },
    significance: 'Emotional stability as devotion — the one who neither disturbs nor is disturbed is closest to God.',
    tags: ['devotee', 'stability', 'inner-peace', 'freedom'],
  },

  // Chapter 13 — Kshetra Yoga
  {
    id: 'bg-13-2',
    chapter: 13,
    verse: 2,
    shloka: 'क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।\nक्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥',
    transliteration: 'Kṣetra-jñaṃ cāpi māṃ viddhi sarva-kṣetreṣu Bhārata,\nKṣetra-kṣetra-jñayor jñānaṃ yat taj jñānaṃ mataṃ mama.',
    translations: {
      en: 'O Arjuna, know that I am also the knower in all bodies. To understand this body and its knower is called wisdom, in My opinion.',
      hi: 'हे भारत! तुम सब क्षेत्रों में मुझे क्षेत्रज्ञ अर्थात् जीव के रूप में जानो। क्षेत्र और क्षेत्रज्ञ का ज्ञान ही मेरे मत में ज्ञान है।',
      te: 'హే భారత! సర్వ శరీరాలలో నేను క్షేత్రజ్ఞుడినని తెలుసుకో. శరీరం మరియు శరీర జ్ఞాతని అర్థం చేసుకోవడమే నా దృష్టిలో జ్ఞానం.',
    },
    significance: 'The body-soul distinction — distinguishing the field (body) from the knower of the field (soul) is true wisdom.',
    tags: ['body', 'soul', 'knowledge', 'distinction'],
  },
  {
    id: 'bg-13-28',
    chapter: 13,
    verse: 28,
    shloka: 'समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्।\nन हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥',
    transliteration: 'Samaṃ paśyan hi sarvatra samavasthitam īśvaram,\nNa hinasty ātmanātmānaṃ tato yāti parāṃ gatim.',
    translations: {
      en: 'One who sees the Supreme Lord equally present everywhere does not degrade himself by his own mind. Thus he reaches the transcendental destination.',
      hi: 'जो हर कहीं समान रूप से स्थित ईश्वर को देखता है, वह अपने आप को नष्ट नहीं करता और परम गति को प्राप्त होता है।',
      te: 'అన్నిచోట్లా సమానంగా వ్యాపించి ఉన్న ఈశ్వరుని చూసేవాడు తనని తాను నాశనం చేసుకోడు మరియు పరమగతిని పొందుతాడు.',
    },
    significance: 'Seeing God everywhere — the realization of divine omnipresence leads to liberation.',
    tags: ['omnipresence', 'liberation', 'equality', 'vision'],
  },

  // Chapter 14 — Gunatraya Yoga
  {
    id: 'bg-14-6',
    chapter: 14,
    verse: 6,
    shloka: 'तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्।\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ॥',
    transliteration: 'Tatra sattvaṃ nirmalatvāt prakāśakam anāmayam,\nSukha-saṅgena badhnāti jñāna-saṅgena cānagha.',
    translations: {
      en: 'O sinless one, the mode of goodness, being purer than the others, is illuminating and frees one from all sinful reactions. Those situated in it are conditioned by a sense of happiness and knowledge.',
      hi: 'हे निष्पाप! सत्त्व गुण अपनी निर्मलता के कारण प्रकाशक और निरोगी है। यह सुख की आसक्ति और ज्ञान की आसक्ति से बांधता है।',
      te: 'సత్త్వగుణం నిర్మలత్వం వల్ల ప్రకాశమానంగా, నిరోగంగా ఉంటుంది. అది సుఖాసక్తి, జ్ఞానాసక్తి ద్వారా బంధిస్తుంది.',
    },
    significance: 'The three modes explained — even goodness (sattva) binds when clung to; transcendence requires going beyond all three.',
    tags: ['sattva', 'modes', 'bondage', 'nature'],
  },
  {
    id: 'bg-14-26',
    chapter: 14,
    verse: 26,
    shloka: 'मां च योऽव्यभिचारेण भक्तियोगेन सेवते।\nस गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥',
    transliteration: 'Māṃ ca yo 'vyabhicāreṇa bhakti-yogena sevate,\nSa guṇān samatītyaitān brahma-bhūyāya kalpate.',
    translations: {
      en: 'One who engages in full devotional service, who does not fall down in any circumstance, at once transcends the modes of material nature and thus comes to the level of Brahman.',
      hi: 'जो मुझे अव्यभिचारी भक्तियोग से सेवन करता है, वह इन तीनों गुणों को पार करके ब्रह्म को प्राप्त होने का अधिकारी हो जाता है।',
      te: 'అవ్యభిచారమైన భక్తియోగంతో నన్ను సేవించేవాడు ఈ మూడు గుణాలను అతిక్రమించి బ్రహ్మస్థితికి అర్హుడవుతాడు.',
    },
    significance: 'Devotion transcends all modes — unwavering bhakti is the direct path beyond nature\'s three qualities.',
    tags: ['devotion', 'transcendence', 'modes', 'brahman'],
  },

  // Chapter 15 — Purushottama Yoga
  {
    id: 'bg-15-7',
    chapter: 15,
    verse: 7,
    shloka: 'ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥',
    transliteration: 'Mamaivāṃśo jīva-loke jīva-bhūtaḥ sanātanaḥ,\nManaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati.',
    translations: {
      en: 'The living entities in this conditioned world are My eternal, fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.',
      hi: 'इस जीवलोक में जीव मेरे ही सनातन अंश हैं। वे प्रकृति में रहते हुए मन सहित छः इंद्रियों को आकर्षित करते हैं।',
      te: 'ఈ జీవలోకంలో జీవులు నా నిత్యమైన అంశాలు. ప్రకృతిలో ఉండి, మనస్సుతో సహా ఆరు ఇంద్రియాలను ఆకర్షిస్తున్నారు.',
    },
    significance: 'Every soul is a fragment of God — the eternal divine spark that animates all living beings.',
    tags: ['soul', 'divine-spark', 'fragment', 'eternal'],
  },
  {
    id: 'bg-15-15',
    chapter: 15,
    verse: 15,
    shloka: 'सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥',
    transliteration: 'Sarvasya cāhaṃ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṃ ca,\nVedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham.',
    translations: {
      en: 'I am seated in everyone\'s heart, and from Me come remembrance, knowledge, and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.',
      hi: 'मैं सबके हृदय में विराजमान हूँ। मुझसे ही स्मृति, ज्ञान और अपोहन होता है। मैं ही सभी वेदों द्वारा जानने योग्य हूँ।',
      te: 'నేను అందరి హృదయంలో నివసించేను. నా నుండే స్మృతి, జ్ఞానం, మరపు కలుగుతాయి. వేదాలన్నింటిలో నేనే తెలుసుకోదగినవాడిని.',
    },
    significance: 'God as inner teacher — every moment of memory or inspiration is God working from within.',
    tags: ['inner-guru', 'heart', 'memory', 'vedanta'],
  },

  // Chapter 16 — Daivāsura Yoga
  {
    id: 'bg-16-1',
    chapter: 16,
    verse: 1,
    shloka: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥',
    transliteration: 'Abhayaṃ sattva-saṃśuddhir jñāna-yoga-vyavasthitiḥ,\nDānaṃ damaś ca yajñaś ca svādhyāyas tapa ārjavam.',
    translations: {
      en: 'Fearlessness, purification of one\'s existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, and simplicity — these are the divine qualities.',
      hi: 'अभय, अंतःकरण की शुद्धि, ज्ञानयोग में स्थिरता, दान, इंद्रियों का दमन, यज्ञ, स्वाध्याय, तप और सरलता — ये दैवी गुण हैं।',
      te: 'అభయం, సత్త్వ శుద్ధి, జ్ఞానయోగనిష్ఠ, దానం, దమం, యజ్ఞం, స్వాధ్యాయం, తపం, ఆర్జవం — ఇవి దైవీ గుణాలు.',
    },
    significance: 'The divine qualities — this verse opens a comprehensive list of the godly virtues every soul should cultivate.',
    tags: ['divine-qualities', 'fearlessness', 'virtue', 'character'],
  },
  {
    id: 'bg-16-21',
    chapter: 16,
    verse: 21,
    shloka: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥',
    transliteration: 'Tri-vidhaṃ narakasyedaṃ dvāraṃ nāśanam ātmanaḥ,\nKāmaḥ krodhas tathā lobhas tasmād etat trayaṃ tyajet.',
    translations: {
      en: 'There are three gates leading to the hell that is destructive to the soul: lust, anger, and greed. Every sane man should give these up, for they lead to degradation.',
      hi: 'आत्मा के नाश करने वाले नरक के तीन द्वार हैं — काम, क्रोध और लोभ। इसलिए इन तीनों को त्याग देना चाहिए।',
      te: 'ఆత్మను నాశనం చేసే నరకానికి మూడు ద్వారాలు: కామం, క్రోధం, లోభం. అందువల్ల ఈ మూడింటినీ విడిచిపెట్టాలి.',
    },
    significance: 'The triple root of evil — lust, anger, and greed are the doorways through which the soul destroys itself.',
    tags: ['lust', 'anger', 'greed', 'triple-evil', 'warning'],
  },

  // Chapter 17 — Shraddhatraya Yoga
  {
    id: 'bg-17-3',
    chapter: 17,
    verse: 3,
    shloka: 'सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥',
    transliteration: 'Sattvānurūpā sarvasya śraddhā bhavati Bhārata,\nŚraddhā-mayo 'yaṃ puruṣo yo yac-chraddhaḥ sa eva saḥ.',
    translations: {
      en: 'O Arjuna, the faith of each person is in accordance with his own nature. A person is made of his faith; whatever his faith is, that is what he is.',
      hi: 'हे भारत! सबकी श्रद्धा उनकी प्रकृति के अनुसार होती है। यह मनुष्य श्रद्धामय है। जिसकी जैसी श्रद्धा है, वह वैसा ही है।',
      te: 'హే భారత! ప్రతి ఒక్కరి శ్రద్ధ వారి స్వభావానికి అనుగుణంగా ఉంటుంది. ఈ మానవుడు శ్రద్ధామయుడు. వారు ఏమి నమ్ముతారో వారు అదే.',
    },
    significance: 'You become what you believe — faith is not just a feeling but the very substance of one\'s identity.',
    tags: ['faith', 'identity', 'belief', 'nature'],
  },
  {
    id: 'bg-17-16',
    chapter: 17,
    verse: 16,
    shloka: 'मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः।\nभावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥',
    transliteration: 'Manaḥ-prasādaḥ saumyatvaṃ maunam ātma-vinigrahaḥ,\nBhāva-saṃśuddhir ity etat tapo mānasamucyate.',
    translations: {
      en: 'Serenity of mind, gentleness, equanimity, self-control, and purity of thought — these constitute mental austerity.',
      hi: 'मन की प्रसन्नता, सौम्यता, मौन, आत्मसंयम और भावों की शुद्धि — इन्हें मानसिक तप कहा जाता है।',
      te: 'మనస్సుప్రసన్నత, సౌమ్యత, మౌనం, ఆత్మసంయమం, భావశుద్ధి — ఇవి మానసిక తపస్సు అని చెప్పబడ్డాయి.',
    },
    significance: 'Mental austerity — inner discipline of the mind is the highest form of spiritual practice.',
    tags: ['mind', 'austerity', 'mental-discipline', 'purity'],
  },

  // Chapter 18 — Moksha Yoga (additional)
  {
    id: 'bg-18-6',
    chapter: 18,
    verse: 6,
    shloka: 'एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च।\nकर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम्॥',
    transliteration: 'Etāny api tu karmāṇi saṅgaṃ tyaktvā phalāni ca,\nKartavyānīti me Pārtha niścitaṃ matam uttamam.',
    translations: {
      en: 'O Arjuna, all these prescribed duties should be done without attachment or expectation of results. This is My firm and ultimate opinion.',
      hi: 'हे पार्थ! इन कर्मों को भी आसक्ति और फल की इच्छा त्यागकर करना चाहिए — यही मेरा निश्चित और श्रेष्ठ मत है।',
      te: 'హే పార్థా! ఈ కర్మలన్నింటినీ ఆసక్తి మరియు ఫలాపేక్ష విడిచి చేయాలి — ఇదే నా నిశ్చిత మరియు ఉత్తమ మతం.',
    },
    significance: 'The final synthesis — every duty, however prescribed, must be performed without attachment to fruits.',
    tags: ['duty', 'detachment', 'action', 'final-teaching'],
  },
];

export const getChapterById = (id) => gitaChapters.find(c => c.id === id);
export const getVersesByChapter = (chapterId) => keyVerses.filter(v => v.chapter === chapterId);
export const getFamousVerses = () => keyVerses.filter(v => v.tags.includes('most-famous'));
