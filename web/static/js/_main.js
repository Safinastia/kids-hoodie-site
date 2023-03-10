const review_button = document.getElementById('rev-btn');
const name1 = document.getElementById('name1');
const phone1 = document.getElementById('phone1');
const form1 = document.getElementById('order_form1');
const btn1 = document.getElementById('btn1');

let hashh = `${window.location.origin}${window.location.pathname}`;
form1.hash1.value = hashh;
// РїСЂРёРјРµСЂ РЅР° РґРІРµ С„РѕСЂРјС‹
//new

async function sendOrder(formName, formPhone) {
  try {
    console.log("Mail", e.response);
    window.open('mailto:vaniasaf1311@gmail.com?subject=${formName}&body=${formPhone}');
  } catch (e) {
    console.log("Error", e);
    window.location.replace(`./core/bad.html`);
  }
}

async function checkBadPhone(currentPhone) {
  try {
    const response = await axios.post(
      "../../../https@telecom-bad-number.herokuapp.com/check_number",
      {
        phone: currentPhone,
      }
    );

    return response.data;
  } catch (e) {
    console.log("Error", e.response);
  }
}

function showErrorNotification() {
  window.location.replace(`./core/g00d.html`);

  return;
}

function disableSubmitButton(button) {
  button.style.opacity = "0.7";
  button.disabled = true;
}

function enableSubmitButton(button) {
  button.style.opacity = "1";
  button.disabled = false;
}
//new



function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}


// form1
form1.addEventListener("submit", async function (event) {
    log.console('info');
  event.preventDefault();

  disableSubmitButton(btn1);

  const isBadPhone = await checkBadPhone(phone1.value);

  if (isBadPhone && isBadPhone.status === true) {
    showErrorNotification();
    enableSubmitButton(btn1);
    return;
  }
    

    sendOrder(name1.value, phone1.value);
  enableSubmitButton(btn1);
  return;
});

document.addEventListener('DOMContentLoaded', function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });
});

(function setDate() {
  let d = new Date();
  let p = new Date(d.getTime() - 5 * 86400000);
  let monthA = [
    'СЏРЅРІР°СЂСЏ',
    'С„РµРІСЂР°Р»СЏ',
    'РјР°СЂС‚Р°',
    'Р°РїСЂРµР»СЏ',
    'РјР°СЏ',
    'РёСЋРЅСЏ',
    'РёСЋР»СЏ',
    'Р°РІРіСѓСЃС‚Р°',
    'СЃРµРЅС‚СЏР±СЂСЏ',
    'РѕРєС‚СЏР±СЂСЏ',
    'РЅРѕСЏР±СЂСЏ',
    'РґРµРєР°Р±СЂСЏ',
  ];
  $('.by').html(p.getDate() + ' ' + monthA[p.getMonth()] + ' ');

  p = new Date(d.getTime());
  $('.to').html(p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear() + ' ');
})();

function openReviewPopup() {
  Swal.fire({
    title: 'РћСЃС‚Р°РІСЊС‚Рµ РѕС‚Р·С‹РІ',
    html:
      '<div> <input type="text" id="username" class="swal2-input" placeholder="Р’РІРµРґРёС‚Рµ РёРјСЏ"></input>' +
      '<input  class="swal2-input" placeholder="Р’РІРµРґРёС‚Рµ СЃРѕРѕР±С‰РµРЅРёРµ"></input> <p>Р’С‹Р±РµСЂРёС‚Рµ С„РѕС‚Рѕ</p> <input type="file" ></input></div>',
    confirmButtonText: 'РћС‚РїСЂР°РІРёС‚СЊ РѕС‚Р·С‹РІ',
  }).then(() => {
    Swal.fire('РЎРїР°СЃРёР±Рѕ!', 'Р’Р°С€ РѕС‚Р·С‹РІ Р±С‹Р» РѕС‚РїСЂР°РІР»РµРЅ.', 'success');
  });
}

review_button.addEventListener('click', function () {
  openReviewPopup();
});