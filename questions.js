  const answersList = document.querySelectorAll('ol.answers li');

  answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

  // 正しい答え
  const correctAnswers = {
    question1: 'C',
    question2: 'B',
    question3: 'D',
    question4: 'D',
  };

  function checkClickedAnswer(event){
    // クリックされた答えの要素(liタグの要素)
    const clickedAnswerElement  = event.currentTarget;
    // 選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    
    // 正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];

    // メッセージを入れる変数を用意
    let message;
    // カラーコードを入れる変数を用意
    let answerColorCode;

 
    // 答えが正しいか判定(=== ⇦ 比較する意味)
    if (selectedAnswer === correctAnswer) {
      // 正しい答えだった時
      message = '正解です！おめでとう...!';
      answerColorCode = '';
    } else {
      // 間違えた答えだった時
      message = 'ざんねん！不正解です...!';
      answerColorCode = '#f05959';
    }
    alert(message);

    // 色を変更(間違っていた時だけ色が変わる)
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('#section-correct-answer').style.display = 'block';
  }

