export interface Company {
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  area: string;
  address: string;
  businessHours: string;
  contact: { phone: string | null; email: string | null };
  services: { title: string; description: string; label: string }[];
  strengths: { title: string; description: string }[];
  projects: { title: string; category: string; description: string; image: string; alt: string }[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

// サンプル情報です。公開前に実在する会社情報・実績・連絡先へ差し替えてください。
// 未設定の連絡先にはリンクを表示しません。
export const company = {
  name: '青葉防水工業',
  englishName: 'AOBA WATERPROOFING',
  tagline: '雨から守る。\n暮らしをつなぐ。',
  description: '屋上から、ベランダまで。建物の状態に合った防水工事で、日々の安心と建物の未来を支えます。',
  area: '東京都・神奈川県（サンプル）',
  address: '会社所在地を設定してください',
  businessHours: '営業時間を設定してください',
  contact: { phone: null, email: null },
  services: [
    { label: 'ROOFTOP', title: '屋上・陸屋根防水', description: '雨や紫外線の影響を受ける屋上に。下地や既存防水層の状態を確認し、適した工法をご提案します。' },
    { label: 'BALCONY', title: 'ベランダ・バルコニー防水', description: 'ひび割れや水たまりが気になる場所に。生活への影響にも配慮して、床面と排水まわりを整えます。' },
    { label: 'SEALING', title: 'シーリング工事', description: '外壁の目地や窓まわりの隙間に。劣化したシーリングを補修し、雨水の浸入を防ぎます。' },
    { label: 'REPAIR', title: '雨漏り調査・補修', description: '雨漏りの原因を現地で確認。状況をご説明し、必要な補修の範囲と進め方を一緒に検討します。' },
  ],
  strengths: [
    { title: '建物に合う工法を選ぶ', description: 'ウレタン・シート・FRPなど、下地や用途に合わせた工法を検討します。' },
    { title: 'わかりやすく説明する', description: '現状、工事内容、費用の内訳をお伝えし、ご納得いただいてから進めます。' },
    { title: '工事後も相談できる', description: '完了時の確認から、その後のメンテナンスのご相談まで対応します。' },
  ],
  projects: [
    { title: 'マンション屋上の防水改修', category: '屋上防水 / サンプル', description: '既存防水層を確認し、下地処理から仕上げまでを行う施工例です。', image: '/images/roof.svg', alt: '屋上防水のイメージイラスト。実際の施工写真ではありません' },
    { title: '戸建てバルコニーの床面補修', category: 'バルコニー防水 / サンプル', description: '床面の劣化や排水まわりの状態に合わせた補修の施工例です。', image: '/images/balcony.svg', alt: 'バルコニー防水のイメージイラスト。実際の施工写真ではありません' },
  ],
  steps: [
    { title: 'お問い合わせ', description: '気になる症状や建物の状況をお聞かせください。' },
    { title: '現地確認・ご提案', description: '現地の状態を確認し、工法・工期・お見積もりをご説明します。' },
    { title: 'ご契約・施工', description: '内容にご納得いただいたうえで、日程を調整して工事を進めます。' },
    { title: '完了確認・アフターケア', description: '仕上がりをご確認いただき、メンテナンス方法をご案内します。' },
  ],
  faqs: [
    { question: 'どのような症状があれば相談すべきですか？', answer: '天井の染み、床面のひび割れ、防水層の膨れ、水たまりなどが目安です。気になる変化があればご相談ください。' },
    { question: '工事期間はどれくらいかかりますか？', answer: '面積や工法、下地の状態によって異なります。天候による影響も含め、現地確認後に予定をご案内します。' },
    { question: '住みながら工事できますか？', answer: '可能な場合が多いですが、施工場所や工法によって利用を制限する期間があります。事前に生活への影響をご説明します。' },
    { question: '見積もりの前に準備するものはありますか？', answer: '建物の図面や過去の工事記録があればご用意ください。お手元にない場合も、まずはご相談いただけます。' },
  ],
} satisfies Company;

export const contact = company.contact as Company['contact'];
