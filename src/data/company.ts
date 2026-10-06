export interface Company {
  name: string;
  englishName: string;
  tagline: string;
  lead: string;
  description: string;
  heroDescription: string;
  area: string;
  address: string;
  businessHours: string | null;
  contact: { phone: string | null; email: string | null };
  demoNotice: string;
  heroImage: { src: string; alt: string } | null;
  trust: { label: string; text: string }[];
  services: { title: string; description: string; label: string }[];
  works: { title: string; category: string; description: string; location: string; image: { src: string; alt: string } | null }[];
  problems: string[];
  corporate: { heading: string; examples: string[] };
  contactCta: string;
}

// 提案用デモ。ユーザー指定の会社情報のみを掲載し、未確認情報は追加しません。
// 実績・許可情報の出典確認は案件ごとに行ってください。写真や連絡先も創作しません。
export const company: Company = {
  name: '有限会社昭和防水工事',
  englishName: 'SHOWA WATERPROOFING',
  tagline: '建物を、\n雨から守り続ける。',
  lead: '防水工事の専門技術で、\n建物の安心を支えます。',
  description: '防水工事の専門技術で、建物の安心を支えます。東京都福生市を拠点に、法人・施設・住宅の防水工事に対応する専門工事会社です。',
  heroDescription: '東京都福生市を拠点に\n法人・施設・住宅の防水工事に対応',
  area: '東京都福生市を拠点に関東エリア',
  address: '東京都福生市福生2221',
  businessHours: null,
  contact: { phone: null, email: null },
  demoNotice: 'Webサイトご提案用のデザインサンプルです。有限会社昭和防水工事様が運営する公式Webサイトではありません。',
  heroImage: null,
  trust: [
    { label: '東京都知事許可', text: '防水工事業' },
    { label: 'PUBLIC WORKS', text: '公共工事実績' },
    { label: 'BtoB / BtoC', text: '法人・個人対応' },
    { label: 'TOKYO FUSSA', text: '福生市を拠点' },
  ],
  services: [
    { label: 'COATING', title: '塗膜防水', description: '液状の防水材料を塗り重ね、防水層を形成する工法です。' },
    { label: 'SHEET', title: 'シート防水', description: '防水シートを用いて、建物への雨水の浸入を防ぐ工法です。' },
    { label: 'ASPHALT', title: 'アスファルト防水', description: 'アスファルト系の防水材料を重ねて、防水層を形成する工法です。' },
    { label: 'SEALING', title: 'シーリング工事', description: '外壁の目地や接合部などにシーリング材を充填する工事です。' },
  ],
  works: [
    { title: 'かえで会館', category: 'PUBLIC WORKS', description: '外壁及び屋上防水改良工事', location: '東京都福生市', image: null },
  ],
  problems: ['屋上やベランダのひび割れ', '防水層の浮き', '雨漏り', '外壁目地の劣化', '以前の防水工事から年数が経っている'],
  corporate: { heading: '法人・管理会社・施設の\n防水工事にも対応します。', examples: ['ビル', 'マンション', '工場', '店舗', '事業所', '公共施設'] },
  contactCta: '防水工事について相談する',
};
export const contact = company.contact;
