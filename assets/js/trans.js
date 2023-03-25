const translations = {
    en: {
        home: "Home",
        selectLanguage: "Select a language",
        english: "En",
        arabic: "Ar",
        start: "Start Project",
        breadCrumbHome:"project name",
        breadCrumbBranchArow:" > ",
        breadCrumbBranch:"service name ",
        breadCrumbBlog:"blog",
        breadCrumbBlogName:"blog name ",
        footerLinksTitle: "CATEGORIES ",
        footerLinks: "Footer Link",
        footerDesc: "A Small River Named Duden Flows By Their Place And Supplies It With The Necessary Regelialia.",
        OURSERVICES: "OUR SERVICES",
        OURSERVICESDesc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.        ",
        contact: "Contact us",
        contactDesc: "Sign-Up For Our Newsletter To Keep Up To Date With Our Community ",
        Name: "Name",
        Email: "Email",
        Phone: "Phone",
        ChooseService: "Choose Service",
        serviceName: "service Name",
        yourMassage: " Enter your massage",
        CheckMe: "Check Me",
        send: "send",
    },
    ar: {
        home: " الرئيسية",
        about: "من نحن",
        selectLanguage: "إختر لغة",
        english: "الانجليزية",
        arabic: "العربية",
        start: "ابدأ مشروعك",
        breadCrumbHome:"اسم المشروع",
        breadCrumbBranchArow:" > ",
        breadCrumbBranch:"اسم الخدمة ",
        breadCrumbBlog:"المدونة",
        breadCrumbBlogName:"اسم التدوينة ",
        footerLinksTitle: "الروابط ",
        footerLinks: "رابط دعم",
        footerDesc: "البومة للحلول الرقمية نفكر خارج الصندوق لكننا أسرع ونوفر خدمه متميزه ",
        OURSERVICES: "خدماتنا",
        OURSERVICESDesc: "     الخدمات التي يمكننا مساعدتك فيها بالخدمات التي يمكننا مساعدتك بها مجموعه من المبرمجين ومحللي النظم والمصممين والمسوقين اجتمعنا لتقديم افضل الخدمات: من اجلك انت الخدمات التي يمكننا مساعدتك فيها بالخدمات التي يمكننا مساعدتك بها مجموعه من المبرمجين ومحللي النظم والمصممين والمسوقين اجتمعنا لتقديم افضل الخدمات: من اجلك انت ",
        contact: "تواصل معنا",
        contactDesc: "الاشتراك في النشرة الإخبارية لدينا لمواكبة أحدث مع مجتمعنا",
        Email: "بريد إلكتروني",
        Phone: "هاتف",
        Name: "الأسم",
        ChooseService: "اختر الخدمة",
        serviceName: "أسم الخدمة",
        CheckMe: " اضغط للتحقق",
        yourMassage: "اكتب رسالتك",
        send: "ارسال",

    },
};



//  ======== translate=========
// languageSelector function
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});
//   btn EventListener
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);

    
});

//   translate core function
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.innerHTML = translations[language][translationKey];
    });

    // lang realted styles
    if (language === "ar") {
        document.dir = "rtl";
        document.body.style.textAlign = 'right';
        document.body.style.fontFamily = 'Tajawal';
        document.getElementById("select_ar").selected=true;

    } else {
        document.dir = "ltr"
        document.body.style.textAlign = 'left';
        document.body.style.fontFamily = 'Poppins';

    };

};
