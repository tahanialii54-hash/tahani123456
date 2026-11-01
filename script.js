/* ===================================================
   كلاسات الوراثة مع تطبيق (Polymorphism)
   =================================================== */

class Person {
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        return `• الكائن: Person\n• الاسم: ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    getDetails() {
        return `• الكائن: Student (موروث من الأب)\n• الاسم: ${this.name}\n• التخصص: ${this.major}`;
    }
}

class GraduateStudent extends Student {
    constructor(name, major, thesis) {
        super(name, major);
        this.thesis = thesis;
    }
    getDetails() {
        return `• الكائن: GraduateStudent (وراثة متتالية)\n• الاسم (الأب): ${this.name}\n• التخصص (الابن): ${this.major}\n• بحث التخرج (الحفيد): ${this.thesis}`;
    }
}

/* ===================================================
   الدوال التفاعلية والتحقق الناعم
   =================================================== */

function goToPage2() {
    const nameInput = document.getElementById('parentName');
    const errorMsg = document.getElementById('errorPage1');
    const name = nameInput.value.trim();

    if (!name) {
        errorMsg.style.display = 'block';
        nameInput.style.borderColor = '#ef4444';
        return;
    }

    localStorage.setItem('parentName', name);
    window.location.href = 'page2.html';
}

function executeStudent() {
    const majorSelect = document.getElementById('childMajor');
    const errorMsg = document.getElementById('errorPage2');
    const major = majorSelect.value;

    if (!major) {
        errorMsg.style.display = 'block';
        majorSelect.style.borderColor = '#ef4444';
        return;
    }

    localStorage.setItem('childMajor', major);
    const name = localStorage.getItem('parentName');
    
    const studentObj = new Student(name, major);

    const outputDiv = document.getElementById('outputLevel2');
    outputDiv.style.display = 'block';
    outputDiv.innerText = "=== نتيجة كلاس الابن (Polymorphism) ===\n" + studentObj.getDetails();
}

function goToPage3() {
    const major = document.getElementById('childMajor').value;
    if (!major) {
        alert('الرجاء اختيار التخصص وإنشاء كائن الابن أولاً!');
        return;
    }
    window.location.href = 'page3.html';
}

function executeGraduate() {
    const thesisInput = document.getElementById('gradThesis');
    const errorMsg = document.getElementById('errorPage3');
    const thesis = thesisInput.value.trim();

    if (!thesis) {
        errorMsg.style.display = 'block';
        thesisInput.style.borderColor = '#ef4444';
        return;
    }

    const name = localStorage.getItem('parentName');
    const major = localStorage.getItem('childMajor');

    const gradObj = new GraduateStudent(name, major, thesis);

    const outputDiv = document.getElementById('outputLevel3');
    outputDiv.style.display = 'block';
    
    outputDiv.innerHTML = `
        <strong>=== التقرير الشامل للوراثة المتتالية ===</strong>
        <table class="summary-table">
            <tr><th>المستوى البرمجي</th><th>الخصائص والبيانات</th></tr>
            <tr><td>كلاس الأب (Person)</td><td>${name}</td></tr>
            <tr><td>كلاس الابن (Student)</td><td>${major}</td></tr>
            <tr><td>كلاس الحفيد (GraduateStudent)</td><td>${thesis}</td></tr>
        </table>
    `;
}

function startOver() {
    localStorage.clear();
    window.location.href = 'page1.html';
}