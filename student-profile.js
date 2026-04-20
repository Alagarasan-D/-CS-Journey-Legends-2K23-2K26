(function () {
  const studentPhotos = {
    "kabilanaarakan@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776267030/abi_soe96s.jpg",
    "aadheeshwark@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263270/adheshwaran_xpkfzb.jpg",
    "alag123arasan@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263250/alagu_n3ttjv.jpg",
    "masterbhrth@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263249/bharathkumar_knpo1s.jpg",
    "boobalanbn24@gmail.com":"https://res.cloudinary.com/dilsx2np3/image/upload/q_auto/f_auto/v1776491456/IMG-20250221-WA0006_ezxzcf.jpg",
    "dharshan130206@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263251/dharshan_koj8h2.jpg",
    "sridharunkumar@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263288/dharunkumar_t8u2rv.jpg",
    "dinesh14006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263260/dineshkumar_ia4nr0.jpg",
    "dgowrishankar81@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263256/gowrishankar_jvauax.jpg",
    "20gowtham06@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263250/gowtham_ikdfxw.jpg",
    "jagathesh45891@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263257/jagadhesh_wp9ybh.jpg",
    "jaijaikanth873@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/jaikanth_dprupw.jpg",
    "karanrajkanagaraj148@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263260/karanraj_grcwcs.jpg",
    "karthikarthiperiyasamy@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/karthickraja_q8iqfg.jpg",
    "monishram002@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/monishram_jt0xet.png",
    "nandha456kumar@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263264/nandhakumar_xevm7f.jpg",
    "nithish.nst@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263270/nithish_q8r80j.jpg",
    "massajith601@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263276/periyannan_tnxjbh.png",
    "prasanna202k@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/prasana_t8tdzu.jpg",
    "prakash9342244019@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263272/prakshraj_cncyby.jpg",
    "pravinmanoj200022006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263272/pravinkumar_kduchn.jpg",
    "rajasanthi0709@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263273/raja_kjzq4k.jpg",
    "rathnavel829@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263273/rathinavel_gzxgcv.jpg",
    "sarravanakumarmariappan@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263282/rithisabinav_azntlf.jpg",
    "sanjai9487771308@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263275/sanjai_pz5su9.jpg",
    "gksaran985@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263279/saran_sscyfx.jpg",
    "saravanansekar005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263276/saravanan_l39q6v.webp",
    "shandrua2005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263277/shandru_qxizih.jpg",
    "duraisamyvrr@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263279/subash_mkavg3.jpg",
    "sundharkgf@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263279/sundheresan_bdlmbu.jpg",
    "tamilmani9361934449@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263282/tamilmani_xndnsf.jpg",
    "thirutm80@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/t_a/thirumalai_ufenvt.jpg",
    "vetrimurugavel2006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263282/vetrivel_jxnqbz.webp",
    "vigneshvinesh2005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776263287/vignesh_y8ydwi.jpg",
    "sureshvijaya2005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/Anusya_sboe5u.jpg",
    "deepikap18062006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776356898/deepika_sfwywn.jpg",
    "www.dharshinidharshini2007@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357394/dharishini_ntxkkd.jpg",
    "kumarmbks12345@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357167/divya_khzldc.jpg",
    "gopikav032005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/gopika_2_crb3us.jpg",
    "vsaker52@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/harini_a1e9lj.jpg",
    "jamunaselvakumar9080@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357258/jamuna_y5bgmb.jpg",
    "j9898757@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357172/janani_glbt0j.jpg",
    "alexjames21857@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/jasmine_udsv4w.jpg",
    "jeevajothirjothi678@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/jeevajothi_cjivnd.jpg",
    "kanmaninatesan205@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/kanmani_yvumjq.jpg",
    "kannankrishnaveni667@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357263/krishnaveni_tswtbe.jpg",
    "mathumithakanagaraj58@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357294/Maheswari_mccri1.jpg",
    "manishaa24112005@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357280/manisha_yf4lto.jpg",
    "monikav28072006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/Monika_bmqxek.jpg",
    "senthilkumarkarthika007@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357267/navya_zbjpxl.jpg",
    "pavibpavi466@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357275/pavithara_yiqyww.webp",
    "prasannasbsc@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357303/prasanna_dtkhww.jpg",
    "rakshitharathinam2006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/rakshitha_nvz84g.jpg",
    "sandhiyasureshkumar273@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357326/santhiya_wkzjyo.jpg",
    "sangeethakannan8489@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/sangetha_tsdaln.jpg",
    "sangeethavanic986519@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357314/sangeethavanii_byuqzk.jpg",
    "saranyas052006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357326/sarniya_rd94oz.jpg",
    "sathyasaminathan624@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/sathaya_fu0yli.jpg",
    "msowmiya987@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357324/Sowmiyaa_p44whl.jpg",
    "sowmiyavishnu869@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357292/IMG_7459_wxn2vo.jpg",
    "vishnumuthuupm1978@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/c_auto,g_north,h_521,w_490/c_auto,g_north,h_1286,w_1308/swathi_gjsxjz.jpg",
    "thirishac9@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357363/thirisha_dwska3.jpg",
    "vasanthishivan2006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357367/vasanthi_bxpk5c.jpg",
    "onum2illai@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776582824/cs_gplmlk.jpg",
    "gramrasi@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776579087/ram_jrhr70.jpg",
    "snadhiya10062006@gmail.com":"https://res.cloudinary.com/deatzzrsw/image/upload/v1776357281/nathiya_cmtlkw.jpg"
  };

  function getInitials(name, email) {
    const n = (name || '').trim();
    if (n) {
      const parts = n.split(/\s+/).filter(Boolean);
      if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      return n.slice(0, 2).toUpperCase();
    }
    const e = (email || '').split('@')[0].replace(/[._]/g, ' ').trim();
    if (!e) return '👤';
    const parts = e.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return e.slice(0, 2).toUpperCase();
  }

  function renderProfileBadge(buttonId, email, name, guestText = '👤') {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    const key = (email || '').toLowerCase().trim();
    const photo = studentPhotos[key];
    if (photo) {
      btn.innerHTML = `<img src="${photo}" alt="${name || 'Profile'}" class="student-profile-badge-photo">`;
      return;
    }

    btn.textContent = email || name ? getInitials(name, email) : guestText;
  }

  window.STUDENT_PHOTOS = studentPhotos;
  window.getStudentPhoto = function (email) {
    return studentPhotos[(email || '').toLowerCase().trim()] || '';
  };
  window.renderProfileBadge = renderProfileBadge;
})();
