// Daily wisdom entries — one per day, cycling through the year
// Each has a shloka (Sanskrit), transliteration, English meaning, speaker, and source
export const wisdomEntries = [
  {
    id: 1,
    shloka: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'Yadā yadā hi dharmasya glānir bhavati Bhārata,\nAbhyutthānam adharmasya tadātmānaṃ sṛjāmy aham.',
    meaning: 'Whenever righteousness declines and unrighteousness rises, O Bharata, I manifest myself. I am born age after age to protect the good, destroy the wicked, and re-establish dharma.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 4.7-8',
    tags: ['dharma', 'avatar', 'purpose'],
  },
  {
    id: 2,
    shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: "Karmaṇy evādhikāras te mā phaleṣu kadācana,\nMā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi.",
    meaning: 'You have the right to perform your actions, but never to the fruits thereof. Let not the fruits of action be your motive, nor let your attachment be to inaction.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 2.47',
    tags: ['karma', 'action', 'detachment'],
  },
  {
    id: 3,
    shloka: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥',
    transliteration: 'Nainaṃ chindanti śastrāṇi nainaṃ dahati pāvakaḥ,\nNa cainaṃ kledayanty āpo na śoṣayati mārutaḥ.',
    meaning: 'The soul can never be cut into pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind. The soul is eternal, indestructible, and immovable.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 2.23',
    tags: ['soul', 'atman', 'immortality'],
  },
  {
    id: 4,
    shloka: 'सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्।\nप्रियं च नानृतं ब्रूयात् एष धर्मः सनातनः॥',
    transliteration: 'Satyaṃ brūyāt priyaṃ brūyāt na brūyāt satyam apriyam,\nPriyaṃ ca nānṛtaṃ brūyāt eṣa dharmaḥ sanātanaḥ.',
    meaning: 'Speak the truth. Speak pleasantly. Do not speak the truth unpleasantly. Do not speak pleasant falsehoods. This is the eternal dharma.',
    speaker: 'Manu Smriti',
    source: 'Mahabharata, Shanti Parva',
    tags: ['truth', 'speech', 'dharma'],
  },
  {
    id: 5,
    shloka: 'अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः।\nमामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥',
    transliteration: "Ahaṅkāraṃ balaṃ darpaṃ kāmaṃ krodhaṃ ca saṃśritāḥ,\nMām ātma-para-deheṣu pradviṣanto 'bhyasūyakāḥ.",
    meaning: 'Those who are envious and mischievous, who are the lowest among men, I perpetually cast into the ocean of material existence into various demoniac species of life.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 16.18',
    tags: ['ego', 'anger', 'adharma'],
  },
  {
    id: 6,
    shloka: 'दाने तपसि शौर्ये च विज्ञाने विनये नये।\nविस्मयो न हि कर्तव्यो बहुरत्ना वसुन्धरा॥',
    transliteration: 'Dāne tapasi śaurye ca vijñāne vinaye naye,\nVismayo na hi kartavyo bahu ratnā vasundharā.',
    meaning: 'In charity, in penance, in courage, in wisdom, in humility, and in conduct — one should not be surprised. The earth is full of many gems — each person holds something remarkable.',
    speaker: 'Vidura',
    source: 'Mahabharata, Udyoga Parva',
    tags: ['humility', 'wisdom', 'earth'],
  },
  {
    id: 7,
    shloka: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥',
    transliteration: 'Śreyān svadharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt,\nSva-dharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ.',
    meaning: 'It is far better to discharge one\'s own duties imperfectly than to perform the duties of another perfectly. Death in the path of one\'s own duty is glorious. The path of another\'s duty is filled with danger.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 3.35',
    tags: ['svadharma', 'duty', 'purpose'],
  },
  {
    id: 8,
    shloka: 'न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्॥',
    transliteration: 'Na tv evāhaṃ jātu nāsaṃ na tvaṃ neme janādhipāḥ,\nNa caiva na bhaviṣyāmaḥ sarve vayam ataḥ param.',
    meaning: 'Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 2.12',
    tags: ['eternity', 'soul', 'existence'],
  },
  {
    id: 9,
    shloka: 'क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥',
    transliteration: 'Krodhād bhavati saṃmohaḥ saṃmohāt smṛti-vibhramaḥ,\nSmṛti-bhraṃśād buddhi-nāśo buddhi-nāśāt praṇaśyati.',
    meaning: 'From anger comes delusion, from delusion confusion of memory, from confusion of memory loss of reason, and from loss of reason one perishes.',
    speaker: 'Krishna',
    source: 'Bhagavad Gita 2.63',
    tags: ['anger', 'mind', 'destruction'],
  },
  {
    id: 10,
    shloka: 'विद्या ददाति विनयं विनयाद् याति पात्रताम्।\nपात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥',
    transliteration: 'Vidyā dadāti vinayaṃ vinayād yāti pātratām,\nPātrattvād dhanam āpnoti dhanād dharmaṃ tataḥ sukham.',
    meaning: 'Knowledge gives humility, from humility comes worthiness, from worthiness one gains wealth, from wealth comes dharma, and from dharma, happiness.',
    speaker: 'Chanakya',
    source: 'Referenced in Mahabharata',
    tags: ['knowledge', 'humility', 'happiness'],
  },
];

export const getDailyWisdom = () => {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return wisdomEntries[dayOfYear % wisdomEntries.length];
};
