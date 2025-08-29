// Simple client-side i18n helper for static pages
// Default language: English. If the browser language starts with 'ko', switch to Korean.
(function () {
  const detectLocale = () => {
    try {
      const nav = navigator;
      const cand = (nav.languages && nav.languages[0]) || nav.language || 'en';
      return /^ko(\-|_)?/i.test(cand) ? 'ko' : 'en';
    } catch {
      return 'en';
    }
  };

  const locale = detectLocale();

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  };
  const setHTML = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value != null) el.innerHTML = value;
  };
  const setAttr = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el && value != null) el.setAttribute(attr, value);
  };

  const copy = {
    draw: {
      startTitle: {
        en: 'It Starts with a Word. You Finish the Story.',
        ko: '한 단어로 시작해 이야기를 완성하세요.'
      },
      startDesc: {
        en: 'It Starts with a Drop. You Finish the K-Food.',
        ko: '한 방울로 시작해 한식을 완성하세요.'
      },
      startOnline: { en: 'Draw online', ko: '온라인에서 그리기' },
      startUpload: { en: 'Upload an offline drawing', ko: '오프라인에서 그린 그림 업로드' },
      tourSkip: { en: 'Skip', ko: '건너뛰기' },
      tourNext: { en: 'Next', ko: '다음' },
      infoTitle: { en: 'Enter information to upload your artwork', ko: '작품 업로드를 위한 정보 입력' },
      contactNotice: {
        en: 'For event entry, please enter the same contact information used for the oil tasting.',
        ko: '이벤트 참여를 위해 오일 테이스팅 참여 시 기재한 연락처와 동일한 연락처를 입력해 주세요.'
      },
      emailLabel: { en: 'Email', ko: '이메일' },
      emailErr: { en: 'Please enter a valid email.', ko: '유효한 이메일을 입력해주세요.' },
      phoneLabel: { en: 'Phone number', ko: '전화번호' },
      phoneErr: { en: 'Please enter a valid phone number.', ko: '유효한 전화번호를 입력해주세요.' },
      imageLabel: { en: 'Image', ko: '이미지' },
      pickFromGallery: { en: 'Choose from gallery', ko: '갤러리에서 선택' },
      takePhoto: { en: 'Take photo', ko: '사진 촬영' },
      fileNone: { en: 'No file selected', ko: '선택된 파일 없음' },
      fileErr: { en: 'Please select an image.', ko: '이미지를 선택해주세요.' },
      consentTitle: { en: 'Consent for Image Use and Marketing', ko: '이미지 사용 및 마케팅 활용 동의서' },
      consentBody: {
        en: (
          'I fully understand and agree to the following:\n\n' +
          '<br><strong>1. Image Provision and Scope of Use</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>Your uploaded drawing (image) may be used by the Company for marketing and promotional purposes (advertising, online/offline posts, exhibitions, social media, press materials, etc.).</li>' +
          '  <li>The scope includes Canada and overseas, and there is no time limitation.</li>' +
          '</ul>\n\n' +
          '<strong>2. Rights and Copyright</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>You retain the copyright to your drawing, while granting the Company a non-exclusive, perpetual right to use it without additional compensation.</li>' +
          '  <li>The Company may edit, modify, or transform the image if necessary.</li>' +
          '  <li>The Company will not use the image in a way that damages your reputation or credit.</li>' +
          '</ul>\n\n' +
          '<strong>3. Privacy and Compliance</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>This consent complies with Canada\'s PIPEDA and applicable provincial laws.</li>' +
          '  <li>You may withdraw consent at any time in writing; after withdrawal, new uses will cease immediately (withdrawal cannot affect materials already used).</li>' +
          '</ul>\n\n' +
          '<strong>4. Refusal and Limitations</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>You have the right to refuse consent for image use.</li>' +
          '  <li>However, refusal may prevent participation in the event (promotions, giveaways, etc.).</li>' +
          '</ul>\n\n' +
          '<strong>5. Limitation of Liability</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>You guarantee that your image does not infringe third-party copyright or portrait rights, and agree to bear responsibility in case of disputes.</li>' +
          '</ul>\n\n' +
          '<br>I have read and understood the above, and I agree voluntarily.'
        ),
        ko: (
          '본인은 아래의 내용을 충분히 이해하고 동의합니다.\n\n' +
          '<br><strong>1. 이미지 제공 및 사용 범위</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>본인이 업로드한 그림(이미지)은 (주)그이름(이하 "회사")의 마케팅 및 홍보 목적(광고, 온라인·오프라인 게시물, 전시, SNS, 보도자료 등)으로 사용될 수 있습니다.</li>' +
          '  <li>사용 범위는 캐나다 및 해외를 포함한 전 지역이며, 사용 기간에 제한이 없습니다.</li>' +
          '</ul>\n\n' +
          '<strong>2. 권리 포기 및 저작권 관련 사항</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>본인은 해당 그림의 저작권을 보유하되, 회사가 별도의 대가 없이 비독점적·영구적으로 이를 활용할 수 있는 권리를 부여합니다.</li>' +
          '  <li>회사는 필요에 따라 해당 이미지를 수정, 편집, 변형하여 사용할 수 있습니다.</li>' +
          '  <li>단, 회사는 본인의 명예나 신용을 훼손하는 방식으로 이미지를 사용하지 않습니다.</li>' +
          '</ul>\n\n' +
          '<strong>3. 개인정보 보호 및 캐나다 법 준수</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>본 동의서는 캐나다의 개인정보보호법(PIPEDA) 및 관련 주 법률을 준수합니다.</li>' +
          '  <li>본인은 언제든지 서면 요청을 통해 동의를 철회할 수 있으며, 철회 시 이후의 신규 사용은 즉시 중단됩니다. (단, 이미 사용된 자료에 대해서는 철회가 불가능합니다.)</li>' +
          '</ul>\n\n' +
          '<strong>4. 동의 거부 시 불이익 안내</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>본인은 이미지 사용에 대한 동의를 거부할 권리가 있습니다.</li>' +
          '  <li>다만, 동의하지 않을 경우 본 이벤트(프로모션/경품 행사 등) 참여가 불가능함을 이해합니다.</li>' +
          '</ul>\n\n' +
          '<strong>5. 책임 제한</strong>\n' +
          '<ul style="margin:0 0 8px 16px; padding:0; list-style:disc;">' +
          '  <li>본인은 해당 이미지가 제3자의 저작권이나 초상권을 침해하지 않음을 보장하며, 만약 분쟁이 발생할 경우 본인이 책임을 부담합니다.</li>' +
          '</ul>\n\n' +
          '<br>본인은 위 내용을 모두 읽고 이해하였으며, 자발적으로 동의합니다.'
        )
      },
      agreeChk: { en: 'I have read and agree to the above.', ko: '위 동의서 내용을 읽고 동의합니다.' },
      agreeErr: { en: 'Please agree to the consent form.', ko: '동의서에 동의해 주세요.' },
      cancel: { en: 'Cancel', ko: '취소' },
      upload: { en: 'Upload', ko: '업로드' },
      uploading: { en: 'Uploading...', ko: '업로드 중...' },
      uploadedThanks: { en: 'Upload complete. Thank you!', ko: '업로드가 완료되었습니다. 감사합니다!' },
      hourlyDraw: { en: 'Draws every hour', ko: '매 시각 추첨합니다' },
      eventNotice1: { en: 'Oil tasting participation is required to enter the event.', ko: '이벤트 응모는 오일 테이스팅 참여가 필수입니다.' },
      eventNotice2: { en: 'If not participated, please visit the booth.', ko: '미참여 시 부스를 방문해 주세요.' },
      eventNotice3: { en: 'The card and pencil are yours to keep as souvenirs.', ko: '카드와 색연필은 기념으로 가져가세요.' },
      nextDrawCalc: { en: 'Calculating time to next draw...', ko: '다음 추첨까지 계산 중...' },
      viewWinners: { en: 'View winners', ko: '당첨자 확인' },
      goGallery: { en: 'Open gallery', ko: '갤러리로 이동' },
      colorSelectTitle: { en: 'Choose color', ko: '색상 선택' },
      colorSelectDesc: { en: 'Adjust the color as you like', ko: '원하는 색을 조절하세요' },
      tabSwatches: { en: 'Palette', ko: '팔레트' },
      tabSpectrum: { en: 'Spectrum', ko: '스펙트럼' },
      tabSliders: { en: 'Sliders', ko: '슬라이더' },
      pickedColor: { en: 'Picked colors', ko: '선택한 색' },
      reset: { en: 'Reset', ko: '초기화' },
      apply: { en: 'Apply', ko: '적용' },
      close: { en: 'Close', ko: '닫기' },
      drawTitle: { en: 'Drawing with 유', ko: 'Drawing with 유' },
      toolbarTitles: {
        brush: { en: 'Brush', ko: '붓' },
        eraser: { en: 'Eraser', ko: '지우개' },
        undo: { en: 'Undo', ko: '뒤로 가기' },
        redo: { en: 'Redo', ko: '앞으로 가기' },
        clear: { en: 'Clear all', ko: '모두 지우기' },
        upload: { en: 'Upload', ko: '업로드' },
        gallery: { en: 'Go to gallery', ko: '갤러리로 이동' }
      },
      // Tutorial steps
      tourStepBrush: { en: 'Select the brush to start drawing.', ko: '붓을 선택해 그리기를 시작하세요.' },
      tourStepEraser: { en: 'Use the eraser to fix mistakes.', ko: '지우개로 잘못 그린 부분을 지울 수 있어요.' },
      tourStepColor: { en: 'You can choose colors.', ko: '색상 선택이 가능합니다.' },
      tourStepUndo: { en: 'Undo', ko: '되돌리기' },
      tourStepRedo: { en: 'Redo', ko: '다시하기' },
      tourStepClear: { en: 'Clear all', ko: '모두 지우기' },
      tourStepGallery: { en: 'Need inspiration? See others’ artworks.', ko: '영감이 필요하신가요? 다른 참가자의 작품을 볼 수 있어요.' },
      tourStepUpload: { en: 'Tap upload to submit your artwork and enter the event.', ko: '업로드 버튼을 눌러 작품을 업로드하면 이벤트 참여가 완료됩니다.' },
      // Alerts / confirms
      confirmClear: { en: 'Do you want to clear all drawings?', ko: '그려진 내용을 모두 지우시겠습니까?' },
      errorImageGen: { en: 'Failed to generate image', ko: '이미지 생성 실패' },
      alertUploadError: { en: 'An error occurred during upload. Please try again later.', ko: '업로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      alertAgree: { en: 'Please agree to the consent form.', ko: '동의서에 동의해 주세요.' },
      alertEmail: { en: 'Please enter a valid email.', ko: '유효한 이메일을 입력해주세요.' },
      alertPhone: { en: 'Please enter a valid phone number.', ko: '유효한 전화번호를 입력해주세요.' },
      alertPickImage: { en: 'Please select an image to upload.', ko: '업로드할 이미지를 선택해주세요.' }
    },
    gallery: {
      goDraw: { en: 'Go to drawing', ko: '그림 그리러 가기' },
      refresh: { en: 'Refresh', ko: '새로고침' },
      loading: { en: 'Loading…', ko: '로딩 중…' },
      fetching: { en: 'Fetching…', ko: '불러오는 중…' },
      noImages: { en: 'No images to display.', ko: '표시할 이미지가 없습니다.' },
      fetchError: { en: 'Failed to fetch data. Please try again later.', ko: '데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.' }
    },
    winners: {
      nextDrawPill: { en: 'Until next draw —', ko: '다음 추첨까지 —' },
      noneByHour: { en: 'No winners for this hour.', ko: '해당 시간대 당첨자가 없습니다.' },
      refresh: { en: 'Refresh', ko: '새로고침' },
      autoRefreshHint: { en: 'Auto refreshes every minute.', ko: '1분마다 자동 새로고침됩니다.' },
      localTimeHint: { en: 'Times are shown in your local timezone.', ko: '표시 시간은 브라우저 로컬 시간대입니다.' },
      jumpLabel: { en: 'See winners below', ko: '아래에 당첨자 보러가기' },
      jumpTitle: { en: 'See winners below', ko: '아래에 당첨자 보러가기' },
      anonymous: { en: 'Anonymous', ko: '익명' },
      andOthers: (n, lang) => (lang === 'ko' ? `\n${n}명 추가 응모자` : `\n${n} additional entrants`),
      soon: { en: 'Soon', ko: '곧 추첨' },
      remainFmt: (m, s, lang) => (lang === 'ko' ? `${m}분 ${String(s).padStart(2,'0')}초` : `${m}m ${String(s).padStart(2,'0')}s`),
      nextDrawPrefix: { en: 'Until next draw', ko: '다음 추첨까지' },
      networkError: { en: 'Network error', ko: '네트워크 오류' },
      faq: {
        ko: [
          { q: 'Q1. 어떻게 참여하나요?', a: '현장에서 테이스팅 플레이트를 가져가 QR을 스캔하면 자동으로 추첨에 참여됩니다.' },
          { q: 'Q2. 어린이도 참여할 수 있나요?', a: '네, 남녀노소 누구나 참여 가능합니다. 단, 당첨자 구분을 위해 참가자별로 고유한 이메일과 휴대폰 번호가 필요합니다. 미성년자의 경우 상품 수령은 보호자 동반을 권장합니다.' },
          { q: 'Q3. 알레르기가 있어도 참여할 수 있나요?', a: '참깨 알레르기가 있으신 경우 오일 테이스팅 참여는 권장하지 않습니다.' },
          { q: 'Q4. 참여하는 데 비용이 있나요?', a: '아니요, 무료로 참여 가능합니다.' },
          { q: 'Q5. 상품은 무엇인가요?', a: '<strong>정준호 양심참기름 138, 167, 178 중 가장 선호하는 오일 1병(CAD 20 상당)</strong>을 받으실 수 있습니다. 오일 테이스팅 단계에서 가장 선호하는 오일을 지정하면, 그 오일이 당첨 상품으로 주어집니다.' },
          { q: 'Q6. 당첨은 어떻게 되나요?', a: '매 정각마다 오일별 3명씩, 총 9명이 뽑힙니다. <em>※ 단, 미수령자가 발생할 경우 실제 수량은 변동될 수 있습니다.</em>' },
          { q: 'Q7. 당첨되지 못했다면, 재도전 기회가 있나요?', a: (
            '네! <a href="https://app.jjhoil.com/draw" target="_blank" rel="noopener">“유” 미션</a>에 참여하면 동일 회차에서도 추가 추첨권을 얻을 수 있고, 낙첨 시 다음 회차에도 재도전이 가능합니다.⚠️ 단, 한 번 당첨되신 분은 같은 회차에서 유 미션을 참여하셔도 중복 당첨은 불가합니다.' +
            '<ul>' +
            '  <li>11:17 오일 테이스팅 + 11:25 그림 2장 제출 → 12시 추첨: 기본 1장 + 추가 2장 = 총 3장</li>' +
            '  <li>12:00 낙첨 후 12:13 그림 2장 제출 → 13시 추첨: 총 2장</li>' +
            '  <li>12:00 낙첨 후 13:31 그림 3장 제출 → 14시 추첨: 총 3장</li>' +
            '</ul>'
          ) },
          { q: 'Q8. 당첨 수령은 어떻게 하나요? 수령기한이 있나요?', a: (
            '당첨자는 이메일 혹은 winners 페이지에서 확인 후, ⚠️ 30분 이내 부스에서 수령해야 합니다. ' +
            '부득이할 경우 <a href="https://app.jjhoil.com/tasting-note/claim" target="_blank" rel="noopener">claim 폼</a>으로 유예 신청 또는 양보가 가능하며, 신청 없이 30분이 지나면 당첨은 취소됩니다. ' +
            '저희가 해외에서 운영하는 관계로 수령에 제한이 있을 수 있으니 양해 부탁드립니다.'
          ) },
          { q: 'Q9. 상품을 집으로 배송해 주시나요?', a: '아니요, 상품은 현장에서만 수령 가능합니다.' },
          { q: 'Q10. 당첨 후 30분 이내 미수령 시 취소되거나, 이전 회차 당첨자가 없으면?', a: '해당 상품은 자동으로 다음 추첨 회차에 추가됩니다.' },
          { q: 'Q11. 이벤트는 어떻게 진행하나요?', a: (
            '셀프 참여 이벤트입니다. 직원 안내 없이 자유롭게 진행하세요.' +
            '<ul>' +
            '  <li>오일 테이스팅: 테이스팅 플레이트를 직접 가져가서 참여하세요. 반납할 필요가 없으며, 플레이트는 나중에 파스타량 측정기로 활용할 수 있습니다.</li>' +
            '  <li>그림 그리기: ‘유’ 카드 1장과 색연필 1개를 직접 챙겨 그림을 제출하세요. 카드는 부스에 반납하지 않고 기념으로 가져가실 수 있습니다.</li>' +
            '</ul>'
          ) },
          { q: 'Q12. 제품은 어디서 구매할 수 있나요?', a: '현재는 한국에서만 판매 중이며, 캐나다 및 북미 지역 판매를 준비하고 있습니다. 이번 이벤트는 시장 조사와 현지 고객분들의 피드백을 듣기 위한 자리이니 많은 의견 부탁드립니다. <a href="mailto:theireum@gmail.com">theireum@gmail.com</a>' }
        ],
        en: [
          { q: 'Q1. How can I join?', a: 'Pick up a tasting plate, scan the QR code, and you’re in the draw.' },
          { q: 'Q2. Can children join?', a: 'Yes, all ages are welcome. However, each entry requires a unique email and phone number per participant. For minors, we recommend claiming prizes with a guardian.' },
          { q: 'Q3. Can I join if I have allergies?', a: 'If you have sesame allergies, tasting is not recommended.' },
          { q: 'Q4. Is there any cost to join?', a: 'No, it’s free to join. (Free entry — no purchase required.)' },
          { q: 'Q5. What is the prize?', a: 'Winners receive one bottle of Jung Junho’s Conscience Sesame Oil — 138, 167, or 178 (approx. CAD 20 value). During tasting, you can choose your favorite oil, and if you win, that will be your prize.' },
          { q: 'Q6. How are winners selected?', a: 'Every hour, 3 winners per oil (9 in total). Note: The actual number of prizes may vary if there are unclaimed winners.' },
          { q: 'Q7. If I don’t win, can I try again?', a: (
            'Yes! By joining the <a href="https://app.jjhoil.com/draw" target="_blank" rel="noopener">“유” mission</a>, you can get extra tickets in the same round, and even if you lose, you’ll have another chance in the next round. ⚠️ Please note: Once you win, you cannot win again, even if you join the “유” mission.' +
            '<ul>' +
            '  <li>11:17 oil tasting + 11:25 2 drawings → 12:00 draw: 3 tickets (1 base + 2 extra)</li>' +
            '  <li>12:00 not selected, then 12:13 2 drawings → 13:00 draw: 2 tickets</li>' +
            '  <li>12:00 not selected, then 13:31 3 drawings → 14:00 draw: 3 tickets</li>' +
            '</ul>'
          ) },
          { q: 'Q8. How do I claim my prize? Is there a deadline to claim the prize?', a: (
            'Winners are announced via email or the winners page. Claim at the booth within 30 minutes ⚠️. ' +
            'If not possible, use the <a href="https://app.jjhoil.com/tasting-note/claim" target="_blank" rel="noopener">claim form</a> for a grace period or to pass it on. ' +
            'Unclamed after 30 minutes⚠️, your win will be canceled. As we are hosting from abroad, there may be limits — thank you for your understanding.'
          ) },
          { q: 'Q9. Do you ship prizes to my home?', a: 'No, prizes must be claimed on-site only.' },
          { q: 'Q10. What if a prize is unclaimed within 30 minutes, or no winner appears?', a: 'The prize will automatically be added to the next draw.' },
          { q: 'Q11. How does the event work?', a: (
            'This is a self-service event. No staff guidance — please join freely.' +
            '<ul>' +
            '  <li>Oil tasting mission: Pick up a tasting plate yourself. No need to return it — later it doubles as a pasta measurer.</li>' +
            '  <li>Express with 유 mission: Grab one “유” card and a colored pencil, then submit your drawing. You don’t have to return the card — feel free to keep it as a souvenir.</li>' +
            '</ul>'
          ) },
          { q: 'Q12. Where can I buy your products?', a: 'Currently available only in Korea. We are preparing for sales in Canada and North America, and this event is part of our market research. We’d love to hear your feedback! <a href="mailto:theireum@gmail.com">theireum@gmail.com</a>' }
        ]
      }
    },
    tasting: {
      loading: { en: 'Loading…', ko: '로딩 중…' },
      noteTitle: (name, lang) => (lang === 'ko' ? (name ? `${name}의 오일 테이스팅 노트` : '오일 테이스팅 노트') : (name ? `${name}\'s Oil Tasting Note` : 'Oil Tasting Note')),
      noneSelected: { en: 'No selections', ko: '선택된 음식 없음' },
      reason: { en: 'Reason: ', ko: '이유: ' },
      oil138: { en: 'Sesame Oil 138', ko: '참기름 138' },
      oil167: { en: 'Sesame Oil 167', ko: '참기름 167' },
      oil178: { en: 'Sesame Oil 178', ko: '참기름 178' },
      allDelicious: { en: 'They\'re all delicious 😋', ko: '모두 맛있을 거예요😋' },
      waitingWithRetry: (retry, secs, lang) => (lang === 'ko' ? `데이터를 기다리는 중… (재시도 ${retry}, ${secs}초 후)` : `Waiting for data… (retry ${retry}, in ${secs}s)`) 
    }
  };

  function applyOnDrawPage() {
    // Title
    setText('title', copy.draw.drawTitle[locale]);
    // Start screen
    const start = document.getElementById('startScreen');
    if (start) {
      const titleEl = start.querySelector('.title');
      const descEl = start.querySelector('.desc');
      if (titleEl) titleEl.textContent = copy.draw.startTitle[locale];
      if (descEl) descEl.textContent = copy.draw.startDesc[locale];
      setText('#startOnlineBtn', copy.draw.startOnline[locale]);
      setText('#startUploadBtn', copy.draw.startUpload[locale]);
    }
    // Tour buttons
    setText('#tourSkipBtn', copy.draw.tourSkip[locale]);
    setText('#tourNextBtn', copy.draw.tourNext[locale]);
    // Info modal
    setText('#infoTitle', copy.draw.infoTitle[locale]);
    const noticeSpan = document.querySelector('#contactNotice span');
    if (noticeSpan) noticeSpan.textContent = copy.draw.contactNotice[locale];
    setText('label[for="infoEmail"]', copy.draw.emailLabel[locale]);
    setText('#emailErr', copy.draw.emailErr[locale]);
    setText('label[for="infoPhone"]', copy.draw.phoneLabel[locale]);
    setText('#phoneErr', copy.draw.phoneErr[locale]);
    setText('#pickFromGalleryBtn', copy.draw.pickFromGallery[locale]);
    setText('#takePhotoBtn', copy.draw.takePhoto[locale]);
    setText('#fileInfo', copy.draw.fileNone[locale]);
    setText('#fileErr', copy.draw.fileErr[locale]);
    const imageLabel = document.querySelector('#fileRow label');
    if (imageLabel) imageLabel.textContent = copy.draw.imageLabel[locale];
    // Consent (prefer IDs if present for robustness)
    const consentTitle = document.querySelector('#consentTitle') || document.querySelector('#infoModal .dialog > div[style*="margin-bottom:6px"]');
    if (consentTitle) consentTitle.textContent = copy.draw.consentTitle[locale];
    const consentBody = document.querySelector('#consentBody') || document.querySelector('#infoModal .dialog > div[style*="white-space:pre-wrap"]');
    if (consentBody) consentBody.innerHTML = copy.draw.consentBody[locale];
    setText('label[for="agreeChk"]', copy.draw.agreeChk[locale]);
    setText('#agreeErr', copy.draw.agreeErr[locale]);
    setText('#infoCancel', copy.draw.cancel[locale]);
    setText('#infoOk', copy.draw.upload[locale]);
    // Uploading modal
    const upTitle = document.querySelector('#uploadModal .dialog > div');
    if (upTitle) upTitle.textContent = copy.draw.uploading[locale];
    // Success modal
    const successTitle = document.querySelector('#successModal .dialog > div');
    if (successTitle) successTitle.textContent = copy.draw.uploadedThanks[locale];
    setText('#successModal .success-note-title', copy.draw.hourlyDraw[locale]);
    const noteExtra = document.querySelector('#successModal .success-layer > div:nth-child(2)');
    if (noteExtra) noteExtra.innerHTML = `${copy.draw.eventNotice1[locale]}<br>${copy.draw.eventNotice2[locale]}<br>${copy.draw.eventNotice3[locale]}`;
    setText('#nextDrawCountdown', copy.draw.nextDrawCalc[locale]);
    setText('#successGoText', copy.draw.viewWinners[locale]);
    setText('#successGalleryText', copy.draw.goGallery[locale]);
    // Color modal
    setText('#colorTitle', copy.draw.colorSelectTitle[locale]);
    const colorDesc = document.querySelector('#colorTitle + div');
    if (colorDesc) colorDesc.textContent = copy.draw.colorSelectDesc[locale];
    setText('#tabBtnSwatches', copy.draw.tabSwatches[locale]);
    setText('#tabBtnSpectrum', copy.draw.tabSpectrum[locale]);
    setText('#tabBtnSliders', copy.draw.tabSliders[locale]);
    setText('.picked-title', copy.draw.pickedColor[locale]);
    setText('#clearPicked', copy.draw.reset[locale]);
    setText('#colorCancel', copy.draw.cancel[locale]);
    setText('#colorApply', copy.draw.apply[locale]);
    // Toolbar titles/aria
    setAttr('#brushBtn', 'title', copy.draw.toolbarTitles.brush[locale]);
    setAttr('#eraserBtn', 'title', copy.draw.toolbarTitles.eraser[locale]);
    setAttr('#undoBtn', 'title', copy.draw.toolbarTitles.undo[locale]);
    setAttr('#redoBtn', 'title', copy.draw.toolbarTitles.redo[locale]);
    setAttr('#clearBtn', 'title', copy.draw.toolbarTitles.clear[locale]);
    setAttr('#saveBtn', 'title', copy.draw.toolbarTitles.upload[locale]);
    setAttr('#galleryBtn', 'title', copy.draw.toolbarTitles.gallery[locale]);
  }

  function applyOnGalleryPage() {
    setText('a.btn[href*="../index.html"]', copy.gallery.goDraw[locale]);
    setText('#refreshBtn', copy.gallery.refresh[locale]);
    const countLabel = document.getElementById('countLabel');
    if (countLabel && /불러오는 중|Fetching|로딩/.test(countLabel.textContent || '')) {
      countLabel.textContent = copy.gallery.fetching[locale];
    }
    document.querySelectorAll('.card-footer span:first-child').forEach(() => {}); // keep numbers only
  }

  function applyOnWinnersPage() {
    setText('#next-draw-pill', copy.winners.nextDrawPill[locale]);
    setText('#winners-empty', copy.winners.noneByHour[locale]);
    setText('#refresh-btn', copy.winners.refresh[locale]);
    setText('.refresh .hint', copy.winners.autoRefreshHint[locale]);
    const hint2 = document.querySelectorAll('.hint')[1];
    if (hint2) hint2.textContent = copy.winners.localTimeHint[locale];

    // Render FAQ in detected locale
    const faqWrap = document.getElementById('faq');
    if (faqWrap && Array.isArray(copy.winners.faq[locale])) {
      faqWrap.innerHTML = copy.winners.faq[locale]
        .map(item => (
          '<details>' +
            `<summary>${item.q}</summary>` +
            `<div class="faq-content">${item.a}</div>` +
          '</details>'
        ))
        .join('');
      faqWrap.hidden = false;
    }

    // Set jump button labels
    const jumpBtn = document.getElementById('jump-to-winners');
    if (jumpBtn) {
      jumpBtn.setAttribute('title', copy.winners.jumpTitle[locale]);
      const labelSpan = jumpBtn.querySelector('.label');
      if (labelSpan) labelSpan.textContent = copy.winners.jumpLabel[locale];
    }
  }

  function applyOnTastingResultPage() {
    const loader = document.querySelector('.loader-text');
    if (loader) loader.textContent = copy.tasting.loading[locale];
  }

  function applyI18N() {
    // Document language
    document.documentElement.setAttribute('lang', locale);
    // Per page hooks
    const path = location.pathname;
    if (/\/draw\/index\.html$|\/draw\/$/i.test(path)) applyOnDrawPage();
    if (/\/draw\/gallery\//i.test(path)) applyOnGalleryPage();
    if (/(\/tasting-note\/winners\/|\/winner\/)/i.test(path)) applyOnWinnersPage();
    if (/\/tasting-note\/result\//i.test(path)) applyOnTastingResultPage();
  }

  // Expose utilities for inline scripts to use
  window.I18N = {
    locale,
    copy,
    t: (group, key, ...args) => {
      const item = copy[group]?.[key];
      if (typeof item === 'function') return item(...args, locale);
      return item ? item[locale] : undefined;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyI18N);
  } else {
    applyI18N();
  }
})();


