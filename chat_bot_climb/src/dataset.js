const defaultDataset = {
  init: {
    // defaultDataset.init => answers: Array(4)
    answers: [
      // defaultDataset.init.answers
      { content: "もっと強くなりたい", nextId: "more_strong" }, // defaultDataset.init.answers[1]
      {
        content: "クライミング仲間を探している",
        nextId: "looking_for"
      },
      { content: "オススメのクライミングジムを知りたい", nextId: "gym" },
      { content: "クライマーの彼氏が欲しい", nextId: "dating" }
    ],
    question: "こんにちは！何かお手伝いできることはありますか？" // dataset[pageId].question   pageId = "init" の時
  },
  more_strong: {
    answers: [
      { content: "強くなるための食事法が知りたい", nextId: "food" },
      { content: "オススメのトレーニングを知りたい", nextId: "training" },
      { content: "メンタルを鍛えたい", nextId: "mental" },
      { content: "その他", nextId: "other_jobs" }
    ],
    question: "改善できることは沢山あるはず。何から始めましょうか？"
  },
  food: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "食事のアドバイスですね。コチラからお問い合わせできます。"
  },
  training: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "トレーニングについてですね。コチラからお問い合わせできます。"
  },
  mental: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "メンタルの強化ですね。コチラからお問い合わせできます。"
  },
  other_jobs: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "その他についてですね。コチラからお問い合わせできます。"
  },
  looking_for: {
    answers: [
      {
        content: "お気に入りの岩場を探す",
        nextId: "https://www.climbing-net.com/iwaba/"
      },
      { content: "オススメのクライミングジムを知りたい", nextId: "gym" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "岩場やジムで一緒に登る仲間を探してみよう♪"
  },
  gym: {
    answers: [
      { content: "大会に出るのもオススメです", nextId: "community_activity" },
      {
        content: "住んでる場所から近いジムを探そう",
        nextId: "https://www.climbing-net.com/gym/list/"
      },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "将来的には一駅一つのジムができると言われているよ。"
  },
  community_activity: {
    answers: [
      {
        content: "まずは大会の雰囲気を見てみよう",
        nextId: "https://www.youtube.com/channel/UCnjTK_woY8DUgXeVQLgug9A"
      },
      {
        content: "大会に参加したい",
        nextId: "https://www.jma-climbing.org/competition/"
      },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question:
      "オススメはノースフェイスカップかな。\nいろんなレベルの選手が楽しく登ってるよ。"
  },
  dating: {
    answers: [
      { content: "DMする", nextId: "https://twitter.com/" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "まずは一緒にランチでもいかがですか？DMしてください😘"
  }
};

export default defaultDataset;
